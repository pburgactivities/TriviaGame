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
        },
        {
            question: "In what year did the Berlin Wall fall?",
            options: ["1987", "1989", "1991", "1993"],
            answer: "1989",
            explanation: "The fall of the Berlin Wall in 1989 was a pivotal event that led to the reunification of Germany and the end of the Cold War."
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            options: ["Amelia Earhart", "Bessie Coleman", "Sally Ride", "Valentina Tereshkova"],
            answer: "Amelia Earhart",
            explanation: "Amelia Earhart accomplished this feat in 1932, becoming a global icon."
        },
        {
            question: "The Magna Carta was signed in which year?",
            options: ["1215", "1492", "1776", "1812"],
            answer: "1215",
            explanation: "The Magna Carta, a foundational document in English law, was signed by King John in 1215."
        },
        {
            question: "What year did the United States enter World War II?",
            options: ["1939", "1940", "1941", "1942"],
            answer: "1941",
            explanation: "The U.S. entered World War II following the attack on Pearl Harbor on December 7, 1941."
        },
        {
            question: "Who was the British Prime Minister during most of World War II?",
            options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Franklin D. Roosevelt"],
            answer: "Winston Churchill",
            explanation: "Winston Churchill led the United Kingdom to victory against the Axis powers."
        },
        {
            question: "What was the name of the ship Christopher Columbus sailed on his first voyage?",
            options: ["The Pinta", "The Nina", "The Santa Maria", "The Mayflower"],
            answer: "The Santa Maria",
            explanation: "The Santa Maria was the largest of the three ships on Columbus's first expedition to the New World in 1492."
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
        },
        {
            question: "Who played the title role in the 1964 film 'Mary Poppins'?",
            options: ["Julie Andrews", "Debbie Reynolds", "Doris Day", "Audrey Hepburn"],
            answer: "Julie Andrews",
            explanation: "Julie Andrews won the Academy Award for Best Actress for her performance as Mary Poppins."
        },
        {
            question: "The iconic shower scene from which Alfred Hitchcock movie is one of the most famous in cinema history?",
            options: ["Psycho", "Vertigo", "The Birds", "Rear Window"],
            answer: "Psycho",
            explanation: "Hitchcock’s 'Psycho' (1960) changed the horror genre and features a famously shocking shower scene."
        },
        {
            question: "What was the name of the hobbit who took the One Ring to Mordor?",
            options: ["Frodo Baggins", "Samwise Gamgee", "Bilbo Baggins", "Pippin Took"],
            answer: "Frodo Baggins",
            explanation: "Frodo Baggins is the main protagonist of J.R.R. Tolkien's 'The Lord of the Rings'."
        },
        {
            question: "Which 1970s movie musical features the hit songs 'Greased Lightnin'' and 'Summer Nights'?",
            options: ["The Sound of Music", "Grease", "Saturday Night Fever", "Fiddler on the Roof"],
            answer: "Grease",
            explanation: "'Grease', starring John Travolta and Olivia Newton-John, was a blockbuster musical in 1978."
        },
        {
            question: "Who directed the classic film 'Casablanca'?",
            options: ["Frank Capra", "Orson Welles", "Michael Curtiz", "Billy Wilder"],
            answer: "Michael Curtiz",
            explanation: "Michael Curtiz directed 'Casablanca', a timeless romantic drama from 1942."
        },
        {
            question: "What is the name of the spaceship in 'Star Trek'?",
            options: ["Millennium Falcon", "Serenity", "Enterprise", "Nostromo"],
            answer: "Enterprise",
            explanation: "The U.S.S. Enterprise is the fictional starship in the 'Star Trek' television series and movies."
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
        },
        {
            question: "What is the process by which plants make their own food?",
            options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
            answer: "Photosynthesis",
            explanation: "Photosynthesis is the process used by plants to convert light energy into chemical energy, which fuels their growth."
        },
        {
            question: "What is the boiling point of water in Fahrenheit?",
            options: ["100°F", "200°F", "212°F", "250°F"],
            answer: "212°F",
            explanation: "Water boils at 212°F at standard atmospheric pressure."
        },
        {
            question: "What is the smallest planet in our solar system?",
            options: ["Mars", "Mercury", "Pluto", "Venus"],
            answer: "Mercury",
            explanation: "Mercury is the smallest planet and the closest to the Sun."
        },
        {
            question: "What is the main gas that makes up the air we breathe?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Nitrogen",
            explanation: "Nitrogen makes up about 78% of the Earth's atmosphere, while oxygen is about 21%."
        },
        {
            question: "What type of energy is stored in a battery?",
            options: ["Mechanical energy", "Thermal energy", "Chemical energy", "Nuclear energy"],
            answer: "Chemical energy",
            explanation: "Batteries store chemical energy and convert it into electrical energy."
        },
        {
            question: "What is the name of the force that keeps us on the ground?",
            options: ["Magnetism", "Gravity", "Friction", "Tension"],
            answer: "Gravity",
            explanation: "Gravity is the fundamental force of attraction that exists between any two masses."
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
        },
        {
            question: "What is the highest mountain in the world?",
            options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            answer: "Mount Everest",
            explanation: "Mount Everest, located in the Himalayas, is the Earth's highest mountain above sea level."
        },
        {
            question: "What is the most populous city in the world?",
            options: ["Tokyo", "Delhi", "Shanghai", "São Paulo"],
            answer: "Tokyo",
            explanation: "While other cities have a larger metropolitan area, Tokyo has the largest population within its city proper."
        },
        {
            question: "What is the largest country in the world by area?",
            options: ["Canada", "China", "Russia", "United States"],
            answer: "Russia",
            explanation: "Russia is the largest country by total area, spanning 11 time zones."
        },
        {
            question: "Which of these is not a member of the G7?",
            options: ["Japan", "Germany", "China", "Italy"],
            answer: "China",
            explanation: "The G7 is a group of seven advanced economies: Canada, France, Germany, Italy, Japan, the United Kingdom, and the United States."
        },
        {
            question: "How many states are in the United States?",
            options: ["48", "49", "50", "51"],
            answer: "50",
            explanation: "There are 50 states and the District of Columbia in the United States."
        },
        {
            question: "What is the primary ingredient in hummus?",
            options: ["Lentils", "Chickpeas", "Black Beans", "Kidney Beans"],
            answer: "Chickpeas",
            explanation: "Hummus is a popular Middle Eastern dip made from cooked and mashed chickpeas blended with tahini, olive oil, lemon juice, and garlic."
        }
    ]
};

// ... (rest of the script.js code remains the same) ...
