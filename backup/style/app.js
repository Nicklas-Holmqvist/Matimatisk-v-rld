/* 
Rätt och fel meddelande
*/

const correctAnswer = "Du är grym!";
const wrongAnswer = "Fel, försök igen!";

/* 
Alla variabler som kan nås utanför frunktioner
*/

let mathItem = document.getElementById('mathItem');
let disableInput = document.getElementById('answer')
let correctOutput = document.getElementById('correct')
let newBtn = document.getElementById('newBtn');
let correctBtn = document.getElementById('correctBtn');

// Randomtalen
let nr1 = document.getElementById('nr1').innerText = getRandomNumber(150);
let nr2 = document.getElementById('nr2').innerText = getRandomNumber(150);

/* 
Funktion som körs när man trycker på "nytt tal" knappen
*/

function newNumber () {
    reload = location.reload();
    correctBtn.style.opacity = 1;
    disableInput.readOnly = false;
}

/* 
Funktion som körs när man trycker på "rätta" knappen
*/

function correctedNumber () {
    let answer = document.getElementById('answer').value;
    let corrected = document.getElementById('correct');
    
    let numberSum = Number(nr1) + Number(nr2);
    let userSum = Number(answer);

    console.log(numberSum);
    console.log(userSum);

// Om det är rätt inmatat värde
if (numberSum === userSum) {
    correct.innerText = correctAnswer;

    disableInput.readOnly = true;

    newBtn.style.display = 'flex';
    correctBtn.style.display = 'none';

    mathItem.style.background = '#7FB069';

    disableInput.style.backgroundColor = 'rgb(255,255,255)';
    disableInput.style.color = '#011627';


// Om det är fel inmatat värde
}   else {
    corrected.innerText = wrongAnswer;
    disableInput.value = '';

    mathItem.style.background = 'rgb(255,0,0)';
}
}

/* 
Random funktion
*/

function getRandomNumber(limit) {
    const randomValue = Math.random() * limit;
    return Math.round(randomValue);
}