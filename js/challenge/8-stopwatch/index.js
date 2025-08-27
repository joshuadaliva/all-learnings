

let clock = document.getElementById("clock")
let start = document.getElementById("start")
let stopTime = document.getElementById("stop")
let reset = document.getElementById("reset")
let isRunning = false;
let timer = null;
let hours = 0;
let minutes = 0;
let seconds = 0;





start.addEventListener("click", () => {
    isRunning = true;
    if(isRunning){
        timer = setInterval(() => {
            seconds++;
            if(seconds === 60){
                seconds = 0;
                minutes++;
            }
            if(minutes === 60){
                minutes = 0;
                hours++;
            }

            hours = hours.toString().padStart(2, 0)
            minutes = minutes.toString().padStart(2, 0)
            seconds = seconds.toString().padStart(2, 0)

            clock.textContent = `${hours} : ${minutes} : ${seconds}`
            


        }, 10)
    }
})


stopTime.addEventListener("click", () => {
    clearInterval(timer)
    isRunning = false;
})

reset.addEventListener("click", () => {
    clearInterval(timer)
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    clock.textContent = `00 : 00 : 00`
})