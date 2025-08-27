// filter - creates a new array by filtering out elements
// to filter out elements base on a condition and it returns an array

let numbers = [1,23,4,5,6,7,8]

// old way
// let even = numbers.filter(isEven)
// function isEven(element){
//     return element % 2 === 0;
// }
// console.log(even);

// new way
// let even = numbers.filter(item => item % 2 === 0);
// console.log(even);




// sample
let ages = [18,24,14,12,11,10,21]
let adults = ages.filter(item => item > 18)
console.log(adults);