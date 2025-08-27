

// sort - method used to sort elements of an array in place 
// sorts elements in lexicographic order , not alphabetical 
// lexicographic = (alphabet + number + symbols) as strings


let numbers = [,12,5,1,3,41,2,4]

numbers.sort((a, b) => a - b)
// sorting in reverse
numbers.sort((a, b) => b - a)
console.log(numbers);

