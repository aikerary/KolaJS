import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import LearningObjectives from './components/LearningObjectives'
import EvaluationStrategies from './components/EvaluationStrategies'
import LearningActivities from './components/LearningActivities'
import Resources from './components/Resources'
import References from './components/References'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cola-light-gray">
      <Header />
      <Hero />
      <AboutSection />
      <LearningObjectives />
      <EvaluationStrategies />
      <LearningActivities />
      <Resources />
      <References />
      <Footer />
    </div>
  )
}

export default App
