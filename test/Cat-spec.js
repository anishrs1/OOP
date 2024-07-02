const assert = require("assert");
const Cat = require("../class/Cat.js");
const { describe } = require("mocha");
const Dog = require("../class/Dog.js");

describe("should check that makeSound returns cat's sound.", function(){
    it("should check that makeSound returns cat's sound.", ()=>{
        let cat = new Cat();
        assert.equal(cat.makeSound(), "meow");
    })
});

describe("should check that catThrowsBall() sets throwBall to true.", function(){
    it("should check that catThrowsBall() sets throwBall to true.", ()=>{
        let cat = new Cat();
        let dog = new Dog();
        cat.catThrowsBall(dog);
        assert.equal(cat.throwBall, true);
    })
});

describe("received() method should get friend request.", function(){
    it("received() method should return 'accepted'.",()=>{
        let cat = new Cat();
        let dog = new Dog();
        let friendRequest = cat.requestFriendship(dog);
        assert.equal(friendRequest, "accepted.");
    })
});
