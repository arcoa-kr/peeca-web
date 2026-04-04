import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import HowItWorks from './sections/HowItWorks'
import Example from './sections/Example'
import SocialProof from './sections/SocialProof'
import CTA from './sections/CTA'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Example />
        <SocialProof />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App
