// function - is a reusable block of code that you can call anytime in your code

// old way of writing function in js

// Function declarations are hoisted (function declaration are moved to the top of the code).
// console.log(greet("joshua"))
function greet(name){
    return `happy birthday ${name}`
}

// old way using function expression
const greet = function (name) {
    return `hello ${name}`;
}
console.log(greet("joshua"))




// new way to write function expression
// arrow function
//  - can be one line
// - shorter syntax
// - Cannot be used as constructors
// - Best for callbacks, concise functions, or when you don’t need this binding.
const greet = (name) => {
    console.log(name , "daliva")
}
greet("joshua")

// can be one line
const greet2 = (name) => console.log("hello " + name);
greet2("joshua")




// IIFE - immediately invoked function expression, run the code when the js file is executed
(() => {
    console.log("hello world")
})()




