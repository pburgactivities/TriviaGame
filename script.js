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
        },
        {
            question: "The Battle of Waterloo in 1815 marked the final defeat of which famous leader?",
            options: ["Napoleon Bonaparte", "Julius Caesar", "Alexander the Great", "Genghis Khan"],
            answer: "Napoleon Bonaparte",
            explanation: "The Battle of Waterloo, fought near Waterloo in present-day Belgium, was Napoleon Bonaparte's final defeat.",
            hint: "He was the emperor of France."
        },
        {
            question: "The ancient city of Machu Picchu was built by which civilization?",
            options: ["Aztec", "Maya", "Inca", "Roman"],
            answer: "Inca",
            explanation: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru.",
            hint: "This civilization flourished in the Andean region of South America."
        },
        {
            question: "What was the name of the ship the Pilgrims sailed to America in 1620?",
            options: ["The Pinta", "The Santa Maria", "The Mayflower", "The Endeavour"],
            answer: "The Mayflower",
            explanation: "The Mayflower was the English ship that transported the first English Puritans, known today as the Pilgrims, from Plymouth to the New World.",
            hint: "The ship's name is also a type of flower."
        },
        {
            question: "The construction of the Great Wall of China began under which dynasty?",
            options: ["Han", "Tang", "Qin", "Ming"],
            answer: "Qin",
            explanation: "The Great Wall's construction began in the 7th century BC, with significant work under the Qin Dynasty.",
            hint: "The first emperor's dynasty."
        },
        {
            question: "Which ancient civilization built the pyramids of Giza?",
            options: ["Roman", "Greek", "Egyptian", "Mesopotamian"],
            answer: "Egyptian",
            explanation: "The pyramids of Giza were built by the ancient Egyptians to serve as tombs for their pharaohs.",
            hint: "This civilization is known for its pharaohs and hieroglyphs."
        },
        {
            question: "In which city was Julius Caesar assassinated?",
            options: ["Athens", "Rome", "Alexandria", "Carthage"],
            answer: "Rome",
            explanation: "Julius Caesar was assassinated by a group of senators in Rome in 44 BC.",
            hint: "The capital of the Roman Empire."
        },
        {
            question: "What was the name of the ship that brought the first enslaved Africans to America in 1619?",
            options: ["The White Lion", "The Mayflower", "The Santa Maria", "The Discovery"],
            answer: "The White Lion",
            explanation: "The White Lion was an English privateer that arrived in Virginia in 1619, carrying enslaved Africans.",
            hint: "The ship's name is a type of animal."
        },
        {
            question: "The Renaissance began in which country?",
            options: ["France", "England", "Germany", "Italy"],
            answer: "Italy",
            explanation: "The Renaissance began in Florence, Italy, in the 14th century.",
            hint: "This country is shaped like a boot."
        },
        {
            question: "The Treaty of Versailles officially ended which war?",
            options: ["The Napoleonic Wars", "The Crimean War", "World War I", "The Seven Years' War"],
            answer: "World War I",
            explanation: "The Treaty of Versailles was the peace treaty that officially ended World War I between Germany and the Allied Powers.",
            hint: "This war began in 1914."
        },
        {
            question: "Who was the leader of the Soviet Union at the time of the Cuban Missile Crisis?",
            options: ["Joseph Stalin", "Mikhail Gorbachev", "Vladimir Lenin", "Nikita Khrushchev"],
            answer: "Nikita Khrushchev",
            explanation: "Nikita Khrushchev was the Premier of the Soviet Union during the intense 1962 standoff with the U.S.",
            hint: "His name starts with an 'N'."
        },
        {
            question: "What major historical event occurred on July 4, 1776?",
            options: ["The end of the Civil War", "The signing of the Constitution", "The United States declared its independence", "The Boston Tea Party"],
            answer: "The United States declared its independence",
            explanation: "The Declaration of Independence was approved by the Continental Congress on July 4, 1776, marking the founding of the United States.",
            hint: "It is a U.S. national holiday."
        },
        {
            question: "The city of Constantinople was renamed to what modern-day city?",
            options: ["Athens", "Istanbul", "Ankara", "Damascus"],
            answer: "Istanbul",
            explanation: "Constantinople was the capital of the Byzantine Empire before it was conquered and renamed Istanbul in 1453.",
            hint: "It's the largest city in Turkey."
        },
        {
            question: "Who was the first emperor of the Roman Empire?",
            options: ["Julius Caesar", "Nero", "Augustus", "Constantine"],
            answer: "Augustus",
            explanation: "Augustus was the founder of the Roman Empire and its first emperor.",
            hint: "He was the adopted son of Julius Caesar."
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
        },
        {
            question: "What is the name of the fictional African country in the movie *Black Panther*?",
            options: ["Zamunda", "Wakanda", "Genovia", "Narnia"],
            answer: "Wakanda",
            explanation: "Wakanda is the technologically advanced, fictional country in the Marvel Cinematic Universe where the Black Panther is from.",
            hint: "It is ruled by a king named T'Challa."
        },
        {
            question: "In the film *The Wizard of Oz*, what does the Scarecrow want from the wizard?",
            options: ["A brain", "A heart", "Courage", "A home"],
            answer: "A brain",
            explanation: "The Scarecrow believes he needs a brain to be intelligent, but he proves his intelligence throughout the film.",
            hint: "He is made of straw."
        },
        {
            question: "Which famous director is known for his signature 'dolly zoom' and suspenseful thrillers like *Psycho* and *The Birds*?",
            options: ["Steven Spielberg", "Martin Scorsese", "Alfred Hitchcock", "Quentin Tarantino"],
            answer: "Alfred Hitchcock",
            explanation: "Alfred Hitchcock, often called the 'Master of Suspense,' is famous for his innovative camera techniques and psychological thrillers.",
            hint: "He made a cameo in almost all of his films."
        },
        {
            question: "In the movie *Forrest Gump*, what candy did Forrest's mom always say life was like?",
            options: ["A lollipop", "A chocolate bar", "A box of chocolates", "A candy cane"],
            answer: "A box of chocolates",
            explanation: "Forrest Gump's famous quote is, 'My momma always said, 'Life was like a box of chocolates. You never know what you're gonna get'.",
            hint: "It's a type of sweet treat."
        },
        {
            question: "What is the name of the fictional superhero team in the Marvel movie *The Avengers*?",
            options: ["The Justice League", "The X-Men", "The Avengers", "The Fantastic Four"],
            answer: "The Avengers",
            explanation: "The Avengers is a team of superheroes including Iron Man, Captain America, and Thor.",
            hint: "The movie title is the name of the team."
        },
        {
            question: "Which animated film features a character named Simba?",
            options: ["Aladdin", "The Lion King", "Finding Nemo", "Shrek"],
            answer: "The Lion King",
            explanation: "Simba is the protagonist of Disney's classic animated film *The Lion King*.",
            hint: "The title is the name of an animal."
        },
        {
            question: "What famous actor starred as the main character in the 1999 movie *The Matrix*?",
            options: ["Tom Hanks", "Leonardo DiCaprio", "Keanu Reeves", "Will Smith"],
            answer: "Keanu Reeves",
            explanation: "Keanu Reeves played Neo in the hit science-fiction film *The Matrix*.",
            hint: "He is also famous for playing John Wick."
        },
        {
            question: "The line 'May the Force be with you' is from which movie franchise?",
            options: ["Star Trek", "The Lord of the Rings", "Star Wars", "Harry Potter"],
            answer: "Star Wars",
            explanation: "This is one of the most famous quotes from the *Star Wars* franchise, spoken by many characters.",
            hint: "It involves spaceships and a galaxy far, far away."
        },
        {
            question: "In the movie *Titanic*, what item of jewelry did the character Rose wear?",
            options: ["A diamond ring", "A pearl necklace", "The Heart of the Ocean necklace", "A silver locket"],
            answer: "The Heart of the Ocean necklace",
            explanation: "The Heart of the Ocean is a large, blue diamond necklace that plays a central role in the film's plot.",
            hint: "It is a famous necklace from the movie."
        },
        {
            question: "Who directed the classic movie *E.T. the Extra-Terrestrial*?",
            options: ["George Lucas", "Alfred Hitchcock", "Steven Spielberg", "Stanley Kubrick"],
            answer: "Steven Spielberg",
            explanation: "Steven Spielberg directed the beloved 1982 science fiction film about a boy and an alien.",
            hint: "He also directed *Jaws* and *Jurassic Park*."
        },
        {
            question: "What is the name of the main villain in *The Dark Knight*?",
            options: ["Bane", "Ra's al Ghul", "The Joker", "Riddler"],
            answer: "The Joker",
            explanation: "The Joker, famously portrayed by Heath Ledger, is the main antagonist in *The Dark Knight*.",
            hint: "He wears makeup and is Batman's archenemy."
        },
        {
            question: "What is the name of the clown in Stephen King's novel *It*?",
            options: ["Clowny", "Binky", "Giggles", "Pennywise"],
            answer: "Pennywise",
            explanation: "Pennywise is the terrifying, shape-shifting clown from Stephen King's horror novel *It*.",
            hint: "He is also known as It."
        },
        {
            question: "What is the name of the toy cowboy in the movie *Toy Story*?",
            options: ["Buzz", "Woody", "Rex", "Slinky"],
            answer: "Woody",
            explanation: "Woody is the beloved pull-string cowboy doll and main character in the *Toy Story* franchise.",
            hint: "He is Andy's favorite toy."
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
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Liver", "Brain", "Skin"],
            answer: "Skin",
            explanation: "The skin is the largest organ of the human body, covering an area of about 2 square meters.",
            hint: "It is an external organ."
        },
        {
            question: "What is the process of a liquid turning into a gas called?",
            options: ["Condensation", "Freezing", "Evaporation", "Sublimation"],
            answer: "Evaporation",
            explanation: "Evaporation is the process by which a substance in a liquid state changes to a gaseous state due to an increase in temperature or pressure.",
            hint: "This is what happens to puddles after it rains."
        },
        {
            question: "What is the common name for the element NaCl?",
            options: ["Baking Soda", "Vinegar", "Table Salt", "Sugar"],
            answer: "Table Salt",
            explanation: "NaCl stands for Sodium Chloride, which is the chemical name for table salt.",
            hint: "It is often used to season food."
        },
        {
            question: "What planet is closest to the Sun?",
            options: ["Venus", "Earth", "Mercury", "Mars"],
            answer: "Mercury",
            explanation: "Mercury is the planet closest to the Sun and also the smallest planet in our solar system.",
            hint: "Its name is also a liquid metal."
        },
        {
            question: "What is the chemical formula for water?",
            options: ["CO2", "O2", "H2O", "NaCl"],
            answer: "H2O",
            explanation: "Water is a chemical compound with the chemical formula H2O, meaning it has two hydrogen atoms and one oxygen atom.",
            hint: "It's what we drink to survive."
        },
        {
            question: "The largest bone in the human body is the femur, located in which part of the body?",
            options: ["Arm", "Thigh", "Skull", "Foot"],
            answer: "Thigh",
            explanation: "The femur, or thigh bone, is the longest and strongest bone in the human body.",
            hint: "It is located in the upper part of the leg."
        },
        {
            question: "What type of rock is formed from molten lava?",
            options: ["Sedimentary", "Metamorphic", "Igneous", "Composite"],
            answer: "Igneous",
            explanation: "Igneous rocks are formed from the cooling and solidification of molten rock (magma or lava).",
            hint: "The word comes from the Latin word for fire."
        },
        {
            question: "What is the name of the process by which a star's core fuses hydrogen into helium?",
            options: ["Nuclear Fission", "Photosynthesis", "Nuclear Fusion", "Chemical Reaction"],
            answer: "Nuclear Fusion",
            explanation: "Nuclear fusion is the process that powers stars, including our Sun, by combining atomic nuclei to release immense energy.",
            hint: "It's the opposite of nuclear fission."
        },
        {
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
            answer: "Nitrogen",
            explanation: "Nitrogen makes up about 78% of the Earth's atmosphere by volume.",
            hint: "It's the first gas in the periodic table."
        },
        {
            question: "What is the name of the liquid that flows in our veins?",
            options: ["Plasma", "Lymph", "Blood", "Water"],
            answer: "Blood",
            explanation: "Blood is a bodily fluid that delivers necessary substances, such as nutrients and oxygen, to the cells.",
            hint: "It's what gives us life."
        },
        {
            question: "What is the name of the largest volcano on Earth?",
            options: ["Mount Fuji", "Mount Vesuvius", "Mauna Loa", "Mount Etna"],
            answer: "Mauna Loa",
            explanation: "Mauna Loa is one of five volcanoes that form the Island of Hawaii and is the world's largest active volcano.",
            hint: "It is located in Hawaii."
        },
        {
            question: "What is the smallest unit of matter?",
            options: ["Molecule", "Atom", "Cell", "Proton"],
            answer: "Atom",
            explanation: "An atom is the smallest unit of ordinary matter that forms a chemical element.",
            hint: "It's what everything is made of."
        },
        {
            question: "What is the name of the galaxy that contains our solar system?",
            options: ["Andromeda", "Triangulum Galaxy", "The Milky Way", "The Black Eye Galaxy"],
            answer: "The Milky Way",
            explanation: "Our solar system is located within the Milky Way galaxy, a spiral galaxy.",
            hint: "It's also a candy bar."
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
        },
        {
            question: "Which planet is known for its beautiful rings?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            answer: "Saturn",
            explanation: "Saturn's ring system is one of the most recognizable features in the solar system, composed of ice particles, rocky debris, and dust.",
            hint: "It is the sixth planet from the Sun."
        },
        {
            question: "How many continents are there in the world?",
            options: ["5", "6", "7", "8"],
            answer: "7",
            explanation: "The seven continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
            hint: "The number is more than 5, but less than 8."
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            answer: "Canberra",
            explanation: "While Sydney and Melbourne are more famous, Canberra is the capital city of Australia.",
            hint: "It's located between Sydney and Melbourne."
        },
        {
            question: "What is the capital of Canada?",
            options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            answer: "Ottawa",
            explanation: "Ottawa is the capital of Canada.",
            hint: "It is located in the province of Ontario."
        },
        {
            question: "What is the largest country in the world by land area?",
            options: ["Canada", "China", "Russia", "United States"],
            answer: "Russia",
            explanation: "Russia is the largest country by total area, spanning 11 time zones.",
            hint: "It spans two continents."
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yuan", "Won", "Yen", "Rupee"],
            answer: "Yen",
            explanation: "The Japanese Yen is the official currency of Japan.",
            hint: "It is one of the world's most traded currencies."
        },
        {
            question: "How many days are in a leap year?",
            options: ["364", "365", "366", "367"],
            answer: "366",
            explanation: "A leap year occurs every four years and has 366 days instead of the usual 365.",
            hint: "The extra day is in February."
        },
        {
            question: "What is the longest river in the world?",
            options: ["The Amazon River", "The Nile River", "The Yangtze River", "The Mississippi River"],
            answer: "The Nile River",
            explanation: "The Nile River is widely considered to be the longest river in the world, flowing through northeastern Africa.",
            hint: "It flows through Egypt."
        },
        {
            question: "What is the name of the largest desert in the world?",
            options: ["Sahara Desert", "Gobi Desert", "Antarctic Polar Desert", "Arabian Desert"],
            answer: "The Antarctic Polar Desert",
            explanation: "The Antarctic Polar Desert is the largest desert in the world, covering an area of 14 million square kilometers.",
            hint: "It's on a continent that is very cold."
        },
        {
            question: "What is the name of the highest mountain in Africa?",
            options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Mount Stanley"],
            answer: "Mount Kilimanjaro",
            explanation: "Mount Kilimanjaro is a dormant volcano in Tanzania and is the highest mountain in Africa.",
            hint: "The name starts with 'K'."
        },
        {
            question: "What is the primary language spoken in Brazil?",
            options: ["Spanish", "English", "Portuguese", "French"],
            answer: "Portuguese",
            explanation: "Brazil is the only Portuguese-speaking country in South America.",
            hint: "It's a romantic language."
        },
        {
            question: "What is the name of the deepest point in the world's oceans?",
            options: ["The Puerto Rico Trench", "The Challenger Deep", "The Mariana Trench", "The Kermadec Trench"],
            answer: "The Mariana Trench",
            explanation: "The Mariana Trench, located in the western Pacific Ocean, is the deepest part of the world's oceans.",
            hint: "It is located in the Pacific Ocean."
        }
    ],
    sports: [
        {
            question: "In what sport would you perform a 'slam dunk'?",
            options: ["Football", "Baseball", "Basketball", "Hockey"],
            answer: "Basketball",
            explanation: "A slam dunk is a type of basketball shot where a player forces the ball downward through the basket with one or both hands.",
            hint: "The game is played with five players on each team."
        },
        {
            question: "Which country has won the most FIFA World Cups?",
            options: ["Germany", "Brazil", "Italy", "Argentina"],
            answer: "Brazil",
            explanation: "Brazil has won the World Cup five times, more than any other nation.",
            hint: "They are famous for their yellow and green jerseys."
        },
        {
            question: "The term 'hat-trick' originated in which sport?",
            options: ["Soccer", "Cricket", "Hockey", "Baseball"],
            answer: "Cricket",
            explanation: "The term originated in cricket when a bowler took three wickets in three consecutive deliveries.",
            hint: "It's a game played with a bat and a wicket."
        },
        {
            question: "How many players are on a standard baseball team's field at one time?",
            options: ["7", "8", "9", "10"],
            answer: "9",
            explanation: "A baseball team has nine players on the field, including the pitcher, catcher, and various fielders.",
            hint: "It's the same number as the number of innings in a professional game."
        },
        {
            question: "What is the maximum number of clubs a golfer is allowed in their bag during a round?",
            options: ["10", "12", "14", "16"],
            answer: "14",
            explanation: "The Rules of Golf state that a player may not start a round with more than 14 clubs in their bag.",
            hint: "It's an even number between 12 and 16."
        },
        {
            question: "The Olympic Games are held every how many years?",
            options: ["2", "3", "4", "5"],
            answer: "4",
            explanation: "The modern Summer and Winter Olympic Games are held every four years, with the Summer and Winter Games alternating every two years.",
            hint: "This is the same number of years in a presidential term."
        },
        {
            question: "Who is considered 'The Greatest' boxer of all time?",
            options: ["Mike Tyson", "Muhammad Ali", "Joe Frazier", "Rocky Marciano"],
            answer: "Muhammad Ali",
            explanation: "Known for his captivating personality and incredible skill, Muhammad Ali is widely regarded as the greatest heavyweight boxer in history.",
            hint: "His real name was Cassius Clay."
        },
        {
            question: "What is the most watched sport in the world?",
            options: ["American Football", "Basketball", "Cricket", "Soccer"],
            answer: "Soccer",
            explanation: "With an estimated 3.5 billion fans worldwide, soccer (or football) is the most popular and watched sport.",
            hint: "This is the most popular sport in Europe and South America."
        },
        {
            question: "In what year did Michael Jordan retire for the final time?",
            options: ["2001", "2003", "2005", "2007"],
            answer: "2003",
            explanation: "Michael Jordan retired from basketball for the final time after the 2002-2003 NBA season.",
            hint: "It was at the end of his career with the Washington Wizards."
        },
        {
            question: "What is the longest race in the Olympic Games?",
            options: ["10,000-meter run", "Marathon", "50-kilometer race walk", "Decathlon"],
            answer: "50-kilometer race walk",
            explanation: "While the marathon is the most famous, the 50-kilometer race walk is technically a longer distance event in the Olympics.",
            hint: "It's a type of track and field event."
        },
        {
            question: "What sport is played at Wimbledon?",
            options: ["Badminton", "Table Tennis", "Tennis", "Volleyball"],
            answer: "Tennis",
            explanation: "Wimbledon is one of the four major tennis tournaments in the world, held annually in London.",
            hint: "It's played on a grass court."
        },
        {
            question: "How many points is a touchdown worth in American football?",
            options: ["5", "6", "7", "8"],
            answer: "6",
            explanation: "A touchdown is worth six points in American football, with the opportunity to score more points on the conversion.",
            hint: "It's the main way to score in the game."
        },
        {
            question: "Which sport is nicknamed 'The King of Sports'?",
            options: ["Basketball", "Soccer", "Tennis", "Boxing"],
            answer: "Soccer",
            explanation: "Soccer, or football, is often called 'The King of Sports' due to its immense global popularity.",
            hint: "It's the most popular sport in the world."
        },
        {
            question: "What is the name of the famous bicycle race that takes place in France?",
            options: ["Giro d'Italia", "Vuelta a España", "Tour de France", "Tour of Britain"],
            answer: "The Tour de France",
            explanation: "The Tour de France is an annual multi-stage bicycle race primarily held in France.",
            hint: "The name means 'Tour of France' in French."
        },
        {
            question: "What country is the sport of judo from?",
            options: ["China", "Japan", "South Korea", "Brazil"],
            answer: "Japan",
            explanation: "Judo is a modern martial art and combat sport that originated in Japan.",
            hint: "It is an Olympic sport."
        },
        {
            question: "How many strikes does a bowler need to get a perfect game?",
            options: ["10", "11", "12", "13"],
            answer: "12",
            explanation: "A perfect game in bowling consists of 12 consecutive strikes.",
            hint: "It's two more than a dozen."
        },
        {
            question: "In what sport would a 'birdie' and an 'eagle' be used?",
            options: ["Tennis", "Badminton", "Golf", "Hockey"],
            answer: "Golf",
            explanation: "In golf, a birdie is one stroke under par, and an eagle is two strokes under par.",
            hint: "It's played on a course with 18 holes."
        },
        {
            question: "What is the name of the person who controls a horse-drawn chariot?",
            options: ["A jockey", "A charioteer", "A knight", "A cowboy"],
            answer: "A charioteer",
            explanation: "A charioteer is the driver of a chariot.",
            hint: "The word comes from the word 'chariot'."
        },
        {
            question: "In baseball, how many balls are required for a batter to get a walk?",
            options: ["3", "4", "5", "6"],
            answer: "4",
            explanation: "A batter is awarded a walk and gets to advance to first base after the pitcher throws four balls.",
            hint: "It's the same number as the number of strikes in a perfect game."
        },
        {
            question: "The Boston Marathon is run in which month?",
            options: ["March", "April", "May", "June"],
            answer: "April",
            explanation: "The Boston Marathon is an annual marathon held in Boston, Massachusetts, on the third Monday of April.",
            hint: "The month starts with 'A'."
        }
    ],
    music: [
        {
            question: "The Beatles came from which English city?",
            options: ["London", "Manchester", "Liverpool", "Birmingham"],
            answer: "Liverpool",
            explanation: "The Beatles were a legendary rock band formed in Liverpool in 1960.",
            hint: "It's a port city in England."
        },
        {
            question: "Who was known as the 'King of Rock and Roll'?",
            options: ["Elvis Presley", "Chuck Berry", "Little Richard", "Johnny Cash"],
            answer: "Elvis Presley",
            explanation: "Elvis Presley's unique style and influence earned him the title of the 'King of Rock and Roll.'",
            hint: "He was famous for his hit song 'Jailhouse Rock'."
        },
        {
            question: "'What's Going On' is a famous album by which artist?",
            options: ["Otis Redding", "Marvin Gaye", "Smokey Robinson", "Sam Cooke"],
            answer: "Marvin Gaye",
            explanation: "Released in 1971, this album is considered a landmark of soul music.",
            hint: "This song is about a famous singer."
        },
        {
            question: "Which band performed at the famous Woodstock music festival in 1969?",
            options: ["The Rolling Stones", "The Who", "Led Zeppelin", "The Doors"],
            answer: "The Who",
            explanation: "The Who were one of the headlining acts at the Woodstock festival, giving a legendary performance.",
            hint: "The band's name is also a question."
        },
        {
            question: "What was the name of Elvis Presley's home in Memphis, Tennessee?",
            options: ["Graceland", "Neverland", "Sun Studio", "Beale Street"],
            answer: "Graceland",
            explanation: "Graceland, a mansion on a large estate, was the home of Elvis Presley and is now a major tourist attraction.",
            hint: "It's a famous mansion in Memphis."
        },
        {
            question: "The Supremes were a successful group on which record label?",
            options: ["Motown Records", "Atlantic Records", "Sun Records", "Chess Records"],
            answer: "Motown Records",
            explanation: "The Supremes, led by Diana Ross, were one of the most successful groups to emerge from the Motown label.",
            hint: "This record label was founded in Detroit, Michigan."
        },
        {
            question: "What was the first-ever rock and roll song to reach number one on the Billboard charts?",
            options: ["Rock Around the Clock", "Jailhouse Rock", "Hound Dog", "Tutti Frutti"],
            answer: "Rock Around the Clock",
            explanation: "Bill Haley & His Comets' song 'Rock Around the Clock' was the first rock and roll song to top the charts in 1955.",
            hint: "The movie *Blackboard Jungle* helped popularize it."
        },
        {
            question: "Which artist is known for the hit song 'Johnny B. Goode'?",
            options: ["Elvis Presley", "Chuck Berry", "Little Richard", "Jerry Lee Lewis"],
            answer: "Chuck Berry",
            explanation: "Chuck Berry's 'Johnny B. Goode,' released in 1958, is a classic of rock and roll and is widely considered one of the greatest songs of all time.",
            hint: "He is known as the 'Father of Rock and Roll'."
        },
        {
            question: "The band Led Zeppelin was formed in which year?",
            options: ["1965", "1968", "1970", "1972"],
            answer: "1968",
            explanation: "Led Zeppelin formed in London in 1968 from the ashes of the band The Yardbirds.",
            hint: "The band was formed in the late 60s."
        },
        {
            question: "What was the name of The Beatles' final album?",
            options: ["Sgt. Pepper's Lonely Hearts Club Band", "Revolver", "Let It Be", "Abbey Road"],
            answer: "Let It Be",
            explanation: "*Let It Be* was the final album released by the band, even though it was mostly recorded before *Abbey Road*.",
            hint: "The title is also the name of a famous Beatles' song."
        },
        {
            question: "Who sang the hit song 'Hound Dog'?",
            options: ["Little Richard", "Chuck Berry", "Elvis Presley", "Fats Domino"],
            answer: "Elvis Presley",
            explanation: "Elvis Presley's version of 'Hound Dog' was a massive hit in 1956.",
            hint: "The same artist who sang 'Jailhouse Rock'."
        },
        {
            question: "The Rolling Stones' hit song '(I Can't Get No) Satisfaction' was released in what year?",
            options: ["1963", "1965", "1967", "1969"],
            answer: "1965",
            explanation: "This iconic song was a huge hit for The Rolling Stones in 1965.",
            hint: "The year before the Summer of Love."
        },
        {
            question: "What was the name of the record label founded by Berry Gordy Jr. in Detroit?",
            options: ["Atlantic Records", "Stax Records", "Motown", "Sun Records"],
            answer: "Motown",
            explanation: "Motown Records was founded in Detroit in 1959 and became a major force in popular music.",
            hint: "The label is named after its city of origin."
        },
        {
            question: "Who was a famous musician known for his piano-playing and hits like 'Great Balls of Fire'?",
            options: ["Little Richard", "Jerry Lee Lewis", "Fats Domino", "Chuck Berry"],
            answer: "Jerry Lee Lewis",
            explanation: "Jerry Lee Lewis was a pioneer of rock and roll and a great piano player.",
            hint: "His nickname was 'The Killer'."
        },
        {
            question: "Which band released the album *Pet Sounds* in 1966?",
            options: ["The Beatles", "The Rolling Stones", "The Beach Boys", "The Kinks"],
            answer: "The Beach Boys",
            explanation: "*Pet Sounds* is widely considered one of the most influential albums of all time and a masterpiece of rock music.",
            hint: "This band is known for their surf rock sound."
        },
        {
            question: "What famous song begins with the lyrics, 'Well, shake it up, baby, now, twist and shout'?",
            options: ["'Twist and Shout'", "'Tutti Frutti'", "'Jailhouse Rock'", "'Hound Dog'"],
            answer: "'Twist and Shout'",
            explanation: "'Twist and Shout' was made famous by The Beatles and is a classic rock and roll song.",
            hint: "The title is in the first line of the song."
        },
        {
            question: "What was the name of the singer who died in a plane crash in 1959, an event known as 'The Day the Music Died'?",
            options: ["Buddy Holly", "Elvis Presley", "Jerry Lee Lewis", "Chuck Berry"],
            answer: "Buddy Holly",
            explanation: "Buddy Holly died in a plane crash with Ritchie Valens and J.P. 'The Big Bopper' Richardson on February 3, 1959.",
            hint: "The song 'American Pie' refers to him."
        },
        {
            question: "Which folk singer sang the song 'Blowin' in the Wind'?",
            options: ["Bob Dylan", "Joan Baez", "Woody Guthrie", "Pete Seeger"],
            answer: "Bob Dylan",
            explanation: "Bob Dylan's 'Blowin' in the Wind' became an anthem for the civil rights and anti-war movements.",
            hint: "He is a famous singer-songwriter and poet."
        },
        {
            question: "What was The Beatles' first U.S. number one hit?",
            options: ["'Please Please Me'", "'Love Me Do'", "'I Want to Hold Your Hand'", "'She Loves You'"],
            answer: "'I Want to Hold Your Hand'",
            explanation: "'I Want to Hold Your Hand' was The Beatles' first U.S. number one hit, released in 1964.",
            hint: "It was a huge hit for the band in 1964."
        },
        {
            question: "Who sang the hit song 'What's New Pussycat?'",
            options: ["Elvis Presley", "Frank Sinatra", "Tom Jones", "Perry Como"],
            answer: "Tom Jones",
            explanation: "Tom Jones's song 'What's New Pussycat?' was a massive hit in 1965.",
            hint: "He is a Welsh singer."
        }
    ],
    literature: [
        {
            question: "Who wrote the play *Romeo and Juliet*?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            answer: "William Shakespeare",
            explanation: "*Romeo and Juliet* is a tragic play written by William Shakespeare in the late 16th century.",
            hint: "He is also known as 'The Bard of Avon'."
        },
        {
            question: "In *The Lord of the Rings*, what is the name of the wizard who guides the hobbits?",
            options: ["Gandalf", "Dumbledore", "Merlin", "Saruman"],
            answer: "Gandalf",
            explanation: "Gandalf is a central character in J.R.R. Tolkien's epic fantasy series *The Lord of the Rings*.",
            hint: "His name starts with 'G'."
        },
        {
            question: "The novel *Pride and Prejudice* was written by which author?",
            options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Mary Shelley"],
            answer: "Jane Austen",
            explanation: "Jane Austen's novel, published in 1813, is a timeless classic of English literature.",
            hint: "She is known for her romantic novels."
        },
        {
            question: "What is the name of the boy who lives in a jungle with wolves in *The Jungle Book*?",
            options: ["Mowgli", "Tarzan", "Shere Khan", "Baloo"],
            answer: "Mowgli",
            explanation: "Mowgli is the fictional character and protagonist of Rudyard Kipling's book *The Jungle Book*.",
            hint: "He's the main character of the story."
        },
        {
            question: "The classic novel *Moby Dick* is about a sailor's quest to hunt what creature?",
            options: ["A giant squid", "A white whale", "A sea serpent", "A dragon"],
            answer: "A white whale",
            explanation: "Herman Melville's novel *Moby Dick* is a tale of obsession and revenge as Captain Ahab hunts the great white whale.",
            hint: "The creature's name is the title of the book."
        },
        {
            question: "Who is the author of *Frankenstein*?",
            options: ["Bram Stoker", "Edgar Allan Poe", "H.P. Lovecraft", "Mary Shelley"],
            answer: "Mary Shelley",
            explanation: "Mary Shelley wrote *Frankenstein; or, The Modern Prometheus* at the age of 20, a foundational work of the horror genre.",
            hint: "She was married to the famous poet Percy Bysshe Shelley."
        },
        {
            question: "The fictional detective Sherlock Holmes was created by which author?",
            options: ["Arthur Conan Doyle", "Agatha Christie", "Raymond Chandler", "Dashiell Hammett"],
            answer: "Arthur Conan Doyle",
            explanation: "Sir Arthur Conan Doyle created the brilliant detective Sherlock Holmes and his companion Dr. Watson.",
            hint: "He was a Scottish writer."
        },
        {
            question: "What is the primary setting of Harper Lee's novel *To Kill a Mockingbird*?",
            options: ["Maycomb, Alabama", "St. Louis, Missouri", "New Orleans, Louisiana", "Atlanta, Georgia"],
            answer: "Maycomb, Alabama",
            explanation: "The story is set in the fictional town of Maycomb, Alabama, during the Great Depression.",
            hint: "The state name is the same as a famous state in the southern U.S."
        },
        {
            question: "The dystopian novel *1984* was written by which author?",
            options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Franz Kafka"],
            answer: "George Orwell",
            explanation: "George Orwell's *1984* is a classic warning against totalitarianism and mass surveillance.",
            hint: "The main character's name is Winston."
        },
        {
            question: "What is the name of the main character in Lewis Carroll's *Alice's Adventures in Wonderland*?",
            options: ["Alice", "Wendy", "Dorothy", "Lucy"],
            answer: "Alice",
            explanation: "The story follows a young girl named Alice who falls down a rabbit hole into a fantasy world.",
            hint: "The character's name is in the title of the book."
        },
        {
            question: "Who wrote the *Harry Potter* series?",
            options: ["Stephen King", "J.K. Rowling", "Roald Dahl", "C.S. Lewis"],
            answer: "J.K. Rowling",
            explanation: "J.K. Rowling is the author of the internationally successful *Harry Potter* series.",
            hint: "The author's initials are J.K."
        },
        {
            question: "In *The Adventures of Tom Sawyer*, what is the name of Tom's best friend?",
            options: ["Sid Sawyer", "Huck Finn", "Joe Harper", "Injun Joe"],
            answer: "Huck Finn",
            explanation: "Tom Sawyer's best friend is Huckleberry Finn, who later gets his own book.",
            hint: "He is the main character in a sequel."
        },
        {
            question: "The classic novel *1984* was written by which author?",
            options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Franz Kafka"],
            answer: "George Orwell",
            explanation: "George Orwell's *1984* is a classic warning against totalitarianism and mass surveillance.",
            hint: "The author's last name is the same as a famous farm."
        },
        {
            question: "What is the name of the main character in the novel *The Great Gatsby*?",
            options: ["Nick Carraway", "Tom Buchanan", "Jay Gatsby", "Meyer Wolfsheim"],
            answer: "Jay Gatsby",
            explanation: "Jay Gatsby is the mysterious millionaire who hosts lavish parties in F. Scott Fitzgerald's novel.",
            hint: "His name is in the title."
        },
        {
            question: "Which author wrote the novel *A Tale of Two Cities*, which begins with the famous line, 'It was the best of times, it was the worst of times...'?",
            options: ["Jane Austen", "Charles Dickens", "Leo Tolstoy", "Victor Hugo"],
            answer: "Charles Dickens",
            explanation: "Charles Dickens' novel is set in London and Paris before and during the French Revolution.",
            hint: "He also wrote *Oliver Twist*."
        },
        {
            question: "What is the name of the city where the story *The Odyssey* takes place?",
            options: ["Troy", "Athens", "Sparta", "Ithaca"],
            answer: "Ithaca",
            explanation: "The epic poem tells the story of the hero Odysseus's journey home to his kingdom of Ithaca.",
            hint: "It is an island."
        },
        {
            question: "Who wrote the children's classic *Where the Wild Things Are*?",
            options: ["Dr. Seuss", "Maurice Sendak", "Eric Carle", "Shel Silverstein"],
            answer: "Maurice Sendak",
            explanation: "Maurice Sendak wrote and illustrated the beloved children's book.",
            hint: "He is a famous author and illustrator."
        },
        {
            question: "The play *Hamlet* is set in which country?",
            options: ["England", "Norway", "Scotland", "Denmark"],
            answer: "Denmark",
            explanation: "The play is set in the kingdom of Denmark, where Hamlet is the prince.",
            hint: "The country's capital is Copenhagen."
        },
        {
            question: "What is the name of the famous detective in the novel *And Then There Were None*?",
            options: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "There is no detective."],
            answer: "There is no detective.",
            explanation: "Agatha Christie's novel is unique because there is no detective. The characters have to solve the mystery themselves.",
            hint: "The answer is a surprise."
        },
        {
            question: "What is the name of the cat in the book *Alice's Adventures in Wonderland*?",
            options: ["The Mad Hatter", "The Queen of Hearts", "The Cheshire Cat", "The White Rabbit"],
            answer: "The Cheshire Cat",
            explanation: "The Cheshire Cat is a famous character known for his mischievous grin.",
            hint: "He is a talking cat."
        }
    ],
    food_drink: [
        {
            question: "What is the main ingredient in the Italian dish 'gnocchi'?",
            options: ["Flour", "Potatoes", "Rice", "Pasta"],
            answer: "Potatoes",
            explanation: "Gnocchi are a variety of Italian dumplings traditionally made with boiled potatoes, flour, and eggs.",
            hint: "It's a common root vegetable."
        },
        {
            question: "Where did the pizza Margherita originate?",
            options: ["Rome", "Venice", "Naples", "Florence"],
            answer: "Naples",
            explanation: "The pizza Margherita is said to have been created in Naples in 1889 for Queen Margherita of Savoy.",
            hint: "This city is famous for its delicious pizza."
        },
        {
            question: "What is the primary ingredient in the Japanese dish 'tempura'?",
            options: ["Beef", "Fish", "Seafood and vegetables", "Chicken"],
            answer: "Seafood and vegetables",
            explanation: "Tempura is a Japanese dish of seafood and vegetables that have been battered and deep-fried.",
            hint: "It is a kind of deep-fried food."
        },
        {
            question: "What country is the birthplace of the hamburger?",
            options: ["United States", "Germany", "England", "France"],
            answer: "Germany",
            explanation: "The hamburger is believed to have originated in Hamburg, Germany, as a type of ground beef patty.",
            hint: "The city's name is in the name of the food."
        },
        {
            question: "What is the main ingredient in the cocktail 'mojito'?",
            options: ["Whiskey", "Vodka", "Rum", "Tequila"],
            answer: "Rum",
            explanation: "A mojito is a traditional Cuban cocktail consisting of rum, sugar, lime juice, soda water, and mint.",
            hint: "This spirit is made from sugarcane."
        },
        {
            question: "What is the national dish of Spain?",
            options: ["Paella", "Tapas", "Gazpacho", "Churros"],
            answer: "Paella",
            explanation: "Paella is a famous Spanish rice dish with a variety of ingredients, including seafood, meat, and vegetables.",
            hint: "It is a dish made with rice."
        },
        {
            question: "The spice saffron comes from which flower?",
            options: ["Saffron crocus", "Tulip", "Rose", "Lily"],
            answer: "Saffron crocus",
            explanation: "Saffron is a spice derived from the flower of the saffron crocus. It is one of the most expensive spices in the world.",
            hint: "The flower's name is in the name of the spice."
        },
        {
            question: "Which of the following is a type of Italian cheese?",
            options: ["Cheddar", "Feta", "Parmesan", "Gouda"],
            answer: "Parmesan",
            explanation: "Parmesan is a hard, granular cheese from Italy, widely used in pasta dishes.",
            hint: "It is often grated on pasta."
        },
        {
            question: "What type of meat is traditionally used in a 'pastrami on rye' sandwich?",
            options: ["Corned beef", "Smoked beef", "Roast beef", "Turkey"],
            answer: "Smoked beef",
            explanation: "Pastrami is a type of deli meat made from smoked beef.",
            hint: "This meat is often found in delis."
        },
        {
            question: "What is the common name for the fruit that is used to make guacamole?",
            options: ["Avocado", "Guava", "Mango", "Papaya"],
            answer: "Avocado",
            explanation: "Guacamole is a dish made from mashed avocados, a key ingredient.",
            hint: "It's a green fruit with a large seed in the center."
        },
        {
            question: "What type of pasta is shaped like small rice grains?",
            options: ["Fusilli", "Orzo", "Farfalle", "Rigatoni"],
            answer: "Orzo",
            explanation: "Orzo is a form of short-cut pasta, shaped like a large grain of rice.",
            hint: "The name sounds like 'oars' and 'dough'."
        },
        {
            question: "What is the main ingredient in the Greek dip 'tzatziki'?",
            options: ["Yogurt", "Sour Cream", "Hummus", "Feta Cheese"],
            answer: "Yogurt",
            explanation: "Tzatziki is a Greek sauce made from salted strained yogurt mixed with cucumbers, garlic, and herbs.",
            hint: "It's a dairy product."
        },
        {
            question: "The cocktail 'margarita' is traditionally made with which spirit?",
            options: ["Vodka", "Gin", "Tequila", "Rum"],
            answer: "Tequila",
            explanation: "A margarita is a cocktail consisting of tequila, triple sec, and lime juice.",
            hint: "It's a Mexican spirit."
        },
        {
            question: "What is the name of the dish made from raw fish that is popular in Japan?",
            options: ["Ramen", "Tempura", "Sushi", "Sashimi"],
            answer: "Sushi",
            explanation: "Sushi is a Japanese dish consisting of cooked vinegared rice combined with other ingredients, often raw fish or seafood.",
            hint: "It is often served with soy sauce and wasabi."
        },
        {
            question: "What is the primary ingredient in the Italian dish 'lasagna'?",
            options: ["Spaghetti", "Pasta sheets", "Rice", "Potatoes"],
            answer: "Pasta sheets",
            explanation: "Lasagna is a dish made with stacked layers of pasta sheets, alternating with fillings such as cheese and sauces.",
            hint: "It is a type of wide, flat noodle."
        },
        {
            question: "The spice cinnamon comes from the bark of what type of tree?",
            options: ["Oak", "Pine", "Maple", "Cinnamon"],
            answer: "Cinnamon",
            explanation: "Cinnamon is a spice obtained from the inner bark of a cinnamon tree.",
            hint: "The name of the tree is the same as the spice."
        },
        {
            question: "What is the main ingredient in the French dish 'coq au vin'?",
            options: ["Beef", "Pork", "Chicken", "Lamb"],
            answer: "Chicken",
            explanation: "Coq au vin is a French dish of chicken braised with wine, mushrooms, and garlic.",
            hint: "The name translates to 'rooster in wine'."
        },
        {
            question: "What is the name of the popular Italian coffee drink made with espresso and steamed milk?",
            options: ["Latte", "Espresso", "Americano", "Cappuccino"],
            answer: "Cappuccino",
            explanation: "A cappuccino is an espresso-based coffee drink with steamed milk foam.",
            hint: "The name is often shortened to 'capp'."
        },
        {
            question: "What is the name of the vegetable that is the main ingredient in 'sauerkraut'?",
            options: ["Carrot", "Cabbage", "Onion", "Potato"],
            answer: "Cabbage",
            explanation: "Sauerkraut is a dish of finely cut raw cabbage that has been fermented by various lactic acid bacteria.",
            hint: "It's a leafy green vegetable."
        },
        {
            question: "What type of flour is used to make traditional pizza dough?",
            options: ["Almond flour", "Wheat flour", "Rice flour", "Cornmeal"],
            answer: "Wheat flour",
            explanation: "Traditional pizza dough is made from wheat flour, water, salt, and yeast.",
            hint: "It's the most common type of flour."
        }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let totalQuestions = 0;
let answeredQuestions = [];
let playerName = ""; // Start with empty string to force name entry

const mainMenu = document.getElementById("main-menu");
const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results-container");
const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const endButton = document.getElementById("end-button");
const explanationEl = document.getElementById("explanation");
const scoreText = document.getElementById("score-text");
const topicButtons = document.querySelectorAll(".topic-buttons button");
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
const fullscreenButton = document.getElementById("fullscreen-button"); // Get the new button
const gameContainer = document.getElementById("game-container");

const bgMusic = document.getElementById("bg-music");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const startSound = document.getElementById("start-sound");
const finishSound = document.getElementById("finish-sound");

let selectedTopic = null;

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
        li.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;
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

// --- Game Readiness Check ---
function checkGameReadiness() {
    const nameEntered = playerNameInput.value.trim().length > 0;
    const topicSelected = selectedTopic !== null;
    startButton.disabled = !(nameEntered && topicSelected);
}

// --- Event Listeners ---
topicButtons.forEach(button => {
    button.addEventListener("click", () => {
        topicButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedTopic = button.dataset.topic;
        checkGameReadiness(); // Call the new function here
        
        // Update max questions based on selected topic
        if (selectedTopic === "mixed") {
            const totalQuestions = Object.values(allQuestions).flat().length;
            questionCountInput.max = totalQuestions > 50 ? 50 : totalQuestions;
        } else {
            questionCountInput.max = allQuestions[selectedTopic].length > 50 ? 50 : allQuestions[selectedTopic].length;
        }
    });
});

playerNameInput.addEventListener("input", (e) => {
    playerName = e.target.value.trim();
    checkGameReadiness(); // Call the new function here
});

startButton.addEventListener("click", () => {
    if (startButton.disabled) return; // Add this check to prevent disabled button from being clicked
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
        selectedTopic = null;
        checkGameReadiness(); // Call this function on restart
        gameTitle.textContent = "Fun Trivia Quiz";
        updateLeaderboardDisplay();
    });
});

resetLeaderboardButton.addEventListener("click", resetLeaderboard);
fullscreenButton.addEventListener("click", toggleFullscreen); // New event listener

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
            button.classList.add("correct-permanent"); // Add this
        }
    });

    const isCorrect = selectedOption === correctOption;
    if (isCorrect) {
        score++;
        correctSound.play().catch(e => console.log("Correct sound failed:", e));
        selectedButton.classList.add("correct-permanent"); // Add this
    } else {
        selectedButton.classList.add("incorrect-permanent"); // Add this
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

// --- Fullscreen Toggling ---
function toggleFullscreen() {
    // Target the game-container for fullscreen
    const elem = document.getElementById("game-container");

    if (!document.fullscreenElement) {
        // Request fullscreen on the game-container
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        }
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
}

// Initial setup
checkGameReadiness(); // Call this on page load to set initial button state
updateLeaderboardDisplay();
