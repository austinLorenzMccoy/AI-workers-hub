'use client'

import React, {
  createContext, useContext, useEffect,
  useState, useCallback, type ReactNode,
} from 'react'
import type { User, Session } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'
import { clearDemoCookie, hasDemoCookie, isConfiguredDemoMode } from '@/lib/demo'
import type { AppUser, UserPermissions, UserRole } from '@/types'
import { getPermissions } from '@/types'

interface AuthContextType {
  // Supabase auth state
  user:             User | null
  session:          Session | null
  appUser:          AppUser | null
  permissions:      UserPermissions | null
  isLoading:        boolean
  isDemo:           boolean

  // Auth actions
  signInWithGoogle: () => Promise<void>
  signOut:          () => Promise<void>
  refreshAppUser:   () => Promise<void>

  // Legacy helper methods (kept for UI component backward-compatibility)
  hasAccess:        (channel: string) => boolean
  hasRole:          (role: UserRole | UserRole[]) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// ── Demo mode fake user ─────────────────────────────────────────

const DEMO_APP_USER: AppUser = {
  id: 'demo-admin-001',
  email: 'admin@workershub.demo',
  display_name: 'Demo Admin',
  role: 'admin',
  platform_access: null,
  worker_id: null,
  can_view_orders: true,
  is_active: true,
  last_sign_in: new Date().toISOString(),
  created_at: '2024-01-01T00:00:00Z',
  updated_at: new Date().toISOString(),
}

// ── Provider ────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const envDemo = isConfiguredDemoMode()
  const [cookieDemo, setCookieDemo] = useState(false)
  const demo = envDemo || cookieDemo

  const [user,      setUser]      = useState<User | null>(null)
  const [session,   setSession]   = useState<Session | null>(null)
  const [appUser,   setAppUser]   = useState<AppUser | null>(envDemo ? DEMO_APP_USER : null)
  const [isLoading, setIsLoading] = useState(!envDemo) // env demo starts loaded

  // ── Real Supabase auth (skipped in env demo) ────────────────
  const supabase = envDemo ? null : createClient()

  const loadAppUser = useCallback(async (userId: string) => {
    if (!supabase) return
    const { data } = await supabase
      .from('app_users').select('*').eq('id', userId).single()
    if (data) setAppUser(data as AppUser)
  }, [supabase])

  useEffect(() => {
    if (envDemo || !supabase) return
    if (hasDemoCookie()) {
      setCookieDemo(true)
      setAppUser(DEMO_APP_USER)
      setIsLoading(false)
      return
    }
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      if (session?.user) {
        loadAppUser(session.user.id).finally(() => setIsLoading(false))
      } else {
        setIsLoading(false)
      }
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        // Only SIGNED_OUT should drop the profile. Null-session blips during
        // token refresh otherwise make hasAccess() false and flash Access Denied.
        if (event === 'SIGNED_OUT' || !session) {
          if (event === 'SIGNED_OUT') {
            setSession(null)
            setUser(null)
            setAppUser(null)
            setIsLoading(false)
          }
          return
        }
        setSession(session)
        setUser(session.user ?? null)
        if (session.user) await loadAppUser(session.user.id)
        setIsLoading(false)
      }
    )
    return () => subscription.unsubscribe()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const signInWithGoogle = useCallback(async () => {
    if (!supabase) return
    const origin =
      typeof window !== 'undefined'
        ? window.location.origin
        : (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000')
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    })
  }, [supabase])

  const signOut = useCallback(async () => {
    setIsLoading(true)
    try {
      clearDemoCookie()
      if (supabase) await supabase.auth.signOut()
    } finally {
      setUser(null)
      setSession(null)
      setAppUser(null)
      setIsLoading(false)
    }
  }, [supabase])

  const refreshAppUser = useCallback(async () => {
    if (user) await loadAppUser(user.id)
  }, [user, loadAppUser])

  // ── Legacy helpers ──────────────────────────────────────────────

  const hasAccess = useCallback((channel: string): boolean => {
    if (!appUser) return false
    const accessMap: Record<UserRole, string[]> = {
      admin:      ['dashboard', 'tracker', 'registry', 'onboarding', 'orders', 'payroll', 'reports', 'activity', 'audit', 'admin',
                   'warnings', 'disputes', 'feedback', 'referrals', 'partners', 'pay-slips'],
      // Managers manage Pay Slips (issue + settle month-end payment)
      // instead of Warnings & Disputes, which are admin-only.
      manager:    ['dashboard', 'tracker', 'registry', 'onboarding', 'payroll', 'reports',
                   'partners', 'pay-slips',
                   ...(appUser.can_view_orders ? ['orders'] : [])],
      supervisor: ['dashboard', 'tracker', 'registry',
                   ...(appUser.can_view_orders ? ['orders'] : [])],
      // Worker Recovery System — self-service portal only (own profile,
      // timesheets, pay slips, warnings, feedback, disputes).
      worker:     ['dashboard'],
      // Worker Recovery System — referral portal only.
      referrer:   ['dashboard'],
    }
    return accessMap[appUser.role as UserRole]?.includes(channel) ?? false
  }, [appUser])

  const hasRole = useCallback((role: UserRole | UserRole[]): boolean => {
    if (!appUser) return false
    const roles = Array.isArray(role) ? role : [role]
    return roles.includes(appUser.role as UserRole)
  }, [appUser])

  return (
    <AuthContext.Provider value={{
      user, session, appUser,
      permissions: appUser ? getPermissions(appUser) : null,
      isLoading,
      isDemo: demo,
      signInWithGoogle, signOut, refreshAppUser,
      hasAccess, hasRole,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (ctx === undefined) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
