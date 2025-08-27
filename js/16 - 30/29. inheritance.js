// inheritance - allows new class to inherits properties and methods on an parent class


class Animal{

    alive = true;

    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep(){
        console.log(`this ${this.name} is eating`);
    }

}

class Rabbit extends Animal{
    name = "rabbit";
}


const rabbit1 = new Rabbit()
rabbit1.eat()
rabbit1.alive = false;
console.log(rabbit1.alive);