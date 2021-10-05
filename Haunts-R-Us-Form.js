let gameStarted = false;

var currentQuestion = 0;

var startButton = document.getElementById("startBtn");

startButton.addEventListener('click', startGame);

var nextButton = document.getElementById("nextBtn")

nextBtn.addEventListener('click', goToNext);

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
    debugger;
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

    gameStarted = false;
}

function goToNext() {
    selectedButton = document.getElementsByClassName('chosen')
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
            nextButton.classList.remove('hide');
            answerButtons[i].classList.remove('disabled')
        } else {
            answerButtons[i].classList.add('disabled');
            answerButtons[i].classList.remove('chosen');

        }

    }

}

