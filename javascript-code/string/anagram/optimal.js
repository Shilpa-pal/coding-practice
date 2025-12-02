function checkAnagram(str1, str2) {
    // If lengths differ -> not anagrams
    if (str1.length !== str2.length) return false;
    // Create maps (objects) to store char frequencies
    let mapa = {}
    let mapb = {}
    // Count chars in str1
    for (let ch of str1) {
        mapa[ch] = (mapa[ch] || 0) + 1
    }
    // Count chars in str1
    for (let ch of str2) {
        mapb[ch] = (mapb[ch] || 0) + 1
        // ch = 'a'
        // ma['a'] = (ma['a'] || 0) + 1;
        // // ma['a'] = (undefined || 0) + 1  → 1

        // // a appears again
        // ma['a'] = (ma['a'] || 0) + 1;
        // // ma['a'] = (1 || 0) + 1 → 2

    }
    // Compare both maps
    for (const key in mapa) {
        if (mapa[key] !== mapb[key])
            return false

    }
    return true; // Both maps match

}
let str1 = "CAT"
let str2 = "ACT"
let ans = checkAnagram(str1, str2)
console.log(ans)

//different way to solved it

function isAnagram(s1, s2) {
    //when both of the strings have different lengths
    if (s1.length !== s2.length) {
        return false
    }
    // Initialize a frequency array to store character counts
    let freq = new Array(26).fill(0)
    // Count frequency of each character in str1
    for (let i = 0; i < s1.length; i++) {
        freq[s1.charCodeAt(i) - 'A'.charCodeAt(0)]++// Increment frequency for each character in str1
    }
    for (let i = 0; i < s2.length; i++) {
        freq[s2.charCodeAt(i) - 'A'.charCodeAt(0)]--;  // Decrement frequency for each character in str2
    }
    //note: Why are we doing increment in one place and decrement in another?............
    // Increment = counting characters in the first string
// Decrement = removing the count using the second string
// If everything cancels to zero, the strings are anagrams
    // Check if all frequencies are zero, meaning both strings have the same characters
    for (let i = 0; i < 26; i++) {
        if (freq[i] !== 0)  // If any frequency is non-zero, they are not anagrams
            return false;
    }
    return true;  // The strings are anagrams if all frequencies are zero

}
// Driver code
const S1 = "INTEGER";
const S2 = "TEGERNI";

// Check if the strings are anagrams and output the result
if (isAnagram(S1, S2)) {
    console.log("True");  // Output "True" if they are anagrams
} else {
    console.log("False");  // Output "False" if they aren't anagrams
}