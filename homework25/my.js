"use strict"

//№1

String.prototype.reverse = function () {
    return this.split('')
    .reverse()
    .join('');
}

//№2
const newArray = Array.prototype.sort;

Array.prototype.sort = function (...args) {
    return newArray.apply([...this], args);
}

//№3

NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.reduse = Array.prototype.reduce;
NodeList.prototype.find = Array.prototype.find;