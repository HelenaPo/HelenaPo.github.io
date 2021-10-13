"use strict";
const arr = [
  { name: 'Vasya', surname: 'Ivanov' },
  { name: 'Vanya', surname: 'Ivanov' },
  { name: 'Albert', surname: 'Vasyliev' }
];
function keyBy(array, key) {
  return array.reduce((objBy,user) => {
      if ( !objBy[user[key]] ) {
        objBy[user[key]] = [];
       }
      objBy[user[key]].push(user);
      return objBy;
      }, {}
    )
};

console.log(keyBy(arr, 'name'));
console.log(keyBy(arr, 'surname'));
  