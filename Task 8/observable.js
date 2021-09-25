import {fromEvent, merge, Observable, range} from "rxjs";


export function simpleNumbers() {
    const stream$ = range(1, 100);
    stream$.subscribe(elem => {
        if (isSimple(elem)) {
            console.log(elem + "- простое число");
        }
    });
}

function isSimple(n) {
    let bool = true;
    if (n < 2) bool = false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            bool = false;
        }
    }
    return bool;
}

export function observableAndObserver() {
    const stream$ = new Observable(observer => {
        for (let i = 5; i > 0; i--) {
            observer.next(i);
        }

        setTimeout(() => {
            observer.error(new Error("Error"));
            observer.complete();
        }, 1000);

    });

    stream$.subscribe({
        next: v => alert(v),
        error: e => alert(e),
        complete: () => alert("complete"),
    });

}

export function clickOnButtons(button1, button2, button3) {
    const body = document.querySelector('body');
    const stream1$ = fromEvent(button1, "click");
    const stream2$ = fromEvent(button2, "click");
    const stream3$ = fromEvent(button3, "click");
    const stream$ = merge(stream1$, stream2$, stream3$);
    stream$.subscribe(() => body.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase());
}
