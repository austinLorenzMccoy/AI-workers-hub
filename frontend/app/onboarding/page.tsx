'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AccessDenied } from '@/components/ui/access-denied'
import {
  fetchPlatforms,
  fetchOnboardingByPlatform,
  insertOnboardingRow,
  updateOnboardingRow,
  deleteOnboardingRow,
} from '@/lib/db'
import type { Platform, OnboardingRow, ApplicationStatus } from '@/types'
import { Plus, Loader2, X, Eye, EyeOff, Trash2 } from 'lucide-react'

const STATUS_OPTIONS: ApplicationStatus[] = [
  '⏳ Pending', '✅ Accepted', '❌ Rejected', '🔄 In Review', '⚫ Withdrawn',
]

export default function OnboardingPage() {
  const { hasAccess, permissions } = useAuth()
  const [platforms, setPlatforms] = useState<Platform[]>([])
  const [selectedPlatform, setSelectedPlatform] = useState<string>('')
  const [rows, setRows] = useState<OnboardingRow[]>([])
  const [loading, setLoading] = useState(true)
  const [tableLoading, setTableLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [visiblePasswords, setVisiblePasswords] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetchPlatforms().then((data) => {
      setPlatforms(data)
      if (data.length > 0) setSelectedPlatform(data[0].slug)
      setLoading(false)
    })
  }, [])

  const loadData = useCallback(async (slug: string) => {
    setTableLoading(true)
    const data = await fetchOnboardingByPlatform(slug)
    setRows(data)
    setTableLoading(false)
  }, [])

  useEffect(() => {
    if (selectedPlatform) loadData(selectedPlatform)
  }, [selectedPlatform, loadData])

  if (!hasAccess('onboarding')) {
    return <AccessDenied />
  }

  const activePlatform = platforms.find((p) => p.slug === selectedPlatform)

  const filteredRows = selectedStatus
    ? rows.filter((r) => r.application_status === selectedStatus)
    : rows

  const togglePassword = (id: string) => {
    setVisiblePasswords((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    if (!activePlatform) return

    const { error } = await insertOnboardingRow({
      platform_id: activePlatform.id,
      applicant_name: fd.get('applicant_name') as string,
      email: (fd.get('email') as string) || null,
      password: (fd.get('password') as string) || null,
      phone: (fd.get('phone') as string) || null,
      country: (fd.get('country') as string) || null,
      referral: (fd.get('referral') as string) || null,
      application_status: '⏳ Pending',
      date_applied: (fd.get('date_applied') as string) || new Date().toISOString().split('T')[0],
      date_resolved: null,
      notes: (fd.get('notes') as string) || null,
    })

    if (!error) {
      setShowForm(false)
      loadData(selectedPlatform)
    }
  }

  const handleStatusChange = async (rowId: string, newStatus: string) => {
    const isResolved = newStatus === '✅ Accepted' || newStatus === '❌ Rejected' || newStatus === '⚫ Withdrawn'
    const updates: Record<string, unknown> = {
      application_status: newStatus,
    }
    if (isResolved) {
      updates.date_resolved = new Date().toISOString().split('T')[0]
    }
    const { error } = await updateOnboardingRow(rowId, updates as any)
    if (!error) {
      setRows((prev) =>
        prev.map((r) =>
          r.id === rowId
            ? {
                ...r,
                application_status: newStatus as ApplicationStatus,
                ...(isResolved ? { date_resolved: new Date().toISOString().split('T')[0] } : {}),
              }
            : r
        )
      )
    }
  }

  const handleDelete = async (rowId: string) => {
    if (!window.confirm('Delete this application record?')) return
    const { error } = await deleteOnboardingRow(rowId)
    if (!error) {
      setRows((prev) => prev.filter((r) => r.id !== rowId))
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Recruit Desk</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track client/worker application onboarding across platforms
          </p>
        </div>
        {permissions?.canEditOrders && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 rounded-lg bg-ops px-4 py-2 text-sm font-medium text-white hover:bg-ops-dark transition-colors"
          >
            {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {showForm ? 'Cancel' : 'New Application'}
          </button>
        )}
      </div>

      {/* Create form */}
      {showForm && (
        <form
          onSubmit={handleCreate}
          className="space-y-4 rounded-lg border border-ops/20 bg-ops/5 p-6"
        >
          <h3 className="font-semibold text-foreground">New Onboarding Application</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Applicant Name *</label>
              <input name="applicant_name" required className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input name="email" type="email" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Password</label>
              <input name="password" type="text" placeholder="Platform account password" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
              <input name="phone" type="tel" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Country</label>
              <input name="country" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Referred By</label>
              <input name="referral" placeholder="Who referred this person?" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Date Applied</label>
              <input name="date_applied" type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Notes</label>
              <input name="notes" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
          </div>
          <button type="submit" className="rounded-lg bg-ops px-4 py-2 text-sm font-medium text-white hover:bg-ops-dark transition-colors">
            Submit Application
          </button>
        </form>
      )}

      {/* Platform tabs */}
      <div className="flex flex-wrap gap-2">
        {platforms.map((p) => (
          <button
            key={p.slug}
            onClick={() => { setSelectedPlatform(p.slug); setSelectedStatus(null) }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedPlatform === p.slug
                ? 'text-white'
                : 'border border-border-subtle text-muted-foreground hover:bg-muted'
            }`}
            style={selectedPlatform === p.slug ? { backgroundColor: p.color_hex } : undefined}
          >
            {p.icon} {p.label}
          </button>
        ))}
      </div>

      {/* Status filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedStatus(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            selectedStatus === null
              ? 'bg-ops text-white'
              : 'border border-border-subtle text-muted-foreground hover:bg-muted'
          }`}
        >
          All ({rows.length})
        </button>
        {STATUS_OPTIONS.map((status) => {
          const count = rows.filter((r) => r.application_status === status).length
          if (count === 0) return null
          return (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                selectedStatus === status
                  ? 'bg-ops text-white'
                  : 'border border-border-subtle text-muted-foreground hover:bg-muted'
              }`}
            >
              {status} ({count})
            </button>
          )
        })}
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {STATUS_OPTIONS.map((status) => {
          const count = rows.filter((r) => r.application_status === status).length
          return (
            <div key={status} className="rounded-lg border border-border-subtle bg-card p-3 text-center">
              <p className="text-lg font-bold text-foreground">{count}</p>
              <p className="text-xs text-muted-foreground">{status}</p>
            </div>
          )
        })}
      </div>

      {/* Table */}
      {tableLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : filteredRows.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-border-subtle bg-card py-12">
          <p className="text-muted-foreground">
            {selectedStatus
              ? 'No applications with this status'
              : `No onboarding records for ${activePlatform?.label ?? 'this platform'} yet.`}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border-subtle">
          <table className="w-full text-sm">
            <thead className="border-b border-border-subtle bg-card">
              <tr>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Applicant</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Email</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Password</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Phone</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Country</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Referral</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Status</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Applied</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Resolved</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap">Notes</th>
                <th className="px-3 py-3 text-left font-medium text-muted-foreground whitespace-nowrap"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {filteredRows.map((row) => (
                <tr key={row.id} className="bg-card hover:bg-muted/50 transition-colors">
                  <td className="px-3 py-2 font-medium text-foreground whitespace-nowrap">{row.applicant_name}</td>
                  <td className="px-3 py-2 text-xs text-muted-foreground">{row.email ?? '—'}</td>
                  <td className="px-3 py-2">
                    {row.password ? (
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-mono text-foreground">
                          {visiblePasswords.has(row.id) ? row.password : '••••••••'}
                        </span>
                        <button
                          onClick={() => togglePassword(row.id)}
                          className="p-0.5 hover:bg-muted rounded transition-colors"
                        >
                          {visiblePasswords.has(row.id) ? (
                            <EyeOff className="h-3 w-3 text-muted-foreground" />
                          ) : (
                            <Eye className="h-3 w-3 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-xs text-muted-foreground">{row.phone ?? '—'}</td>
                  <td className="px-3 py-2 text-xs text-foreground">{row.country ?? '—'}</td>
                  <td className="px-3 py-2 text-xs text-foreground">{row.referral ?? '—'}</td>
                  <td className="px-3 py-2">
                    {permissions?.canEditOrders ? (
                      <select
                        value={row.application_status}
                        onChange={(e) => handleStatusChange(row.id, e.target.value)}
                        className="rounded bg-transparent border border-border-subtle px-1 py-0.5 text-xs w-28"
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-sm">{row.application_status}</span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-xs text-muted-foreground whitespace-nowrap">
                    {row.date_applied ? new Date(row.date_applied).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-3 py-2 text-xs text-muted-foreground whitespace-nowrap">
                    {row.date_resolved ? new Date(row.date_resolved).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-3 py-2 text-xs text-muted-foreground max-w-[150px] truncate">
                    {row.notes ?? '—'}
                  </td>
                  <td className="px-3 py-2">
                    {permissions?.canEditOrders && (
                      <button
                        onClick={() => handleDelete(row.id)}
                        className="p-1 rounded hover:bg-red-500/10 transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5 text-red-500" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
