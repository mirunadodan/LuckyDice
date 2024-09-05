// Get a random integer between 1-6
export function d6() {
    return Math.floor(Math.random()*6)+1;
}

// Get n rolls - arrays of dice
export function getRolls(n){
    return Array.from({length: n}, () => d6())
}

// Get sum of nums
export function sum(nums) {
    return nums.reduce((prev, cur) => prev+cur, 0)
}

// Roll same number

export function allEquals(arr) {
    return arr.every(val => val === arr[0]);
}