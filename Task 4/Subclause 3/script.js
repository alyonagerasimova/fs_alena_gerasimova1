'use strict'

// Создать массив случайных значений, написать функцию сортировки этого массива.
//     Функция должна принимать исходный массив и направление сортировки (asc, desc).
//     В зависимости от выбранного направления, сортировать массив по возрастанию или по убыванию соответственно.
//     Реализовать функцию, которая возвращает сумму квадратов всех нечетных элементов. (*) Реализовать функцию в 1 строку.

let array = [3, 32, 12, 45, 44, 2, 24, 40, -22, 3.4, 13];

function sort(array, dir) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (dir === "asc") {
                if (array[j] > array[j + 1]) {
                    let swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
            if (dir === "desc") {
                if (array[j] < array[j + 1]) {
                    let swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
    }
    return array;
}

console.log(sort(array, "asc"));
console.log(sort(array, "desc"));


//1
function sumSquareOdd(array) {
    let sum = 0;
    for (let number of array) {
        if (number % 2 !== 0) {
            sum = sum + number * number;
        }
    }
    return sum;
}

console.log(sumSquareOdd(array));


//2
let sum = 0;
sum = array.filter(v => v % 2 !== 0).map(v => sum += v*v).reverse()[0];

console.log(sum);