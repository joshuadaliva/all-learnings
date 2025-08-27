// map = accepts a callback and applies that function to each element of an array , then return an array
// transforming an array

const numbers = [12,32,3123,23];

//basic usage of map
function square(item){
    return Math.pow(item, 2)
}
let squares = numbers.map(square)
console.log(squares);



//advance usage of map
let username = ["joshua", "chester", "shiela"]
let upperUsername = username.map((item) => item.toUpperCase())
console.log(upperUsername);


// why do you need to use foreach, map, filter when you can just use normal for loop
// answer - those methods have different purpose and it provides clarity and readability
// they are created to provide efficiency when dealing with an array
