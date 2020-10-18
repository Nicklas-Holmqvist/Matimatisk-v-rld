const correctAnswer = "Rätt!";
const wrongAnswer = "Fel, försök igen!";


let mathItem = document.getElementById('mathItem');
let nr1 = document.getElementById('nr1').innerText = getRandomNumber(50);
let nr2 = document.getElementById('nr2').innerText = getRandomNumber(50);
let disableInput = document.getElementById('answer')
let correctOutput = document.getElementById('correct')
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

    newBtn.style.display = 'flex';
    correctBtn.style.display = 'none';

    mathItem.style.background = '#7FB069';

    disableInput.style.backgroundColor = 'rgb(255,255,255)';
    disableInput.style.color = '#011627';

}   else {
    corrected.innerText = wrongAnswer;
    disableInput.value = '';

    console.log('Fel');

    mathItem.style.background = 'rgb(255,0,0)';
}
}

function getRandomNumber(limit) {
    const randomValue = Math.random() * limit;
    return Math.round(randomValue);
}


