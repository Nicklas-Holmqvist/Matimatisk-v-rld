const correctAnswer = "Rätt!";
const wrongAnswer = "Fel!";

let nr1 = document.getElementById('nr1').innerText = getRandomNumber(50);
let nr2 = document.getElementById('nr2').innerText = getRandomNumber(50);
let disableInput = document.getElementById('answer')
let newBtn = document.getElementById('newBtn');
let correctBtn = document.getElementById('correctBtn');

function newNumber () {
    reload = location.reload();
    correctBtn.style.opacity = 1;
    disableInput.readOnly = false;
}

function correctedNumber () {
    let answer = document.getElementById('answer').value;
    let corrected = document.getElementById('correct');
    
    let numberSum = Number(nr1) + Number(nr2);
    let userSum = Number(answer);

    console.log(numberSum);
    console.log(userSum);

if (numberSum === userSum) {
    correct.innerText = correctAnswer;
    disableInput.readOnly = true;
    console.log('Rätt');
    newBtn.style.opacity = 1;
    correctBtn.style.opacity = 0;

}   else {
    corrected.innerText = wrongAnswer;
    console.log('Fel');
}
}

function getRandomNumber(limit) {
    const randomValue = Math.random() * limit;
    return Math.round(randomValue);
}


