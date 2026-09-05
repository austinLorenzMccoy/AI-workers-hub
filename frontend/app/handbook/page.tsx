'use client'

import { useEffect, useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { BookOpen, Loader2 } from 'lucide-react'

export default function HandbookPage() {
  const [html, setHtml] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/docs/WorkersHub_Handbook.md')
      .then((res) => {
        if (!res.ok) throw new Error('not found')
        return res.text()
      })
      .then((markdown) => {
        const rawHtml = marked.parse(markdown, { async: false }) as string
        setHtml(DOMPurify.sanitize(rawHtml))
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-ops" />
        <h1 className="text-2xl font-bold text-foreground">Handbook</h1>
      </div>

      {loading && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading handbook…
        </div>
      )}

      {error && (
        <p className="text-sm text-muted-foreground">
          Couldn&apos;t load the handbook. Try refreshing the page.
        </p>
      )}

      {!loading && !error && (
        <article
          className="doc-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  )
}
