import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import SkillNetwork from './pages/Skills'
import Certificates from './pages/Certificates'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="portfolio-main">
        <Home />
        <Projects />
        <SkillNetwork />
        <Certificates />
        <Resume />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Omkar Wadkar — Built with React
      </footer>
    </div>
  )
}
