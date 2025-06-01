import React from "react";
import {
  BookOpenIcon,
  PuzzlePieceIcon,
  FlagIcon,
  BoltIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
const LearningObjectives = () => {
  const objectives = [
    {
      id: 1,
      title: "Fundamentos de JavaScript",
      description:
        "Comprender la sintaxis básica, variables, tipos de datos y estructuras de control.",
      icon: BookOpenIcon,
    },
    {
      id: 2,
      title: "Programación Orientada a Objetos",
      description:
        "Dominar conceptos de POO, clases, herencia y encapsulamiento en JavaScript.",
      icon: PuzzlePieceIcon,
    },
    {
      id: 3,
      title: "Manipulación del DOM",
      description:
        "Aprender a interactuar dinámicamente con elementos HTML usando JavaScript.",
      icon: FlagIcon,
    },
    {
      id: 4,
      title: "Programación Asíncrona",
      description:
        "Manejar promesas, async/await y realizar peticiones HTTP efectivamente.",
      icon: BoltIcon,
    },
    {
      id: 5,
      title: "Frameworks Modernos",
      description:
        "Introducción a React y desarrollo de aplicaciones web interactivas.",
      icon: RocketLaunchIcon,
    },
    {
      id: 6,
      title: "Buenas Prácticas",
      description:
        "Implementar código limpio, testing y patrones de diseño profesionales.",
      icon: SparklesIcon,
    },
  ];
  return (
    <section id="objetivos" className="py-20 bg-cola-light-gray">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-coca-cola text-4xl md:text-5xl text-cola-dark-gray mb-4">
            OBJETIVOS DE APRENDIZAJE
          </h2>
          <div className="w-24 h-1 bg-cola-red mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Al finalizar esta unidad didáctica, los estudiantes serán capaces de
            desarrollar aplicaciones web completas utilizando JavaScript moderno
            y sus mejores prácticas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={objective.id}
              className="card-cola group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cola-red to-cola-dark-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <objective.icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-1 bg-cola-red mx-auto mb-4"></div>
              </div>
              <h3 className="font-coca-cola text-xl text-cola-dark-gray mb-4 text-center">
                {objective.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {objective.description}
              </p>
              <div className="mt-6 flex justify-center">
                <span className="inline-block bg-cola-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Objetivo {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="card-cola max-w-4xl mx-auto bg-gradient-to-r from-cola-red to-cola-dark-red text-white">
            <h3 className="font-coca-cola text-2xl mb-6">OBJETIVO GENERAL</h3>
            <p className="text-lg leading-relaxed text-red-100">
              Desarrollar competencias sólidas en programación JavaScript que
              permitan a los estudiantes crear aplicaciones web modernas,
              interactivas y escalables, aplicando principios de ingeniería de
              software y metodologías ágiles de desarrollo.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="bg-white text-cola-red px-4 py-2 rounded-full text-sm font-semibold">
                Análisis
              </span>
              <span className="bg-white text-cola-red px-4 py-2 rounded-full text-sm font-semibold">
                Diseño
              </span>
              <span className="bg-white text-cola-red px-4 py-2 rounded-full text-sm font-semibold">
                Implementación
              </span>
              <span className="bg-white text-cola-red px-4 py-2 rounded-full text-sm font-semibold">
                Evaluación
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LearningObjectives;
