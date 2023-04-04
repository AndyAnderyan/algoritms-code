import items from './items.json';
import * as bs from './01_binary-search'
import {generatorArrayOfNumbers} from "../../utils/generator";

describe('Binary search tests (iterative version)', function () {
    let simple_list = items.simple_list
    let list_with_100_000_items = items.list_with_100_000_items
    let list_with_100_000_000_items = generatorArrayOfNumbers(100_000_000, 1)

    it('test search with simple list', function () {
        let item = 3;
        let expected_idx = 1
        let actual_idx = bs.iterativeSearch(simple_list, item);
        expect(actual_idx).toBe(expected_idx)
    });

    it('test search with list with 100_000 items', function () {
        let item = 100_000;
        let expected_idx = 99_999;
        let actual_idx = bs.iterativeSearch(list_with_100_000_items, item);
        expect(actual_idx).toBe(expected_idx)
    })

    it('test search for nonexistent item', function () {
        let item = 100;
        let expected_idx = null
        let actual_idx = bs.iterativeSearch(simple_list, item);
        expect(actual_idx).toBe(expected_idx)
    })

    it('test Binary search and Linear search execution time \n', function () {
        let item = 100_000_000;
        let expected_idx = 99_999_999;

        let start_time = new Date
        let binary_search_idx = bs.iterativeSearch(list_with_100_000_000_items, item);
        let bs_time = new Date().getTime() - start_time.getTime();

        start_time = new Date;
        let linear_search_idx = list_with_100_000_000_items.indexOf(item);
        let ls_time = new Date().getTime() - start_time.getTime();

        // assert.isTrue(bs_time <= ls_time, 'bs_time must be greater than ls_time');
        expect(bs_time).toBeLessThanOrEqual(ls_time)
    });

    it('test Binary search and Linear search execution time for item at the beginning', function () {
        let item = 1;
        let expected_idx = 0;

        let start_time = new Date;
        let binary_search_idx = bs.iterativeSearch(list_with_100_000_000_items, item);
        let bs_time = new Date().getTime() - start_time.getTime();

        start_time = new Date;
        let linear_search_idx = list_with_100_000_000_items.indexOf(item);
        let ls_time = new Date().getTime() - start_time.getTime();

        expect(bs_time).toBeGreaterThanOrEqual(ls_time)
    });
});

describe('Binary search tests (recursive version)', function () {
    let simple_list = items.simple_list

    it('test search with simple list', function () {
        let item = 3;
        let expected_idx = 1;
        let actual_idx = bs.recursiveSearch(simple_list, item);
        expect(actual_idx).toBe(expected_idx)
    });
})
