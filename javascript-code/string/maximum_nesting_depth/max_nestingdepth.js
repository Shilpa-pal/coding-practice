//Maximum Nesting Depth of Parenthesis
// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

// Example 1:
// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:
// Input: s = "(1)+((2))+(((3)))"
// Output: 3
// Explanation: Digit 3 is inside of 3 nested parentheses in the string.

class solution {
    maxDepth(s) {
        let Parenthesis = 0
        let ans = 0
        for (let ch of s) {
            // Increase depth on open parenthesis
            if (ch === '(') Parenthesis++
            // decrease depth on open parenthesis
            else if (ch === ')') Parenthesis--;
            ans = Math.max(ans, Parenthesis)
        }
        return ans
    }
}
const sol = new solution()
const s = "(1+(2*3)+((8)/4))+1";
const result = sol.maxDepth(s);
console.log("Max Depth:", result);