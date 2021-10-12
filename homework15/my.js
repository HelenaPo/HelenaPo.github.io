"use strict";
const arr = [
    {name: 'Vasya', surname: 'Ivanov'},
    {name: 'Vanya', surname: 'Ivanov'},
    {name: 'Albert', surname: 'Vasyliev'},
  ];

  const keyBy = arr.reduce((keyBy, arr) => {
    if (!keyBy[arr.surname]) {
      keyBy[arr.surname] = []
    }
    keyBy[arr.surname].push(arr)

    return keyBy;
}, {});
    console.log(keyBy);

  const keyBy = arr.reduce((keyBy, arr) => {
      if (!keyBy[arr.name]) {
        keyBy[arr.name] = []
      }
      keyBy[arr.name].push(arr);

      return keyBy;
  }, {});
  console.log(keyBy);
  