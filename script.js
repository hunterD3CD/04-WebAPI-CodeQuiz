var viewScore = document.querySelector("#viewScore");
viewScore.addEventListener("click", function () {
  alert("button click");
});
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
