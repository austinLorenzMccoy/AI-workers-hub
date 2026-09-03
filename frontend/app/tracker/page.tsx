'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/lib/toast-context'
import { AccessDenied } from '@/components/ui/access-denied'
import {
  fetchPlatforms,
  fetchTrackerByPlatform,
  fetchPlatformTaskColumns,
  updateTrackerField,
  updateTaskStatus,
  insertTrackerRow,
  deleteTrackerRow,
  fetchAllUsers,
} from '@/lib/db'
import type { Platform, WorkerTrackerRow, PlatformTaskColumn, WarningLevel, YNStatus, AppUser } from '@/types'
import { Download, Upload, Loader2, Search, UserPlus, X, Trash2 } from 'lucide-react'
import { ImportDialog, IMPORT_CONFIGS } from '@/components/import/import-dialog'

const WARNING_OPTIONS: WarningLevel[] = ['🟢 Clear', '🟡 Minor', '🔴 Serious', '⚫ Banned', '➖ None']
const STATUS_OPTIONS: YNStatus[] = ['✅ Yes', '❌ No', '⏳ Pending', '🔄 In Progress', '➖ N/A']

export default function TrackerPage() {
  const { hasAccess, isLoading: authLoading } = useAuth()
  const { toast } = useToast()
  const [platforms, setPlatforms] = useState<Platform[]>([])
  const [selectedPlatform, setSelectedPlatform] = useState<string>('')
  const [workers, setWorkers] = useState<WorkerTrackerRow[]>([])
  const [taskColumns, setTaskColumns] = useState<PlatformTaskColumn[]>([])
  const [managers, setManagers] = useState<AppUser[]>([])
  const [loading, setLoading] = useState(true)
  const [tableLoading, setTableLoading] = useState(false)
  const [showImport, setShowImport] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [warningFilter, setWarningFilter] = useState<string>('All')
  const [managerFilter, setManagerFilter] = useState<string>('All')

  useEffect(() => {
    fetchPlatforms().then((data) => {
      setPlatforms(data)
      if (data.length > 0) setSelectedPlatform(data[0].slug)
      setLoading(false)
    })
    fetchAllUsers().then((users) => {
      setManagers(users.filter((u) => u.role === 'manager'))
    })
  }, [])

  const loadTrackerData = useCallback(async (slug: string) => {
    setTableLoading(true)
    const [rows, cols] = await Promise.all([
      fetchTrackerByPlatform(slug),
      fetchPlatformTaskColumns(slug),
    ])
    setWorkers(rows)
    setTaskColumns(cols)
    setTableLoading(false)
  }, [])

  useEffect(() => {
    if (selectedPlatform) loadTrackerData(selectedPlatform)
  }, [selectedPlatform, loadTrackerData])

  if (authLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-600 border-t-blue-500" />
      </div>
    )
  }
  if (!hasAccess('tracker')) {
    return <AccessDenied />
  }

  const handleFieldUpdate = async (rowId: string, field: string, value: string) => {
    const { error } = await updateTrackerField(rowId, field, value)
    if (!error) {
      setWorkers((prev) =>
        prev.map((w) => (w.id === rowId ? { ...w, [field]: value } : w))
      )
    }
  }

  const handleTaskStatusUpdate = async (rowId: string, columnKey: string, value: string) => {
    const { error } = await updateTaskStatus(rowId, columnKey, value)
    if (!error) {
      setWorkers((prev) =>
        prev.map((w) =>
          w.id === rowId
            ? { ...w, task_statuses: { ...w.task_statuses, [columnKey]: value as YNStatus } }
            : w
        )
      )
    }
  }

  const handleExport = () => {
    window.open(`/api/export/worker_tracker?platform=${selectedPlatform}`, '_blank')
  }

  const handleDelete = async (rowId: string) => {
    if (!window.confirm('Delete this tracker entry? This cannot be undone.')) return
    const { error } = await deleteTrackerRow(rowId)
    if (error) { toast(`Could not delete entry: ${error}`, 'error'); return }
    setWorkers((prev) => prev.filter((w) => w.id !== rowId))
    toast('Entry deleted', 'success')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  const activePlatform = platforms.find((p) => p.slug === selectedPlatform)

  const managerLabel = (managerId: string | null) => {
    if (!managerId) return 'Unassigned'
    const m = managers.find((x) => x.id === managerId)
    return m?.display_name ?? m?.email ?? 'Unassigned'
  }

  const filteredWorkers = workers.filter((worker) => {
    const searchText = searchQuery.toLowerCase()
    const matchesSearch =
      !searchText ||
      worker.worker_name.toLowerCase().includes(searchText) ||
      worker.owner_name.toLowerCase().includes(searchText) ||
      (worker.email ?? '').toLowerCase().includes(searchText) ||
      (worker.platform_id_code ?? '').toLowerCase().includes(searchText)

    const matchesWarning = warningFilter === 'All' || worker.warning_level === warningFilter
    const matchesManager =
      managerFilter === 'All' ||
      (managerFilter === 'Unassigned' ? !worker.manager_id : worker.manager_id === managerFilter)

    return matchesSearch && matchesWarning && matchesManager
  })

  const warningSummary = WARNING_OPTIONS.map((level) => ({
    level,
    count: workers.filter((worker) => worker.warning_level === level).length,
  }))

  const handleAddWorker = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    if (!activePlatform) return

    const defaultTaskStatuses = Object.fromEntries(
      taskColumns.map((column) => [column.column_key, '⏳ Pending' as YNStatus])
    )

    const { id, error } = await insertTrackerRow({
      platform_id: activePlatform.id,
      owner_name: (fd.get('owner_name') as string) || '',
      manager_id: (fd.get('manager_id') as string) || null,
      worker_name: (fd.get('worker_name') as string) || '',
      email: (fd.get('email') as string) || null,
      apple_connect_pw: (fd.get('apple_connect_pw') as string) || null,
      platform_id_code: (fd.get('platform_id_code') as string) || null,
      payoneer_linked: '⏳ Pending',
      warning_level: '➖ None',
      sow_done: '⏳ Pending',
      le_cert: '➖ N/A',
      task_statuses: defaultTaskStatuses,
      notes: (fd.get('notes') as string) || null,
    })

    if (!error && id) {
      setShowForm(false)
      loadTrackerData(selectedPlatform)
    }
  }

  return (
    <>
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Signal Grid</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            The day-to-day board: where each worker stands right now — task progress, warning
            status, and which manager is handling them. Update this as work happens.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="flex items-center gap-2 rounded-lg bg-ops px-4 py-2 text-sm font-medium text-white hover:bg-ops-dark transition-colors"
          >
            {showForm ? <X className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
            {showForm ? 'Cancel' : 'Add Worker'}
          </button>
          <button
            onClick={() => setShowImport(true)}
            className="flex items-center gap-2 rounded-lg border border-ops/20 bg-ops/5 px-4 py-2 text-sm font-medium text-ops hover:bg-ops/10 transition-colors"
          >
            <Upload className="h-4 w-4" />
            Import
          </button>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 rounded-lg border border-border-subtle bg-card px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>

      {showForm && activePlatform && (
        <form onSubmit={handleAddWorker} className="space-y-4 rounded-lg border border-ops/20 bg-ops/5 p-6">
          <h3 className="font-semibold text-foreground">Add New Worker</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Worker Name *</label>
              <input name="worker_name" required className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Owner Name *</label>
              <input name="owner_name" required className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Manager</label>
              <select name="manager_id" defaultValue="" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50">
                <option value="">Unassigned</option>
                {managers.map((m) => (
                  <option key={m.id} value={m.id}>{m.display_name ?? m.email}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
              <input name="email" type="email" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Platform ID</label>
              <input name="platform_id_code" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Password / Apple Connect</label>
              <input name="apple_connect_pw" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <label className="mb-1 block text-sm font-medium text-foreground">Notes</label>
              <textarea name="notes" rows={2} className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
          </div>
          <button type="submit" className="rounded-lg bg-ops px-4 py-2 text-sm font-medium text-white hover:bg-ops-dark transition-colors">
            Save Worker
          </button>
        </form>
      )}

      {/* Platform tabs */}
      <div className="flex flex-wrap gap-2">
        {platforms.map((p) => (
          <button
            key={p.slug}
            onClick={() => setSelectedPlatform(p.slug)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedPlatform === p.slug
                ? 'text-white'
                : 'border border-border-subtle text-muted-foreground hover:bg-muted'
            }`}
            style={
              selectedPlatform === p.slug
                ? { backgroundColor: p.color_hex }
                : undefined
            }
          >
            {p.icon} {p.label}
          </button>
        ))}
      </div>

      <div className="space-y-4 rounded-lg border border-border-subtle bg-card p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search workers..."
              className="w-full rounded-lg border border-border-subtle bg-background pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={managerFilter}
              onChange={(e) => setManagerFilter(e.target.value)}
              className="rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50"
            >
              <option value="All">All managers</option>
              <option value="Unassigned">Unassigned</option>
              {managers.map((m) => (
                <option key={m.id} value={m.id}>{m.display_name ?? m.email}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setWarningFilter('All')}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${warningFilter === 'All' ? 'bg-ops text-white' : 'border border-border-subtle text-muted-foreground hover:bg-muted'}`}
          >
            Warning summary ({workers.length})
          </button>
          {warningSummary.map(({ level, count }) => (
            <button
              key={level}
              onClick={() => setWarningFilter(level)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${warningFilter === level ? 'bg-ops text-white' : 'border border-border-subtle text-muted-foreground hover:bg-muted'}`}
            >
              {level} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Data table */}
      {tableLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : filteredWorkers.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-border-subtle bg-card py-12">
          <p className="text-muted-foreground">
            {searchQuery || warningFilter !== 'All' || managerFilter !== 'All'
              ? 'No workers match the current search and filters.'
              : `No workers tracked for ${activePlatform?.label ?? 'this platform'} yet.`}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border-subtle">
          <table className="w-full text-sm">
            <thead className="border-b border-border-subtle bg-card">
              <tr>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Worker</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Owner</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Manager</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Warning</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Payoneer</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">SOW</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">LE Cert</th>
                {taskColumns.map((col) => (
                  <th key={col.column_key} className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap text-xs">
                    {col.column_label}
                  </th>
                ))}
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {filteredWorkers.map((worker) => (
                <tr key={worker.id} className="bg-card hover:bg-muted/50 transition-colors">
                  <td className="px-3 py-2">
                    <div>
                      <Link href={`/worker/${worker.id}`} className="font-medium text-ops hover:underline text-xs">{worker.worker_name}</Link>
                      {worker.email && (
                        <p className="text-[10px] text-muted-foreground">{worker.email}</p>
                      )}
                      <input
                        type="text"
                        defaultValue={worker.worker_name}
                        onBlur={(e) => {
                          if (e.target.value && e.target.value !== worker.worker_name) {
                            handleFieldUpdate(worker.id, 'worker_name', e.target.value)
                          }
                        }}
                        className="mt-1 w-28 rounded bg-transparent border border-border-subtle px-1 py-0.5 text-[10px]"
                      />
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      defaultValue={worker.owner_name}
                      onBlur={(e) => {
                        if (e.target.value !== worker.owner_name) {
                          handleFieldUpdate(worker.id, 'owner_name', e.target.value)
                        }
                      }}
                      className="w-24 rounded bg-transparent border border-border-subtle px-1 py-0.5 text-xs"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <select
                      value={worker.manager_id ?? ''}
                      onChange={(e) => handleFieldUpdate(worker.id, 'manager_id', e.target.value)}
                      className="rounded bg-transparent border border-border-subtle px-1 py-0.5 text-xs w-28"
                    >
                      <option value="">Unassigned</option>
                      {managers.map((m) => (
                        <option key={m.id} value={m.id}>{m.display_name ?? m.email}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2">
                    <select
                      value={worker.warning_level}
                      onChange={(e) => handleFieldUpdate(worker.id, 'warning_level', e.target.value)}
                      className="rounded bg-transparent border border-border-subtle px-1 py-0.5 text-xs w-24"
                    >
                      {WARNING_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2">
                    <select
                      value={worker.payoneer_linked}
                      onChange={(e) => handleFieldUpdate(worker.id, 'payoneer_linked', e.target.value)}
                      className="rounded bg-transparent border border-border-subtle px-1 py-0.5 text-xs w-24"
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2">
                    <select
                      value={worker.sow_done}
                      onChange={(e) => handleFieldUpdate(worker.id, 'sow_done', e.target.value)}
                      className="rounded bg-transparent border border-border-subtle px-1 py-0.5 text-xs w-24"
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2">
                    <select
                      value={worker.le_cert}
                      onChange={(e) => handleFieldUpdate(worker.id, 'le_cert', e.target.value)}
                      className="rounded bg-transparent border border-border-subtle px-1 py-0.5 text-xs w-24"
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </td>
                  {taskColumns.map((col) => (
                    <td key={col.column_key} className="px-3 py-2">
                      <select
                        value={worker.task_statuses?.[col.column_key] ?? '⏳ Pending'}
                        onChange={(e) => handleTaskStatusUpdate(worker.id, col.column_key, e.target.value)}
                        className="rounded bg-transparent border border-border-subtle px-1 py-0.5 text-xs w-24"
                      >
                        {STATUS_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </td>
                  ))}
                  <td className="px-3 py-2">
                    <button
                      onClick={() => handleDelete(worker.id)}
                      className="rounded p-1 hover:bg-red-500/10 transition-colors"
                      title="Delete entry"
                    >
                      <Trash2 className="h-3.5 w-3.5 text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>

      {showImport && activePlatform && (
        <ImportDialog
          config={{ ...IMPORT_CONFIGS.worker_tracker, platformId: activePlatform.id }}
          onComplete={() => { setShowImport(false); loadTrackerData(selectedPlatform) }}
          onClose={() => setShowImport(false)}
        />
      )}
    </>
  )
}
