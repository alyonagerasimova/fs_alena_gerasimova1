import {simpleNumbers, observableAndObserver, clickOnButtons} from "./observable.js";

simpleNumbers();
observableAndObserver();
const button1 = document.querySelector('.first_button');
const button2 = document.querySelector('.second_button');
const button3 = document.querySelector('.third_button');
clickOnButtons(button1, button2, button3);
