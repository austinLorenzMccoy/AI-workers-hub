'use client'

import { Lock } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

export function AccessDenied() {
  const { user, appUser, isLoading } = useAuth()

  // Logged-out / still-loading is not a permission failure.
  if (isLoading || (!user && !appUser)) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-600 border-t-blue-500" />
      </div>
    )
  }

  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center rounded-lg border border-red-500/20 bg-red-500/5 p-8 text-center">
      <Lock className="mb-4 h-12 w-12 text-red-600 dark:text-red-400" />
      <h2 className="mb-2 text-xl font-semibold text-red-900 dark:text-red-100">
        Access Denied
      </h2>
      <p className="text-sm text-red-700 dark:text-red-300">
        You do not have permission to access this channel. Contact your administrator for access.
      </p>
    </div>
  )
}
