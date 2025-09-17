let allQuestions = {};

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let totalQuestions = 0;
let answeredQuestions = [];
let playerName = "Player";
const mainMenu = document.getElementById("main-menu");
const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results-container");
const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const endButton = document.getElementById("end-button");
const explanationEl = document.getElementById("explanation");
const scoreText = document.getElementById("score-text");
const topicButtons = document.querySelectorAll("#topic-selection .topic-buttons button");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const questionCountInput = document.getElementById("question-count");
const progressText = document.getElementById("progress-text");
const gameTitle = document.getElementById("game-title");
const progressBar = document.getElementById("progress-bar");
const hintButton = document.getElementById("hint-button");
const summaryList = document.getElementById("summary-list");
const playerNameInput = document.getElementById("player-name");
const leaderboardList = document.getElementById("leaderboard-list");
const resetLeaderboardButton = document.getElementById("reset-leaderboard-button");
const gameContainer = document.getElementById("game-container");
const fullscreenButton = document.getElementById("fullscreen-button");

const bgMusic = document.getElementById("bg-music");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const startSound = document.getElementById("start-sound");
const finishSound = document.getElementById("finish-sound");

const topicSelection = document.getElementById("topic-selection");
const musicSubcategories = document.getElementById("music-subcategories");
const backButton = document.getElementById("back-button");
const subcategoryButtons = document.querySelectorAll("#music-subcategories button");

let selectedTopic = null;

// --- Data Fetching ---
async function fetchQuestions() {
    try {
        const response = await fetch('questions.json');
        const data = await response.json();
        allQuestions = data;
        console.log("Questions loaded successfully!");
    } catch (error) {
        console.error("Failed to load questions:", error);
        alert("Failed to load quiz questions. Please try again later.");
    }
}

// --- Leaderboard Functions ---
function getLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('trivia_leaderboard')) || [];
    return leaderboard;
}

function saveLeaderboard(leaderboard) {
    localStorage.setItem('trivia_leaderboard', JSON.stringify(leaderboard));
}

function updateLeaderboardDisplay() {
    const leaderboard = getLeaderboard().sort((a, b) => b.score - a.score).slice(0, 10);
    leaderboardList.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = `${entry.name} - ${entry.score}`;
        leaderboardList.appendChild(li);
    });
}

function addScoreToLeaderboard(name, score) {
    const leaderboard = getLeaderboard();
    leaderboard.push({ name: name, score: score });
    saveLeaderboard(leaderboard);
    updateLeaderboardDisplay();
}

function resetLeaderboard() {
    if (confirm("Are you sure you want to reset the leaderboard?")) {
        localStorage.removeItem('trivia_leaderboard');
        updateLeaderboardDisplay();
    }
}

// --- Event Listeners ---
topicButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Handle a button that has subcategories
        if (button.classList.contains("has-subcategories")) {
            topicButtons.forEach(btn => btn.classList.remove("selected"));
            topicSelection.querySelector(".topic-buttons").classList.add("hidden");
            musicSubcategories.classList.remove("hidden");
            selectedTopic = null; // Deselect a topic until a subcategory is chosen
            startButton.disabled = true;
            return;
        }

        // Handle regular topic buttons
        topicButtons.forEach(btn => btn.classList.remove("selected"));
        subcategoryButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedTopic = button.dataset.topic;
        startButton.disabled = false;
    });
});

subcategoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        subcategoryButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedTopic = button.dataset.topic;
        startButton.disabled = false;
    });
});

backButton.addEventListener("click", () => {
    topicSelection.querySelector(".topic-buttons").classList.remove("hidden");
    musicSubcategories.classList.add("hidden");
    topicButtons.forEach(btn => btn.classList.remove("selected"));
    subcategoryButtons.forEach(btn => btn.classList.remove("selected"));
    selectedTopic = null;
    startButton.disabled = true;
});

playerNameInput.addEventListener("input", (e) => {
    playerName = e.target.value.trim() || "Player";
});

startButton.addEventListener("click", () => {
    totalQuestions = parseInt(questionCountInput.value, 10);
    let questionsPool = [];

    if (selectedTopic === "mixed") {
        // Collect questions from all top-level categories and subcategories
        for (const topic in allQuestions) {
            if (typeof allQuestions[topic] === 'object' && !Array.isArray(allQuestions[topic])) {
                // It's an object of subcategories
                for (const subtopic in allQuestions[topic]) {
                    questionsPool = questionsPool.concat(allQuestions[topic][subtopic]);
                }
            } else {
                // It's a regular array of questions
                questionsPool = questionsPool.concat(allQuestions[topic]);
            }
        }
        gameTitle.textContent = "Mixed Topics";
    } else if (selectedTopic) {
        // Check if the selected topic is a subcategory
        const [parentTopic, subTopic] = selectedTopic.split('-');
        if (allQuestions[parentTopic] && allQuestions[parentTopic][selectedTopic]) {
            questionsPool = allQuestions[parentTopic][selectedTopic];
            gameTitle.textContent = `${subTopic.toUpperCase()} Trivia`;
        } else if (allQuestions[selectedTopic]) {
            questionsPool = allQuestions[selectedTopic];
            gameTitle.textContent = selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1) + " Trivia";
        }
    }

    if (questionsPool.length < totalQuestions) {
        alert(`Sorry, there are only ${questionsPool.length} questions available. Please select a number less than or equal to this.`);
        return;
    }

    selectedQuestions = shuffleArray(questionsPool).slice(0, totalQuestions);
    startTransition(() => {
        mainMenu.classList.add("hidden");
        resultsContainer.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        startGame();
    });
});

nextButton.addEventListener("click", () => {
    startTransition(() => {
        currentQuestionIndex++;
        loadQuestion();
    });
});

endButton.addEventListener("click", endGame);

hintButton.addEventListener("click", () => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    explanationEl.textContent = currentQuestion.hint;
});

restartButton.addEventListener("click", () => {
    startTransition(() => {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        mainMenu.classList.remove("hidden");
        quizContainer.classList.add("hidden");
        resultsContainer.classList.add("hidden");
        questionCountInput.value = 5;
        topicButtons.forEach(btn => btn.classList.remove("selected"));
        subcategoryButtons.forEach(btn => btn.classList.remove("selected"));
        topicSelection.querySelector(".topic-buttons").classList.remove("hidden");
        musicSubcategories.classList.add("hidden");
        selectedTopic = null;
        startButton.disabled = true;
        gameTitle.textContent = "Fun Trivia Quiz";
        updateLeaderboardDisplay();
    });
});

resetLeaderboardButton.addEventListener("click", resetLeaderboard);

// --- Fullscreen Logic ---
fullscreenButton.addEventListener("click", () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        gameContainer.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    }
});

// --- Game Logic Functions ---
function startTransition(callback) {
    gameContainer.style.opacity = 0;
    setTimeout(() => {
        callback();
        gameContainer.style.opacity = 1;
    }, 500);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    bgMusic.play().catch(e => console.log("Background music autoplay failed:", e));
    startSound.play().catch(e => console.log("Start sound failed:", e));
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResults();
        return;
    }

    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    updateProgressBar();

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    explanationEl.textContent = "";
    nextButton.style.display = "none";
    hintButton.style.display = "block";

    const shuffledOptions = shuffleArray([...currentQuestion.options]);
    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(button, option));
        optionsContainer.appendChild(button);
    });
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
}

function checkAnswer(selectedButton, selectedOption) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const correctOption = currentQuestion.answer;

    hintButton.style.display = "none";
    optionsContainer.querySelectorAll(".option").forEach(button => {
        button.disabled = true;
        if (button.textContent === correctOption) {
            button.classList.add("correct");
        }
    });
    const isCorrect = selectedOption === correctOption;
    if (isCorrect) {
        score++;
        correctSound.play().catch(e => console.log("Correct sound failed:", e));
    } else {
        selectedButton.classList.add("incorrect");
        wrongSound.play().catch(e => console.log("Wrong sound failed:", e));
    }

    explanationEl.textContent = currentQuestion.explanation;
    nextButton.style.display = "block";
    answeredQuestions.push({
        question: currentQuestion.question,
        correct: isCorrect,
        correctAnswer: correctOption
    });
}

function showResults() {
    bgMusic.pause();
    finishSound.play().catch(e => console.log("Finish sound failed:", e));
    startTransition(() => {
        quizContainer.classList.add("hidden");
        resultsContainer.classList.remove("hidden");
        scoreText.textContent = `You scored ${score} out of ${totalQuestions} questions!`;
        addScoreToLeaderboard(playerName, score);
        generateSummary();
        updateProgressBar();
    });
}

function generateSummary() {
    summaryList.innerHTML = "";
    answeredQuestions.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.question} - You were ${item.correct ? 'Correct' : `Incorrect (Correct answer: ${item.correctAnswer})`}`;
        li.classList.add(item.correct ? 'correct' : 'incorrect');
        summaryList.appendChild(li);
    });
}

function endGame() {
    showResults();
}

// Initial setup
fetchQuestions(); // Call the async function to load the questions
startButton.disabled = true;
updateLeaderboardDisplay();
