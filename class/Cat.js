const Dog = require("./Dog.js");
Animal = require("./Animal.js");

class Cat extends Animal{
    constructor(){
        super();
        this.throwBall = false;
        this.dog = new Dog();
        this.dog.fetchBall = true;
    }
    makeSound(){
        return "meow";
    }

    catThrowsBall(dog1){
        this.throwBall = true;
        dog1.fetchBall = false;
    }

    dogFetchesBall(){
        this.throwBall = true;
        this.dog.dogFetchesBall();
    }

    static movement(){
        return "Cat is walking.";
    }
    received() {
        return "not accepted."
    }
    
}

let cat = new Cat();

module.exports = Cat;