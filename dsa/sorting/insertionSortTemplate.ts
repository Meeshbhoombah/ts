/**
 *
 * insertionSort
 *
 * Sorts a sequence of numbers
 *
 * Explainer: 
 * Reference: 
 *
 */


/*
 * 
 * @param {[]} arr - the array to be sorted
 *
 */
export function insertionSort(arr: number[]): number[] {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        // Swapping the `<` to `>` in the second statement changes ordering
        // from ascending to descending
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
    }

    return arr;
}

