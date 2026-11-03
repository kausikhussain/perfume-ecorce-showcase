import { useState } from 'react'
import confetti from 'canvas-confetti'
import { useCartStore } from '../store/useCartStore'
import { formatINR, SHIPPING_CONFIG } from '../data/pricing'
import './CartDrawer.css'

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    promoCode,
    applyPromo,
    removePromo,
    clearCart,
    getTotals,
  } = useCartStore()

  const [inputCode, setInputCode] = useState('')
  const [promoMessage, setPromoMessage] = useState(null)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  if (!isCartOpen) return null

  const {
    subtotal,
    discountAmount,
    shipping,
    total,
    totalCount,
    isFreeShipping,
    remainingForFreeShipping,
  } = getTotals()

  const handlePromoSubmit = (e) => {
    e.preventDefault()
    if (!inputCode) return
    const res = applyPromo(inputCode)
    setPromoMessage(res)
    if (res.success) {
      setInputCode('')
    }
  }

  const handleCheckout = () => {
    setIsCheckingOut(true)
    setTimeout(() => {
      setIsCheckingOut(false)
      setOrderComplete(true)
      clearCart()
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4caf50', '#8a1220', '#e0a951', '#ffffff'],
        })
      } catch {
        // ignore if confetti canvas unavailable
      }
    }, 1000)
  }

  const handleClose = () => {
    setCartOpen(false)
    setOrderComplete(false)
  }

  return (
    <div className="cart-backdrop" onClick={handleClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title-row">
            <h3>Your Shopping Bag</h3>
            <span className="cart-badge">{totalCount}</span>
          </div>
          <button className="cart-close-btn" onClick={handleClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="cart-shipping-banner">
          {isFreeShipping ? (
            <p className="cart-shipping-text is-unlocked">
              🎉 <strong>Free Express Shipping Across India Unlocked!</strong>
            </p>
          ) : (
            <p className="cart-shipping-text">
              Add <strong>{formatINR(remainingForFreeShipping)}</strong> more for{' '}
              <strong>Free Express Shipping</strong>
            </p>
          )}
          <div className="cart-progress-track">
            <div
              className="cart-progress-fill"
              style={{ width: `${Math.min(100, (subtotal / SHIPPING_CONFIG.freeShippingThresholdINR) * 100)}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="cart-body">
          {orderComplete ? (
            <div className="cart-success">
              <div className="cart-success-icon">✓</div>
              <h4>Thank You for Your Order!</h4>
              <p>Your order #FRU-{Math.floor(100000 + Math.random() * 900000)} is confirmed.</p>
              <p className="cart-success-sub">A confirmation email has been dispatched with tracking details.</p>
              <button className="btn btn-cream cart-continue-btn" onClick={handleClose}>
                Continue Shopping
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="cart-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="cart-empty-icon">
                <path
                  d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="21" r="1.4" fill="currentColor" />
                <circle cx="17" cy="21" r="1.4" fill="currentColor" />
              </svg>
              <h4>Your bag is empty</h4>
              <p>Looks like you haven&apos;t added any natural fragrances yet.</p>
              <a
                href="#best-sellers"
                className="btn btn-cream cart-browse-btn"
                onClick={handleClose}
              >
                Browse Best Sellers
              </a>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-img-wrap">
                    <img src={item.bottle} alt={item.name} className="cart-item-img" />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} from bag`}
                      >
                        ✕
                      </button>
                    </div>
                    <span className="cart-item-volume">{item.volume || '50ml'} · Organic Essence</span>
                    <div className="cart-item-bottom">
                      <div className="cart-item-qty">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="cart-item-price">{formatINR(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout */}
        {cart.length > 0 && !orderComplete && (
          <div className="cart-footer">
            {/* Promo Code Input */}
            <form className="cart-promo-form" onSubmit={handlePromoSubmit}>
              <input
                type="text"
                placeholder="Discount code (e.g. ECORCE20 or FRUITIVO20)"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className="cart-promo-input"
              />
              <button type="submit" className="cart-promo-btn">
                Apply
              </button>
            </form>

            {promoMessage && (
              <p className={`cart-promo-msg ${promoMessage.success ? 'is-success' : 'is-error'}`}>
                {promoMessage.message}
              </p>
            )}

            {promoCode && (
              <div className="cart-applied-promo">
                <span>Code {promoCode} (20% Off)</span>
                <button onClick={removePromo} className="cart-remove-promo">
                  Remove
                </button>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="cart-breakdown">
              <div className="breakdown-row">
                <span>Subtotal</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="breakdown-row is-discount">
                  <span>Discount (20%)</span>
                  <span>-{formatINR(discountAmount)}</span>
                </div>
              )}
              <div className="breakdown-row">
                <span>Estimated Shipping</span>
                <span>{shipping === 0 ? 'FREE' : formatINR(shipping)}</span>
              </div>
              <div className="breakdown-row breakdown-total">
                <strong>Total (incl. GST)</strong>
                <strong>{formatINR(total)}</strong>
              </div>
            </div>

            <button
              className="btn btn-cream cart-checkout-btn"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'Processing Order...' : `Proceed to Checkout · ${formatINR(total)}`}
            </button>
            <p className="cart-guarantee">🌿 30-Day Privilege Guarantee · Complimentary Returns Across India</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartDrawer
