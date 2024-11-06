import { 
    describe, 
    test, 
    expect 
} from '@jest/globals';

// import { selectionSort } from './selectionSortTemplate';
import { selectionSort } from './selectionSortFirstPass';


describe('selection sort', () => {
    test('on an empty array', () => {
        expect(selectionSort([])).toEqual([]);
    });

    test('on an array of 100 elements, where each element is <= 100', () => {
        let arr = [...Array(100)].map(element => ~~(Math.random() * 100))
        expect(selectionSort(arr)).toEqual(arr.sort());
    });

    test('on an array of 10000 elements, where each element is <= 100', () => {
        let arr = [...Array(10000)].map(element => ~~(Math.random() * 100))
        expect(selectionSort(arr)).toEqual(arr.sort());
    });
});


// import { bubbleSort } from './bubbleSortTemplate';
import { bubbleSort } from './bubbleSortTemplate';

describe('bubble sort', () => {
    test('on an empty array', () => {
        expect(bubbleSort([])).toEqual([]);
    });

    test('on an array of 100 elements, where each element is <= 100', () => {
        let arr = [...Array(100)].map(element => ~~(Math.random() * 100));
        expect(bubbleSort(arr)).toEqual(arr.sort());
    });

    test('on an array of 10000 elements, where each element is <= 100', () => {
        let arr = [...Array(10000)].map(element => ~~(Math.random() * 100));
        expect(bubbleSort(arr)).toEqual(arr.sort());
    });
});


import { insertionSort } from './insertionSortTemplate';

describe('insertion sort', () => {
    test('on an empty array', () => {
        expect(insertionSort([])).toEqual([]);
    });

    test('on an array of 100 elements, where each element is <= 100', () => {
        let arr = [...Array(100)].map(element => ~~(Math.random() * 100));
        expect(insertionSort(arr)).toEqual(arr.sort());
    });

    test('on an array of 10000 elements, where each element is <= 100', () => {
        let arr = [...Array(10000)].map(element => ~~(Math.random() * 100));
        expect(insertionSort(arr)).toEqual(arr.sort());
    });
});

