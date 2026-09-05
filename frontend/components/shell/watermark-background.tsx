export function WatermarkBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] dark:opacity-[0.08]"
      style={{
        backgroundImage: 'url(/brand/logo-mark.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '220px 231px',
      }}
    />
  )
}
