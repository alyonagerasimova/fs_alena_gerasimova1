'use strict'

// Проверка слова на палиндром. Запросить у пользователя ввод слова через диалоговое окно.
// Если оно является палиндромом - вывести диалоговое окно с текстом "<слово> палиндром!"
// В противном случае вывести "<слово> не палиндром!"

let word = prompt("Введите какое-нибудь слово", "");

function checkPalindrome(word){
    for (let i = 0; i < word.length/2; i++){
        if (word.charAt(i) !== word.charAt(word.length - 1 - i)){
            return false;
        }
    }
    return true;
}

if (checkPalindrome(word)) {
    alert(`${word} палиндром!`);
} else
    alert(`${word} не палиндром!`);
