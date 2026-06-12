'use client'

import { useAuth } from '@/lib/auth-context'
import { AccessDenied } from '@/components/ui/access-denied'
import { SummaryCard } from '@/components/dashboard/summary-card'
import { AlertItem } from '@/components/dashboard/alert-item'
import { mockDashboardMetrics } from '@/lib/mock-data'
import { Users, Zap, TrendingUp, Activity } from 'lucide-react'

export default function DashboardPage() {
  const { hasAccess } = useAuth()

  if (!hasAccess('dashboard')) {
    return <AccessDenied />
  }

  const metrics = mockDashboardMetrics

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Real-time overview of worker operations and system health
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          label="Total Workers"
          value={metrics.totalWorkers}
          icon={<Users className="h-5 w-5" />}
        />
        <SummaryCard
          label="Active Workers"
          value={metrics.activeWorkers}
          change={12}
          variant="accent"
          icon={<Activity className="h-5 w-5" />}
        />
        <SummaryCard
          label="Total Orders"
          value={metrics.totalOrders}
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <SummaryCard
          label="System Health"
          value={`${metrics.systemHealth}%`}
          icon={<Zap className="h-5 w-5" />}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Platform Performance
            </h2>
            <div className="space-y-3">
              {metrics.platformSummaries.map((platform) => (
                <div
                  key={platform.platform}
                  className="rounded-lg border border-border-subtle bg-card p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-foreground capitalize">
                        {platform.platform.replace('_', ' ')}
                      </h3>
                      <div className="mt-2 flex gap-4 text-sm">
                        <span className="text-muted-foreground">
                          {platform.activeWorkers} active workers
                        </span>
                        <span className="text-muted-foreground">
                          {platform.ordersCompleted}/{platform.totalOrders} completed
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">
                        ${platform.totalEarnings.toLocaleString()}
                      </p>
                      <p
                        className={`text-xs font-medium ${platform.errorRate > 5 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}
                      >
                        {platform.errorRate}% error rate
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Recent Alerts
          </h2>
          <div className="space-y-3">
            {metrics.recentAlerts.slice(0, 3).map((alert) => (
              <AlertItem key={alert.id} alert={alert} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <SummaryCard
          label="Orders Completed"
          value={metrics.ordersCompleted}
        />
        <SummaryCard
          label="Orders In Progress"
          value={metrics.ordersInProgress}
        />
        <SummaryCard
          label="Total Earnings"
          value={`$${metrics.totalEarnings.toLocaleString()}`}
        />
      </div>
    </div>
  )
}
