import { useState } from 'react'
import { useCartStore } from '../store/useCartStore'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'Fragrance Moods', href: '#mood-selector' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Newsletter', href: '#footer' },
]

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState(false)
  const { toggleCart, getTotals } = useCartStore()
  const { totalCount } = getTotals()

  const handleNavClick = (item) => {
    setActive(item.label)
    setOpen(false)
    const target = document.querySelector(item.href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        ÉCORCE
        <span className="navbar-logo-dot">.</span>
        <svg className="navbar-logo-leaf" width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 20c0-8 6-14 14-14 0 8-6 14-14 14Z"
            fill="#4CAF50"
          />
        </svg>
      </a>

      <button
        className="navbar-burger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links ${open ? 'is-open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <button
              className={`navbar-link ${active === item.label ? 'is-active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="navbar-icons">
        <button
          className="navbar-icon-btn navbar-cart-btn"
          onClick={toggleCart}
          aria-label="Shopping Bag"
          title="Open Shopping Bag"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="21" r="1.4" fill="currentColor" />
            <circle cx="17" cy="21" r="1.4" fill="currentColor" />
          </svg>
          {totalCount > 0 && <span className="nav-cart-badge">{totalCount}</span>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
