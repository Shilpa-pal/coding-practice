// Longest Common Prefix

// Problem Statement: Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

// Example 1
// Input: str = ["flower", "flow", "flight"]
// Output: "fl"
// Explanation: All strings in the array begin with the common prefix "fl".

// Example 2
// Input: str = ["apple", "banana", "grape", "mango"]
// Output: ""
// Explanation: None of the strings share a common starting sequence, so the result is an empty string.

class Solution {
    longestCommonPrefix(str) {

        if (str.length === 0) return "";
        str.sort();

        const first = str[0]
        const last = str[str.length - 1]
        let commonPrefix = ""
        for (let i = 0; i < Math.min(first.length, last.length); i++) {
            if (first[i] !== last[i]) {
                return commonPrefix
            }// Add matching character to result
            commonPrefix += first[i] //first[i] gives the current character of the first string.
        }
        return commonPrefix

    }
}
const solution = new Solution
const inputStrs = ["interview", "internet", "internal", "interval"];

// Call method to get longest common prefix
const result = solution.longestCommonPrefix(inputStrs);

// Print the result
console.log("Longest Common Prefix:", result); 