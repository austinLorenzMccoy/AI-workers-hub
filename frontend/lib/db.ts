/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * lib/db.ts — Unified database access layer.
 * All Supabase queries are centralised here. UI components never call Supabase directly.
 */
import { createClient } from '@/lib/supabase/client'
import { isDemoMode } from '@/lib/demo'
import {
  DEMO_ACTIVITY,
  DEMO_ONBOARDING,
  DEMO_ORDERS,
  DEMO_PAYROLL,
  DEMO_PLATFORMS,
  DEMO_PLATFORM_STATS,
  DEMO_REGISTRY,
  DEMO_TASK_COLUMNS,
  DEMO_TRACKER,
  DEMO_USERS,
  platformsBySlug,
} from '@/lib/demo-data'
import type {
  AppUser, WorkerTrackerRow, WorkerRegistryRow,
  OrderRow, PayrollRow, Platform, PlatformTaskColumn,
  PlatformStatsRow, TaskStatusHistoryRow, OnboardingRow,
} from '@/types'

function liveOrDemo<T>(live: T[], demo: T[]): T[] {
  if (live.length > 0 || !isDemoMode()) return live
  return demo
}

// ── Platforms ───────────────────────────────────────────────────

/**
 * Load platforms for operational screens.
 * By default only active platforms are returned so deactivated platforms
 * disappear from Tracker / Registry / Orders without a code change.
 */
export async function fetchPlatforms(options?: {
  includeInactive?: boolean
}): Promise<Platform[]> {
  const supabase = createClient()
  let query = supabase.from('platforms').select('*').order('id')
  if (!options?.includeInactive) {
    query = query.eq('is_active', true)
  }
  const { data, error } = await query
  if (error) {
    console.error('fetchPlatforms:', error.message)
    return isDemoMode() ? DEMO_PLATFORMS : []
  }
  const rows = (data ?? []) as Platform[]
  return liveOrDemo(rows, DEMO_PLATFORMS)
}

export async function fetchPlatformTaskColumns(platformSlug: string): Promise<PlatformTaskColumn[]> {
  const supabase = createClient()
  const { data, error } = await (supabase as any)
    .from('platform_task_columns')
    .select('*, platforms!inner(slug)')
    .eq('platforms.slug', platformSlug)
    .eq('is_active', true)
    .order('sort_order')
  if (error) {
    console.error('fetchPlatformTaskColumns:', error.message)
    const platform = platformsBySlug(platformSlug)
    return isDemoMode()
      ? DEMO_TASK_COLUMNS.filter((c) => c.platform_id === platform?.id)
      : []
  }
  const rows = (data ?? []) as PlatformTaskColumn[]
  const platform = platformsBySlug(platformSlug)
  return liveOrDemo(
    rows,
    DEMO_TASK_COLUMNS.filter((c) => c.platform_id === platform?.id),
  )
}

export async function fetchPlatformStats(): Promise<PlatformStatsRow[]> {
  const supabase = createClient()
  const { data, error } = await (supabase as any)
    .from('platform_stats').select('*').order('total_workers', { ascending: false })
  if (error) {
    console.error('fetchPlatformStats:', error.message)
    return isDemoMode() ? DEMO_PLATFORM_STATS : []
  }
  const rows = (data ?? []) as PlatformStatsRow[]
  const empty = rows.length === 0 || rows.every((p) => p.total_workers === 0 && p.total_orders === 0)
  if (empty && isDemoMode()) return DEMO_PLATFORM_STATS
  return rows
}

// ── Worker tracker ──────────────────────────────────────────────

export async function fetchTrackerByPlatform(
  platformSlug: string,
  filters?: { warningLevel?: string; linker?: string; search?: string }
): Promise<WorkerTrackerRow[]> {
  const supabase = createClient()
  let query = (supabase as any)
    .from('worker_tracker')
    .select('*, platforms!inner(slug)')
    .eq('platforms.slug', platformSlug)
    .order('created_at')

  if (filters?.warningLevel) query = query.eq('warning_level', filters.warningLevel)
  if (filters?.linker)       query = query.eq('linker', filters.linker)
  if (filters?.search) {
    query = query.or(
      `worker_name.ilike.%${filters.search}%,owner_name.ilike.%${filters.search}%`
    )
  }

  const { data, error } = await query
  const platform = platformsBySlug(platformSlug)
  const demo = DEMO_TRACKER.filter((r) => r.platform_id === platform?.id)
  if (error) { console.error('fetchTrackerByPlatform:', error.message); return isDemoMode() ? demo : [] }
  return liveOrDemo((data ?? []) as WorkerTrackerRow[], demo)
}

export async function updateTrackerField(
  rowId: string, field: string, value: string
): Promise<{ error: string | null }> {
  const supabase = createClient() as any
  const { error } = await supabase
    .from('worker_tracker').update({ [field]: value }).eq('id', rowId)
  return { error: error?.message ?? null }
}

export async function updateTaskStatus(
  rowId: string, columnKey: string, newStatus: string
): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { data: row, error: readErr } = await supabase
    .from('worker_tracker').select('task_statuses').eq('id', rowId).single()
  if (readErr) return { error: readErr.message }

  const current = (row as any)?.task_statuses as Record<string, string> | null
  const merged = { ...(current ?? {}), [columnKey]: newStatus }
  const { error } = await (supabase as any)
    .from('worker_tracker').update({ task_statuses: merged }).eq('id', rowId)
  return { error: error?.message ?? null }
}

export async function insertTrackerRow(
  row: Omit<WorkerTrackerRow, 'id' | 'created_at' | 'updated_at'>
): Promise<{ id: string | null; error: string | null }> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('worker_tracker').insert(row as any).select('id').single()
  return { id: (data as any)?.id ?? null, error: error?.message ?? null }
}

export async function deleteTrackerRow(rowId: string): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('worker_tracker').delete().eq('id', rowId)
  return { error: error?.message ?? null }
}

export async function fetchTaskHistory(rowId: string): Promise<TaskStatusHistoryRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('task_status_history')
    .select('*').eq('tracker_row_id', rowId)
    .order('changed_at', { ascending: false }).limit(50)
  if (error) {
    console.error('fetchTaskHistory:', error.message)
    return isDemoMode() ? DEMO_ACTIVITY.filter((r) => r.tracker_row_id === rowId) : []
  }
  return liveOrDemo(
    (data ?? []) as any as TaskStatusHistoryRow[],
    DEMO_ACTIVITY.filter((r) => r.tracker_row_id === rowId),
  )
}

// ── Workers registry ────────────────────────────────────────────

export async function fetchRegistryByPlatform(platformSlug: string): Promise<WorkerRegistryRow[]> {
  const supabase = createClient()
  const { data, error } = await (supabase as any)
    .from('workers_registry')
    .select('*, platforms!inner(slug)')
    .eq('platforms.slug', platformSlug)
    .order('date_started', { ascending: false })
  if (error) {
    console.error('fetchRegistryByPlatform:', error.message)
    const platform = platformsBySlug(platformSlug)
    return isDemoMode() ? DEMO_REGISTRY.filter((r) => r.platform_id === platform?.id) : []
  }
  const platform = platformsBySlug(platformSlug)
  return liveOrDemo(
    (data ?? []) as WorkerRegistryRow[],
    DEMO_REGISTRY.filter((r) => r.platform_id === platform?.id),
  )
}

export async function insertRegistryRow(
  row: Omit<WorkerRegistryRow, 'id' | 'created_at' | 'updated_at'>
): Promise<{ id: string | null; error: string | null }> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('workers_registry').insert(row as any).select('id').single()
  return { id: (data as any)?.id ?? null, error: error?.message ?? null }
}

export async function updateRegistryRow(
  rowId: string, updates: Partial<WorkerRegistryRow>
): Promise<{ error: string | null }> {
  const supabase = createClient() as any
  const { error } = await supabase
    .from('workers_registry').update(updates).eq('id', rowId)
  return { error: error?.message ?? null }
}

export async function deleteRegistryRow(rowId: string): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('workers_registry').delete().eq('id', rowId)
  return { error: error?.message ?? null }
}

// ── Orders ──────────────────────────────────────────────────────

export async function fetchOrdersByPlatform(
  platformSlug: string, statusFilter?: string
): Promise<OrderRow[]> {
  const supabase = createClient()
  let query = (supabase as any)
    .from('orders')
    .select('*, platforms!inner(slug), order_platforms(platform_id)')
    .eq('platforms.slug', platformSlug)
    .order('order_date', { ascending: false })
  if (statusFilter) query = query.eq('status', statusFilter)
  const { data, error } = await query
  if (error) {
    console.error('fetchOrdersByPlatform:', error.message)
    const platform = platformsBySlug(platformSlug)
    const demo = DEMO_ORDERS.filter((r) => r.platform_id === platform?.id)
      .filter((r) => !statusFilter || r.status === statusFilter)
    return isDemoMode() ? demo : []
  }
  const platform = platformsBySlug(platformSlug)
  const demo = DEMO_ORDERS.filter((r) => r.platform_id === platform?.id)
    .filter((r) => !statusFilter || r.status === statusFilter)

  const liveRows = ((data ?? []) as any[]).map((row) => {
    const platformIds = Array.from(new Set([
      row.platform_id,
      ...(row.order_platforms ?? []).map((link: any) => link.platform_id),
    ].filter(Boolean)))

    if (!platformIds.length) return row as OrderRow
    return { ...(row as OrderRow), platform_ids: platformIds }
  })

  return liveOrDemo(liveRows as OrderRow[], demo)
}

export async function createOrder(
  order: Omit<OrderRow, 'id' | 'created_at' | 'updated_at'> & { platform_ids?: number[] }
): Promise<{ order: OrderRow | null; error: string | null }> {
  const supabase = createClient()
  const platformIds = Array.from(new Set((order.platform_ids?.length ? order.platform_ids : [order.platform_id]).filter(Boolean)))
  const primaryPlatformId = platformIds[0] ?? order.platform_id

  const { data, error } = await supabase
    .from('orders').insert({ ...order, platform_id: primaryPlatformId } as any).select().single()

  if (error) return { order: null, error: error?.message ?? null }

  const created = (data as any) ?? null
  if (created && platformIds.length > 1) {
    const platformLinks = platformIds.slice(1).map((platform_id) => ({
      order_id: created.id,
      platform_id,
    }))
    if (platformLinks.length > 0) {
      const { error: linkError } = await (supabase as any)
        .from('order_platforms')
        .insert(platformLinks)
      if (linkError) {
        console.warn('createOrder order_platforms fallback:', linkError.message)
      }
    }
  }

  const normalizedOrder = created
    ? {
        ...created,
        ...(primaryPlatformId !== undefined ? { platform_id: primaryPlatformId } : {}),
        ...(platformIds.length > 0 ? { platform_ids: platformIds } : {}),
      }
    : null

  return {
    order: normalizedOrder,
    error: null,
  }
}

export async function updateOrder(
  orderId: string,
  updates: Partial<OrderRow>
): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await (supabase as any).from('orders').update(updates).eq('id', orderId)
  return { error: error?.message ?? null }
}

export async function deleteOrder(orderId: string): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('orders').delete().eq('id', orderId)
  return { error: error?.message ?? null }
}

// ── Payroll ─────────────────────────────────────────────────────

export async function fetchPayrollByPlatform(
  platformSlug: string, year?: number, month?: string
): Promise<PayrollRow[]> {
  const supabase = createClient()
  let query = (supabase as any)
    .from('payroll')
    .select('*, platforms!inner(slug)')
    .eq('platforms.slug', platformSlug)
    .order('year', { ascending: false })
  if (year)  query = query.eq('year', year)
  if (month) query = query.eq('month', month)
  const { data, error } = await query
  if (error) {
    console.error('fetchPayrollByPlatform:', error.message)
    const platform = platformsBySlug(platformSlug)
    const demo = DEMO_PAYROLL.filter((r) => r.platform_id === platform?.id)
      .filter((r) => !year || r.year === year)
      .filter((r) => !month || r.month === month)
    return isDemoMode() ? demo : []
  }
  const platform = platformsBySlug(platformSlug)
  const demo = DEMO_PAYROLL.filter((r) => r.platform_id === platform?.id)
    .filter((r) => !year || r.year === year)
    .filter((r) => !month || r.month === month)
  return liveOrDemo((data ?? []) as PayrollRow[], demo)
}

export async function upsertPayrollRow(
  row: Omit<PayrollRow, 'id' | 'created_at'>
): Promise<{ error: string | null }> {
  const supabase = createClient() as any
  const { error } = await supabase.from('payroll').upsert(row, {
    onConflict: 'platform_id,account_code,worker_name,month,year',
  })
  return { error: error?.message ?? null }
}

export async function updatePayrollRow(
  rowId: string, updates: Partial<PayrollRow>
): Promise<{ error: string | null }> {
  const supabase = createClient() as any
  const { error } = await supabase.from('payroll').update(updates).eq('id', rowId)
  return { error: error?.message ?? null }
}

export async function deletePayrollRow(rowId: string): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('payroll').delete().eq('id', rowId)
  return { error: error?.message ?? null }
}

// ── Admin — user management ─────────────────────────────────────

export async function fetchAllUsers(): Promise<AppUser[]> {
  const supabase = createClient()
  const { data, error } = await supabase.from('app_users').select('*').order('created_at')
  if (error) { console.error('fetchAllUsers:', error.message); return isDemoMode() ? DEMO_USERS : [] }
  return liveOrDemo((data ?? []) as AppUser[], DEMO_USERS)
}

// ── Onboarding ──────────────────────────────────────────────────

export async function fetchOnboardingByPlatform(
  platformSlug: string, statusFilter?: string
): Promise<OnboardingRow[]> {
  const supabase = createClient()
  let query = (supabase as any)
    .from('onboarding')
    .select('*, platforms!inner(slug)')
    .eq('platforms.slug', platformSlug)
    .order('date_applied', { ascending: false })
  if (statusFilter) query = query.eq('application_status', statusFilter)
  const { data, error } = await query
  if (error) {
    console.error('fetchOnboardingByPlatform:', error.message)
    const platform = platformsBySlug(platformSlug)
    const demo = DEMO_ONBOARDING.filter((r) => r.platform_id === platform?.id)
      .filter((r) => !statusFilter || r.application_status === statusFilter)
    return isDemoMode() ? demo : []
  }
  const platform = platformsBySlug(platformSlug)
  const demo = DEMO_ONBOARDING.filter((r) => r.platform_id === platform?.id)
    .filter((r) => !statusFilter || r.application_status === statusFilter)
  return liveOrDemo((data ?? []) as OnboardingRow[], demo)
}

export async function insertOnboardingRow(
  row: Omit<OnboardingRow, 'id' | 'created_at' | 'updated_at'>
): Promise<{ id: string | null; error: string | null }> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('onboarding').insert(row as any).select('id').single()
  return { id: (data as any)?.id ?? null, error: error?.message ?? null }
}

export async function updateOnboardingRow(
  rowId: string,
  updates: Partial<Pick<OnboardingRow, 'application_status' | 'date_resolved' | 'notes' | 'email' | 'password' | 'phone' | 'country' | 'referral'>>
): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await (supabase as any).from('onboarding').update(updates).eq('id', rowId)
  return { error: error?.message ?? null }
}

export async function deleteOnboardingRow(rowId: string): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('onboarding').delete().eq('id', rowId)
  return { error: error?.message ?? null }
}
