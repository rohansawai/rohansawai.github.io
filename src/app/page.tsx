import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SectionDivider from '../components/SectionDivider'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0a192f', paddingTop: 80 }}>
      <Navigation />
      <Hero />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </main>
  )
}
