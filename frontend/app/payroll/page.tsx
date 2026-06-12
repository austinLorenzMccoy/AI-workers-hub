'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AccessDenied } from '@/components/ui/access-denied'
import { fetchPlatforms, fetchPayrollByPlatform } from '@/lib/db'
import type { Platform, PayrollRow } from '@/types'
import { Download, Loader2 } from 'lucide-react'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export default function PayrollPage() {
  const { hasAccess } = useAuth()
  const [platforms, setPlatforms] = useState<Platform[]>([])
  const [selectedPlatform, setSelectedPlatform] = useState<string>('')
  const [entries, setEntries] = useState<PayrollRow[]>([])
  const [loading, setLoading] = useState(true)
  const [tableLoading, setTableLoading] = useState(false)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
  const [selectedMonth, setSelectedMonth] = useState<string>('')

  useEffect(() => {
    fetchPlatforms().then((data) => {
      setPlatforms(data)
      if (data.length > 0) setSelectedPlatform(data[0].slug)
      setLoading(false)
    })
  }, [])

  const loadPayroll = useCallback(async (slug: string, year?: number, month?: string) => {
    setTableLoading(true)
    const data = await fetchPayrollByPlatform(slug, year, month || undefined)
    setEntries(data)
    setTableLoading(false)
  }, [])

  useEffect(() => {
    if (selectedPlatform) loadPayroll(selectedPlatform, selectedYear, selectedMonth)
  }, [selectedPlatform, selectedYear, selectedMonth, loadPayroll])

  if (!hasAccess('payroll')) {
    return <AccessDenied />
  }

  const activePlatform = platforms.find((p) => p.slug === selectedPlatform)

  const totals = entries.reduce(
    (acc, entry) => ({
      tasks: acc.tasks + entry.tasks_done,
      pay: acc.pay + Number(entry.pay_usd),
    }),
    { tasks: 0, pay: 0 }
  )

  const handleExport = () => {
    window.open(`/api/export/payroll?platform=${selectedPlatform}`, '_blank')
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
          <h1 className="text-3xl font-bold text-foreground">Ledger Room</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Worker payroll tracking and management
          </p>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 rounded-lg border border-border-subtle bg-card px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border-subtle bg-card p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Total Records
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">{entries.length}</p>
        </div>
        <div className="rounded-lg border border-border-subtle bg-card p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Total Tasks Done
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">{totals.tasks.toLocaleString()}</p>
        </div>
        <div className="rounded-lg border border-border-subtle bg-card p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Total Pay (USD)
          </p>
          <p className="mt-2 text-2xl font-bold text-green-600 dark:text-green-400">
            ${totals.pay.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

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
            style={selectedPlatform === p.slug ? { backgroundColor: p.color_hex } : undefined}
          >
            {p.icon} {p.label}
          </button>
        ))}
      </div>

      {/* Year & Month filters */}
      <div className="flex gap-3">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="rounded-lg border border-border-subtle bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50"
        >
          {Array.from({ length: 6 }, (_, i) => 2025 + i).map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="rounded-lg border border-border-subtle bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50"
        >
          <option value="">All Months</option>
          {MONTHS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      {tableLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : entries.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-border-subtle bg-card py-12">
          <p className="text-muted-foreground">
            No payroll records for {activePlatform?.label ?? 'this platform'}{selectedMonth ? ` in ${selectedMonth}` : ''} {selectedYear}.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border-subtle">
          <table className="w-full text-sm">
            <thead className="border-b border-border-subtle bg-card">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Worker</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Account Code</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Period</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Tasks Done</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Pay (USD)</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {entries.map((entry) => (
                <tr key={entry.id} className="bg-card hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{entry.worker_name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{entry.account_code}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{entry.month} {entry.year}</td>
                  <td className="px-4 py-3 text-right font-medium text-foreground">{entry.tasks_done}</td>
                  <td className="px-4 py-3 text-right font-semibold text-green-600 dark:text-green-400">
                    ${Number(entry.pay_usd).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground max-w-[200px] truncate">
                    {entry.notes ?? '—'}
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
