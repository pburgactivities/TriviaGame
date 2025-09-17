// ui.js

// Cache all your HTML elements here
export const elements = {
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
    subcategoryButtons: document.querySelectorAll("#music-subcategories button")
};

// Functions to handle UI updates
export function updateProgressBar(current, total) {
    const progress = (current / total) * 100;
    elements.progressBar.style.width = `${progress}%`;
}

export function displayQuestion(questionData) {
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

export function showAnswerFeedback(isCorrect, selectedButton, currentQuestion) {
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

export function updateLeaderboardDisplay(leaderboard) {
    elements.leaderboardList.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = `${entry.name} - ${entry.score}`;
        elements.leaderboardList.appendChild(li);
    });
}

// Helper function (can be moved to a separate utility file if needed)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
