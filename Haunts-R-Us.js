let previousNum;

let isReady = true;

var chosenFace;

var actualGhost = document.getElementById("actualGhost");

var gravestones = document.getElementsByClassName("gravestone");



for (var i = 0; i < gravestones.length; i++) {
    gravestones[i].addEventListener('click', displayRandomHaunt, false);
}

actualGhost.addEventListener('click', displayRandomFace, false);

function displayRandomHaunt() {
    if (!isReady) return
    let hauntingTypes = ['Visit them the night before Christmas and show them their wrongdoings',
    'Create a cold spot in their house',
    'Flick their lights on and off',
    'Move their car keys',
    'Moan throughout the night',
    'Scream randomly before they take a sip of water',
    'Make loud fart noises when they sit down at important events',
    'Eat the last of their favorite snacks',
    'Sign them up for an MLM',
    'Cover them in ants while they sleep',
    'Make blood pour out of their showerhead',
    'Write TV spoilers in the fog from their shower',
    'Levitate their items',
    'Levitate them',
    'Levitate their significant other',
    'Mess up their hair when they are running late',
    'Make them always walk upwind',
    'Whisper their secrets to their friends',
]
    let randNum = Math.floor(Math.random() * hauntingTypes.length);
    let choosenHaunt = hauntingTypes[randNum]
    let text = document.getElementById("hauntDisplay");
    text.classList.add("fade-in");
    text.innerText = choosenHaunt;
    isReady = false
    setTimeout(function () {
        text.classList.remove("fade-in");
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
    console.log(previousNum)
    chosenFace = faces[randNum];
    chosenFace.classList.add("fade-in");
  }



