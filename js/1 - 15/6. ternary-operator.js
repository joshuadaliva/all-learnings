

// ternary operator = shorthand for if statement condition ? "if true" : "if false"
// also helps to assigned a value to a variable based on the

let age = 17;
let result;

// instead of using 
/*
if(age >= 18){
    result = "you are an adult"
}
else{
    result = "you are a minor"
}
*/

// you can use ternary


result = age <=18 ? "you are a minor" : "you are an adult"
console.log(result)

