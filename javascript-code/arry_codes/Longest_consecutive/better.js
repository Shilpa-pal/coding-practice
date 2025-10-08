//Longest Consecutive Sequence in an Array

// Example 1:  Input: [100, 200, 1, 3, 2, 4] Output: 4
// Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

// Input: [3, 8, 5, 7, 6] Output: 4
// Explanation: The longest consecutive subsequence is 5, 6, 7, and 8

function longestSuccessiveElements(arr) {
    let n = arr.length
    if (n === 0)
        return 0
// sort the array:
    arr.sort((a, b) => a - b)
    let lastSmaller = -Infinity
    let cnt = 1
    let longest = 1

// find longest sequence:
    for (let i = 0; i < n; i++) {
        if (arr[i] - 1 === lastSmaller) {
               // arr[i] is the next element of the current sequence.
               //arr[i]-1= is previos element of current sequence
            cnt += 1
            lastSmaller = arr[i]  // updating the longest with arr[i]
        } else if (arr[i] !== lastSmaller) { // // arr[i] is not consecutive or duplicate
            cnt = 1
            lastSmaller = arr[i] // // update lastSmaller
        }
        longest = Math.max(longest, cnt) // update longest length
    }
    return longest;

}
let arr = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElements(arr);
console.log("The longest consecutive sequence is", ans);
