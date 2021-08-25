'use strict';

let output = document.querySelector('.item');

document.addEventListener("keydown", event => {
    if ((event.key).match(/=|Enter/)) {
        calc(event.key);
    } else if ((event.key).match(/[0-9%\/*\-+(\)]/)) {
        input(event.key);
    } else if ((event.key).match(/Backspace/)) {
        deleteSymbol(event.key);
    }
});


function input(value) {
    if (+output.textContent === 0) {
        output.textContent = "";
        output.textContent += value;
    } else {
        output.textContent += value;
    }
}

function deleteSymbol() {
    output.textContent = output.textContent.substring(0, output.textContent.length - 1);
}

function clearAll() {
    output.textContent = "0";
}

function calc(value) {
    let frame = document.querySelector('.input');

    if (output.textContent || value.match(/=|Enter/)) {
        try {
            output.textContent = eval(output.textContent);
        } catch {
            let oldValue = output.textContent;
            frame.style.cssText = 'border: 3px solid red;';
            setTimeout(() => {
                output.textContent = oldValue;
                frame.style.cssText = 'border: 1px solid black;';
            }, 1000);
        }
    }

}

function operation(name) {
    if (name === 'sqrt') {
        output.textContent = Math.sqrt(eval(output.textContent));
    }
    if (name === '^2') {
        output.textContent = Math.pow(eval(output.textContent), 2);
    }
}
