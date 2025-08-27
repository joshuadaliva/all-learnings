

let dice = document.getElementById("dice");
let roll = document.getElementById("roll");
let randomNumber = 0;
let min = 1;
let max = 60;

roll.addEventListener('click', ()=> {

    randomNumber = Math.floor(Math.random() * max) + min;
    dice.innerHTML = randomNumber;


})