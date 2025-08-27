// element selectors- methods to target and manipulate HTML elements
//                    they allows you to select one or multiple HtML  from the dom


// 1. document.getElementById()                 ELEMENT OR NULL
// 2. document.getElementsByClassName()         HTML COLLECTION
// 3. document.getElementsByTagName()           HTML COLLECTION
// 4. document.querySelector()                  ELEMENT OR NULL
// 5. document.querySelectorAll()               NODELIST

// document.getElementByID()
const myHeading = document.getElementById("my-heading")
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";


// document.getElementsByClassName and byTagName
// every element has properties and methods that you can use
const fruits = document.getElementsByClassName("fruits")
// individual accessing
fruits[0].style.backgroundColor = "red";

// accessing every items
for (const element of fruits) {
    element.style.backgroundColor = "yellow";
}

// casting htmlcollection to array
Array.from(fruits).forEach(element => element.style.backgroundColor = "red")





// querySelector only returns the first element selected
const element = document.querySelector(".fruits")
element.style.backgroundColor = "red";





// querySelectorAll
// has built in methods
// static, they dont automatically update the dom
const fruits = document.querySelectorAll(".fruits")
// accessing individual item
fruits[0].style.backgroundColor = "yellow";

fruits.forEach(element => {
    element.style.backgroundColor = "red"
});