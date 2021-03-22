var highscores = document.querySelector(".highscores");
var timeLeft = document.querySelector(".time");
var questionBody = document.querySelector(".card-body");
var questionHeader = document.querySelector(".card-header");
var startButton = document.querySelector("#start");

var myQuestion = [
    {
        question: "##",
        choices: {
            a: "<scripting>",
            b: "<script>",
            c: "<javascript>",
        },
        correctAnswer: "b"
    },
    {
        question: "##",
        choices: {
            a: "<scripting>",
            b: "<script>",
            c: "<javascript>",
        },
        correctAnswer: "b"
    },
    {
        question: "##",
        choices: {
            a: "<scripting>",
            b: "<script>",
            c: "<javascript>",
        },
        correctAnswer: "b"
    }
];

startButton.addEventListener("click",function(event) {
    startButton.getElementsByClassName.visibility = "hidden";
    questionHeader.textContent="";
    questionBody.textContent="";
    index= Math.floor(Math.random()*myQuestion.length);


    var choices = new Array(myQuestion[index].choices);

    questionHeader.textContent=(myQuestion[index].question);

    for (i=0; i < choices.length; i++) {
        var answerChoices = (JSON.stringify(choices[i]));
        var A = document.createElement("Button");
        A.textContent = (JSON.parse(answerChoices).a);
        var B = document.createElement("Button");
        B.textContent = (JSON.parse(answerChoices).b);
        var C = document.createElement("Button");
        C.textContent = (JSON.parse(answerChoices).c);

        questionBody.appredChild(A);

        var br = document.createElement("br");
        questionBody.appendChild(br);

        questionBody.appredChild(B);

        var br = document.createElement("br");
        questionBody.appendChild(br);

        questionBody.appredChild(C);

        var br = document.createElement("br");
        questionBody.appendChild(br);
    }
}

