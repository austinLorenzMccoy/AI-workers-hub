import type {
  AppUser,
  OnboardingRow,
  OrderRow,
  PayrollRow,
  Platform,
  PlatformStatsRow,
  PlatformTaskColumn,
  TaskStatusHistoryRow,
  WorkerRegistryRow,
  WorkerTrackerRow,
} from '@/types'

const now = '2026-08-01T12:00:00Z'

export const DEMO_PLATFORMS: Platform[] = [
  { id: 1, slug: 'oneforma', label: 'Oneforma', icon: '🟣', color_hex: '#8B5CF6', is_active: true },
  { id: 2, slug: 'telus', label: 'Telus', icon: '🔵', color_hex: '#3B82F6', is_active: true },
  { id: 3, slug: 'data_annotation', label: 'Data Annotation.tech', icon: '🟢', color_hex: '#10B981', is_active: true },
  { id: 4, slug: 'outlier', label: 'Outlier', icon: '🟠', color_hex: '#F97316', is_active: true },
]

export const DEMO_PLATFORM_STATS: PlatformStatsRow[] = [
  {
    platform_id: 1, platform_slug: 'oneforma', platform_label: 'Oneforma',
    icon: '🟣', color_hex: '#8B5CF6',
    total_workers: 42, clear_count: 31, minor_count: 8, serious_count: 2, banned_count: 1,
    total_orders: 18, issue_orders: 2, total_payroll_usd: 12450,
  },
  {
    platform_id: 2, platform_slug: 'telus', platform_label: 'Telus',
    icon: '🔵', color_hex: '#3B82F6',
    total_workers: 36, clear_count: 28, minor_count: 6, serious_count: 2, banned_count: 0,
    total_orders: 14, issue_orders: 1, total_payroll_usd: 9800,
  },
  {
    platform_id: 3, platform_slug: 'data_annotation', platform_label: 'Data Annotation.tech',
    icon: '🟢', color_hex: '#10B981',
    total_workers: 51, clear_count: 44, minor_count: 5, serious_count: 2, banned_count: 0,
    total_orders: 22, issue_orders: 0, total_payroll_usd: 18720,
  },
  {
    platform_id: 4, platform_slug: 'outlier', platform_label: 'Outlier',
    icon: '🟠', color_hex: '#F97316',
    total_workers: 19, clear_count: 12, minor_count: 4, serious_count: 2, banned_count: 1,
    total_orders: 7, issue_orders: 2, total_payroll_usd: 6400,
  },
]

export const DEMO_TASK_COLUMNS: PlatformTaskColumn[] = [
  { id: 1, platform_id: 1, column_key: 'exam', column_label: 'Exam', sort_order: 1, is_active: true },
  { id: 2, platform_id: 1, column_key: 'onboarding', column_label: 'Onboarding', sort_order: 2, is_active: true },
  { id: 3, platform_id: 1, column_key: 'live', column_label: 'Live tasks', sort_order: 3, is_active: true },
  { id: 4, platform_id: 2, column_key: 'exam', column_label: 'Exam', sort_order: 1, is_active: true },
  { id: 5, platform_id: 2, column_key: 'live', column_label: 'Live tasks', sort_order: 2, is_active: true },
  { id: 6, platform_id: 3, column_key: 'qualification', column_label: 'Qualification', sort_order: 1, is_active: true },
  { id: 7, platform_id: 3, column_key: 'live', column_label: 'Live tasks', sort_order: 2, is_active: true },
  { id: 8, platform_id: 4, column_key: 'exam', column_label: 'Exam', sort_order: 1, is_active: true },
]

function tracker(
  id: string,
  platform_id: number,
  owner_name: string,
  worker_name: string,
  warning_level: WorkerTrackerRow['warning_level'],
  task_statuses: Record<string, WorkerTrackerRow['task_statuses'][string]>,
): WorkerTrackerRow {
  return {
    id, platform_id, owner_name, linker: 'Linker A', worker_name,
    email: `${worker_name.toLowerCase().replace(/\s+/g, '.')}@preview.workershub`,
    apple_connect_pw: null, platform_id_code: `W-${id.slice(-4).toUpperCase()}`,
    payoneer_linked: '✅ Yes', warning_level, sow_done: '✅ Yes', le_cert: '✅ Yes',
    task_statuses, notes: null, created_at: now, updated_at: now,
  }
}

export const DEMO_TRACKER: WorkerTrackerRow[] = [
  tracker('demo-trk-001', 1, 'Ada Okonkwo', 'Ada Okonkwo', '🟢 Clear', { exam: '✅ Yes', onboarding: '✅ Yes', live: '🔄 In Progress' }),
  tracker('demo-trk-002', 1, 'Ibrahim Musa', 'Ibrahim Musa', '🟡 Minor', { exam: '✅ Yes', onboarding: '⏳ Pending', live: '➖ N/A' }),
  tracker('demo-trk-003', 1, 'Chioma Eze', 'Chioma Eze', '🔴 Serious', { exam: '❌ No', onboarding: '❌ No', live: '➖ N/A' }),
  tracker('demo-trk-004', 2, 'Samuel Boateng', 'Samuel Boateng', '🟢 Clear', { exam: '✅ Yes', live: '✅ Yes' }),
  tracker('demo-trk-005', 3, 'Maya Chen', 'Maya Chen', '🟢 Clear', { qualification: '✅ Yes', live: '✅ Yes' }),
  tracker('demo-trk-006', 4, 'Luis Herrera', 'Luis Herrera', '🟡 Minor', { exam: '⏳ Pending' }),
]

export const DEMO_REGISTRY: WorkerRegistryRow[] = [
  { id: 'demo-reg-001', platform_id: 1, project_task: 'Search quality', owner_name: 'Ada Okonkwo', account_type: 'Full-Time', email: 'ada.okonkwo@preview.workershub', passport: null, geowork_test: '✅ Passed', date_started: '2026-03-12', notes: null, created_at: now, updated_at: now },
  { id: 'demo-reg-002', platform_id: 1, project_task: 'Maps eval', owner_name: 'Ibrahim Musa', account_type: 'Part-Time', email: 'ibrahim.musa@preview.workershub', passport: null, geowork_test: '⏳ Pending', date_started: '2026-06-02', notes: null, created_at: now, updated_at: now },
  { id: 'demo-reg-003', platform_id: 3, project_task: 'Response rating', owner_name: 'Maya Chen', account_type: 'Contractor', email: 'maya.chen@preview.workershub', passport: null, geowork_test: '⭕ Exempted', date_started: '2026-01-20', notes: null, created_at: now, updated_at: now },
]

export const DEMO_ORDERS: OrderRow[] = [
  { id: 'demo-ord-001', platform_id: 1, order_id_code: 'OF-1042', proxy: 'EU-1', owner_name: 'Ada Okonkwo', status: '🟢 Active', order_date: '2026-08-10', notes: null, created_at: now, updated_at: now },
  { id: 'demo-ord-002', platform_id: 1, order_id_code: 'OF-1048', proxy: 'US-2', owner_name: 'Ibrahim Musa', status: '🔴 Issue', order_date: '2026-08-18', notes: 'Payoneer mismatch', created_at: now, updated_at: now },
  { id: 'demo-ord-003', platform_id: 2, order_id_code: 'TL-220', proxy: null, owner_name: 'Samuel Boateng', status: '✅ Completed', order_date: '2026-07-29', notes: null, created_at: now, updated_at: now },
]

export const DEMO_PAYROLL: PayrollRow[] = [
  { id: 'demo-pay-001', platform_id: 1, account_code: 'ADA-01', worker_name: 'Ada Okonkwo', month: 'August', year: 2026, tasks_done: 410, pay_usd: 820, notes: null, created_at: now },
  { id: 'demo-pay-002', platform_id: 1, account_code: 'IBR-04', worker_name: 'Ibrahim Musa', month: 'August', year: 2026, tasks_done: 180, pay_usd: 270, notes: null, created_at: now },
  { id: 'demo-pay-003', platform_id: 3, account_code: 'MAY-11', worker_name: 'Maya Chen', month: 'August', year: 2026, tasks_done: 620, pay_usd: 1550, notes: null, created_at: now },
]

export const DEMO_ONBOARDING: OnboardingRow[] = [
  { id: 'demo-onb-001', platform_id: 1, applicant_name: 'Nora Adeyemi', email: 'nora@preview.workershub', password: null, phone: null, country: 'NG', referral: 'Ada Okonkwo', application_status: '🔄 In Review', date_applied: '2026-08-12', date_resolved: null, notes: null, created_at: now, updated_at: now },
  { id: 'demo-onb-002', platform_id: 3, applicant_name: 'Jonah Park', email: 'jonah@preview.workershub', password: null, phone: null, country: 'US', referral: null, application_status: '✅ Accepted', date_applied: '2026-07-03', date_resolved: '2026-07-08', notes: null, created_at: now, updated_at: now },
]

export const DEMO_USERS: AppUser[] = [
  {
    id: 'demo-admin-001', email: 'admin@workershub.demo', display_name: 'Demo Admin',
    role: 'admin', platform_access: null, worker_id: null, can_view_orders: true,
    is_active: true, last_sign_in: now, created_at: '2024-01-01T00:00:00Z', updated_at: now,
  },
  {
    id: 'demo-mgr-001', email: 'manager@workershub.demo', display_name: 'Demo Manager',
    role: 'manager', platform_access: ['oneforma', 'telus'], worker_id: null, can_view_orders: true,
    is_active: true, last_sign_in: now, created_at: '2024-06-01T00:00:00Z', updated_at: now,
  },
]

export const DEMO_ACTIVITY: TaskStatusHistoryRow[] = [
  { id: 'demo-act-001', tracker_row_id: 'demo-trk-001', column_key: 'live', old_value: '⏳ Pending', new_value: '🔄 In Progress', changed_by: 'demo-admin-001', changed_at: now },
  { id: 'demo-act-002', tracker_row_id: 'demo-trk-003', column_key: 'exam', old_value: '⏳ Pending', new_value: '❌ No', changed_by: 'demo-admin-001', changed_at: now },
]

export const DEMO_AUDIT = [
  { id: 'demo-aud-001', user_id: 'demo-admin-001', action: 'update', entity_type: 'worker_tracker', entity_id: 'demo-trk-001', details: { field: 'warning_level' }, created_at: now, user_email: 'admin@workershub.demo' },
  { id: 'demo-aud-002', user_id: 'demo-admin-001', action: 'login', entity_type: 'session', entity_id: null, details: { mode: 'preview' }, created_at: now, user_email: 'admin@workershub.demo' },
]

export function platformsBySlug(slug: string): Platform | undefined {
  return DEMO_PLATFORMS.find((p) => p.slug === slug)
}
