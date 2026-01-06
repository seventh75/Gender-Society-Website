const questions = [
  {
    question: ") An assumption towards a particular group of people.",
    answers: [
      { text: "a) Media", correct: false },
      { text: "b) Stereotype", correct: true },
      { text: "c) Theory", correct: false },
      { text: "d) Representation", correct: false },
    ],
  },
  {
    question: ") When was the Rise of SuperWoman tropes?",
    answers: [
      { text: "a) 1940s", correct: false },
      { text: "b) 1950s", correct: false },
      { text: "c) 1980s", correct: true },
      { text: "d) 1960s", correct: false },
    ],
  },
  {
    question: ") _______ ranks 1st in social media platforms.",
    answers: [
      { text: "a) Facebook", correct: true },
      { text: "b) Instagram", correct: false },
      { text: "c) Thread", correct: false },
      { text: "d) Tiktok", correct: false },
    ],
  },
  {
    question:
      ") Sexual script Theory DOESN'T influences how a person behave in romantic and sexual situations.",
    answers: [
      { text: "a) True", correct: false },
      { text: "b) False", correct: true },
      { text: "c) Neither true nor false", correct: false },
      { text: "d) Undefined", correct: false },
    ],
  },
  {
    question: ") Male and Female are the two biological sex.",
    answers: [
      { text: "a) True", correct: true },
      { text: "b) False", correct: false },
      { text: "c) Half-false and Half-true", correct: false },
      { text: "d) Neither true nor false", correct: false },
    ],
  },
  {
    question: ") This media is the most common media in the contemporary.",
    answers: [
      { text: "a) Printed", correct: false },
      { text: "b) Digital", correct: true },
      { text: "c) Electronic", correct: false },
      { text: "d) Oral", correct: false },
    ],
  },
  {
    question:
      ") ______ are various channels that is used in communication whether to share information, ideas, and entertainment.",
    answers: [
      { text: "a) Medium", correct: false },
      { text: "b) Media", correct: true },
      { text: "c) Instrument", correct: false },
      { text: "d) Method", correct: false },
    ],
  },
  {
    question: ") It is defined by the society.",
    answers: [
      { text: "a) Gender", correct: true },
      { text: "b) Media", correct: false },
      { text: "c) Sex", correct: false },
      { text: "d) Birth", correct: false },
    ],
  },
  {
    question:
      ") In this perspective, it tells that actions that are admired and rewarded are learned by watching and/or imitating others.",
    answers: [
      { text: "a) Cultivation Theory", correct: false },
      { text: "b) Social Learning Theory", correct: true },
      { text: "c) Social Constructionism", correct: false },
      { text: "d) Sexual Script Theory", correct: false },
    ],
  },
  {
    question:
      ") _____ and ____ allows a diverse community, perspective, personality, and identity to flourish along with other groups in the society.",
    answers: [
      { text: "a) Gender, Theory", correct: false },
      { text: "b) Media, Stereotype", correct: false },
      { text: "c) Gender, Society", correct: false },
      { text: "d) Gender, Media", correct: true },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `Your score is : ${score} / ${questions.length}`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
