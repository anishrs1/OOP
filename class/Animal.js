
class Animal{
    makeSound(){
        return "roar";
    }

    jumps(){
        return "jump";
    }

    static movement(){
        return "Animal is moving.";
    }

    requestFriendship(animal) {
        return animal.received();

    }
    received(){
        return "received.";
    }
}
module.exports = Animal;
