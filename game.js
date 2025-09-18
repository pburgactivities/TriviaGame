// Variable to hold the current questions data
let questions = {};

// UI Element References
const mainMenu = document.getElementById('main-menu');
const musicSubcategories = document.getElementById('music-subcategories');
const backToTopicsBtn = document.getElementById('backToTopicsBtn');
const topicButtons = document.querySelectorAll('.topic-button');
const highScoresList = document.getElementById('highScoresList');
const resetLeaderboardBtn = document.getElementById('resetLeaderboardBtn');
const startGameBtn = document.getElementById('startGameBtn');
const numQuestionsInput = document.getElementById('numQuestions');

// Game State Variables
let currentTopic = '';
let currentNumQuestions = 5;

// Function to fetch questions (placeholder)
// In a real application, this would fetch the questions.json file
// and populate the 'questions' variable.
async function fetchQuestions() {
    try {
        const response = await fetch('questions.json');
        questions = await response.json();
    } catch (error) {
        console.error('Failed to load questions:', error);
    }
}

// Function to start the game (placeholder)
function startGame() {
    // This function will be called when the user clicks 'START GAME'
    // It should navigate to the quiz screen, load questions, etc.
    console.log(`Starting game with topic: ${currentTopic} and ${currentNumQuestions} questions.`);
    // Add your game-start logic here.
}

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

        if (button.classList.contains('has-subcategories')) {
            // If the topic has subcategories, show the subcategory menu
            showSubcategoryMenu(`${topic}-subcategories`);
        } else {
            // For topics without subcategories, update the selected topic
            // and prepare for the game start.
            console.log(`Topic selected: ${currentTopic}`);
            // You could visually highlight the selected button here
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
    highScoresList.innerHTML = ''; // Clear the current list
    highScores.sort((a, b) => b.score - a.score); // Sort by score, descending
    
    // Display only the top 10 scores
    highScores.slice(0, 10).forEach((scoreEntry, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${scoreEntry.name} - ${scoreEntry.score}`;
        highScoresList.appendChild(li);
    });
}

// Function to reset the leaderboard
function resetLeaderboard() {
    // This is the core fix for your issue.
    // It removes the 'highScores' key from localStorage.
    localStorage.removeItem('highScores');
    
    // Then, call the load function to update the UI,
    // which will now show an empty list.
    loadHighScores();
    alert('Leaderboard has been reset!');
}

// Event Listener for the "Reset Leaderboard" button
resetLeaderboardBtn.addEventListener('click', resetLeaderboard);

// Initial call to load scores when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadHighScores();
});
