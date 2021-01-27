// calling data from the HTML
var displayQuestions = document.querySelector(".display-questions");
var displayChoices = document.querySelector(".display-choices");
var timer = document.querySelector(".timer");
var highScore = document.querySelector(".high-score");
var viewScore = document.querySelector(".score-results");
var startButton = document.querySelector(".start-button");

var questionSelectIndex = 0;
//  array of questions
questionSelect = [
    {"question": "1. Commonly used data types DO NOT include", 
    "choices": ["boolean", "number", "string", "iPod"],
    "answer": "iPod"},
    {"question": "2. Arrays in Javascript can be used to store ________", 
    "choices": ["socks", "values", "cheeses", "events"],
    "answer": "values"},
    {"question": "3. String values must be enclosed in within ______ when being assigned to variables",
    "choices": ["two slices", "earmuffs", "quotes", "brackets"],
    "answer": "quotes"}
];

// questions start at 0 index
varcurrentQuestionsIndex = 0; 
// timer starts at 30 seconds
var secondsLeft = 30;

function setTimer() {
    timerEl.textContent = secondsLeft;
}


// setting up the timer
function startTime() {
    timerEl = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerEl);
            sendMessage();
            return 0;
        }
    }, 1000);
}

// hit start button
startButton.addEventListener ("click", startTime)


// function startGame() {
//     isWin = false;
//     secondsLeft = 30;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
//     renderBlanks()
//     startTimer()
//   }




// Event listener - click start button
// ref startBtn on DOM
// add onclick event

// start timer
// ref timerEl on DOM
//use set interval

// function displayQuestion
//display question and choices
//ref the DOM
//loop thru the questions
//display questions on DOM
//loop thru the choices
//display each choice on DOM

// functionquestionClick
//check correctanswer against user choice
//if answer correct, show next question
// displayQuestion()
// if incorect, subtract time
// time = time - 15

// function e
// when all questions answered, game over
// when time reaches 0 game over
