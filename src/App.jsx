import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import CreditEnhancement from './components/CreditEnhancement';
import Contact from './components/Contact';
import Testimonial from './components/Testinomials';
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <CreditEnhancement/>
      <HowItWorks />
      <Pricing/>
      <Testimonial/>
      <FAQ/>
      <Contact/>
      <Footer />
    </main>
  )
}

export default App;
