'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { LogOut, Settings, X } from 'lucide-react'

export function CommandStrip() {
  const router = useRouter()
  const { appUser, signOut } = useAuth()
  const [showSettings, setShowSettings] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)

  if (!appUser) return null

  const displayName = appUser.display_name ?? appUser.email.split('@')[0]

  const handleSignOut = async () => {
    setLoggingOut(true)
    await signOut()
    router.push('/')
  }

  return (
    <>
      <div className="flex items-center justify-between border-b border-border-subtle bg-card px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-signal animate-pulse"></div>
          <span className="text-xs font-medium text-muted-foreground">
            {displayName} • {appUser.role.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="rounded p-1.5 hover:bg-muted transition-colors"
            title="Settings"
          >
            <Settings className="h-4 w-4 text-muted-foreground" />
          </button>
          <button
            onClick={handleSignOut}
            disabled={loggingOut}
            className="rounded p-1.5 hover:bg-red-500/10 transition-colors disabled:opacity-50"
            title="Sign out"
          >
            <LogOut className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="border-b border-border-subtle bg-card/80 backdrop-blur px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">Account Settings</h3>
            <button
              onClick={() => setShowSettings(false)}
              className="rounded p-1 hover:bg-muted transition-colors"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border-subtle bg-background/50 p-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
              <p className="mt-1 text-sm font-medium text-foreground truncate">{appUser.email}</p>
            </div>
            <div className="rounded-lg border border-border-subtle bg-background/50 p-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Role</p>
              <p className="mt-1 text-sm font-medium text-foreground capitalize">{appUser.role}</p>
            </div>
            <div className="rounded-lg border border-border-subtle bg-background/50 p-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Platforms</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {appUser.platform_access ? appUser.platform_access.join(', ') : 'All platforms'}
              </p>
            </div>
            <div className="rounded-lg border border-border-subtle bg-background/50 p-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Orders Access</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {appUser.can_view_orders ? '✅ Granted' : '❌ Denied'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
