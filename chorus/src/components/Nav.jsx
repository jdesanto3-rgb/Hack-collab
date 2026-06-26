import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'

function NavLogoIcon() {
  const { theme } = useTheme()
  const src = theme === 'canvas'
    ? '/Logos/weave_logo_clean_black_on_tan_64px.png'
    : '/Logos/weave_logo_original_glow_on_black_64px.png'
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="nav-logo-icon"
      height="24"
      style={{ height: '24px', width: 'auto', display: 'block' }}
    />
  )
}

const THEMES = [
  { id: 'obsidian', label: 'Obsidian' },
  { id: 'canvas', label: 'Canvas' },
  { id: 'blueprint', label: 'Blueprint' },
]

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/the-system', label: 'The System' },
  { to: '/agents', label: 'Agents' },
  { to: '/why-chorus', label: 'Why Weave' },
]

export default function Nav() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" onClick={handleNavClick}>
            <NavLogoIcon />
            Weave
          </Link>

          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <div className="theme-toggle" role="group" aria-label="Theme">
              {THEMES.map(t => (
                <button
                  key={t.id}
                  className={`theme-btn${theme === t.id ? ' active' : ''}`}
                  onClick={() => setTheme(t.id)}
                  aria-pressed={theme === t.id}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <Link to="/demo" className="nav-cta">Pull the Thread</Link>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {LINKS.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={handleNavClick}>
            {l.label}
          </NavLink>
        ))}
        <NavLink to="/demo" onClick={handleNavClick}>Demo</NavLink>
        <div className="mobile-theme-row">
          {THEMES.map(t => (
            <button
              key={t.id}
              className={theme === t.id ? 'active' : ''}
              onClick={() => { setTheme(t.id); setMenuOpen(false) }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
