import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="gradient-cola shadow-lg sticky top-0 z-50">
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/kolajs.svg" 
              alt="Kola JS Logo" 
              className="w-24 h-24 object-contain"
            />
            <div>
              <h1 className="text-white font-coca-cola text-2xl tracking-wide">KOLA JS</h1>
              <p className="text-red-100 text-sm">Aprende JavaScript con Sabor</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-red-100 transition-colors duration-300 font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="text-white hover:text-red-100 transition-colors duration-300 font-medium"
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => scrollToSection('objetivos')}
              className="text-white hover:text-red-100 transition-colors duration-300 font-medium"
            >
              Objetivos
            </button>
            <button 
              onClick={() => scrollToSection('evaluacion')}
              className="text-white hover:text-red-100 transition-colors duration-300 font-medium"
            >
              Evaluación
            </button>
            <button 
              onClick={() => scrollToSection('actividades')}
              className="text-white hover:text-red-100 transition-colors duration-300 font-medium"
            >
              Actividades
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="text-white hover:text-red-100 transition-colors duration-300 font-medium"
            >
              Recursos
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-400">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-red-100 transition-colors duration-300 font-medium text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className="text-white hover:text-red-100 transition-colors duration-300 font-medium text-left"
              >
                Sobre Mí
              </button>
              <button 
                onClick={() => scrollToSection('objetivos')}
                className="text-white hover:text-red-100 transition-colors duration-300 font-medium text-left"
              >
                Objetivos
              </button>
              <button 
                onClick={() => scrollToSection('evaluacion')}
                className="text-white hover:text-red-100 transition-colors duration-300 font-medium text-left"
              >
                Evaluación
              </button>
              <button 
                onClick={() => scrollToSection('actividades')}
                className="text-white hover:text-red-100 transition-colors duration-300 font-medium text-left"
              >
                Actividades
              </button>
              <button 
                onClick={() => scrollToSection('recursos')}
                className="text-white hover:text-red-100 transition-colors duration-300 font-medium text-left"
              >
                Recursos
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
