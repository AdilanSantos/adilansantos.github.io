import { useState } from 'react'
import { projects } from '../data/content'

const allLinks = [
  { href: '#sobre', label: 'Sobre', show: true },
  { href: '#skills', label: 'Skills', show: true },
  { href: '#experiencia', label: 'Experiência', show: true },
  { href: '#projetos', label: 'Projetos', show: projects.length > 0 },
  { href: '#contato', label: 'Contato', show: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = allLinks.filter((l) => l.show)

  return (
    <header className="navbar">
      <nav className="container nav-inner">
        <a href="#sobre" className="logo">&lt;AS/&gt;</a>
        <button
          className="menu-btn"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
