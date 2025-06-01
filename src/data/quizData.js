
export const quizzes = {
  fundamentals: {
    id: 'fundamentals',
    title: 'JavaScript Fundamentals',
    description: 'Evalúa tu conocimiento en los conceptos básicos de JavaScript: variables, tipos de datos, operadores y estructuras de control.',
    timeLimit: 10, // minutes
    questions: [
      {
        id: 1,
        question: "¿Cuál es la forma correcta de declarar una variable en JavaScript ES6+?",
        options: [
          "var nombre = 'Juan';",
          "let nombre = 'Juan';",
          "const nombre = 'Juan';",
          "Todas las anteriores son correctas"
        ],
        correctAnswer: 3,
        explanation: "Todas las formas son correctas en ES6+. 'var' es la forma clásica, 'let' para variables que pueden cambiar, y 'const' para constantes."
      },
      {
        id: 2,
        question: "¿Qué tipo de dato devuelve la expresión: typeof null?",
        options: [
          "'null'",
          "'undefined'",
          "'object'",
          "'boolean'"
        ],
        correctAnswer: 2,
        explanation: "En JavaScript, 'typeof null' devuelve 'object'. Esto es considerado un bug histórico del lenguaje."
      },
      {
        id: 3,
        question: "¿Cuál será el resultado de: console.log(2 + '2')?",
        options: [
          "4",
          "'22'",
          "Error",
          "NaN"
        ],
        correctAnswer: 1,
        explanation: "JavaScript realiza coerción de tipos y convierte el número 2 a string, concatenando '2' + '2' = '22'."
      },
      {
        id: 4,
        question: "¿Qué estructura de control es más eficiente para comparar múltiples valores de una variable?",
        options: [
          "if...else if",
          "switch",
          "while",
          "for"
        ],
        correctAnswer: 1,
        explanation: "El statement 'switch' es más eficiente y legible cuando necesitas comparar múltiples valores exactos de una variable."
      },
      {
        id: 5,
        question: "¿Cuál es la diferencia principal entre == y === en JavaScript?",
        options: [
          "No hay diferencia",
          "=== es más rápido",
          "== compara valores, === compara valores y tipos",
          "=== solo funciona con números"
        ],
        correctAnswer: 2,
        explanation: "El operador == realiza coerción de tipos antes de comparar, mientras que === compara tanto valor como tipo sin coerción."
      },
      {
        id: 6,
        question: "¿Cuál es el resultado de: [1, 2, 3].length?",
        options: [
          "2",
          "3",
          "4",
          "undefined"
        ],
        correctAnswer: 1,
        explanation: "La propiedad .length de un array devuelve el número de elementos. El array [1, 2, 3] tiene 3 elementos."
      },
      {
        id: 7,
        question: "¿Qué valor tiene una variable declarada pero no inicializada?",
        options: [
          "null",
          "undefined",
          "0",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "En JavaScript, las variables declaradas pero no inicializadas tienen el valor 'undefined'."
      },
      {
        id: 8,
        question: "¿Cuál es la forma correcta de crear un comentario de múltiples líneas?",
        options: [
          "// Esto es un comentario",
          "/* Esto es un comentario */",
          "<!-- Esto es un comentario -->",
          "# Esto es un comentario"
        ],
        correctAnswer: 1,
        explanation: "Los comentarios de múltiples líneas en JavaScript se escriben entre /* y */."
      }
    ]
  },
  
  functions: {
    id: 'functions',
    title: 'JavaScript Functions & Scope',
    description: 'Pon a prueba tu comprensión sobre funciones, scope, closures y arrow functions en JavaScript.',
    timeLimit: 12, // minutes
    questions: [
      {
        id: 1,
        question: "¿Cuál es la sintaxis correcta para una arrow function que suma dos números?",
        options: [
          "const suma = (a, b) => { return a + b }",
          "const suma = (a, b) => a + b",
          "const suma = function(a, b) => a + b",
          "Tanto A como B son correctas"
        ],
        correctAnswer: 3,
        explanation: "Ambas sintaxis son correctas. Las arrow functions pueden usar llaves con return explícito o return implícito sin llaves."
      },
      {
        id: 2,
        question: "¿Qué es un closure en JavaScript?",
        options: [
          "Una función que se ejecuta inmediatamente",
          "Una función que tiene acceso a variables de su scope padre",
          "Una función sin parámetros",
          "Una función que devuelve otra función"
        ],
        correctAnswer: 1,
        explanation: "Un closure es una función que mantiene acceso a las variables de su ámbito léxico exterior, incluso después de que la función exterior haya terminado."
      },
      {
        id: 3,
        question: "¿Cuál será el resultado del siguiente código?\n\nfunction test() {\n  console.log(x);\n  var x = 5;\n}\ntest();",
        options: [
          "5",
          "undefined",
          "Error: x is not defined",
          "null"
        ],
        correctAnswer: 1,
        explanation: "Debido al 'hoisting', la declaración de 'var x' se mueve al inicio de la función, pero la asignación permanece en su lugar, por lo que x es undefined cuando se hace console.log."
      },
      {
        id: 4,
        question: "¿Cuál es la diferencia entre 'function declaration' y 'function expression'?",
        options: [
          "No hay diferencia",
          "Las declaraciones sufren hoisting, las expresiones no",
          "Las expresiones son más rápidas",
          "Las declaraciones no pueden tener parámetros"
        ],
        correctAnswer: 1,
        explanation: "Las function declarations sufren hoisting completo (pueden ser llamadas antes de su declaración), mientras que las function expressions solo hoisting de la variable."
      },
      {
        id: 5,
        question: "¿Qué hace el método .call() en una función?",
        options: [
          "Llama a la función inmediatamente",
          "Crea una copia de la función",
          "Permite especificar el contexto 'this' al llamar la función",
          "Convierte la función en arrow function"
        ],
        correctAnswer: 2,
        explanation: "El método .call() permite especificar qué objeto será 'this' dentro de la función cuando se ejecute."
      },
      {
        id: 6,
        question: "¿Cuál es el ámbito (scope) de las variables declaradas con 'let'?",
        options: [
          "Global scope",
          "Function scope",
          "Block scope",
          "Module scope"
        ],
        correctAnswer: 2,
        explanation: "Las variables declaradas con 'let' tienen block scope, es decir, solo son accesibles dentro del bloque {} donde fueron declaradas."
      },
      {
        id: 7,
        question: "¿Qué es una IIFE (Immediately Invoked Function Expression)?",
        options: [
          "Una función que se ejecuta automáticamente al ser definida",
          "Una función que solo puede ser llamada una vez",
          "Una función sin parámetros",
          "Una función que devuelve otra función"
        ],
        correctAnswer: 0,
        explanation: "Una IIFE es una función que se ejecuta inmediatamente después de ser definida, usando la sintaxis: (function(){})() o (() => {})()"
      },
      {
        id: 8,
        question: "¿Cuál es el valor de 'this' en una arrow function?",
        options: [
          "Depende de cómo se llame la función",
          "Siempre es window/global",
          "Hereda 'this' del contexto léxico donde fue definida",
          "Siempre es undefined"
        ],
        correctAnswer: 2,
        explanation: "Las arrow functions no tienen su propio 'this', sino que heredan el valor de 'this' del contexto léxico donde fueron definidas."
      },
      {
        id: 9,
        question: "¿Qué parámetro recibe por defecto una callback function en el método .map()?",
        options: [
          "Solo el elemento actual",
          "Elemento, índice, array completo",
          "Solo el índice",
          "Elemento e índice"
        ],
        correctAnswer: 1,
        explanation: "El método .map() pasa tres parámetros a la callback: el elemento actual, su índice, y el array completo."
      }
    ]
  }
};

export default quizzes;
