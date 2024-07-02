
Animal = require("./Animal.js");

class Dog extends Animal{
    constructor(){
        super();
        this.fetchBall = false;
    }

    makeSound(){
        return "bark";
    }
    dogFetchesBall(){
        this.fetchBall = true;
    }
    dogFetchesBall(cat){
        if(cat.throwBall === true) {
            cat.throwBall = false;
            this.fetchBall = true;
            return "Dog fetches the ball.";
        }
        
    }

    static movement(){
        return "Dog is running.";
    }

    received(){
        return "accepted."
    }

}
module.exports = Dog;