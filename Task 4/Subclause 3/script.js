'use strict'

// Создать массив случайных значений, написать функцию сортировки этого массива.
//     Функция должна принимать исходный массив и направление сортировки (asc, desc).
//     В зависимости от выбранного направления, сортировать массив по возрастанию или по убыванию соответственно.
//     Реализовать функцию, которая возвращает сумму квадратов всех нечетных элементов. (*) Реализовать функцию в 1 строку.

let array = [3, 32, 12, 45, 44, 2, 24, 40, -22, 3.4, 13];   //исходный массив

function sort(array, dir) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (dir === "asc") { //по возрастанию
                if (array[j] > array[j + 1]) {
                    let swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
            if (dir === "desc") { // по убыванию
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

console.log(`Исходный массив: [${array}], отсортированный по возрастанию [${sort(array, "asc")}].`);
console.log(`Исходный массив: [${array}], отсортированный по убыванию [${sort(array, "desc")}].`);


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

console.log(`Реализовать функцию, которая возвращает сумму квадратов всех нечетных элементов. \nИсходный массив: [${array}],
сумма квадратов всех нечетных элементов равна: ${sumSquareOdd(array)}`);


//2
let sum = 0;
sum = array.filter(v => v % 2 !== 0).map(v => sum += v*v).reverse()[0];

console.log(`(*) Реализовать функцию в 1 строку. Исходный массив: [${array}], сумма квадратов всех нечетных элементов равна: ${sum}`);