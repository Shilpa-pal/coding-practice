class Solution {
rotateString(str,goal){
// Strings must be of the same length to be rotations of each other
    if(str.length !== goal.length) return false
// Concatenate str with itself
    let doubledStr = str + str // the output will be "rotationrotation"
    return doubledStr.includes(goal)// Check if goal is a substring of s + s
    // basically includes is inbuild function that cheack goal part exist in doubledStr
}

}
const sol = new Solution();
console.log(sol.rotateString("rotation", "tionrota")); 
