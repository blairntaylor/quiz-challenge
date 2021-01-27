//Questions, Choices and Answers
var questions = [{
    question: "1. Commonly used data types DO NOT include",
    choices: ["boolean", "number", "string", "iPod"],
    answer: "iPod"
},{
    question: "2. Arrays in Javascript can be used to store ________",
    choices: ["socks", "values", "cheeses", "events"],
    answer: "values"
},{
    question: "3. String values must be enclosed in within ______ when being assigned to variables",
    choices: ["two slices", "earmuffs", "quotes", "brackets"],
    answer: "quotes"
},
]

// questions start at 0 index
varcurrentQuestionsIndex = 0; 
// timer starts at 30 seconds
var secondsLeft = 30;

// START FUNCTION will hide the main div and show the question div and start timer
// GET QUESTION FUNCTION goes through arrays of the questions
// GET QUESTION FUNCTION define current question, displays the question, makes all buttons answer
// CHECK ANSWER FUNCTION checks if the answer is wrong and subtracts time, moves you to the next question index, checks if you are at the end of the array
// END QUIZ FUNCTION clears the timer, displays score, hides question div, displays end div
// SAVE SCORE FUNCTION triggered with save score button
// trigger all functions at the end 




function startQuiz() {
}

function getQuestion() {
        var currentQuestion = questions[currentQuestionIndex];
}

function questionClick(){ //this.value is the button
    if (this.value !== questions[currentQuestionIndex].answer){
        time -- 15;

        if time(time < 0{
            time = 0;
        })
    }
}

currentQuestion.choices.

choiceNode.setAttribute('value", choice); // compare the answer
choiceNode.onclick = questionClick;


//Timer
var timerEl = document.querySelector(".timer");
//counting down from 30 seconds
var seconds = 30;
function timeLeft (){
    var timerInterval = setInterval(function() {
        seconds--; //counting down
        timerEl.textContent = "Time left " + seconds;    
        
        if(seconds === 0) { //stop timer
            clearInterval(timerInterval);
            sendMessage("Quiz Over");
          }
    
        }, 3000);
      }

      choiceEl.innerHTML = ""; //clear the previous choices

//Score Board