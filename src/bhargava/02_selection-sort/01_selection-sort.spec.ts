import * as ss from './01_selection-sort';
import {Direction} from './01_selection-sort';

let unsortedArray = [1, 9, 2, 8, 3, 7, 4, 6, 5]
let sortedArrayByAsc = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sortedArrayByDesc = [9, 8, 7, 6, 5, 4, 3, 2, 1];

describe('Selection sort test (Iterative version)', () => {
    it('should sort an array of numbers by asc', () => {
        expect(ss.selectionSort(unsortedArray, Direction.ASC)).toEqual(sortedArrayByAsc)
    })

    it('should sort an array of numbers by desc', () => {
        expect(ss.selectionSort(unsortedArray, Direction.DESC)).toEqual(sortedArrayByDesc)
    })
    it('should equal', function () {
        expect({any: {any: 'any'}}).toEqual({any: {any: 'any'}})
    });
})

describe('Selection sort test (Recursive version)', () => {
    it('should sort an array of numbers by asc', () => {
        expect(ss.selectionSort(unsortedArray, Direction.ASC)).toEqual(sortedArrayByAsc)
    })

    it('should sort an array of numbers by desc', () => {
        expect(ss.selectionSort(unsortedArray, Direction.DESC)).toEqual(sortedArrayByDesc)
    })
})