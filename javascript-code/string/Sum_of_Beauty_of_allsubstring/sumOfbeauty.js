//Sum of Beauty of all substring

function sumOfSubstring(str) {
    let n = str.length

    let total = 0
    for (let i = 0; i < n; i++) {
        let freq = {}
        // Loop through all substrings
        for (let j = 0; j < n; j++) {
            const ch = str[j]
            //This takes the character at index `j` from string `str`.
            //Example: if `s = "abba"` and `j = 0`, then `ch = 'a'`.
            freq[ch] = (freq[ch] || 0) + 1
            // freq = {} initially.
            // ch = 'a'
            // freq['a'] does not exist → it is undefined
            // (undefined || 0) becomes 0
            // 0 + 1 = 1
            // So now: freq['a'] = 1

            const values = Object.values(freq);
            const maxFreq = Math.max(...values);
            const minFreq = Math.min(...values);

            total += (maxFreq - minFreq);
        }

    }
    return total
}
let str = "abba"
let ans = sumOfSubstring(str)
console.log("Beauty Sum:", ans)

// alternative way to do it
// it's only use for lowercase 
//if want to use for uper case 
// use below instruction 
// const s = "ABC";
// console.log(s.charCodeAt(0) - 'A'.charCodeAt(0)); // 0 
// console.log(s.charCodeAt(0) - 'a'.charCodeAt(0)); // -32 

// If your string has only uppercase, you must subtract 'A', not 'a'.
// If your string has only lowercase, subtract 'a'.
// If it has both, either:
// Use a 52-size array and map indices separately, or
// Convert the string to all lowercase (or uppercase) and use a 26-size array.


class Solution {

    // Get minimum non-zero frequency
    getMinCount(freq) {
        let minCount = Infinity;
        for (let count of freq) {
            if (count !== 0) {//we can not consider to equal To 0 value bacuse it would be no substring
                //  above line means- “Skip all characters whose frequency is 0.”
                // Because a frequency of 0 means:
                // That character does not appear in the current substring.
                // So we cannot take it as the minimum frequency, because it’s not part of the substring.
                minCount = Math.min(minCount, count);
            }
        }
        return minCount;
    }

    // Get maximum frequency
    getMaxCount(freq) {
        let maxCount = 0;
        for (let count of freq) {
            maxCount = Math.max(maxCount, count);
        }
        return maxCount;
    }

    // Main function: beauty sum
    beautySum(s) {
        // s = s.toLowerCase();   // Convert all characters to lowercase
        let sum = 0;
        const n = s.length;

        for (let i = 0; i < n; i++) {
            // freq array of size 26 → all zeros
            const freq = Array(26).fill(0);

            for (let j = i; j < n; j++) {
                // Convert character to index: same as freq[s[j] - 'a']++
                // we can youse Captial letter for upppercase
                const idx = s.charCodeAt(j) - 'a'.charCodeAt(0);
                freq[idx]++;

                // Calculate beauty
                const beauty =
                    this.getMaxCount(freq) - this.getMinCount(freq);

                sum += beauty;
            }
        }
        return sum;
    }
}

// Test it
const sol = new Solution();
console.log(sol.beautySum("xyx"));  // Output: 2
