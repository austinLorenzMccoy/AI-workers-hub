'use client'

import { useEffect, useState, useCallback } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AccessDenied } from '@/components/ui/access-denied'
import {
  fetchPlatforms,
  fetchOrdersByPlatform,
  createOrder,
  updateOrder,
} from '@/lib/db'
import type { Platform, OrderRow, OrderStatus } from '@/types'
import { Plus, Loader2, X } from 'lucide-react'

const ORDER_STATUSES: OrderStatus[] = [
  '🟢 Active', '🟡 Pending', '🔵 Processing',
  '🔴 Issue', '⚫ Cancelled', '✅ Completed',
]

export default function OrdersPage() {
  const { hasAccess, permissions } = useAuth()
  const [platforms, setPlatforms] = useState<Platform[]>([])
  const [selectedPlatform, setSelectedPlatform] = useState<string>('')
  const [orders, setOrders] = useState<OrderRow[]>([])
  const [loading, setLoading] = useState(true)
  const [tableLoading, setTableLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  useEffect(() => {
    fetchPlatforms().then((data) => {
      setPlatforms(data)
      if (data.length > 0) setSelectedPlatform(data[0].slug)
      setLoading(false)
    })
  }, [])

  const loadOrders = useCallback(async (slug: string) => {
    setTableLoading(true)
    const data = await fetchOrdersByPlatform(slug)
    setOrders(data)
    setTableLoading(false)
  }, [])

  useEffect(() => {
    if (selectedPlatform) loadOrders(selectedPlatform)
  }, [selectedPlatform, loadOrders])

  if (!hasAccess('orders')) {
    return <AccessDenied />
  }

  const activePlatform = platforms.find((p) => p.slug === selectedPlatform)

  const filteredOrders = selectedStatus
    ? orders.filter((o) => o.status === selectedStatus)
    : orders

  const handleCreateOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    if (!activePlatform) return

    const { error } = await createOrder({
      platform_id: activePlatform.id,
      order_id_code: fd.get('order_id_code') as string,
      proxy: (fd.get('proxy') as string) || null,
      owner_name: fd.get('owner_name') as string,
      status: '🟡 Pending',
      order_date: (fd.get('order_date') as string) || null,
      notes: (fd.get('notes') as string) || null,
    })

    if (!error) {
      setShowForm(false)
      loadOrders(selectedPlatform)
    }
  }

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    const { error } = await updateOrder(orderId, { status: newStatus as OrderStatus })
    if (!error) {
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: newStatus as OrderStatus } : o))
      )
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
          <h1 className="text-3xl font-bold text-foreground">Restricted Zone</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Platform order management and tracking
          </p>
        </div>
        {permissions?.canEditOrders && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 rounded-lg bg-ops px-4 py-2 text-sm font-medium text-white hover:bg-ops-dark transition-colors"
          >
            {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {showForm ? 'Cancel' : 'Create Order'}
          </button>
        )}
      </div>

      {/* Create order form */}
      {showForm && (
        <form
          onSubmit={handleCreateOrder}
          className="space-y-4 rounded-lg border border-ops/20 bg-ops/5 p-6"
        >
          <h3 className="font-semibold text-foreground">Create New Order</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Order ID Code *</label>
              <input name="order_id_code" required placeholder="e.g. ORD-2025-001" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Owner Name *</label>
              <input name="owner_name" required className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Proxy</label>
              <input name="proxy" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Order Date</label>
              <input name="order_date" type="date" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Notes</label>
              <input name="notes" className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ops/50" />
            </div>
          </div>
          <button type="submit" className="rounded-lg bg-ops px-4 py-2 text-sm font-medium text-white hover:bg-ops-dark transition-colors">
            Create Order
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
          All ({orders.length})
        </button>
        {ORDER_STATUSES.map((status) => {
          const count = orders.filter((o) => o.status === status).length
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

      {/* Table */}
      {tableLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-border-subtle bg-card py-12">
          <p className="text-muted-foreground">
            {selectedStatus ? 'No orders with this status' : `No orders for ${activePlatform?.label ?? 'this platform'} yet.`}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border-subtle">
          <table className="w-full text-sm">
            <thead className="border-b border-border-subtle bg-card">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Order ID</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Owner</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Proxy</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="bg-card hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-foreground">{order.order_id_code}</td>
                  <td className="px-4 py-3 font-medium text-foreground">{order.owner_name}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{order.proxy ?? '—'}</td>
                  <td className="px-4 py-3">
                    {permissions?.canEditOrders ? (
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        className="rounded bg-transparent border border-border-subtle px-2 py-1 text-xs"
                      >
                        {ORDER_STATUSES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-sm">{order.status}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {order.order_date ? new Date(order.order_date).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground max-w-[200px] truncate">
                    {order.notes ?? '—'}
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
