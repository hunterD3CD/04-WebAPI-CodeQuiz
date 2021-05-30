var viewScore = document.querySelector("#viewScore");
viewScore.addEventListener("click", function () {
  alert("button click");
});
// --------------------------Select All Elemets---------------------------------------
// 0.header
var counter = document.getElementById("counter");
var viewScoreBtn = document.getElementById("viewScore");
// 1.start page
var startPage = document.getElementById("startPage");
var startBtn = document.getElementById("startBtn");
// 2.quiz page
var quizPage = document.getElementById("quizPage");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var resultE1 = document.getElementById("result");
// 3.end page
var quizEndPage = document.getElementById("quizEndPage");
var finalScore = document.getElementById("finalScore");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submitBtn");
// 4.score page
var scorePage = document.getElementById("scorePage");
var scoreDisplayName = document.getElementById("highScoreInitial");
var scoreDisplayScore = document.getElementById("highScoreScore");
var goBackBtn = document.getElementById("goBack");
var ClearBtn = document.getElementById("clearHighscore");

// --------------------------Create Questions Array-----------------------------------
var quizQuestions = [
  {
    question: "Which of the following is an advantage of using JavaScript?",
    choiceA: "less server interaction",
    choiceB: "immediate feedback to the visitors",
    choiceC: "increased interactivity",
    choiceD: "all of the above",
    correctAnswer: "C",
  },
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    choiceA: "while()",
    choiceB: "loop()",
    choiceC: "forEach()",
    choiceD: "None of the above",
    correctAnswer: "C",
  },
  {
    question:
      "Which of the following function of String object returns the calling string value converted to lower case?",
    choiceA: "toLocaleLowerCase()",
    choiceB: "toLowerCase()",
    choiceC: "toString()",
    choiceD: "substring()",
    correctAnswer: "B",
  },
  {
    question:
      "Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
    choiceA: "concat()",
    choiceB: "pop()",
    choiceC: "push()",
    choiceD: "some()",
    correctAnswer: "A",
  },
];

// --------------------------------Render Questions-----------------------------------
// other variable
var score = 0;
var timeLeft = 75;
var currentQuestionIndex = 0;
var finalQuestionIndex = quizQuestions.length;
var timerInterval;
// function: change the page; cycles the quiz array to generate question and answer
function renderQuestion() {
  quizEndPage.style.display = "none";
  if (currentQuestionIndex === finalQuestionIndex) {
    return showScore();
  }

  var currentQuestion = quizQuestions[currentQuestionIndex];
  question.innerHTML = "<p>" + currentQuestion.question + "</p>";
  choiceA.innerHTML = currentQuestion.choiceA;
  choiceB.innerHTML = currentQuestion.choiceB;
  choiceC.innerHTML = currentQuestion.choiceC;
  choiceD.innerHTML = currentQuestion.choiceD;
}

// --------------------------------Start the Quiz-----------------------------------
// function: change the page; start counting
function startQuiz() {
  quizEndPage.style.display = "none";
  startPage.style.display = "none";
  renderQuestion();

  // Counter Render
  timerInterval = setInterval(function () {
    timeLeft--;
    counter.textContent = "time:" + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);

  quizPage.style.display = "block";
}
// --------------------------------Quiz End page-----------------------------------
// function: change the page; show your fina score and ask for initial
function showScore() {
  quizPage.style.display = "none";
  quizEndPage.style.display = "flex";
  clearInterval(timerInterval);
  finalScore.innerHTML = "Your final score is" + score;
  initials.value = "";
}
// event: submit your initial and score
submitBtn.addEventListener("click", function highscore() {
  if (initials.value === "") {
    alert("You mush enter an initial");
    return false;
  } else {
    var savedHighscores =
      JSON.parse(localStorage.getItem("savedHighscores")) || [];
    var currentUser = initials.value.trim();
    var currentHightscore = {
      name: currentUser,
      score: score,
    };
    // change page to score list
    quizEndPage.style.display = "none";
    scorePage.style.display = "block";
    savedHighscores.push(currentHightscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    generateHighscores();
  }
});

// function: clear the list and generate a new high score list from local storage
function generateHighscores() {
  scoreDisplayName.innerHTML = "";
  scoreDisplayScore.innerHTML = "";
  var highscore = JSON.parse(localStorage.getItem("saveHighscores")) || [];
  for (i = 0; i < highscores.length; i++) {
    var newNameSpan = document.createElement("li");
    var newScoreSpan = document.createElement("li");
    newNameSpan.textContent = highscores[i].name;
    newScoreSpan.textContent = highscore[i].score;
    scoreDisplayName.appendChild(newNameSpan);
    scoreDisplayScore.appendChild(newScoreSpan);
  }
}

// --------------------------------Score page-----------------------------------
// function: display the hight scores
function showHighscore() {
  startPage.style.display = "none";
  quizEndPage.style.display = "none";
  scorePage.style.display = "block";
  generateHighscores();
}
// function: clear high scores
function clearScore() {
  window.localStorage.clear();
  scoreDisplayName.textContent = "";
  scoreDisplayScore.textContent = "";
}
// function: go back and replay the quiz
function replayQuiz() {
  scorePage.style.display = "none";
  quizEndPage.style.display = "none";
  startPage.style.display = "flex";
  timeLeft = 75;
  score = 0;
  currentQuestionIndex = 0;
}
