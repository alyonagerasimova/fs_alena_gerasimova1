'use strict'

// Смена чисел с использованием третьей переменной
let a = 7,
    b = 1,
    c;
console.log("Поменяйте числа местами, есть две числовые переменные: a, b. Необходимо поменять их местами двумя способами." +
    "\n1 способ: С использованием третьей переменной. До изменения они равны: a = " + a + ", b = " + b);
c = a;
a = b;
b = c;
console.log("В результате получим: a = " + a + ", b = " + b);

//Используя только переменные a и b
console.log("2 способ: Используя только переменные a и b, которые до изменения значений равны: a = " + a + ", b = " + b);
[a, b] = [b, a];
console.log("После изменения: a = " + a + ", b = " + b);
