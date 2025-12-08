//Problem Statement: You are given a positive integer n. Your task is to find and return its 
// square root. If ‘n’ is not a perfect square, then return the floor value of sqrt(n).

// Input: N = 36
// Output: 6
// Explanation: Square root of 36 is 6. 

// Input: N = 28
// Output: 5
// Explanation: Square root of 28 is approximately 5.292. So, the floor value will be 5. 
            
function squareroot(x){
    let ans = 0
    // On below i tinitalize with 1 becuase when we start with 0 we will get 0 output if we multiply with i*i
    for(let i =1;i<=x;i++){
        if(i*i<=x){
            ans = i
        }else{
            break
        }
    }
    return ans
}

let x = 27
console.log("it give square root number ",squareroot(x))