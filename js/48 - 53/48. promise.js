

// Promise - is an object that manages asynchronous operations
// wrap a promise object around asynchronous code
// "I promise to return a value"
// PENDING -> RESOLVE OR REJECT
// new Promise((resolve, reject) => {})


// .then is used to get the promise value from the promise object then you can now manipulate the value
// and return it as a non promise (converted as promise) or make another promise




//do this chores
// 1. clean the kitchen
// 2. walk the dog
// 3. take out trash



function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you clean the kitchen");
        }, 1100)
    })

}
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you walk the dog");
        }, 1600)

    })

}
function takeTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you take out the trash");
        }, 1200)

    })

}

walkDog()
.then(value => {
    console.log(value);
    return cleanKitchen()
})
.then(value => {
    console.log(value);
    return takeTrash()
})
.then(value => console.log(value))
.catch(error => console.log(error))


