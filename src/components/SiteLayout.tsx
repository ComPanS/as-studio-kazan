import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { site } from '../content/site'

const navigation = [
  { to: '#studio', label: 'О студии' }, { to: '#services', label: 'Услуги' },
  { to: '#gallery', label: 'Работы' }, { to: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AS Studio, в начало"><img src={`${import.meta.env.BASE_URL}${site.logo}`} alt={site.name} /></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav aria-label="Основная навигация" data-open={menuOpen}>
          {navigation.map(({ to, label }) => <a key={to} href={to} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="header-booking" href={site.booking[0].url} target="_blank" rel="noreferrer">Записаться <span>↗</span></a>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <img src={`${import.meta.env.BASE_URL}${site.logo}`} alt="" />
        <p>{site.name}<br />Казань · две студии</p><p><a href={site.contact.phoneHref}>{site.contact.phone}</a><br />{site.contact.hours}</p>
        <p className="footer-note">© {new Date().getFullYear()} AS Studio</p>
      </footer>
    </div>
  )
}
