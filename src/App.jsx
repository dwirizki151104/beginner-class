import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import React from 'react'
import Features from './components/Features'
import { Footer } from './components/Footer'
import { TargetAudience } from './components/TargetAudience'
import WorkshopSection from './components/WorkshopSection'
import { Galeri } from './components/Galeri'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <div id='feature'>
        <Features />
      </div>'
      <TargetAudience />
      <WorkshopSection />
      <div className='galeri'>
        <Galeri />
      </div>
      <Footer />
    </div>
  );
}

export default App