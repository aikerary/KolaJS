import React from 'react'

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-coca-cola text-4xl md:text-5xl text-cola-dark-gray mb-4">
            SOBRE EL AUTOR
          </h2>
          <div className="w-24 h-1 bg-cola-red mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="card-cola">
                <h3 className="font-coca-cola text-2xl text-cola-dark-gray mb-4">
                  AIKER ARY ACOSTA CANTILLO
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Estudiante de Ingeniería de Sistemas apasionado por el desarrollo web y la 
                  programación. Mi enfoque se centra en crear soluciones tecnológicas innovadoras 
                  y en compartir conocimiento a través de metodologías educativas efectivas.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-cola-light-gray rounded-lg">
                    <div className="text-cola-red font-bold text-lg">3+</div>
                    <div className="text-gray-600 text-sm">Años programando</div>
                  </div>
                  <div className="text-center p-4 bg-cola-light-gray rounded-lg">
                    <div className="text-cola-red font-bold text-lg">10+</div>
                    <div className="text-gray-600 text-sm">Proyectos desarrollados</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <a 
                    href="https://github.com/aikerary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cola-red hover:text-cola-dark-red transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>@aikerary</span>
                  </a>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">KolaJS Repository</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-cola">
                <h4 className="font-coca-cola text-xl text-cola-dark-gray mb-4">
                  ÁREA DE FORMACIÓN
                </h4>
                <div className="bg-gradient-to-r from-cola-red to-cola-dark-red text-white p-6 rounded-lg">
                  <h5 className="font-bold text-lg mb-2">Ingeniería de Sistemas</h5>
                  <p className="text-red-100">
                    Especialización en desarrollo de software, arquitectura de sistemas 
                    y tecnologías web modernas.
                  </p>
                </div>
              </div>

              <div className="card-cola">
                <h4 className="font-coca-cola text-xl text-cola-dark-gray mb-4">
                  ESPECIALIDADES
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-cola-light-gray p-3 rounded-lg text-center">
                    <span className="text-sm font-medium text-cola-dark-gray">JavaScript</span>
                  </div>
                  <div className="bg-cola-light-gray p-3 rounded-lg text-center">
                    <span className="text-sm font-medium text-cola-dark-gray">React</span>
                  </div>
                  <div className="bg-cola-light-gray p-3 rounded-lg text-center">
                    <span className="text-sm font-medium text-cola-dark-gray">Node.js</span>
                  </div>
                  <div className="bg-cola-light-gray p-3 rounded-lg text-center">
                    <span className="text-sm font-medium text-cola-dark-gray">Web Design</span>
                  </div>
                </div>
              </div>

              <div className="card-cola bg-gradient-to-br from-cola-red to-cola-dark-red text-white">
                <h4 className="font-coca-cola text-xl mb-4">FILOSOFÍA EDUCATIVA</h4>
                <p className="text-red-100 leading-relaxed">
                  "Creo en el aprendizaje práctico y colaborativo. El conocimiento se consolida 
                  mejor cuando se comparte y se aplica en proyectos reales que resuelven 
                  problemas del mundo actual."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
