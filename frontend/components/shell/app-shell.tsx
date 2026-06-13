'use client'

import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { CommandStrip } from './command-strip'
import { SignalNav } from './signal-nav'

const SHELL_BYPASS = ['/', '/login']

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { user } = useAuth()

  // Landing page and login page render without the app shell
  if (!user || SHELL_BYPASS.includes(pathname)) {
    return children
  }

  return (
    <div className="flex h-screen flex-col bg-background">
      <CommandStrip />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-56 border-r border-border-subtle bg-card">
          <div className="mb-4 border-b border-border-subtle px-4 py-3">
            <h1 className="text-lg font-bold text-ops">WorkersHub</h1>
            <p className="text-xs text-muted-foreground">Intelligence Control Room</p>
          </div>
          <SignalNav />
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
