"use strict";

class Vegetable {
 constructor(name) {
     this.name = name;
 }
}

class Animal {
    constructor(legs) {
        this.legs = legs;
        this.stomach = []
    }
    eat(food) {
            this.stomach.push(food);
        }
}

class Rabbit extends Animal {
    constructor(breed) {
        super(4);
        this.breed = breed;
    }
    jump() {
        console.log("I'm rabbit. I'm jumping!");
    }
    eat(food) {
        if (!(food instanceof Vegetable)) {
            throw new Error('No, I am vegetarian!');
        }
    }
}

class Snake  extends Animal {
    constructor(isPoisonous) {
        super(0);
        this.isPoisonous = isPoisonous;
    }
    crawl() {
        console.log("I'm snake. I'm crawl!");
    }
    eat(food) {
        if (!(food instanceof Rabbit)) {
            throw new Error('No, I only eat rabbits!');
        }
    }

}

class Human extends Animal {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        super(2)
    }
    walk() {
        console.log(`I'm walking!`);
    }
    greet() {
        console.log(`Hello, ${this.firstName}`);
    }
    eat(food) {
        if (food instanceof Human) {
            throw new Error("No, I don't eat people!");
        }
    }
}
