import React, { useState } from 'react'

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
    videos: { title: "Videos Educativos", icon: "🎥" },
    articles: { title: "Artículos y Libros", icon: "📚" },
    tools: { title: "Herramientas", icon: "🛠️" },
    interactive: { title: "Plataformas Interactivas", icon: "💻" }
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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categoryLabels).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-cola-red text-white shadow-lg transform scale-105'
                  : 'bg-cola-light-gray text-cola-dark-gray hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Resources Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources[activeCategory].map((resource, index) => (
            <div key={index} className="card-cola group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-coca-cola text-lg text-cola-dark-gray group-hover:text-cola-red transition-colors">
                  {resource.title}
                </h3>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cola-red hover:text-cola-dark-red transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>

              <div className="space-y-3">
                {resource.author && (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-cola-red">Autor:</span>
                    <span className="text-sm text-gray-600">{resource.author}</span>
                  </div>
                )}

                {resource.duration && (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-cola-red">Duración:</span>
                    <span className="text-sm text-gray-600">{resource.duration}</span>
                  </div>
                )}

                {resource.level && (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-cola-red">Nivel:</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      resource.level === 'Principiante' ? 'bg-green-100 text-green-700' :
                      resource.level === 'Intermedio' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {resource.level}
                    </span>
                  </div>
                )}

                {resource.type && (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-cola-red">Tipo:</span>
                    <span className="text-sm text-gray-600">{resource.type}</span>
                  </div>
                )}

                {resource.category && (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-cola-red">Categoría:</span>
                    <span className="text-sm text-gray-600">{resource.category}</span>
                  </div>
                )}

                {resource.difficulty && (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-cola-red">Dificultad:</span>
                    <span className="text-sm text-gray-600">{resource.difficulty}</span>
                  </div>
                )}

                {resource.features && (
                  <div>
                    <span className="text-xs font-semibold text-cola-red mb-2 block">Características:</span>
                    <div className="flex flex-wrap gap-1">
                      {resource.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="bg-cola-light-gray text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-16 card-cola bg-gradient-to-r from-cola-red to-cola-dark-red text-white">
          <div className="text-center">
            <h3 className="font-coca-cola text-2xl mb-6">RECURSOS ADICIONALES</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-semibold mb-2">Apps Móviles</h4>
                <p className="text-red-100 text-sm">
                  SoloLearn, Grasshopper, Programming Hero
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Práctica de Código</h4>
                <p className="text-red-100 text-sm">
                  HackerRank, Codewars, Exercism
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="font-semibold mb-2">Comunidades</h4>
                <p className="text-red-100 text-sm">
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
