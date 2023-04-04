// Test and make sure our script loaded at page load/reload
console.log('Logging');

// declare global variables
var timerTime = 60;//for 60 secs per 1000 milliseconds
// keep track of our current question index of questions asked so we dont duplicate
// boolean variable to see if we start the quiz
var isStarted = false;
var currentQuestionIndex = 0;
// score variable to keep track of score
var score = 0;
// Create variable to hold user input initials
var inputedInitials ='';
// create an array to hold all the questions asked
var questionsAsked = [];

// get our start button
var startButton = document.querySelector('#start');
var stopButton = document.querySelector('#stop');
// get hidden container reference variables
var quizContainer = document.querySelector('#quiz');
var timerContainer = document.querySelector('#timer-container');
var infoContainer = document.querySelector('#info');

// Get all other elements needed as reference variables (variables we created and named whatever we wanted so that we can access them in the html document)
var pageTitle = document.querySelector('#title');
var question = document.querySelector('#question');
var answerOne = document.querySelector('a1');
var answerTwo = document.querySelector('a2');
var answerThree = document.querySelector('a3');
var answerFour = document.querySelector('a4');
var timer = document.querySelector('#timer');
var scoreCard = document.querySelector('#score');
var userInitials = document.querySelector('#initials');

//TODO create a string variable that holds the #score and pre-formatting
var scoreText = `Final Score: ${score}`;

// TODO create a string variable to display the userInitials data
var inputedInitialsText = `User Initials: ${inputedInitials}`;

// Create a startQuiz() function
function displayQuiz(){
    startButton.setAttribute('style', 'display:none;');
    quizContainer.setAttribute('style', 'display:flex;');
    timerContainer.setAttribute('style', 'display:flex;');
    infoContainer.setAttribute('style', 'display:flex;');
    console.log('Quiz Displayed!');
    isStarted = true;
    
}

// function that starts the timer
function timerStart(){
    displayQuiz();
    var timeInterval = setInterval (() => {
        if(timerTime > 0){
            timerTime--;
            timer.textContent = `Time remaining: ${timerTime}`;
            console.log(`Time remaining: ${timerTime}`);
        }
       
        else if(timerTime === 0){
            clearInterval(timeInterval);
            timerTime = 60;
            if(questionsAsked.length === 50){
                alert("Quiz Completed Calculating Results!")
            }
        }
        
    }, 1000);
    console.log('Timer Started!');
    
}
// add event listener to start button
startButton.addEventListener('click', function (event){
    console.log(event.target);
    console.log('Start Button Clicked');
    timerStart();
    
});


