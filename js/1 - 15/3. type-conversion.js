
// type conversion = the process of converting data type to another data type

// let age = window.prompt("how old are you")
// age = Number(age)
// document.getElementById("lorem").innerHTML = `<p> ${age} ${typeof age}` ;


let x = "21"; //if number is include it is a number and NAN if empty
let y = "pizza"; //if empty it will return empty
let z = "pizza"; //if no value it will return false

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)