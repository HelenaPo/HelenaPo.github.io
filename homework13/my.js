"use strict";

const fruits =  ['Apple', 'Banana', 'Pineapple'];

fruits.push('Orange', 'Grapes');
fruits.splice(1, 1, 'Peer');

const fruits1 = fruits.pop();
console.log(fruits1);

fruits.unshift('Watermelon');
console.log(fruits);