'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AccessDenied } from '@/components/ui/access-denied'
import { fetchAllUsers } from '@/lib/db'
import type { UserRole, AppUser } from '@/types'
import { Settings, Shield, Users, Loader2 } from 'lucide-react'

const rolePermissions: Record<UserRole, string[]> = {
  admin: [
    'View Dashboard',
    'View Tracker',
    'View Registry',
    'Create Orders',
    'View Payroll',
    'Access Admin Panel',
    'Manage Roles',
    'Export Data',
  ],
  manager: [
    'View Dashboard',
    'View Tracker',
    'View Registry',
    'View Orders (if granted)',
    'View Payroll',
    'Export Data',
  ],
  supervisor: [
    'View Dashboard',
    'View Tracker',
    'View Registry',
    'View Orders (if granted)',
  ],
  worker: ['View Dashboard (own data)'],
}

export default function AdminPage() {
  const { hasRole } = useAuth()
  const [users, setUsers] = useState<AppUser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAllUsers().then((data) => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  if (!hasRole('admin')) {
    return <AccessDenied />
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
      <div>
        <h1 className="text-3xl font-bold text-foreground">Control Tower</h1>
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
                    {users.filter((u) => u.role === role).length} users · {rolePermissions[role].length} permissions
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
            <h2 className="text-lg font-semibold text-foreground">
              User Management ({users.length})
            </h2>
          </div>

          <div className="space-y-3">
            {users.length === 0 ? (
              <div className="rounded-lg border border-border-subtle bg-card p-8 text-center">
                <p className="text-muted-foreground">No users yet</p>
              </div>
            ) : (
              users.map((user) => (
                <div
                  key={user.id}
                  className="rounded-lg border border-border-subtle bg-card p-4 hover:border-ops/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">
                        {user.display_name ?? user.email.split('@')[0]}
                      </h3>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <span className="rounded-full bg-ops/10 px-2.5 py-1 text-xs font-semibold text-ops capitalize">
                      {user.role}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {user.platform_access ? (
                      user.platform_access.map((slug) => (
                        <span key={slug} className="rounded bg-muted px-1.5 py-0.5">{slug}</span>
                      ))
                    ) : (
                      <span className="italic">All platforms</span>
                    )}
                    {user.can_view_orders && (
                      <span className="rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 px-1.5 py-0.5">
                        Can view orders
                      </span>
                    )}
                  </div>
                  {user.last_sign_in && (
                    <p className="mt-2 text-[10px] text-muted-foreground">
                      Last sign-in: {new Date(user.last_sign_in).toLocaleString()}
                    </p>
                  )}
                </div>
              ))
            )}
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
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total Users</span>
                <span className="font-medium text-foreground">{users.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
