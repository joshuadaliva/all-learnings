//  array - a variable container that can hold many items or values

let fruits = ["mango", "apple", "fruits"]


fruits = fruits[0]                       //accessing spefic items in array using index
fruits[0] = "banana"                     //replacing item
fruits = fruits.length                   //check the size of an array



// built in methods in array

fruits.push("banana")                    //adds an item on the end of items in an array
fruits.unshift("banana")                 //adds an item on the start of items in an array
fruits.pop()                             //remove the last item
fruits.shift()                           //removes the first item
let index = fruits.indexOf("apple")      //check the index of a given string
let isAvailable = fruits.includes("apple") //check if the item is available inside the array
fruits = fruits.sort()                       //sorts an array
fruits = fruits.reverse()                   //reverse an array
console.log(isAvailable)


// accessing array (all)
// using for loop
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// using for of loop
for(let fruit of fruits){
    console.log(fruit)
}
