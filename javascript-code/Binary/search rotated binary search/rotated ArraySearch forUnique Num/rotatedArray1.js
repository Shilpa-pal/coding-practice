//Problem Statement: Given an integer array arr of size N, sorted in ascending order 
// (with distinct values) and a target value k. Now the array is rotated at some pivot point 
// unknown to you. Find the index at which k is present and if k is not present return -1.

// Example 1:
// Input Format: arr = [4,5,6,7,0,1,2,3], k = 0
// Result: 4// Explanation: Here, the target is 0. We can see that 0 is present in the given
//  rotated sorted array, nums. Thus, we get output as 4, which is the index at which 0 is present in the array.

//note : In this question we have to rotate array index and find target number also 
// below performed binary search to find a target index

function rotatesearch(arr,x){
    for(let i =0;i<arr.length;i++){
        if(arr[i]===x){
            return i // return index
        }
    }
    return -1  // return -1 if not found
}
let arr = [4,5,6,7,0,1,2,3]
let x = 0
console.log(" finding the rotete number index ",rotatesearch(arr,x))