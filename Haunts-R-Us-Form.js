let gameStarted = false;

var currentQuestion = 0;

var allButtons = document.getElementsByClassName("btn")

var startButton = document.getElementById("startBtn");

startButton.addEventListener('click', startGame);

var nextButton = document.getElementById("nextBtn")

nextButton.addEventListener('click', goToNext);

var finishButton = document.getElementById("finishBtn");

finishButton.addEventListener('click',endGame);

var questionContainerElement = document.getElementById("question-container");

var questionElement = document.getElementById("question");

var finalAnswerList = [];

var answerButtons = document.getElementsByClassName("answerButton");

let calculatedScore = 0;

var scoreDisplay = document.getElementById("scoreDisplay");

var scoreDisplayContainer = document.getElementById("scoreDisplayContainer");

var displayTexts = document.getElementsByClassName("displayText");


const questions = [
    "What is 2+2?", "What is my birthday?"
];

const allAnswers = [
    [4, 3, 2, 1],
    ["June", "April", "November"]
];

function startGame() {
    console.log('click')
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    gameStarted = true;
    // debugger;
    setNextQuestion()
}

function setNextQuestion() {
    if (currentQuestion < questions.length) {
        questionElement.innerText = questions[currentQuestion];
        questionElement.classList.add("fade-in");
        answerList = allAnswers[currentQuestion];
        questionElement.classList.remove("hide");

        for (var z = 0; z < answerList.length; z++) {
            answerButtons[z].classList.remove('hide')
            answerButtons[z].addEventListener('click', (event) => collectAnswer(answerList.length, event.target.id));
            answerButtons[z].innerText = answerList[z];
            nextButton.classList.add('hide');
        }
    }
}

function goToNext() {
    selectedButton = Number(document.getElementsByClassName('chosen')[0].id.split("-")[1]);
    finalAnswerList.push(selectedButton);
    currentQuestion++;
    Array.from(answerButtons).forEach(button => {
        button.classList.add('hide');
    });
    Array.from(answerButtons).forEach(button => {
        button.classList.remove('chosen');
    });
    Array.from(answerButtons).forEach(button => {
        button.classList.remove('disabled');
    });
    setNextQuestion()
}




function collectAnswer(answerListLength, buttonID) {
    buttonInteger = Number(buttonID.split("-")[1]);
    console.log(buttonInteger)
    for (var i = 0; i < answerListLength; i++) {
        if (i == buttonInteger) {
            answerButtons[i].classList.add('chosen');
            answerButtons[i].classList.remove('disabled');
            moveOn();
        } else {
            answerButtons[i].classList.add('disabled');
            answerButtons[i].classList.remove('chosen');

        }

    }

}

function moveOn() {
    // debugger;
    if (questions.length-currentQuestion==1) {
        finishButton.classList.remove('hide');
        nextButton.classList.add('hide')
    }
    else {
        nextButton.classList.remove('hide');
    }
}


function endGame() {
        selectedButton = Number(document.getElementsByClassName('chosen')[0].id.split("-")[1]);
        finalAnswerList.push(selectedButton);
        gameStarted = false;
        Array.from(allButtons).forEach(button => {
            button.classList.add('hide');
        });
        question.classList.add('hide');
        calculateScore()
    }

function calculateScore() {
    calculatedScore = 0
    calculatedScore = calculatedScore + finalAnswerList[0] * 2;
    calculatedScore = calculatedScore + finalAnswerList[1] + 2;
    displayHauntScore(calculatedScore);
}
function displayHauntScore(calculatedScore) {
    scoreDisplay.innerText = calculatedScore;
    Array.from(displayTexts).forEach(section => {
        section.classList.remove('hide');
    });
    scoreDisplay.classList.add("fade-in");
    scoreDisplayContainer.classList.remove('hide');
    answerGrid.classList.add('hide');
}