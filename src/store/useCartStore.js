import { create } from 'zustand'
import { SHIPPING_CONFIG, PROMO_CONFIG } from '../data/pricing'

export const useCartStore = create((set, get) => ({
  cart: [],
  isCartOpen: false,
  promoCode: '',
  discountPercent: 0,
  freeShippingThreshold: SHIPPING_CONFIG.freeShippingThresholdINR,
  standardShippingFee: SHIPPING_CONFIG.standardShippingFeeINR,

  setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  addItem: (perfume, quantity = 1) => get().addToCart(perfume, quantity),

  addToCart: (perfume, quantity = 1) => {
    set((state) => {
      const existing = state.cart.find((item) => item.id === perfume.id)
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === perfume.id ? { ...item, quantity: item.quantity + quantity } : item
          ),
          isCartOpen: true,
        }
      }
      return {
        cart: [...state.cart, { ...perfume, quantity }],
        isCartOpen: true,
      }
    })
  },

  removeFromCart: (perfumeId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== perfumeId),
    }))
  },

  updateQuantity: (perfumeId, delta) => {
    set((state) => {
      const updated = state.cart
        .map((item) => {
          if (item.id === perfumeId) {
            const nextQty = item.quantity + delta
            return nextQty > 0 ? { ...item, quantity: nextQty } : null
          }
          return item
        })
        .filter(Boolean)
      return { cart: updated }
    })
  },

  applyPromo: (code) => {
    const clean = (code || '').trim().toUpperCase()
    if (PROMO_CONFIG[clean]) {
      const { discountPercent, label } = PROMO_CONFIG[clean]
      set({ promoCode: clean, discountPercent })
      return { success: true, message: `${label} applied!` }
    }
    return { success: false, message: 'Invalid promo code. Try ECORCE20 or FRUITIVO20' }
  },

  removePromo: () => {
    set({ promoCode: '', discountPercent: 0 })
  },

  clearCart: () => {
    set({ cart: [], promoCode: '', discountPercent: 0 })
  },

  // Computed helper
  getTotals: () => {
    const { cart, discountPercent, freeShippingThreshold, standardShippingFee } = get()
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const discountAmount = Math.round((subtotal * discountPercent) / 100)
    const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : standardShippingFee
    const total = Math.max(0, subtotal - discountAmount + (cart.length > 0 ? shipping : 0))
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)

    return {
      subtotal,
      discountAmount,
      shipping,
      total,
      totalCount,
      isFreeShipping: subtotal >= freeShippingThreshold,
      remainingForFreeShipping: Math.max(0, freeShippingThreshold - subtotal),
    }
  },
}))
