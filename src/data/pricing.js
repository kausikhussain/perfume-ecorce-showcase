/**
 * ÉCORCE / Fruitivo Parfums — Centralized Indian Rupee (INR) Pricing Engine
 * 
 * Strict integer rupee representation using the official Indian locale (en-IN).
 * All monetary amounts across the website are sourced and formatted from this module.
 */

// Official INR Currency Formatter (en-IN, currency: INR, maxFractionDigits: 0)
const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/**
 * Formats any numeric rupee value into the official Indian Rupee string (e.g. ₹5,999)
 * @param {number} amount
 * @returns {string}
 */
export const formatINR = (amount) => inrFormatter.format(Math.round(amount || 0));

/**
 * Centrally Configured Product Prices in INR (₹)
 * 
 * Mapped to the catalogue offerings.
 * These prices are centrally configurable here for direct updates.
 */
export const PRODUCT_PRICES_INR = {
  'ruby-passion': 5999,      // ₹5,999 (Ruby Passion — 50ml Eau de Parfum)
  'oud-wood': 6999,          // ₹6,999 (Oud Wood — 50ml Eau de Parfum)
  'lavender-blossom': 5499,  // ₹5,499 (Lavender Blossom — 50ml Eau de Parfum)
  'blue-wave': 6499,         // ₹6,499 (Blue Wave — 50ml Eau de Parfum)
};

/**
 * Centralized Shipping & Tax Configuration (INR)
 */
export const SHIPPING_CONFIG = {
  freeShippingThresholdINR: 5000, // Complimentary express delivery on orders over ₹5,000
  standardShippingFeeINR: 450,    // Standard temperature-controlled express delivery across India
};

/**
 * Centralized Promotional Discount Codes
 */
export const PROMO_CONFIG = {
  'ECORCE20': {
    discountPercent: 20,
    label: '20% Off ÉCORCE Atelier Privilege',
  },
  'FRUITIVO20': {
    discountPercent: 20,
    label: '20% Off Welcome Offer',
  },
};

/**
 * Get product price in INR by ID
 * @param {string} id
 * @returns {number}
 */
export function getProductPriceINR(id) {
  return PRODUCT_PRICES_INR[id] || 5999;
}

