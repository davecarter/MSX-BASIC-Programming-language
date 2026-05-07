import React from 'react'
import styles from './TOC.module.css'

export default function TOC({ items }: { items: { id: string; text: string; level: number }[] }) {
  if (!items || items.length === 0) return <div />
  return (
    <nav className={styles.toc} aria-label="Tabla de contenidos">
      <ul>
        {items.map((it) => (
          <li key={it.id} className={styles[`level${it.level}`] || ''}>
            <a href={`#${it.id}`}>{it.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
