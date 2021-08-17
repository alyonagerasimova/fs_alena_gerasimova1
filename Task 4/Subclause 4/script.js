'use strict'

// Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна
// выводить слово Fizz, а вместо чисел, кратных пяти — слово Buzz. Если число кратно пятнадцати, то программа должна
// выводить слово FizzBuzz.

const arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i + 1;
}

for (let number of arr) {
    switch (true) {
        case number % 15 === 0:
            alert("FizzBuzz");
            break;
        case (number % 3 === 0):
            alert("Fizz");
            break;
        case number % 5 === 0:
            alert("Buzz");
            break;
        default:
            alert(number);
            break;
    }
}
