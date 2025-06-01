import React, { useState } from "react";
import ColaBottleProgress from "./ColaBottleProgress";
const JavaScriptQuiz = ({ quiz, onQuizComplete, onBackToSelection }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const handleAnswerSelect = (questionIndex, answerIndex) => {
    if (selectedAnswers[questionIndex] !== undefined) {
      return;
    }
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));
    const question = quiz.questions[questionIndex];
    if (answerIndex === question.correctAnswer) {
      setCorrectAnswersCount((prev) => prev + 1);
    }
    setTimeout(() => {
      if (questionIndex < quiz.questions.length - 1) {
        setCurrentQuestion(questionIndex + 1);
      } else {
        setShowResults(true);
        if (onQuizComplete) {
          const finalCorrectCount =
            answerIndex === question.correctAnswer
              ? correctAnswersCount + 1
              : correctAnswersCount;
          onQuizComplete(finalCorrectCount, quiz.questions.length);
        }
      }
    }, 1500);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers();
    setShowResults(false);
    setCorrectAnswersCount(0);
    setQuizStarted(false);
  };
  const getScoreMessage = (correctCount, total) => {
    const percentage = (correctCount / total) * 100;
    if (percentage >= 90)
      return {
        message: "¡Excelente dominio de JavaScript! 🎉",
        color: "text-green-600",
      };
    if (percentage >= 80)
      return { message: "¡Muy buen conocimiento! 👏", color: "text-green-500" };
    if (percentage >= 70)
      return {
        message: "Buen trabajo, sigue así 👍",
        color: "text-yellow-600",
      };
    if (percentage >= 60)
      return {
        message: "Conocimiento básico, puedes mejorar 📚",
        color: "text-orange-600",
      };
    return {
      message: "Necesitas repasar más JavaScript 💪",
      color: "text-red-600",
    };
  };
  if (!quizStarted) {
    return (
      <div className="card-cola text-center">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onBackToSelection}
            className="flex items-center space-x-2 text-gray-600 hover:text-cola-red transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Volver a Quizzes</span>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-4">
            <h3 className="font-coca-cola text-2xl text-cola-dark-gray mb-4">
              {quiz.title}
            </h3>
            <p className="text-gray-600 mb-6">{quiz.description}</p>
            <div className="bg-cola-light-gray rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-700 mb-4">
                <strong>Instrucciones:</strong> Responde todas las preguntas y
                ve cómo se llena tu botella Kola JS según tu progreso. ¡Intenta
                llenarla completamente!
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{quiz.timeLimit} minutos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{quiz.questions.length} preguntas</span>
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

          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="w-20 min-h-[220px] flex-shrink-0">
              <ColaBottleProgress
                score={0}
                maxScore={quiz.questions.length}
                animated={false}
                label="Progreso"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (showResults) {
    const { message, color } = getScoreMessage(
      correctAnswersCount,
      quiz.questions.length
    );
    return (
      <div className="card-cola">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onBackToSelection}
            className="flex items-center space-x-2 text-gray-600 hover:text-cola-red transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Volver a Quizzes</span>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-4 text-center">
            <h3 className="font-coca-cola text-2xl text-cola-dark-gray mb-6">
              ¡Quiz Completado!
            </h3>
            <div className="mb-8">
              <p className={`text-xl font-semibold mb-4 ${color}`}>{message}</p>
              <div className="bg-cola-light-gray rounded-lg p-6">
                <p className="text-gray-700 text-lg">
                  <strong>Resumen:</strong> Respondiste correctamente{" "}
                  {correctAnswersCount} de {quiz.questions.length} preguntas (
                  {Math.round(
                    (correctAnswersCount / quiz.questions.length) * 100
                  )}
                  %)
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={resetQuiz}
                className="bg-cola-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-cola-dark-red transition-colors duration-300"
              >
                Intentar de Nuevo
              </button>
              <button
                onClick={onBackToSelection}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300"
              >
                Elegir Otro Quiz
              </button>
            </div>
          </div>

          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="w-20 min-h-[220px] flex-shrink-0">
              <ColaBottleProgress
                score={correctAnswersCount}
                maxScore={quiz.questions.length}
                animated={true}
                label="Resultado Final"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  const question = quiz.questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  return (
    <div className="card-cola">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBackToSelection}
            className="flex items-center space-x-2 text-gray-600 hover:text-cola-red transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Volver</span>
          </button>
          <h3 className="font-coca-cola text-xl text-cola-dark-gray">
            {quiz.title}
          </h3>
        </div>
        <span className="text-sm text-gray-500">
          Pregunta {currentQuestion + 1} de {quiz.questions.length}
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-4">
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
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedAnswers[currentQuestion] === index
                      ? "border-cola-red bg-cola-red bg-opacity-10 text-cola-dark-red"
                      : "border-gray-200 hover:border-cola-red hover:bg-cola-red hover:bg-opacity-5"
                  }`}
                >
                  <span className="font-semibold mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          {isAnswered && (
            <div className="flex justify-center items-center pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cola-red"></div>
                <span className="text-sm">
                  {currentQuestion === quiz.questions.length - 1
                    ? "Finalizando quiz..."
                    : "Avanzando a la siguiente pregunta..."}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1 flex justify-center lg:justify-end">
          <div className="sticky top-4 w-20 min-h-[220px] flex-shrink-0">
            <ColaBottleProgress
              score={correctAnswersCount}
              maxScore={quiz.questions.length}
              animated={true}
              label="Progreso"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default JavaScriptQuiz;
