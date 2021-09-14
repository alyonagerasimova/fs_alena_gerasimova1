function quickSort(array, leftPointer = 0, rightPointer = array.length - 1) {
    let refIndex;
    if (array.length === 1 || (array.length === 0)) return array;
    else {
        refIndex = splitting(array, leftPointer, rightPointer);

        if (leftPointer < refIndex - 1) {
            quickSort(array, leftPointer, refIndex - 1);
        }

        if (refIndex < rightPointer) {
            quickSort(array, refIndex, rightPointer);
        }
    }
    return array;
}

function splitting(array, leftPointer, rightPointer) {
    let toehold = array[Math.floor((rightPointer + leftPointer) / 2)],
        i = leftPointer,
        j = rightPointer;
    while (i <= j) {
        while (array[i] < toehold) {
            i++;
        }
        while (array[j] > toehold) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

const arr = [9, 2, 56, 34, 0, 6, 20, -2];
console.log("Исходный массив: " + arr);
console.log("Сортированный массив: " + quickSort(arr));
