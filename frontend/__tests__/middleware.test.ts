import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ── Mocks ───────────────────────────────────────────────────────

let authUserResult: any = { data: { user: null } }
let appUserQuery: any
let cookieCallbacks: { getAll: () => any; setAll: (c: any) => void } | null = null

function makeQueryChain(data: any = null, error: any = null) {
  const chain: any = {
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValue({ data, error }),
  }
  return chain
}

const mockServerClient: any = {
  auth: { getUser: vi.fn(() => Promise.resolve(authUserResult)) },
  from: vi.fn(() => appUserQuery),
}

vi.mock('@supabase/ssr', () => ({
  createServerClient: vi.fn((_url: string, _key: string, opts: any) => {
    // Capture the cookie callbacks so we can test them
    cookieCallbacks = opts?.cookies ?? null
    return mockServerClient
  }),
}))

process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'

import { middleware, config } from '@/middleware'

beforeEach(() => {
  vi.clearAllMocks()
  authUserResult = { data: { user: null } }
  cookieCallbacks = null
})

describe('middleware', () => {
  it('exports a matcher config', () => {
    expect(config.matcher).toBeDefined()
    expect(config.matcher.length).toBeGreaterThan(0)
  })

  it('redirects unauthenticated users from protected routes to login', async () => {
    const req = new NextRequest('http://localhost/dashboard')
    const res = await middleware(req)
    expect(res.status).toBe(307)
    expect(decodeURIComponent(res.headers.get('Location')!)).toContain('/login?next=/dashboard')
  })

  it('redirects unauthenticated users from /tracker', async () => {
    const req = new NextRequest('http://localhost/tracker')
    const res = await middleware(req)
    expect(decodeURIComponent(res.headers.get('Location')!)).toContain('/login?next=/tracker')
  })

  it('redirects unauthenticated users from /registry', async () => {
    const req = new NextRequest('http://localhost/registry')
    const res = await middleware(req)
    expect(decodeURIComponent(res.headers.get('Location')!)).toContain('/login?next=/registry')
  })

  it('redirects unauthenticated users from /orders', async () => {
    const req = new NextRequest('http://localhost/orders')
    const res = await middleware(req)
    expect(decodeURIComponent(res.headers.get('Location')!)).toContain('/login?next=/orders')
  })

  it('redirects unauthenticated users from /payroll', async () => {
    const req = new NextRequest('http://localhost/payroll')
    const res = await middleware(req)
    expect(decodeURIComponent(res.headers.get('Location')!)).toContain('/login?next=/payroll')
  })

  it('redirects unauthenticated users from /admin', async () => {
    const req = new NextRequest('http://localhost/admin')
    const res = await middleware(req)
    expect(decodeURIComponent(res.headers.get('Location')!)).toContain('/login?next=/admin')
  })

  it('allows unauthenticated users on non-protected routes', async () => {
    const req = new NextRequest('http://localhost/')
    const res = await middleware(req)
    expect(res.status).toBe(200)
  })

  it('allows unauthenticated dashboard access with the demo cookie', async () => {
    const req = new NextRequest('http://localhost/dashboard', {
      headers: { cookie: 'wh_demo=1' },
    })
    const res = await middleware(req)
    expect(res.status).toBe(200)
  })

  it('allows authenticated users on the landing page', async () => {
    authUserResult = { data: { user: { id: 'u1' } } }
    const req = new NextRequest('http://localhost/')
    const res = await middleware(req)
    expect(res.status).toBe(200)
  })

  it('redirects authenticated user from /login to /dashboard', async () => {
    authUserResult = { data: { user: { id: 'u1' } } }
    const req = new NextRequest('http://localhost/login')
    const res = await middleware(req)
    expect(res.status).toBe(307)
    expect(res.headers.get('Location')).toContain('/dashboard')
  })

  it('blocks non-admin from /activity with access_denied', async () => {
    authUserResult = { data: { user: { id: 'u1' } } }
    appUserQuery = makeQueryChain({ role: 'manager' })
    const req = new NextRequest('http://localhost/activity')
    const res = await middleware(req)
    expect(res.status).toBe(307)
    expect(res.headers.get('Location')).toContain('/dashboard?error=access_denied')
  })

  it('allows authenticated non-admin to access dashboard', async () => {
    authUserResult = { data: { user: { id: 'u1' } } }
    const req = new NextRequest('http://localhost/dashboard')
    const res = await middleware(req)
    expect(res.status).toBe(200)
  })

  it('blocks non-admin from /admin with redirect', async () => {
    authUserResult = { data: { user: { id: 'u1' } } }
    appUserQuery = makeQueryChain({ role: 'worker' })
    const req = new NextRequest('http://localhost/admin')
    const res = await middleware(req)
    expect(res.status).toBe(307)
    expect(res.headers.get('Location')).toContain('/dashboard?error=access_denied')
  })

  it('blocks user with null appUser from /admin', async () => {
    authUserResult = { data: { user: { id: 'u1' } } }
    appUserQuery = makeQueryChain(null)
    const req = new NextRequest('http://localhost/admin')
    const res = await middleware(req)
    expect(res.status).toBe(307)
    expect(res.headers.get('Location')).toContain('/dashboard?error=access_denied')
  })

  it('blocks unprovisioned user (PGRST116) from /admin with access_denied', async () => {
    authUserResult = { data: { user: { id: 'u1' } } }
    appUserQuery = makeQueryChain(null, { code: 'PGRST116', message: 'No rows' })
    const req = new NextRequest('http://localhost/admin')
    const res = await middleware(req)
    expect(res.status).toBe(307)
    expect(res.headers.get('Location')).toContain('/dashboard?error=access_denied')
  })

  it('does not flash access_denied when app_users query errors (logout race)', async () => {
    authUserResult = { data: { user: { id: 'u1' } } }
    appUserQuery = makeQueryChain(null, { code: '401', message: 'JWT expired' })
    const req = new NextRequest('http://localhost/admin')
    const res = await middleware(req)
    expect(res.status).toBe(307)
    expect(res.headers.get('Location')).not.toContain('access_denied')
    expect(decodeURIComponent(res.headers.get('Location')!)).toContain('/login?next=/admin')
  })

  it('allows admin to access /admin', async () => {
    authUserResult = { data: { user: { id: 'u1' } } }
    appUserQuery = makeQueryChain({ role: 'admin' })
    const req = new NextRequest('http://localhost/admin')
    const res = await middleware(req)
    expect(res.status).toBe(200)
  })

  it('allows admin to access /admin/settings subpath', async () => {
    authUserResult = { data: { user: { id: 'u1' } } }
    appUserQuery = makeQueryChain({ role: 'admin' })
    const req = new NextRequest('http://localhost/admin/settings')
    const res = await middleware(req)
    expect(res.status).toBe(200)
  })

  // ── Cookie adapter coverage ─────────────────────────────────

  it('cookie getAll delegates to request.cookies', async () => {
    const req = new NextRequest('http://localhost/')
    req.cookies.set('test-cookie', 'value')
    await middleware(req)
    expect(cookieCallbacks).not.toBeNull()
    const cookies = cookieCallbacks!.getAll()
    expect(cookies).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'test-cookie', value: 'value' }),
    ]))
  })

  it('cookie setAll sets cookies on request and response', async () => {
    const req = new NextRequest('http://localhost/')
    await middleware(req)
    expect(cookieCallbacks).not.toBeNull()
    // setAll should not throw
    cookieCallbacks!.setAll([
      { name: 'session', value: 'abc123', options: { path: '/' } },
    ])
    // After setAll, the request should have the cookie
    expect(req.cookies.get('session')?.value).toBe('abc123')
  })

  it('cookie setAll with multiple cookies', async () => {
    const req = new NextRequest('http://localhost/')
    await middleware(req)
    expect(cookieCallbacks).not.toBeNull()
    cookieCallbacks!.setAll([
      { name: 'a', value: '1', options: {} },
      { name: 'b', value: '2', options: {} },
    ])
    expect(req.cookies.get('a')?.value).toBe('1')
    expect(req.cookies.get('b')?.value).toBe('2')
  })
})
