import { useEffect } from 'react'
import { initLenis } from './lib/scroll'
import { Cursor } from './components/Cursor'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Work } from './components/Work'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { ScrollTop } from './components/ScrollTop'

export default function App() {
  useEffect(() => initLenis(), [])

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Work />
        <Education />
      </main>
      <Contact />
      <ScrollTop />
    </>
  )
}
