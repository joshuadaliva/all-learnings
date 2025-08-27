
// creating elements

// Step 1 : Create the element
const newH1 = document.createElement("h1")


// Step 2 : Add attribute and properties
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";



// Step 3 : append element to dom
// bottom
document.body.append(newH1)
// top
document.body.prepend(newH1)

// inserting into the div (box)
document.getElementById("box1").append(newH1)

//inserting before box 2
const box2 = document.getElementById("box2")
document.body.insertBefore(newH1,box2)


// remove element
document.body.removeChild(newH1)
document.getElementById("box1").removeChild(newH1)