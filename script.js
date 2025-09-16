const allQuestions = {
    history: [
        {
            question: "Who was the first man to walk on the moon?",
            options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
            answer: "Neil Armstrong",
            explanation: "Neil Armstrong became the first person to walk on the moon on July 20, 1969, during the Apollo 11 mission.",
            hint: "His famous quote was: 'That's one small step for man...'"
        },
        {
            question: "In what year did the Titanic sink?",
            options: ["1905", "1912", "1918", "1923"],
            answer: "1912",
            explanation: "The RMS Titanic sank on April 15, 1912, after hitting an iceberg during its maiden voyage.",
            hint: "The movie 'Titanic' was released in 1997."
        },
        {
            question: "The television show M*A*S*H was set during which war?",
            options: ["World War II", "The Korean War", "The Vietnam War", "The Cold War"],
            answer: "The Korean War",
            explanation: "The series M*A*S*H ran from 1972 to 1983 and was set during the Korean War.",
            hint: "This war took place in the early 1950s."
        },
        {
            question: "Who was the 16th U.S. President?",
            options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Theodore Roosevelt"],
            answer: "Abraham Lincoln",
            explanation: "Abraham Lincoln served as the 16th U.S. President, leading the country during the Civil War.",
            hint: "He is known for the Gettysburg Address."
        },
        {
            question: "In what year did the Berlin Wall fall?",
            options: ["1987", "1989", "1991", "1993"],
            answer: "1989",
            explanation: "The fall of the Berlin Wall in 1989 was a pivotal event that led to the reunification of Germany and the end of the Cold War.",
            hint: "This event happened a few years before the end of the Soviet Union."
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            options: ["Amelia Earhart", "Bessie Coleman", "Sally Ride", "Valentina Tereshkova"],
            answer: "Amelia Earhart",
            explanation: "Amelia Earhart accomplished this feat in 1932, becoming a global icon.",
            hint: "She disappeared while flying over the Pacific Ocean."
        },
        {
            question: "The Magna Carta was signed in which year?",
            options: ["1215", "1492", "1776", "1812"],
            answer: "1215",
            explanation: "The Magna Carta, a foundational document in English law, was signed by King John in 1215.",
            hint: "This document limited the power of the King."
        },
        {
            question: "What year did the United States enter World War II?",
            options: ["1939", "1940", "1941", "1942"],
            answer: "1941",
            explanation: "The U.S. entered World War II following the attack on Pearl Harbor on December 7, 1941.",
            hint: "It happened after the attack on Pearl Harbor."
        },
        {
            question: "Who was the British Prime Minister during most of World War II?",
            options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Franklin D. Roosevelt"],
            answer: "Winston Churchill",
            explanation: "Winston Churchill led the United Kingdom to victory against the Axis powers.",
            hint: "He was a great wartime leader and speaker."
        },
        {
            question: "What was the name of the ship Christopher Columbus sailed on his first voyage?",
            options: ["The Pinta", "The Nina", "The Santa Maria", "The Mayflower"],
            answer: "The Santa Maria",
            explanation: "The Santa Maria was the largest of the three ships on Columbus's first expedition to the New World in 1492.",
            hint: "It was his flagship and the largest of the three ships."
        }
    ],
    movies: [
        {
            question: "What iconic TV series featured Lucille Ball and Desi Arnaz?",
            options: ["Leave It to Beaver", "I Love Lucy", "The Honeymooners", "Gunsmoke"],
            answer: "I Love Lucy",
            explanation: "I Love Lucy is one of the most beloved and influential sitcoms in television history.",
            hint: "The lead actress was famous for her comedic timing and red hair."
        },
        {
            question: "Which actress starred as Scarlett O'Hara in 'Gone with the Wind'?",
            options: ["Bette Davis", "Vivien Leigh", "Audrey Hepburn", "Judy Garland"],
            answer: "Vivien Leigh",
            explanation: "Vivien Leigh won the Academy Award for Best Actress for her portrayal of Scarlett O'Hara in the 1939 film 'Gone with the Wind'.",
            hint: "She was an English actress."
        },
        {
            question: "The famous movie from 1959 that ended with the iconic line, 'Well, nobody's perfect' was?",
            options: ["Some Like It Hot", "Gentlemen Prefer Blondes", "The Seven Year Itch", "Bus Stop"],
            answer: "Some Like It Hot",
            explanation: "Directed by Billy Wilder, 'Some Like It Hot' is considered one of the greatest film comedies of all time.",
            hint: "It stars Marilyn Monroe, Jack Lemmon, and Tony Curtis."
        },
        {
            question: "In what year did Disneyland first open?",
            options: ["1955", "1960", "1965", "1970"],
            answer: "1955",
            explanation: "Disneyland opened its doors in Anaheim, California, on July 17, 1955.",
            hint: "This was the first Disney theme park."
        },
        {
            question: "Who played the title role in the 1964 film 'Mary Poppins'?",
            options: ["Julie Andrews", "Debbie Reynolds", "Doris Day", "Audrey Hepburn"],
            answer: "Julie Andrews",
            explanation: "Julie Andrews won the Academy Award for Best Actress for her performance as Mary Poppins.",
            hint: "She also starred in 'The Sound of Music'."
        },
        {
            question: "The iconic shower scene from which Alfred Hitchcock movie is one of the most famous in cinema history?",
            options: ["Psycho", "Vertigo", "The Birds", "Rear Window"],
            answer: "Psycho",
            explanation: "Hitchcock’s 'Psycho' (1960) changed the horror genre and features a famously shocking shower scene.",
            hint: "The main character's name is Norman Bates."
        },
        {
            question: "What was the name of the hobbit who took the One Ring to Mordor?",
            options: ["Frodo Baggins", "Samwise Gamgee", "Bilbo Baggins", "Pippin Took"],
            answer: "Frodo Baggins",
            explanation: "Frodo Baggins is the main protagonist of J.R.R. Tolkien's 'The Lord of the Rings'.",
            hint: "His friend is Samwise Gamgee."
        },
        {
            question: "Which 1970s movie musical features the hit songs 'Greased Lightnin'' and 'Summer Nights'?",
            options: ["The Sound of Music", "Grease", "Saturday Night Fever", "Fiddler on the Roof"],
            answer: "Grease",
            explanation: "'Grease', starring John Travolta and Olivia Newton-John, was a blockbuster musical in 1978.",
            hint: "The main characters are Danny and Sandy."
        },
        {
            question: "Who directed the classic film 'Casablanca'?",
            options: ["Frank Capra", "Orson Welles", "Michael Curtiz", "Billy Wilder"],
            answer: "Michael Curtiz",
            explanation: "Michael Curtiz directed 'Casablanca', a timeless romantic drama from 1942.",
            hint: "It starred Humphrey Bogart and Ingrid Bergman."
        },
        {
            question: "What is the name of the spaceship in 'Star Trek'?",
            options: ["Millennium Falcon", "Serenity", "Enterprise", "Nostromo"],
            answer: "Enterprise",
            explanation: "The U.S.S. Enterprise is the fictional starship in the 'Star Trek' television series and movies.",
            hint: "Its mission is to 'boldly go where no man has gone before'."
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Pb"],
            answer: "Au",
            explanation: "The chemical symbol for gold, Au, comes from the Latin word 'aurum'.",
            hint: "The element's name comes from the Latin word 'aurum'."
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars",
            explanation: "Mars is known as the Red Planet because of its reddish appearance, which is caused by iron oxide (rust) on its surface.",
            hint: "This planet has two small moons, Phobos and Deimos."
        },
        {
            question: "What is the fastest land animal?",
            options: ["Lion", "Cheetah", "Gazelle", "Leopard"],
            answer: "Cheetah",
            explanation: "The cheetah can run up to 70 miles per hour (112 km/h), making it the fastest land animal.",
            hint: "This animal is known for its spotted coat."
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
            explanation: "The Pacific Ocean is the largest and deepest of the world's five oceans. It covers approximately 30% of the Earth's surface.",
            hint: "It is bordered by Asia, Australia, and the Americas."
        },
        {
            question: "What is the process by which plants make their own food?",
            options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
            answer: "Photosynthesis",
            explanation: "Photosynthesis is the process used by plants to convert light energy into chemical energy, which fuels their growth.",
            hint: "This process requires sunlight."
        },
        {
            question: "What is the boiling point of water in Fahrenheit?",
            options: ["100°F", "200°F", "212°F", "250°F"],
            answer: "212°F",
            explanation: "Water boils at 212°F at standard atmospheric pressure.",
            hint: "It's the same temperature as a human's body temperature, plus 122 degrees."
        },
        {
            question: "What is the smallest planet in our solar system?",
            options: ["Mars", "Mercury", "Pluto", "Venus"],
            answer: "Mercury",
            explanation: "Mercury is the smallest planet and the closest to the Sun.",
            hint: "It's the closest planet to the Sun."
        },
        {
            question: "What is the main gas that makes up the air we breathe?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Nitrogen",
            explanation: "Nitrogen makes up about 78% of the Earth's atmosphere, while oxygen is about 21%.",
            hint: "This gas makes up the majority of Earth's atmosphere."
        },
        {
            question: "What type of energy is stored in a battery?",
            options: ["Mechanical energy", "Thermal energy", "Chemical energy", "Nuclear energy"],
            answer: "Chemical energy",
            explanation: "Batteries store chemical energy and convert it into electrical energy.",
            hint: "The energy is released through a chemical reaction."
        },
        {
            question: "What is the name of the force that keeps us on the ground?",
            options: ["Magnetism", "Gravity", "Friction", "Tension"],
            answer: "Gravity",
            explanation: "Gravity is the fundamental force of attraction that exists between any two masses.",
            hint: "It's what keeps planets in orbit."
        }
    ],
    general: [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
            explanation: "Paris is the capital and most populous city of France. It is also a global center for art, fashion, and culture.",
            hint: "It is known as the 'City of Love'."
        },
        {
            question: "What is the main ingredient in guacamole?",
            options: ["Tomato", "Onion", "Avocado", "Chili pepper"],
            answer: "Avocado",
            explanation: "Guacamole is an avocado-based dip, originating from Mexico.",
            hint: "It is a green fruit with a large pit in the middle."
        },
        {
            question: "What year did the Beatles make their U.S. debut on 'The Ed Sullivan Show'?",
            options: ["1962", "1964", "1966", "1968"],
            answer: "1964",
            explanation: "The Beatles' first appearance on 'The Ed Sullivan Show' on February 9, 1964, marked the start of the 'British Invasion' in America.",
            hint: "This was the start of the 'British Invasion' in the U.S."
        },
        {
            question: "Who was known as 'The King of Rock and Roll'?",
            options: ["Chuck Berry", "Buddy Holly", "Elvis Presley", "Little Richard"],
            answer: "Elvis Presley",
            explanation: "Elvis Presley became a cultural icon and is widely known by his nickname, 'The King'.",
            hint: "He was famous for his hit song 'Jailhouse Rock'."
        },
        {
            question: "What is the highest mountain in the world?",
            options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            answer: "Mount Everest",
            explanation: "Mount Everest, located in the Himalayas, is the Earth's highest mountain above sea level.",
            hint: "It is located in the Himalayas."
        },
        {
            question: "What is the most populous city in the world?",
            options: ["Tokyo", "Delhi", "Shanghai", "São Paulo"],
            answer: "Tokyo",
            explanation: "While other cities have a larger metropolitan area, Tokyo has the largest population within its city proper.",
            hint: "It is the capital of Japan."
        },
        {
            question: "What is the largest country in the world by area?",
            options: ["Canada", "China", "Russia", "United States"],
            answer: "Russia",
            explanation: "Russia is the largest country by total area, spanning 11 time zones.",
            hint: "It spans two continents."
        },
        {
            question: "Which of these is not a member of the G7?",
            options: ["Japan", "Germany", "China", "Italy"],
            answer: "China",
            explanation: "The G7 is a group of seven advanced economies: Canada, France, Germany, Italy, Japan, the United Kingdom, and the United States.",
            hint: "It is the second-largest economy in the world, but not a G7 member."
        },
        {
            question: "How many states are in the United States?",
            options: ["48", "49", "50", "51"],
            answer: "50",
            explanation: "There are 50 states and the District of Columbia in the United States.",
            hint: "The last two states to be added were Alaska and Hawaii."
        },
        {
            question: "What is the primary ingredient in hummus?",
            options: ["Lentils", "Chickpeas", "Black Beans", "Kidney Beans"],
            answer: "Chickpeas",
            explanation: "Hummus is a popular Middle Eastern dip made from cooked and mashed chickpeas blended with tahini, olive oil, lemon juice, and garlic.",
            hint: "This is a type of legume."
        }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let totalQuestions = 0;
let answeredQuestions = [];

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
const gameTitle = document.getElementById("game-title");
const progressBar = document.getElementById("progress-bar");
const hintButton = document.getElementById("hint-button");
const highScoreDisplay = document.getElementById("high-score-display");
const summaryList = document.getElementById("summary-list");

const bgMusic = document.getElementById("bg-music");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

let selectedTopic = null;

function updateHighScoreDisplay() {
    const highScore = localStorage.getItem('trivia_high_score') || 0;
    highScoreDisplay.textContent = `High Score: ${highScore}`;
}

updateHighScoreDisplay();

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
        gameTitle.textContent = "Mixed Topics";
    } else if (selectedTopic) {
        questionsPool = allQuestions[selectedTopic];
        gameTitle.textContent = selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1) + " Trivia";
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
    bgMusic.play().catch(e => console.log("Background music autoplay failed:", e));
    mainMenu.classList.add("hidden");
    resultsContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
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

hintButton.addEventListener("click", () => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    explanationEl.textContent = currentQuestion.hint;
});

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    bgMusic.pause();
    quizContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    scoreText.textContent = `You scored ${score} out of ${totalQuestions} questions!`;
    updateHighScores();
    generateSummary();
    updateProgressBar();
}

function updateHighScores() {
    const currentHighScore = localStorage.getItem('trivia_high_score') || 0;
    if (score > parseInt(currentHighScore)) {
        localStorage.setItem('trivia_high_score', score);
    }
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

nextButton.addEventListener("click", nextQuestion);
endButton.addEventListener("click", endGame);
restartButton.addEventListener("click", () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    mainMenu.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultsContainer.classList.add("hidden");
    questionCountInput.value = 5;
    topicButtons.forEach(btn => btn.classList.remove("selected"));
    selectedTopic = null;
    startButton.disabled = true;
    gameTitle.textContent = "Fun Trivia Quiz";
    updateHighScoreDisplay();
});

startButton.disabled = true;
