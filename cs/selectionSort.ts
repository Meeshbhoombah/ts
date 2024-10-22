/**
 *
 * selectionSort
 *
 * Sorts a sequence of strings
 *
 * Explainer: https://en.wikipedia.org/wiki/Selection_sort
 * Based off: https://algs4.cs.princeton.edu/21elementary/Selection.java.html
 *
 */

/*
 *
 * @param {[]} arr - the array to be sorted
 *
 */
function selectionSort(arr: number[]): number[] {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;

        for(let j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j; 
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }

    }

    return arr;
}


const numbers = [...Array(40)].map(element => ~~(Math.random() * 20));
console.log('Unsorted: ', numbers);
selectionSort(numbers);
console.log('Sorted: ', numbers);

