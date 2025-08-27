


// spread operator = ... allows an iterable such as an array or string to be expanded 
                        // into separate element  (unpacks the element)




// using spread  operator in array
let numbers = [1,2,3,4,5]
let max = Math.max(...numbers)
let min = Math.min(...numbers)
console.log(max)
console.log(min)

// using spread  operator in string
let username = "daliva@gmail.com"
let letters = [...username].join("-")
console.log(letters)


// creating a copy of array
let fruits = ["mango", "apple", "fruits"]
let newFruits = [...fruits]
console.log(newFruits)



function numberss(...number){
    console.log(number);
}

numberss(...numbers)