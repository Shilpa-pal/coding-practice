// Problem Statement: Given two numbers N and M, find the Nth root of M. 
// The nth root of a number M is defined as a number X when raised to the 
// power N equals M. If the 'nth root is not an integer, return -1

// Input: N = 3, M = 27
// Output: 3
// Explanation: The cube root of 27 is equal to 3.

// Input : N = 4, M = 69
// Output: -1
// Explanation : The 4th root of 69 does not exist. So, the answer is -1.

//Note :We take the power of x because we are literally testing if raising x to the
//  Nth power equals M — that’s the mathematical definition of an Nth root.

function nthRoot(n,m){
    let low = 1;high = m
    while(low<=high){
        let mid = Math.floor((low+ high)/2)
        let power = Math.pow(mid,n)
        if(power === m){
            return mid // found exact root
        }else if(power<m){
             low = mid + 1 // found exact root
        }else {
            high = mid -1
        }
    }
    return -1 // if no integer root found
}
let n = 3 // n → the root (for example, cube root means n = 3)
let m = 27 //m → the number we want the root of (for example, m = 27)
let ans = nthRoot(n,m)
console.log(`The ${n}th root of ${m} is:`, ans)


// Time Complexity:
// O(log m) because we halve the search space each time (binary search).
