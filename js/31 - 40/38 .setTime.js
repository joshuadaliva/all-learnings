// setTimeout - function that allows you to schedule the execution of a function after an amount of time (ms)
// setTimeout(callback, delay)



const timeoutId = setTimeout(() => {
    console.log("hello");
}, 3000)

// cancel a timeout before it triggers
clearTimeout(timeoutId)

// execute in interval
setInterval(() => {
    console.log("hello world");
}, 1909)