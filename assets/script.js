// Assignment Code

//homescreen to launch quiz
let quizBtn = document.getElementById("startQuiz");

// click on the start button to start quiz
// answer buttons and question will be hidden initially
quizBtn.addEventListener("click", function (event)) {
event.defaultPrevented();






}



// content change to first question with 4 options
//timer starts to run

//click on button will log true/false as answer
//any click will take user to next question, if answer wrong, time will be deducted

//when all questions are answered, or the timer reaches 0, then game is over


//when game is over, save initial and score

// initial and scores will be store in localStorage



//questions to be asked
const questions = [{
  id: set1,
  ask: "Commonly used data types DO NOT include:"
answer: [{ text: "strings", isCorrect: false },
  { text: "booleans", isCorrect: false },
  { text: "alerts", isCorrect: true },
  { text: "numbers", isCorrect: false }
  ]
},
{
  id: set2,
  ask: "The condition in an if/else statement is enclosed within _____."
answer: [{ text: "quotes", isCorrect: false },
  { text: "curly brackets", isCorrect: false },
  { text: "parentheses", isCorrect: true },
  { text: "square brackets", isCorrect: false }
  ]
},
{
  id: set3,
  ask: "Arrays in JavaScript can be used to store  _____."
  answer: [{ text: "numbers and strings", isCorrect: false },
  { text: "other arrays", isCorrect: false },
  { text: "booleans", isCorrect: false },
  { text: "all of the above", isCorrect: true }
  ]
},
{
  id: set4,
  ask: "String values must be enclosed within _____ when being assigned to variables."
    answer: [{ text: "commas", isCorrect: false },
  { text: "curly brackets", isCorrect: false },
  { text: "quotes", isCorrect: true },
  { text: "parentheses", isCorrect: false }
  ]
},
{
  id: set5,
  ask: "A very useful tool used during development and debugging for printing content to the debugger is:"
    answer: [{ text: "JavaScript", isCorrect: false },
  { text: "terminal/bash", isCorrect: false },
  { text: "for loops", isCorrect: false },
  { text: "console log", isCorrect: true }
  ]
},


}]
