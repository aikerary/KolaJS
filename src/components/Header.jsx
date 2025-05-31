import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`${isScrolled ? 'bg-white shadow-xl' : 'gradient-cola shadow-lg'} sticky top-0 z-50 transition-all duration-300 ease-in-out`}>
      <div className="section-container">
        <div className={`flex items-center justify-between ${isScrolled ? 'py-2' : 'py-4'} transition-all duration-300`}>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={isScrolled ? "/kolajs-inverted.svg" : "/kolajs.svg"}
              alt="Kola JS Logo" 
              className={`${isScrolled ? 'w-12 h-12' : 'w-24 h-24'} object-contain transition-all duration-300`}
            />
            <div>
              <h1 className={`${isScrolled ? 'text-cola-red' : 'text-white'} font-coca-cola text-2xl tracking-wide transition-colors duration-300`}>KOLA JS</h1>
              <p className={`${isScrolled ? 'text-cola-dark-red' : 'text-red-100'} text-sm transition-colors duration-300`}>Aprende JavaScript con Sabor</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium`}
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium`}
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => scrollToSection('objetivos')}
              className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium`}
            >
              Objetivos
            </button>
            <button 
              onClick={() => scrollToSection('evaluacion')}
              className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium`}
            >
              Evaluación
            </button>
            <button 
              onClick={() => scrollToSection('actividades')}
              className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium`}
            >
              Actividades
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium`}
            >
              Recursos
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-cola-red' : 'text-white'} focus:outline-none transition-colors duration-300`}
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
          <div className={`md:hidden py-4 ${isScrolled ? 'border-t border-cola-red' : 'border-t border-red-400'}`}>
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left`}
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left`}
              >
                Sobre Mí
              </button>
              <button 
                onClick={() => scrollToSection('objetivos')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left`}
              >
                Objetivos
              </button>
              <button 
                onClick={() => scrollToSection('evaluacion')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left`}
              >
                Evaluación
              </button>
              <button 
                onClick={() => scrollToSection('actividades')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left`}
              >
                Actividades
              </button>
              <button 
                onClick={() => scrollToSection('recursos')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left`}
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
