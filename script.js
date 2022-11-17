//Start Page Global Variables
var startBtn = document.getElementById("startBtn");
var homeContainer = document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionText = document.getElementById("questionText");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var score = 0;
let i =0;
/*
   //Points calculator
    var points = function(){
    score = score + 10;
    console.log("You have " + score + " points!");
    };
var time_remaining = 75;
var timerInterval;
var end = false;
var timer = function() {
     timerInterval = setInterval(() => {
        if (end === false) {
            timer_el.textContent = time_remaining;
            time_remaining --;
            return time_remaining;
        } else {
            timer_el.textContent = "";
            clearInterval(timerInterval);
        }
    }, 1000);

    console.log("TIMER STARTED")
    if (end === true){
        timer_el.textContent = time_remaining;
    }
}*/

//Array of quiz questions
var quizQuestions = [{
    questions: "Commonly used data types DO NOT include:",
    answerChoices: ["A: strings", "B: booleans", "C: alerts", "D: numbers"],
    correctAnswer: 2 },
{
    questions: "The condition of an if / else statement is enclosed within ___.",
    answerChoices: ["A: quotes", "B: curly brackets", "C: parentheses", "D: square brackets"],
    correctAnswer: 2 },
    
{
    questions: "Arrays in Javascript can be used to store ___.",
    answerChoices: ["A: numbers and strings", "B: other arrays", "C: booleans", "D: all of the above"],
    correctAnswer: 3 },
{
    questions: "String values must be enclosed within ___ when being assigned to variables.",
    answerChoices: ["A: commas","B: curly brackets", "C: quotes", "D: parentheses"],
    correctAnswer: 3 },
{
    questions: "A very useful tool used during development and debugging for printing content to the debugger is___.",
    answerChoices:[ "A: Javascript", "B: terminal/bash", "C: for loops", "D: console.log"],
    correctAnswer: 3 }
];


// Remove Home Page Container & Start Quiz
startBtn.addEventListener("click",function() {
    homeContainer.remove();
    quizContainer.style.display = "block";
    startQuizQuestions();
});


//Display quiz questions and answer choices
function startQuizQuestions(){
questionText.textContent = quizQuestions[i].questions;
choiceA.textContent = quizQuestions[i].answerChoices[0];
choiceB.textContent = quizQuestions[i].answerChoices[1];
choiceC.textContent = quizQuestions[i].answerChoices[2];
choiceD.textContent = quizQuestions[i].answerChoices[3];
};

//AddEventListener for all answer choices to move through questions

//Answer Choice A
choiceA.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    //Check if user input is correct answer
    if (0 === correctAnswer){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
        document.getElementById("button").style.background='#13E348';
    

}else{
    document.getElementById("userResponse").innerHTML = "Incorrect";
}
if (i>= quizQuestions.length -1){
quiz_over();
} else {
    i++
    startQuizQuestions();
};

});

//Answer Choice B
choiceB.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    //Check if user input is correct answer
    if (1 === correctAnswer){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
    

}else{
    document.getElementById("userResponse").innerHTML = "Incorrect";
}
if (i>= quizQuestions.length -1){
    quiz_Over();
} else {
    i++
    startQuizQuestions();
};

});

//Answer Choice C
choiceC.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    //Check if user input is correct answer
    if (2 === correctAnswer){
        document.getElementById("choiceC").style.background='#13E348';
        document.getElementById("userResponse").innerHTML = "That is Correct!";

}else{
    document.getElementById("userResponse").innerHTML = "Incorrect";
}
if (i>= quizQuestions.length -1){
quiz_Over();
} else {
    i++
    startQuizQuestions();
};

});

//Answer Choice D
choiceD.addEventListener('click',function(event){
    event.stopPropagation();
    correctAnswer= quizQuestions[i].correctAnswer;

    //Check if user input is correct answer
    if (3 === correctAnswer){
        document.getElementById("userResponse").innerHTML = "That is Correct!";
    

}else{
    document.getElementById("userResponse").innerHTML = "Incorrect";
}
if (i>= quizQuestions.length -1){
quiz_Over();

} else {
    i++
    startQuizQuestions();
};

});

//Quiz Over
function quiz_Over(){
    quizContainer.remove();
    document.getElementById("endGame").style.display="block";
    
};