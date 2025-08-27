// destructurin - allows to extract values from arrays and object . then assign them to variables in a convienent way
// [] - for arrays
// {} - for objects


let a = 1;
let b = 2;

// swapping two variable
[a,b] = [b,a]


// needs a semi colon to work
// swapping an array
const colors = ["red", "green", "blue"];
[colors[0], colors[2]] = [colors[1], colors[0]];
// console.log(colors);


// using rest and assigning them into a variable
const colors1 = ["red", "green", "blue", "black", "violet"];
const[color1, color2, color3, ...extraColors] = colors1;
// console.log(color1);
// console.log(extraColors);




// using object
const person1 = {
    firstName : "joshua",
    lastName : "daliva",
    age : 21
}
const person2 = {
    firstName : "chester",
    lastName : "daliva",
    age : 24
}


const {firstName, lastName, age, job = "umemployed"} = person1
// console.log(firstName);





// function

function displayPerson({firstName, lastName, age}){
    console.log(firstName);
    console.log(lastName);
    console.log(age);
}

displayPerson(person1)