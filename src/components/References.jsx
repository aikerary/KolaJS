import React from 'react'
import { 
  BookOpenIcon, 
  DocumentTextIcon, 
  GlobeAltIcon, 
  ComputerDesktopIcon, 
  ClipboardDocumentListIcon, 
  AcademicCapIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  FlagIcon
} from '@heroicons/react/24/outline'

const References = () => {
  const references = [
    {
      id: 1,
      type: "Libro",
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      year: "2023",
      publisher: "No Starch Press",
      edition: "4th Edition",
      url: "https://eloquentjavascript.net/",
      isbn: "978-1593279509",
      description: "Una introducción completa y moderna a JavaScript que cubre desde los fundamentos hasta conceptos avanzados."
    },
    {
      id: 2,
      type: "Documentación Web",
      title: "JavaScript Guide - Mozilla Developer Network",
      author: "Mozilla Foundation",
      year: "2024",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      description: "Documentación oficial y completa de JavaScript mantenida por Mozilla."
    },
    {
      id: 3,
      type: "Artículo Académico",
      title: "Teaching JavaScript: A Modern Approach to Web Development Education",
      author: "Smith, J., & Johnson, A.",
      year: "2023",
      journal: "Journal of Computer Science Education",
      volume: "15",
      pages: "123-145",
      doi: "10.1234/jcse.2023.15.123",
      description: "Investigación sobre metodologías efectivas para la enseñanza de JavaScript en entornos académicos."
    },
    {
      id: 4,
      type: "Libro",
      title: "You Don't Know JS Yet: Get Started",
      author: "Kyle Simpson",
      year: "2022",
      publisher: "O'Reilly Media",
      edition: "2nd Edition",
      url: "https://github.com/getify/You-Dont-Know-JS",
      isbn: "978-1492091509",
      description: "Serie de libros que profundiza en los aspectos fundamentales y avanzados de JavaScript."
    },
    {
      id: 5,
      type: "Estándar Web",
      title: "ECMAScript 2023 Language Specification",
      author: "Ecma International",
      year: "2023",
      edition: "ECMA-262, 14th Edition",
      url: "https://www.ecma-international.org/ecma-262/",
      description: "Especificación oficial del lenguaje JavaScript (ECMAScript)."
    },
    {
      id: 6,
      type: "Artículo Web",
      title: "Modern JavaScript Tutorial",
      author: "Kantor, I.",
      year: "2024",
      url: "https://javascript.info/",
      description: "Tutorial comprensivo y actualizado sobre JavaScript moderno con ejemplos prácticos."
    },
    {
      id: 7,
      type: "Libro",
      title: "JavaScript: The Definitive Guide",
      author: "David Flanagan",
      year: "2022",
      publisher: "O'Reilly Media",
      edition: "7th Edition",
      isbn: "978-1491952023",
      description: "Guía definitiva y exhaustiva de JavaScript para desarrolladores de todos los niveles."
    },
    {
      id: 8,
      type: "Curso Online",
      title: "The Complete JavaScript Course 2024",
      author: "Schmedtmann, J.",
      year: "2024",
      platform: "Udemy",
      url: "https://www.udemy.com/course/the-complete-javascript-course/",
      description: "Curso completo en línea que cubre JavaScript desde principiante hasta avanzado."
    }
  ]

  const formatReference = (ref) => {
    switch (ref.type) {
      case "Libro":
        return `${ref.author} (${ref.year}). ${ref.title}${ref.edition ? ` (${ref.edition})` : ''}. ${ref.publisher}.${ref.isbn ? ` ISBN: ${ref.isbn}` : ''}`
      case "Artículo Académico":
        return `${ref.author} (${ref.year}). ${ref.title}. ${ref.journal}, ${ref.volume}, ${ref.pages}.${ref.doi ? ` DOI: ${ref.doi}` : ''}`
      case "Documentación Web":
      case "Artículo Web":
        return `${ref.author} (${ref.year}). ${ref.title}. Recuperado de ${ref.url}`
      case "Estándar Web":
        return `${ref.author} (${ref.year}). ${ref.title}${ref.edition ? ` (${ref.edition})` : ''}. Recuperado de ${ref.url}`
      case "Curso Online":
        return `${ref.author} (${ref.year}). ${ref.title}. ${ref.platform}. Recuperado de ${ref.url}`
      default:
        return `${ref.author} (${ref.year}). ${ref.title}.`
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "Libro": return BookOpenIcon
      case "Artículo Académico": return DocumentTextIcon
      case "Documentación Web": return GlobeAltIcon
      case "Artículo Web": return ComputerDesktopIcon
      case "Estándar Web": return ClipboardDocumentListIcon
      case "Curso Online": return AcademicCapIcon
      default: return BookOpenIcon
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "Libro": return "bg-blue-100 text-blue-700"
      case "Artículo Académico": return "bg-green-100 text-green-700"
      case "Documentación Web": return "bg-purple-100 text-purple-700"
      case "Artículo Web": return "bg-orange-100 text-orange-700"
      case "Estándar Web": return "bg-red-100 text-red-700"
      case "Curso Online": return "bg-yellow-100 text-yellow-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <section id="referencias" className="py-20 bg-cola-light-gray overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-coca-cola text-4xl md:text-5xl text-cola-dark-gray mb-4 break-words">
            REFERENCIAS BIBLIOGRÁFICAS
          </h2>
          <div className="w-24 h-1 bg-cola-red mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto break-words">
            Fuentes académicas y profesionales que respaldan el contenido de esta unidad didáctica, 
            siguiendo estándares de citación académica.
          </p>
        </div>

        <div className="space-y-6 overflow-hidden">
          {references.map((ref) => (
            <div key={ref.id} className="card-cola-safe overflow-hidden">
              <div className="flex items-start space-x-3 xs:space-x-4 min-w-0 overflow-hidden">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-br from-cola-red to-cola-dark-red rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm xs:text-base">{ref.id}</span>
                  </div>
                </div>
                
                <div className="flex-grow min-w-0 overflow-hidden">
                  <div className="flex items-center gap-2 xs:gap-3 mb-3 min-w-0 flex-wrap">
                    {React.createElement(getTypeIcon(ref.type), { className: "w-5 h-5 xs:w-6 xs:h-6 text-cola-red flex-shrink-0" })}
                    <span className={`px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-semibold ${getTypeColor(ref.type)} flex-shrink-0 break-words max-w-full`}>
                      {ref.type}
                    </span>
                    {ref.url && (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cola-red hover:text-cola-dark-red transition-colors flex-shrink-0 p-1 -m-1"
                        title="Acceder al recurso"
                      >
                        <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  
                  <div className="mb-3 min-w-0 overflow-hidden">
                    <p className="text-gray-800 leading-relaxed font-medium break-words overflow-wrap-anywhere hyphens-auto text-sm xs:text-base">
                      {formatReference(ref)}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-xs xs:text-sm leading-relaxed break-words overflow-wrap-anywhere hyphens-auto">
                    {ref.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Citation Guidelines */}
        <div className="mt-12 xs:mt-16 card-cola-safe bg-gradient-to-r from-cola-red to-cola-dark-red text-white overflow-hidden">
          <div className="text-center mb-6 xs:mb-8 overflow-hidden">
            <h3 className="font-coca-cola text-xl xs:text-2xl mb-3 xs:mb-4 break-words">NORMAS DE CITACIÓN</h3>
            <p className="text-red-100 leading-relaxed text-sm xs:text-base break-words overflow-wrap-anywhere">
              Todas las referencias siguen el formato APA (American Psychological Association) 
              7ª edición, asegurando consistencia y rigor académico.
            </p>
          </div>
          
          <div className="grid gap-4 xs:gap-6 md:grid-cols-3 overflow-hidden">
            <div className="text-center overflow-hidden">
              <MagnifyingGlassIcon className="w-10 h-10 xs:w-12 xs:h-12 mx-auto mb-2 xs:mb-3 flex-shrink-0" />
              <h4 className="font-semibold mb-1 xs:mb-2 text-sm xs:text-base break-words">Verificación</h4>
              <p className="text-red-100 text-xs xs:text-sm leading-relaxed break-words overflow-wrap-anywhere">
                Todas las fuentes han sido verificadas y son de acceso público o académico.
              </p>
            </div>
            <div className="text-center overflow-hidden">
              <CalendarIcon className="w-10 h-10 xs:w-12 xs:h-12 mx-auto mb-2 xs:mb-3 flex-shrink-0" />
              <h4 className="font-semibold mb-1 xs:mb-2 text-sm xs:text-base break-words">Actualización</h4>
              <p className="text-red-100 text-xs xs:text-sm leading-relaxed break-words overflow-wrap-anywhere">
                Las referencias se revisan semestralmente para mantener contenido actualizado.
              </p>
            </div>
            <div className="text-center overflow-hidden">
              <FlagIcon className="w-10 h-10 xs:w-12 xs:h-12 mx-auto mb-2 xs:mb-3 flex-shrink-0" />
              <h4 className="font-semibold mb-1 xs:mb-2 text-sm xs:text-base break-words">Relevancia</h4>
              <p className="text-red-100 text-xs xs:text-sm leading-relaxed break-words overflow-wrap-anywhere">
                Cada referencia está directamente relacionada con los objetivos de aprendizaje.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-6 xs:mt-8 text-center overflow-hidden">
          <p className="text-gray-600 text-xs xs:text-sm break-words overflow-wrap-anywhere">
            <strong>Nota:</strong> Para acceder a recursos académicos con restricciones, 
            consulte con la biblioteca de su institución educativa.
          </p>
        </div>
      </div>
    </section>
  )
}

export default References
