'use client'

import { useAuth } from '@/lib/auth-context'
import { AccessDenied } from '@/components/ui/access-denied'
import type { UserRole } from '@/lib/types'
import { Settings, Shield, Users } from 'lucide-react'

const rolePermissions: Record<UserRole, string[]> = {
  admin: [
    'View Dashboard',
    'View Tracker',
    'View Registry',
    'Create Orders',
    'View Payroll',
    'Access Admin Panel',
    'Manage Roles',
    'View System Logs',
  ],
  manager: [
    'View Dashboard',
    'View Tracker',
    'View Registry',
    'Create Orders',
    'View Payroll',
  ],
  supervisor: [
    'View Dashboard',
    'View Tracker',
    'View Registry',
    'Create Orders',
  ],
  worker: ['View Dashboard'],
}

const users = [
  { id: 'user-1', name: 'Admin User', email: 'admin@workershub.dev', role: 'admin' },
  { id: 'user-2', name: 'Manager User', email: 'manager@workershub.dev', role: 'manager' },
  { id: 'user-3', name: 'Supervisor User', email: 'supervisor@workershub.dev', role: 'supervisor' },
  { id: 'user-4', name: 'Worker User', email: 'worker@workershub.dev', role: 'worker' },
]

export default function AdminPage() {
  const { hasRole } = useAuth()

  if (!hasRole('admin')) {
    return <AccessDenied />
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Administration</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage system roles, permissions, and user accounts
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-ops" />
            <h2 className="text-lg font-semibold text-foreground">Role Management</h2>
          </div>

          <div className="space-y-3">
            {(Object.keys(rolePermissions) as UserRole[]).map((role) => (
              <div
                key={role}
                className="rounded-lg border border-border-subtle bg-card p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-foreground capitalize">
                    {role}
                  </h3>
                  <span className="rounded-full bg-ops/10 px-2.5 py-1 text-xs font-medium text-ops">
                    {rolePermissions[role].length} permissions
                  </span>
                </div>

                <div className="space-y-2">
                  {rolePermissions[role].map((permission) => (
                    <div key={permission} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ops"></div>
                      <span className="text-sm text-muted-foreground">
                        {permission}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-ops" />
            <h2 className="text-lg font-semibold text-foreground">User Management</h2>
          </div>

          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="rounded-lg border border-border-subtle bg-card p-4 hover:border-ops/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">{user.name}</h3>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <span className="rounded-full bg-ops/10 px-2.5 py-1 text-xs font-semibold text-ops capitalize">
                    {user.role}
                  </span>
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="rounded px-2 py-1 text-xs font-medium border border-border-subtle hover:bg-muted transition-colors">
                    Edit
                  </button>
                  <button className="rounded px-2 py-1 text-xs font-medium border border-red-500/20 text-red-600 dark:text-red-400 hover:bg-red-500/5 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-ops" />
          <h2 className="text-lg font-semibold text-foreground">System Settings</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border-subtle bg-card p-4">
            <h3 className="font-medium text-foreground mb-2">Platform Settings</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Maintenance Mode</span>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="sr-only h-3.5 w-6 appearance-none rounded-full bg-muted accent-ops"
                  />
                  <span className="h-3.5 w-6 rounded-full bg-muted"></span>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Debug Mode</span>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="sr-only h-3.5 w-6 appearance-none rounded-full bg-muted accent-ops"
                  />
                  <span className="h-3.5 w-6 rounded-full bg-muted"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border-subtle bg-card p-4">
            <h3 className="font-medium text-foreground mb-2">Security</h3>
            <div className="space-y-2 text-sm">
              <button className="w-full rounded px-3 py-1.5 text-xs font-medium border border-border-subtle hover:bg-muted transition-colors">
                Audit Logs
              </button>
              <button className="w-full rounded px-3 py-1.5 text-xs font-medium border border-border-subtle hover:bg-muted transition-colors">
                API Keys
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-border-subtle bg-card p-4">
            <h3 className="font-medium text-foreground mb-2">Integrations</h3>
            <div className="space-y-2 text-sm">
              <button className="w-full rounded px-3 py-1.5 text-xs font-medium border border-border-subtle hover:bg-muted transition-colors">
                Connected Services
              </button>
              <button className="w-full rounded px-3 py-1.5 text-xs font-medium border border-border-subtle hover:bg-muted transition-colors">
                Webhooks
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-border-subtle bg-card p-4">
            <h3 className="font-medium text-foreground mb-2">System Health</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">API Status</span>
                <span className="rounded-full bg-green-500/10 px-2 py-0.5 font-medium text-green-600 dark:text-green-400">
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Database</span>
                <span className="rounded-full bg-green-500/10 px-2 py-0.5 font-medium text-green-600 dark:text-green-400">
                  Healthy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
