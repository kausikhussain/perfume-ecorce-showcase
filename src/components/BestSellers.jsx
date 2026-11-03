import { useState } from 'react'
import { perfumes } from '../data/perfumes'
import { formatINR } from '../data/pricing'
import { useCartStore } from '../store/useCartStore'
import useReveal from '../lib/useReveal'
import './BestSellers.css'

const BestSellers = () => {
  const [addedId, setAddedId] = useState(null)
  const { addItem, openCart } = useCartStore()

  const sectionRef = useReveal([
    { selector: '.bestsellers-top', y: 30, duration: 0.7 },
    { selector: '.bs-card', y: 60, scale: 0.94, duration: 0.7, stagger: 0.1, start: 'top 80%' },
  ])

  const handleBuy = (perfume) => {
    addItem(perfume)
    setAddedId(perfume.id)
    openCart()
    setTimeout(() => {
      setAddedId(null)
    }, 1500)
  }

  return (
    <section className="bestsellers" id="best-sellers" ref={sectionRef}>
      <div className="bestsellers-top">
        <div>
          <h2>Best Sellers</h2>
          <p className="bestsellers-subtitle">Hand-crafted botanical extraits, ethically extracted</p>
        </div>
        <a href="#best-sellers" className="bestsellers-viewall">
          Explore All 4 Scents <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="bestsellers-grid">
        {perfumes.map((p) => (
          <div className="bs-card" key={p.id}>
            <div className="bs-card-media">
              <img src={p.bottle} alt={p.name} className="bs-card-img" data-perfume-id={p.id} />
            </div>
            <div className="bs-card-info">
              <span className="bs-card-vol">{p.volume} Eau de Parfum</span>
              <p className="bs-card-price">{formatINR(p.price)}</p>
              <h3 className="bs-card-name">{p.name}</h3>
              <p className="bs-card-notes">{p.notes.join(' · ')}</p>
              <button
                className={`bs-card-add ${addedId === p.id ? 'is-added' : ''}`}
                onClick={() => handleBuy(p)}
                aria-label={`Buy ${p.name}`}
              >
                {addedId === p.id ? 'Added ✓' : 'Add to Bag'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestSellers
