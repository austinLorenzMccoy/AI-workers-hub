export type UserRole = 'admin' | 'manager' | 'supervisor' | 'worker'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  status: 'active' | 'inactive'
  createdAt: Date
}

export interface Worker {
  id: string
  name: string
  email: string
  workerId: string
  status: 'online' | 'offline' | 'idle' | 'busy'
  platform: 'platform_a' | 'platform_b' | 'platform_c'
  lastSeen: Date
  activeOrders: number
  totalEarnings: number
  assignedTo?: string
  notes?: string
}

export interface Order {
  id: string
  orderNumber: string
  workerId: string
  workerName: string
  platform: 'platform_a' | 'platform_b' | 'platform_c'
  status: 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled'
  amount: number
  createdAt: Date
  completedAt?: Date
  notes?: string
}

export interface PayrollEntry {
  id: string
  workerId: string
  workerName: string
  period: string
  totalEarnings: number
  totalDeductions: number
  netPay: number
  ordersCompleted: number
  status: 'pending' | 'approved' | 'paid'
  createdAt: Date
}

export interface PlatformSummary {
  platform: 'platform_a' | 'platform_b' | 'platform_c'
  activeWorkers: number
  totalOrders: number
  ordersCompleted: number
  ordersInProgress: number
  totalEarnings: number
  errorRate: number
}

export interface DashboardMetrics {
  totalWorkers: number
  activeWorkers: number
  totalOrders: number
  ordersCompleted: number
  ordersInProgress: number
  totalEarnings: number
  averageOrderValue: number
  systemHealth: number
  platformSummaries: PlatformSummary[]
  recentAlerts: Alert[]
}

export interface Alert {
  id: string
  type: 'error' | 'warning' | 'info'
  title: string
  message: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  timestamp: Date
  workerId?: string
  resolved: boolean
}

export interface ChannelAccess {
  admin: string[]
  manager: string[]
  supervisor: string[]
  worker: string[]
}

export const CHANNEL_ACCESS: ChannelAccess = {
  admin: ['dashboard', 'tracker', 'registry', 'orders', 'payroll', 'admin'],
  manager: ['dashboard', 'tracker', 'registry', 'orders', 'payroll'],
  supervisor: ['dashboard', 'tracker', 'registry', 'orders'],
  worker: ['dashboard'],
}
