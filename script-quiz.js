// calling data from the HTML
var displayQuestions = document.getElementById("#display-questions");
var timerEl = document.querySelector(".timer");
var highScore = document.getElementById("#high-score");
var viewScore = document.getElementById("#score-results");
var startButton = document.getElementById("start-button");
var saveButton = document.getElementById("#save-button");
var quizSection = document.querySelector(".quiz");
var displayQuestions = document.getElementById("#display-questions");
var answer1 = document.getElementById("#answer1");
var answer2 = document.getElementById("#answer2");
var answer3 = document.getElementById("#answer3");
var answer4 = document.getElementById("#answer4");
var gameOver = document.getElementById("#game-over");
var scoreResults = document.getElementById("#score-results");

var questionIndex = 0;
var secondsLeft = 30;
var correct = 0;
var incorrect = 0;

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

//clicking on answers and check if correct
answer1.addEventListener("click", checkAnswer)
answer2.addEventListener("click", checkAnswer)
answer3.addEventListener("click", checkAnswer)
answer4.addEventListener("click", checkAnswer)

// save user info
saveButton.addEventListener("click", saveUser)

// View time left
// function setTimer() {
//     timerEl.textContent = secondsLeft;
// }

// click on start button to show questions
startButton.addEventListener("click", function(){
    quizSection.style.display="block"
})

//function start quiz

// setting up the timer
function startTime() {
    timer = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timer);
            return 0;
        }
    }, 1000);
}

startTime();

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