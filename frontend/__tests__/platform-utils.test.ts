import { describe, it, expect } from 'vitest'
import {
  slugifyPlatformLabel,
  isValidPlatformSlug,
  normalizeColumnKey,
  hasOperationalData,
  emptyUsage,
} from '@/lib/platform-utils'

describe('slugifyPlatformLabel', () => {
  it('converts names to snake_case slugs', () => {
    expect(slugifyPlatformLabel('TryRating Maps')).toBe('tryrating_maps')
    expect(slugifyPlatformLabel('  Scale AI  ')).toBe('scale_ai')
    expect(slugifyPlatformLabel("Data Annotation")).toBe('data_annotation')
  })

  it('strips invalid characters', () => {
    expect(slugifyPlatformLabel('Hello@World!!!')).toBe('hello_world')
  })
})

describe('isValidPlatformSlug', () => {
  it('accepts valid slugs', () => {
    expect(isValidPlatformSlug('tryrating')).toBe(true)
    expect(isValidPlatformSlug('a')).toBe(true)
    expect(isValidPlatformSlug('scale_ai_2')).toBe(true)
  })

  it('rejects invalid slugs', () => {
    expect(isValidPlatformSlug('')).toBe(false)
    expect(isValidPlatformSlug('1abc')).toBe(false)
    expect(isValidPlatformSlug('TryRating')).toBe(false)
    expect(isValidPlatformSlug('has-dash')).toBe(false)
  })
})

describe('normalizeColumnKey', () => {
  it('uppercases and collapses spaces', () => {
    expect(normalizeColumnKey('  maps  qa  ')).toBe('MAPS QA')
    expect(normalizeColumnKey('PR')).toBe('PR')
  })
})

describe('hasOperationalData', () => {
  it('is false when empty', () => {
    expect(hasOperationalData(emptyUsage())).toBe(false)
  })

  it('is true when any operational count > 0', () => {
    expect(hasOperationalData({ ...emptyUsage(), tracker: 1 })).toBe(true)
    expect(hasOperationalData({ ...emptyUsage(), orders: 2 })).toBe(true)
  })

  it('ignores column counts', () => {
    expect(hasOperationalData({ ...emptyUsage(), columns: 5, active_columns: 3 })).toBe(false)
  })
})
