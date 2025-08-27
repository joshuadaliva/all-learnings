

// array of object

const fruits = [
    {
        name : "apple",
        color : "red",
        calories : 322
    },
    {
        name : "orange",
        color : "orange",
        calories : 312
    },
    {
        name : "pineapple",
        color : "yellow",
        calories : 32
    },
]


fruits.forEach(data => console.log(data.name))
const fruitsName = fruits.map(data => data.name)
const yellow = fruits.filter(data => data.color.includes("yellow"))
const maxFruit = fruits.reduce((max, nextFruit) => max.calories > nextFruit.calories ? max : nextFruit)
console.log(maxFruit);