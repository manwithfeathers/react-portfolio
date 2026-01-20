import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About.jsx'
import Albums from "./Albums.jsx"
import Projects from "./Projects.jsx"

function App() {
  
  

  return (
    <>
    <div className="homepage">
      <About className="about"/>
      <Albums className="albums"/>
      <Projects className="projects"/>
    </div>  
      
    </>
  )
}

export default App
