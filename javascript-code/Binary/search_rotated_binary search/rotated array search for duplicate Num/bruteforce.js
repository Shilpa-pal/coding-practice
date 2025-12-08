//Given an integer array arr of size N, sorted in ascending order (may contain duplicate values) and a target value k.
//  Now the array is rotated at some pivot point unknown to you. Return True if k is present 
// and otherwise, return False. 
// Example 1:
// Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 3
// Result: True
// Explanation: The element 3 is present in the array. So, the answer is True.

// Example 2:
// Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 10
// Result: False
// Explanation: The element 10 is not present in the array. So, the answer is False.

function linearsearch(arr,x){
    let n = arr.length
    for(let i =0;i<n;i++){
        if(arr[i] === x ){
            return true 
        }  // here I was written else condtion  and it returns the false that would be wrong
    }
    return false  //this is write place to return false
}
let arr =[7, 8, 1, 2, 3, 3, 3, 4, 5, 6]
let k = 3
let ans = linearsearch(arr,k)
console.log("this is brute force approche solution",ans)