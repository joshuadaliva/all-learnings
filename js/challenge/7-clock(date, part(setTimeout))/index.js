


let clock = document.getElementById("clock")

setInterval(() => {
    const date = new Date()

    let hours = date.getHours();
    meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    let minutes = date.getMinutes().toString().padStart(2, 0)
    let seconds = date.getSeconds().toString().padStart(2, 0)
    clock.textContent = `${hours} : ${minutes} : ${seconds} ${meridian}`

}, 1000)