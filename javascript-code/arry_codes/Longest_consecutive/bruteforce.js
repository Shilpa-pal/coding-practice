//Longest Consecutive Sequence in an Array

// Example 1:  Input: [100, 200, 1, 3, 2, 4] Output: 4
// Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

// Input: [3, 8, 5, 7, 6] Output: 4
// Explanation: The longest consecutive subsequence is 5, 6, 7, and 8

function linearsearach(arr, num) {  
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === num) {
            return true;
        }
        // Note :return false I have wriiten here so it give error becuse it  not checks rest of the array
        // it says “If the first element isn’t equal, give up right now.”  That’s why the loop never checks the rest of the array. 
    }
    //you should only return false after the entire loop finishes —
//that means: “I’ve checked every element, and none matched.”
    return false
}
function longestSuccessiveElements(arr) {
    let n = arr.length
    let longest = 1
    // pick an element and search for its
    // consecutive numbers:
    for (let i = 0; i < n; i++) {
        let x = arr[i]
        cnt = 1

        // search for consecutive numbers
        // using linear search:
        while (linearsearach(arr, x + 1) === true) { //arr-the array we are searching in
            //x + 1 → the number we are searching for (this becomes the num argument in linearSearch.
            //x + 1 acts as num in the linearSearch() function.
            x += 1
            cnt += 1
        }
        longest = Math.max(longest, cnt)

    }
    return longest
}
let arr = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElements(arr);
console.log("The longest consecutive sequence is", ans);
