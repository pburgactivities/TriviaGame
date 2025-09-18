document.addEventListener('DOMContentLoaded', () => {
    /**
     * CONSTANTS
     * Centralizes strings and values used throughout the script to prevent typos and ease future updates.
     */
    const constants = {
        LEADERBOARD_KEY: 'trivia_leaderboard',
        THEME_KEY: 'theme',
        DEFAULT_THEME: 'default',
        DEFAULT_PLAYER_NAME: 'Player',
        CSS_HIDDEN: 'hidden',
        CSS_SELECTED: 'selected',
        CSS_CORRECT: 'correct',
        CSS_INCORRECT: 'incorrect',
        CSS_FADE_IN: 'fade-in',
        CSS_FADE_OUT: 'fade-out'
    };

    /**
     * ELEMENTS OBJECT
     * Centralizes all DOM element queries.
     */
    const elements = {
        // Screens
        mainMenu: document.getElementById("main-menu"),
        quizContainer: document.getElementById("quiz-container"),
        resultsContainer: document.getElementById("results-container"),
        
        // Main Menu
        playerNameInput: document.getElementById("player-name"),
        themeSelector: document.getElementById('theme-selector'),
        volumeSlider: document.getElementById('volume-slider'),
        musicToggleButton: document.getElementById('music-toggle-button'),
        mainTopicsContainer: document.querySelector("#main-topics .topic-buttons-container"),
        subTopicsContainer: document.querySelector("#sub-topics .topic-buttons-container"),
        mainTopics: document.getElementById("main-topics"),
        subTopics: document.getElementById("sub-topics"),
        subTopicsTitle: document.getElementById("sub-topics-title"),
        backToMainTopicsBtn: document.getElementById("back-to-main-topics"),
        questionCountInput: document.getElementById("question-count"),
        startButton: document.getElementById("start-button"),
        leaderboardList: document.getElementById("leaderboard-list"),
        resetLeaderboardButton: document.getElementById("reset-leaderboard-button"),
        viewAllScoresButton: document.getElementById('view-all-scores-button'),
        fullscreenButton: document.getElementById("fullscreen-button"),
        
        // Quiz
        gameTitleQuiz: document.getElementById("game-title-quiz"),
        progressBar: document.getElementById("progress-bar"),
        progressText: document.getElementById("progress-text"),
        questionEl: document.getElementById("question"),
        optionsContainer: document.getElementById("options-container"),
        explanationEl: document.getElementById("explanation"),
        hintButton: document.getElementById("hint-button"),
        nextButton: document.getElementById("next-button"),
        endButton: document.getElementById("end-button"),
        muteButton: document.getElementById('mute-button'),
        
        // Results
        scoreText: document.getElementById("score-text"),
        summaryList: document.getElementById("summary-list"),
        restartButton: document.getElementById("restart-button"),
        
        // Audio
        bgMusic: document.getElementById("bg-music"),
        correctSound: document.getElementById("correct-sound"),
        wrongSound: document.getElementById("wrong-sound"),
        startSound: document.getElementById("start-sound"),
        finishSound: document.getElementById("finish-sound"),
        
        // General
        gameContainer: document.getElementById("game-container"),
    };
    elements.allAudio = [elements.bgMusic, elements.correctSound, elements.wrongSound, elements.startSound, elements.finishSound];

    /**
     * GAME STATE OBJECT
     * Manages all the data and state for the quiz.
     */
    const gameState = {
        allQuestions: {},
        currentQuestionIndex: 0,
        score: 0,
        selectedQuestions: [],
        answeredQuestions: [],
        playerName: constants.DEFAULT_PLAYER_NAME,
        selectedTopic: { main: null, sub: null },
        
        resetQuizState() {
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.selectedQuestions = [];
            this.answeredQuestions = [];
        },
        
        setPlayerName(name) {
            this.playerName = name.trim() || constants.DEFAULT_PLAYER_NAME;
        },

        setSelectedTopic(main, sub = null) {
            this.selectedTopic = { main, sub };
            elements.startButton.disabled = !(this.selectedTopic.main && this.selectedTopic.sub);
        }
    };

    /**
     * UI MANAGER OBJECT
     * Handles all interactions with the DOM.
     */
    const ui = {
        showScreen(screenToShow) {
            const screens = [elements.mainMenu, elements.quizContainer, elements.resultsContainer];
            screens.forEach(screen => screen.classList.add(constants.CSS_HIDDEN));
            screenToShow.classList.remove(constants.CSS_HIDDEN);
        },

        updateProgressBar() {
            const total = gameState.selectedQuestions.length;
            const current = gameState.currentQuestionIndex;
            const progress = total > 0 ? ((current) / total) * 100 : 0;
            elements.progressBar.style.width = `${progress}%`;
            if (current < total) {
                elements.progressText.textContent = `Question ${current + 1} of ${total}`;
            }
        },

        displayQuestion(questionData) {
            elements.questionEl.textContent = questionData.question;
            elements.optionsContainer.innerHTML = "";
            elements.explanationEl.innerHTML = "&nbsp;";
            elements.nextButton.style.display = "none";
            elements.hintButton.style.display = "block";
            
            const shuffledOptions = [...questionData.options].sort(() => Math.random() - 0.5);
            const fragment = document.createDocumentFragment();
            shuffledOptions.forEach(optionText => {
                const button = document.createElement("button");
                button.textContent = optionText;
                button.classList.add("option");
                fragment.appendChild(button);
            });
            elements.optionsContainer.appendChild(fragment);
        },

        showAnswerFeedback(isCorrect, selectedButton, currentQuestion) {
            elements.hintButton.style.display = "none";
            Array.from(elements.optionsContainer.children).forEach(button => {
                button.disabled = true;
                if (button.textContent === currentQuestion.answer) {
                    button.classList.add(constants.CSS_CORRECT);
                }
            });

            if (!isCorrect) {
                selectedButton.classList.add(constants.CSS_INCORRECT);
            }
            elements.explanationEl.textContent = currentQuestion.explanation;
            elements.nextButton.style.display = "block";
        },

        getFormattedSubtopicName(main, sub) {
            switch (main.toLowerCase()) {
                case 'music':
                    return `${sub}s Hits`;
                case 'history':
                    return `${sub} History`;
                case 'sports':
                    return `${sub} Trivia`;
                default:
                    return sub.charAt(0).toUpperCase() + sub.slice(1);
            }
        },

        populateTopics() {
            elements.mainTopicsContainer.innerHTML = "";
            const topics = [...Object.keys(gameState.allQuestions), "Mixed"];
            
            topics.forEach(topic => {
                const button = document.createElement("button");
                button.textContent = topic.charAt(0).toUpperCase() + topic.slice(1);
                button.dataset.topic = topic;
                elements.mainTopicsContainer.appendChild(button);
            });
        },

        populateSubTopics(mainTopic) {
            elements.subTopicsContainer.innerHTML = "";
            const subtopics = Object.keys(gameState.allQuestions[mainTopic]);
            elements.subTopicsTitle.textContent = `Select a ${mainTopic} Category:`;

            subtopics.forEach(sub => {
                const button = document.createElement("button");
                button.textContent = this.getFormattedSubtopicName(mainTopic, sub);
                button.dataset.subTopic = sub;
                elements.subTopicsContainer.appendChild(button);
            });
            
            elements.mainTopics.classList.add(constants.CSS_HIDDEN);
            elements.subTopics.classList.remove(constants.CSS_HIDDEN);
        },

        showMainTopics() {
            elements.mainTopics.classList.remove(constants.CSS_HIDDEN);
            elements.subTopics.classList.add(constants.CSS_HIDDEN);
            this.clearSelections(elements.mainTopicsContainer);
            this.clearSelections(elements.subTopicsContainer);
        },

        clearSelections(container) {
            container.querySelectorAll('button').forEach(btn => btn.classList.remove(constants.CSS_SELECTED));
        },

        startTransition(callback) {
            elements.gameContainer.classList.add(constants.CSS_FADE_OUT);
            setTimeout(() => {
                callback();
                elements.gameContainer.classList.remove(constants.CSS_FADE_OUT);
                elements.gameContainer.classList.add(constants.CSS_FADE_IN);
                setTimeout(() => elements.gameContainer.classList.remove(constants.CSS_FADE_IN), 500);
            }, 500);
        }
    };

    /**
     * AUDIO MANAGER OBJECT
     * Manages all audio playback.
     */
    const audioManager = {
        playSound(soundElement) {
            if (!soundElement) return;
            if (soundElement.id !== 'bg-music' && !elements.bgMusic.paused) {
                const originalVolume = elements.bgMusic.volume;
                elements.bgMusic.volume = originalVolume * 0.2;
                soundElement.onended = () => { elements.bgMusic.volume = originalVolume; };
            }
            soundElement.currentTime = 0;
            soundElement.play().catch(e => console.error(`Audio Error: ${e.message}`));
        },
        setVolume(volume) {
            elements.allAudio.forEach(audio => audio.volume = volume);
        },
        toggleMute() {
            const isMuted = !elements.allAudio[0].muted;
            elements.allAudio.forEach(audio => audio.muted = isMuted);
            elements.muteButton.textContent = isMuted ? "Unmute" : "Mute";
        }
    };

    /**
     * LEADERBOARD OBJECT
     * Handles localStorage for scores.
     */
    const leaderboard = {
        get() {
            return JSON.parse(localStorage.getItem(constants.LEADERBOARD_KEY)) || [];
        },
        save(data) {
            localStorage.setItem(constants.LEADERBOARD_KEY, JSON.stringify(data));
        },
        addScore(name, score) {
            const currentLeaderboard = this.get();
            const date = new Date().toLocaleDateString();
            currentLeaderboard.push({ name, score, date });
            this.save(currentLeaderboard);
            this.updateDisplay();
        },
        reset() {
            if (confirm("Are you sure you want to reset the leaderboard?")) {
                localStorage.removeItem(constants.LEADERBOARD_KEY);
                this.updateDisplay();
            }
        },
        updateDisplay() {
            const topScores = this.get().sort((a, b) => b.score - a.score).slice(0, 10);
            elements.leaderboardList.innerHTML = "";
            if (topScores.length === 0) {
                elements.leaderboardList.innerHTML = '<li>No scores yet! Play a game.</li>';
                return;
            }
            topScores.forEach((entry, index) => {
                const li = document.createElement("li");
                li.textContent = `${index + 1}. ${entry.name} - ${entry.score} (${entry.date})`;
                elements.leaderboardList.appendChild(li);
            });
        }
    };
    
    /**
     * GAME LOGIC OBJECT
     * The main controller that ties everything together.
     */
    const gameLogic = {
        async init() {
            try {
                const response = await fetch('questions.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                gameState.allQuestions = await response.json();
                ui.populateTopics();
            } catch (error) {
                console.error("Failed to load questions:", error);
                alert("Failed to load quiz questions. Please check the console for details and try again later.");
            }
            this.setupEventListeners();
            leaderboard.updateDisplay();
            // Theme is now set by the script in the <head> of the HTML
        },
        
        startGame() {
            gameState.resetQuizState();
            const total = parseInt(elements.questionCountInput.value, 10);
            const { main, sub } = gameState.selectedTopic;

            let questionPool = [];
            let title = "";

            if (main === 'Mixed') {
                questionPool = Object.values(gameState.allQuestions).flatMap(subCats => Object.values(subCats).flat());
                title = "Mixed Topics";
            } else {
                questionPool = gameState.allQuestions[main]?.[sub] || [];
                title = ui.getFormattedSubtopicName(main, sub);
            }

            if (questionPool.length < total) {
                alert(`Sorry, there are only ${questionPool.length} questions available for this topic.`);
                return;
            }

            gameState.selectedQuestions = [...questionPool].sort(() => 0.5 - Math.random()).slice(0, total);
            
            ui.startTransition(() => {
                elements.gameTitleQuiz.textContent = title;
                ui.showScreen(elements.quizContainer);
                this.loadNextQuestion();
            });
        },

        loadNextQuestion() {
            if (gameState.currentQuestionIndex >= gameState.selectedQuestions.length) {
                this.showResults();
                return;
            }
            ui.updateProgressBar();
            const currentQuestion = gameState.selectedQuestions[gameState.currentQuestionIndex];
            ui.displayQuestion(currentQuestion);
        },

        checkAnswer(selectedButton) {
            const currentQuestion = gameState.selectedQuestions[gameState.currentQuestionIndex];
            const isCorrect = selectedButton.textContent === currentQuestion.answer;

            if (isCorrect) {
                gameState.score++;
                audioManager.playSound(elements.correctSound);
            } else {
                audioManager.playSound(elements.wrongSound);
            }
            
            ui.showAnswerFeedback(isCorrect, selectedButton, currentQuestion);

            gameState.answeredQuestions.push({
                question: currentQuestion.question,
                correct: isCorrect,
                correctAnswer: currentQuestion.answer
            });
        },

        showResults() {
            elements.bgMusic.pause();
            audioManager.playSound(elements.finishSound);
            ui.startTransition(() => {
                ui.updateProgressBar();
                ui.showScreen(elements.resultsContainer);
                elements.scoreText.textContent = `You scored ${gameState.score} out of ${gameState.selectedQuestions.length}!`;
                leaderboard.addScore(gameState.playerName, gameState.score);
                
                elements.summaryList.innerHTML = "";
                gameState.answeredQuestions.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = `${item.question} - You were ${item.correct ? 'Correct' : `Incorrect (Answer: ${item.correctAnswer})`}`;
                    li.classList.add(item.correct ? constants.CSS_CORRECT : constants.CSS_INCORRECT);
                    elements.summaryList.appendChild(li);
                });
            });
        },

        restartGame() {
            ui.startTransition(() => {
                elements.bgMusic.pause();
                elements.bgMusic.currentTime = 0;
                elements.musicToggleButton.textContent = "Play Music";
                ui.showScreen(elements.mainMenu);
                ui.showMainTopics();
                gameState.setSelectedTopic(null, null);
                leaderboard.updateDisplay();
            });
        },

        setupEventListeners() {
            elements.playerNameInput.addEventListener("input", (e) => gameState.setPlayerName(e.target.value));

            elements.mainTopicsContainer.addEventListener('click', (e) => {
                if (e.target.tagName !== 'BUTTON') return;
                const mainTopic = e.target.dataset.topic;
                ui.clearSelections(elements.mainTopicsContainer);
                e.target.classList.add(constants.CSS_SELECTED);

                if (mainTopic === 'Mixed') {
                    gameState.setSelectedTopic('Mixed', 'Mixed');
                    ui.showMainTopics();
                } else {
                    const subtopics = Object.keys(gameState.allQuestions[mainTopic]);
                    if (subtopics.length === 1 && subtopics[0] === 'main') {
                         gameState.setSelectedTopic(mainTopic, 'main');
                    } else {
                        gameState.setSelectedTopic(mainTopic, null);
                        ui.populateSubTopics(mainTopic);
                    }
                }
            });

            elements.subTopicsContainer.addEventListener('click', (e) => {
                if (e.target.tagName !== 'BUTTON') return;
                const subTopic = e.target.dataset.subTopic;
                ui.clearSelections(elements.subTopicsContainer);
                e.target.classList.add(constants.CSS_SELECTED);
                gameState.setSelectedTopic(gameState.selectedTopic.main, subTopic);
            });

            elements.backToMainTopicsBtn.addEventListener('click', () => {
                gameState.setSelectedTopic(null, null);
                ui.showMainTopics();
            });

            elements.startButton.addEventListener("click", () => {
                audioManager.playSound(elements.startSound);
                this.startGame();
            });
            elements.nextButton.addEventListener("click", () => {
                ui.startTransition(() => {
                    gameState.currentQuestionIndex++;
                    this.loadNextQuestion();
                });
            });
            elements.endButton.addEventListener("click", () => this.showResults());
            elements.restartButton.addEventListener("click", () => this.restartGame());
            elements.hintButton.addEventListener("click", () => {
                const currentQuestion = gameState.selectedQuestions[gameState.currentQuestionIndex];
                elements.explanationEl.textContent = `Hint: ${currentQuestion.hint}`;
            });
            elements.optionsContainer.addEventListener('click', (e) => {
                if(e.target.classList.contains('option') && !e.target.disabled) {
                    this.checkAnswer(e.target);
                }
            });

            elements.resetLeaderboardButton.addEventListener("click", () => leaderboard.reset());
            elements.viewAllScoresButton.addEventListener('click', () => window.open('leaderboard.html', '_blank'));
            
            elements.themeSelector.addEventListener('click', (e) => {
                if (e.target.matches('button[data-theme]')) {
                    const theme = e.target.dataset.theme;
                    // IMPROVEMENT: Set data-theme attribute on the root element (<html>)
                    document.documentElement.setAttribute('data-theme', theme);
                    localStorage.setItem(constants.THEME_KEY, theme);
                }
            });
            elements.volumeSlider.addEventListener('input', (e) => audioManager.setVolume(e.target.value));
            elements.musicToggleButton.addEventListener('click', () => {
                if (elements.bgMusic.paused) {
                    audioManager.playSound(elements.bgMusic);
                    elements.musicToggleButton.textContent = "Pause Music";
                } else {
                    elements.bgMusic.pause();
                    elements.musicToggleButton.textContent = "Play Music";
                }
            });
            elements.muteButton.addEventListener('click', () => audioManager.toggleMute());
            elements.fullscreenButton.addEventListener("click", () => {
                if (!document.fullscreenElement) {
                    elements.gameContainer.requestFullscreen().catch(err => console.error(err));
                } else {
                    document.exitFullscreen();
                }
            });
        }
    };
    
    gameLogic.init();
});
