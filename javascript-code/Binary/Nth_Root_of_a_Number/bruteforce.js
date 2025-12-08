
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

function nthRootBruteForce(n,m){
   for(let x =1;x<=m;x++){
    let power = Math.pow(x,n) // means x^n
    //here above we take power of x
    //If n = 3 and m = 27
    //we need to find x such that x3=27
    // it check  index by index which ever index it found x3 = 27 it return the index
        if(power === m){
            return x // found integer root
        }else if (power>m){
            break  // no need to continue
        }
    }
    return -1 // no integer root found
}
let n = 3 // n → the root (for example, cube root means n = 3)
let m = 27 //m → the number we want the root of (for example, m = 27)
let ans = nthRootBruteForce(n,m)
console.log(`The ${n}th root of ${m} is:`, ans)

// Time Complexity:
// O(M) → because we check every number up to M.
// We can later optimize this using binary search (O(log M)).