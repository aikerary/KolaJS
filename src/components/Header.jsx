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
          <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3">
            <img 
              src={isScrolled ? "/kolajs-inverted.svg" : "/kolajs.svg"}
              alt="Kola JS Logo" 
              className={`${isScrolled ? 'w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12' : 'w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'} object-contain transition-all duration-300`}
            />
            <div className="min-w-0 flex-1">
              <h1 className={`${isScrolled ? 'text-cola-red' : 'text-white'} font-coca-cola text-sm xs:text-lg sm:text-xl md:text-2xl tracking-wide transition-colors duration-300 leading-tight`}>KOLA JS</h1>
              <p className={`${isScrolled ? 'text-cola-dark-red' : 'text-red-100'} text-xs xs:text-xs sm:text-sm transition-colors duration-300 leading-tight hidden xs:block`}>Aprende JavaScript con Sabor</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex space-x-8">
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
            className={`lg:hidden ${isScrolled ? 'text-cola-red' : 'text-white'} focus:outline-none transition-colors duration-300 p-2 -m-2`}
          >
            <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className={`lg:hidden py-3 xs:py-4 ${isScrolled ? 'border-t border-cola-red' : 'border-t border-red-400'}`}>
            <nav className="flex flex-col space-y-2 xs:space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left py-2 px-1 text-sm xs:text-base`}
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left py-2 px-1 text-sm xs:text-base`}
              >
                Sobre Mí
              </button>
              <button 
                onClick={() => scrollToSection('objetivos')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left py-2 px-1 text-sm xs:text-base`}
              >
                Objetivos
              </button>
              <button 
                onClick={() => scrollToSection('evaluacion')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left py-2 px-1 text-sm xs:text-base`}
              >
                Evaluación
              </button>
              <button 
                onClick={() => scrollToSection('actividades')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left py-2 px-1 text-sm xs:text-base`}
              >
                Actividades
              </button>
              <button 
                onClick={() => scrollToSection('recursos')}
                className={`${isScrolled ? 'text-cola-red hover:text-cola-dark-red' : 'text-white hover:text-red-100'} transition-colors duration-300 font-medium text-left py-2 px-1 text-sm xs:text-base`}
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
