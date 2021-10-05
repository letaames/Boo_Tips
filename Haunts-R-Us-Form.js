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

        for (var z = 0; z < answerList.length; z++) {
            answerButtons[z].classList.remove('hide')
            answerButtons[z].addEventListener('click', (event) => collectAnswer(answerList.length, event.target.id));
            answerButtons[z].innerText = answerList[z];
        }
    }
}

function goToNext() {
    selectedButton = document.getElementsByClassName('chosen')[0].id.split("-")[1];
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
    buttonInteger = buttonID.split("-")[1]
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
    debugger;
    console.log(questions.length-currentQuestion==1);
    if (questions.length-currentQuestion==1) {
        console.log("in here")
        finishButton.classList.remove('hide');
        nextButton.classList.add('hide')
    }
    else {
        nextButton.classList.remove('hide');
    }
}


function endGame() {
        selectedButton = document.getElementsByClassName('chosen')[0].id.split("-")[1];
        finalAnswerList.push(selectedButton);
        gameStarted = false;
        Array.from(allButtons).forEach(button => {
            button.classList.add('hide');
        });
        question.classList.add('hide');
        calculateScore()
    }

function calculateScore() {
    console.log(finalAnswerList.reduce((a, b) => a + b, 0));
}