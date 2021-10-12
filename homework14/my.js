"use strict";
//1.1
const nombers = [1, 2, 3, 4, 5];

const sum = nombers.reduce((result,elem) => result + elem, 0)
console.log(sum)

//1.2
let sum1=0;
for (let elem of nombers) {
  sum1 +=elem;
}
console.log(sum1)

//2
const array = ['food', 'cat'];
const array1 = [];

//2.1
function mapToUpperCase(arr) {
    arr = array.map((elem) => {
        return elem.toUpperCase();
    })
    console.log(arr);
}
mapToUpperCase();


//2.2
function mapToUpperCase(arr) {
    for(let elem of array) {
        arr = elem.toUpperCase();
        array1.push(arr)
    }
    return arr;
}
mapToUpperCase();
console.log(array1);

