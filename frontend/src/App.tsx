import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import DocViewer from './components/DocViewer'
import parseMkDocs from './util/parseMkDocs'
import mkdocsYml from '../../mkdocs.yml?raw'

import type { NavItem } from './types'

const modules = import.meta.glob('../../docs/**/*.md', { as: 'raw' }) as Record<string, () => Promise<string>>

export default function App(): JSX.Element {
  const nav = parseMkDocs(mkdocsYml)

  const [slugMap, setSlugMap] = useState<Record<string, () => Promise<string>> | null>(null)

  useEffect(() => {
    const map: Record<string, () => Promise<string>> = {}
    for (const key in modules) {
      // key example: '../../docs/print.md'
      const relative = key.replace(/^.*\/docs\//, '')
      const slug = '/' + relative.replace(/\.md$/, '')
      map[slug] = modules[key]
    }
    setSlugMap(map)
  }, [])

  const defaultSlug = '/start'
  const [current, setCurrent] = useState<string>(() => {
    const hash = location.hash.slice(1)
    return hash || defaultSlug
  })

  useEffect(() => {
    const onHash = () => setCurrent(location.hash.slice(1) || defaultSlug)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div className="app-root">
      <aside className="sidebar">
        <Sidebar nav={nav} />
      </aside>
      <main className="main-content">
        {slugMap ? (
          <DocViewer slug={current} slugMap={slugMap} />
        ) : (
          <div className="loading">Loading documentation...</div>
        )}
      </main>
    </div>
  )
}
