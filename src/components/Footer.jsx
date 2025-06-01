import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer 
      className="gradient-cola text-white relative"
      style={{
        zIndex: 10,
      }}
    >
      <div className="section-container py-12 xs:py-16 overflow-hidden">
        <div className="grid gap-6 xs:gap-8 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2 overflow-hidden">
            <div className="flex items-center space-x-3 mb-4 xs:mb-6 overflow-hidden">
              <img 
                src="/kolajs.svg"
                alt="Kola JS Logo" 
                className="w-16 h-16 xs:w-20 xs:h-20 object-contain flex-shrink-0"
              />
              <div className="min-w-0 overflow-hidden">
                <h3 className="font-coca-cola text-xl xs:text-2xl tracking-wide break-words">KOLA JS</h3>
                <p className="text-red-100 text-xs xs:text-sm break-words">Aprende JavaScript con Sabor</p>
              </div>
            </div>
            <p className="text-red-100 leading-relaxed mb-4 xs:mb-6 text-sm xs:text-base break-words overflow-wrap-anywhere">
              Unidad didáctica diseñada para estudiantes de Ingeniería de Sistemas 
              que buscan dominar JavaScript mediante metodologías de aprendizaje 
              interactivo y evaluación continua.
            </p>
            <div className="flex space-x-3 xs:space-x-4">
              <a 
                href="https://github.com/aikerary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-cola-red w-8 h-8 xs:w-10 xs:h-10 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors duration-300 flex-shrink-0"
              >
                <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/aikerary/KolaJS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-cola-red w-8 h-8 xs:w-10 xs:h-10 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors duration-300 flex-shrink-0"
              >
                <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="overflow-hidden">
            <h4 className="font-coca-cola text-base xs:text-lg mb-3 xs:mb-4 break-words">NAVEGACIÓN RÁPIDA</h4>
            <ul className="space-y-1 xs:space-y-2 overflow-hidden">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' })}
                  className="text-red-100 hover:text-white transition-colors duration-300 text-sm xs:text-base text-left break-words"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre-mi').scrollIntoView({ behavior: 'smooth' })}
                  className="text-red-100 hover:text-white transition-colors duration-300 text-sm xs:text-base text-left break-words"
                >
                  Sobre Mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('objetivos').scrollIntoView({ behavior: 'smooth' })}
                  className="text-red-100 hover:text-white transition-colors duration-300 text-sm xs:text-base text-left break-words"
                >
                  Objetivos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('evaluacion').scrollIntoView({ behavior: 'smooth' })}
                  className="text-red-100 hover:text-white transition-colors duration-300 text-sm xs:text-base text-left break-words"
                >
                  Evaluación
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('actividades').scrollIntoView({ behavior: 'smooth' })}
                  className="text-red-100 hover:text-white transition-colors duration-300 text-sm xs:text-base text-left break-words"
                >
                  Actividades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('recursos').scrollIntoView({ behavior: 'smooth' })}
                  className="text-red-100 hover:text-white transition-colors duration-300 text-sm xs:text-base text-left break-words"
                >
                  Recursos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="overflow-hidden">
            <h4 className="font-coca-cola text-lg mb-4 break-words">INFORMACIÓN ACADÉMICA</h4>
            <div className="space-y-3 overflow-hidden">
              <div className="overflow-hidden">
                <p className="text-red-100 text-sm">Autor:</p>
                <p className="text-white font-semibold break-words overflow-wrap-anywhere">Aiker Ary Acosta Cantillo</p>
              </div>
              <div className="overflow-hidden">
                <p className="text-red-100 text-sm">Área:</p>
                <p className="text-white font-semibold break-words">Ingeniería de Sistemas</p>
              </div>
              <div className="overflow-hidden">
                <p className="text-red-100 text-sm">Repositorio:</p>
                <a 
                  href="https://github.com/aikerary/KolaJS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-red-100 transition-colors duration-300 break-words overflow-wrap-anywhere hyphens-auto block"
                  style={{ 
                    wordBreak: 'break-all',
                    overflowWrap: 'anywhere',
                    hyphens: 'auto'
                  }}
                >
                  github.com/aikerary/KolaJS
                </a>
              </div>
              <div className="overflow-hidden">
                <p className="text-red-100 text-sm">Última actualización:</p>
                <p className="text-white font-semibold break-words">Mayo {currentYear}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-400 my-6 xs:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden">
          <div className="text-center sm:text-left overflow-hidden">
            <p className="text-red-100 text-xs xs:text-sm break-words overflow-wrap-anywhere">
              © {currentYear} Kola JS - Unidad Didáctica de JavaScript. 
              Desarrollado con ❤️ para la educación.
            </p>
            <p className="text-red-200 text-xs mt-1 break-words overflow-wrap-anywhere">
              Este proyecto es de código abierto y está disponible bajo licencia MIT.
            </p>
          </div>
          
          <div className="flex items-center gap-3 xs:gap-4 flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="bg-white text-cola-red w-8 h-8 xs:w-10 xs:h-10 rounded-full flex items-center justify-center hover:bg-red-50 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
              title="Volver al inicio"
            >
              <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
            
            <div className="flex items-center gap-1 xs:gap-2 text-red-100 text-xs xs:text-sm overflow-hidden">
              <span className="break-words">Hecho con</span>
              <svg className="w-3 h-3 xs:w-4 xs:h-4 text-red-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="break-words">y JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
