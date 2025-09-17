// game.js
import { elements, updateProgressBar, displayQuestion, showAnswerFeedback, updateLeaderboardDisplay } from './ui.js';

let allQuestions = {};
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let totalQuestions = 0;
let answeredQuestions = [];
let playerName = "Player";
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

function addScoreToLeaderboard(name, score) {
    const leaderboard = getLeaderboard();
    leaderboard.push({ name: name, score: score });
    saveLeaderboard(leaderboard);
    updateLeaderboardDisplay(getLeaderboard());
}

function resetLeaderboard() {
    if (confirm("Are you sure you want to reset the leaderboard?")) {
        localStorage.removeItem('trivia_leaderboard');
        updateLeaderboardDisplay(getLeaderboard());
    }
}

// --- Game Flow Functions ---
function startGame() {
    elements.bgMusic.play().catch(e => console.log("Background music autoplay failed:", e));
    elements.startSound.play().catch(e => console.log("Start sound failed:", e));
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

    elements.progressText.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    updateProgressBar(currentQuestionIndex, totalQuestions);

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    displayQuestion(currentQuestion);

    elements.optionsContainer.querySelectorAll(".option").forEach(button => {
        button.addEventListener("click", (e) => checkAnswer(e.target, e.target.textContent));
    });
}

function checkAnswer(selectedButton, selectedOption) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    
    if (isCorrect) {
        score++;
        elements.correctSound.play().catch(e => console.log("Correct sound failed:", e));
    } else {
        elements.wrongSound.play().catch(e => console.log("Wrong sound failed:", e));
    }
    
    showAnswerFeedback(isCorrect, selectedButton, currentQuestion);

    answeredQuestions.push({
        question: currentQuestion.question,
        correct: isCorrect,
        correctAnswer: currentQuestion.answer
    });
}

function showResults() {
    elements.bgMusic.pause();
    elements.finishSound.play().catch(e => console.log("Finish sound failed:", e));
    startTransition(() => {
        elements.quizContainer.classList.add("hidden");
        elements.resultsContainer.classList.remove("hidden");
        elements.scoreText.textContent = `You scored ${score} out of ${totalQuestions} questions!`;
        addScoreToLeaderboard(playerName, score);
        generateSummary();
        updateProgressBar(currentQuestionIndex, totalQuestions);
    });
}

function generateSummary() {
    elements.summaryList.innerHTML = "";
    answeredQuestions.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.question} - You were ${item.correct ? 'Correct' : `Incorrect (Correct answer: ${item.correctAnswer})`}`;
        li.classList.add(item.correct ? 'correct' : 'incorrect');
        elements.summaryList.appendChild(li);
    });
}

function endGame() {
    showResults();
}

// --- Initial Setup and Event Listeners ---
function init() {
    fetchQuestions();
    elements.startButton.disabled = true;
    updateLeaderboardDisplay(getLeaderboard());

    elements.topicButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList.contains("has-subcategories")) {
                elements.topicButtons.forEach(btn => btn.classList.remove("selected"));
                elements.topicSelection.querySelector(".topic-buttons").classList.add("hidden");
                elements.musicSubcategories.classList.remove("hidden");
                selectedTopic = null;
                elements.startButton.disabled = true;
                return;
            }
            elements.topicButtons.forEach(btn => btn.classList.remove("selected"));
            elements.subcategoryButtons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
            selectedTopic = button.dataset.topic;
            elements.startButton.disabled = false;
        });
    });

    elements.subcategoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            elements.subcategoryButtons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
            selectedTopic = button.dataset.topic;
            elements.startButton.disabled = false;
        });
    });

    elements.backButton.addEventListener("click", () => {
        elements.topicSelection.querySelector(".topic-buttons").classList.remove("hidden");
        elements.musicSubcategories.classList.add("hidden");
        elements.topicButtons.forEach(btn => btn.classList.remove("selected"));
        elements.subcategoryButtons.forEach(btn => btn.classList.remove("selected"));
        selectedTopic = null;
        elements.startButton.disabled = true;
    });

    elements.playerNameInput.addEventListener("input", (e) => {
        playerName = e.target.value.trim() || "Player";
    });

    elements.startButton.addEventListener("click", () => {
        totalQuestions = parseInt(elements.questionCountInput.value, 10);
        let questionsPool = [];

        if (selectedTopic === "mixed") {
            for (const topic in allQuestions) {
                if (typeof allQuestions[topic] === 'object' && !Array.isArray(allQuestions[topic])) {
                    for (const subtopic in allQuestions[topic]) {
                        questionsPool = questionsPool.concat(allQuestions[topic][subtopic]);
                    }
                } else {
                    questionsPool = questionsPool.concat(allQuestions[topic]);
                }
            }
            elements.gameTitle.textContent = "Mixed Topics";
        } else if (selectedTopic) {
            const [parentTopic, subTopic] = selectedTopic.split('-');
            if (allQuestions[parentTopic] && allQuestions[parentTopic][selectedTopic]) {
                questionsPool = allQuestions[parentTopic][selectedTopic];
                elements.gameTitle.textContent = `${subTopic.toUpperCase()} Trivia`;
            } else if (allQuestions[selectedTopic]) {
                questionsPool = allQuestions[selectedTopic];
                elements.gameTitle.textContent = selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1) + " Trivia";
            }
        }

        if (questionsPool.length < totalQuestions) {
            alert(`Sorry, there are only ${questionsPool.length} questions available. Please select a number less than or equal to this.`);
            return;
        }

        selectedQuestions = shuffleArray(questionsPool).slice(0, totalQuestions);
        startTransition(() => {
            elements.mainMenu.classList.add("hidden");
            elements.resultsContainer.classList.add("hidden");
            elements.quizContainer.classList.remove("hidden");
            startGame();
        });
    });

    elements.nextButton.addEventListener("click", () => {
        startTransition(() => {
            currentQuestionIndex++;
            loadQuestion();
        });
    });

    elements.endButton.addEventListener("click", endGame);

    elements.hintButton.addEventListener("click", () => {
        const currentQuestion = selectedQuestions[currentQuestionIndex];
        elements.explanationEl.textContent = currentQuestion.hint;
    });

    elements.restartButton.addEventListener("click", () => {
        startTransition(() => {
            elements.bgMusic.pause();
            elements.bgMusic.currentTime = 0;
            elements.mainMenu.classList.remove("hidden");
            elements.quizContainer.classList.add("hidden");
            elements.resultsContainer.classList.add("hidden");
            elements.questionCountInput.value = 5;
            elements.topicButtons.forEach(btn => btn.classList.remove("selected"));
            elements.subcategoryButtons.forEach(btn => btn.classList.remove("selected"));
            elements.topicSelection.querySelector(".topic-buttons").classList.remove("hidden");
            elements.musicSubcategories.classList.add("hidden");
            selectedTopic = null;
            elements.startButton.disabled = true;
            elements.gameTitle.textContent = "Fun Trivia Quiz";
            updateLeaderboardDisplay(getLeaderboard());
        });
    });

    elements.resetLeaderboardButton.addEventListener("click", resetLeaderboard);
    
    // --- Fullscreen Logic ---
    elements.fullscreenButton.addEventListener("click", () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            elements.gameContainer.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        }
    });
}

function startTransition(callback) {
    elements.gameContainer.style.opacity = 0;
    setTimeout(() => {
        callback();
        elements.gameContainer.style.opacity = 1;
    }, 500);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start the game by calling the init function
init();
