import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = [
  ['about', 'About'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['stack', 'Tech Stack'],
  ['cocurricular', 'Co-curricular'],
  ['learning', 'Learning'],
  ['contact', 'Contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
        AS<span>/</span>
      </a>

      <nav className={`nav__links ${open ? 'open' : ''}`} aria-label="Primary">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="btn btn--sm btn--red" href={profile.resume} download>
          Resume
        </a>
      </nav>

      <button
        className={`nav__burger ${open ? 'open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
      </button>
    </header>
  )
}
