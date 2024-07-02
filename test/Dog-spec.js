const assert = require("assert");
const Dog = require("../class/Dog.js");
const { describe } = require("mocha");
const Cat = require("../class/Cat.js");

describe("should check that makeSound returns dog's sound.", function(){
    it("should check that makeSound returns dog's sound.", ()=>{
        let dog = new Dog();
        assert.equal(dog.makeSound(), "bark");
    })
});

describe("should check that dogFetchesBall() sets fetchBall to true if catThrowBall() is set to true.", function(){
    it("should check that dogFetchesBall() sets fetchBall to true.", ()=>{
        let dog = new Dog();
        let cat = new Cat();
        
        cat.catThrowsBall(dog);
        assert.equal(cat.throwBall, true);
        assert.equal(dog.fetchBall, false);

        dog.dogFetchesBall(cat);
        assert.equal(dog.fetchBall, true);
        assert.equal(cat.throwBall, false);
    })
});

describe("recieved() method should get friend request.", function(){
    it("received() method in cat should not accept friend request.",()=>{
        let cat = new Cat();
        let dog = new Dog();
        let friendRequest1 = dog.requestFriendship(cat);
        assert.equal(friendRequest1, "not accepted.");
    })
});