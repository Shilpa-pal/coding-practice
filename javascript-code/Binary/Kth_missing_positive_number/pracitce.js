
//Kth Missing Positive Number
//Problem Statement: You are given a strictly increasing array ‘vec’ and a positive integer
//  'k'. Find the 'kth' positive integer missing from 'vec'.
// Example 1:
// Input Format: vec[]={4,7,9,10}, k = 1
// Result: 1
// Explanation: The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 1, the first missing element is 1.
// Example 2:
// Input Format: vec[]={4,7,9,10}, k = 4
// Result: 5
// Explanation: The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 4, the fourth missing element is 5.


function positiveKthnumber(arr, n, k) {
    let low = 0
    let high = n - 1
    let result = arr.length
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let missing = arr[mid] - (mid + 1)
         //If missing >= k → search left (high = mid - 1).this condition return ans + k1
        // If missing < k → search right (low = mid + 1).this condition return k +high + 1 
        for (let i = 0; i < arr.length; i++) {
            if (missing < k) {
                low = mid + 1
                result = mid
            } else {
                high = mid - 1
            }
        }
    }
    return k + result + 1
}
let arr = [4, 7, 9, 10]
let k = 4
let n = 4
console.log("finding the kth positive number", positiveKthnumber(arr, n, k))
