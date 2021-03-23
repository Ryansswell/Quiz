var highscores = document.querySelector(".highscores");
var timeLeft = document.querySelector(".time");
var questionBody = document.querySelector(".card-body");
var questionHeader = document.querySelector(".card-header");
var startButton = document.querySelector("#start");

var myQuestion = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: {
            a: "<strings>",
            b: "<booleans>",
            c: "<alerts>",
            d: "<number>"
        },
        correctAnswer: "c"
    },
    {
        question: "The condition in an if/else statement",
        choices: {
            a: "<quotes>",
            b: "<curly brackets>",
            c: "<parentheses>",
            d: "<square brackets>",
        },
        correctAnswer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: {
            a: "<numbers and strings>",
            b: "<other arrays>",
            c: "<booleans>",
            d: "<all the above>",
        },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: {
            a: "<commas>",
            b: "<curly brackets>",
            c: "<quotes>",
            d: "<parentheses>",
        },
        correctAnswer: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: {
            a: "<JavaScript>",
            b: "<Terminal/Bash>",
            c: "<for loops>",
            d: "<console.log>",
        },
        correctAnswer: "d"
    }
];

startButton.addEventListener("click",function(event) {
    startButton.getElementsByClassName.visibility = "hidden";
    questionHeader.textContent="";
    questionBody.textContent="";
    index= Math.floor(Math.random()*myQuestion.length);


    var choices = new Array(myQuestion[index].choices);
    console.log(choices[0].a);

    questionHeader.textContent=(myQuestion[index].question);

    var A = document.createElement("Button");
    A.textContent = choices[0].a;

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
})