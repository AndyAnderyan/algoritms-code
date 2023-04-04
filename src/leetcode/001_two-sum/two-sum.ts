function twoSum(nums: number[], target: number): number[] {
    let pairMap = makePair(nums, target);
    const length = nums.length;
    let firsId = 0;
    let secondId = nums.length - 1;
    for (let i = 0; i < pairMap.length; i++) {
        for (let j = 0; j < length; j++) {
            if (i === j) continue;
            if (pairMap[i][1] === nums[j]) {
                firsId = i;
                secondId = j;
                return [firsId, secondId];
            }
        }
    }
    return [firsId, secondId];
}

function makePair(nums: number[], target: number): number[][] {
    let pairMap = []
    for (let i = 0; i < nums.length; i++) {
        let pair = [i, target - nums[i]];
        pairMap.push(pair)
    }
    console.log(pairMap)
    return pairMap
}

let arr = [-1,-2,-3,-4,-5];
let target = -8
console.log(twoSum(arr, target));