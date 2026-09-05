// Demo preview never bypasses real sign-in. This flag only controls whether
// the "Preview Demo" toggle exists at all in a given deployment; actually
// flipping it still requires a real, authenticated admin (see
// auth-context.tsx). Set NEXT_PUBLIC_ENABLE_DEMO=true to offer the toggle to
// admins, e.g. for client demos or screenshots.
export const isDemoPreviewEnabled = () => process.env.NEXT_PUBLIC_ENABLE_DEMO === 'true'

// Set by AuthProvider whenever a real, signed-in admin toggles demo preview
// on or off. Lets non-React data loaders (lib/db.ts, page-level fetches)
// know whether to fall back to sample data on an empty result, without
// granting access to anything — it never decides whether auth runs.
let previewActive = false
export const setDemoPreviewActive = (active: boolean): void => {
  previewActive = active
}
export const isDemoMode = (): boolean => previewActive
