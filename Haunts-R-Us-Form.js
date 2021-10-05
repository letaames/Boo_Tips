var startButton = document.getElementById("startBtn");

startButton.addEventListener('click',startGame);

var questionContainerElement = document.getElementById("question-container");

var questionElement = document.getElementById("question");

// var answerButtons = document.getElementByClassName("answerButton");

const questions = [
    "What is 2+2?","What is my birthday?"
];

const answerList = [
    [4,3,2,1],
    ["June", "April", "November"]
];

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}

function setNextQuestion() {
    for (var i = 0; i < questions.length; i++) {
        questionElement.innerText = questions[i];
        questionElement.classList.add("fade-in");
        for (var i = 0; i < answerList.length; i++) {          
                answerButtons[i].classList.remove('hide')
                answerButtons[i].addEventListener('click', collectAnswer(i))
                answerButtons[i].innerText = answerList[i];



            }
        }
    }
        
        



function collectAnswer(buttonID) {


}

