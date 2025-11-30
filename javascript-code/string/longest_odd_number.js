//Longest odd number in string

function longestOddNumber(s) {
    for (let i = s.length - 1; i >= 0; i--) {
        if ((s[i] - '0') % 2 === 1) {//we can write either of % 2 !== 0 this both the have same meaning
            //We do i + 1 because string indexing starts from 0, so to maintain the correct count we add +1.”
            return s.substring(0, i + 1)
        }
    }
    return " ";// if found no odd num give empty string 
}
let s = "504"
console.log(longestOddNumber(s))

// version two :Longest odd number in string Return largest odd number without leading zeroes”
//“Make the number valid”


function largestOddRemoveZero(num) {
    let ind = -1
    // Skip zeroes up to the found odd digit(until found odd digit)
    //note:We check whether i is less than or equal to ind because we want to skip zeros only
    //  before the last odd digit.

    // Step 1: find last odd digit
    for (let i = num.length - 1; i >= 0; i--) {
        if ((num[i] - '0') % 2 === 1) {
            ind = i;
            break
        }
    }
    if (ind === -1) return "";  // No odd found
    // Step 2: remove leading zeros
    let i = 0
    while (i <= ind && num[i] === '0')
        i++;//It removes all zeros from the front before the odd digit.
    //  i <= ind -We only check zeros until the index of the last odd digit.We don’t go beyond that.
    // num[i] === '0'-Check if the current character is '0'.
    // i++-If it's zero → move to next index.
    return num.substring(i, ind + 1)
}
let num = "0000407"

console.log(largestOddRemoveZero(num))