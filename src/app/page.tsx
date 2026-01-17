import Hero from '@/src/components/Hero'
import About from '@/src/components/About'
import Skills from '@/src/components/Skills'
import Projects from '@/src/components/Projects'
import Contact from '@/src/components/Contact'
import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import ScrollToTop from '@/src/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
