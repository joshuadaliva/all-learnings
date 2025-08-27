// super - used in classess to call the constructor or access the properties 
// and methods of a parent (superclass)
// this = this object
// super = the parent


// step 1: provide what the parent needs
// step 2: add what childs needs





class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`this ${this.name} moves at a speed of ${speed}`);
    }

}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name,age)
        this.runSpeed = runSpeed;
    }

    // needs a function inside to call super method
    // create a subclass function then add up a another function from class
    // like using subclass idea  but also use parent idea
    run(){
        console.log(`this ${this.name} can  run`);
        super.move(this.runSpeed)
        // or
        this.move(this.runSpeed)
    }
    
    
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name,age)
        this.swimSpeed = swimSpeed;
    }

}


const rabbit = new Rabbit("bunny", 1, 25)
const fish = new Fish("nemo", 2, 12)

console.log(rabbit.name);
console.log(fish.name);
rabbit.run()
rabbit.move()