// nodelist - static collection of HTML elements by (id, class, element)
// can be created by using querySelectorAll
// similar to an array but doesnt have (map, filter, reduce)

// nodelist wont automatically reflect the changes


let buttons = document.querySelectorAll(".myButtons")

// buttons.forEach(button => {
//     button.style.backgroundColor = "tomato";
//     button.textContent += "joshua"
// })

// click
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "tomato";
    })
})


buttons.forEach(btn => {
    btn.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "tomato";
    })
})

buttons.forEach(btn => {
    btn.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "rgb(78, 193, 231)";
    })
})



// creating an element
const newButton = document.createElement("button")
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton)
buttons = document.querySelectorAll(".myButtons")



// even if you remove the button the nodelist has still also has items
// since nodelist doesnt automatically changes
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.remove()
        // calling it again
        buttons = document.querySelectorAll(".myButtons")
    })
})

console.log(buttons);