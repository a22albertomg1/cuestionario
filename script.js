const questions = [
    {
        question: "¿Cuál es la principal responsabilidad fiscal del IRPF?",
        answers: [
            { text: "Retenciones e ingresos a cuenta", correct: true },
            { text: "Declaración anual", correct: false },
            { text: "Pagos fraccionados", correct: false },
            { text: "Deducciones fiscales", correct: false }
        ]
    },{
        question: "¿Cuál es la principal responsabilidad fiscal del IRPF?",
        answers: [
            { text: "Retenciones e ingresos a cuenta", correct: true },
            { text: "Declaración anual", correct: false },
            { text: "Pagos fraccionados", correct: false },
            { text: "Deducciones fiscales", correct: false }
        ]
    },{
        question: "¿Cuál es la principal responsabilidad fiscal del IRPF?",
        answers: [
            { text: "Retenciones e ingresos a cuenta", correct: true },
            { text: "Declaración anual", correct: false },
            { text: "Pagos fraccionados", correct: false },
            { text: "Deducciones fiscales", correct: false }
        ]
    },{
        question: "¿Cuál es la principal responsabilidad fiscal del IRPF?",
        answers: [
            { text: "Retenciones e ingresos a cuenta", correct: true },
            { text: "Declaración anual", correct: false },
            { text: "Pagos fraccionados", correct: false },
            { text: "Deducciones fiscales", correct: false }
        ]
    },{
        question: "¿Cuál es la principal responsabilidad fiscal del IRPF?",
        answers: [
            { text: "Retenciones e ingresos a cuenta", correct: true },
            { text: "Declaración anual", correct: false },
            { text: "Pagos fraccionados", correct: false },
            { text: "Deducciones fiscales", correct: false }
        ]
    },
    // Añade más preguntas aquí
];

let currentQuestionIndex = 0;
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const questionCounter = document.getElementById('question-counter');

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.innerText = 'Siguiente';
    nextButton.classList.add('hide');
    prevButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
    updateQuestionCounter();
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
    updateButtons();
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    // Eliminar la clase 'selected' de todos los botones y añadirla solo al seleccionado
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');

    // Colorear los botones según si son correctos o incorrectos
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });

    nextButton.classList.remove('hide');
    if (currentQuestionIndex > 0) {
        prevButton.classList.remove('hide');
    }
    updateButtons();
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
    // Mantener la clase 'selected' si el botón es el seleccionado
    if (!element.classList.contains('selected')) {
        element.classList.remove('selected');
    }
}

function updateQuestionCounter() {
    questionCounter.innerText = `${currentQuestionIndex + 1} / ${questions.length}`;
}

function updateButtons() {
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerText = 'Reiniciar';
    } else {
        nextButton.innerText = 'Siguiente';
    }

    if (currentQuestionIndex === 0) {
        prevButton.classList.add('hide');
    } else {
        prevButton.classList.remove('hide');
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
        updateQuestionCounter();
    } else {
        startQuiz();
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(questions[currentQuestionIndex]);
        updateQuestionCounter();
    }
});

startQuiz();
