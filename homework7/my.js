"use strict";
const result = n => {
let fib1 = 1;
let fib2 = 1;
for (let i = 2; i <= n; i++) {
    let fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
    }
    return fib1;
}
alert ( result(7) );
