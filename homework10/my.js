"use strict";

//№1
const obj1 = {};
console.log( lookValues(obj1) );
const obj2 = {name: "Vasya"};
console.log( lookValues(obj2) );

function lookValues(obj) {
    for (let key in obj) {
        return true;
    }
        return false;
    }
lookValues()

//№2
function lookNomber(data) {
    data = {
        "0": "zero", 
        "42": "answer", 
        "greeting": "Hello",
        "3.14": "PI", 
    }
    for (let key in data) {
        if(key>=0 || key<0) {
            console.log(data[key]);
        }
    }
}
lookNomber()

//№3

const salaries = {
    HRs: { Alice: 500, Bob: 700  },
    Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
    QAs: { Chuck: 1650, Craig: 850, Dave: 3000}
 };
 let salaries2 = doubleSalaries({}, salaries);
 console.log(salaries2)

function doubleSalaries(copyObj, obj) {
for (let key in obj) {
    copyObj[key] = doubleSalaries({}, obj[key]);
    if (typeof obj[key] === "number") {
        obj[key] *=2;
        }
    }
    return copyObj;
}
doubleSalaries(salaries)