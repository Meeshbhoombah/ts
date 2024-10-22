/**
 *
 * selectionSort
 *
 * Sorts a sequence of strings
 *
 * Based off: https://algs4.cs.princeton.edu/21elementary/Selection.java.html
 *
 */

/*
 * Rearranges the array in ascending order, using the natural order.
 *
 * @param {[]} arr - the array to be sorted
 *
 */
function selectionSort(arr: number[]): number[] {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
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


const numbers = [64, 25, 12, 22, 11];
console.log('Unsorted: ', numbers);
selectionSort(numbers);
console.log('Sorted: ', numbers);

