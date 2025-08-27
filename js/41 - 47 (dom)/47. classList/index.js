
// classList = element property in js use to interact with an elements
// list of classes (css classes) allows you to make reusable classes for many elements
// accross your webpage


// add()
// remove()
// toogle(remove if present, add if not)
// contains


const btn = document.getElementById("btn")


// add()
btn.classList.add("enabled")

// remove()
// btn.classList.remove("enabled")

// replace()
btn.classList.replace("enabled", "disabled")




// using event to toogle and add
btn.addEventListener("mouseover", (e) => {
    e.target.classList.add("hover")
    // using toggle
    e.target.classList.toggle("hover")
    
})
btn.addEventListener("mouseout", (e) => {
    e.target.classList.remove("hover")
    // using toggle
    e.target.classList.toggle("hover")

})


// contains - returns true if class is applied
btn.addEventListener("click", e => {
    if(e.target.classList.contains("disabled")){
        e.target.classList.replace("disabled", "enabled")
    }
})

