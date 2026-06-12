'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import {
  LayoutDashboard,
  Grid3x3,
  Users,
  ShoppingCart,
  DollarSign,
  Settings,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const channels = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    id: 'tracker',
    label: 'Tracker',
    icon: Grid3x3,
    href: '/tracker',
  },
  {
    id: 'registry',
    label: 'Registry',
    icon: Users,
    href: '/registry',
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: ShoppingCart,
    href: '/orders',
  },
  {
    id: 'payroll',
    label: 'Payroll',
    icon: DollarSign,
    href: '/payroll',
  },
  {
    id: 'admin',
    label: 'Admin',
    icon: Settings,
    href: '/admin',
  },
]

export function SignalNav() {
  const pathname = usePathname()
  const { hasAccess } = useAuth()

  return (
    <nav className="flex flex-col gap-1 px-3 py-4">
      {channels.map((channel) => {
        if (!hasAccess(channel.id)) return null

        const Icon = channel.icon
        const isActive = pathname.startsWith(channel.href)

        return (
          <Link
            key={channel.id}
            href={channel.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-ops/20 text-ops'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{channel.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
