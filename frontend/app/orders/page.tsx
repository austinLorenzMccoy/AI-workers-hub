'use client'

import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AccessDenied } from '@/components/ui/access-denied'
import { StatusBadge } from '@/components/ui/status-badge'
import { PlatformChip } from '@/components/ui/platform-chip'
import { mockOrders, mockWorkers } from '@/lib/mock-data'
import type { Order } from '@/lib/types'
import { Plus, Filter } from 'lucide-react'

export default function OrdersPage() {
  const { hasAccess } = useAuth()
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const [showForm, setShowForm] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  if (!hasAccess('orders')) {
    return <AccessDenied />
  }

  const filteredOrders = selectedStatus
    ? orders.filter((o) => o.status === selectedStatus)
    : orders

  const handleCreateOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newOrder: Order = {
      id: `order-${Date.now()}`,
      orderNumber: `ORD-2024-${String(orders.length + 1).padStart(3, '0')}`,
      workerId: formData.get('workerId') as string,
      workerName:
        mockWorkers.find((w) => w.id === formData.get('workerId'))?.name ||
        'Unknown',
      platform:
        (formData.get('platform') as Order['platform']) || 'platform_a',
      status: 'pending',
      amount: parseFloat(formData.get('amount') as string) || 0,
      createdAt: new Date(),
      notes: (formData.get('notes') as string) || undefined,
    }
    setOrders([newOrder, ...orders])
    setShowForm(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const statuses = ['pending', 'in_progress', 'completed', 'failed', 'cancelled']
  const statusCounts = {
    all: orders.length,
    ...statuses.reduce(
      (acc, status) => ({
        ...acc,
        [status]: orders.filter((o) => o.status === status).length,
      }),
      {}
    ),
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Orders</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage worker orders and task assignments
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 rounded-lg bg-ops px-4 py-2 text-sm font-medium text-white hover:bg-ops-dark transition-colors"
        >
          <Plus className="h-4 w-4" />
          Create Order
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleCreateOrder}
          className="space-y-4 rounded-lg border border-ops/20 bg-ops/5 p-6"
        >
          <h3 className="font-semibold text-foreground">Create New Order</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Worker
              </label>
              <select
                name="workerId"
                required
                className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50 focus:border-ops"
              >
                <option value="">Select a worker...</option>
                {mockWorkers.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.name} ({w.workerId})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Platform
              </label>
              <select
                name="platform"
                defaultValue="platform_a"
                className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50 focus:border-ops"
              >
                <option value="platform_a">Platform A</option>
                <option value="platform_b">Platform B</option>
                <option value="platform_c">Platform C</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Amount ($)
              </label>
              <input
                type="number"
                name="amount"
                step="0.01"
                min="0"
                required
                className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50 focus:border-ops"
                placeholder="0.00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Notes
              </label>
              <input
                type="text"
                name="notes"
                className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50 focus:border-ops"
                placeholder="Optional notes..."
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded-lg bg-ops px-4 py-2 text-sm font-medium text-white hover:bg-ops-dark transition-colors"
            >
              Create Order
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg border border-border-subtle px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedStatus(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            selectedStatus === null
              ? 'bg-ops text-white'
              : 'border border-border-subtle text-muted-foreground hover:bg-muted'
          }`}
        >
          All ({statusCounts.all})
        </button>
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedStatus === status
                ? 'bg-ops text-white'
                : 'border border-border-subtle text-muted-foreground hover:bg-muted'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')} (
            {statusCounts[status as keyof typeof statusCounts] || 0})
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-lg border border-border-subtle">
        <table className="w-full text-sm">
          <thead className="border-b border-border-subtle bg-card">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Order #
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Worker
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Platform
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Status
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Amount
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                Created
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="bg-card hover:bg-muted/50 transition-colors"
              >
                <td className="px-4 py-3 font-mono text-xs text-foreground">
                  {order.orderNumber}
                </td>
                <td className="px-4 py-3">
                  <p className="font-medium text-foreground">{order.workerName}</p>
                </td>
                <td className="px-4 py-3">
                  <PlatformChip platform={order.platform} variant="compact" />
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-4 py-3 font-medium text-foreground">
                  ${order.amount.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredOrders.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-border-subtle bg-card py-12">
          <p className="text-muted-foreground">No orders found</p>
        </div>
      )}
    </div>
  )
}
