import React, { useState, useEffect } from 'react'
import GitHubProfile from './GitHubProfile'
import { fetchGitHubStats } from '../api/github'

const AboutSection = () => {
  const [repoCount, setRepoCount] = useState(null);

  useEffect(() => {
    const loadRepoCount = async () => {
      try {
        const stats = await fetchGitHubStats();
        if (stats && stats.profile && stats.profile.public_repos) {
          // Redondear a la decena más cercana
          const roundedCount = Math.floor(stats.profile.public_repos / 10) * 10;
          setRepoCount(roundedCount);
        }
      } catch (error) {
        console.error('Error loading repo count:', error);
        setRepoCount(20); // Valor de respaldo
      }
    };

    loadRepoCount();
  }, []);
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-coca-cola text-4xl md:text-5xl text-cola-dark-gray mb-4">
            SOBRE EL AUTOR
          </h2>
          <div className="w-24 h-1 bg-cola-red mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8">
            
            {/* Columna 1: Información Personal */}
            <div className="space-y-4 xs:space-y-6">
              <div className="card-cola">
                <h3 className="font-coca-cola text-xl xs:text-2xl text-cola-dark-gray mb-3 xs:mb-4 leading-tight">
                  AIKER ARY ACOSTA CANTILLO
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 xs:mb-6 text-sm xs:text-base">
                  Estudiante de Ingeniería de Sistemas apasionado por el desarrollo web y la 
                  programación. Mi enfoque se centra en crear soluciones tecnológicas innovadoras 
                  y en compartir conocimiento a través de metodologías educativas efectivas.
                </p>
                
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-2 xs:gap-3 mb-4 xs:mb-6">
                  <div className="text-center p-3 xs:p-4 bg-gradient-to-r from-cola-red to-cola-dark-red text-white rounded-lg">
                    <div className="font-bold text-base xs:text-lg">5+</div>
                    <div className="text-red-100 text-xs xs:text-sm">Años programando</div>
                  </div>
                  <div className="text-center p-3 xs:p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
                    <div className="font-bold text-base xs:text-lg">
                      {repoCount !== null ? `${repoCount}+` : 'Cargando...'}
                    </div>
                    <div className="text-blue-100 text-xs xs:text-sm">Proyectos</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <a 
                    href="https://github.com/aikerary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cola-red hover:text-cola-dark-red transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-sm xs:text-base">@aikerary</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Columna 2: GitHub Profile y Formación */}
            <div className="space-y-4 xs:space-y-6">
              <GitHubProfile />
              
              <div className="card-cola">
                <h4 className="font-coca-cola text-lg xs:text-xl text-cola-dark-gray mb-3 xs:mb-4">
                  ÁREA DE FORMACIÓN
                </h4>
                <div className="bg-gradient-to-r from-cola-red to-cola-dark-red text-white p-4 xs:p-6 rounded-lg">
                  <h5 className="font-bold text-base xs:text-lg mb-2">Ingeniería de Sistemas</h5>
                  <p className="text-red-100 text-sm xs:text-base leading-relaxed">
                    Especialización en desarrollo de software, arquitectura de sistemas 
                    y tecnologías web modernas.
                  </p>
                </div>
              </div>
            </div>

            {/* Columna 3: Filosofía Educativa y Contacto */}
            <div className="space-y-4 xs:space-y-6">
              <div className="card-cola bg-gradient-to-br from-cola-red to-cola-dark-red text-white">
                <h4 className="font-coca-cola text-lg xs:text-xl mb-3 xs:mb-4">FILOSOFÍA EDUCATIVA</h4>
                <p className="text-red-100 leading-relaxed mb-4 xs:mb-6 text-sm xs:text-base">
                  "Creo en el aprendizaje práctico y colaborativo. El conocimiento se consolida 
                  mejor cuando se comparte y se aplica en proyectos reales que resuelven 
                  problemas del mundo actual."
                </p>
                
                <div className="border-t border-red-300 pt-3 xs:pt-4">
                  <h5 className="font-bold text-red-100 mb-2 text-sm xs:text-base">Enfoque Metodológico</h5>
                  <ul className="text-red-100 text-xs xs:text-sm space-y-1">
                    <li>• Aprendizaje basado en proyectos</li>
                    <li>• Desarrollo colaborativo</li>
                    <li>• Soluciones tecnológicas innovadoras</li>
                  </ul>
                </div>
              </div>

              <div className="card-cola">
                <h4 className="font-coca-cola text-lg xs:text-xl text-cola-dark-gray mb-3 xs:mb-4">
                  CONTACTO
                </h4>
                <div className="space-y-2 xs:space-y-3">
                  <div className="flex items-center space-x-2 xs:space-x-3">
                    <svg className="w-4 h-4 xs:w-5 xs:h-5 text-cola-red flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="text-gray-600 text-xs xs:text-sm break-all">aikera@uninorte.edu.co</span>
                  </div>
                  <div className="flex items-center space-x-2 xs:space-x-3">
                    <svg className="w-4 h-4 xs:w-5 xs:h-5 text-cola-red flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-gray-600 text-xs xs:text-sm">Colombia, Atlántico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
