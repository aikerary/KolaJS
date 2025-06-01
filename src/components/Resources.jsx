import React, { useState } from 'react'
import { 
  VideoCameraIcon, 
  BookOpenIcon, 
  WrenchScrewdriverIcon, 
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  FlagIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('videos')

  const resources = {
    videos: [
      {
        title: "JavaScript Fundamentals - Crash Course",
        author: "Programming with Mosh",
        duration: "1h 30min",
        level: "Principiante",
        url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        description: "Curso completo que cubre los fundamentos esenciales de JavaScript desde cero."
      },
      {
        title: "DOM Manipulation Tutorial",
        author: "Traversy Media",
        duration: "45min",
        level: "Intermedio",
        url: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        description: "Tutorial práctico sobre manipulación del DOM y manejo de eventos."
      },
      {
        title: "Async JavaScript: Promises & Async/Await",
        author: "The Net Ninja",
        duration: "2h 15min",
        level: "Avanzado",
        url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jx2TTZk3IGWKSMqico8dSO",
        description: "Serie de videos sobre programación asíncrona en JavaScript."
      }
    ],
    articles: [
      {
        title: "JavaScript Guide - MDN Web Docs",
        author: "Mozilla Developer Network",
        type: "Documentación Oficial",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        description: "Guía completa y oficial de JavaScript con ejemplos prácticos."
      },
      {
        title: "You Don't Know JS (Book Series)",
        author: "Kyle Simpson",
        type: "Libro Digital",
        url: "https://github.com/getify/You-Dont-Know-JS",
        description: "Serie de libros gratuitos que profundizan en los conceptos de JavaScript."
      },
      {
        title: "JavaScript.info - The Modern Tutorial",
        author: "Ilya Kantor",
        type: "Tutorial Interactivo",
        url: "https://javascript.info/",
        description: "Tutorial moderno de JavaScript con ejercicios interactivos."
      }
    ],
    tools: [
      {
        title: "Visual Studio Code",
        category: "Editor de Código",
        description: "Editor de código gratuito con excelente soporte para JavaScript.",
        features: ["IntelliSense", "Debugging", "Extensions", "Git Integration"],
        url: "https://code.visualstudio.com/"
      },
      {
        title: "Chrome DevTools",
        category: "Debugging",
        description: "Herramientas de desarrollo integradas en Google Chrome.",
        features: ["Console", "Debugger", "Network", "Performance"],
        url: "https://developers.google.com/web/tools/chrome-devtools"
      },
      {
        title: "CodePen",
        category: "Editor Online",
        description: "Plataforma online para escribir y probar código HTML, CSS y JavaScript.",
        features: ["Live Preview", "Sharing", "Collaboration", "Templates"],
        url: "https://codepen.io/"
      }
    ],
    interactive: [
      {
        title: "freeCodeCamp - JavaScript Algorithms",
        type: "Curso Interactivo",
        difficulty: "Principiante a Avanzado",
        description: "Curso gratuito con proyectos prácticos y certificación.",
        url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
      },
      {
        title: "Codecademy - JavaScript Course",
        type: "Plataforma de Aprendizaje",
        difficulty: "Principiante",
        description: "Curso interactivo con ejercicios hands-on.",
        url: "https://www.codecademy.com/learn/introduction-to-javascript"
      },
      {
        title: "LeetCode - JavaScript Problems",
        type: "Práctica de Algoritmos",
        difficulty: "Intermedio a Avanzado",
        description: "Plataforma para practicar algoritmos y estructuras de datos.",
        url: "https://leetcode.com/"
      }
    ]
  }

  const categoryLabels = {
    videos: { title: "Videos Educativos", icon: VideoCameraIcon },
    articles: { title: "Artículos y Libros", icon: BookOpenIcon },
    tools: { title: "Herramientas", icon: WrenchScrewdriverIcon },
    interactive: { title: "Plataformas Interactivas", icon: ComputerDesktopIcon }
  }

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-coca-cola text-4xl md:text-5xl text-cola-dark-gray mb-4">
            RECURSOS DE APRENDIZAJE
          </h2>
          <div className="w-24 h-1 bg-cola-red mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Colección curada de recursos de alta calidad para complementar y enriquecer 
            el proceso de aprendizaje de JavaScript.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 xs:gap-3 md:gap-4 mb-8 xs:mb-12">
          {Object.entries(categoryLabels).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-1 xs:space-x-2 px-3 xs:px-4 md:px-6 py-2 xs:py-3 rounded-lg font-semibold transition-all duration-300 text-xs xs:text-sm md:text-base ${
                activeCategory === key
                  ? 'bg-cola-red text-white shadow-lg transform scale-105'
                  : 'bg-cola-light-gray text-cola-dark-gray hover:bg-gray-200'
              }`}
            >
              <category.icon className="w-4 h-4 xs:w-5 xs:h-5" />
              <span className="break-words">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Resources Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8 min-w-0">
          {resources[activeCategory].map((resource, index) => (
            <div key={index} className="card-cola group hover:shadow-2xl transition-all duration-300 overflow-hidden min-w-0 max-w-full">
              <div className="flex items-start justify-between mb-3 xs:mb-4 gap-2 min-w-0">
                <h3 className="font-coca-cola text-sm xs:text-base lg:text-lg text-cola-dark-gray group-hover:text-cola-red transition-colors leading-tight break-words min-w-0 flex-1 pr-2 overflow-wrap-anywhere">
                  {resource.title}
                </h3>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cola-red hover:text-cola-dark-red transition-colors flex-shrink-0 p-1 -m-1 touch-target"
                  title={`Visitar: ${resource.url}`}
                >
                  <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <p className="text-gray-600 text-xs xs:text-sm mb-3 xs:mb-4 leading-relaxed break-words overflow-wrap-anywhere min-w-0">
                {resource.description}
              </p>

              <div className="space-y-2 xs:space-y-3 overflow-hidden min-w-0">
                {resource.author && (
                  <div className="flex items-start space-x-2 min-w-0">
                    <span className="text-xs font-semibold text-cola-red flex-shrink-0">Autor:</span>
                    <span className="text-xs xs:text-sm text-gray-600 break-words min-w-0 leading-tight overflow-wrap-anywhere">{resource.author}</span>
                  </div>
                )}

                {resource.duration && (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-cola-red flex-shrink-0">Duración:</span>
                    <span className="text-xs xs:text-sm text-gray-600 flex-shrink-0">{resource.duration}</span>
                  </div>
                )}

                {resource.level && (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-cola-red flex-shrink-0">Nivel:</span>
                    <span className={`text-xs xs:text-sm px-2 py-1 rounded-full flex-shrink-0 ${
                      resource.level === 'Principiante' ? 'bg-green-100 text-green-700' :
                      resource.level === 'Intermedio' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {resource.level}
                    </span>
                  </div>
                )}

                {resource.type && (
                  <div className="flex items-start space-x-2 min-w-0">
                    <span className="text-xs font-semibold text-cola-red flex-shrink-0">Tipo:</span>
                    <span className="text-xs xs:text-sm text-gray-600 break-words-safe min-w-0 leading-tight">{resource.type}</span>
                  </div>
                )}

                {resource.category && (
                  <div className="flex items-start space-x-2 min-w-0">
                    <span className="text-xs font-semibold text-cola-red flex-shrink-0">Categoría:</span>
                    <span className="text-xs xs:text-sm text-gray-600 break-words-safe min-w-0 leading-tight">{resource.category}</span>
                  </div>
                )}

                {resource.difficulty && (
                  <div className="flex items-start space-x-2 min-w-0">
                    <span className="text-xs font-semibold text-cola-red flex-shrink-0">Dificultad:</span>
                    <span className="text-xs xs:text-sm text-gray-600 break-words-safe min-w-0 leading-tight">{resource.difficulty}</span>
                  </div>
                )}

                {resource.features && (
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-cola-red mb-2 block">Características:</span>
                    <div className="flex flex-wrap gap-1">
                      {resource.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="bg-cola-light-gray text-gray-700 px-2 py-1 rounded text-xs break-words-safe leading-tight"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* URL Display - Solo para pantallas más grandes o si es importante */}
                {resource.url && (
                  <div className="hidden sm:flex items-start space-x-2 min-w-0 mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs font-semibold text-cola-red flex-shrink-0">URL:</span>
                    <span className="text-xs text-gray-500 break-all leading-tight font-mono bg-gray-50 px-2 py-1 rounded min-w-0 max-w-full overflow-wrap-anywhere">
                      {resource.url.length > 40 ? `${resource.url.substring(0, 37)}...` : resource.url}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-12 xs:mt-16 card-cola bg-gradient-to-r from-cola-red to-cola-dark-red text-white">
          <div className="text-center">
            <h3 className="font-coca-cola text-xl xs:text-2xl mb-4 xs:mb-6">RECURSOS ADICIONALES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6">
              <div className="text-center">
                <DevicePhoneMobileIcon className="w-10 h-10 xs:w-12 xs:h-12 mx-auto mb-2 xs:mb-3" />
                <h4 className="font-semibold mb-2 text-sm xs:text-base">Apps Móviles</h4>
                <p className="text-red-100 text-xs xs:text-sm break-words">
                  SoloLearn, Grasshopper, Programming Hero
                </p>
              </div>
              <div className="text-center">
                <FlagIcon className="w-10 h-10 xs:w-12 xs:h-12 mx-auto mb-2 xs:mb-3" />
                <h4 className="font-semibold mb-2 text-sm xs:text-base">Práctica de Código</h4>
                <p className="text-red-100 text-xs xs:text-sm break-words">
                  HackerRank, Codewars, Exercism
                </p>
              </div>
              <div className="text-center">
                <UserGroupIcon className="w-10 h-10 xs:w-12 xs:h-12 mx-auto mb-2 xs:mb-3" />
                <h4 className="font-semibold mb-2 text-sm xs:text-base">Comunidades</h4>
                <p className="text-red-100 text-xs xs:text-sm break-words">
                  Stack Overflow, Reddit r/javascript, Discord
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources
