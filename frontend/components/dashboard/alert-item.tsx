import type { Alert } from '@/lib/types'
import { AlertCircle, AlertTriangle, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AlertItemProps {
  alert: Alert
}

export function AlertItem({ alert }: AlertItemProps) {
  const Icon = alert.type === 'error' ? AlertCircle : alert.type === 'warning' ? AlertTriangle : Info

  const bgColor =
    alert.type === 'error'
      ? 'bg-red-500/10'
      : alert.type === 'warning'
        ? 'bg-yellow-500/10'
        : 'bg-blue-500/10'

  const borderColor =
    alert.type === 'error'
      ? 'border-red-500/20'
      : alert.type === 'warning'
        ? 'border-yellow-500/20'
        : 'border-blue-500/20'

  const textColor =
    alert.type === 'error'
      ? 'text-red-700 dark:text-red-400'
      : alert.type === 'warning'
        ? 'text-yellow-700 dark:text-yellow-400'
        : 'text-blue-700 dark:text-blue-400'

  return (
    <div className={cn('rounded-lg border p-4', bgColor, borderColor)}>
      <div className="flex gap-3">
        <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', textColor)} />
        <div className="flex-1">
          <h4 className={cn('font-medium text-sm', textColor)}>{alert.title}</h4>
          <p className="mt-1 text-xs text-muted-foreground">{alert.message}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {new Date(alert.timestamp).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  )
}
