export function iterativeSearch(list: number[], item: number): number | null {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess == item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

export function recursiveSearch(list: number[], item: number, lowIdx: number = 0, higthIdx: number = list.length - 1): number | null {
    if (lowIdx > higthIdx) {
        return null;
    }

    let midIdx = Math.floor(lowIdx + higthIdx / 2)

    if (list[midIdx] === item) {
        return midIdx;
    } else if (list[midIdx] > item) {
        return recursiveSearch(list, item, 0, midIdx - 1)
    } else {
        return recursiveSearch(list, item, midIdx + 1, higthIdx)
    }
}

