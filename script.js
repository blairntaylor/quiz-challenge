// calling data from the HTML
var timerEl = document.querySelector("#time");
var highScore = document.getElementById("high-score");
var viewScore = document.getElementById("score-results");
var startButton = document.getElementById("start-button");
var saveButton = document.getElementById("save-button");
var quizSection = document.getElementById("quiz");
var displayQuestions = document.getElementById("display-questions");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var gameOver = document.getElementById("game-over");
var scoreResults = document.getElementById("score-results");
var main = document.getElementById("main");

var questionIndex = 0;
var secondsLeft = 30;
var correct = 0;
var incorrect = 0;

//  array of questions
var questionSelect = [
    {
    question: "1. Commonly used data types DO NOT include", 
    choices: ["boolean", "number", "string", "iPod"],
    answer: "iPod"
},
    {
    question: "2. Arrays in Javascript can be used to store ________", 
    choices: ["socks", "values", "cheeses", "events"],
    answer: "values"
},
    {
    question: "3. String values must be enclosed in within ______ when being assigned to variables",
    choices: ["two slices", "earmuffs", "quotes", "brackets"],
    answer: "quotes"}
]

//clicking on answers and check if correct
// answer1.addEventListener("click", checkAnswer)
// answer2.addEventListener("click", checkAnswer)
// answer3.addEventListener("click", checkAnswer)
// answer4.addEventListener("click", checkAnswer)

// save user info
// saveButton.addEventListener("click", saveUser)


// click on start button to start time
startButton.addEventListener("click", startTime);


// setting up the timer
function startTime() {
    timer = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);


    main.setAttribute("class", "hidden")

    quizSection.removeAttribute("class", "")
    
    startGame()
}

function startGame() {

    displayQuestions.textContent = questionSelect [questionIndex].question
    answer1.textContent = questionSelect [questionIndex].choices[0]
    answer2.textContent = questionSelect [questionIndex].choices[1]
    answer3.textContent = questionSelect [questionIndex].choices[2]
    answer4.textContent = questionSelect [questionIndex].choices[3]

}

// function displayQuestion
//display question and choices
//ref the DOM
//loop thru the questions
//display questions on DOM
//loop thru the choices
//display each choice on DOM


function checkAnswer() {

}
// functionquestionClick
//check correctanswer against user choice
//if answer correct, show next question
// displayQuestion()
// if incorect, subtract time
// time = time - 15

// function e
// when all questions answered, game over
// when time reaches 0 game over
