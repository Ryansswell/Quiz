var highscores = document.querySelector(".highscores");
var timeLeft = document.querySelector(".time");
var questionBody = document.querySelector(".card-body");
var questionHeader = document.querySelector(".card-header");
var startButton = document.querySelector("#start");
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex
var clock = document.getElementById("clock")
var secondsLeft = 50;

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = Question.sort(() => Math.random() - .5)
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    setTime();
}
currentQuestionIndex = 0

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.choices.forEach(answer =>  {
        var button = document.createElement("button")
        button.innerText = answer 
        button.classList.add("button")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    console.log("select answer")
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    currentQuestionIndex++;
    setNextQuestion();
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })  
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}


function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      clock.textContent = secondsLeft;
    
      if((secondsLeft <= 0) || (currentQuestionIndex >= 5)) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

var Question = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: [
             "<strings>",
             "<booleans>",
             "<alerts>",
             "<number>"
        ],
        correctAnswer: "<alerts>"
    },
    {
        question: "The condition in an if/else statement",
        choices: [
             "<quotes>",
             "<curly brackets>",
             "<parentheses>",
             "<square brackets>",
      ],
        correctAnswer: "<parentheses>"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: [
             "<numbers and strings>",
             "<other arrays>",
             "<booleans>",
             "<all the above>",
        ],
        correctAnswer: "<all the above>"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: [
             "<commas>",
             "<curly brackets>",
             "<quotes>",
             "<parentheses>",
        ],
        correctAnswer: "<quotes>"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
             "<JavaScript>",
             "<Terminal/Bash>",
             "<for loops>",
             "<console.log>",
        ],
        correctAnswer: "<console.log>"
    }
];


function saveLastInitials() {
    var highscores = 0;
  }


  

























