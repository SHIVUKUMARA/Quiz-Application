const quizData = [
  {
    question: "1. Which language runs in browsers ?",
    a: "Python",
    b: "Java",
    c: "Php",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "2. What does HTML stands for ?",
    a: "Hyper Text Markup Language",
    b: "Hyper Text Markdown Language",
    c: "Hyper Text Multiple Language",
    d: "Hyperloop Text Language",
    correct: "a",
  },
  {
    question: "3. which of the form control doesn't use input element ?",
    a: "Checkbox",
    b: "Radio",
    c: "Search",
    d: "Multiline select",
    correct: "d",
  },
  {
    question:
      "4. In HTML Page if background image is smaller than screen what will happen ?",
    a: "It Will not be visible",
    b: "It will be stretched",
    c: "It will be repeated",
    d: "It will be clipped",
    correct: "c",
  },
  {
    question:
      "5. which attribute is used to display text if image is not available ?",
    a: "src",
    b: "img",
    c: "alt",
    d: "href",
    correct: "c",
  },
];

// target DOM properties

let quiz = document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer");
let questionEl = document.getElementById("question");

let a_txt = document.getElementById("a_txt");
let b_txt = document.getElementById("b_txt");
let c_txt = document.getElementById("c_txt");
let d_txt = document.getElementById("d_txt");

let submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// all answer must be clear
function clearAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// method to load questions and answers
function loadQuiz(Data) {
  clearAnswer();
  let curQuizData = Data[currentQuiz];
  questionEl.innerText = curQuizData.question;
  a_txt.innerText = curQuizData.a;
  b_txt.innerText = curQuizData.b;
  c_txt.innerText = curQuizData.c;
  d_txt.innerText = curQuizData.d;
}

loadQuiz(quizData);

// selected answer verification
function selectedAnswer() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// submit handler
submit.addEventListener("click", function () {
  let answer = selectedAnswer();
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz(quizData);
  } else {
    quiz.innerHTML = `<div class="score"><h2>You answered correctly at ${score}/${quizData.length} questions.
    </h2>
    <button onclick="location.reload()" class="btn">Play Again</button>
    </div>`;
  }
});

// Previous button handler
prev.addEventListener("click", function () {
  if (currentQuiz > 0) {
    currentQuiz--;
    loadQuiz(quizData);
  }
});

// Next button handler
next.addEventListener("click", function () {
  if (currentQuiz < quizData.length - 1) {
    currentQuiz++;
    loadQuiz(quizData);
  }
});