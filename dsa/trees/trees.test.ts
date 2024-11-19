import {
    describe,
    test,
    expect
} from '@jest/globals';

import { BinarySearchTree } from './binarySearchTreeTemplate';


describe('binary search tree', () => {
    let bst = new BinarySearchTree(); 

    test('insertion', () => {
        bst.insert(0);
        bst.insert(1);
        bst.insert(-1);
        bst.insert(2);
        bst.insert(-2);
        bst.insert(0.5);
        console.log('Insertion:\n', bst);
    });

    test('search', () => {
        console.log('Search for existant 0.5', bst.search(0.5));
        console.log('Search for non-existant -5', bst.search(-5));
    });

    test('fasterSearch', () => {
        console.log('Search for existant 0.5', bst.fasterSearch(0.5));
        console.log('Search for non-existant -5', bst.fasterSearch(-5));
    });

});


