import Link from 'next/link'
import { ArrowRight, Shield, BarChart3, Users, Zap, Globe, Lock } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/landing-bg.jpg"
            alt="Team collaboration"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        </div>

        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">WorkersHub</span>
          </div>
          <Link
            href="/login"
            className="rounded-lg border border-white/20 bg-white/5 backdrop-blur px-5 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Sign In
          </Link>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Trusted by AI annotation teams worldwide
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl">
              Command Centre for{' '}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Workers
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Manage hundreds of data annotators across 9 platforms from one place.
              Real-time tracking, role-based access control, automated alerts, and
              full audit trails — replacing spreadsheets forever.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#features"
                className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Explore Features
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">9</p>
                <p className="mt-1 text-sm text-slate-400">AI Platforms</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">4</p>
                <p className="mt-1 text-sm text-slate-400">Role Tiers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="mt-1 text-sm text-slate-400">RLS Protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Section ─────────────────────────────── */}
      <section id="features" className="relative py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold lg:text-4xl">
              Everything you need to manage{' '}
              <span className="text-violet-400">AI operations</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Built for teams who manage large-scale annotation workforces across multiple platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: 'Signal Grid',
                desc: 'Live worker tracker with dynamic JSONB task columns that adapt per platform. Track status, warnings, and progress at a glance.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: 'Field Roster',
                desc: 'Complete worker registry with geo-work test tracking, account types, and platform assignments.',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Role-Based Access',
                desc: '4-tier role system — Admin, Manager, Supervisor, Worker — with row-level security enforced at the database.',
                color: 'from-violet-500 to-purple-500',
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: '9 Platforms',
                desc: 'Oneforma, Telus, Data Annotation, Outlier, Mercor AI, Remotasks, Appen, Clickworker, and Scale AI — all in one dashboard.',
                color: 'from-orange-500 to-amber-500',
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: 'Audit Trails',
                desc: 'Every task status change is logged with user and timestamp. Full history for compliance and accountability.',
                color: 'from-red-500 to-pink-500',
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: 'Automated Alerts',
                desc: 'Slack notifications on warning escalations and daily platform summaries via Edge Functions.',
                color: 'from-yellow-500 to-orange-500',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300"
              >
                <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.color} p-2.5`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platforms Section ────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-bold lg:text-3xl mb-12">
            Supported Platforms
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { name: 'Oneforma', icon: '🟣', color: '#8B5CF6' },
              { name: 'Telus', icon: '🔵', color: '#3B82F6' },
              { name: 'Data Annotation', icon: '🟢', color: '#10B981' },
              { name: 'Outlier', icon: '🟠', color: '#F97316' },
              { name: 'Mercor AI', icon: '🩷', color: '#EC4899' },
              { name: 'Remotasks', icon: '🟡', color: '#EAB308' },
              { name: 'Appen', icon: '🔷', color: '#0EA5E9' },
              { name: 'Clickworker', icon: '🔶', color: '#F59E0B' },
              { name: 'Scale AI', icon: '⚫', color: '#6B7280' },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-5 py-2.5 text-sm font-medium"
              >
                <span className="text-lg">{p.icon}</span>
                <span style={{ color: p.color }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">
            Ready to take control?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Stop managing AI workers through spreadsheets. Get started with WorkersHub today.
          </p>
          <div className="mt-10">
            <Link
              href="/login"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 text-base font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
            >
              Sign In with Google
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="border-t border-slate-800/50 py-8 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
              <Zap className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm font-medium text-slate-400">WorkersHub</span>
          </div>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} WorkersHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
