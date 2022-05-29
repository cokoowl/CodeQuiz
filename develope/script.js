//homescreen to launch quiz
const rootEl = document.getElementById('root');
let quizBtn = document.getElementById('startQuiz');
let submitBtn = document.getElementById('submitBtn');
let timerEl = document.getElementById('timer');
let timeLeft = 69;
let answerList = document.getElementById('answerList');
let feedback = document.getElementById('feedback');

let resultContent = document.getElementById('result');
let quizContent = document.getElementById('quiz');
let welcomeScreen = document.getElementById('welcomeScreen');

let scoreOutput = document.getElementById('score');
let questionPrompt = document.getElementById('question');
let score = 0;

let nameInput = document.getElementById('nameInput');
let highScoreList = document.getElementById('highScoreList');

quizContent.style.display = 'none';
resultContent.style.display = 'none';

//quiz questions in array
let currentQuestionIndex = 0;

const questions = [
  {
    ask: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts'
  },
  {
    ask: 'The condition in an if/else statement is enclosed within _____.',
    choices: ['" "', '( )', '{ }', '[ ]'],
    answer: '( )'
  },
  {
    ask: 'Arrays in JavaScript can be used to store  _____.',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer: 'all of the above'
  },
  {
    ask: 'String values must be enclosed wihin _____ when being assigned to variable.',
    choices: [',', '{ }', '" "', '( )'],
    answer: '" "'
  },
  {
    ask: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal/bash', 'for loops', 'console log'],
    answer: 'console log'
  }
];

//reset the settings for start of new game 
function init() {
  //set global variables to starting
  score = getScores();
  timeLeft = 0;
  score = 0;
  currentQuestionIndex = 0;
}

// timer function
function setTime() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function
      // return;
    }

  }, 1500);
}


//start button > start the quiz and timer
quizBtn.addEventListener('click', function () {
  console.log(quizBtn);
  startQuiz();
  setTime();
  quizBtn.style.display = 'none';
  welcomeScreen.style.display = 'none';
  quizContent.style.display = 'block';
}, 1000);

//function to generate the quiz
function startQuiz() {
  displayQuestions();
};

// displayQuestion function: goes through all 5 questions
function displayQuestions() {
  questionPrompt.innerText = questions[currentQuestionIndex].ask;

  for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
    let answerButton = document.createElement("button");
    answerButton.textContent = questions[currentQuestionIndex].choices[i];
    answerButton.className = "choices"
    answerButton.classList.add("choices");
    answerList.appendChild(answerButton);
  }
}

// remove existing button choices on screen before new ones appear
function removeChoices() {
  let choicesEl = document.querySelectorAll(".choices");
  for (let i = 0; i < choicesEl.length; i++) {
    choicesEl[i].remove()
  };
};

let choicesEl = document.querySelector('.choices')


// choosing anwers and ending the quiz content
answerList.addEventListener("click", function (event) {
  console.log(event);
  if (event.target.classList.contains('choices')) {
    const choices = event.target.textContent;
    if (choices === questions[currentQuestionIndex].answer) {
      console.log('🚀 yup 🚀');
      feedback.textContent = "🚀 yup 🚀";
      score += 2; //number arbiturary
    } else {
      console.log('💩 nope 💩');
      timeLeft -= 2;
      feedback.textContent = "💩 nope 💩";
    };
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      removeChoices();
      displayQuestions();
    } else {
      //stop the timer & hide quiz content
      quizContent.style.display = 'none';
      resultContent.style.display = 'block';
      //print score
      scoreOutput.innerHTML = "final score is " + score;

    }
  }
});

// button to storeScore
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  storeScore();
});

let latestScoreBoard = [];

//pushing values to localStorage
//turning score number into string format
function storeScore() {
  let user = {
    name: nameInput.value,
    score: score
  };
  console.log(user);
  latestScoreBoard.push(user);
  console.log(latestScoreBoard)
  localStorage.setItem('userScore', JSON.stringify(latestScoreBoard));
  nameInput.value = '';
};

//button to view scores from localStoreage on the page in a list 
viewScoreBtn.addEventListener("click", function () {
  let scoreArr = JSON.parse(localStorage.getItem('userScore') || "[]");

  for (i=0; i < scoreArr.length; i++) {
    let scoreArrItem = document.createElement("li");
    scoreArrItem.textContent = (`${scoreArr[i].name}: ${scoreArr[i].score}`);
    highScoreList.appendChild(scoreArrItem); 
  } 

});