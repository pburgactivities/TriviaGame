// Sound effects
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const startSound = document.getElementById('start-sound');
const finishSound = document.getElementById('finish-sound');
const bgMusic = document.getElementById('bg-music');

// HTML elements
const gameContainer = document.getElementById('game-container');
const mainMenu = document.getElementById('main-menu');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const leaderboardContainer = document.getElementById('leaderboard-container');

// Main Menu elements
const startButton = document.getElementById('start-button');
const fullscreenButton = document.getElementById('fullscreen-button');
const playerNameInput = document.getElementById('player-name');
const questionCountInput = document.getElementById('question-count');
const topicButtons = document.querySelectorAll('.topic-buttons button');

// Quiz elements
const gameTitle = document.getElementById('game-title');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const explanationElement = document.getElementById('explanation');
const nextButton = document.getElementById('next-button');
const hintButton = document.getElementById('hint-button');
const endButton = document.getElementById('end-button');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// Results elements
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restart-button');
const summaryList = document.getElementById('summary-list');

// Leaderboard elements
const leaderboardList = document.getElementById('leaderboard-list');
const resetLeaderboardButton = document.getElementById('reset-leaderboard-button');

let currentTopic = '';
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let questions = [];

// Quiz data (50 questions per topic)
const allQuestions = {
    history: [
        { question: "In what year did the Berlin Wall fall?", options: ["1989", "1991", "1985", "1990"], answer: "1989", explanation: "The Berlin Wall fell on November 9, 1989, a pivotal moment in the end of the Cold War." },
        { question: "Who was the first Emperor of Rome?", options: ["Julius Caesar", "Nero", "Augustus", "Caligula"], answer: "Augustus", explanation: "Augustus (born Octavian) was the first Roman Emperor, ruling from 27 BC to 14 AD." },
        { question: "The Renaissance originated in which country?", options: ["France", "England", "Italy", "Spain"], answer: "Italy", explanation: "The Renaissance began in Florence, Italy, in the 14th century, leading to a flourishing of art and culture." },
        { question: "What document was signed in 1215 in England?", options: ["The Magna Carta", "The Bill of Rights", "The Treaty of Versailles", "The Edict of Nantes"], answer: "The Magna Carta", explanation: "The Magna Carta was a charter of rights agreed to by King John of England at Runnymede." },
        { question: "Who was the primary author of the U.S. Declaration of Independence?", options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"], answer: "Thomas Jefferson", explanation: "Thomas Jefferson was the principal author of the Declaration of Independence." },
        { question: "In which year did World War I begin?", options: ["1914", "1918", "1910", "1920"], answer: "1914", explanation: "World War I began in 1914 following the assassination of Archduke Franz Ferdinand." },
        { question: "The ancient city of Troy was located in what modern-day country?", options: ["Greece", "Italy", "Turkey", "Egypt"], answer: "Turkey", explanation: "The ruins of the city of Troy are located in modern-day Turkey." },
        { question: "Who was the last Queen of France before the French Revolution?", options: ["Marie Antoinette", "Catherine the Great", "Elizabeth I", "Isabella I"], answer: "Marie Antoinette", explanation: "Marie Antoinette was the final Queen of France, executed during the French Revolution." },
        { question: "What was the name of the ship that brought the Pilgrims to America in 1620?", options: ["The Santa Maria", "The Mayflower", "The Endeavour", "The Pinta"], answer: "The Mayflower", explanation: "The Mayflower transported the Pilgrims from England to the New World in 1620." },
        { question: "Which famous general crossed the Alps with elephants to attack Rome?", options: ["Alexander the Great", "Hannibal", "Julius Caesar", "Napoleon Bonaparte"], answer: "Hannibal", explanation: "Hannibal Barca, a Carthaginian general, famously crossed the Alps to invade Italy." },
        { question: "The Cold War was primarily a conflict between which two superpowers?", options: ["United States and Germany", "United States and Soviet Union", "Great Britain and France", "Germany and Russia"], answer: "United States and Soviet Union", explanation: "The Cold War was a period of geopolitical tension between the two superpowers, the United States and the Soviet Union." },
        { question: "Who discovered penicillin?", options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Isaac Newton"], answer: "Alexander Fleming", explanation: "Alexander Fleming discovered the antibiotic substance penicillin in 1928." },
        { question: "The city of Constantinople is now known by what name?", options: ["Cairo", "Athens", "Istanbul", "Beirut"], answer: "Istanbul", explanation: "Constantinople, the capital of the Byzantine Empire, was renamed Istanbul after its conquest by the Ottoman Empire." },
        { question: "The Aztec Empire was located in what modern-day country?", options: ["Mexico", "Peru", "Brazil", "Spain"], answer: "Mexico", explanation: "The Aztec Empire flourished in what is now central Mexico." },
        { question: "In what decade did the Great Depression begin?", options: ["1910s", "1920s", "1930s", "1940s"], answer: "1920s", explanation: "The Great Depression began with the stock market crash in October 1929." },
        { question: "Who led the Soviet Union during World War II?", options: ["Vladimir Lenin", "Leon Trotsky", "Joseph Stalin", "Nikita Khrushchev"], answer: "Joseph Stalin", explanation: "Joseph Stalin was the leader of the Soviet Union throughout World War II." },
        { question: "What was the primary purpose of the ancient Egyptian pyramids?", options: ["Fortresses", "Temples for worship", "Tombs for pharaohs", "Public housing"], answer: "Tombs for pharaohs", explanation: "The pyramids were built as monumental tombs for pharaohs and their consorts." },
        { question: "Which nation sold the Louisiana Territory to the United States?", options: ["Spain", "Great Britain", "France", "Portugal"], answer: "France", explanation: "Napoleon Bonaparte sold the vast Louisiana Territory to the U.S. in 1803." },
        { question: "What was the name of the first human-made satellite to orbit Earth?", options: ["Apollo 1", "Voyager 1", "Sputnik 1", "Explorer 1"], answer: "Sputnik 1", explanation: "Sputnik 1 was launched by the Soviet Union on October 4, 1957." },
        { question: "Who was the Roman goddess of love and beauty?", options: ["Juno", "Venus", "Minerva", "Diana"], answer: "Venus", explanation: "In Roman mythology, Venus was the goddess of love, beauty, desire, sex, and fertility." },
        { question: "The fall of the Western Roman Empire is traditionally dated to what year?", options: ["410 AD", "476 AD", "500 AD", "525 AD"], answer: "476 AD", explanation: "The year 476 AD is often cited as the end of the Western Roman Empire when the last emperor was deposed." },
        { question: "What was the name of the ship that sank on its maiden voyage in 1912?", options: ["RMS Lusitania", "RMS Queen Mary", "RMS Titanic", "SS Great Britain"], answer: "RMS Titanic", explanation: "The Titanic struck an iceberg and sank on its maiden voyage in April 1912." },
        { question: "Who was the famous Queen of ancient Egypt known for her relationships with Julius Caesar and Mark Antony?", options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Isis"], answer: "Cleopatra", explanation: "Cleopatra VII was the last active ruler of the Ptolemaic Kingdom of Egypt." },
        { question: "The Mongol Empire was founded by what great leader?", options: ["Genghis Khan", "Kublai Khan", "Attila the Hun", "Timur"], answer: "Genghis Khan", explanation: "Genghis Khan founded the Mongol Empire in 1206, which became the largest contiguous land empire in history." },
        { question: "The 'Boston Tea Party' was a protest against which country's tax policies?", options: ["France", "Spain", "Great Britain", "The Netherlands"], answer: "Great Britain", explanation: "The Boston Tea Party was a political protest by American colonists against the British government." },
        { question: "Which war was fought between the North and South regions of the United States?", options: ["The War of 1812", "The Civil War", "The Revolutionary War", "The Mexican-American War"], answer: "The Civil War", explanation: "The American Civil War was fought from 1861 to 1865." },
        { question: "Who was the Greek god of the sea?", options: ["Zeus", "Hades", "Poseidon", "Ares"], answer: "Poseidon", explanation: "Poseidon was the Greek god of the sea, storms, earthquakes, and horses." },
        { question: "The Protestant Reformation was started by which figure?", options: ["John Calvin", "Martin Luther", "Henry VIII", "John Wycliffe"], answer: "Martin Luther", explanation: "Martin Luther's Ninety-five Theses are widely considered the start of the Reformation." },
        { question: "What empire was founded by Cyrus the Great?", options: ["The Roman Empire", "The Ottoman Empire", "The Persian Empire", "The Byzantine Empire"], answer: "The Persian Empire", explanation: "Cyrus the Great founded the Achaemenid Empire, also known as the Persian Empire." },
        { question: "What was the name of the war between England and France that lasted from 1337 to 1453?", options: ["The Thirty Years' War", "The Hundred Years' War", "The Seven Years' War", "The Napoleonic Wars"], answer: "The Hundred Years' War", explanation: "The Hundred Years' War was a series of conflicts waged between the House of Plantagenet and the House of Valois." },
        { question: "Who was the first female Prime Minister of the United Kingdom?", options: ["Theresa May", "Margaret Thatcher", "Liz Truss", "Queen Victoria"], answer: "Margaret Thatcher", explanation: "Margaret Thatcher, known as the 'Iron Lady,' served as PM from 1979 to 1990." },
        { question: "What famous battle took place in 1066?", options: ["Battle of Hastings", "Battle of Waterloo", "Battle of Stamford Bridge", "Battle of Agincourt"], answer: "Battle of Hastings", explanation: "The Battle of Hastings was a pivotal battle in the Norman conquest of England." },
        { question: "The 'Silk Road' was a trade route connecting which two continents?", options: ["Europe and Africa", "Asia and Africa", "Europe and Asia", "North America and Asia"], answer: "Europe and Asia", explanation: "The Silk Road was a network of trade routes that connected the East and West." },
        { question: "What event triggered the start of World War II in Europe?", options: ["The attack on Pearl Harbor", "The German invasion of Poland", "The D-Day landings", "The Treaty of Versailles"], answer: "The German invasion of Poland", explanation: "Germany's invasion of Poland on September 1, 1939, is considered the beginning of WWII." },
        { question: "The city of Machu Picchu was built by which ancient civilization?", options: ["Mayan", "Aztec", "Inca", "Egyptian"], answer: "Inca", explanation: "Machu Picchu is an Incan citadel located in the Andes Mountains of Peru." },
        { question: "Who was the leader of the Nazi Party in Germany?", options: ["Winston Churchill", "Benito Mussolini", "Adolf Hitler", "Joseph Stalin"], answer: "Adolf Hitler", explanation: "Adolf Hitler was the leader of the Nazi Party and dictator of Germany from 1933 to 1945." },
        { question: "The first permanent English settlement in North America was...", options: ["Plymouth", "Jamestown", "St. Augustine", "Roanoke"], answer: "Jamestown", explanation: "Jamestown, Virginia, was founded in 1607." },
        { question: "What was the name of the ship that Charles Darwin sailed on?", options: ["HMS Beagle", "HMS Victory", "HMS Endeavour", "HMS Bounty"], answer: "HMS Beagle", explanation: "Darwin's voyage on the HMS Beagle was crucial to his development of the theory of evolution." },
        { question: "The construction of the Great Wall of China began under which dynasty?", options: ["Han Dynasty", "Ming Dynasty", "Qing Dynasty", "Qin Dynasty"], answer: "Qin Dynasty", explanation: "The first sections of the Great Wall were built during the Qin Dynasty to protect the empire from northern invaders." },
        { question: "Who was the first woman to fly solo across the Atlantic Ocean?", options: ["Amelia Earhart", "Bessie Coleman", "Valentina Tereshkova", "Sally Ride"], answer: "Amelia Earhart", explanation: "Amelia Earhart made the historic flight in 1932." },
        { question: "The signing of what treaty ended World War I?", options: ["Treaty of Paris", "Treaty of Ghent", "Treaty of Versailles", "Treaty of Tordesillas"], answer: "Treaty of Versailles", explanation: "The Treaty of Versailles was signed in 1919, officially ending the war." },
        { question: "What was the primary cause of the Opium Wars in the 19th century?", options: ["Territorial disputes", "Religious differences", "Trade imbalances", "Political conflicts"], answer: "Trade imbalances", explanation: "The Opium Wars were fought between China and the British Empire over trade disputes, particularly regarding British opium imports." },
        { question: "Who was the first president of the United States?", options: ["John Adams", "Thomas Jefferson", "James Madison", "George Washington"], answer: "George Washington", explanation: "George Washington served as the first president from 1789 to 1797." },
        { question: "What was the ancient capital of the Inca Empire?", options: ["Tenochtitlan", "Cusco", "Tikal", "Rome"], answer: "Cusco", explanation: "Cusco was the historic capital of the Inca Empire." },
        { question: "The Battle of Stalingrad was a key turning point in which war?", options: ["World War I", "The Cold War", "World War II", "The Vietnam War"], answer: "World War II", explanation: "The Soviet victory at Stalingrad was a major turning point in the Eastern Front." },
        { question: "Who was the famous explorer who 'discovered' America in 1492?", options: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Marco Polo"], answer: "Christopher Columbus", explanation: "Christopher Columbus's voyages in 1492 marked the beginning of European colonization of the Americas." },
        { question: "The Industrial Revolution began in which country?", options: ["United States", "Germany", "Great Britain", "France"], answer: "Great Britain", explanation: "The Industrial Revolution began in Great Britain in the late 18th century." },
        { question: "What was the name of the military alliance formed by the Soviet Union and its satellite states during the Cold War?", options: ["NATO", "The Warsaw Pact", "The Axis Powers", "The United Nations"], answer: "The Warsaw Pact", explanation: "The Warsaw Pact was a collective defense treaty signed in Warsaw, Poland, between the Soviet Union and seven other Eastern Bloc socialist republics." },
        { question: "Who was the Greek philosopher who was the teacher of Alexander the Great?", options: ["Socrates", "Plato", "Aristotle", "Pythagoras"], answer: "Aristotle", explanation: "Aristotle was a prominent philosopher and scientist who tutored Alexander the Great." },
        { question: "The ancient city of Pompeii was destroyed by the eruption of what volcano?", options: ["Mount Fuji", "Mount St. Helens", "Mount Vesuvius", "Mount Etna"], answer: "Mount Vesuvius", explanation: "Mount Vesuvius erupted in 79 AD, burying the city of Pompeii in volcanic ash." },
    ],
    movies: [
        { question: "Which movie features the line, 'May the Force be with you'?", options: ["Star Wars", "The Matrix", "Blade Runner", "Dune"], answer: "Star Wars", explanation: "This iconic line is from the Star Wars franchise, first spoken in 'A New Hope'." },
        { question: "Who directed the 1994 film 'Pulp Fiction'?", options: ["Martin Scorsese", "Steven Spielberg", "Quentin Tarantino", "Alfred Hitchcock"], answer: "Quentin Tarantino", explanation: "Quentin Tarantino wrote and directed the highly influential film 'Pulp Fiction'." },
        { question: "What actress played Katniss Everdeen in 'The Hunger Games' series?", options: ["Kristen Stewart", "Jennifer Lawrence", "Emma Watson", "Shailene Woodley"], answer: "Jennifer Lawrence", explanation: "Jennifer Lawrence portrayed the lead character, Katniss Everdeen, in the film adaptations of 'The Hunger Games'." },
        { question: "In 'The Lord of the Rings', what is the name of Frodo's sword?", options: ["Sting", "Glamdring", "Andúril", "Narsil"], answer: "Sting", explanation: "Sting is the small sword given to Frodo Baggins by Bilbo Baggins." },
        { question: "Which film won the first Academy Award for Best Picture?", options: ["Wings", "The Circus", "Sunrise: A Song of Two Humans", "The Jazz Singer"], answer: "Wings", explanation: "'Wings' (1927) was a silent film that won the first Best Picture award." },
        { question: "Who played the character James Bond in the 2006 film 'Casino Royale'?", options: ["Pierce Brosnan", "Daniel Craig", "Sean Connery", "Roger Moore"], answer: "Daniel Craig", explanation: "Daniel Craig's debut as James Bond was in 'Casino Royale'." },
        { question: "What is the name of the fictional African country in 'Black Panther'?", options: ["Genosha", "Wakanda", "Latveria", "Symkaria"], answer: "Wakanda", explanation: "Wakanda is a highly advanced, fictional nation in East Africa." },
        { question: "Which animated film features a clownfish named Nemo?", options: ["Shrek", "Finding Nemo", "Toy Story", "The Lion King"], answer: "Finding Nemo", explanation: "'Finding Nemo' tells the story of an overprotective clownfish searching for his lost son, Nemo." },
        { question: "Who is the director of 'Jurassic Park'?", options: ["James Cameron", "George Lucas", "Steven Spielberg", "Christopher Nolan"], answer: "Steven Spielberg", explanation: "Steven Spielberg directed the science-fiction adventure film 'Jurassic Park' (1993)." },
        { question: "The movie 'Forrest Gump' famously featured what kind of chocolates?", options: ["Milk", "Dark", "A box of assorted chocolates", "Caramel"], answer: "A box of assorted chocolates", explanation: "The film's famous quote is 'Life is like a box of chocolates...'" },
        { question: "What is the name of the main antagonist in 'The Silence of the Lambs'?", options: ["Norman Bates", "Hannibal Lecter", "Jigsaw", "Darth Vader"], answer: "Hannibal Lecter", explanation: "Hannibal Lecter is a brilliant psychiatrist and cannibalistic serial killer." },
        { question: "What movie did Leonardo DiCaprio finally win an Oscar for?", options: ["The Wolf of Wall Street", "The Revenant", "Inception", "Titanic"], answer: "The Revenant", explanation: "DiCaprio won Best Actor for his role as Hugh Glass in 'The Revenant'." },
        { question: "Which famous director is known for the films 'E.T.' and 'Schindler's List'?", options: ["Francis Ford Coppola", "Martin Scorsese", "Steven Spielberg", "Stanley Kubrick"], answer: "Steven Spielberg", explanation: "Steven Spielberg is one of the most commercially successful directors in film history." },
        { question: "In 'Star Wars', what species is Chewbacca?", options: ["Wookiee", "Ewok", "Jawa", "Gungan"], answer: "Wookiee", explanation: "Chewbacca is a Wookiee from the planet Kashyyyk." },
        { question: "Which actor played the role of Tony Stark in the Marvel Cinematic Universe?", options: ["Chris Hemsworth", "Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"], answer: "Robert Downey Jr.", explanation: "Robert Downey Jr. portrayed Iron Man for over a decade." },
        { question: "The film 'Inglourious Basterds' is a fictional story set during which war?", options: ["World War I", "Vietnam War", "World War II", "American Civil War"], answer: "World War II", explanation: "The film follows a fictional story of a group of Jewish-American soldiers during WWII." },
        { question: "What is the first rule of Fight Club?", options: ["Don't talk about Fight Club", "You do not talk about Fight Club", "Always fight dirty", "Don't get into a fight"], answer: "You do not talk about Fight Club", explanation: "This famous line is repeated throughout the film." },
        { question: "Who is the villain in 'The Dark Knight'?", options: ["The Penguin", "Joker", "Bane", "Ra's al Ghul"], answer: "Joker", explanation: "Heath Ledger famously won a posthumous Oscar for his portrayal of the Joker." },
        { question: "Which film's tagline is 'The truth is out there'?", options: ["E.T.", "The X-Files", "Close Encounters of the Third Kind", "Independence Day"], answer: "The X-Files", explanation: "This is the well-known tagline for the sci-fi franchise." },
        { question: "What is the name of the main character in the film 'The Matrix'?", options: ["Trinity", "Morpheus", "Neo", "Agent Smith"], answer: "Neo", explanation: "Neo is the protagonist of 'The Matrix' trilogy." },
        { question: "Which actress voiced the character of Moana?", options: ["Auli'i Cravalho", "Dwayne Johnson", "Lupita Nyong'o", "Mandy Moore"], answer: "Auli'i Cravalho", explanation: "Auli'i Cravalho provided the voice for the title character in the animated film 'Moana'." },
        { question: "The film 'Saving Private Ryan' is set during which historical event?", options: ["The D-Day landings", "The Battle of the Bulge", "The Battle of Stalingrad", "The Fall of Berlin"], answer: "The D-Day landings", explanation: "The film's opening scene depicts the Omaha Beach landings on D-Day, June 6, 1944." },
        { question: "Who played the lead role in the movie 'Joker' (2019)?", options: ["Jared Leto", "Joaquin Phoenix", "Christian Bale", "Robert De Niro"], answer: "Joaquin Phoenix", explanation: "Joaquin Phoenix won the Academy Award for Best Actor for his performance as Arthur Fleck." },
        { question: "What is the name of the talking donkey in 'Shrek'?", options: ["Burro", "Donkey", "Mule", "Horse"], answer: "Donkey", explanation: "Donkey is Shrek's sidekick and is voiced by Eddie Murphy." },
        { question: "Which film is known for its famous line, 'I'll be back'?", options: ["Die Hard", "Terminator", "Rambo", "Predator"], answer: "Terminator", explanation: "The line is famously spoken by Arnold Schwarzenegger as the Terminator." },
        { question: "What city does the movie 'Rocky' take place in?", options: ["New York", "Boston", "Philadelphia", "Chicago"], answer: "Philadelphia", explanation: "Rocky Balboa is a boxer from Philadelphia." },
        { question: "The movie 'Titanic' is set in what year?", options: ["1905", "1912", "1920", "1931"], answer: "1912", explanation: "The film is based on the true story of the RMS Titanic's maiden voyage in 1912." },
        { question: "What is the highest-grossing film of all time (unadjusted for inflation)?", options: ["Star Wars: The Force Awakens", "Avatar", "Avengers: Endgame", "Titanic"], answer: "Avatar", explanation: "As of recent data, 'Avatar' holds the top spot for worldwide box office gross." },
        { question: "Who directed the 'The Godfather' trilogy?", options: ["Brian De Palma", "Steven Spielberg", "Francis Ford Coppola", "Stanley Kubrick"], answer: "Francis Ford Coppola", explanation: "Francis Ford Coppola directed the critically acclaimed crime film trilogy." },
        { question: "Which film series features the character Harry Potter?", options: ["The Hunger Games", "The Chronicles of Narnia", "Harry Potter", "Percy Jackson"], answer: "Harry Potter", explanation: "The film series is based on the books by J.K. Rowling." },
        { question: "In the film 'Finding Nemo', what is the name of the little fish who helps Nemo escape?", options: ["Dory", "Marlin", "Gill", "Squirt"], answer: "Gill", explanation: "Gill is the leader of the Tank Gang who has a scarred fin." },
        { question: "Which actor voiced the character Buzz Lightyear in the 'Toy Story' films?", options: ["Tom Hanks", "Tim Allen", "Dwayne Johnson", "Billy Crystal"], answer: "Tim Allen", explanation: "Tim Allen provided the voice for the beloved Space Ranger." },
        { question: "The film 'Pulp Fiction' is structured in what kind of order?", options: ["Chronological", "Reverse chronological", "Non-linear", "Alphabetical"], answer: "Non-linear", explanation: "The film's narrative jumps between different timelines." },
        { question: "Which movie is known for the line, 'Here's Johnny!'?", options: ["A Clockwork Orange", "The Shining", "Psycho", "Carrie"], answer: "The Shining", explanation: "Jack Nicholson's character Jack Torrance says this line in 'The Shining'." },
        { question: "What is the name of the fictional town in 'Back to the Future'?", options: ["Hill Valley", "Springfield", "Twin Peaks", "South Park"], answer: "Hill Valley", explanation: "Hill Valley is the hometown of Marty McFly and Doc Brown." },
        { question: "What film features the line, 'You can't handle the truth!'?", options: ["A Few Good Men", "Liar Liar", "The Firm", "The Rainmaker"], answer: "A Few Good Men", explanation: "This line is famously shouted by Jack Nicholson's character, Colonel Jessup." },
        { question: "Who played the character of Rose in 'Titanic'?", options: ["Kate Winslet", "Keira Knightley", "Drew Barrymore", "Cameron Diaz"], answer: "Kate Winslet", explanation: "Kate Winslet starred alongside Leonardo DiCaprio in the film." },
        { question: "Which movie won the Academy Award for Best Picture in 2020?", options: ["Joker", "1917", "Parasite", "Once Upon a Time in Hollywood"], answer: "Parasite", explanation: "'Parasite' made history by becoming the first non-English language film to win Best Picture." },
        { question: "In 'The Avengers', what is the name of Thor's hammer?", options: ["Stormbreaker", "Mjolnir", "Gungnir", "Vibranium"], answer: "Mjolnir", explanation: "Mjolnir is the name of Thor's hammer." },
        { question: "Which classic film is set in the fictional world of Oz?", options: ["Willy Wonka & the Chocolate Factory", "The Wizard of Oz", "Alice in Wonderland", "Labyrinth"], answer: "The Wizard of Oz", explanation: "The film follows Dorothy Gale on her journey through the land of Oz." },
        { question: "Who starred as the main character in the 'Lara Croft: Tomb Raider' films?", options: ["Angelina Jolie", "Alicia Vikander", "Jodie Foster", "Scarlett Johansson"], answer: "Angelina Jolie", explanation: "Angelina Jolie played the iconic video game character in the first two film adaptations." },
        { question: "What is the name of the evil sorceress in 'Sleeping Beauty'?", options: ["Ursula", "Maleficent", "Cruella", "The Evil Queen"], answer: "Maleficent", explanation: "Maleficent curses the baby Princess Aurora." },
        { question: "The film 'Inception' is about what?", options: ["Space travel", "Time travel", "Dream-sharing technology", "Mind reading"], answer: "Dream-sharing technology", explanation: "The film's plot revolves around a team of thieves who steal corporate secrets using dream-sharing technology." },
        { question: "What movie features the line, 'You're gonna need a bigger boat'?", options: ["Jaws", "Deep Blue Sea", "Sharknado", "The Meg"], answer: "Jaws", explanation: "This line is famously said by Chief Brody in the film 'Jaws'." },
        { question: "Who played the character of Jack Dawson in 'Titanic'?", options: ["Matt Damon", "Brad Pitt", "Leonardo DiCaprio", "Johnny Depp"], answer: "Leonardo DiCaprio", explanation: "Leonardo DiCaprio starred as the romantic lead, Jack Dawson." },
        { question: "Which film is about a boy who finds a golden ticket to a chocolate factory?", options: ["Charlie and the Chocolate Factory", "Willy Wonka & the Chocolate Factory", "The Chronicles of Narnia", "Matilda"], answer: "Willy Wonka & the Chocolate Factory", explanation: "The original 1971 film is a classic." },
        { question: "What is the name of the main antagonist in 'The Lion King'?", options: ["Scar", "Zazu", "Rafiki", "Timon"], answer: "Scar", explanation: "Scar is the villainous uncle of Simba." },
        { question: "The film 'Toy Story' was the first feature-length film made entirely by what method?", options: ["Stop motion animation", "Computer-generated imagery (CGI)", "Live-action", "Hand-drawn animation"], answer: "Computer-generated imagery (CGI)", explanation: "'Toy Story' was the first feature film created entirely with CGI." },
        { question: "Which movie is famous for its iconic 'red pill or blue pill' scene?", options: ["The Matrix", "V for Vendetta", "Lucy", "Limitless"], answer: "The Matrix", explanation: "The choice between the red pill (truth) and the blue pill (ignorance) is a central theme of 'The Matrix'." },
        { question: "What is the name of the futuristic city in 'Blade Runner'?", options: ["Neo-Tokyo", "Metropolis", "Los Angeles", "New York City"], answer: "Los Angeles", explanation: "The film is set in a dystopian Los Angeles in 2019." },
    ],
    science: [
        { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Pb"], answer: "Au", explanation: "The symbol 'Au' comes from the Latin word 'aurum'." },
        { question: "What planet is known as the 'Red Planet'?", options: ["Jupiter", "Mars", "Saturn", "Venus"], answer: "Mars", explanation: "Mars is called the Red Planet due to the presence of iron oxide on its surface." },
        { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Lungs"], answer: "Skin", explanation: "The skin is the largest organ of the human body, both by weight and surface area." },
        { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"], answer: "Mitochondria", explanation: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions." },
        { question: "How many bones are in the adult human body?", options: ["206", "210", "198", "220"], answer: "206", explanation: "An adult human skeleton has 206 bones, whereas a baby is born with around 300 bones." },
        { question: "What is the study of living organisms?", options: ["Geology", "Chemistry", "Biology", "Physics"], answer: "Biology", explanation: "Biology is a natural science concerned with the study of life and living organisms." },
        { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide", explanation: "Plants use carbon dioxide, water, and sunlight to create their own food through photosynthesis." },
        { question: "What is the boiling point of water in Celsius?", options: ["0°C", "50°C", "100°C", "212°C"], answer: "100°C", explanation: "At standard atmospheric pressure, water boils at 100°C (212°F)." },
        { question: "Which of the following is not a primary color of light?", options: ["Red", "Green", "Blue", "Yellow"], answer: "Yellow", explanation: "The primary colors of light are Red, Green, and Blue (RGB)." },
        { question: "The Earth is located in which galaxy?", options: ["Andromeda", "Triangulum", "Milky Way", "Sombrero"], answer: "Milky Way", explanation: "Our solar system is located in the Milky Way galaxy." },
        { question: "What is the name of the force that pulls objects towards the center of the Earth?", options: ["Magnetism", "Gravity", "Friction", "Inertia"], answer: "Gravity", explanation: "Gravity is a fundamental force of nature that attracts masses toward each other." },
        { question: "What is the hardest natural substance on Earth?", options: ["Iron", "Quartz", "Diamond", "Graphite"], answer: "Diamond", explanation: "Diamond is the hardest known natural mineral and is rated a 10 on the Mohs scale of hardness." },
        { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O", explanation: "Water is a chemical compound consisting of two hydrogen atoms and one oxygen atom." },
        { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Nitrogen", explanation: "Nitrogen makes up approximately 78% of Earth's atmosphere." },
        { question: "What is the process by which plants make their own food?", options: ["Respiration", "Transpiration", "Fermentation", "Photosynthesis"], answer: "Photosynthesis", explanation: "Photosynthesis is the process that converts light energy into chemical energy." },
        { question: "What is the study of the stars, planets, and galaxies?", options: ["Astrology", "Astronomy", "Meteorology", "Biology"], answer: "Astronomy", explanation: "Astronomy is the scientific study of celestial objects and phenomena." },
        { question: "What is the name of the galaxy closest to the Milky Way?", options: ["Andromeda Galaxy", "Triangulum Galaxy", "Messier 87", "Sombrero Galaxy"], answer: "Andromeda Galaxy", explanation: "The Andromeda Galaxy is the closest major galaxy to the Milky Way." },
        { question: "Which famous scientist developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"], answer: "Albert Einstein", explanation: "Albert Einstein's theory of relativity revolutionized our understanding of space, time, and gravity." },
        { question: "The Richter scale is used to measure the magnitude of what natural event?", options: ["Hurricanes", "Tornadoes", "Earthquakes", "Volcanic eruptions"], answer: "Earthquakes", explanation: "The Richter scale measures the seismic waves generated by an earthquake." },
        { question: "What is the name of the largest moon in our solar system?", options: ["Titan", "Ganymede", "Callisto", "Europa"], answer: "Ganymede", explanation: "Ganymede is a moon of Jupiter and is the largest moon in our solar system." },
        { question: "What is the smallest unit of matter?", options: ["Molecule", "Atom", "Cell", "Proton"], answer: "Atom", explanation: "An atom is the smallest unit of ordinary matter that forms a chemical element." },
        { question: "What force is responsible for the tides on Earth?", options: ["Sun's gravity", "Moon's gravity", "Earth's rotation", "Solar winds"], answer: "Moon's gravity", explanation: "The gravitational pull of the moon is the primary cause of ocean tides on Earth." },
        { question: "What is the process of a liquid turning into a gas?", options: ["Condensation", "Melting", "Evaporation", "Sublimation"], answer: "Evaporation", explanation: "Evaporation is the process by which a substance in a liquid state becomes a gas." },
        { question: "What is the main component of natural gas?", options: ["Ethane", "Propane", "Methane", "Butane"], answer: "Methane", explanation: "Methane is the principal component of natural gas." },
        { question: "Which scientist discovered the law of universal gravitation?", options: ["Galileo Galilei", "Isaac Newton", "Nikola Tesla", "Albert Einstein"], answer: "Isaac Newton", explanation: "Isaac Newton formulated the laws of motion and universal gravitation." },
        { question: "What type of rock is formed from cooled magma or lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "Composite"], answer: "Igneous", explanation: "Igneous rocks are formed from the cooling and solidification of molten rock." },
        { question: "What is the name of the closest star to Earth?", options: ["Sirius", "Alpha Centauri", "Polaris", "The Sun"], answer: "The Sun", explanation: "The Sun is a star, and it is the closest star to our planet." },
        { question: "How many teeth does an adult human have?", options: ["28", "30", "32", "34"], answer: "32", explanation: "An adult human typically has 32 permanent teeth, including wisdom teeth." },
        { question: "What is the name of the largest volcano on Earth?", options: ["Mount Fuji", "Mount St. Helens", "Mauna Loa", "Mount Vesuvius"], answer: "Mauna Loa", explanation: "Mauna Loa, located in Hawaii, is the largest volcano on Earth by mass and volume." },
        { question: "What is the chemical name for table salt?", options: ["Sodium chloride", "Potassium chloride", "Calcium carbonate", "Hydrogen peroxide"], answer: "Sodium chloride", explanation: "Sodium chloride, or NaCl, is a compound made of sodium and chlorine." },
        { question: "Which part of the brain is responsible for balance and coordination?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"], answer: "Cerebellum", explanation: "The cerebellum plays a key role in motor control, coordination, and precision." },
        { question: "What is the most abundant element in the universe?", options: ["Helium", "Oxygen", "Carbon", "Hydrogen"], answer: "Hydrogen", explanation: "Hydrogen is the most common element, making up over 90% of all atoms in the universe." },
        { question: "What is the name of the phenomenon where light bends as it passes from one medium to another?", options: ["Reflection", "Refraction", "Diffraction", "Absorption"], answer: "Refraction", explanation: "Refraction is the change in direction of light due to a change in its speed." },
        { question: "What is the largest living organism on Earth?", options: ["Blue whale", "Giant sequoia", "A honey fungus", "African elephant"], answer: "A honey fungus", explanation: "A single specimen of the honey fungus in Oregon covers over 2,200 acres and is considered the world's largest living organism." },
        { question: "What is the pH of a neutral substance?", options: ["0", "5", "7", "14"], answer: "7", explanation: "A pH of 7 is considered neutral, with anything below being acidic and above being alkaline." },
        { question: "What is the process of splitting an atom to release energy?", options: ["Nuclear fusion", "Nuclear fission", "Combustion", "Photosynthesis"], answer: "Nuclear fission", explanation: "Nuclear fission is the process where the nucleus of an atom splits into smaller parts, releasing a large amount of energy." },
        { question: "What is the name of the instrument used to measure wind speed?", options: ["Barometer", "Anemometer", "Thermometer", "Hygrometer"], answer: "Anemometer", explanation: "An anemometer is a device used for measuring wind speed." },
        { question: "What is the name of the protein that carries oxygen in the blood?", options: ["Insulin", "Hemoglobin", "Collagen", "Keratin"], answer: "Hemoglobin", explanation: "Hemoglobin is a protein in red blood cells that transports oxygen from the lungs to the body's tissues." },
        { question: "What is the study of matter and energy?", options: ["Chemistry", "Biology", "Physics", "Geology"], answer: "Physics", explanation: "Physics is the branch of science that deals with the properties of matter and energy." },
        { question: "What is the main function of red blood cells?", options: ["Fighting infection", "Clotting blood", "Carrying oxygen", "Digesting food"], answer: "Carrying oxygen", explanation: "Red blood cells are primarily responsible for transporting oxygen throughout the body." },
        { question: "What is the name of the process that powers the sun?", options: ["Nuclear fusion", "Nuclear fission", "Combustion", "Chemical reaction"], answer: "Nuclear fusion", explanation: "The sun's energy is produced by nuclear fusion, where hydrogen atoms fuse to form helium." },
        { question: "What is the name of the smallest planet in our solar system?", options: ["Mercury", "Mars", "Pluto", "Earth"], answer: "Mercury", explanation: "Mercury is the closest planet to the sun and the smallest of the eight planets." },
        { question: "What is the main organ of the human respiratory system?", options: ["Heart", "Stomach", "Lungs", "Brain"], answer: "Lungs", explanation: "The lungs are the primary organs of the respiratory system, responsible for gas exchange." },
        { question: "What is the name of the supercontinent that existed 300 million years ago?", options: ["Laurasia", "Pangaea", "Gondwana", "Eurasia"], answer: "Pangaea", explanation: "Pangaea was a supercontinent that formed during the late Paleozoic and early Mesozoic eras." },
        { question: "What is the name of the scale used to measure the intensity of a hurricane?", options: ["Fahrenheit", "Saffir-Simpson", "Richter", "Mohs"], answer: "Saffir-Simpson", explanation: "The Saffir-Simpson Hurricane Wind Scale is used to classify hurricanes based on wind speed." },
        { question: "What is the study of the Earth's physical structure, substances, and history?", options: ["Biology", "Physics", "Geology", "Chemistry"], answer: "Geology", explanation: "Geology is the science that deals with the Earth's physical structure and substance." },
        { question: "What is the name of the famous equation E=mc²?", options: ["Newton's Law", "Einstein's Theory of Relativity", "Pythagorean Theorem", "Boyle's Law"], answer: "Einstein's Theory of Relativity", explanation: "E=mc² is Albert Einstein's famous mass-energy equivalence formula." },
        { question: "Which gas is responsible for the 'greenhouse effect'?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide", explanation: "Carbon dioxide is the main greenhouse gas that traps heat in the atmosphere." },
        { question: "What is the largest moon of Saturn?", options: ["Titan", "Enceladus", "Tethys", "Mimas"], answer: "Titan", explanation: "Titan is the largest moon of Saturn and the second-largest in the solar system." },
        { question: "What is the main function of the kidneys?", options: ["Pumping blood", "Filtering waste from blood", "Digesting food", "Controlling thoughts"], answer: "Filtering waste from blood", explanation: "The kidneys filter blood to remove waste products and excess fluid." },
    ],
    general: [
        { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra", explanation: "While many think it's Sydney or Melbourne, the capital of Australia is Canberra." },
        { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7", explanation: "The seven continents are: North America, South America, Europe, Asia, Africa, Australia, and Antarctica." },
        { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean", explanation: "The Pacific Ocean is the largest and deepest of the world's five oceans." },
        { question: "What is the longest river in the world?", options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"], answer: "Nile River", explanation: "For many years, the Nile River in Africa was considered the longest, though recent studies suggest the Amazon might be longer." },
        { question: "What is the currency of Japan?", options: ["Yen", "Yuan", "Won", "Baht"], answer: "Yen", explanation: "The official currency of Japan is the Japanese Yen." },
        { question: "What is the name of the largest desert in the world?", options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Antarctic Polar Desert"], answer: "Antarctic Polar Desert", explanation: "The largest desert is the Antarctic Polar Desert, which covers almost the entire continent of Antarctica." },
        { question: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], answer: "8", explanation: "The eight planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune." },
        { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Mount Kilimanjaro", "Mount Denali"], answer: "Mount Everest", explanation: "Mount Everest is the highest mountain above sea level, located in the Himalayas." },
        { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: "Ottawa", explanation: "The capital of Canada is Ottawa, located in the province of Ontario." },
        { question: "Which country is known as the 'Land of the Rising Sun'?", options: ["China", "South Korea", "Japan", "Thailand"], answer: "Japan", explanation: "The name 'Japan' in Japanese is 'Nihon' or 'Nippon', which means 'the origin of the sun'." },
        { question: "What is the main language spoken in Brazil?", options: ["Spanish", "English", "Portuguese", "French"], answer: "Portuguese", explanation: "Brazil is the only country in South America whose official language is Portuguese." },
        { question: "What is the largest country in the world by land area?", options: ["China", "United States", "Canada", "Russia"], answer: "Russia", explanation: "Russia is the largest country, spanning over 17 million square kilometers." },
        { question: "What is the capital of Italy?", options: ["Venice", "Milan", "Rome", "Naples"], answer: "Rome", explanation: "Rome is the capital and largest city of Italy." },
        { question: "Which famous landmark is located in Paris, France?", options: ["The Colosseum", "The Great Wall", "The Eiffel Tower", "The Statue of Liberty"], answer: "The Eiffel Tower", explanation: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris." },
        { question: "What is the official language of the United States?", options: ["English", "Spanish", "French", "None"], answer: "None", explanation: "The United States has no official language at the federal level." },
        { question: "What is the national animal of Australia?", options: ["Kangaroo", "Koala", "Emu", "Wombat"], answer: "Kangaroo", explanation: "The kangaroo is widely recognized as a symbol of Australia." },
        { question: "What is the capital of Egypt?", options: ["Alexandria", "Cairo", "Luxor", "Giza"], answer: "Cairo", explanation: "Cairo is the capital and largest city of Egypt." },
        { question: "What is the longest country in the world from north to south?", options: ["Russia", "Canada", "Chile", "Brazil"], answer: "Chile", explanation: "Due to its long, narrow shape, Chile is the longest country from north to south." },
        { question: "What is the largest city in the world by population?", options: ["Tokyo", "Delhi", "Shanghai", "New York"], answer: "Tokyo", explanation: "Tokyo is the world's most populous metropolitan area." },
        { question: "What is the largest continent by land area?", options: ["Africa", "North America", "Asia", "Europe"], answer: "Asia", explanation: "Asia is the largest and most populous continent, covering about 30% of Earth's land area." },
        { question: "What is the capital of Spain?", options: ["Barcelona", "Seville", "Madrid", "Lisbon"], answer: "Madrid", explanation: "Madrid is the capital and most populous city of Spain." },
        { question: "Which planet is the second largest in our solar system?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn", explanation: "Jupiter is the largest, followed by Saturn." },
        { question: "What is the smallest country in the world?", options: ["Monaco", "Nauru", "Vatican City", "San Marino"], answer: "Vatican City", explanation: "Vatican City is an independent city-state enclaved within Rome, Italy." },
        { question: "What is the capital of New Zealand?", options: ["Auckland", "Christchurch", "Wellington", "Queenstown"], answer: "Wellington", explanation: "Wellington is the capital of New Zealand." },
        { question: "What is the most populous country in the world?", options: ["India", "United States", "China", "Indonesia"], answer: "India", explanation: "As of 2023, India surpassed China to become the world's most populous country." },
        { question: "What is the primary ingredient in guacamole?", options: ["Tomatoes", "Onions", "Avocado", "Cilantro"], answer: "Avocado", explanation: "Guacamole is a dip made from mashed avocado." },
        { question: "What is the largest land animal in the world?", options: ["Giraffe", "Elephant", "Rhinoceros", "Hippopotamus"], answer: "Elephant", explanation: "The African elephant is the largest living land animal." },
        { question: "Which country is home to the ancient city of Petra?", options: ["Egypt", "Israel", "Jordan", "Saudi Arabia"], answer: "Jordan", explanation: "Petra is a famous archaeological site in the southwestern desert of Jordan." },
        { question: "What is the currency of the United Kingdom?", options: ["Euro", "Dollar", "Pound Sterling", "Franc"], answer: "Pound Sterling", explanation: "The Pound Sterling is the official currency of the UK." },
        { question: "What is the national flower of England?", options: ["Rose", "Tulip", "Lily", "Daisy"], answer: "Rose", explanation: "The Tudor Rose is the national emblem of England." },
        { question: "Which country is the largest producer of coffee?", options: ["Colombia", "Brazil", "Vietnam", "Ethiopia"], answer: "Brazil", explanation: "Brazil has been the world's largest producer of coffee for over 150 years." },
        { question: "What is the name of the sea that separates Europe and Africa?", options: ["Black Sea", "Mediterranean Sea", "Red Sea", "Caspian Sea"], answer: "Mediterranean Sea", explanation: "The Mediterranean Sea connects Europe to Africa and Asia." },
        { question: "What is the capital of Germany?", options: ["Munich", "Hamburg", "Berlin", "Frankfurt"], answer: "Berlin", explanation: "Berlin is the capital and largest city of Germany." },
        { question: "Which ocean is the deepest?", options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"], answer: "Pacific Ocean", explanation: "The Pacific Ocean's Mariana Trench is the deepest point in the world's oceans." },
        { question: "What is the main ingredient of bread?", options: ["Yeast", "Flour", "Water", "Salt"], answer: "Flour", explanation: "Flour, usually from wheat, is the primary ingredient for making bread." },
        { question: "What is the currency of China?", options: ["Yen", "Rupee", "Yuan", "Won"], answer: "Yuan", explanation: "The official currency is the Renminbi (RMB), and the basic unit is the yuan." },
        { question: "What is the name of the strait that separates Russia and the United States?", options: ["Strait of Gibraltar", "Bering Strait", "Strait of Hormuz", "Palk Strait"], answer: "Bering Strait", explanation: "The Bering Strait separates Russia's Chukchi Peninsula from Alaska, USA." },
        { question: "What is the largest island in the world?", options: ["Madagascar", "Greenland", "New Guinea", "Borneo"], answer: "Greenland", explanation: "Greenland is the world's largest island, though it is not a continent." },
        { question: "What is the capital of India?", options: ["Mumbai", "Kolkata", "New Delhi", "Bengaluru"], answer: "New Delhi", explanation: "New Delhi is the capital of India." },
        { question: "What is the name of the famous waterfall on the border of Brazil and Argentina?", options: ["Niagara Falls", "Victoria Falls", "Iguazu Falls", "Angel Falls"], answer: "Iguazu Falls", explanation: "Iguazu Falls are a system of waterfalls on the border of Argentina's Misiones province and Brazil's Paraná state." },
        { question: "What is the traditional Japanese art of paper folding?", options: ["Ikebana", "Origami", "Haiku", "Bonsai"], answer: "Origami", explanation: "Origami is the art of folding paper into a shape or model." },
        { question: "What is the capital of Mexico?", options: ["Guadalajara", "Mexico City", "Cancún", "Monterrey"], answer: "Mexico City", explanation: "Mexico City is the capital and most populous city of Mexico." },
        { question: "What is the name of the sea that separates Scandinavia and the British Isles?", options: ["North Sea", "Baltic Sea", "Irish Sea", "Norwegian Sea"], answer: "North Sea", explanation: "The North Sea is a marginal sea of the Atlantic Ocean located between Great Britain, Scandinavia, Germany, the Netherlands, Belgium, and France." },
        { question: "What is the largest lake in the world by surface area?", options: ["Lake Superior", "Lake Huron", "Caspian Sea", "Lake Victoria"], answer: "Caspian Sea", explanation: "The Caspian Sea is technically the world's largest enclosed inland body of water by area, often classified as the world's largest lake." },
        { question: "What is the capital of the Philippines?", options: ["Manila", "Quezon City", "Davao City", "Cebu City"], answer: "Manila", explanation: "Manila is the capital of the Philippines." },
        { question: "What is the largest country in South America by land area?", options: ["Argentina", "Colombia", "Peru", "Brazil"], answer: "Brazil", explanation: "Brazil is the largest country in both South America and the Latin American region." },
        { question: "What is the capital of Ireland?", options: ["Belfast", "Cork", "Dublin", "Galway"], answer: "Dublin", explanation: "Dublin is the capital and largest city of Ireland." },
        { question: "Which is the smallest planet in the solar system?", options: ["Earth", "Mars", "Mercury", "Pluto"], answer: "Mercury", explanation: "Mercury is the smallest planet in our solar system." },
        { question: "What is the national sport of Canada?", options: ["Ice Hockey", "Lacrosse", "Baseball", "Basketball"], answer: "Lacrosse", explanation: "Lacrosse is Canada's oldest and official summer sport, with ice hockey being the official winter sport." },
        { question: "What is the main language spoken in Argentina?", options: ["Portuguese", "Spanish", "English", "Italian"], answer: "Spanish", explanation: "Spanish is the official and most widely spoken language in Argentina." },
    ],
    sports: [
        { question: "Which country won the first-ever FIFA World Cup in 1930?", options: ["Brazil", "Italy", "Uruguay", "Germany"], answer: "Uruguay", explanation: "Uruguay hosted and won the first World Cup by defeating Argentina." },
        { question: "How many players are on a standard soccer team on the field?", options: ["9", "10", "11", "12"], answer: "11", explanation: "A standard soccer team has 11 players on the field, including the goalkeeper." },
        { question: "In which sport would you perform a slam dunk?", options: ["Football", "Tennis", "Basketball", "Golf"], answer: "Basketball", explanation: "A slam dunk is a type of shot in basketball where the player forcefully dunks the ball through the hoop." },
        { question: "What is the highest score a bowler can get in a single game of ten-pin bowling?", options: ["200", "250", "300", "500"], answer: "300", explanation: "A perfect game in ten-pin bowling is a score of 300, achieved by bowling 12 strikes in a row." },
        { question: "What sport is associated with the term 'birdie'?", options: ["Tennis", "Golf", "Badminton", "Cricket"], answer: "Golf", explanation: "A birdie is a term used when a player completes a hole in one stroke under par." },
        { question: "Which country has won the most Olympic gold medals in men's hockey?", options: ["Canada", "United States", "Russia", "Sweden"], answer: "Canada", explanation: "Canada has won more gold medals than any other country in men's Olympic hockey." },
        { question: "Which team has won the most Super Bowls?", options: ["New England Patriots", "Pittsburgh Steelers", "Dallas Cowboys", "San Francisco 49ers"], answer: "New England Patriots", explanation: "As of recent history, the Patriots and Steelers share the record for most Super Bowl wins." },
        { question: "How many bases are there in baseball?", options: ["3", "4", "5", "6"], answer: "4", explanation: "The bases in baseball are first base, second base, third base, and home plate." },
        { question: "What is the name of the famous boxing ring in Las Vegas, Nevada?", options: ["The Garden", "The Ring", "The Square", "The MGM Grand"], answer: "The MGM Grand", explanation: "The MGM Grand Garden Arena has hosted many famous boxing matches." },
        { question: "Which city hosted the 2016 Summer Olympics?", options: ["London", "Rio de Janeiro", "Tokyo", "Beijing"], answer: "Rio de Janeiro", explanation: "Rio de Janeiro, Brazil, hosted the 2016 Summer Olympics." },
        { question: "What is the term for a score of zero in tennis?", options: ["Deuce", "Love", "Advantage", "Break"], answer: "Love", explanation: "'Love' is a term for zero, derived from the French word for egg, 'l'oeuf', which resembles a zero." },
        { question: "In what sport would you find a 'glove' and a 'puck'?", options: ["Soccer", "Ice Hockey", "Basketball", "Baseball"], answer: "Ice Hockey", explanation: "A glove is a piece of protective equipment for goalies, and a puck is the object that players hit." },
        { question: "What is the name of the famous soccer player known as 'The King'?", options: ["Pele", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo"], answer: "Pele", explanation: "Pele is a Brazilian soccer legend widely regarded as one of the greatest players of all time." },
        { question: "Which country invented the game of table tennis?", options: ["China", "Japan", "United States", "England"], answer: "England", explanation: "Table tennis originated in England in the late 19th century." },
        { question: "What is the name of the trophy awarded to the winner of the NHL playoffs?", options: ["Stanley Cup", "Vince Lombardi Trophy", "Commissioner's Trophy", "Larry O'Brien Trophy"], answer: "Stanley Cup", explanation: "The Stanley Cup is the oldest professional sports trophy in North America." },
        { question: "What is the name of the famous golf tournament held at Augusta National Golf Club?", options: ["The Open Championship", "The PGA Championship", "The Masters Tournament", "The U.S. Open"], answer: "The Masters Tournament", explanation: "The Masters is one of the four major golf championships." },
        { question: "How many players are on a standard American football team on the field at one time?", options: ["10", "11", "12", "13"], answer: "11", explanation: "Each team has 11 players on the field during a play." },
        { question: "What is the name of the person who officiates a game of tennis?", options: ["Umpire", "Referee", "Judge", "Chairman"], answer: "Umpire", explanation: "The umpire is the official in a game of tennis." },
        { question: "In what year did the modern Olympic Games begin?", options: ["1896", "1900", "1908", "1912"], answer: "1896", explanation: "The first modern Olympic Games were held in Athens, Greece, in 1896." },
        { question: "Which sport uses the term 'knockout'?", options: ["Tennis", "Boxing", "Swimming", "Gymnastics"], answer: "Boxing", explanation: "A knockout occurs when a boxer is knocked unconscious or is unable to continue fighting." },
        { question: "How many balls are on a snooker table at the start of a game?", options: ["20", "21", "22", "24"], answer: "22", explanation: "There are 15 red balls, 6 colored balls, and one white cue ball." },
        { question: "What is the name of the trophy awarded to the winner of the NFL's championship game?", options: ["Vince Lombardi Trophy", "Stanley Cup", "World Series Trophy", "Super Bowl Trophy"], answer: "Vince Lombardi Trophy", explanation: "The Vince Lombardi Trophy is awarded to the winning team of the Super Bowl." },
        { question: "Which sport is played on a pitch with a bat, ball, and wickets?", options: ["Baseball", "Softball", "Cricket", "Rounders"], answer: "Cricket", explanation: "Cricket is a bat-and-ball game played between two teams of eleven players on a field." },
        { question: "What is the name of the famous basketball player known as 'Air Jordan'?", options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Shaquille O'Neal"], answer: "Michael Jordan", explanation: "Michael Jordan is widely regarded as one of the greatest basketball players of all time." },
        { question: "Which country is the birthplace of the martial art of judo?", options: ["China", "Korea", "Japan", "Vietnam"], answer: "Japan", explanation: "Judo was created in 1882 by Kano Jigoro in Japan." },
        { question: "How many innings are there in a standard game of baseball?", options: ["7", "8", "9", "10"], answer: "9", explanation: "A standard game of baseball consists of nine innings." },
        { question: "What is the name of the first modern Olympics host city?", options: ["Paris", "London", "Athens", "Rome"], answer: "Athens", explanation: "Athens, Greece, hosted the first modern Olympic Games in 1896." },
        { question: "What sport is a 'no-hitter' an achievement in?", options: ["Baseball", "Basketball", "Tennis", "Golf"], answer: "Baseball", explanation: "A no-hitter is a game in which a pitcher pitches at least nine innings without allowing any hits." },
        { question: "What is the name of the famous Formula One race in Monaco?", options: ["Monaco Grand Prix", "Monaco GP", "Monte Carlo Grand Prix", "Monte Carlo GP"], answer: "Monaco Grand Prix", explanation: "The Monaco Grand Prix is a famous Formula One race held on the streets of Monte Carlo." },
        { question: "What is the name of the trophy awarded to the winner of the World Series in baseball?", options: ["Commissioner's Trophy", "Stanley Cup", "Super Bowl Trophy", "World Series Trophy"], answer: "Commissioner's Trophy", explanation: "The Commissioner's Trophy is awarded to the winning team of Major League Baseball's championship series." },
        { question: "What is the name of the famous tennis tournament held in London?", options: ["The French Open", "The US Open", "Wimbledon", "The Australian Open"], answer: "Wimbledon", explanation: "Wimbledon is the oldest tennis tournament in the world." },
        { question: "What is the name of the person who calls a foul in basketball?", options: ["Referee", "Umpire", "Official", "Judge"], answer: "Referee", explanation: "The referee is the official who calls fouls and manages the game." },
        { question: "What is the name of the famous professional wrestler known as 'The Rock'?", options: ["Hulk Hogan", "John Cena", "Stone Cold Steve Austin", "Dwayne 'The Rock' Johnson"], answer: "Dwayne 'The Rock' Johnson", explanation: "Dwayne 'The Rock' Johnson is a professional wrestler, actor, and producer." },
        { question: "What is the name of the famous golf course where the Masters Tournament is held?", options: ["Pebble Beach", "Augusta National Golf Club", "St. Andrews", "Royal Melbourne"], answer: "Augusta National Golf Club", explanation: "The Masters is an invitation-only golf tournament held at Augusta National." },
        { question: "How many points is a touchdown worth in American football (without the extra point)?", options: ["6", "7", "8", "9"], answer: "6", explanation: "A touchdown is worth 6 points." },
        { question: "Which team has won the most NBA championships?", options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"], answer: "Boston Celtics", explanation: "The Celtics have won more NBA championships than any other team." },
        { question: "What is the name of the famous swimmer who won 28 Olympic medals?", options: ["Michael Phelps", "Mark Spitz", "Ryan Lochte", "Ian Thorpe"], answer: "Michael Phelps", explanation: "Michael Phelps is the most decorated Olympian of all time." },
        { question: "What is the name of the professional soccer league in England?", options: ["La Liga", "Serie A", "Premier League", "Bundesliga"], answer: "Premier League", explanation: "The Premier League is the top level of the English football league system." },
        { question: "What is the name of the famous boxer who was known as 'The Greatest'?", options: ["Muhammad Ali", "Mike Tyson", "Joe Frazier", "George Foreman"], answer: "Muhammad Ali", explanation: "Muhammad Ali was an American professional boxer and activist." },
        { question: "What is the name of the famous race in Indianapolis, Indiana?", options: ["Indianapolis 500", "Daytona 500", "Monaco Grand Prix", "Kentucky Derby"], answer: "Indianapolis 500", explanation: "The Indianapolis 500 is an annual automobile race held at Indianapolis Motor Speedway." },
        { question: "What is the name of the sport where you hit a shuttlecock over a net?", options: ["Tennis", "Badminton", "Volleyball", "Ping-pong"], answer: "Badminton", explanation: "Badminton is a racket sport played using a shuttlecock." },
        { question: "What is the name of the famous basketball player known as 'Magic Johnson'?", options: ["Kareem Abdul-Jabbar", "Larry Bird", "Earvin 'Magic' Johnson", "Michael Jordan"], answer: "Earvin 'Magic' Johnson", explanation: "Earvin 'Magic' Johnson is a retired professional basketball player." },
        { question: "What is the name of the first woman to run the Boston Marathon?", options: ["Kathrine Switzer", "Grete Waitz", "Joan Benoit", "Paula Radcliffe"], answer: "Kathrine Switzer", explanation: "Kathrine Switzer was the first woman to run the Boston Marathon as an officially registered competitor." },
        { question: "What is the name of the famous soccer player known as 'CR7'?", options: ["Lionel Messi", "Cristiano Ronaldo", "Pele", "Neymar"], answer: "Cristiano Ronaldo", explanation: "Cristiano Ronaldo is often referred to by his initials and jersey number, CR7." },
        { question: "What is the name of the famous track and field event that includes 10 different events?", options: ["Decathlon", "Heptathlon", "Pentathlon", "Marathon"], answer: "Decathlon", explanation: "The decathlon is a combined event in track and field consisting of ten different events." },
        { question: "What is the name of the famous baseball player known as 'The Babe'?", options: ["Babe Ruth", "Lou Gehrig", "Jackie Robinson", "Ted Williams"], answer: "Babe Ruth", explanation: "Babe Ruth was a legendary American professional baseball player." },
        { question: "What is the name of the famous basketball player known as 'The Black Mamba'?", options: ["Kobe Bryant", "LeBron James", "Michael Jordan", "Shaquille O'Neal"], answer: "Kobe Bryant", explanation: "Kobe Bryant gave himself the nickname 'The Black Mamba' after the film 'Kill Bill'." },
        { question: "What is the name of the famous golf player known as 'Tiger Woods'?", options: ["Jack Nicklaus", "Arnold Palmer", "Tiger Woods", "Ben Hogan"], answer: "Tiger Woods", explanation: "Tiger Woods is an American professional golfer." },
        { question: "What is the name of the famous racehorse that won the Triple Crown in 1973?", options: ["Secretariat", "American Pharoah", "Seattle Slew", "Affirmed"], answer: "Secretariat", explanation: "Secretariat won the Triple Crown in 1973 and set new records in all three races." },
        { question: "What is the name of the famous football player known as 'Tom Brady'?", options: ["Peyton Manning", "Drew Brees", "Joe Montana", "Tom Brady"], answer: "Tom Brady", explanation: "Tom Brady is widely regarded as one of the greatest quarterbacks of all time." },
    ],
    music: [
        { question: "What is the name of the British rock band that released the album 'The Dark Side of the Moon'?", options: ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones"], answer: "Pink Floyd", explanation: "Pink Floyd released their iconic concept album in 1973." },
        { question: "Which singer is known as the 'Queen of Pop'?", options: ["Lady Gaga", "Beyoncé", "Madonna", "Taylor Swift"], answer: "Madonna", explanation: "Madonna has been a dominant and influential figure in music for decades." },
        { question: "Which American singer is known as the 'King of Pop'?", options: ["Prince", "Michael Jackson", "Elvis Presley", "Frank Sinatra"], answer: "Michael Jackson", explanation: "Michael Jackson is globally recognized as the 'King of Pop' for his contributions to music." },
        { question: "What famous singer had a hit song with 'Bohemian Rhapsody'?", options: ["Elton John", "Freddie Mercury", "Paul McCartney", "David Bowie"], answer: "Freddie Mercury", explanation: "Freddie Mercury was the lead singer of the band Queen, who released the song." },
        { question: "What is the name of the singer who released the album '21'?", options: ["Adele", "Beyoncé", "Rihanna", "Taylor Swift"], answer: "Adele", explanation: "Adele's '21' was a massive commercial success, becoming one of the best-selling albums of the 21st century." },
        { question: "Which city is famous for its 'Motown' sound?", options: ["Chicago", "New York", "Detroit", "Los Angeles"], answer: "Detroit", explanation: "Motown Records was founded in Detroit, Michigan, and was a major force in popular music." },
        { question: "What instrument does the famous jazz musician Louis Armstrong play?", options: ["Saxophone", "Piano", "Trumpet", "Drums"], answer: "Trumpet", explanation: "Louis Armstrong was a trumpeter, composer, and singer who was one of the most influential figures in jazz." },
        { question: "Which artist released the album 'Thriller'?", options: ["Prince", "Michael Jackson", "Madonna", "Whitney Houston"], answer: "Michael Jackson", explanation: "'Thriller' is one of the best-selling albums of all time." },
        { question: "The band U2 originated in which country?", options: ["United States", "England", "Ireland", "Canada"], answer: "Ireland", explanation: "U2 is an Irish rock band from Dublin." },
        { question: "What is the name of the Canadian singer who released the album 'Lover'?", options: ["Justin Bieber", "Drake", "Taylor Swift", "Celine Dion"], answer: "Taylor Swift", explanation: "Taylor Swift is an American singer-songwriter who released 'Lover' in 2019." },
        { question: "Which famous rock and roll musician was known for his 'duckwalk'?", options: ["Elvis Presley", "Chuck Berry", "Little Richard", "Jerry Lee Lewis"], answer: "Chuck Berry", explanation: "Chuck Berry popularized the duckwalk during his performances." },
        { question: "What is the name of the rapper who released the album 'To Pimp a Butterfly'?", options: ["Drake", "Kendrick Lamar", "Eminem", "J. Cole"], answer: "Kendrick Lamar", explanation: "Kendrick Lamar's album 'To Pimp a Butterfly' was critically acclaimed." },
        { question: "What is the name of the country singer known as the 'Man in Black'?", options: ["Waylon Jennings", "Willie Nelson", "Johnny Cash", "Hank Williams"], answer: "Johnny Cash", explanation: "Johnny Cash was an American singer-songwriter, known for his deep, bass-baritone voice." },
        { question: "What is the name of the famous singer who released the album 'Blonde'?", options: ["Frank Ocean", "The Weeknd", "Drake", "Childish Gambino"], answer: "Frank Ocean", explanation: "Frank Ocean is an American singer-songwriter who released 'Blonde' in 2016." },
        { question: "Which band sang the hit song 'Hotel California'?", options: ["Eagles", "Led Zeppelin", "The Rolling Stones", "The Beatles"], answer: "Eagles", explanation: "'Hotel California' is a famous song by the Eagles." },
        { question: "Who is the lead singer of the band Queen?", options: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"], answer: "Freddie Mercury", explanation: "Freddie Mercury was the lead vocalist and co-principal songwriter of Queen." },
        { question: "What is the name of the rapper who released the album 'The College Dropout'?", options: ["Jay-Z", "Kanye West", "Eminem", "Nas"], answer: "Kanye West", explanation: "Kanye West's debut album 'The College Dropout' was a commercial and critical success." },
        { question: "What is the name of the famous singer who released the album 'Lemonade'?", options: ["Rihanna", "Beyoncé", "Adele", "Taylor Swift"], answer: "Beyoncé", explanation: "Beyoncé's visual album 'Lemonade' was a major cultural event." },
        { question: "What is the name of the famous singer who released the album 'My Beautiful Dark Twisted Fantasy'?", options: ["Kanye West", "Eminem", "Drake", "J. Cole"], answer: "Kanye West", explanation: "'My Beautiful Dark Twisted Fantasy' is often considered one of Kanye West's best albums." },
        { question: "Which artist released the song 'Like a Rolling Stone'?", options: ["Bob Dylan", "Bruce Springsteen", "Neil Young", "John Lennon"], answer: "Bob Dylan", explanation: "Bob Dylan's 'Like a Rolling Stone' is a classic rock song." },
        { question: "What is the name of the famous singer who released the album 'Born to Die'?", options: ["Adele", "Lana Del Rey", "Lorde", "Dua Lipa"], answer: "Lana Del Rey", explanation: "Lana Del Rey's debut studio album 'Born to Die' was released in 2012." },
        { question: "What is the name of the famous band that released the album 'Sgt. Pepper's Lonely Hearts Club Band'?", options: ["The Rolling Stones", "The Who", "The Beatles", "Led Zeppelin"], answer: "The Beatles", explanation: "'Sgt. Pepper's' is one of the most influential rock albums of all time." },
        { question: "What is the name of the famous singer who released the album 'Bad'?", options: ["Michael Jackson", "Prince", "Madonna", "Whitney Houston"], answer: "Michael Jackson", explanation: "Michael Jackson's album 'Bad' followed the massive success of 'Thriller'." },
        { question: "What is the name of the famous singer who released the album 'Nevermind'?", options: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"], answer: "Nirvana", explanation: "Nirvana's 'Nevermind' was a key album in the grunge music movement." },
        { question: "What is the name of the famous singer who released the album 'The Miseducation of Lauryn Hill'?", options: ["Lauryn Hill", "Mary J. Blige", "Erykah Badu", "Alicia Keys"], answer: "Lauryn Hill", explanation: "'The Miseducation of Lauryn Hill' is considered one of the greatest albums of all time." },
        { question: "What is the name of the famous singer who released the album 'Doo-Wops & Hooligans'?", options: ["Bruno Mars", "The Weeknd", "Ed Sheeran", "Justin Bieber"], answer: "Bruno Mars", explanation: "Bruno Mars's debut album was released in 2010." },
        { question: "What is the name of the famous singer who released the album '25'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Adele", explanation: "Adele's '25' was another major commercial success, featuring the hit 'Hello'." },
        { question: "What is the name of the famous singer who released the album '1989'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift's album '1989' marked her full transition to pop music." },
        { question: "What is the name of the famous singer who released the album 'Purpose'?", options: ["Justin Bieber", "The Weeknd", "Ed Sheeran", "Bruno Mars"], answer: "Justin Bieber", explanation: "Justin Bieber's 'Purpose' was a major comeback album for the artist." },
        { question: "What is the name of the famous singer who released the album 'Views'?", options: ["Drake", "Kendrick Lamar", "J. Cole", "Eminem"], answer: "Drake", explanation: "Drake's 'Views' was a massive commercial success, featuring the hit 'Hotline Bling'." },
        { question: "What is the name of the famous singer who released the album 'Damn'?", options: ["Drake", "Kendrick Lamar", "J. Cole", "Eminem"], answer: "Kendrick Lamar", explanation: "Kendrick Lamar's 'Damn' won the Pulitzer Prize for Music." },
        { question: "What is the name of the famous singer who released the album '4:44'?", options: ["Jay-Z", "Kanye West", "Nas", "Eminem"], answer: "Jay-Z", explanation: "Jay-Z's album '4:44' was a critical and commercial success." },
        { question: "What is the name of the famous singer who released the album 'Scorpion'?", options: ["Drake", "Kendrick Lamar", "J. Cole", "Eminem"], answer: "Drake", explanation: "Drake's album 'Scorpion' was released in 2018." },
        { question: "What is the name of the famous singer who released the album 'After Hours'?", options: ["The Weeknd", "Bruno Mars", "Ed Sheeran", "Justin Bieber"], answer: "The Weeknd", explanation: "The Weeknd's album 'After Hours' was a major commercial and critical success." },
        { question: "What is the name of the famous singer who released the album 'Red'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift's album 'Red' was re-released in 2021 as 'Red (Taylor's Version)'." },
        { question: "What is the name of the famous singer who released the album 'Reputation'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift's album 'Reputation' was released in 2017." },
        { question: "What is the name of the famous singer who released the album 'Folklore'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift's surprise album 'Folklore' was released in 2020." },
        { question: "What is the name of the famous singer who released the album 'Lover'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift's album 'Lover' was released in 2019." },
        { question: "What is the name of the famous singer who released the album '1989 (Taylor's Version)'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift re-recorded and released '1989 (Taylor's Version)' in 2023." },
        { question: "What is the name of the famous singer who released the album 'Midnights'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift's album 'Midnights' was released in 2022." },
        { question: "What is the name of the famous singer who released the album 'Evermore'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift's surprise album 'Evermore' was released in 2020, a few months after 'Folklore'." },
        { question: "What is the name of the famous singer who released the album 'Fearless (Taylor's Version)'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift re-recorded and released 'Fearless (Taylor's Version)' in 2021." },
        { question: "What is the name of the famous singer who released the album 'Red (Taylor's Version)'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift re-recorded and released 'Red (Taylor's Version)' in 2021." },
        { question: "What is the name of the famous singer who released the album 'Speak Now (Taylor's Version)'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift re-recorded and released 'Speak Now (Taylor's Version)' in 2023." },
        { question: "What is the name of the famous singer who released the album '1989'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift's album '1989' was released in 2014." },
        { question: "What is the name of the famous singer who released the album 'Lover'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift's album 'Lover' was released in 2019." },
        { question: "What is the name of the famous singer who released the album 'Evermore'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift's surprise album 'Evermore' was released in 2020, a few months after 'Folklore'." },
        { question: "What is the name of the famous singer who released the album 'Fearless (Taylor's Version)'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift re-recorded and released 'Fearless (Taylor's Version)' in 2021." },
        { question: "What is the name of the famous singer who released the album 'Red (Taylor's Version)'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift re-recorded and released 'Red (Taylor's Version)' in 2021." },
        { question: "What is the name of the famous singer who released the album 'Speak Now (Taylor's Version)'?", options: ["Adele", "Taylor Swift", "Rihanna", "Beyoncé"], answer: "Taylor Swift", explanation: "Taylor Swift re-recorded and released 'Speak Now (Taylor's Version)' in 2023." },
    ],
    literature: [
        { question: "Who wrote the play 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare", explanation: "William Shakespeare is considered one of the greatest writers in the English language." },
        { question: "In 'The Hobbit', what is the name of Bilbo's sword?", options: ["Sting", "Glamdring", "Orcrist", "Andúril"], answer: "Sting", explanation: "Sting is the small sword given to Bilbo Baggins by Gandalf." },
        { question: "Who wrote the novel 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"], answer: "Jane Austen", explanation: "Jane Austen is a renowned English novelist." },
        { question: "What is the name of the boy who lives under the stairs in 'Harry Potter'?", options: ["Ron Weasley", "Harry Potter", "Draco Malfoy", "Neville Longbottom"], answer: "Harry Potter", explanation: "Harry Potter lived under the stairs at the Dursley's house." },
        { question: "What is the name of the main character in the novel 'To Kill a Mockingbird'?", options: ["Atticus Finch", "Scout Finch", "Jem Finch", "Boo Radley"], answer: "Scout Finch", explanation: "Jean Louise 'Scout' Finch is the narrator of the novel." },
        { question: "Who wrote the novel '1984'?", options: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "Ray Bradbury"], answer: "George Orwell", explanation: "George Orwell's dystopian novel '1984' was published in 1949." },
        { question: "What is the name of the protagonist in the novel 'The Catcher in the Rye'?", options: ["Holden Caulfield", "Jay Gatsby", "Tom Sawyer", "Huckleberry Finn"], answer: "Holden Caulfield", explanation: "Holden Caulfield is the protagonist and narrator of the novel." },
        { question: "Who wrote the epic poem 'The Odyssey'?", options: ["Homer", "Virgil", "Dante Alighieri", "William Shakespeare"], answer: "Homer", explanation: "Homer is the author of 'The Odyssey', a classic of Western literature." },
        { question: "In 'The Chronicles of Narnia', what is the name of the lion?", options: ["Simba", "Aslan", "Mufasa", "King Louie"], answer: "Aslan", explanation: "Aslan is the creator and true king of the world of Narnia." },
        { question: "Who wrote the novel 'Moby Dick'?", options: ["Herman Melville", "Mark Twain", "Edgar Allan Poe", "Nathaniel Hawthorne"], answer: "Herman Melville", explanation: "Herman Melville's novel 'Moby Dick' was published in 1851." },
        { question: "What is the name of the famous detective in the works of Arthur Conan Doyle?", options: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Philip Marlowe"], answer: "Sherlock Holmes", explanation: "Sherlock Holmes is a fictional detective created by British author Arthur Conan Doyle." },
        { question: "Who wrote the children's book 'Where the Wild Things Are'?", options: ["Dr. Seuss", "Maurice Sendak", "Eric Carle", "Roald Dahl"], answer: "Maurice Sendak", explanation: "Maurice Sendak wrote and illustrated the beloved children's book." },
        { question: "What is the name of the famous playwright who wrote 'Death of a Salesman'?", options: ["Tennessee Williams", "Arthur Miller", "Eugene O'Neill", "Thornton Wilder"], answer: "Arthur Miller", explanation: "Arthur Miller's 'Death of a Salesman' is a classic of American theater." },
        { question: "In 'A Christmas Carol', what is the first name of Scrooge?", options: ["Bob", "Tiny", "Jacob", "Ebenezer"], answer: "Ebenezer", explanation: "Ebenezer Scrooge is the main character in the story." },
        { question: "Who wrote the novel 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner", "John Steinbeck"], answer: "F. Scott Fitzgerald", explanation: "F. Scott Fitzgerald's novel 'The Great Gatsby' was published in 1925." },
        { question: "What is the name of the city where the story of 'The Great Gatsby' takes place?", options: ["New York City", "Boston", "West Egg", "Chicago"], answer: "West Egg", explanation: "The story is set in the fictional town of West Egg on Long Island." },
        { question: "Who wrote the novel 'The Lord of the Rings'?", options: ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin", "Stephen King"], answer: "J.R.R. Tolkien", explanation: "J.R.R. Tolkien's epic fantasy novel 'The Lord of the Rings' was published in 1954." },
        { question: "What is the name of the famous detective in the works of Agatha Christie?", options: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Philip Marlowe"], answer: "Hercule Poirot", explanation: "Hercule Poirot is a fictional Belgian detective created by Agatha Christie." },
        { question: "Who wrote the novel 'One Hundred Years of Solitude'?", options: ["Gabriel García Márquez", "Jorge Luis Borges", "Pablo Neruda", "Isabel Allende"], answer: "Gabriel García Márquez", explanation: "Gabriel García Márquez's novel is a masterpiece of magical realism." },
        { question: "What is the name of the boy who found a golden ticket in 'Charlie and the Chocolate Factory'?", options: ["Augustus Gloop", "Veruca Salt", "Mike Teavee", "Charlie Bucket"], answer: "Charlie Bucket", explanation: "Charlie Bucket is the protagonist of the novel." },
        { question: "Who wrote the novel 'The Old Man and the Sea'?", options: ["Ernest Hemingway", "F. Scott Fitzgerald", "William Faulkner", "John Steinbeck"], answer: "Ernest Hemingway", explanation: "Ernest Hemingway's novella 'The Old Man and the Sea' was published in 1952." },
        { question: "What is the name of the character who says, 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife'?", options: ["Elizabeth Bennet", "Mr. Darcy", "Jane Bennet", "Mrs. Bennet"], answer: "Mrs. Bennet", explanation: "This is the famous opening line of 'Pride and Prejudice'." },
        { question: "Who wrote the novel 'Jane Eyre'?", options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"], answer: "Charlotte Brontë", explanation: "Charlotte Brontë's novel 'Jane Eyre' was published in 1847." },
        { question: "What is the name of the famous author who wrote the 'Harry Potter' series?", options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King"], answer: "J.K. Rowling", explanation: "J.K. Rowling is the author of the 'Harry Potter' series." },
        { question: "What is the name of the famous author who wrote the 'Hunger Games' trilogy?", options: ["Suzanne Collins", "Veronica Roth", "Rick Riordan", "Cassandra Clare"], answer: "Suzanne Collins", explanation: "Suzanne Collins is the author of the 'Hunger Games' trilogy." },
        { question: "What is the name of the famous author who wrote the 'Percy Jackson & the Olympians' series?", options: ["Suzanne Collins", "Veronica Roth", "Rick Riordan", "Cassandra Clare"], answer: "Rick Riordan", explanation: "Rick Riordan is the author of the 'Percy Jackson & the Olympians' series." },
        { question: "What is the name of the famous author who wrote 'The Da Vinci Code'?", options: ["Dan Brown", "Stephen King", "J.K. Rowling", "George R.R. Martin"], answer: "Dan Brown", explanation: "Dan Brown's novel 'The Da Vinci Code' was a global bestseller." },
        { question: "What is the name of the famous author who wrote 'The Stand'?", options: ["Stephen King", "J.K. Rowling", "George R.R. Martin", "Suzanne Collins"], answer: "Stephen King", explanation: "Stephen King's novel 'The Stand' is a classic of the horror genre." },
        { question: "What is the name of the famous author who wrote 'The Lord of the Flies'?", options: ["William Golding", "George Orwell", "Aldous Huxley", "J.R.R. Tolkien"], answer: "William Golding", explanation: "William Golding's novel 'The Lord of the Flies' was published in 1954." },
        { question: "What is the name of the famous author who wrote 'The Giver'?", options: ["Lois Lowry", "Suzanne Collins", "Veronica Roth", "Cassandra Clare"], answer: "Lois Lowry", explanation: "Lois Lowry's novel 'The Giver' is a classic of young adult literature." },
        { question: "What is the name of the famous author who wrote 'The Hunger Games'?", options: ["Suzanne Collins", "Veronica Roth", "Rick Riordan", "Cassandra Clare"], answer: "Suzanne Collins", explanation: "Suzanne Collins is the author of 'The Hunger Games'." },
        { question: "What is the name of the famous author who wrote 'Divergent'?", options: ["Suzanne Collins", "Veronica Roth", "Rick Riordan", "Cassandra Clare"], answer: "Veronica Roth", explanation: "Veronica Roth is the author of the 'Divergent' trilogy." },
        { question: "What is the name of the famous author who wrote 'The Mortal Instruments'?", options: ["Suzanne Collins", "Veronica Roth", "Rick Riordan", "Cassandra Clare"], answer: "Cassandra Clare", explanation: "Cassandra Clare is the author of 'The Mortal Instruments' series." },
        { question: "What is the name of the famous author who wrote 'The Fault in Our Stars'?", options: ["John Green", "J.K. Rowling", "George R.R. Martin", "Stephen King"], answer: "John Green", explanation: "John Green's novel 'The Fault in Our Stars' was a global bestseller." },
        { question: "What is the name of the famous author who wrote 'The Hobbit'?", options: ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin", "Stephen King"], answer: "J.R.R. Tolkien", explanation: "J.R.R. Tolkien's novel 'The Hobbit' was published in 1937." },
        { question: "What is the name of the famous author who wrote 'The Stand'?", options: ["Stephen King", "J.K. Rowling", "George R.R. Martin", "Suzanne Collins"], answer: "Stephen King", explanation: "Stephen King's novel 'The Stand' is a classic of the horror genre." },
        { question: "What is the name of the famous author who wrote 'The Catcher in the Rye'?", options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner"], answer: "J.D. Salinger", explanation: "J.D. Salinger's novel 'The Catcher in the Rye' was published in 1951." },
        { question: "What is the name of the famous author who wrote 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner", "John Steinbeck"], answer: "F. Scott Fitzgerald", explanation: "F. Scott Fitzgerald's novel 'The Great Gatsby' was published in 1925." },
        { question: "What is the name of the famous author who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway"], answer: "Harper Lee", explanation: "Harper Lee's novel 'To Kill a Mockingbird' was published in 1960." },
        { question: "What is the name of the famous author who wrote '1984'?", options: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "Ray Bradbury"], answer: "George Orwell", explanation: "George Orwell's dystopian novel '1984' was published in 1949." },
        { question: "What is the name of the famous author who wrote 'Brave New World'?", options: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "Ray Bradbury"], answer: "Aldous Huxley", explanation: "Aldous Huxley's dystopian novel 'Brave New World' was published in 1932." },
        { question: "What is the name of the famous author who wrote 'Fahrenheit 451'?", options: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "Ray Bradbury"], answer: "Ray Bradbury", explanation: "Ray Bradbury's dystopian novel 'Fahrenheit 451' was published in 1953." },
        { question: "What is the name of the famous author who wrote 'The Lord of the Rings'?", options: ["J.R.R. Tolkien", "George R.R. Martin", "Stephen King", "C.S. Lewis"], answer: "J.R.R. Tolkien", explanation: "J.R.R. Tolkien's epic fantasy novel 'The Lord of the Rings' was published in 1954." },
        { question: "What is the name of the famous author who wrote 'The Chronicles of Narnia'?", options: ["J.R.R. Tolkien", "George R.R. Martin", "Stephen King", "C.S. Lewis"], answer: "C.S. Lewis", explanation: "C.S. Lewis's fantasy series 'The Chronicles of Narnia' was published from 1950 to 1956." },
        { question: "What is the name of the famous author who wrote 'A Song of Ice and Fire'?", options: ["J.R.R. Tolkien", "George R.R. Martin", "Stephen King", "C.S. Lewis"], answer: "George R.R. Martin", explanation: "George R.R. Martin's fantasy series 'A Song of Ice and Fire' is the basis for the TV show 'Game of Thrones'." },
        { question: "What is the name of the famous author who wrote 'The Martian'?", options: ["Andy Weir", "Stephen King", "George R.R. Martin", "Suzanne Collins"], answer: "Andy Weir", explanation: "Andy Weir's novel 'The Martian' was published in 2011." },
        { question: "What is the name of the famous author who wrote 'The Alchemist'?", options: ["Paulo Coelho", "J.K. Rowling", "George R.R. Martin", "Stephen King"], answer: "Paulo Coelho", explanation: "Paulo Coelho's novel 'The Alchemist' was published in 1988." },
        { question: "What is the name of the famous author who wrote 'The Kite Runner'?", options: ["Khaled Hosseini", "J.K. Rowling", "George R.R. Martin", "Stephen King"], answer: "Khaled Hosseini", explanation: "Khaled Hosseini's novel 'The Kite Runner' was published in 2003." },
        { question: "What is the name of the famous author who wrote 'The Girl with the Dragon Tattoo'?", options: ["Stieg Larsson", "J.K. Rowling", "George R.R. Martin", "Stephen King"], answer: "Stieg Larsson", explanation: "Stieg Larsson's novel 'The Girl with the Dragon Tattoo' was published in 2005." },
    ],
    food_drink: [
        { question: "What is the main ingredient in the Italian dish 'pesto'?", options: ["Basil", "Parsley", "Oregano", "Rosemary"], answer: "Basil", explanation: "Pesto is traditionally made from crushed basil leaves, garlic, pine nuts, Parmesan cheese, and olive oil." },
        { question: "What is the national dish of Spain?", options: ["Paella", "Tapas", "Gazpacho", "Tortilla Española"], answer: "Paella", explanation: "Paella is a Valencian rice dish that has become a staple of Spanish cuisine." },
        { question: "Which of the following is not a type of Italian pasta?", options: ["Spaghetti", "Fettuccine", "Rigatoni", "Kimchi"], answer: "Kimchi", explanation: "Kimchi is a traditional Korean side dish." },
        { question: "What is the primary ingredient in the Japanese dish 'sushi'?", options: ["Rice", "Fish", "Seaweed", "Wasabi"], answer: "Rice", explanation: "Sushi is a dish made with vinegared rice, and often includes other ingredients like fish or vegetables." },
        { question: "What is the main ingredient in hummus?", options: ["Lentils", "Chickpeas", "Kidney beans", "Black beans"], answer: "Chickpeas", explanation: "Hummus is a Middle Eastern dip or spread made from cooked, mashed chickpeas blended with tahini." },
        { question: "What is the national drink of Japan?", options: ["Sake", "Whisky", "Beer", "Wine"], answer: "Sake", explanation: "Sake is a traditional Japanese alcoholic beverage made from fermented rice." },
        { question: "What is the main ingredient in the Mexican dish 'guacamole'?", options: ["Tomatoes", "Onions", "Avocado", "Cilantro"], answer: "Avocado", explanation: "Guacamole is a dip made from mashed avocado." },
        { question: "What is the name of the famous French cheese with blue veins?", options: ["Brie", "Camembert", "Roquefort", "Cheddar"], answer: "Roquefort", explanation: "Roquefort is a famous French blue cheese." },
        { question: "What is the main ingredient in the Indian dish 'naan'?", options: ["Rice", "Flour", "Lentils", "Potatoes"], answer: "Flour", explanation: "Naan is a leavened flatbread baked in a tandoor oven." },
        { question: "What is the national drink of Russia?", options: ["Vodka", "Wine", "Beer", "Whisky"], answer: "Vodka", explanation: "Vodka is a distilled alcoholic beverage, often associated with Russia." },
        { question: "What is the main ingredient in the French dish 'crème brûlée'?", options: ["Milk", "Cream", "Eggs", "Sugar"], answer: "Cream", explanation: "Crème brûlée is a rich custard base topped with a layer of caramelized sugar." },
        { question: "What is the main ingredient in the German dish 'sauerkraut'?", options: ["Cabbage", "Potatoes", "Sausage", "Onions"], answer: "Cabbage", explanation: "Sauerkraut is a dish of finely cut raw cabbage that has been fermented." },
        { question: "What is the main ingredient in the Italian dessert 'tiramisu'?", options: ["Mascarpone cheese", "Coffee", "Ladyfingers", "Chocolate"], answer: "Mascarpone cheese", explanation: "Tiramisu is a coffee-flavored Italian dessert made with mascarpone cheese." },
        { question: "What is the national drink of Scotland?", options: ["Whisky", "Wine", "Beer", "Vodka"], answer: "Whisky", explanation: "Scotch whisky is a major export of Scotland." },
        { question: "What is the main ingredient in the Chinese dish 'kung pao chicken'?", options: ["Pork", "Beef", "Chicken", "Shrimp"], answer: "Chicken", explanation: "Kung pao chicken is a stir-fried dish made with chicken." },
        { question: "What is the name of the famous Italian coffee-based dessert?", options: ["Tiramisu", "Panna cotta", "Gelato", "Cannoli"], answer: "Tiramisu", explanation: "Tiramisu is a popular Italian dessert made with coffee-soaked ladyfingers." },
        { question: "What is the main ingredient in the Greek dish 'tzatziki'?", options: ["Yogurt", "Cucumbers", "Garlic", "Lemon juice"], answer: "Yogurt", explanation: "Tzatziki is a dip made from yogurt with cucumbers, garlic, and herbs." },
        { question: "What is the name of the famous dessert made with a single scoop of ice cream on a hot brownie?", options: ["Ice cream sundae", "Banana split", "Brownie sundae", "Ice cream float"], answer: "Brownie sundae", explanation: "A brownie sundae is a dessert made with a brownie, ice cream, and chocolate sauce." },
        { question: "What is the main ingredient in the traditional English dessert 'trifle'?", options: ["Cake", "Jelly", "Custard", "Fruit"], answer: "Cake", explanation: "A trifle is a layered dessert that includes sponge cake soaked in sherry or fruit juice." },
        { question: "What is the main ingredient in the American dish 'macaroni and cheese'?", options: ["Pasta", "Cheese", "Milk", "Butter"], answer: "Pasta", explanation: "Macaroni and cheese is a dish of cooked macaroni pasta and a cheese sauce." },
        { question: "What is the main ingredient in the French dish 'coq au vin'?", options: ["Beef", "Chicken", "Pork", "Lamb"], answer: "Chicken", explanation: "Coq au vin is a French dish of chicken braised with wine, mushrooms, and bacon." },
        { question: "What is the main ingredient in the Mexican drink 'margarita'?", options: ["Tequila", "Vodka", "Rum", "Whisky"], answer: "Tequila", explanation: "A margarita is a cocktail consisting of tequila, triple sec, and lime juice." },
        { question: "What is the name of the famous dessert made with a warm chocolate cake with a molten center?", options: ["Chocolate lava cake", "Chocolate soufflé", "Chocolate fondant", "Chocolate brownie"], answer: "Chocolate lava cake", explanation: "A chocolate lava cake is a popular dessert with a gooey, molten chocolate center." },
        { question: "What is the main ingredient in the Spanish dish 'tapas'?", options: ["Bread", "Cheese", "Meat", "Olives"], answer: "Bread", explanation: "Tapas are a wide variety of appetizers or snacks in Spanish cuisine." },
        { question: "What is the main ingredient in the traditional Italian dish 'lasagna'?", options: ["Pasta", "Cheese", "Meat", "Sauce"], answer: "Pasta", explanation: "Lasagna is a wide, flat pasta noodle." },
        { question: "What is the main ingredient in the Thai dish 'pad thai'?", options: ["Noodles", "Rice", "Meat", "Vegetables"], answer: "Noodles", explanation: "Pad thai is a stir-fried rice noodle dish." },
        { question: "What is the main ingredient in the traditional American dish 'apple pie'?", options: ["Apples", "Flour", "Sugar", "Butter"], answer: "Apples", explanation: "Apple pie is a pie or tart with a filling of apples." },
        { question: "What is the main ingredient in the traditional English dish 'fish and chips'?", options: ["Fish", "Potatoes", "Flour", "Oil"], answer: "Fish", explanation: "Fish and chips is a hot dish of battered fish and deep-fried potatoes." },
        { question: "What is the main ingredient in the traditional Irish drink 'Guinness'?", options: ["Barley", "Hops", "Water", "Yeast"], answer: "Barley", explanation: "Guinness is a dark Irish dry stout that originated in Dublin, Ireland." },
        { question: "What is the main ingredient in the traditional Japanese dish 'ramen'?", options: ["Noodles", "Pork", "Broth", "Vegetables"], answer: "Noodles", explanation: "Ramen is a Japanese noodle soup dish." },
        { question: "What is the main ingredient in the traditional Italian dish 'risotto'?", options: ["Rice", "Pasta", "Cheese", "Mushrooms"], answer: "Rice", explanation: "Risotto is a northern Italian rice dish cooked with broth." },
        { question: "What is the main ingredient in the traditional Mexican dish 'taco'?", options: ["Tortilla", "Meat", "Salsa", "Guacamole"], answer: "Tortilla", explanation: "A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla." },
        { question: "What is the main ingredient in the traditional Chinese dish 'dumplings'?", options: ["Dough", "Meat", "Vegetables", "Shrimp"], answer: "Dough", explanation: "Dumplings are a broad class of dishes consisting of pieces of dough." },
        { question: "What is the main ingredient in the traditional American dish 'hamburger'?", options: ["Bread", "Lettuce", "Tomato", "Beef patty"], answer: "Beef patty", explanation: "A hamburger is a sandwich consisting of a cooked patty of ground meat." },
        { question: "What is the main ingredient in the traditional Indian dish 'curry'?", options: ["Curry powder", "Meat", "Vegetables", "Rice"], answer: "Curry powder", explanation: "Curry is a variety of dishes originating in the Indian subcontinent." },
        { question: "What is the main ingredient in the traditional Japanese dish 'udon'?", options: ["Noodles", "Rice", "Meat", "Vegetables"], answer: "Noodles", explanation: "Udon is a thick noodle made from wheat flour." },
        { question: "What is the main ingredient in the traditional Italian dish 'gnocchi'?", options: ["Flour", "Potatoes", "Cheese", "Eggs"], answer: "Potatoes", explanation: "Gnocchi are a variety of dumplings in Italian cuisine." },
        { question: "What is the main ingredient in the traditional Mexican dish 'quesadilla'?", options: ["Tortilla", "Cheese", "Meat", "Salsa"], answer: "Cheese", explanation: "A quesadilla is a tortilla filled with cheese." },
        { question: "What is the main ingredient in the traditional Chinese dish 'spring rolls'?", options: ["Dough", "Vegetables", "Meat", "Shrimp"], answer: "Dough", explanation: "Spring rolls are a Chinese snack consisting of pieces of dough." },
        { question: "What is the main ingredient in the traditional American dish 'hot dog'?", options: ["Bun", "Hot dog", "Ketchup", "Mustard"], answer: "Hot dog", explanation: "A hot dog is a cooked sausage." },
        { question: "What is the main ingredient in the traditional Indian dish 'samosa'?", options: ["Dough", "Potatoes", "Meat", "Vegetables"], answer: "Dough", explanation: "A samosa is a fried or baked pastry with a savory filling." },
        { question: "What is the main ingredient in the traditional Japanese dish 'tempura'?", options: ["Batter", "Shrimp", "Vegetables", "Fish"], answer: "Batter", explanation: "Tempura is a Japanese dish of seafood or vegetables battered and deep-fried." },
        { question: "What is the main ingredient in the traditional Italian dish 'calzone'?", options: ["Dough", "Cheese", "Meat", "Sauce"], answer: "Dough", explanation: "A calzone is a folded pizza." },
        { question: "What is the main ingredient in the traditional American dish 'corn dog'?", options: ["Batter", "Hot dog", "Ketchup", "Mustard"], answer: "Batter", explanation: "A corn dog is a hot dog on a stick that has been coated in a thick layer of cornmeal batter." },
        { question: "What is the main ingredient in the traditional Indian dish 'tikka masala'?", options: ["Chicken", "Tikka masala sauce", "Rice", "Naan"], answer: "Chicken", explanation: "Tikka masala is a dish of chicken tikka in a spiced curry sauce." },
        { question: "What is the main ingredient in the traditional Japanese dish 'sushi'?", options: ["Rice", "Fish", "Seaweed", "Wasabi"], answer: "Rice", explanation: "Sushi is a dish made with vinegared rice." },
        { question: "What is the main ingredient in the traditional Italian dish 'cannoli'?", options: ["Dough", "Ricotta cheese", "Chocolate", "Pistachios"], answer: "Ricotta cheese", explanation: "Cannoli are a traditional Italian pastry filled with ricotta cheese." },
        { question: "What is the main ingredient in the traditional American dish 'chili'?", options: ["Beans", "Meat", "Tomatoes", "Onions"], answer: "Beans", explanation: "Chili con carne is a stew containing chili peppers, meat, and often tomatoes and beans." },
        { question: "What is the main ingredient in the traditional Indian dish 'biryani'?", options: ["Rice", "Chicken", "Meat", "Vegetables"], answer: "Rice", explanation: "Biryani is a mixed rice dish with spices, meat, or vegetables." },
    ],
    mixed: [
        { question: "What is the capital of France?", options: ["Rome", "Berlin", "Paris", "Madrid"], answer: "Paris", explanation: "Paris is the capital and largest city of France." },
        { question: "What is the name of the galaxy closest to the Milky Way?", options: ["Andromeda Galaxy", "Triangulum Galaxy", "Messier 87", "Sombrero Galaxy"], answer: "Andromeda Galaxy", explanation: "The Andromeda Galaxy is the closest major galaxy to the Milky Way." },
        { question: "Who wrote the play 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare", explanation: "William Shakespeare is considered one of the greatest writers in the English language." },
        { question: "What is the national animal of Australia?", options: ["Kangaroo", "Koala", "Emu", "Wombat"], answer: "Kangaroo", explanation: "The kangaroo is widely recognized as a symbol of Australia." },
        { question: "How many bones are in the adult human body?", options: ["206", "210", "198", "220"], answer: "206", explanation: "An adult human skeleton has 206 bones, whereas a baby is born with around 300 bones." },
        { question: "Which movie features the line, 'May the Force be with you'?", options: ["Star Wars", "The Matrix", "Blade Runner", "Dune"], answer: "Star Wars", explanation: "This iconic line is from the Star Wars franchise, first spoken in 'A New Hope'." },
        { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Pb"], answer: "Au", explanation: "The symbol 'Au' comes from the Latin word 'aurum'." },
        { question: "What is the currency of Japan?", options: ["Yen", "Yuan", "Won", "Baht"], answer: "Yen", explanation: "The official currency of Japan is the Japanese Yen." },
        { question: "Which famous general crossed the Alps with elephants to attack Rome?", options: ["Alexander the Great", "Hannibal", "Julius Caesar", "Napoleon Bonaparte"], answer: "Hannibal", explanation: "Hannibal Barca, a Carthaginian general, famously crossed the Alps to invade Italy." },
        { question: "In which sport would you perform a slam dunk?", options: ["Football", "Tennis", "Basketball", "Golf"], answer: "Basketball", explanation: "A slam dunk is a type of shot in basketball where the player forcefully dunks the ball through the hoop." },
        { question: "Who played the character James Bond in the 2006 film 'Casino Royale'?", options: ["Pierce Brosnan", "Daniel Craig", "Sean Connery", "Roger Moore"], answer: "Daniel Craig", explanation: "Daniel Craig's debut as James Bond was in 'Casino Royale'." },
        { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Lungs"], answer: "Skin", explanation: "The skin is the largest organ of the human body, both by weight and surface area." },
        { question: "The Renaissance originated in which country?", options: ["France", "England", "Italy", "Spain"], answer: "Italy", explanation: "The Renaissance began in Florence, Italy, in the 14th century, leading to a flourishing of art and culture." },
        { question: "What is the main ingredient in the Italian dish 'pesto'?", options: ["Basil", "Parsley", "Oregano", "Rosemary"], answer: "Basil", explanation: "Pesto is traditionally made from crushed basil leaves, garlic, pine nuts, Parmesan cheese, and olive oil." },
        { question: "How many players are on a standard soccer team on the field?", options: ["9", "10", "11", "12"], answer: "11", explanation: "A standard soccer team has 11 players on the field, including the goalkeeper." },
        { question: "What is the name of the main antagonist in 'The Silence of the Lambs'?", options: ["Norman Bates", "Hannibal Lecter", "Jigsaw", "Darth Vader"], answer: "Hannibal Lecter", explanation: "Hannibal Lecter is a brilliant psychiatrist and cannibalistic serial killer." },
        { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"], answer: "Mitochondria", explanation: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions." },
        { question: "What is the boiling point of water in Celsius?", options: ["0°C", "50°C", "100°C", "212°C"], answer: "100°C", explanation: "At standard atmospheric pressure, water boils at 100°C (212°F)." },
        { question: "What is the longest river in the world?", options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"], answer: "Nile River", explanation: "For many years, the Nile River in Africa was considered the longest, though recent studies suggest the Amazon might be longer." },
        { question: "Who directed the 1994 film 'Pulp Fiction'?", options: ["Martin Scorsese", "Steven Spielberg", "Quentin Tarantino", "Alfred Hitchcock"], answer: "Quentin Tarantino", explanation: "Quentin Tarantino wrote and directed the highly influential film 'Pulp Fiction'." },
        { question: "The city of Constantinople is now known by what name?", options: ["Cairo", "Athens", "Istanbul", "Beirut"], answer: "Istanbul", explanation: "Constantinople, the capital of the Byzantine Empire, was renamed Istanbul after its conquest by the Ottoman Empire." },
        { question: "What is the primary ingredient in the Japanese dish 'sushi'?", options: ["Rice", "Fish", "Seaweed", "Wasabi"], answer: "Rice", explanation: "Sushi is a dish made with vinegared rice, and often includes other ingredients like fish or vegetables." },
        { question: "What sport is associated with the term 'birdie'?", options: ["Tennis", "Golf", "Badminton", "Cricket"], answer: "Golf", explanation: "A birdie is a term used when a player completes a hole in one stroke under par." },
        { question: "Which animated film features a clownfish named Nemo?", options: ["Shrek", "Finding Nemo", "Toy Story", "The Lion King"], answer: "Finding Nemo", explanation: "'Finding Nemo' tells the story of an overprotective clownfish searching for his lost son, Nemo." },
        { question: "What is the name of the famous French cheese with blue veins?", options: ["Brie", "Camembert", "Roquefort", "Cheddar"], answer: "Roquefort", explanation: "Roquefort is a famous French blue cheese." },
        { question: "Who was the primary author of the U.S. Declaration of Independence?", options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"], answer: "Thomas Jefferson", explanation: "Thomas Jefferson was the principal author of the Declaration of Independence." },
        { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O", explanation: "Water is a chemical compound consisting of two hydrogen atoms and one oxygen atom." },
        { question: "Who wrote the novel 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner", "John Steinbeck"], answer: "F. Scott Fitzgerald", explanation: "F. Scott Fitzgerald's novel 'The Great Gatsby' was published in 1925." },
        { question: "The fall of the Western Roman Empire is traditionally dated to what year?", options: ["410 AD", "476 AD", "500 AD", "525 AD"], answer: "476 AD", explanation: "The year 476 AD is often cited as the end of the Western Roman Empire when the last emperor was deposed." },
        { question: "What is the main ingredient in the French dish 'crème brûlée'?", options: ["Milk", "Cream", "Eggs", "Sugar"], answer: "Cream", explanation: "Crème brûlée is a rich custard base topped with a layer of caramelized sugar." },
        { question: "What is the name of the person who officiates a game of tennis?", options: ["Umpire", "Referee", "Judge", "Chairman"], answer: "Umpire", explanation: "The umpire is the official in a game of tennis." },
        { question: "What is the name of the famous author who wrote the 'Harry Potter' series?", options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King"], answer: "J.K. Rowling", explanation: "J.K. Rowling is the author of the 'Harry Potter' series." },
        { question: "What is the main ingredient in the German dish 'sauerkraut'?", options: ["Cabbage", "Potatoes", "Sausage", "Onions"], answer: "Cabbage", explanation: "Sauerkraut is a dish of finely cut raw cabbage that has been fermented." },
        { question: "What is the largest country in the world by land area?", options: ["China", "United States", "Canada", "Russia"], answer: "Russia", explanation: "Russia is the largest country, spanning over 17 million square kilometers." },
        { question: "What is the main ingredient in the Italian dessert 'tiramisu'?", options: ["Mascarpone cheese", "Coffee", "Ladyfingers", "Chocolate"], answer: "Mascarpone cheese", explanation: "Tiramisu is a coffee-flavored Italian dessert made with mascarpone cheese." },
        { question: "Which famous landmark is located in Paris, France?", options: ["The Colosseum", "The Great Wall", "The Eiffel Tower", "The Statue of Liberty"], answer: "The Eiffel Tower", explanation: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris." },
        { question: "How many teeth does an adult human have?", options: ["28", "30", "32", "34"], answer: "32", explanation: "An adult human typically has 32 permanent teeth, including wisdom teeth." },
        { question: "What is the name of the rapper who released the album 'To Pimp a Butterfly'?", options: ["Drake", "Kendrick Lamar", "Eminem", "J. Cole"], answer: "Kendrick Lamar", explanation: "Kendrick Lamar's album 'To Pimp a Butterfly' was critically acclaimed." },
        { question: "What is the main ingredient in the Italian dish 'naan'?", options: ["Rice", "Flour", "Lentils", "Potatoes"], answer: "Flour", explanation: "Naan is a leavened flatbread baked in a tandoor oven." },
        { question: "Who wrote the novel 'The Old Man and the Sea'?", options: ["Ernest Hemingway", "F. Scott Fitzgerald", "William Faulkner", "John Steinbeck"], answer: "Ernest Hemingway", explanation: "Ernest Hemingway's novella 'The Old Man and the Sea' was published in 1952." },
        { question: "What is the name of the famous boxer who was known as 'The Greatest'?", options: ["Muhammad Ali", "Mike Tyson", "Joe Frazier", "George Foreman"], answer: "Muhammad Ali", explanation: "Muhammad Ali was an American professional boxer and activist." },
        { question: "What is the largest living organism on Earth?", options: ["Blue whale", "Giant sequoia", "A honey fungus", "African elephant"], answer: "A honey fungus", explanation: "A single specimen of the honey fungus in Oregon covers over 2,200 acres and is considered the world's largest living organism." },
        { question: "What is the official language of the United States?", options: ["English", "Spanish", "French", "None"], answer: "None", explanation: "The United States has no official language at the federal level." },
        { question: "Which band sang the hit song 'Hotel California'?", options: ["Eagles", "Led Zeppelin", "The Rolling Stones", "The Beatles"], answer: "Eagles", explanation: "'Hotel California' is a famous song by the Eagles." },
        { question: "Which famous rock and roll musician was known for his 'duckwalk'?", options: ["Elvis Presley", "Chuck Berry", "Little Richard", "Jerry Lee Lewis"], answer: "Chuck Berry", explanation: "Chuck Berry popularized the duckwalk during his performances." },
        { question: "What is the name of the famous tennis tournament held in London?", options: ["The French Open", "The US Open", "Wimbledon", "The Australian Open"], answer: "Wimbledon", explanation: "Wimbledon is the oldest tennis tournament in the world." },
        { question: "What is the name of the smallest country in the world?", options: ["Monaco", "Nauru", "Vatican City", "San Marino"], answer: "Vatican City", explanation: "Vatican City is an independent city-state enclaved within Rome, Italy." },
        { question: "What is the main component of natural gas?", options: ["Ethane", "Propane", "Methane", "Butane"], answer: "Methane", explanation: "Methane is the principal component of natural gas." },
    ],
};

// Event Listeners for Main Menu
topicButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' from all buttons
        topicButtons.forEach(btn => btn.classList.remove('selected'));
        // Add 'selected' to the clicked button
        button.classList.add('selected');
        currentTopic = button.dataset.topic;
        startButton.disabled = false;
        questionCountInput.max = allQuestions[currentTopic].length;
        if (parseInt(questionCountInput.value) > allQuestions[currentTopic].length) {
            questionCountInput.value = allQuestions[currentTopic].length;
        }
    });
});

playerNameInput.addEventListener('input', () => {
    if (playerNameInput.value.trim() !== '' && currentTopic !== '') {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
});

questionCountInput.addEventListener('input', () => {
    if (playerNameInput.value.trim() !== '' && currentTopic !== '') {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
});

startButton.addEventListener('click', () => {
    if (playerNameInput.value.trim() === '') {
        alert("Please enter your name to start the quiz.");
        return;
    }
    const questionCount = parseInt(questionCountInput.value);
    if (isNaN(questionCount) || questionCount < 1 || questionCount > allQuestions[currentTopic].length) {
        alert(`Please enter a number of questions between 1 and ${allQuestions[currentTopic].length}.`);
        return;
    }

    startSound.play();
    bgMusic.play();
    questions = shuffleArray(allQuestions[currentTopic]).slice(0, questionCount);
    score = 0;
    currentQuestionIndex = 0;
    userAnswers = [];
    
    gameTitle.textContent = `Quiz Quest - ${currentTopic.charAt(0).toUpperCase() + currentTopic.slice(1)}`;
    mainMenu.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    displayQuestion();
    updateProgress();
});

// Fullscreen button functionality
fullscreenButton.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        gameContainer.requestFullscreen().catch(err => {
            alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    }
});

// Quiz Game Logic
function displayQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionElement.textContent = questionData.question;
    optionsContainer.innerHTML = '';
    explanationElement.textContent = '';
    nextButton.style.display = 'none';

    // Shuffle options to prevent cheating
    const shuffledOptions = shuffleArray(questionData.options);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(button, option));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedButton, selectedAnswer) {
    if (selectedButton.disabled) return;

    const questionData = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === questionData.answer;

    if (isCorrect) {
        score++;
        correctSound.play();
        selectedButton.classList.add('correct-permanent');
    } else {
        wrongSound.play();
        selectedButton.classList.add('incorrect-permanent');
        // Find and highlight the correct answer
        const correctButton = Array.from(optionsContainer.children).find(btn => btn.textContent === questionData.answer);
        if (correctButton) {
            correctButton.classList.add('correct-permanent');
        }
    }

    // Disable all options and show explanation
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });

    // Store user's answer and whether it was correct
    userAnswers.push({
        question: questionData.question,
        correctAnswer: questionData.answer,
        userAnswer: selectedAnswer,
        isCorrect: isCorrect
    });

    explanationElement.textContent = questionData.explanation;
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        updateProgress();
    } else {
        showResults();
    }
});

// Hint button logic
hintButton.addEventListener('click', () => {
    const questionData = questions[currentQuestionIndex];
    const options = Array.from(optionsContainer.children);
    const incorrectOptions = options.filter(btn => btn.textContent !== questionData.answer);
    
    if (incorrectOptions.length > 1) {
        // Randomly remove one incorrect option
        const randomIndex = Math.floor(Math.random() * incorrectOptions.length);
        const optionToRemove = incorrectOptions[randomIndex];
        optionToRemove.style.display = 'none';
        hintButton.disabled = true;
    }
});

endButton.addEventListener('click', () => {
    showResults();
});

function updateProgress() {
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex} of ${questions.length}`;
    if (currentQuestionIndex === 0) {
        progressText.textContent = `Question 1 of ${questions.length}`;
    }
}

// Results and Leaderboard Logic
function showResults() {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    finishSound.play();
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    scoreText.textContent = `You scored ${score} out of ${questions.length}!`;
    displaySummary();
    saveHighScore();
    displayLeaderboard();
}

function displaySummary() {
    summaryList.innerHTML = '';
    userAnswers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = `Q: ${answer.question} | Your Answer: ${answer.userAnswer} | Correct Answer: ${answer.correctAnswer}`;
        li.classList.add(answer.isCorrect ? 'correct' : 'incorrect');
        summaryList.appendChild(li);
    });
}

restartButton.addEventListener('click', () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    resultsContainer.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    // Reset inputs and buttons
    playerNameInput.value = '';
    questionCountInput.value = '5';
    startButton.disabled = true;
    topicButtons.forEach(btn => btn.classList.remove('selected'));
    currentTopic = '';
});

// Local Storage for High Scores
function getLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
    return leaderboard;
}

function saveHighScore() {
    const leaderboard = getLeaderboard();
    const newEntry = {
        name: playerNameInput.value.trim(),
        score: score,
        topic: currentTopic,
        date: new Date().toLocaleString()
    };
    
    leaderboard.push(newEntry);
    
    // Sort by score (descending)
    leaderboard.sort((a, b) => b.score - a.score);
    
    // Keep only the top 10 scores
    const topScores = leaderboard.slice(0, 10);
    localStorage.setItem('quizLeaderboard', JSON.stringify(topScores));
}

function displayLeaderboard() {
    const leaderboard = getLeaderboard();
    leaderboardList.innerHTML = '';
    if (leaderboard.length === 0) {
        leaderboardList.innerHTML = '<li>No high scores yet!</li>';
    } else {
        leaderboard.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `${entry.name} - ${entry.score} on ${entry.topic}`;
            leaderboardList.appendChild(li);
        });
    }
}

resetLeaderboardButton.addEventListener('click', () => {
    localStorage.removeItem('quizLeaderboard');
    displayLeaderboard();
});

// Utility function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initial state on page load
document.addEventListener('DOMContentLoaded', () => {
    displayLeaderboard();
    bgMusic.play();
    bgMusic.pause(); // Pause it immediately so it doesn't play on load
});
