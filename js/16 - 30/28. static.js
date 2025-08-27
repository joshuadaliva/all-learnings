// static - belongs to the class rather than on objects
// className.staticProperty


// class MathUtil{
//     static PI = 3.14;

//     static getDiameter(radius){
//         return radius * 2;
//     }

// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(2));




class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }



}

const user1 = new User("joshua")
const user2 = new User("daliva")

console.log(user1.username);
console.log(User.userCount);


// static function is cannot access the properties inside the constructor and inside the class members 
// can change value outside class
// can be change in subclass but in parent class doesnt change