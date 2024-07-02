const assert = require("assert");
const Animal = require("../class/Animal.js");
const { describe } = require("mocha");
const Cat = require("../class/Cat.js");
const Dog = require("../class/Dog.js");

describe("should check that makeSound returns animal's sound and checks that the sounds are different from each other.", function(){
    it("should check that makeSound returns animal's sound and checks that the sounds are different from each other.", ()=>{
        let animal = new Animal();
        let animalSound = animal.makeSound();
        assert.equal(animalSound, "roar");
        let cat = new Cat();
        let catSound = cat.makeSound();
        assert.notEqual(animalSound, catSound);
        let dog = new Dog();
        let dogSound = dog.makeSound();
        assert.notEqual(animalSound, dogSound);
        assert.notEqual(catSound, dogSound);
    })
    it("static method should behave differently for a cat than it does for a dog.", () => {
        let animalMovement = Animal.movement();
        let catMovement = Cat.movement();
        let dogMovement = Dog.movement();
        assert.notEqual(animalMovement, catMovement);
        assert.notEqual(animalMovement, dogMovement);
        assert.notEqual(catMovement, dogMovement);
    })
});
