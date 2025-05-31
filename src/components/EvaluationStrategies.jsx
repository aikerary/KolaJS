import React, { useState } from 'react'

const EvaluationStrategies = () => {
  const [activeTab, setActiveTab] = useState('formative')

  const evaluationActivities = {
    formative: [
      {
        title: "Quizzes Interactivos Semanales",
        description: "Evaluaciones cortas al final de cada módulo para verificar la comprensión de conceptos básicos.",
        criteria: [
          "Comprensión de sintaxis JavaScript",
          "Aplicación de conceptos teóricos",
          "Resolución de problemas básicos",
          "Tiempo de respuesta y precisión"
        ],
        weight: "15%",
        frequency: "Semanal"
      },
      {
        title: "Peer Code Reviews",
        description: "Revisión colaborativa de código entre estudiantes para fomentar el aprendizaje mutuo.",
        criteria: [
          "Calidad del feedback proporcionado",
          "Identificación de mejoras",
          "Comunicación constructiva",
          "Participación activa en revisiones"
        ],
        weight: "10%",
        frequency: "Quincenal"
      }
    ],
    summative: [
      {
        title: "Proyecto Final: Aplicación Web Completa",
        description: "Desarrollo de una aplicación web full-stack utilizando JavaScript, HTML, CSS y un framework moderno.",
        criteria: [
          "Funcionalidad completa y sin errores",
          "Código limpio y bien documentado",
          "Diseño responsive y UX intuitiva",
          "Implementación de buenas prácticas",
          "Presentación y defensa del proyecto"
        ],
        weight: "40%",
        frequency: "Final del curso"
      },
      {
        title: "Examen Práctico de Programación",
        description: "Evaluación individual donde se resuelven problemas de programación en tiempo real.",
        criteria: [
          "Lógica de programación",
          "Eficiencia del algoritmo",
          "Manejo de errores",
          "Cumplimiento de requerimientos",
          "Optimización del código"
        ],
        weight: "35%",
        frequency: "Mes 2 y Final"
      }
    ]
  }

  const rubrics = {
    project: {
      excellent: "90-100%",
      good: "80-89%",
      satisfactory: "70-79%",
      needsImprovement: "60-69%",
      inadequate: "< 60%"
    }
  }

  return (
    <section id="evaluacion" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-coca-cola text-4xl md:text-5xl text-cola-dark-gray mb-4">
            ESTRATEGIAS DE EVALUACIÓN
          </h2>
          <div className="w-24 h-1 bg-cola-red mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Sistema integral de evaluación que combina metodologías formativas y sumativas 
            para garantizar un aprendizaje continuo y efectivo.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-cola-light-gray rounded-lg p-2 flex">
            <button
              onClick={() => setActiveTab('formative')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'formative'
                  ? 'bg-cola-red text-white shadow-lg'
                  : 'text-cola-dark-gray hover:bg-white'
              }`}
            >
              Evaluación Formativa
            </button>
            <button
              onClick={() => setActiveTab('summative')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'summative'
                  ? 'bg-cola-red text-white shadow-lg'
                  : 'text-cola-dark-gray hover:bg-white'
              }`}
            >
              Evaluación Sumativa
            </button>
          </div>
        </div>

        {/* Evaluation Activities */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {evaluationActivities[activeTab].map((activity, index) => (
            <div key={index} className="card-cola">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-coca-cola text-xl text-cola-dark-gray">
                  {activity.title}
                </h3>
                <div className="flex flex-col items-end">
                  <span className="bg-cola-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.weight}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">{activity.frequency}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {activity.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-cola-dark-gray">Criterios de Evaluación:</h4>
                <ul className="space-y-2">
                  {activity.criteria.map((criterion, criterionIndex) => (
                    <li key={criterionIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cola-red rounded-full"></div>
                      <span className="text-gray-600">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Rubric Section */}
        <div className="card-cola bg-gradient-to-br from-cola-red to-cola-dark-red text-white">
          <h3 className="font-coca-cola text-2xl mb-6 text-center">
            RÚBRICA DE EVALUACIÓN - PROYECTO FINAL
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            <div className="text-center">
              <div className="bg-white text-cola-red rounded-lg p-4 mb-2">
                <div className="font-bold text-lg">Excelente</div>
                <div className="text-sm">{rubrics.project.excellent}</div>
              </div>
              <p className="text-sm text-red-100">
                Supera expectativas. Código profesional, innovador y optimizado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white text-cola-red rounded-lg p-4 mb-2">
                <div className="font-bold text-lg">Bueno</div>
                <div className="text-sm">{rubrics.project.good}</div>
              </div>
              <p className="text-sm text-red-100">
                Cumple objetivos. Implementación sólida con pequeñas mejoras.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white text-cola-red rounded-lg p-4 mb-2">
                <div className="font-bold text-lg">Satisfactorio</div>
                <div className="text-sm">{rubrics.project.satisfactory}</div>
              </div>
              <p className="text-sm text-red-100">
                Cumple requisitos básicos. Funcional pero mejorable.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white text-cola-red rounded-lg p-4 mb-2">
                <div className="font-bold text-lg">Necesita Mejora</div>
                <div className="text-sm">{rubrics.project.needsImprovement}</div>
              </div>
              <p className="text-sm text-red-100">
                Cumple parcialmente. Requiere correcciones importantes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white text-cola-red rounded-lg p-4 mb-2">
                <div className="font-bold text-lg">Inadecuado</div>
                <div className="text-sm">{rubrics.project.inadequate}</div>
              </div>
              <p className="text-sm text-red-100">
                No cumple objetivos. Requiere rehacerse completamente.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-red-100">
              La evaluación se basa en competencias técnicas, creatividad, presentación y 
              capacidad de resolver problemas de manera autónoma.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EvaluationStrategies
