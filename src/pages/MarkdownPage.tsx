import React from 'react'
import { useParams } from 'react-router-dom'
import MarkdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/components/prism-python.js'
import styles from './MarkdownPage.module.css'
import TOC from '../components/TOC/TOC'

type Doc = { slug: string; title: string; content: string }

function useMarkdown() {
  return React.useMemo(() => {
    const md = new MarkdownIt({ html: true, linkify: true })
    md.use(markdownItAnchor, { permalink: true, permalinkClass: 'anchor', permalinkBefore: true })

    const defaultRender = md.renderer.rules.fence || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }

    md.renderer.rules.fence = function (tokens, idx, options, env, self) {
      const token = tokens[idx]
      const info = token.info ? String(token.info).trim() : ''
      const lang = info.split(/\s+/g)[0]
      const code = token.content
      if (lang && Prism.languages[lang]) {
        try {
          const highlighted = Prism.highlight(code, Prism.languages[lang], lang)
          return `<pre class="language-${md.utils.escapeHtml(lang)}"><code class="language-${md.utils.escapeHtml(lang)}">${highlighted}</code></pre>`
        } catch (e) {
          // fallthrough
        }
      }
      return `<pre class="language-text"><code>${md.utils.escapeHtml(code)}</code></pre>`
    }

    return md
  }, [])
}

export default function MarkdownPage({ docs }: { docs: Doc[] }): JSX.Element {
  const { slug } = useParams<{ slug: string }>()
  const md = useMarkdown()

  const doc = React.useMemo(() => docs.find(d => d.slug === (slug ?? '')) ?? docs[0], [docs, slug])
  const html = React.useMemo(() => md.render(doc?.content ?? ''), [md, doc])

  // build TOC from rendered HTML
  const toc = React.useMemo(() => {
    if (!html) return [] as { id: string; text: string; level: number }[]
    const parser = new DOMParser()
    const docm = parser.parseFromString(html, 'text/html')
    const nodes = Array.from(docm.querySelectorAll('h1,h2,h3'))
    return nodes.map(n => ({ id: n.id || (n.textContent || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-'), text: n.textContent || '', level: parseInt(n.tagName.substring(1), 10) }))
  }, [html])

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{doc?.title || doc?.slug}</h1>
      </header>

      <div className={styles.wrapper}>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
        <aside className={styles.toc}><TOC items={toc} /></aside>
      </div>
    </article>
  )
}
