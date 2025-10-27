
//You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.
// Example 1:
// Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
// Output: 4
// Explanation: 3 is occurring 4 times in 
// the given array so it is our answer.

// Example 2:
// Input: N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
// Output: 5
// Explanation: 2 is occurring 5 times in the given array so it is our answer.

function countNumOfOccurance(arr, n, x) {
    let cnt = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] === x) {
            cnt++
        }
    }
    return cnt;
}
let arr = [2, 2, 3, 3, 3, 3, 4]
let x = 3, n = 7
let ans = countNumOfOccurance(arr, n, x)
console.log("here is conunting occuance of the sorted array", ans)

//Brute Force
// Check every element
// O(n)