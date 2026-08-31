export const DEMO_COOKIE = 'wh_demo'

function isPlaceholderSupabase(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  return !url || url === 'https://placeholder.supabase.co' || url.includes('placeholder')
}

export function hasDemoCookie(): boolean {
  if (typeof document === 'undefined') return false
  return document.cookie.split(';').some((part) => part.trim().startsWith(`${DEMO_COOKIE}=1`))
}

export function enableDemoCookie(): void {
  if (typeof document === 'undefined') return
  document.cookie = `${DEMO_COOKIE}=1; path=/; max-age=86400; SameSite=Lax`
}

export function clearDemoCookie(): void {
  if (typeof document === 'undefined') return
  document.cookie = `${DEMO_COOKIE}=; path=/; max-age=0; SameSite=Lax`
}

/** Env-only demo (same on server and client). Cookie preview is detected in the browser. */
export function isConfiguredDemoMode(): boolean {
  return isPlaceholderSupabase() || process.env.NEXT_PUBLIC_DEMO_PREVIEW === 'true'
}

/** True when the app should show the client-preview dashboard without Google. */
export const isDemoMode = () => isConfiguredDemoMode() || hasDemoCookie()
