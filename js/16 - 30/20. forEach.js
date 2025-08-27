

// forEach - method use to iterate over elements of an array and apply a speicified function (callback) to each elements
// element, index, array
// good for displaying ui , output
// apply callback function on every element to perform an action

let numbers = [1,2,4,5,6]



// numbers.forEach(square)
// numbers.forEach(display)

// function square(element, index, array){
//     array[index] = element * 2;
// }

// function displa console.log(element);
// }y(element){
//    




// usage 1 : checking inside an array (not advisable use map instead)

let username = ["daliva@gmail.com", "chester", "daliva@gmail.com"]
let validUsername = []

username.forEach((item, i, array) => {
    item.includes("@gmail.com") ? validUsername.push(item) : "";
})

console.log(validUsername);



// transforming an array //not advisable
let names = ["joshua", "chester", "shiela"]
names.forEach((item, i, array) => {
    array[i] = item.toUpperCase()
})

names.forEach(item => console.log(item))