// filepath: /home/aiker/Workspaces/Universidad/KolaJS/src/components/JavaScriptQuiz.jsx
import React, { useState } from 'react'
import ColaBottleProgress from './ColaBottleProgress'

const JavaScriptQuiz = ({ quiz, onQuizComplete, onBackToSelection }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }))
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correctAnswers = 0
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
    setShowResults(true)
    if (onQuizComplete) {
      onQuizComplete(correctAnswers, quiz.questions.length)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
    setQuizStarted(false)
  }

  const getScoreMessage = (score, total) => {
    const percentage = (score / total) * 100
    if (percentage >= 90) return { message: "¡Excelente dominio de JavaScript! 🎉", color: "text-green-600" }
    if (percentage >= 80) return { message: "¡Muy buen conocimiento! 👏", color: "text-green-500" }
    if (percentage >= 70) return { message: "Buen trabajo, sigue así 👍", color: "text-yellow-600" }
    if (percentage >= 60) return { message: "Conocimiento básico, puedes mejorar 📚", color: "text-orange-600" }
    return { message: "Necesitas repasar más JavaScript 💪", color: "text-red-600" }
  }

  if (!quizStarted) {
    return (
      <div className="card-cola text-center">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onBackToSelection}
            className="flex items-center space-x-2 text-gray-600 hover:text-cola-red transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Volver a Quizzes</span>
          </button>
        </div>
        
        <div className="mb-6">
          <h3 className="font-coca-cola text-2xl text-cola-dark-gray mb-4">
            {quiz.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {quiz.description}
          </p>
          <div className="flex justify-center mb-6">
            <ColaBottleProgress score={0} maxScore={quiz.questions.length} animated={false} label="Quiz Progress" />
          </div>
          <div className="bg-cola-light-gray rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Instrucciones:</strong> Responde todas las preguntas y ve cómo se llena tu botella Kola JS 
              según tu progreso. ¡Intenta llenarla completamente!
            </p>
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{quiz.timeLimit} minutos</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{quiz.questions.length} preguntas</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setQuizStarted(true)}
          className="bg-cola-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-cola-dark-red transition-colors duration-300 transform hover:scale-105"
        >
          Comenzar Quiz 🚀
        </button>
      </div>
    )
  }

  if (showResults) {
    const { message, color } = getScoreMessage(score, quiz.questions.length)
    
    return (
      <div className="card-cola text-center">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onBackToSelection}
            className="flex items-center space-x-2 text-gray-600 hover:text-cola-red transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Volver a Quizzes</span>
          </button>
        </div>

        <h3 className="font-coca-cola text-2xl text-cola-dark-gray mb-6">
          ¡Quiz Completado!
        </h3>

        <div className="flex justify-center mb-8">
          <ColaBottleProgress 
            score={score} 
            maxScore={quiz.questions.length} 
            animated={true} 
            label="Resultado Final"
          />
        </div>

        <div className="mb-8">
          <p className={`text-xl font-semibold mb-4 ${color}`}>
            {message}
          </p>
          <div className="bg-cola-light-gray rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Resumen:</strong> Respondiste correctamente {score} de {quiz.questions.length} preguntas
              ({Math.round((score / quiz.questions.length) * 100)}%)
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={resetQuiz}
            className="bg-cola-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-cola-dark-red transition-colors duration-300"
          >
            Intentar de Nuevo
          </button>
          <button
            onClick={onBackToSelection}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300"
          >
            Elegir Otro Quiz
          </button>
        </div>
      </div>
    )
  }

  const question = quiz.questions[currentQuestion]
  const isAnswered = selectedAnswers[currentQuestion] !== undefined

  return (
    <div className="card-cola">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBackToSelection}
            className="flex items-center space-x-2 text-gray-600 hover:text-cola-red transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Volver</span>
          </button>
          <h3 className="font-coca-cola text-xl text-cola-dark-gray">
            {quiz.title}
          </h3>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            Pregunta {currentQuestion + 1} de {quiz.questions.length}
          </span>
          <ColaBottleProgress 
            score={Object.keys(selectedAnswers).length} 
            maxScore={quiz.questions.length} 
            animated={true}
            label="Progreso"
          />
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-cola-dark-gray mb-6">
          {question.question}
        </h4>

        {question.code && (
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-sm">
              <code>{question.code}</code>
            </pre>
          </div>
        )}

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-cola-red bg-red-50'
                  : 'border-gray-200 hover:border-cola-red hover:bg-red-50'
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={index}
                checked={selectedAnswers[currentQuestion] === index}
                onChange={() => handleAnswerSelect(currentQuestion, index)}
                className="sr-only"
              />
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-cola-red bg-cola-red'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswers[currentQuestion] === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-700">{option}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
            currentQuestion === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          Anterior
        </button>

        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
            !isAnswered
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-cola-red text-white hover:bg-cola-dark-red'
          }`}
        >
          {currentQuestion === quiz.questions.length - 1 ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>
    </div>
  )
}

export default JavaScriptQuiz
