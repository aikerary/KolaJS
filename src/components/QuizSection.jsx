import React, { useState } from 'react'
import JavaScriptQuiz from './JavaScriptQuiz'
import { quizzes } from '../data/quizData'

const QuizSection = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null)

  const handleQuizSelect = (quizId) => {
    setSelectedQuiz(quizId)
  }

  const handleBackToSelection = () => {
    setSelectedQuiz(null)
  }

  if (selectedQuiz) {
    return (
      <JavaScriptQuiz 
        quiz={quizzes[selectedQuiz]} 
        onBackToSelection={handleBackToSelection}
      />
    )
  }

  return (
    <div className="mt-8 mb-8">
      <div className="text-center mb-12">
        <h3 className="font-coca-cola text-3xl text-cola-dark-gray mb-4">
          QUIZZES INTERACTIVOS DE JAVASCRIPT
        </h3>
        <div className="w-16 h-1 bg-cola-red mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Pon a prueba tus conocimientos de JavaScript con nuestros quizzes interactivos. 
          ¡Observa cómo se llena la botella de Kola JS según tu progreso y obtén retroalimentación inmediata!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Quiz 1: Fundamentals */}
        <div className="card-cola group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cola-red to-cola-dark-red rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21-.899-.385-1.833-.528-2.516zM16 15.593a28.4 28.4 0 01-2.455-1.158 41.029 41.029 0 01-.39 3.114.75.75 0 01-.419.74c-.528.256-1.046.53-1.554.82.21-.899.385-1.833.528-2.516z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-coca-cola text-xl text-cola-dark-gray">Nivel Básico</h4>
            </div>
            <div className="bg-cola-light-gray px-3 py-1 rounded-full">
              <span className="text-sm font-semibold text-cola-dark-gray">
                {quizzes.fundamentals.questions.length} preguntas
              </span>
            </div>
          </div>

          <h5 className="font-bold text-lg text-cola-dark-gray mb-3">
            {quizzes.fundamentals.title}
          </h5>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {quizzes.fundamentals.description}
          </p>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{quizzes.fundamentals.timeLimit} min</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Básico</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleQuizSelect('fundamentals')}
            className="w-full bg-gradient-to-r from-cola-red to-cola-dark-red text-white py-3 px-6 rounded-lg font-bold hover:shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            COMENZAR QUIZ
          </button>
        </div>

        {/* Quiz 2: Functions */}
        <div className="card-cola group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-coca-cola text-xl text-cola-dark-gray">Nivel Intermedio</h4>
            </div>
            <div className="bg-cola-light-gray px-3 py-1 rounded-full">
              <span className="text-sm font-semibold text-cola-dark-gray">
                {quizzes.functions.questions.length} preguntas
              </span>
            </div>
          </div>

          <h5 className="font-bold text-lg text-cola-dark-gray mb-3">
            {quizzes.functions.title}
          </h5>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {quizzes.functions.description}
          </p>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{quizzes.functions.timeLimit} min</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Intermedio</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleQuizSelect('functions')}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-lg font-bold hover:shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            COMENZAR QUIZ
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 bg-gradient-to-br from-cola-light-gray to-gray-100 rounded-2xl p-8">
        <h4 className="font-coca-cola text-2xl text-cola-dark-gray text-center mb-6">
          Características de los Quizzes
        </h4>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-cola-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h5 className="font-bold text-cola-dark-gray mb-2">Progreso Visual</h5>
            <p className="text-gray-600 text-sm">
              Botella de Kola JS que se llena según tu puntuación con efectos animados
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h5 className="font-bold text-cola-dark-gray mb-2">Retroalimentación</h5>
            <p className="text-gray-600 text-sm">
              Explicaciones detalladas para cada pregunta y respuesta correcta
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
            <h5 className="font-bold text-cola-dark-gray mb-2">Repetible</h5>
            <p className="text-gray-600 text-sm">
              Puedes repetir los quizzes las veces que quieras para mejorar tu puntuación
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizSection
