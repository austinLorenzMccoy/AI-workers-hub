'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AccessDenied } from '@/components/ui/access-denied'
import { StatusBadge } from '@/components/ui/status-badge'
import { mockPayroll } from '@/lib/mock-data'
import type { PayrollEntry } from '@/lib/types'
import { Download, Filter } from 'lucide-react'

export default function PayrollPage() {
  const { hasAccess } = useAuth()
  const [entries] = useState<PayrollEntry[]>(mockPayroll)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  if (!hasAccess('payroll')) {
    return <AccessDenied />
  }

  const filteredEntries = selectedStatus
    ? entries.filter((e) => e.status === selectedStatus)
    : entries

  const totals = filteredEntries.reduce(
    (acc, entry) => ({
      totalEarnings: acc.totalEarnings + entry.totalEarnings,
      totalDeductions: acc.totalDeductions + entry.totalDeductions,
      netPay: acc.netPay + entry.netPay,
      totalOrders: acc.totalOrders + entry.ordersCompleted,
    }),
    { totalEarnings: 0, totalDeductions: 0, netPay: 0, totalOrders: 0 }
  )

  const handleExport = () => {
    const csv = [
      [
        'Worker ID',
        'Worker Name',
        'Period',
        'Total Earnings',
        'Deductions',
        'Net Pay',
        'Orders',
        'Status',
      ],
      ...filteredEntries.map((e) => [
        e.workerId,
        e.workerName,
        e.period,
        e.totalEarnings,
        e.totalDeductions,
        e.netPay,
        e.ordersCompleted,
        e.status,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'payroll.csv'
    a.click()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Payroll</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Worker payment tracking and management
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border-subtle bg-card p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Total Earnings
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">
            ${totals.totalEarnings.toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border border-border-subtle bg-card p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Total Deductions
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">
            ${totals.totalDeductions.toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border border-border-subtle bg-card p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Net Pay
          </p>
          <p className="mt-2 text-2xl font-bold text-green-600 dark:text-green-400">
            ${totals.netPay.toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border border-border-subtle bg-card p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Total Orders
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {totals.totalOrders}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedStatus(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            selectedStatus === null
              ? 'bg-ops text-white'
              : 'border border-border-subtle text-muted-foreground hover:bg-muted'
          }`}
        >
          All ({entries.length})
        </button>
        {['pending', 'approved', 'paid'].map((status) => {
          const count = entries.filter((e) => e.status === status).length
          return (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedStatus === status
                  ? 'bg-ops text-white'
                  : 'border border-border-subtle text-muted-foreground hover:bg-muted'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
            </button>
          )
        })}
      </div>

      <div className="overflow-x-auto rounded-lg border border-border-subtle">
        <table className="w-full text-sm">
          <thead className="border-b border-border-subtle bg-card">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Worker
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Period
              </th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                Earnings
              </th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                Deductions
              </th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                Net Pay
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Orders
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {filteredEntries.map((entry) => (
              <tr
                key={entry.id}
                className="bg-card hover:bg-muted/50 transition-colors"
              >
                <td className="px-4 py-3">
                  <p className="font-medium text-foreground">{entry.workerName}</p>
                  <p className="text-xs text-muted-foreground">{entry.workerId}</p>
                </td>
                <td className="px-4 py-3 text-sm text-foreground">
                  {entry.period}
                </td>
                <td className="px-4 py-3 text-right font-medium text-foreground">
                  ${entry.totalEarnings.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right font-medium text-foreground">
                  ${entry.totalDeductions.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-green-600 dark:text-green-400">
                  ${entry.netPay.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-foreground">
                  {entry.ordersCompleted}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={entry.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredEntries.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-border-subtle bg-card py-12">
          <p className="text-muted-foreground">No payroll entries found</p>
        </div>
      )}
    </div>
  )
}
