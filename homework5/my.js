"use strict";
const doesBeerWant = confirm ('Привет! Ты хочешь пиво?');
let beerWant;

if (doesBeerWant === true) {
    beerWant = ('Правильно, в пиве сила, а в воде микробы!');
} else {
    beerWant = ('Ничего не поделаешь, чай только по празникам :D');
}
alert(beerWant);



