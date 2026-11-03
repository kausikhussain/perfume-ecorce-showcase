import { useCartStore } from '../store/useCartStore'
import { formatINR, SHIPPING_CONFIG } from '../data/pricing'
import useReveal from '../lib/useReveal'
import './PromoOffers.css'

const TILES = [
  {
    image: '/banner/9d2935b8-e64b-4da5-bbf9-131a9b83f82e.png',
    heading: '20% Off Privilege Offer',
    body: 'Exclusive welcome benefit: apply code ECORCE20 at checkout to enjoy 20% savings on your flacon.',
    cta: 'Apply ECORCE20 Code',
    action: 'promo',
    code: 'ECORCE20',
    icon: (
      <path
        d="M4 12.5 12.5 4h6a1.5 1.5 0 0 1 1.5 1.5v6L11.5 20 4 12.5Z M15.5 8.5h.01"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    image: '/banner/3452da4c-b8af-400c-8278-89986c138532.png',
    heading: `Free Shipping Over ${formatINR(SHIPPING_CONFIG.freeShippingThresholdINR)}`,
    body: "Complimentary temperature-controlled insured express transit directly to your door across India.",
    cta: 'Explore Best Sellers',
    action: 'scroll',
    icon: (
      <path
        d="M2 7h11v9H2V7Zm11 3h4l3 3v3h-7v-6ZM5.5 19a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Zm12 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
]

const PromoOffers = () => {
  const { applyPromo, openCart } = useCartStore()
  const sectionRef = useReveal([
    { selector: '.promo-tile', y: 50, duration: 0.75, stagger: 0.14, start: 'top 82%' },
  ])

  const handleTileAction = (tile) => {
    if (tile.action === 'promo') {
      applyPromo(tile.code || 'ECORCE20')
      openCart()
    } else {
      const el = document.getElementById('best-sellers')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="promo-offers" ref={sectionRef}>
      <div className="promo-offers-grid">
        {TILES.map((t) => (
          <div className="promo-tile" key={t.heading} style={{ backgroundImage: `url('${t.image}')` }}>
            <div className="promo-tile-overlay" />
            <span className="promo-tile-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                {t.icon}
              </svg>
            </span>
            <div className="promo-tile-content">
              <h3>{t.heading}</h3>
              <p>{t.body}</p>
              <button
                className="promo-tile-btn"
                onClick={() => handleTileAction(t)}
              >
                {t.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PromoOffers
