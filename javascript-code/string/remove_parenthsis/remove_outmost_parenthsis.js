
class Solution {
    // Function to remove outer parentheses
    removeOuterParentheses(s) {
        // Initialize result string
        let result = "";
        // Initialize nesting level counter
        let level = 0;

        // Traverse the string
        for (let char of s) {
            // If we encounter '(', increase the level
            if (char === '(') {
                // If we're inside a primitive, add '(' to result
                //  For '(': Check first → then increase
                // Because outer '(' has level=0 → skip it.
                if (level > 0) result += char;
                // Increase the nesting level for '('
                level++;
            }
            // If we encounter ')', decrease the level
            else if (char === ')') {
                // Decrease the nesting level for ')'
                //  For ')': Decrease first → then check
                // Because outer ')' becomes level=0 → skip it.
                level--;
                // If we're inside a primitive, add ')' to result
                if (level > 0) result += char;
            }
        }

        // Return the final result after removing the outer parentheses
        return result;
    }
}

// Example usage
const s = "(()())(())";
const sol = new Solution();

console.log(sol.removeOuterParentheses(s)); 