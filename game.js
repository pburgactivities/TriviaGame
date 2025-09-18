// game.js
const elements = {
    mainMenu: document.getElementById("main-menu"),
    quizContainer: document.getElementById("quiz-container"),
    resultsContainer: document.getElementById("results-container"),
    questionEl: document.getElementById("question"),
    optionsContainer: document.getElementById("options-container"),
    nextButton: document.getElementById("next-button"),
    endButton: document.getElementById("end-button"),
    explanationEl: document.getElementById("explanation"),
    scoreText: document.getElementById("score-text"),
    topicButtons: document.querySelectorAll("#topic-selection .topic-buttons button"),
    startButton: document.getElementById("start-button"),
    restartButton: document.getElementById("restart-button"),
    questionCountInput: document.getElementById("question-count"),
    progressText: document.getElementById("progress-text"),
    gameTitle: document.getElementById("game-title"),
    progressBar: document.getElementById("progress-bar"),
    hintButton: document.getElementById("hint-button"),
    summaryList: document.getElementById("summary-list"),
    playerNameInput: document.getElementById("player-name"),
    leaderboardList: document.getElementById("leaderboard-list"),
    resetLeaderboardButton: document.getElementById("reset-leaderboard-button"),
    gameContainer: document.getElementById("game-container"),
    fullscreenButton: document.getElementById("fullscreen-button"),
    bgMusic: document.getElementById("bg-music"),
    correctSound: document.getElementById("correct-sound"),
    wrongSound: document.getElementById("wrong-sound"),
    startSound: document.getElementById("start-sound"),
    finishSound: document.getElementById("finish-sound"),
    topicSelection: document.getElementById("topic-selection"),
    musicSubcategories: document.getElementById("music-subcategories"),
    backButton: document.getElementById("back-button"),
    subcategoryButtons: document.querySelectorAll("#music-subcategories button"),
    volumeSlider: document.getElementById('volume-slider'),
    musicToggleButton: document.getElementById('music-toggle-button'),
    muteButton: document.getElementById('mute-button')
};

// UI Functions
function updateProgressBar(current, total) {
    const progress = (current / total) * 100;
    elements.progressBar.style.width = `${progress}%`;
}

function displayQuestion(questionData) {
    elements.questionEl.textContent = questionData.question;
    elements.optionsContainer.innerHTML = "";
    elements.explanationEl.textContent = "";
    elements.nextButton.style.display = "none";
    elements.hintButton.style.display = "block";

    const shuffledOptions = shuffleArray([...questionData.options]);
    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        elements.optionsContainer.appendChild(button);
    });
}

function showAnswerFeedback(isCorrect, selectedButton, currentQuestion) {
    elements.hintButton.style.display = "none";
    elements.optionsContainer.querySelectorAll(".option").forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.answer) {
            button.classList.add("correct");
        }
    });

    if (!isCorrect) {
        selectedButton.classList.add("incorrect");
    }

    elements.explanationEl.textContent = currentQuestion.explanation;
    elements.nextButton.style.display = "block";
}

function updateLeaderboardDisplay(leaderboard) {
    elements.leaderboardList.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;
        elements.leaderboardList.appendChild(li);
    });
}

function playSound(soundId) {
    const sound = elements[soundId];
    if (sound) {
        // Only duck the music if a sound effect is being played
        if (soundId !== 'bgMusic' && !elements.bgMusic.paused) {
            const originalVolume = elements.bgMusic.volume;
            elements.bgMusic.volume = originalVolume * 0.2; // Lower volume to 20%
            
            // Listen for the 'ended' event of the sound effect
            sound.addEventListener('ended', () => {
                elements.bgMusic.volume = originalVolume;
            }, { once: true }); // Use { once: true } to automatically remove the listener
        }

        sound.currentTime = 0;
        sound.play().catch(e => console.log(`Error playing sound ${soundId}:`, e));
    }
}

elements.volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value;
    elements.bgMusic.volume = volume;
    elements.startSound.volume = volume;
    elements.correctSound.volume = volume;
    elements.wrongSound.volume = volume;
    elements.finishSound.volume = volume;
});

// Game Variables
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
        playSound('correctSound');
    } else {
        playSound('wrongSound');
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
    playSound('finishSound');
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
    
    // Music Toggle Button on Main Menu
    elements.musicToggleButton.addEventListener('click', () => {
        if (elements.bgMusic.paused) {
            playSound('bgMusic');
            elements.musicToggleButton.textContent = "Pause Music";
        } else {
            elements.bgMusic.pause();
            elements.musicToggleButton.textContent = "Play Music";
        }
    });

    // Mute Button during Quiz
    elements.muteButton.addEventListener('click', () => {
        if (elements.bgMusic.paused) {
            playSound('bgMusic');
            elements.muteButton.textContent = "Mute";
        } else {
            elements.bgMusic.pause();
            elements.muteButton.textContent = "Unmute";
        }
    });

    elements.topicButtons.forEach(button => {
        button.addEventListener("click", () => {
            elements.topicButtons.forEach(btn => btn.classList.remove("selected"));
            elements.subcategoryButtons.forEach(btn => btn.classList.remove("selected"));
            if (button.classList.contains("has-subcategories")) {
                elements.topicSelection.querySelector(".topic-buttons").classList.add("hidden");
                elements.musicSubcategories.classList.remove("hidden");
                selectedTopic = null;
                elements.startButton.disabled = true;
                return;
            }
            button.classList.add("selected");
            selectedTopic = button.dataset.topic;
            elements.startButton.disabled = false;
        });
    });

    elements.subcategoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            elements.topicButtons.forEach(btn => btn.classList.remove("selected"));
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
        playSound('startSound');
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
            elements.musicToggleButton.textContent = "Play Music";
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
    elements.gameContainer.classList.add("fade-out");
    setTimeout(() => {
        callback();
        elements.gameContainer.classList.remove("fade-out");
        elements.gameContainer.classList.add("fade-in");
        setTimeout(() => {
            elements.gameContainer.classList.remove("fade-in");
        }, 500);
    }, 500);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

init();
