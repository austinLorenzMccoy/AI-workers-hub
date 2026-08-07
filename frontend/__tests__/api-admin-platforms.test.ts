import { describe, it, expect, vi, beforeEach } from 'vitest'

function makeQueryChain(data: any = null, error: any = null) {
  const chain: any = {
    select: vi.fn().mockReturnThis(),
    insert: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
    delete: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    not: vi.fn().mockReturnThis(),
    order: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValue({ data, error }),
    maybeSingle: vi.fn().mockResolvedValue({ data, error }),
  }
  Object.defineProperty(chain, 'then', {
    value: (onFulfilled: any) => Promise.resolve({ data, error, count: Array.isArray(data) ? data.length : null }).then(onFulfilled),
    writable: true,
  })
  return chain
}

let authUserResult: any = { data: { user: { id: 'admin-id' } } }
let appUserQuery: any
let adminFromImpl: any

const mockSupabase = {
  auth: { getUser: vi.fn(() => Promise.resolve(authUserResult)) },
  from: vi.fn(() => appUserQuery),
}

const mockAdmin = {
  from: vi.fn((table: string) => adminFromImpl(table)),
}

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: vi.fn(() => Promise.resolve(mockSupabase)),
  createAdminClient: vi.fn(() => mockAdmin),
}))

import { GET, POST, PATCH, DELETE } from '@/app/api/admin/platforms/route'
import { NextRequest } from 'next/server'

beforeEach(() => {
  vi.clearAllMocks()
  authUserResult = { data: { user: { id: 'admin-id' } } }
  appUserQuery = makeQueryChain({ role: 'admin' })

  adminFromImpl = (table: string) => {
    if (table === 'platforms') {
      return makeQueryChain([{ id: 1, slug: 'oneforma', label: 'Oneforma', icon: '🟣', color_hex: '#8B5CF6', is_active: true }])
    }
    // counts for usage
    return makeQueryChain(null)
  }
})

describe('GET /api/admin/platforms', () => {
  it('returns platforms for admin', async () => {
    const res = await GET()
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.platforms).toHaveLength(1)
    expect(body.usage).toBeDefined()
  })

  it('returns 403 when not admin', async () => {
    appUserQuery = makeQueryChain({ role: 'worker' })
    const res = await GET()
    expect(res.status).toBe(403)
  })
})

describe('POST /api/admin/platforms', () => {
  it('creates a platform', async () => {
    adminFromImpl = (table: string) => {
      if (table === 'platforms') {
        const chain = makeQueryChain({
          id: 10,
          slug: 'tryrating_maps',
          label: 'TryRating Maps',
          icon: '🗺️',
          color_hex: '#0EA5E9',
          is_active: true,
        })
        return chain
      }
      if (table === 'audit_log') return makeQueryChain(null)
      return makeQueryChain(null)
    }

    const req = new NextRequest('http://localhost/api/admin/platforms', {
      method: 'POST',
      body: JSON.stringify({
        label: 'TryRating Maps',
        icon: '🗺️',
        color_hex: '#0EA5E9',
      }),
    })
    const res = await POST(req)
    expect(res.status).toBe(201)
    const body = await res.json()
    expect(body.platform.label).toBe('TryRating Maps')
  })

  it('rejects missing label', async () => {
    const req = new NextRequest('http://localhost/api/admin/platforms', {
      method: 'POST',
      body: JSON.stringify({ icon: '🔷' }),
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('rejects invalid color', async () => {
    const req = new NextRequest('http://localhost/api/admin/platforms', {
      method: 'POST',
      body: JSON.stringify({ label: 'X', color_hex: 'blue' }),
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })
})

describe('PATCH /api/admin/platforms', () => {
  it('updates platform fields', async () => {
    adminFromImpl = () => makeQueryChain({
      id: 1, slug: 'oneforma', label: 'Oneforma Pro', icon: '🟣', color_hex: '#8B5CF6', is_active: true,
    })

    const req = new NextRequest('http://localhost/api/admin/platforms', {
      method: 'PATCH',
      body: JSON.stringify({ id: 1, label: 'Oneforma Pro' }),
    })
    const res = await PATCH(req)
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.platform.label).toBe('Oneforma Pro')
  })

  it('requires id', async () => {
    const req = new NextRequest('http://localhost/api/admin/platforms', {
      method: 'PATCH',
      body: JSON.stringify({ label: 'X' }),
    })
    const res = await PATCH(req)
    expect(res.status).toBe(400)
  })
})

describe('DELETE /api/admin/platforms', () => {
  it('soft-deactivates by default', async () => {
    adminFromImpl = (table: string) => {
      if (table === 'platforms') {
        return makeQueryChain({
          id: 1, slug: 'oneforma', label: 'Oneforma', is_active: false,
        })
      }
      // usage counts
      return makeQueryChain(null)
    }

    const req = new NextRequest('http://localhost/api/admin/platforms', {
      method: 'DELETE',
      body: JSON.stringify({ id: 1 }),
    })
    const res = await DELETE(req)
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.soft).toBe(true)
  })
})
