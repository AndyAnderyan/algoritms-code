export enum Direction {
    ASC = 'asc',
    DESC = 'desc'
}

export const findSmallestIndex = (arr: number[]) => {
    let smallestElement = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestElement) {
            smallestElement = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
};

export const findGreatestIndex = (arr: number[]) => {
    let greaterElement = arr[0];
    let greaterIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > greaterElement) {
            greaterElement = arr[i];
            greaterIndex = i
        }
    }

    return greaterIndex
}

export const selectionSort = (array: number[], direction: Direction = Direction.ASC) => {
    const sortedArray = [];
    const copyArray = [...array];

    for (let i = 0; i < array.length; i++) {
        // Finds the smallest element in the array
        const foundIndex = direction === Direction.ASC ? findSmallestIndex(copyArray) : findGreatestIndex(copyArray);
        // Adds the smallest element to new array
        sortedArray.push(copyArray.splice(foundIndex, 1)[0]);
    }

    return sortedArray;
};


export const findSmallestIndexRecursively = (arr: number[], startIdx: number = 0): number => {
    if (arr.length === startIdx) {
        return 0
    }

    if (arr.length === startIdx + 1) {
        return startIdx;
    }

    let subMinIdx = findSmallestIndexRecursively(arr, startIdx + 1)
    return arr[startIdx] < arr[subMinIdx] ? startIdx : subMinIdx
};

export const findGreaterIndexRecursively = (arr: number[], startIdx: number = 0): number => {
    if (arr.length === startIdx) {
        return 0
    }

    if (arr.length === startIdx + 1) {
        return startIdx;
    }

    let subMinIdx = findGreaterIndexRecursively(arr, startIdx + 1)
    return arr[startIdx] > arr[subMinIdx] ? startIdx : subMinIdx
};

export const selectionSortRecursively = (array: number[], direction: Direction = Direction.ASC): number[] => {
    if (!array.length) return [];
    const copyArray = [...array];
    const smallest = copyArray.splice(direction === Direction.ASC ? findSmallestIndexRecursively(copyArray) : findGreaterIndexRecursively(copyArray), 1);
    return smallest.concat(selectionSortRecursively(copyArray, direction));
}
