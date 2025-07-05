import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0a192f', paddingTop: 80 }}>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  )
}
