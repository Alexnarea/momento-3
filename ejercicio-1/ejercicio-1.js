const questions = [
    {
        question: "¿Cuál es la descomposición en factores primos del número 72?",
        options: ["2^3 * 3^2", "2^4 * 3^3", "3^2 * 2^3 * 5", "2^2 * 3^4"],
        correctAnswer: "a"
    },
    {
        question: "Factoriza la expresión 4x + 8xy - 2x^2 - 4xy.",
        options: ["2x(2 + 4y) - x(2 + 4y)", "2x(2 - 4y) - x(2 + 4y)", "2x(2 + 4y) + x(2 - 4y)", "2x(2 - 4y) + x(2 - 4y)"],
        correctAnswer: "a"
    },
    {
        question: "¿Cuál es la factorización correcta de a^2 - b^2?",
        options: ["(a + b)(a - b)", "(a - b)^2", "(a + b)^2", "(a - b)(a + b)^2"],
        correctAnswer: "a"
    },
    {
        question: "Factoriza el trinomio x^2 - 6x + 9.",
        options: ["(x - 3)^2", "(x + 3)^2", "(x - 3)(x + 3)", "(x - 6)(x + 6)"],
        correctAnswer: "a"
    },
    {
        question: "¿Cuál es la factorización de x^2 + 7x + 12?",
        options: ["(x + 3)(x + 4)", "(x - 3)(x + 4)", "(x + 3)(x - 4)", "(x - 3)(x - 4)"],
        correctAnswer: "a"
    },
    {
        question: "Factoriza la expresión 3xy - 6y + 2x - 4.",
        options: ["(3y - 2)(x - 4)", "3(y - 2)(x + 2)", "(3y - 2)(x + 2)", "(y - 2)(3x + 2)"],
        correctAnswer: "a"
    },
    {
        question: "¿Cuál es la factorización de 2x^2 + 5x + 3?",
        options: ["(2x + 3)(x + 1)", "(2x - 1)(x + 3)", "(2x + 1)(x + 3)", "(2x - 3)(x - 1)"],
        correctAnswer: "a"
    },
    {
        question: "Factoriza la expresión 8x^3 - 27.",
        options: ["(2x - 3)^3", "(2x + 3)^3", "(2x - 3)(4x^2 + 6x + 9)", "(2x + 3)(4x^2 - 6x + 9)"],
        correctAnswer: "a"
    },
    {
        question: "Factoriza la expresión x^4 - 1.",
        options: ["(x - 1)(x + 1)(x^2 + 1)", "(x^2 - 1)(x^2 + 1)", "(x - 1)(x + 1)(x^2 - 1)", "(x^2 - 1)(x^2 - 1)"],
        correctAnswer: "a"
    },
    {
        question: "¿Cuál es la factorización de (a - b)^3?",
        options: ["(a - b)(a^2 + ab + b^2)", "(a - b)^2(a + b)", "(a - b)^3", "(a^3 - b^3)"],
        correctAnswer: "a"
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = String.fromCharCode("a".charCodeAt(0) + selectedIndex);

    if (selectedAnswer === currentQuestion.correctAnswer) {
        alert("¡Correcto! ¡Bien hecho!");
    } else {
        alert("Incorrecto. ¡Inténtalo de nuevo!");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("¡Felicidades! Has completado el juego de factoreo.");
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Ya has completado todas las preguntas.");
    }
}

// Mostrar la primera pregunta al cargar la página
showQuestion();
