// Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.
// Note: Consider 0 based indexing
// Examples:

// Example 1:
// Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
// Output: 4
// Explanation: As the target value is 13 , it appears for the first time at index number 2.
// Example 2:
// Input: N = 7, target=60, array[] = {3,4,13,13,13,20,40}
// Output: -1
// Explanation: Target value 60 is not present in the array 

function lowerBound(arr, x) {
    let low = 0, high = arr.length - 1;
    let ans = arr.length;
    //Note lowerbond =// it gives first occurance 
    //upperBound = // it gives last occurance

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] >= x) {
            ans = mid; // maybe an answer
            high = mid - 1; // look  for small index on left
        } else {
            low = mid + 1; // look on right
        }
    }
    return ans;
}

function upperBound(arr, x) {
    let low = 0, high = arr.length - 1;
    let ans = arr.length;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > x) {
            ans = mid; // maybe an answer
            high = mid - 1; // look for small index on left
        } else {
            low = mid + 1; // look on right
        }
    }
    return ans;
}
// Example use:
function firstAndLastOccurrence(arr, x) {
    const first = lowerBound(arr, x);// it gives 1st occurance
    const last = upperBound(arr, x) - 1; // it gives last occurance
    // below condition says if lower bond equal to n and if lowerbond not found in array then return -1 for both
    //  1st conditi-the lowerBound loop never found a valid index,so ans remained initialized as arr.length. 
    // arr = [2, 4, 6], x = 10 // → there’s no number ≥ 10,
    // so lowerBound() returns arr.length = 3.
    // Hence, first === arr.length → true → means not found.

    //2nd condition- there’s no exact match in the array. arr = [2, 4, 6, 8, 10], x = 7 → lowerBound() gives index 3 (value 8)
    //but arr[3] !== 7 → so element 7 doesn’t exist in the array.
    // summary -The condition checks whether the element x exists in the array.
    // If the lower bound equals the array’s length (means not found)
    // or the element at that index isn’t equal to x,
    if (first === arr.length || arr[first] !== x) {
        return [-1, -1];
    }
    return [first, last];
}
let arr = [2, 4, 6, 8, 8, 8, 11, 13];
let x = 8;
const [first, last] = firstAndLastOccurrence(arr, x);
console.log(`First Occurrence: ${first}, Last Occurrence: ${last}`);

// Time complexity
// const first = lowerBound(arr, x)
// const last = upperBound(arr, x) - 1
// Each is O(log n) → so total = O(log n) + O(log n) = O(2 * log n)
//Final Time Complexity = O(log n) 
// Space Complexity-No extra arrays or data structures are used — only variables.
// Space Complexity = O(1) 