

// string methods = allows you to manipulate and transform text

let username = "joshua@daliva";
let phoneNumber = `123 456 789`;

// username = username.charAt(2);      //returns the character based on the index
// username = username.indexOf("l")      //returns the index number of a character
// username = username.lastIndexOf("a")      returns the index number of a last character
// username = username.length       //returns the total number of a character
// username = username.trim()       //removes whitespace
// username = username.toLowerCase()      //convert string to lowercase
// username = username.toUpperCase()      //convert string to lowercase
// username = username.repeat(3);      //repeats a string by specifying a string
// username = username.startsWith("j")      //returns a boolean if it starts with the specified string
// username = username.endsWith("a");      //returns a boolean if it ends with a specified string
// username = username.includes("@")      //returns a boolean if it includes with the specified string
// phoneNumber = phoneNumber.replaceAll(" ","-")      //replace all string with another string
// phoneNumber = phoneNumber.padStart(15, "0");      //add more character with specified value at the start
// phoneNumber = phoneNumber.padEnd(13, "0")      //add more character with specified value at the end


// string slicing - the process of creating a substring from a string
const fullName = "joshua daliva";
let firstName = fullName.slice(0, 6);
let lastName = fullName.slice(7, 13);
firstName = fullName.slice(0, fullName.indexOf(" "))

// console.log(username);
// console.log(phoneNumber)
console.log(firstName)
console.log(lastName)



let name = "joshua";
console.log(name[2]) //accessing string using index


for (const n of name) {
    console.log(n)
} //printing individual item





