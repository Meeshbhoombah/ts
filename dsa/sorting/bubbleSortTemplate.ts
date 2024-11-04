/**
 *
 * bubbleSort
 *
 * Sorts a sequence of numbers
 *
 * Explainer: https://en.wikipedia.org/wiki/Bubble_sort
 * Reference: https://naviava.hashnode.dev/bubble-sort-algorithm-in-typescript
 *
 */


/*
 * 
 * @param {[]} arr - the array to be sorted
 *
 */
export function bubbleSort(arr: number[]): number[] {
    let n = arr.length
        
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr; 
}

