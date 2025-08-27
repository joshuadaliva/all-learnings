


// eventlistener = listen for specific events to create interactive design
// events : click, mouseover, mouseout
// .addEventListener(event, callback)

// console.log(event) this returns an object and some of them are read only
// e.target the one that triggers the event

const myBox = document.getElementById("myBox")

// click
myBox.addEventListener("click", (event) => {
    // use console.log to see available properties and methods you can use
    console.log(event.target);
    event.target.style.backgroundColor = "red";
})

// mouseover
myBox.addEventListener("mouseover", (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = "red";

})

// mouseout
myBox.addEventListener("mouseout", (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = "yellow";

})

// key that is pressed
document.body.addEventListener("keydown", (e) => {
    console.log(e.key);
})

// key that is release
document.body.addEventListener("keyup", (e) => {
    console.log(e.key);
})






// sample program for keydown





let count = 10;
let movement = 0;

let box = document.getElementById("myBox")

document.body.addEventListener("keydown", (e) => {
    e.preventDefault()
    switch(e.key){
        case "ArrowLeft":
            movement += count;
            box.style.right = `${movement}px`;
            console.log(movement);
            break;
        case "ArrowRight": 
            movement -= count;
            box.style.right = `${movement}px`;
            console.log(movement);
            break;
    }
    
})