import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './Sidebar.module.css'

export default function Sidebar({ docs }: { docs: { slug: string; title: string; content: string }[] }) {
  const { slug } = useParams()
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.list}>
          {docs.map(d => (
            <li key={d.slug} className={`${styles.item} ${d.slug === slug ? styles.active : ''}`}>
              <Link to={`/docs/${d.slug}`}>{d.title || d.slug}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
