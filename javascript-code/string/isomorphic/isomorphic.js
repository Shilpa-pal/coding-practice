// Problem Statement: Given two strings s and t, determine if they are isomorphic. Two strings s and t
//  are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order
//  of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1
// Input: s = "paper", t = "title"
// Output: true
// Explanation: The characters in "s" can be mapped one-to-one to characters in "t": 
// 'p' → 't', 'a' → 'i', 'e' → 'l', 'r' → 'e'
// Since the mapping is consistent and unique for each character, the strings are isomorphic.

// Example 2
// Input: s = "foo", t = "bar"
// Output: false
// Explanation: 'f' → 'b' is fine, 'o' → 'a' for the first 'o', But the second 'o' in "s" would need to map to 'r' in "t", which conflicts with the earlier mapping of 'o' → 'a'
// This inconsistency makes it impossible to convert "s" to "t" using a one-to-one character mapping.


function isIsomorphic(str1,str2){
    let n = str1.length
    let mapstr1 = {}
    let mapstr2 = {}
    for(let i =0;i<n;i++){
        const c1 = str1[i]
        const c2 = str2[i]
 // Check if current mapping is inconsistent
 //Uses (mapS[s[i]] || 0) to handle the default “not seen yet” case.
        if((mapstr1[c1]||0) !==(mapstr2[c2] ||0)) return false

//mapstr1[c1] = i + 1;means This is for tracking last seen index in isomorphic string problem.
//If we stored just i, then the first character at index 0 would also store 0.
//But 0 is already the default value for unseen characters.this would make it impossible to distinguish between:
// A character that has never been seen (0) & A character that was seen at index 0 (0 if we stored just i).
//By storing i + 1, we shift everything by 1:
//First character → index 0 → stored as 0 + 1 = 1 //Second character → index 1 → stored as 2
// And so on. here 0 clearly means “never seen”.
// Any positive number (1, 2, 3…) represents the last seen position + 1.
// Comparison works correctly:

        mapstr1[c1] = i+1
        mapstr2[c2] = i+1  
    }
    return true
}

// Example usage:
console.log(isIsomorphic("egg", "add"));   // true
console.log(isIsomorphic("foo", "bar"));   // false
console.log(isIsomorphic("paper", "title")); // true

//alternative ..
class Solution {
    findIsomorphic(s,t){
        let m1 = new Array(256).fill(0)
        let m2 = new Array(256).fill(0)

        let n = s.length
        for(let i = 0;i<n;i++){
            if(m1[s.charCodeAt(i)] !==(m2[t.charCodeAt(i)])) return false
            // Update positions with current index + 1
              m1[s.charCodeAt(i)] = i + 1;
              m2[t.charCodeAt(i)] = i + 1;
        }
        return true
    }
}
const solution = new Solution();
  
  // Input strings
  const s = "paper";
  const t = "title";
  // Check and print result
  if (solution.isomorphicString(s, t)) {
      console.log("Strings are isomorphic.");
  } else {
      console.log("Strings are not isomorphic.");
  } 