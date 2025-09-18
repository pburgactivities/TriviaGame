document.addEventListener('DOMContentLoaded', () => {
    /**
     * ELEMENTS OBJECT
     * Centralizes all DOM element queries into a single object for easy access and management.
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
    // Create a convenient array of all audio elements for batch operations
    elements.allAudio = [elements.bgMusic, elements.correctSound, elements.wrongSound, elements.startSound, elements.finishSound];

    /**
     * GAME STATE OBJECT
     * Manages all the data and state for the quiz, like scores, questions, and player info.
     * This keeps the global namespace clean.
     */
    const gameState = {
        allQuestions: {},
        currentQuestionIndex: 0,
        score: 0,
        selectedQuestions: [],
        answeredQuestions: [],
        playerName: "Player",
        selectedTopic: { main: null, sub: null },
        
        resetQuizState() {
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.selectedQuestions = [];
            this.answeredQuestions = [];
        },
        
        setPlayerName(name) {
            this.playerName = name.trim() || "Player";
        },

        setSelectedTopic(main, sub = null) {
            this.selectedTopic = { main, sub };
            elements.startButton.disabled = !(this.selectedTopic.main && this.selectedTopic.sub);
        }
    };

    /**
     * UI MANAGER OBJECT
     * Handles all interactions with the DOM, such as showing/hiding screens and updating content.
     * This separates display logic from game logic.
     */
    const ui = {
        showScreen(screenToShow) {
            const screens = [elements.mainMenu, elements.quizContainer, elements.resultsContainer];
            screens.forEach(screen => screen.classList.add('hidden'));
            screenToShow.classList.remove('hidden');
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
            elements.explanationEl.innerHTML = "&nbsp;"; // Use a non-breaking space to maintain height
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
                    button.classList.add("correct");
                }
            });

            if (!isCorrect) {
                selectedButton.classList.add("incorrect");
            }
            elements.explanationEl.textContent = currentQuestion.explanation;
            elements.nextButton.style.display = "block";
        },

        populateTopics() {
            elements.mainTopicsContainer.innerHTML = "";
            const topics = Object.keys(gameState.allQuestions);
            topics.push("Mixed");
            
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
                button.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
                button.dataset.subTopic = sub;
                elements.subTopicsContainer.appendChild(button);
            });
            
            elements.mainTopics.classList.add('hidden');
            elements.subTopics.classList.remove('hidden');
        },

        showMainTopics() {
            elements.mainTopics.classList.remove('hidden');
            elements.subTopics.classList.add('hidden');
            this.clearSelections(elements.mainTopicsContainer);
            this.clearSelections(elements.subTopicsContainer);
        },

        clearSelections(container) {
            container.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
        },

        startTransition(callback) {
            elements.gameContainer.classList.add("fade-out");
            setTimeout(() => {
                callback();
                elements.gameContainer.classList.remove("fade-out");
                elements.gameContainer.classList.add("fade-in");
                setTimeout(() => elements.gameContainer.classList.remove("fade-in"), 500);
            }, 500);
        }
    };

    /**
     * AUDIO MANAGER OBJECT
     * Manages all audio playback, volume, and muting.
     */
    const audioManager = {
        playSound(soundElement) {
            if (!soundElement) return;
            // Duck the background music volume for sound effects
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
            const isMuted = elements.allAudio[0].muted;
            elements.allAudio.forEach(audio => audio.muted = !isMuted);
            elements.muteButton.textContent = !isMuted ? "Unmute" : "Mute";
        }
    };

    /**
     * LEADERBOARD OBJECT
     * Handles all logic for saving and retrieving scores from localStorage.
     */
    const leaderboard = {
        get() {
            return JSON.parse(localStorage.getItem('trivia_leaderboard')) || [];
        },
        save(data) {
            localStorage.setItem('trivia_leaderboard', JSON.stringify(data));
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
                localStorage.removeItem('trivia_leaderboard');
                this.updateDisplay();
            }
        },
        updateDisplay() {
            const topScores = this.get().sort((a, b) => b.score - a.score).slice(0, 10);
            elements.leaderboardList.innerHTML = "";
            topScores.forEach((entry, index) => {
                const li = document.createElement("li");
                li.textContent = `${index + 1}. ${entry.name} - ${entry.score} (${entry.date})`;
                elements.leaderboardList.appendChild(li);
            });
        }
    };
    
    /**
     * GAME LOGIC OBJECT
     * The main controller that ties everything together. It initializes the game,
     * handles the game flow, and sets up all event listeners.
     */
    const gameLogic = {
        async init() {
            try {
                const response = await fetch('questions.json');
                gameState.allQuestions = await response.json();
                ui.populateTopics();
            } catch (error) {
                console.error("Failed to load questions:", error);
                alert("Failed to load quiz questions. Please try again later.");
            }
            this.setupEventListeners();
            leaderboard.updateDisplay();
            const savedTheme = localStorage.getItem('theme') || 'default';
            document.body.className = `theme-${savedTheme}`;
        },
        
        startGame() {
            gameState.resetQuizState();
            const total = parseInt(elements.questionCountInput.value, 10);
            let questionPool = [];
            let title = "";
            const { main, sub } = gameState.selectedTopic;

            if (main === 'Mixed') {
                questionPool = Object.values(gameState.allQuestions).flatMap(subCats => Object.values(subCats).flat());
                title = "Mixed Topics";
            } else {
                questionPool = gameState.allQuestions[main][sub];
                title = `${main.charAt(0).toUpperCase() + main.slice(1)}: ${sub.charAt(0).toUpperCase() + sub.slice(1)}`;
            }

            if (questionPool.length < total) {
                alert(`Sorry, there are only ${questionPool.length} questions available for this topic.`);
                return;
            }

            gameState.selectedQuestions = questionPool.sort(() => 0.5 - Math.random()).slice(0, total);
            
            ui.startTransition(() => {
                elements.gameTitleQuiz.textContent = title + " Trivia";
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
                ui.updateProgressBar(); // Final progress bar update to 100%
                ui.showScreen(elements.resultsContainer);
                elements.scoreText.textContent = `You scored ${gameState.score} out of ${gameState.selectedQuestions.length}!`;
                leaderboard.addScore(gameState.playerName, gameState.score);
                
                elements.summaryList.innerHTML = "";
                gameState.answeredQuestions.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = `${item.question} - You were ${item.correct ? 'Correct' : `Incorrect (Answer: ${item.correctAnswer})`}`;
                    li.classList.add(item.correct ? 'correct' : 'incorrect');
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
            // Player Name Input
            elements.playerNameInput.addEventListener("input", (e) => gameState.setPlayerName(e.target.value));

            // Topic Selection (using event delegation)
            elements.mainTopicsContainer.addEventListener('click', (e) => {
                if (e.target.tagName !== 'BUTTON') return;
                const mainTopic = e.target.dataset.topic;
                ui.clearSelections(elements.mainTopicsContainer);
                e.target.classList.add('selected');

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
                e.target.classList.add('selected');
                gameState.setSelectedTopic(gameState.selectedTopic.main, subTopic);
            });

            elements.backToMainTopicsBtn.addEventListener('click', () => {
                gameState.setSelectedTopic(null, null);
                ui.showMainTopics();
            });

            // Game Flow Buttons
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

            // Leaderboard Buttons
            elements.resetLeaderboardButton.addEventListener("click", () => leaderboard.reset());
            elements.viewAllScoresButton.addEventListener('click', () => window.open('leaderboard.html', '_blank'));
            
            // Settings Controls
            elements.themeSelector.addEventListener('click', (e) => {
                if (e.target.matches('button')) {
                    const theme = e.target.dataset.theme;
                    document.body.className = `theme-${theme}`;
                    localStorage.setItem('theme', theme);
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
    
    // Initialize the game
    gameLogic.init();
});
