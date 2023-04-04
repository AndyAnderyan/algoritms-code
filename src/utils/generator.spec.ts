import {generatorArrayOfNumbers} from "./generator";

describe('Tests of arrayOfNumbersGenerator', function () {
    it('should generate array of numbers', function () {
        let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let actual = generatorArrayOfNumbers(10, 1)
        expect(actual).toEqual(expected);
    })
})
