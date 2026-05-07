import React, { useEffect, useState } from 'react'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({ html: true, linkify: true, typographer: true })

export default function DocViewer({
  slug,
  slugMap,
}: {
  slug: string
  slugMap: Record<string, () => Promise<string>>
}): JSX.Element {
  const [html, setHtml] = useState<string>('')

  useEffect(() => {
    let active = true
    const loader = slugMap[slug] || slugMap['/start'] || Object.values(slugMap)[0]
    if (!loader) {
      setHtml('<h1>Document not found</h1>')
      return
    }
    loader()
      .then((raw) => {
        if (!active) return
        setHtml(md.render(raw))
      })
      .catch((err) => {
        console.error('Error loading doc:', err)
        setHtml('<h1>Error loading document</h1>')
      })
    return () => {
      active = false
    }
  }, [slug, slugMap])

  return (
    <article className="doc-article" dangerouslySetInnerHTML={{ __html: html }} />
  )
}
