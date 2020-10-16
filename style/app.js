// let nr1 = document.getElementById('nr1').innerText;
// let nr2 = document.getElementById('nr2').innerText;
// let plus = document.getElementById('plus').innerText;
// let answer = document.getElementById('answer').value;
// let correct = document.getElementById('correct');

// // let sum = Number(nr1) + Number(nr2);

// let numberSum = Number(nr1) + Number(nr2);
// let userSum = Number(answer);

// console.log(numberSum);
// console.log(userSum);

// if (numberSum === userSum) {
//     console.log('Rätt');
// }   else {
//     console.log('Fel');
// }




function correctedNumber () {
let nr1 = document.getElementById('nr1').innerText;
let nr2 = document.getElementById('nr2').innerText;
let answer = document.getElementById('answer').value;

let numberSum = Number(nr1) + Number(nr2);
let userSum = Number(answer);

console.log(numberSum);
console.log(userSum);

if (numberSum === userSum) {
    console.log('Rätt');
}   else {
    console.log('Fel');
}

}
