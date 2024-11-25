import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import * as Sentry from '@sentry/react';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import CreditEnhancement from './components/CreditEnhancement';
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      {/* <Highlights />
      <Model />
      <Features /> */}
      <CreditEnhancement/>
      <HowItWorks />
      <Pricing/>
      <FAQ/>
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
