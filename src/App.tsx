import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { WhatIDeliver } from './components/WhatIDeliver'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Experience } from './components/Experience'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WhatIDeliver />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
