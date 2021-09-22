"use strict";
let n = prompt("Введите порядковый номер числа Фибоначчи:");
let result = n => {
let fib1 = 1;
let fib2 = 1;
for(let i = 2; i <= n; i++) {
    let fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
    }
    return fib1;
}
alert(result(n));


let anyNomber = prompt("Введите любое число:");

nextNomber:
for (let i = 2; i < anyNomber; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextNomber;
    }
  
    alert(i);
  }