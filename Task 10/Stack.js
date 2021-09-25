class Stack {
    constructor() {
        this._count = 0;
        this._data = [];
    }

    pushTopElement(value) {
        this._data[this._count] = value;
        this._count++;
    }

    removeTopElement() {
        if (this._count === 0) return undefined;
        this._count--;
        let final = this._data[this._count];
        delete this._data[this._count];
        return final;
    }

    getTopElement() {
        return this._data[this._count - 1];
    }

    getLength() {
        return this._count;
    }
}

let stack = new Stack();
stack.pushTopElement(1);
stack.pushTopElement(2);
stack.pushTopElement(3);
console.log('Количество элементов в стеке: ' + stack.getLength());
stack.removeTopElement();
console.log('Полученный стек:');
console.log(stack);
console.log('Верхний элемент стека: ' + stack.getTopElement());
