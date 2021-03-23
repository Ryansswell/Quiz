var highscores = document.querySelector(".highscores");
var timeLeft = document.querySelector(".time");
var questionBody = document.querySelector(".card-body");
var questionHeader = document.querySelector(".card-header");
var startButton = document.querySelector("#start");
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonElement = document.getElementById("answer-buttons")


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
// nextButton.addEventListener("click", () => {
//     currentQuestionIndex++
//     setNextQuestion()
// })

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = Question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}



function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    console.log(question.choices);
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
    // nextButton.classList.add("hide")
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
    // if (shuffledQuestions.length > currentQuestionIndex + 1) {
    //     nextButton.classList.remove("hide")
    // }
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


function startTimer(duration, display) {
    timer = duration, seconds;

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




// startButton.addEventListener("click",function(event) {
//     startButton.getElementsByClassName.visibility = "hidden";
//     questionHeader.textContent="";
//     questionBody.textContent="";
//     index= Math.floor(Math.random()*myQuestion.length);


//     var choices = new Array(myQuestion[index].choices);
//     console.log(choices[0].a);

//     questionHeader.textContent=(myQuestion[index].question);

//     var A = document.createElement("Button");
//     A.textContent = choices[0].a;


    //for (i=0; i < choices.length; i++) {
       // var answerChoices = (JSON.parse(choices[i]));
       // var A = document.createElement("Button");
        // A.textContent = (JSON.parse(answerChoices).a);
        // var B = document.createElement("Button");
        // B.textContent = (JSON.parse(answerChoices).b);
        // var C = document.createElement("Button");
        // C.textContent = (JSON.parse(answerChoices).c);

    //     questionBody.appredChild(A);

    //     var br = document.createElement("br");
    //     questionBody.appendChild(br);

    //     questionBody.appredChild(B);

    //     var br = document.createElement("br");
    //     questionBody.appendChild(br);

    //     questionBody.appredChild(C);

    //     var br = document.createElement("br");
    //     questionBody.appendChild(br);
    // }
//})