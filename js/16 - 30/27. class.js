// class - is an es6feature provides a structure and cleaner way to work with objects
// compared to the traditional constructor function

class Person{
    constructor(name, price){
        this.name = name;
        this.price = price;
        // you can add code on this constructor
    }

    displayProduct(){
        console.log(`Product name ${this.name}`);
        console.log(`Product name ${this.price}`);
    }


    calculateTotal(salesTax){
        return this.price + (this.price * salesTax) 
    }


}

const person1 = new Person("shirt", 90)

person1.displayProduct()

const total = person1.calculateTotal(0.05)
console.log(total);