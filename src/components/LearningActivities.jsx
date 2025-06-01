import React, { useState } from 'react'
import { 
  ChartBarIcon, 
  FlagIcon, 
  BookOpenIcon, 
  ClipboardDocumentListIcon,
  PlayIcon,
  UserGroupIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

const LearningActivities = () => {
  const [activeActivity, setActiveActivity] = useState(null)

  const activities = [
    {
      id: 1,
      title: "Laboratorio Interactivo: Variables y Tipos de Datos",
      type: "Práctica",
      duration: "2 horas",
      difficulty: "Básico",
      description: "Actividad práctica donde los estudiantes experimentan con diferentes tipos de variables en JavaScript.",
      objectives: [
        "Declarar variables usando let, const y var",
        "Identificar tipos de datos primitivos",
        "Realizar conversiones de tipos",
        "Practicar scope de variables"
      ],
      materials: [
        "Editor de código online (CodePen/JSFiddle)",
        "Documentación MDN Web Docs",
        "Ejercicios interactivos preparados"
      ],
      steps: [
        "Introducción teórica (15 min)",
        "Ejercicios guiados (45 min)",
        "Práctica individual (45 min)",
        "Revisión y discusión (15 min)"
      ]
    },
    {
      id: 2,
      title: "Proyecto Colaborativo: Calculadora Web",
      type: "Proyecto",
      duration: "1 semana",
      difficulty: "Intermedio",
      description: "Desarrollo en equipos de una calculadora web funcional aplicando conceptos de DOM y eventos.",
      objectives: [
        "Manipular elementos del DOM",
        "Gestionar eventos de usuario",
        "Implementar lógica de cálculo",
        "Trabajar colaborativamente en Git"
      ],
      materials: [
        "Repositorio Git compartido",
        "Wireframes de la calculadora",
        "Lista de funcionalidades requeridas",
        "Herramientas de desarrollo web"
      ],
      steps: [
        "Planificación del proyecto (1 día)",
        "Desarrollo del HTML/CSS (2 días)",
        "Implementación de JavaScript (3 días)",
        "Testing y refinamiento (1 día)"
      ]
    }
  ]

  const toggleActivity = (activityId) => {
    setActiveActivity(activeActivity === activityId ? null : activityId)
  }

  return (
    <section id="actividades" className="py-20 bg-cola-light-gray">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-coca-cola text-4xl md:text-5xl text-cola-dark-gray mb-4">
            ACTIVIDADES DE APRENDIZAJE
          </h2>
          <div className="w-24 h-1 bg-cola-red mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experiencias de aprendizaje diseñadas para aplicar conocimientos teóricos 
            en contextos prácticos y colaborativos.
          </p>
        </div>

        <div className="space-y-8 min-w-0">
          {activities.map((activity) => (
            <div key={activity.id} className="card-cola min-w-0 max-w-full overflow-hidden">
              <div 
                className="cursor-pointer min-w-0"
                onClick={() => toggleActivity(activity.id)}
              >
                <div className="flex items-center justify-between mb-4 min-w-0 gap-4">
                  <div className="flex items-center space-x-4 min-w-0 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-cola-red to-cola-dark-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{activity.id}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-coca-cola text-xl text-cola-dark-gray break-words overflow-wrap-anywhere leading-tight">
                        {activity.title}
                      </h3>
                      <div className="flex items-center space-x-4 mt-1 flex-wrap gap-y-1">
                        <span className="bg-cola-red text-white px-3 py-1 rounded-full text-sm flex-shrink-0">
                          {activity.type}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center flex-shrink-0">
                          <ClipboardDocumentListIcon className="w-4 h-4 mr-1" />
                          {activity.duration}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center flex-shrink-0">
                          <ChartBarIcon className="w-4 h-4 mr-1" />
                          {activity.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-cola-red hover:text-cola-dark-red transition-colors flex-shrink-0">
                    <svg 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        activeActivity === activity.id ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-600 leading-relaxed break-words overflow-wrap-anywhere min-w-0">
                  {activity.description}
                </p>
              </div>

              {activeActivity === activity.id && (
                <div className="mt-8 grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-8 min-w-0">
                  <div className="space-y-6 min-w-0">
                    <div className="min-w-0">
                      <h4 className="font-semibold text-cola-dark-gray mb-3 flex items-center">
                        <FlagIcon className="w-5 h-5 mr-2 text-cola-red flex-shrink-0" />
                        Objetivos Específicos
                      </h4>
                      <ul className="space-y-2 min-w-0">
                        {activity.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start space-x-3 min-w-0">
                            <div className="w-2 h-2 bg-cola-red rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 break-words overflow-wrap-anywhere min-w-0">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-cola-dark-gray mb-3 flex items-center">
                        <BookOpenIcon className="w-5 h-5 mr-2 text-cola-red" />
                        Materiales Necesarios
                      </h4>
                      <ul className="space-y-2">
                        {activity.materials.map((material, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-cola-red rounded-full mt-2"></div>
                            <span className="text-gray-600">{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cola-dark-gray mb-3 flex items-center">
                      <ClipboardDocumentListIcon className="w-5 h-5 mr-2 text-cola-red" />
                      Metodología de Desarrollo
                    </h4>
                    <div className="space-y-3">
                      {activity.steps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-cola-light-gray rounded-lg">
                          <div className="w-8 h-8 bg-cola-red text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Learning Methods */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="card-cola text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cola-red to-cola-dark-red rounded-full flex items-center justify-center mx-auto mb-4">
              <PlayIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-coca-cola text-xl text-cola-dark-gray mb-3">
              Gamificación
            </h3>
            <p className="text-gray-600">
              Sistema de puntos y logros que motiva el progreso continuo y la superación personal.
            </p>
          </div>

          <div className="card-cola text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cola-red to-cola-dark-red rounded-full flex items-center justify-center mx-auto mb-4">
              <UserGroupIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-coca-cola text-xl text-cola-dark-gray mb-3">
              Aprendizaje Colaborativo
            </h3>
            <p className="text-gray-600">
              Trabajo en equipo y peer programming para fortalecer habilidades sociales y técnicas.
            </p>
          </div>

          <div className="card-cola text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cola-red to-cola-dark-red rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowPathIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-coca-cola text-xl text-cola-dark-gray mb-3">
              Feedback Continuo
            </h3>
            <p className="text-gray-600">
              Evaluación constante y retroalimentación inmediata para acelerar el aprendizaje.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearningActivities
