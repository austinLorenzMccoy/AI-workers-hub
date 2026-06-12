'use client'

import { AuthProvider } from '@/lib/auth-context'
import { AppShell } from '@/components/shell/app-shell'

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AppShell>{children}</AppShell>
    </AuthProvider>
  )
}
