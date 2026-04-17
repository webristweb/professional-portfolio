import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default App
