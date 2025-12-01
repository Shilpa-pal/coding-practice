//different approach

function removeParenthesis(p) {
    let result = ""
    let count = 0
    for (let i = 0; i < p.length; i++) {

        // if (p[i] === '(') count++;
        //  if (p[i] === ')') count--;
        // if (count !== 0) result += p[i]
//      note:   if(count != 0) works for both ( and )
//  Because for ( we check before increasing,
//  And for ) we check after decreasing

        if (p[i] === ')') count--;
        if (count !== 0) result += p[i] //We can write this also instead of 1st line if (count !== 0) ans.push(s[i])
        // for that we need to make empty array [] in that we have to push
        //Array-based (push)
        //String-based (+=)
        if (p[i] === '(') count++;

    }
    return result;
}
let p = "()(()())(())"
console.log(removeParenthesis(p))

// different way of write same solution but little differnt dode
function removeOuterParentheses(s) {
    let count = 0;
    let ans = "";

    for (let i = 0; i < s.length; i++) {

        if (s[i] === ')') {
            count--;               
            if (count > 0)         
                ans += ')';
        } 
       // For "(" → check first, then increase
//For ")" → decrease first, then check
        else { // s[i] === '('
            if (count > 0)         
                ans += '(';
            count++;               
        }
    }

    return ans;
}
console.log(removeOuterParentheses("(()())((()))"));



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

console.log(sol.removeOuterParentheses(s))