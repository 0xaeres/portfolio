import { MouseEvent } from 'react'
import { scrollToHash } from '../lib/scroll'

const go = (hash: string) => (e: MouseEvent) => {
  e.preventDefault()
  scrollToHash(hash)
}

export function Nav() {
  return (
    <header className="nav">
      <span className="nav-status">
        <span className="nav-status-dot" />
        OPEN TO BUILD
      </span>
      <span className="nav-divider" />
      <nav className="nav-links">
        <a href="#work" className="nav-link" onClick={go('#work')}>
          <span className="idx">01</span>WORK
        </a>
        <a href="#about" className="nav-link" onClick={go('#about')}>
          <span className="idx">02</span>ABOUT
        </a>
        <a href="#contact" className="nav-cta" onClick={go('#contact')}>
          LET'S TALK<span style={{ fontSize: 13 }}>↗</span>
        </a>
      </nav>
    </header>
  )
}
