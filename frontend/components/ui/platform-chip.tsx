import { cn } from '@/lib/utils'
import type { Platform } from '@/types'

export interface PlatformChipProps {
  /** Full platform row from DB (preferred — fully data-driven). */
  platform?: Pick<Platform, 'slug' | 'label' | 'icon' | 'color_hex'>
  /** Fallback when only a slug is available. */
  slug?: string
  label?: string
  icon?: string
  colorHex?: string
  variant?: 'default' | 'compact'
  className?: string
}

/**
 * Data-driven platform badge. Prefer passing a Platform object from
 * fetchPlatforms() so new platforms render correctly without code changes.
 */
export function PlatformChip({
  platform,
  slug,
  label,
  icon,
  colorHex,
  variant = 'default',
  className,
}: PlatformChipProps) {
  const resolvedSlug = platform?.slug ?? slug ?? 'unknown'
  const resolvedLabel = platform?.label ?? label ?? resolvedSlug
  const resolvedIcon = platform?.icon ?? icon ?? '🔷'
  const resolvedColor = platform?.color_hex ?? colorHex ?? '#6366F1'

  if (variant === 'compact') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium border',
          className
        )}
        style={{
          backgroundColor: `${resolvedColor}18`,
          color: resolvedColor,
          borderColor: `${resolvedColor}33`,
        }}
        title={resolvedLabel}
      >
        <span aria-hidden>{resolvedIcon}</span>
        <span>{resolvedLabel.split(' ').pop()}</span>
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border',
        className
      )}
      style={{
        backgroundColor: `${resolvedColor}18`,
        color: resolvedColor,
        borderColor: `${resolvedColor}33`,
      }}
    >
      <span aria-hidden>{resolvedIcon}</span>
      {resolvedLabel}
    </span>
  )
}
