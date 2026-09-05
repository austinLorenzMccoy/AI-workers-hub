import { describe, it, expect, vi, beforeEach } from 'vitest'
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { DEMO_ACTIVITY, DEMO_AUDIT, DEMO_PAYROLL, DEMO_TRACKER, DEMO_USERS } from '@/lib/demo-data'

const adminAuth = {
  user: { id: 'demo-admin-001' },
  appUser: DEMO_USERS[0],
  isLoading: false,
  canPreviewDemo: true,
  isPreviewingDemo: true,
  toggleDemoPreview: () => {},
  hasAccess: () => true,
  hasRole: () => true,
  permissions: { canEditOrders: true, canViewPayroll: true, canManageRoles: true },
}

vi.mock('@/lib/auth-context', () => ({
  useAuth: () => adminAuth,
}))

vi.mock('@/lib/toast-context', () => ({
  useToast: () => ({ toast: vi.fn() }),
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  usePathname: () => '/dashboard',
  useParams: () => ({ id: 'demo-trk-001' }),
  useSearchParams: () => new URLSearchParams(),
}))

vi.mock('@/lib/db', async () => {
  const data = await import('@/lib/demo-data')
  return {
    fetchPlatforms: vi.fn(async () => data.DEMO_PLATFORMS),
    fetchPlatformStats: vi.fn(async () => data.DEMO_PLATFORM_STATS),
    fetchPlatformTaskColumns: vi.fn(async () => data.DEMO_TASK_COLUMNS.filter((c) => c.platform_id === 1)),
    fetchTrackerByPlatform: vi.fn(async () => data.DEMO_TRACKER.filter((r) => r.platform_id === 1)),
    fetchRegistryByPlatform: vi.fn(async () => data.DEMO_REGISTRY.filter((r) => r.platform_id === 1)),
    fetchOrdersByPlatform: vi.fn(async () => data.DEMO_ORDERS.filter((r) => r.platform_id === 1)),
    fetchPayrollByPlatform: vi.fn(async () => data.DEMO_PAYROLL.filter((r) => r.platform_id === 1)),
    fetchOnboardingByPlatform: vi.fn(async () => data.DEMO_ONBOARDING.filter((r) => r.platform_id === 1)),
    fetchAllUsers: vi.fn(async () => data.DEMO_USERS),
    updateTrackerField: vi.fn(async () => ({ error: null })),
    updateTaskStatus: vi.fn(async () => ({ error: null })),
    insertRegistryRow: vi.fn(),
    updateRegistryRow: vi.fn(),
    deleteRegistryRow: vi.fn(),
    createOrder: vi.fn(),
    updateOrder: vi.fn(),
    deleteOrder: vi.fn(),
    upsertPayrollRow: vi.fn(),
    updatePayrollRow: vi.fn(),
    deletePayrollRow: vi.fn(),
    insertOnboardingRow: vi.fn(),
    updateOnboardingRow: vi.fn(),
    deleteOnboardingRow: vi.fn(),
  }
})

vi.mock('@/lib/supabase/client', () => {
  const tables: Record<string, unknown[]> = {
    payroll: DEMO_PAYROLL,
    audit_log: DEMO_AUDIT,
    task_status_history: DEMO_ACTIVITY,
    worker_tracker: DEMO_TRACKER,
  }
  return {
    createClient: () => ({
      from: (table: string) => {
        const result = { data: tables[table] ?? [], error: null }
        const chain: any = {
          select: () => chain,
          eq: () => chain,
          order: () => chain,
          limit: () => chain,
          single: () => Promise.resolve({ data: DEMO_TRACKER[0], error: null }),
          then: (resolve: (v: unknown) => unknown) => Promise.resolve(result).then(resolve),
        }
        return chain
      },
    }),
  }
})

vi.mock('@/lib/demo', () => ({
  isDemoMode: () => true,
  isDemoPreviewEnabled: () => true,
  setDemoPreviewActive: vi.fn(),
}))

import DashboardPage from '@/app/dashboard/page'
import TrackerPage from '@/app/tracker/page'
import RegistryPage from '@/app/registry/page'
import OrdersPage from '@/app/orders/page'
import PayrollPage from '@/app/payroll/page'
import OnboardingPage from '@/app/onboarding/page'
import AdminPage from '@/app/admin/page'
import ActivityPage from '@/app/activity/page'
import AuditPage from '@/app/audit/page'
import ReportsPage from '@/app/reports/page'

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async () => ({
    ok: true,
    json: async () => DEMO_USERS,
  })))
})

describe('WorkersHub pages (demo admin)', () => {
  it('renders the dashboard with sample stats', async () => {
    render(<DashboardPage />)
    await waitFor(() => expect(screen.getByText('Dashboard')).toBeInTheDocument())
    expect(screen.getByText('Total Workers')).toBeInTheDocument()
    expect(screen.getByText('Oneforma')).toBeInTheDocument()
  })

  it('renders tracker with sample workers', async () => {
    render(<TrackerPage />)
    expect(await screen.findByText('Signal Grid')).toBeInTheDocument()
    expect(await screen.findAllByText('Ada Okonkwo')).not.toHaveLength(0)
  })

  it('shows tracker add/search/filter controls', async () => {
    render(<TrackerPage />)
    expect(await screen.findByRole('button', { name: /add worker/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/search workers/i)).toBeInTheDocument()
    expect(screen.getByText(/warning summary/i)).toBeInTheDocument()
  })

  it('renders registry with sample workers', async () => {
    render(<RegistryPage />)
    await waitFor(() => expect(screen.getByText('Ada Okonkwo')).toBeInTheDocument())
  })

  it('renders orders with a sample order code', async () => {
    render(<OrdersPage />)
    await waitFor(() => expect(screen.getByText('OF-1042')).toBeInTheDocument())
  })

  it('renders payroll with a sample worker', async () => {
    render(<PayrollPage />)
    await waitFor(() => expect(screen.getByText('Ada Okonkwo')).toBeInTheDocument())
  })

  it('renders onboarding with a sample applicant', async () => {
    render(<OnboardingPage />)
    await waitFor(() => expect(screen.getByText('Nora Adeyemi')).toBeInTheDocument())
  })

  it('renders admin user list', async () => {
    render(<AdminPage />)
    await waitFor(() => expect(screen.getByText('Users & Roles')).toBeInTheDocument())
  })

  it('renders activity log', async () => {
    render(<ActivityPage />)
    await waitFor(() => expect(screen.getByText('Activity Log')).toBeInTheDocument())
  })

  it('renders audit log', async () => {
    render(<AuditPage />)
    await waitFor(() => expect(screen.getByText('Audit Log')).toBeInTheDocument())
  })

  it('renders reports', async () => {
    render(<ReportsPage />)
    expect(await screen.findByRole('heading', { name: 'Monthly Reports' })).toBeInTheDocument()
  })
})
