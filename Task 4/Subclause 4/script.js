'use strict'

// Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна
// выводить слово Fizz, а вместо чисел, кратных пяти — слово Buzz. Если число кратно пятнадцати, то программа должна
// выводить слово FizzBuzz.

const arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i + 1;
}

for (let number of arr){
    if (number % 3 === 0 ){
        console.log("Fizz");
    }else if (number % 5 === 0 ){
        console.log("Buzz");
    }else if (number % 15 === 0 ){
        console.log("FizzBuzz");
    }else console.log(number);
}
