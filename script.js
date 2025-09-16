const allQuestions = {
    history: [
        {
            question: "Who was the first man to walk on the moon?",
            options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
            answer: "Neil Armstrong",
            explanation: "Neil Armstrong became the first person to walk on the moon on July 20, 1969, during the Apollo 11 mission."
        },
        {
            question: "In what year did the Titanic sink?",
            options: ["1905", "1912", "1918", "1923"],
            answer: "1912",
            explanation: "The RMS Titanic sank on April 15, 1912, after hitting an iceberg during its maiden voyage."
        },
        {
            question: "The television show M*A*S*H was set during which war?",
            options: ["World War II", "The Korean War", "The Vietnam War", "The Cold War"],
            answer: "The Korean War",
            explanation: "The series M*A*S*H ran from 1972 to 1983 and was set during the Korean War."
        },
        {
            question: "Who was the 16th U.S. President?",
            options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Theodore Roosevelt"],
            answer: "Abraham Lincoln",
            explanation: "Abraham Lincoln served as the 16th U.S. President, leading the country during the Civil War."
        }
    ],
    movies: [
        {
            question: "What iconic TV series featured Lucille Ball and Desi Arnaz?",
            options: ["Leave It to Beaver", "I Love Lucy", "The Honeymooners", "Gunsmoke"],
            answer: "I Love Lucy",
            explanation: "I Love Lucy is one of the most beloved and influential sitcoms in television history."
        },
        {
            question: "Which actress starred as Scarlett O'Hara in 'Gone with the Wind'?",
            options: ["Bette Davis", "Vivien Leigh", "Audrey Hepburn", "Judy Garland"],
            answer: "Vivien Leigh",
            explanation: "Vivien Leigh won the Academy Award for Best Actress for her portrayal of Scarlett O'Hara in the 1939 film 'Gone with the Wind'."
        },
        {
            question: "The famous movie from 1959 that ended with the iconic line, 'Well, nobody's perfect' was?",
            options: ["Some Like It Hot", "Gentlemen Prefer Blondes", "The Seven Year Itch", "Bus Stop"],
            answer: "Some Like It Hot",
            explanation: "Directed by Billy Wilder, 'Some Like It Hot' is considered one of the greatest film comedies of all time."
        },
        {
            question: "In what year did Disneyland first open?",
            options: ["1955", "1960", "1965", "1970"],
            answer: "1955",
            explanation: "Disneyland opened its doors in Anaheim, California, on July 17, 1955."
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Pb"],
            answer: "Au",
            explanation: "The chemical symbol for gold, Au, comes from the Latin word 'aurum'."
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars",
            explanation: "Mars is known as the Red Planet because of its reddish appearance, which is caused by iron oxide (rust) on its surface."
        },
        {
            question: "What is the fastest land animal?",
            options: ["Lion", "Cheetah", "Gazelle", "Leopard"],
            answer: "Cheetah",
            explanation: "The cheetah can run up to 70 miles per hour (112 km/h), making it the fastest land animal."
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
            explanation: "The Pacific Ocean is the largest and deepest of the world's five oceans. It covers approximately 30% of the Earth's surface."
        }
    ],
    general: [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
            explanation: "Paris is the capital and most populous city of France. It is also a global center for art, fashion, and culture."
        },
        {
            question: "What is the main ingredient in guacamole?",
            options: ["Tomato", "Onion", "Avocado", "Chili pepper"],
            answer: "Avocado",
            explanation: "Guacamole is an avocado-based dip, originating from Mexico."
        },
        {
            question: "What year did the Beatles make their U.S. debut on 'The Ed Sullivan Show'?",
            options: ["1962", "1964", "1966", "1968"],
            answer: "1964",
            explanation: "The Beatles' first appearance on 'The Ed Sullivan Show' on February 9, 1964, marked the start of the 'British Invasion' in America."
        },
        {
            question: "Who was known as 'The King of Rock and Roll'?",
            options: ["Chuck Berry", "Buddy Holly", "Elvis Presley", "Little Richard"],
            answer: "Elvis Presley",
            explanation: "Elvis Presley became a cultural icon and is widely known by his nickname, 'The King'."
        }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let totalQuestions = 0;

const mainMenu = document.getElementById("main-menu");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const endButton = document.getElementById("end-button");
const explanationEl = document.getElementById("explanation");
const resultsContainer = document.getElementById("results-container");
const scoreText = document.getElementById("score-text");
const topicButtons = document.querySelectorAll(".topic-buttons button");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const questionCountInput = document.getElementById("question-count");
const progressText = document.getElementById("progress-text");

let selectedTopic = null;

topicButtons.forEach(button => {
    button.addEventListener("click", () => {
        topicButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedTopic = button.dataset.topic;
        startButton.disabled = false;
    });
});

startButton.addEventListener("click", () => {
    totalQuestions = parseInt(questionCountInput.value, 10);
    let questionsPool = [];

    if (selectedTopic === "mixed") {
        for (const topic in allQuestions) {
            questionsPool = questionsPool.concat(allQuestions[topic]);
        }
    } else if (selectedTopic) {
        questionsPool = allQuestions[selectedTopic];
    }

    if (questionsPool.length < totalQuestions) {
        alert(`Sorry, there are only ${questionsPool.length} questions available. Please select a number less than or equal to this.`);
        return;
    }

    selectedQuestions = shuffleArray(questionsPool).slice(0, totalQuestions);
    startGame();
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    mainMenu.classList.add("hidden");
    resultsContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResults();
        return;
    }

    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    explanationEl.textContent = "";
    nextButton.style.display = "none";

    // Shuffle options to prevent correct answer from always being in the same spot
    const shuffledOptions = shuffleArray([...currentQuestion.options]);
    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(button, option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedButton, selectedOption) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
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
    scoreText.textContent = `You scored ${score} out of ${totalQuestions} questions!`;
}

function endGame() {
    showResults();
}

nextButton.addEventListener("click", nextQuestion);
endButton.addEventListener("click", endGame);
restartButton.addEventListener("click", () => {
    mainMenu.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultsContainer.classList.add("hidden");
    questionCountInput.value = 5;
    topicButtons.forEach(btn => btn.classList.remove("selected"));
    selectedTopic = null;
    startButton.disabled = true;
});

// Start the game by showing the main menu
mainMenu.classList.remove("hidden");
