// objects - used to store key value pairs that has related items
//can represent real world object



// objects are used to grouped related data
// representing real world entities
const person1 = {
    firstName : "joshua",
    lastName : "daliva",
    age : 21,
    sayHello : () => console.log("hi im joshua"),
    eat : () => console.log("im eating pizza")
}
console.log(person1.firstName);
console.log(person1.lastName);
person1.sayHello();
person1.eat();


// storing dynamic data
const setting = {
    darkMode: true,
    language: "en",
    otherSetting: [],
    otherSet: {
        color: "black"
    }
}


// json data structure - data from an api is often in json 



// changing values using object itself
let person = {
    name : "joshua",
    age : 21
}

person = {
    name : "daliva",
    age : 20
}

console.log(person);