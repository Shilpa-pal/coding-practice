//Longest Consecutive Sequence in an Array

// Example 1:  Input: [100, 200, 1, 3, 2, 4] Output: 4
// Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

// Input: [3, 8, 5, 7, 6] Output: 4
// Explanation: The longest consecutive subsequence is 5, 6, 7, and 8

function findLongestConsecutive(arr) {
    let n = arr.length
    if (n === 0)
        return 0
    let longest = 0
    // We use a Set because it stores only unique numbers.
    let st = new Set()

    // Add all elements of the array to the Set.
    for (let i = 0; i < n; i++) {
        st.add(arr[i]) // here number get added in st
    }
    // Iterate through each number in the Set.
    //this loop means:“For every number (num) inside the Set st, run the code inside the loop.”
    for (let num of st) {
        // here it check in set the number we are starting that number have previous number ? like when we start from 2 in set does 2 have it's pevious num
        //Check if (num - 1) does NOT exist in the set.
        // This means num is the starting number of a new sequence.
        if (!st.has(num - 1)) {
            let cnt = 1
            ///When we find the start of a sequence, num will be the first number of that consecutive series.
            let currentNum = num
            //As long as the next consecutive number (currentNum + 1) exists in the set, 
            //  keep extending the current sequence.If it does, extend the current sequence
            while (st.has(currentNum + 1)) {
                currentNum = currentNum + 1
                cnt += 1
            }
            //Update the longest sequence length:
            longest = Math.max(longest, cnt)

        }
    }
    return longest

}
let a = [100, 200, 1, 2, 3, 4];
let ans = findLongestConsecutive(a);
console.log("The longest consecutive sequence is", ans);





