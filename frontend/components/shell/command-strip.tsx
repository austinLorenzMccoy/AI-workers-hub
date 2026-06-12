'use client'

import { useAuth } from '@/lib/auth-context'
import { LogOut, Settings } from 'lucide-react'

export function CommandStrip() {
  const { appUser, signOut } = useAuth()

  if (!appUser) return null

  const displayName = appUser.display_name ?? appUser.email.split('@')[0]

  return (
    <div className="flex items-center justify-between border-b border-border-subtle bg-card px-6 py-3">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-signal animate-pulse"></div>
        <span className="text-xs font-medium text-muted-foreground">
          {displayName} • {appUser.role.toUpperCase()}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded p-1.5 hover:bg-muted transition-colors">
          <Settings className="h-4 w-4 text-muted-foreground" />
        </button>
        <button
          onClick={signOut}
          className="rounded p-1.5 hover:bg-muted transition-colors"
        >
          <LogOut className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  )
}
