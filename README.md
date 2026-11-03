<div align="center">

# ⚜ ÉCORCE PARFUMS ⚜
### *Haute Parfumerie Botanique · Grasse & New Delhi*

<p align="center">
  <strong>Ten extraits distilled from bark, resin & silk.</strong><br>
  <em>An editorial, scroll-choreographed digital boutique crafted for luxury fragrance connoisseurs.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.2-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Zustand-5.0-brown?style=for-the-badge" alt="Zustand" />
  <img src="https://img.shields.io/badge/Currency-INR_(₹)-D9A441?style=for-the-badge" alt="INR" />
</p>

---

</div>

## ✦ The Vision

**ÉCORCE Parfums** (French for *bark*) explores the quiet tension between raw botanical extractions and refined Parisian haute parfumerie. Designed with the sensory rhythm of an archival editorial magazine brought to life, the experience pairs fluid physics-based motion, spatial typography, and an India-first luxury commerce engine.

Every transition, from the radial hero carousel to the scrub-driven flacon landing choreography, is calculated with micro-pixel precision.

---

## ✦ Signature Olfactive Extraits

The boutique curates four core cold-pressed botanical extraits, each hand-poured in numbered 50ml crystal flacons:

| Flacon | Identity | Olfactive Pyramid | Color Profile | Master Price (INR) |
| :--- | :--- | :--- | :--- | :---: |
| **01 · Ruby Passion** | *Velvet Romance* | Red Rose · Pomegranate · White Musk | `#6E0F1C` · Velvet Burgundy | **₹5,999** |
| **02 · Oud Wood** | *Resinous Depth* | Rare Oud · Smoked Sandalwood · Golden Amber | `#2E1C12` · Deep Obsidian | **₹6,999** |
| **03 · Lavender Blossom** | *Calming Sillage* | Fresh-Cut Lavender · Eucalyptus · White Petals | `#756BC4` · Lilac Mist | **₹5,499** |
| **04 · Blue Wave** | *Aquatic Marine* | Sea Breeze · Calabrian Bergamot · Blue Musk | `#123F5E` · Abyssal Marine | **₹6,499** |

---

## ✦ Creative & Technical Highlights

### 1. Spatial Motion & Scroll Choreography
- **GSAP ScrollTrigger Interpolation**: The active hero bottle physically uncouples from the 2D stage upon scroll and scrub-flies with seamless dynamic 3D translation directly into its matching Best Sellers card aperture.
- **Lenis Kinetic Inertia**: Silky, momentum-conserving smooth scroll synchronized to browser repaint ticks.
- **Bi-directional Color Transitions**: Fluid background and ambient illumination shifts driven by Framer Motion scene variants when browsing extraits.

### 2. Complete Indian Rupee (INR) Commerce Architecture
- **Centralized Engine (`src/data/pricing.js`)**: Pure integer rupee pricing architecture guaranteeing zero floating-point rounding discrepancies.
- **Official Formatting**: Adheres to the Indian numbering system (`₹5,999`, `₹12,500`, `₹1,25,000`) via `Intl.NumberFormat('en-IN')`.
- **Slide-Over Shopping Bag (`src/components/CartDrawer.jsx`)**:
  - Real-time reactive state powered by **Zustand**.
  - Dynamic **Free Express Shipping Progress Bar** calibrated to the ₹5,000 threshold.
  - Active promotional code engine verifying privilege coupons (`ECORCE20`).
  - Simulated checkout with loading feedback, unique order reservation ID generation (`#FRU-XXXXXX`), and celebratory confetti particle physics.

### 3. Interactive Fragrance Mood Finder
- Accordion selector matching 7 human personas (*The Romantic*, *The Magnetic*, *The Icon*, *The Free Spirit*, *The Adventurer*, *The Seductress*, *The Rebel*) to their exact olfactory pairing with instant one-click bag addition.

### 4. Consolidated Social Proof & Verification
- Unified customer evaluation matrix integrating **4.9 / 5.0 Average Customer Score**, **2,400+ Verified Five-Star Reviews**, and **100% Cruelty-Free Botanical Guarantee**.

---

## ✦ Architecture & Project Topology

```
perfume-source/
├── public/
│   ├── banner/             # Editorial campaigns & promotional imagery
│   ├── images/perfume/     # High-resolution flacons & ambient backdrops
│   ├── people/             # Mood selector editorial portraits
│   └── reviews/            # Verified customer social proof photography
├── src/
│   ├── components/
│   │   ├── BestSellers.jsx # Catalog grid with real-time Add-to-Bag actions
│   │   ├── CartDrawer.jsx  # Slide-over luxury shopping bag & checkout demo
│   │   ├── Footer.jsx      # Brand provenance, newsletter & atelier navigation
│   │   ├── Hero.jsx        # Radial carousel with GSAP scroll-scrub bottle flight
│   │   ├── Loader.jsx      # Minimalist 400ms entrance splash
│   │   ├── MoodSelector.jsx# Interactive persona-to-extrait discovery engine
│   │   ├── Navbar.jsx      # Floating navigation with dynamic cart badge counter
│   │   ├── PromoOffers.jsx # Complimentary shipping & privilege promo banners
│   │   ├── Reviews.jsx     # Curated customer love & trust metric bar
│   │   └── SocialIcons.jsx # Atelier social connection links
│   ├── data/
│   │   ├── perfumes.js     # Botanical specifications, notes & imagery
│   │   └── pricing.js      # Centralized INR pricing, shipping & promo engine
│   ├── lib/
│   │   ├── useLenis.js     # Momentum-based smooth scroll synchronization
│   │   └── useReveal.js    # Intersection observer reveal triggers
│   ├── store/
│   │   └── useCartStore.js # Zustand global cart state & mathematical totals
│   ├── App.jsx             # Master view assembler
│   ├── index.css           # Design tokens, typography & CSS reset
│   └── main.jsx            # Application mount point
├── index.html              # HTML5 entry & Google Font preconnects
├── package.json            # Manifest & clean production dependencies
└── vite.config.js          # Vite build optimization configuration
```

---

## ✦ Design System & Palette

| Token | Hex Code | Visual Tone | Application |
| :--- | :---: | :--- | :--- |
| **Burgundy Velvet** | `#6E0F1C` | Warm, opulent, romantic | Ruby Passion stage & luxury accents |
| **Smoky Oud** | `#2E1C12` | Earthy, resinous, dark | Oud Wood stage & nocturnal backdrop |
| **Lavender Haze** | `#756BC4` | Calming, powdery, floral | Lavender Blossom ambient illumination |
| **Abyssal Marine** | `#123F5E` | Deep ocean, fresh, crisp | Blue Wave stage & aquatic horizon |
| **Gilt Gold** | `#E0A951` | Regal, metallic, warm | Verified ratings, badges & highlights |
| **Alabaster Linen**| `#FBF8F5` | Natural, soft, tactile | Pill badges, cards & typography |
| **Obsidian Noir**  | `#141414` | Quiet, grounded, modern | Dark mode canvas, card borders & plinths |

---

## ✦ Installation & Local Development

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **Package Manager**: `npm` (v9+) or `pnpm`

### 1. Clone & Navigate
```bash
git clone https://github.com/kausikhussain/perfume-ecorce-showcase.git
cd perfume-ecorce-showcase
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to experience the boutique live.

### 4. Production Build & Preview
```bash
# Compile optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ✦ Verification & Quality Benchmarks

- **Zero Console Errors**: Impeccable runtime performance across Chromium, WebKit, and Gecko.
- **Production Bundle**: Minified and tree-shaken with Vite in under 5 seconds.
- **Complete INR Integrity**: Zero untranslated dollar (`$`) symbols anywhere on the interface.
- **Responsive Geometry**: Fully adaptive grid and slide-over panels optimized from 320px mobile viewports to 4K ultra-wide monitors.

---

<div align="center">

*Distilled with passion in Grasse, France. Localized for India.*  
**© 2026 ÉCORCE Parfums. All rights reserved.**

</div>
