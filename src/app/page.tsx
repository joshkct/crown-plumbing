import Hero          from './components/Hero'
import TrustSignals  from './components/TrustSignals'
import Services      from './components/Services'
import AboutSnippet  from './components/AboutSnippet'
import Testimonials  from './components/Testimonials'
import Process       from './components/Process'

export default function Home() {
  return (
    <main>
      <Hero backgroundImage="/images/hero-img.jpg" />
      <TrustSignals />
      <Services />
      <AboutSnippet />
      <Testimonials />
      <Process />
    </main>
  )
}