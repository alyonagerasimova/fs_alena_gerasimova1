class LinkedListNode {
    constructor(element, nextElement = null, previousElement = null) {
        this.element = element;
        this.nextElement = nextElement;
        this.previousElement = previousElement;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getElementByIndex(index) {
        let currentElement = this.head;
        let count = 0;
        if (index < 0 || index >= this.length) return null;
        while (count < index) {
            count++;
            currentElement = currentElement.nextElement;
        }
        return currentElement.element;
    }

    pushElementToEnd(element) {

        const newElement = new LinkedListNode(element);

        if (this.tail) {
            this.tail.nextElement = newElement;
        }
        newElement.previousElement = this.tail;
        this.tail = newElement;

        if (!this.head) {
            this.head = newElement;
        }
        this.length++;
    }

    pushElementByIndex(element, index) {
        const newElement = new LinkedListNode(element);
        let currentElement = this.head;
        let previousElement;
        let currentIndex = 0;

        if (index > this.length) return null;
        if (index === 0) {
            newElement.nextElement = currentElement;
            newElement.previousElement = null;
            this.head = newElement;
        }
        while (index > currentIndex) {
            currentIndex++;
            previousElement = currentElement;
            currentElement = currentElement.nextElement;
        }
        newElement.nextElement = currentElement;
        previousElement.nextElement = newElement;
        newElement.previousElement = previousElement;
        this.length++;
    }

    removeElementByIndex(index) {
        let currentElement = this.head;
        let previousElement;
        let currentIndex = 0;

        if (index < 0 || index >= this.length) return null;
        if (index === 0) {
            this.head = currentIndex.nextElement;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousElement = currentElement;
                currentElement = currentElement.nextElement;
            }
            previousElement.nextElement = currentElement.nextElement;

        }
        this.length--;
        currentElement.previousElement = null;
        currentElement.nextElement = null;
    }

    editElementByIndex(replaceElement, index) {
        this.removeElementByIndex(index);
        this.pushElementByIndex(replaceElement,index);

        // let currentElement = this.head;
        // let count = 0;
        // while (count < index) {
        //     count++;
        //     currentElement = currentElement.nextElement;
        // }
        // currentElement.element = replaceElement;
        // return currentElement.element;
    }
}

let list = new LinkedList();
list.pushElementToEnd(1);
list.pushElementToEnd(2);
list.pushElementByIndex(3, 2);
console.log("Первый элемент: " + list.getElementByIndex(0));
console.log("Второй элемент: " + list.getElementByIndex(1));
console.log("Третий элемент: " + list.getElementByIndex(2));
list.editElementByIndex(1.5, 1);
list.removeElementByIndex(2);
//console.log("Первый элемент: " + list.getElementByIndex(0));
console.log("Второй элемент: " + list.getElementByIndex(1));
//console.log("Третий элемент: " + list.getElementByIndex(2));
console.log("Список:");
console.log(list);
