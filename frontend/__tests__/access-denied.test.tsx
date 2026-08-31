import { describe, it, expect, vi, beforeEach } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { AccessDenied } from '@/components/ui/access-denied'

const mockUseAuth = vi.fn()

vi.mock('@/lib/auth-context', () => ({
  useAuth: () => mockUseAuth(),
}))

beforeEach(() => {
  vi.clearAllMocks()
})

describe('AccessDenied', () => {
  it('shows a spinner while auth is loading', () => {
    mockUseAuth.mockReturnValue({ user: null, appUser: null, isLoading: true })
    const { container } = render(<AccessDenied />)
    expect(screen.queryByText('Access Denied')).not.toBeInTheDocument()
    expect(container.querySelector('.animate-spin')).toBeTruthy()
  })

  it('shows a spinner after logout when there is no signed-in identity', () => {
    mockUseAuth.mockReturnValue({ user: null, appUser: null, isLoading: false })
    render(<AccessDenied />)
    expect(screen.queryByText('Access Denied')).not.toBeInTheDocument()
  })

  it('shows the warning for a signed-in user without access', () => {
    mockUseAuth.mockReturnValue({
      user: { id: 'u1' },
      appUser: { id: 'u1', role: 'worker' },
      isLoading: false,
    })
    render(<AccessDenied />)
    expect(screen.getByText('Access Denied')).toBeInTheDocument()
    expect(
      screen.getByText(/You do not have permission to access this channel/)
    ).toBeInTheDocument()
  })

  it('shows the warning for a signed-in auth user with no app profile', () => {
    mockUseAuth.mockReturnValue({
      user: { id: 'u-pending' },
      appUser: null,
      isLoading: false,
    })
    render(<AccessDenied />)
    expect(screen.getByText('Access Denied')).toBeInTheDocument()
  })
})
