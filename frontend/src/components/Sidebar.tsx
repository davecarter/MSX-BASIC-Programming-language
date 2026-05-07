import React from 'react'
import type { NavItem } from '../types'

function renderItems(items: NavItem[]): JSX.Element {
  return (
    <ul className="nav-list">
      {items.map((it) => (
        <li key={it.title} className="nav-item">
          {it.path ? (
            <a href={`#${it.path}`} className="nav-link">
              {it.title}
            </a>
          ) : (
            <div className="nav-group">{it.title}</div>
          )}
          {it.children && <div className="nav-children">{renderItems(it.children)}</div>}
        </li>
      ))}
    </ul>
  )
}

export default function Sidebar({ nav }: { nav: NavItem[] }): JSX.Element {
  return (
    <div className="sidebar-root">
      <div className="sidebar-header">MSX BASIC Docs</div>
      <nav className="sidebar-nav">{renderItems(nav)}</nav>
    </div>
  )
}
