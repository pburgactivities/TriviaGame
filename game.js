// Wrap all code in a DOMContentLoaded listener to ensure all elements are ready
document.addEventListener('DOMContentLoaded', () => {
    // UI Element References
    const mainMenu = document.getElementById('main-menu');
    const musicSubcategories = document.getElementById('music-subcategories');
    const backToTopicsBtn = document.getElementById('backToTopicsBtn');
    const topicButtons = document.querySelectorAll('.topic-button');
    const highScoresList = document.getElementById('highScoresList');
    const resetLeaderboardBtn = document.getElementById('resetLeaderboardBtn');
    const startGameBtn = document.getElementById('startGameBtn');
    const numQuestionsInput = document.getElementById('numQuestions');
    const themeButtons = document.querySelectorAll('.theme-button');
    
    // Game State Variables
    let currentTopic = '';
    let currentNumQuestions = 5;

    // --- Screen and Navigation Logic ---
    
    // Function to display the main menu and hide subcategories
    function showMainMenu() {
        mainMenu.classList.remove('hidden');
        musicSubcategories.classList.add('hidden');
    }

    // Function to show a specific subcategory menu
    function showSubcategoryMenu(menuId) {
        mainMenu.classList.add('hidden');
        musicSubcategories.classList.add('hidden'); // Hide all submenus first
        const subMenu = document.getElementById(menuId);
        if (subMenu) {
            subMenu.classList.remove('hidden');
        }
    }

    // Event Listeners for Topic Buttons
    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topic = button.dataset.topic;
            currentTopic = topic;
            
            // Highlight the selected button and remove highlight from others
            topicButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');

            if (button.classList.contains('has-subcategories')) {
                showSubcategoryMenu(`${topic}-subcategories`);
            } else {
                console.log(`Topic selected: ${currentTopic}`);
            }
        });
    });

    // Event Listener for the "Back to Topics" button
    backToTopicsBtn.addEventListener('click', showMainMenu);

    // Event Listener for the "Start Game" button
    startGameBtn.addEventListener('click', () => {
        currentNumQuestions = numQuestionsInput.value;
        if (currentTopic && currentNumQuestions > 0) {
            startGame();
        } else {
            alert('Please select a topic and enter a number of questions.');
        }
    });

    // --- Leaderboard and High Score Logic ---
    
    // Function to load and display high scores from localStorage
    function loadHighScores() {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScoresList.innerHTML = '';
        highScores.sort((a, b) => b.score - a.score);
        
        highScores.slice(0, 10).forEach((scoreEntry, index) => {
            const scoreDisplay = typeof scoreEntry.score === 'number' ? scoreEntry.score : 0;
            
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${scoreEntry.name} - ${scoreDisplay}`;
            highScoresList.appendChild(li);
        });
    }

    // Function to reset the leaderboard
    function resetLeaderboard() {
        localStorage.removeItem('highScores');
        loadHighScores();
        alert('Leaderboard has been reset!');
    }

    // Event Listener for the "Reset Leaderboard" button
    resetLeaderboardBtn.addEventListener('click', resetLeaderboard);
    
    // Initial call to load scores when the page loads
    loadHighScores();
    
    // --- Other UI Logic ---
    
    // Function to start the game (placeholder)
    function startGame() {
        console.log(`Starting game with topic: ${currentTopic} and ${currentNumQuestions} questions.`);
    }

    // Theme button functionality
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            console.log(`Theme selected: ${theme}`);
        });
    });
});
