'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AccessDenied } from '@/components/ui/access-denied'
import { StatusBadge } from '@/components/ui/status-badge'
import { PlatformChip } from '@/components/ui/platform-chip'
import { mockWorkers } from '@/lib/mock-data'
import type { Worker } from '@/lib/types'
import { Search, UserPlus } from 'lucide-react'

export default function RegistryPage() {
  const { hasAccess } = useAuth()
  const [workers, setWorkers] = useState<Worker[]>(mockWorkers)
  const [searchQuery, setSearchQuery] = useState('')

  if (!hasAccess('registry')) {
    return <AccessDenied />
  }

  const handlePlatformChange = (workerId: string, newPlatform: Worker['platform']) => {
    setWorkers(
      workers.map((w) => (w.id === workerId ? { ...w, platform: newPlatform } : w))
    )
  }

  const filteredWorkers = workers.filter(
    (w) =>
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.workerId.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Worker Registry</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Complete roster of all registered workers
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-ops px-4 py-2 text-sm font-medium text-white hover:bg-ops-dark transition-colors">
          <UserPlus className="h-4 w-4" />
          Add Worker
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by name, email, or ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-border-subtle bg-card pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50 focus:border-ops"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredWorkers.map((worker) => (
          <div
            key={worker.id}
            className="rounded-lg border border-border-subtle bg-card p-4 hover:border-ops/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-foreground">{worker.name}</h3>
                <p className="text-xs text-muted-foreground">{worker.workerId}</p>
              </div>
              <StatusBadge status={worker.status} />
            </div>

            <div className="space-y-2 text-sm mb-4">
              <p className="text-muted-foreground">{worker.email}</p>
              <div className="flex items-center gap-2">
                <select
                  value={worker.platform}
                  onChange={(e) =>
                    handlePlatformChange(
                      worker.id,
                      e.target.value as Worker['platform']
                    )
                  }
                  className="rounded border border-border-subtle bg-transparent px-2 py-1 text-sm"
                >
                  <option value="Platform A">Platform A</option>
                  <option value="Platform B">Platform B</option>
                  <option value="Platform C">Platform C</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-border-subtle pt-3 text-xs">
              <div>
                <p className="text-muted-foreground">Active Orders</p>
                <p className="font-semibold text-foreground">{worker.activeOrders}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Total Earnings</p>
                <p className="font-semibold text-foreground">${worker.totalEarnings.toLocaleString()}</p>
              </div>
            </div>

            {worker.assignedTo && (
              <div className="mt-3 rounded bg-muted/50 px-2 py-1.5">
                <p className="text-xs text-muted-foreground">Assigned to</p>
                <p className="text-xs font-medium text-foreground">{worker.assignedTo}</p>
              </div>
            )}

            {worker.notes && (
              <div className="mt-3 rounded bg-blue-500/5 border border-blue-500/20 px-2 py-1.5">
                <p className="text-xs text-blue-700 dark:text-blue-400">{worker.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredWorkers.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-border-subtle bg-card py-12">
          <p className="text-muted-foreground">No workers found matching your search</p>
        </div>
      )}
    </div>
  )
}
