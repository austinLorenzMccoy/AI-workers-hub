/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * lib/db.ts — Unified database access layer.
 * All Supabase queries are centralised here. UI components never call Supabase directly.
 */
import { createClient } from '@/lib/supabase/client'
import { isDemoMode } from '@/lib/demo'
import {
  DEMO_ACTIVITY,
  DEMO_DISPUTES,
  DEMO_ONBOARDING,
  DEMO_ORDERS,
  DEMO_PARTNER_CONTACTS,
  DEMO_PAYMENTS,
  DEMO_PAYOUT_REQUESTS,
  DEMO_PAY_SLIPS,
  DEMO_PAYROLL,
  DEMO_PLATFORMS,
  DEMO_PLATFORM_STATS,
  DEMO_REFERRALS,
  DEMO_REFERRAL_SUMMARY,
  DEMO_REGISTRY,
  DEMO_TASK_COLUMNS,
  DEMO_TIMESHEETS,
  DEMO_TRACKER,
  DEMO_USERS,
  DEMO_WARNING_EVENTS,
  DEMO_WORKER_EARNINGS_SUMMARY,
  DEMO_WORKER_FEEDBACK,
  platformsBySlug,
} from '@/lib/demo-data'
import type {
  AppUser, WorkerTrackerRow, WorkerRegistryRow,
  OrderRow, PayrollRow, Platform, PlatformTaskColumn,
  PlatformStatsRow, TaskStatusHistoryRow, OnboardingRow,
  WorkerTimesheetRow, PaySlipRow, PaymentRow, WarningEventRow,
  WorkerFeedbackRow, DisputeRow, ReferralRow, PayoutRequestRow,
  PartnerContactRow, WorkerEarningsSummaryRow, ReferralSummaryRow,
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
    .select('*, platforms!inner(slug)')
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
  return liveOrDemo((data ?? []) as OrderRow[], demo)
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

// ── Worker Recovery System ───────────────────────────────────────
// Self-service worker portal, timesheets, pay slips, payments,
// warnings, feedback, disputes, referrals, payouts, partner contacts.
// See doc/Worker_Recovery_System_PRD.md.

// -- Earnings summary (worker portal header) ------------------------

export async function fetchWorkerEarningsSummary(
  workerUserId: string
): Promise<WorkerEarningsSummaryRow | null> {
  const supabase = createClient()
  const { data, error } = await (supabase as any)
    .from('worker_earnings_summary').select('*').eq('worker_user_id', workerUserId).maybeSingle()
  if (error) {
    console.error('fetchWorkerEarningsSummary:', error.message)
    return isDemoMode() && workerUserId === DEMO_WORKER_EARNINGS_SUMMARY.worker_user_id
      ? DEMO_WORKER_EARNINGS_SUMMARY : null
  }
  if (!data && isDemoMode() && workerUserId === DEMO_WORKER_EARNINGS_SUMMARY.worker_user_id) {
    return DEMO_WORKER_EARNINGS_SUMMARY
  }
  return (data as WorkerEarningsSummaryRow) ?? null
}

/** Admin/manager overview — every worker's earnings + warning summary. */
export async function fetchAllWorkerEarningsSummaries(): Promise<WorkerEarningsSummaryRow[]> {
  const supabase = createClient()
  const { data, error } = await (supabase as any)
    .from('worker_earnings_summary').select('*').order('active_warnings', { ascending: false })
  if (error) {
    console.error('fetchAllWorkerEarningsSummaries:', error.message)
    return isDemoMode() ? [DEMO_WORKER_EARNINGS_SUMMARY] : []
  }
  return liveOrDemo((data ?? []) as WorkerEarningsSummaryRow[], [DEMO_WORKER_EARNINGS_SUMMARY])
}

// -- Timesheets -------------------------------------------------------

export async function fetchTimesheets(workerUserId: string): Promise<WorkerTimesheetRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('worker_timesheets').select('*').eq('worker_user_id', workerUserId)
    .order('work_date', { ascending: false })
  const demo = DEMO_TIMESHEETS.filter((t) => t.worker_user_id === workerUserId)
  if (error) { console.error('fetchTimesheets:', error.message); return isDemoMode() ? demo : [] }
  return liveOrDemo((data ?? []) as WorkerTimesheetRow[], demo)
}

export async function logTimesheetHours(
  entry: Omit<WorkerTimesheetRow, 'id' | 'created_at' | 'updated_at'>
): Promise<{ id: string | null; error: string | null }> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('worker_timesheets').insert(entry as any).select('id').single()
  return { id: (data as any)?.id ?? null, error: error?.message ?? null }
}

export async function deleteTimesheetEntry(id: string): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('worker_timesheets').delete().eq('id', id)
  return { error: error?.message ?? null }
}

// -- Pay slips & payments ---------------------------------------------

export async function fetchPaySlips(workerUserId: string): Promise<PaySlipRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('pay_slips').select('*').eq('worker_user_id', workerUserId)
    .order('period_year', { ascending: false })
  const demo = DEMO_PAY_SLIPS.filter((p) => p.worker_user_id === workerUserId)
  if (error) { console.error('fetchPaySlips:', error.message); return isDemoMode() ? demo : [] }
  return liveOrDemo((data ?? []) as PaySlipRow[], demo)
}

export async function issuePaySlip(
  slip: Omit<PaySlipRow, 'id' | 'created_at' | 'updated_at' | 'issued_at'>
): Promise<{ id: string | null; error: string | null }> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('pay_slips').insert(slip as any).select('id').single()
  return { id: (data as any)?.id ?? null, error: error?.message ?? null }
}

export async function fetchPayments(workerUserId: string): Promise<PaymentRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('payments').select('*').eq('worker_user_id', workerUserId)
    .order('created_at', { ascending: false })
  const demo = DEMO_PAYMENTS.filter((p) => p.worker_user_id === workerUserId)
  if (error) { console.error('fetchPayments:', error.message); return isDemoMode() ? demo : [] }
  return liveOrDemo((data ?? []) as PaymentRow[], demo)
}

// -- Warnings (progressive escalation, 5 = auto-termination) ---------

export async function fetchWarnings(workerUserId: string): Promise<WarningEventRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('warning_events').select('*').eq('worker_user_id', workerUserId)
    .order('created_at', { ascending: false })
  const demo = DEMO_WARNING_EVENTS.filter((w) => w.worker_user_id === workerUserId)
  if (error) { console.error('fetchWarnings:', error.message); return isDemoMode() ? demo : [] }
  return liveOrDemo((data ?? []) as WarningEventRow[], demo)
}

export async function issueWarning(
  workerUserId: string, reason: string, comment?: string
): Promise<{ id: string | null; error: string | null }> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('warning_events')
    .insert({ worker_user_id: workerUserId, reason, comment: comment ?? null } as any)
    .select('id').single()
  return { id: (data as any)?.id ?? null, error: error?.message ?? null }
}

export async function revokeWarning(id: string): Promise<{ error: string | null }> {
  const supabase = createClient() as any
  const { error } = await supabase
    .from('warning_events')
    .update({ is_revoked: true, revoked_at: new Date().toISOString() })
    .eq('id', id)
  return { error: error?.message ?? null }
}

// -- Feedback (admin-only visibility, workers see their own) ---------

export async function fetchMyFeedback(workerUserId: string): Promise<WorkerFeedbackRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('worker_feedback').select('*').eq('worker_user_id', workerUserId)
    .order('created_at', { ascending: false })
  const demo = DEMO_WORKER_FEEDBACK.filter((f) => f.worker_user_id === workerUserId)
  if (error) { console.error('fetchMyFeedback:', error.message); return isDemoMode() ? demo : [] }
  return liveOrDemo((data ?? []) as WorkerFeedbackRow[], demo)
}

/** Admin inbox — every worker's feedback. Managers must never call this. */
export async function fetchAllFeedback(): Promise<WorkerFeedbackRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('worker_feedback').select('*').order('created_at', { ascending: false })
  if (error) { console.error('fetchAllFeedback:', error.message); return isDemoMode() ? DEMO_WORKER_FEEDBACK : [] }
  return liveOrDemo((data ?? []) as WorkerFeedbackRow[], DEMO_WORKER_FEEDBACK)
}

export async function submitFeedback(
  entry: Omit<WorkerFeedbackRow, 'id' | 'created_at'>
): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('worker_feedback').insert(entry as any)
  return { error: error?.message ?? null }
}

// -- Disputes -----------------------------------------------------------

export async function fetchMyDisputes(workerUserId: string): Promise<DisputeRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('disputes').select('*').eq('worker_user_id', workerUserId)
    .order('created_at', { ascending: false })
  const demo = DEMO_DISPUTES.filter((d) => d.worker_user_id === workerUserId)
  if (error) { console.error('fetchMyDisputes:', error.message); return isDemoMode() ? demo : [] }
  return liveOrDemo((data ?? []) as DisputeRow[], demo)
}

/** Manager/admin dispute queue — every open/in-review dispute. */
export async function fetchAllDisputes(): Promise<DisputeRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('disputes').select('*').order('created_at', { ascending: false })
  if (error) { console.error('fetchAllDisputes:', error.message); return isDemoMode() ? DEMO_DISPUTES : [] }
  return liveOrDemo((data ?? []) as DisputeRow[], DEMO_DISPUTES)
}

export async function raiseDispute(
  entry: Omit<DisputeRow, 'id' | 'created_at' | 'updated_at' | 'status' | 'resolution_notes' | 'resolved_by' | 'resolved_at'>
): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('disputes').insert(entry as any)
  return { error: error?.message ?? null }
}

export async function resolveDispute(
  id: string, status: DisputeRow['status'], resolutionNotes?: string
): Promise<{ error: string | null }> {
  const supabase = createClient() as any
  const { error } = await supabase
    .from('disputes')
    .update({
      status,
      resolution_notes: resolutionNotes ?? null,
      resolved_at: new Date().toISOString(),
    })
    .eq('id', id)
  return { error: error?.message ?? null }
}

// -- Referrals & payout gating -----------------------------------------

export async function fetchReferralSummary(referrerUserId: string): Promise<ReferralSummaryRow | null> {
  const supabase = createClient()
  const { data, error } = await (supabase as any)
    .from('referral_summary').select('*').eq('referrer_user_id', referrerUserId).maybeSingle()
  if (error) {
    console.error('fetchReferralSummary:', error.message)
    return isDemoMode() && referrerUserId === DEMO_REFERRAL_SUMMARY.referrer_user_id
      ? DEMO_REFERRAL_SUMMARY : null
  }
  if (!data && isDemoMode() && referrerUserId === DEMO_REFERRAL_SUMMARY.referrer_user_id) {
    return DEMO_REFERRAL_SUMMARY
  }
  return (data as ReferralSummaryRow) ?? null
}

export async function fetchReferrals(referrerUserId: string): Promise<ReferralRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('referrals').select('*').eq('referrer_user_id', referrerUserId)
    .order('created_at', { ascending: false })
  const demo = DEMO_REFERRALS.filter((r) => r.referrer_user_id === referrerUserId)
  if (error) { console.error('fetchReferrals:', error.message); return isDemoMode() ? demo : [] }
  return liveOrDemo((data ?? []) as ReferralRow[], demo)
}

/** Admin oversight — every referral across every referrer. */
export async function fetchAllReferrals(): Promise<ReferralRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('referrals').select('*').order('created_at', { ascending: false })
  if (error) { console.error('fetchAllReferrals:', error.message); return isDemoMode() ? DEMO_REFERRALS : [] }
  return liveOrDemo((data ?? []) as ReferralRow[], DEMO_REFERRALS)
}

export async function addReferral(
  entry: Omit<ReferralRow, 'id' | 'created_at' | 'updated_at' | 'status' | 'commission_usd'> & { commission_usd?: number }
): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('referrals').insert(entry as any)
  return { error: error?.message ?? null }
}

export async function updateReferralStatus(
  id: string, status: ReferralRow['status']
): Promise<{ error: string | null }> {
  const supabase = createClient() as any
  const { error } = await supabase.from('referrals').update({ status }).eq('id', id)
  return { error: error?.message ?? null }
}

// -- Payout requests (referral commission or worker early pay) --------

export async function fetchMyPayoutRequests(requesterUserId: string): Promise<PayoutRequestRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('payout_requests').select('*').eq('requester_user_id', requesterUserId)
    .order('requested_at', { ascending: false })
  const demo = DEMO_PAYOUT_REQUESTS.filter((p) => p.requester_user_id === requesterUserId)
  if (error) { console.error('fetchMyPayoutRequests:', error.message); return isDemoMode() ? demo : [] }
  return liveOrDemo((data ?? []) as PayoutRequestRow[], demo)
}

/** Admin queue — every pending/approved payout request. */
export async function fetchAllPayoutRequests(): Promise<PayoutRequestRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('payout_requests').select('*').order('requested_at', { ascending: false })
  if (error) { console.error('fetchAllPayoutRequests:', error.message); return isDemoMode() ? DEMO_PAYOUT_REQUESTS : [] }
  return liveOrDemo((data ?? []) as PayoutRequestRow[], DEMO_PAYOUT_REQUESTS)
}

/**
 * Requests a payout. The `referral_commission` gating rule (every
 * referred worker must already be paid) is enforced server-side by the
 * `trg_payout_gating` trigger — this call surfaces that as a normal
 * `{ error }` result rather than a thrown exception.
 */
export async function requestPayout(
  entry: Pick<PayoutRequestRow, 'requester_user_id' | 'type' | 'amount_usd'> & { notes?: string | null }
): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('payout_requests').insert(entry as any)
  return { error: error?.message ?? null }
}

export async function updatePayoutRequest(
  id: string,
  updates: Partial<Pick<PayoutRequestRow, 'status' | 'paystack_reference' | 'notes'>>
): Promise<{ error: string | null }> {
  const supabase = createClient() as any
  const { error } = await supabase
    .from('payout_requests')
    .update({ ...updates, processed_at: new Date().toISOString() })
    .eq('id', id)
  return { error: error?.message ?? null }
}

// -- Partner / contact records (Excel/CSV import target) --------------

export async function fetchPartnerContacts(): Promise<PartnerContactRow[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('partner_contacts').select('*').order('created_at', { ascending: false })
  if (error) { console.error('fetchPartnerContacts:', error.message); return isDemoMode() ? DEMO_PARTNER_CONTACTS : [] }
  return liveOrDemo((data ?? []) as PartnerContactRow[], DEMO_PARTNER_CONTACTS)
}

export async function insertPartnerContact(
  entry: Omit<PartnerContactRow, 'id' | 'created_at'>
): Promise<{ id: string | null; error: string | null }> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('partner_contacts').insert(entry as any).select('id').single()
  return { id: (data as any)?.id ?? null, error: error?.message ?? null }
}

export async function deletePartnerContact(id: string): Promise<{ error: string | null }> {
  const supabase = createClient()
  const { error } = await supabase.from('partner_contacts').delete().eq('id', id)
  return { error: error?.message ?? null }
}
