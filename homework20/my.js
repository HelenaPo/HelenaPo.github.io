"use strict";

//#1.1

function fib(n) {
    if (!Number.isInteger(n)) {
        return console.log('Неправильный ввод');
    }
    else if (n <= 1) return n;
    else {
    return fib(n - 1) + fib(n - 2);
    }
}

//#1.2

function fib(n) {
    let fib1 = 1;
    let fib2 = 1;
    if (!Number.isInteger(n)) {
        return console.log('Неправильный ввод');
    }
    else {
    for (let i = 3; i <= n; i++) {
    let fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
     }
      return fib2;
    }
}

//#2.1
function factorial(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return console.log('Неправильный ввод');
    }
    else if (num === 0) return 1;
    else return num * factorial(num - 1);
  }

//#2.2

function factorial(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return console.log('Неправильный ввод');
    }
    else if (num === 0) return 1;
    else {
      let res = 1;
      for (let i = 1; i <= num; i++) {
        res = res * i;
      }
      return res;
    }
  }

