// rest parameter = (...rest) allows a function work with a variable 
                    // number of argument by bundling them in one array

                    // spread - expands an array and string into separate elements
                    // rest - bundles separate elements into array




const food1 = "pizza"
const food2 = "hamburger"
const food3 = "hotdog"


const fridge = (...foods) => {
    console.log(...foods)
}

fridge(food1, food2, food3)





function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result
}


console.log(sum(2,4,5,10))