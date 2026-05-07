import React from 'react'
import styles from './Header.module.css'

export default function Header(): JSX.Element {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.logo} aria-label="MSX BASIC Docs">
          <span className={styles.logoText}>MSX BASIC</span>
          <span className={styles.logoSubtitle}>Documentación</span>
        </a>

        <nav className={`${styles.nav} ${openMenu ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#index" className={styles.navLink}>
                Índice
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#graphics" className={styles.navLink}>
                Gráficos
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#sound" className={styles.navLink}>
                Sonido
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#files" className={styles.navLink}>
                Archivos
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#functions" className={styles.navLink}>
                Funciones
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={styles.menuButton}
          aria-label="Abrir menú"
          aria-expanded={openMenu}
          aria-controls="nav"
          onClick={() => setOpenMenu(p => !p)}
          type="button"
        >
          <span className={styles.hamburger}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  )
}
