

let randomNumber = document.getElementById("randomNumber")
let guessInput = document.getElementById("guessInput")
let check = document.getElementById("check")
let result = document.getElementById("result")
let randomInt = 0;
let lives = 5;

check.addEventListener("click", () => {
    randomInt = Math.floor(Math.random() * 5) + 1;
    randomNumber.innerHTML = randomInt;
    if(guessInput.value == false){
        result.style.color = "red";
        result.innerHTML = "the input cannot be empty";
    }
    else{
        if(Number(guessInput.value) === randomInt){
            result.style.color = "green";
            result.innerHTML = "you guessed it right"
        }
        else{
            result.style.color = "red";
            result.innerHTML = "you did'nt guessed right"

        }
    }
})
