import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import React from 'react'
import Features from './components/Features'
import { Footer } from './components/Footer'
import { TargetAudience } from './components/TargetAudience'
import WorkshopSection from './components/WorkshopSection'
import { Galeri } from './components/Galeri'
import AdCalculator from './components/AdCalcuator.jsx'
import TextComponent from './components/TextComponent'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <div id='feature'>
        <Features />
      </div>'
      <TargetAudience />
      <AdCalculator />
      <WorkshopSection />
      <div className='galeri'>
      <TextComponent />
        <Galeri />
      </div>
      <Footer />
    </div>
  );
}

export default App