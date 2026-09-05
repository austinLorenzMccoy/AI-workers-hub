// Set by AuthProvider whenever a real, signed-in admin toggles demo preview
// on or off. Lets non-React data loaders (lib/db.ts, page-level fetches)
// know whether to fall back to sample data on an empty result, without
// granting access to anything — it never decides whether auth runs.
let previewActive = false
export const setDemoPreviewActive = (active: boolean): void => {
  previewActive = active
}
export const isDemoMode = (): boolean => previewActive
