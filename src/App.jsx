import useLenis from './lib/useLenis'
import Loader from './components/Loader'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import MoodSelector from './components/MoodSelector'
import Reviews from './components/Reviews'
import PromoOffers from './components/PromoOffers'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

function App() {
  useLenis()

  return (
    <>
      <Loader />
      <Hero />
      <BestSellers />
      <MoodSelector />
      <Reviews />
      <PromoOffers />
      <Footer />
      <CartDrawer />
    </>
  )
}

export default App
