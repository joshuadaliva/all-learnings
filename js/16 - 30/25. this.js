
// this - reference to the object where THIS is used 
// (the object depends on  the immediate context)
// person.name = this.name


// this will result to not defined use this keyword
// const person1 = {
//     firstName : "joshua",
//     age : 21,
//     sayHello : function () { console.log(`hi im ${firstName}`)}
// }
// person1.sayHello()


// use this instead
// arrow function will result to undefined
const person1 = {
    firstName : "joshua",
    age : 21,
    sayHello : function () { console.log(`hi im ${this.firstName}`)}
}
person1.sayHello()