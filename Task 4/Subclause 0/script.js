'use strict'
// Смена чисел с использованием третьей переменной
let a = 7,
    b = 1,
    c;

c = a;
a = b;
b = c;
console.log("a = " + a, "b = " + b)

//Используя только переменные a и b
console.log("a = " + a, "b = " + b);
[a, b] = [b, a];
console.log("a = " + a, "b = " + b);
