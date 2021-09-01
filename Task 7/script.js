'use strict'

const form = document.querySelector('.form-with-validation');
const btn = document.querySelector(".send");
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegExp = /^\+\d\(\d{3}\)\d{2}-\d{2}-\d{3}$/;
let firstName = document.querySelector(".first-name-form"),
    lastName = document.querySelector(".last-name-form"),
    phoneNumber = document.querySelector(".phone-form"),
    mail = document.querySelector(".email-form"),
    message = document.querySelector(".message-text");


const data = {
    firstName,
    lastName,
    phoneNumber,
    mail,
    message
}

for (let key in data) {
    data[key].addEventListener("input", recordInLocalStorage);
    data[key].value = localStorage.getItem(key);
}

btn.addEventListener("click", function (event) {

    removeError();

    if (!checkNotNull()) {
        event.preventDefault();
    } else {
        alert(data.firstName.value + " " + data.lastName.value + ", спасибо за обращение!");
        let name = "fullName";
        let value = data.firstName.value + " " + data.lastName.value;
        if (document.cookie === encodeURIComponent(name) + '=' + encodeURIComponent(value)) {
            alert(data.firstName.value + " " + data.lastName.value + ", ваше обращение обрабатывается!");
        } else {
            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        }
        clearLocalStorage();
    }
});

function recordInLocalStorage() {
    for (let key in data) {
        localStorage.setItem(key, data[key].value);
    }
}

function clearLocalStorage() {
    for (let key in data) {
        localStorage.removeItem(key);
    }
}

let errorMessage = function (text) {
    let error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.style.display = "inline";
    error.innerHTML = text;
    return error;
};

let checkNotNull = function () {
    let bool = true;
    for (let key in data) {
        if (!data[key].value) {
            if (key !== "phoneNumber") {
                let error = errorMessage("Поле не должно быть пустым. ");
                data[key].className = "invalid";
                data[key].parentElement.insertBefore(error, data[key]);
            }
            bool = false;
        }
    }
    if (data["phoneNumber"].value && !phoneRegExp.test(data["phoneNumber"].value)) {
        data["phoneNumber"].className = "invalid";
        let error = errorMessage('Поле должно соответствовать маске +X(XXX)XX-XX-XXX');
        data["phoneNumber"].parentElement.insertBefore(error, data["phoneNumber"]);
        bool = false;
    }
    bool = true;
    if (!emailRegExp.test(data["mail"].value)) {
        data["mail"].className = "invalid";
        let error = errorMessage('Поле должно соответствовать шаблону email');
        data["mail"].parentElement.insertBefore(error, data["mail"]);
        bool = false;
    }
    return bool;
}

let removeError = function () {
    let errors = form.querySelectorAll('.error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }
    for (let key in data) {
        data[key].className = "valid";
    }
}