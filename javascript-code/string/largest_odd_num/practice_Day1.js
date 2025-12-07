
// longest odd number in string
// this solution give largest odd number not in the string
//for-of loop method

function largeOddNum(str) {
    let a = str.split("").sort((a, b) => (b - a))

  
    for (let ch of a) {
        if ((ch - '0') % 2 === 1) {
            return ch
        }
    }
    return " "
}
let str = "7308"
console.log(largeOddNum(str))

// using Traditional for loop

function largestOddDigit(string){
    let s = string.split("").sort((a,b)=>(b-a))// sort digits descending
    for(let i =0;i<s.length;i++){
        let digit = s[i]-'0'
        if(digit % 2 === 1){
            return s[i]// return the odd digit
        }
    }
    return "" // if no odd digit found
}
console.log(largestOddDigit("97"));    // 9
console.log(largestOddDigit("9705"));  // 9
console.log("output is=>",largestOddDigit("2468"));  // ""