'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AccessDenied } from '@/components/ui/access-denied'
import { StatusBadge } from '@/components/ui/status-badge'
import { PlatformChip } from '@/components/ui/platform-chip'
import { mockWorkers } from '@/lib/mock-data'
import type { Worker } from '@/lib/types'
import { Download, Filter } from 'lucide-react'

export default function TrackerPage() {
  const { hasAccess } = useAuth()
  const [workers, setWorkers] = useState<Worker[]>(mockWorkers)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  if (!hasAccess('tracker')) {
    return <AccessDenied />
  }

  const filteredWorkers = selectedStatus
    ? workers.filter((w) => w.status === selectedStatus)
    : workers

  const handleStatusChange = (workerId: string, newStatus: Worker['status']) => {
    setWorkers(
      workers.map((w) => (w.id === workerId ? { ...w, status: newStatus } : w))
    )
  }

  const handlePlatformChange = (workerId: string, newPlatform: Worker['platform']) => {
    setWorkers(
      workers.map((w) => (w.id === workerId ? { ...w, platform: newPlatform } : w))
    )
  }

  const handleExport = () => {
    const csv = [
      ['ID', 'Name', 'Status', 'Platform', 'Active Orders', 'Total Earnings'],
      ...workers.map((w) => [
        w.workerId,
        w.name,
        w.status,
        w.platform,
        w.activeOrders,
        w.totalEarnings,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'workers-tracker.csv'
    a.click()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tracker</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Real-time worker status monitoring and management
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

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedStatus(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            selectedStatus === null
              ? 'bg-ops text-white'
              : 'border border-border-subtle text-muted-foreground hover:bg-muted'
          }`}
        >
          All ({workers.length})
        </button>
        {['online', 'offline', 'idle', 'busy'].map((status) => {
          const count = workers.filter((w) => w.status === status).length
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
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Name</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">ID</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Platform</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Active Orders
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Earnings</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Last Seen</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {filteredWorkers.map((worker) => (
              <tr
                key={worker.id}
                className="bg-card hover:bg-muted/50 transition-colors"
              >
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium text-foreground">{worker.name}</p>
                    <p className="text-xs text-muted-foreground">{worker.email}</p>
                  </div>
                </td>
                <td className="px-4 py-3 text-foreground font-mono text-xs">
                  {worker.workerId}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <select
                      value={worker.status}
                      onChange={(e) =>
                        handleStatusChange(
                          worker.id,
                          e.target.value as Worker['status']
                        )
                      }
                      className="rounded bg-transparent border border-border-subtle px-2 py-1 text-sm"
                    >
                      <option value="online">Online</option>
                      <option value="offline">Offline</option>
                      <option value="idle">Idle</option>
                      <option value="busy">Busy</option>
                    </select>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <select
                    value={worker.platform}
                    onChange={(e) =>
                      handlePlatformChange(
                        worker.id,
                        e.target.value as Worker['platform']
                      )
                    }
                    className="rounded bg-transparent border border-border-subtle px-2 py-1 text-sm"
                  >
                    <option value="Platform A">Platform A</option>
                    <option value="Platform B">Platform B</option>
                    <option value="Platform C">Platform C</option>
                  </select>
                </td>
                <td className="px-4 py-3 text-foreground">{worker.activeOrders}</td>
                <td className="px-4 py-3 text-foreground font-medium">
                  ${worker.totalEarnings.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  {new Date(worker.lastSeen).toLocaleTimeString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
