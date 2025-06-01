import React from "react";
const Hero = () => {
  return (
    <section id="inicio" className="gradient-cola text-white py-20">
      <div className="section-container">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-block bg-white text-cola-red px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Ingeniería de Sistemas
            </span>
          </div>
          <h1 className="font-coca-cola text-6xl md:text-8xl mb-6 tracking-wider">
            KOLA JS
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-red-100">
            Fundamentos de JavaScript para el Desarrollo Web Moderno
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-red-50">
            Una unidad didáctica diseñada para estudiantes de Ingeniería de
            Sistemas que desean dominar JavaScript desde sus fundamentos hasta
            conceptos avanzados, aplicando metodologías de aprendizaje
            interactivo y evaluación continua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("objetivos")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-cola-red px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Objetivos
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("actividades")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cola-red transition-all duration-300 transform hover:scale-105"
            >
              Comenzar Aprendizaje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
