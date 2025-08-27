// JSON - (JAVASCRIPT OBJECT NOTATION) data interchange format
// used for exchanging data between a server and a web application
// JSON files {key:value} or [value, value2]

// JSON.stringify() = converts an js object into a json string
// JSON.parse() = convers JSON string to a json object 


const names = ["joshua", "daliva"]


// using stringify
const person = {
    "name": "spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["coding", "watching movie"]
}

const jsonString = JSON.stringify(person)
const pas = JSON.stringify(person)
console.log(jsonString);




// using parse
const person1 = `{
    "name": "spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["coding", "watching movie"]
}`

const parseData = JSON.parse(person1)
console.log(parseData);



//fetch returns a promise
fetch("./person.json")
.then(response => response.json())
.then(data => console.log(data))