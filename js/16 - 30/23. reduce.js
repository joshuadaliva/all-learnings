// reduce - reduce an element array into a single value


let prices = [12,32,23,43,12,32]

const total = prices.reduce((previous, next) => previous + next)
console.log(total);


// previous = 0 next = 12
// previous = 12 next = 32
// previous = 44 next = 23 and so on .....