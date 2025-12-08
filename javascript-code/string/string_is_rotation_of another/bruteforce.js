//c

// Problem Statement: Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position. For example, if s = "abcde", 
// then it will be "bcdea" after one shift.
// Example 1:
// Input: s = "rotation", goal = "tionrota"
// Output: true
// Explanation: After multiple left shifts on "rotation", we get:
//     1st shift → "otationr"
//     2nd shift → "tationro"
//     3rd shift → "ationrot"
//     4th shift → "tionrota"
//     So the goal string can be obtained by rotating the original string.

// Example 2:
// Input: s = "hello", goal = "lohelx"
// Output: false
// Explanation: 
// Even after all possible rotations of "hello", we cannot form "lohelx" due to the presence of an extra character 'x'. Hence, it's not possible.

function rotationOfString(s,goal){
    if(s.length !== goal.length) return false

    // looping all possible rotation of "str"
    for(let i =0;i<s.length;i++){
        // // Create rotated version by slicing and concatenating
        let rotated = s.substring(i) + s.substring(0,i)
        //substring(i)→ takes characters from index i to the end.
       // example :when i = 4: Step 1: s.substring(4)
       // From index 4 onwards:
       // "rotation"
       //      ↑index 4 = 't'
//s.substring(4) = "tion"

//s.substring(0, i)→ takes characters from the start to index i - 1.
//Step 2: s.substring(0, 4)From index 0 to 3:  // rota Step 3: Add them:
// "tion" + "rota" = "tionrota"
// Which matches the goal "tionrota".
  
            // Return true if rotated version matches goal
        if (rotated === goal){
            return true
        }
    }// If no match found, return false
    return false
}

console.log(rotationOfString("rotation", "tionrota"))