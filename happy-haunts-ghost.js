let previousNum;

let isReady = true;

var chosenFace;

var actualGhost = document.getElementById("actualGhost");

var gravestones = document.getElementsByClassName("gravestone");



for (var i = 0; i < gravestones.length; i++) {
    gravestones[i].addEventListener('click', displayRandomHaunt, false);
}
for (var i = 0; i < gravestones.length; i++) {
    gravestones[i].addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {displayRandomHaunt();}}, false);
}

actualGhost.addEventListener('click', displayRandomFace, false);
actualGhost.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      displayRandomFace();
    }}, false);

function displayRandomHaunt() {
    if (!isReady) return
    let hauntingTypes = ['Eat bites of their leftovers',
    'Go backstage at Coachella',
    'Manifest as butterflies and visit them',
    'Play their favorite song on the radio',
    'Move their items to their rightful locations',
    'Write sweet notes in the fog from their shower',
    "Sing to them",
    "Be their guardian angel",
]
    let randNum = Math.floor(Math.random() * hauntingTypes.length);
    while (randNum === previousNum) {
        randNum=Math.floor(Math.random() * hauntingTypes.length)
    }
    previousNum = randNum;
    let choosenHaunt = hauntingTypes[randNum];
    let text = document.getElementById("hauntDisplay");
    text.classList.add("fade-in");
    text.innerText = choosenHaunt;
    text.tabIndex = 0;
    text.focus();
    isReady = false
    setTimeout(function () {
        text.classList.remove("fade-in");
        text.tabIndex = -1;
        isReady = true;
      },choosenHaunt.length * 100); // Set time out to three seconds to account for the second the element fades in
  }

function displayRandomFace() {
    if (typeof chosenFace !== 'undefined'){
        chosenFace.classList.remove("fade-in");
    }; 
    let faces = document.getElementsByClassName("ghostFace");
    let randNum = Math.floor(Math.random() * faces.length);
    while (randNum === previousNum) {
        randNum=Math.floor(Math.random() * faces.length)
    }
    previousNum = randNum;
    chosenFace = faces[randNum];
    chosenFace.classList.remove("hide")
    chosenFace.classList.add("fade-in");
  };


