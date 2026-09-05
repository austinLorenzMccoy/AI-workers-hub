'use client'

import { Suspense, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/lib/toast-context'
import { CommandStrip } from './command-strip'
import { SignalNav } from './signal-nav'
import { WatermarkBackground } from './watermark-background'

const SHELL_BYPASS = ['/', '/login']

function AccessDeniedQueryHandler() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const { appUser, isLoading, hasRole } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    if (isLoading) return
    if (searchParams.get('error') !== 'access_denied') return

    // Only warn people who are signed in without admin access.
    // Logout / role-refresh races can also land here with no profile — skip those.
    if (appUser && !hasRole('admin')) {
      toast(
        'You do not have permission to access that page. Contact your administrator for access.',
        'error'
      )
    }

    const params = new URLSearchParams(searchParams.toString())
    params.delete('error')
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname)
  }, [isLoading, searchParams, appUser, hasRole, toast, router, pathname])

  return null
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { user, appUser, isLoading } = useAuth()
  const isSignedIn = !!(user || appUser)

  const queryHandler = (
    <Suspense fallback={null}>
      <AccessDeniedQueryHandler />
    </Suspense>
  )

  // Landing page and login page render without the app shell
  if (SHELL_BYPASS.includes(pathname)) {
    return (
      <>
        {queryHandler}
        {children}
      </>
    )
  }

  if (isLoading) {
    return (
      <>
        {queryHandler}
        <div className="relative flex h-screen items-center justify-center bg-background">
          <WatermarkBackground />
          <div className="relative z-10 h-6 w-6 animate-spin rounded-full border-2 border-slate-600 border-t-blue-500" />
        </div>
      </>
    )
  }

  if (!isSignedIn) {
    return (
      <>
        {queryHandler}
        <div className="relative min-h-screen bg-background">
          <WatermarkBackground />
          <div className="relative z-10">{children}</div>
        </div>
      </>
    )
  }

  return (
    <div className="relative flex h-screen flex-col bg-background">
      {queryHandler}
      <WatermarkBackground />
      <div className="relative z-10 flex h-full flex-col">
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
    </div>
  )
}
