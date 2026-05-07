import React from 'react'
import styles from './Layout.module.css'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../../Header'

export default function Layout({ children, docs }: { children: React.ReactNode; docs: { slug: string; title: string; content: string }[] }) {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        <Sidebar docs={docs} />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}
