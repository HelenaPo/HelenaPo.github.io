"use strict";
const doesBeerWant1 = confirm ('Привет! Ты хочешь пиво?');

const wantBeer = (doesBeerWant1 === true) ? 'Правильно, в пиве сила, а в воде микробы!':
'Ничего не поделаешь, чай только по празникам :D';
alert (wantBeer);