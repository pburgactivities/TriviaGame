const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        explanation: "Mars is known as the Red Planet because of its reddish appearance, which is caused by iron oxide (rust) on its surface."
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
        explanation: "The Pacific Ocean is the largest and deepest of the world's five oceans. It covers approximately 30% of the Earth's surface."
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
        explanation: "Paris is the capital and most populous city of France. It is also a global center for art, fashion, and culture."
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const explanationEl = document.getElementById("explanation");
const resultsContainer = document.getElementById("results-container");
const scoreText = document.getElementById("score-text");

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    explanationEl.textContent = "";
    nextButton.style.display = "none";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(button, option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedButton, selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctOption = currentQuestion.answer;

    optionsContainer.querySelectorAll(".option").forEach(button => {
        button.disabled = true;
        if (button.textContent === correctOption) {
            button.classList.add("correct");
        }
    });

    if (selectedOption === correctOption) {
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    explanationEl.textContent = currentQuestion.explanation;
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    quizContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    scoreText.textContent = `You scored ${score} out of ${questions.length} questions!`;
}

nextButton.addEventListener("click", nextQuestion);

// Start the game
loadQuestion();
