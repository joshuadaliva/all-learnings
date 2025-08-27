
// synchronous = executes line by line consecutively in a sequential order
// code that waits for an operation to complete

// asynchronous = allows multiple operations to be performed concurrently
// /without waiting 
// handles with : callbacks , promises , async/ await

// sample asynchronous
setTimeout(() => console.log("task1"), 1000)
console.log("2");
console.log("3");



// anoter sample
function func1(callback){
    setTimeout(() => {
        console.log("task 1");
        callback()
    }, 1000);
}

function func2(){ 
    console.log("2");
    console.log("3");
}

func1(func2)