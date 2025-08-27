

// DOM navigation - the process of navigating through the structure of an html document using js


// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// .firstElementChild || .lastElementChild
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.color = "red";

// accessing all selected element
const ulElements = document.querySelectorAll("ul")
ulElements.forEach(element => {
    const firstChild = element.firstElementChild;
    firstChild.style.color = "red";
})




// .nextElementChild || previousElementSiblint
const orange = document.getElementById("orange")
const next = orange.nextElementSibling;
next.style.color = "red";


// .parentElement
const orange1 = document.getElementById("orange")
const parent = orange.parentElement;
parent.style.backgroundColor = "yellow";


// .children
const vegetable = document.getElementById("vegetable")
const children = vegetable.children; //returns an htmlcollection
Array.from(children).forEach(element => {
    element.style.backgroundColor = "violet";
});

