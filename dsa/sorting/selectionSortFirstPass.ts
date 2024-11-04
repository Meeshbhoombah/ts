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
export function selectionSort(arr: number[]): number[] {
    let n = arr.length;

    for (let i = 0; i < n; i ++) {
        let minIndex = i;

        for (let j = 0; j < n; j++) {
            if (minIndex < j) {
                [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]];
            }
        }
    }

    return arr;
}

