import React, { useMemo } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import MarkdownPage from './pages/MarkdownPage'

type DocsMap = {
  slug: string
  title: string
  content: string
}

const rawModules = import.meta.glob('/docs/*.md', { as: 'raw', eager: true }) as Record<string, string>

function getSlug(path: string) {
  const parts = path.split('/')
  const file = parts[parts.length - 1]
  return file.replace(/\.md$/i, '')
}

function getTitleFromContent(content: string) {
  const m = content.match(/^#\s+(.*)/m)
  return m ? m[1].trim() : ''
}

export default function App(): JSX.Element {
  const docs: DocsMap[] = useMemo(() => {
    return Object.keys(rawModules)
      .map((p) => ({ slug: getSlug(p), content: rawModules[p], title: getTitleFromContent(rawModules[p]) }))
      .sort((a, b) => a.slug.localeCompare(b.slug))
  }, [])

  const first = docs[0]?.slug ?? 'index'

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/docs/${first}`} replace />} />
      <Route path="/docs" element={<Navigate to={`/docs/${first}`} replace />} />
      <Route path="/docs/:slug" element={<Layout docs={docs}><MarkdownPage docs={docs} /></Layout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
