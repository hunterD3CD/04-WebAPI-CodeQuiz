var viewScore = document.querySelector("#viewScore");
viewScore.addEventListener("click", function () {
  alert("button click");
});
// --------------------------Select All Elemets---------------------------------------
// header
var counter = document.getElementById("counter");
var viewScoreBtn = document.getElementById("viewScore");
// 1.start page
var startPage = document.getElementById("startPage");
var startBtn = document.getElementById("startBtn");
// 2.quiz page
var quizPage = document.getElementById("quizPage");
var question = document.getElementById("questions");
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
console.log(quizQuestions[2]);
