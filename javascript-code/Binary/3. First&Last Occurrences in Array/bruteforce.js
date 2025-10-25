// Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.
// Note: Consider 0 based indexing
// Examples:

// Example 1:
// Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
// Output: 4
// Explanation: As the target value is 13 , it appears for the first time at index number 2.
// Example 2:
// Input: N = 7, target=60, array[] = {3,4,13,13,13,20,40}
// Output: -1
// Explanation: Target value 60 is not present in the array 

function FirstLastocuurance(arr,x){
    let n = arr.length
    let first = -1
    let last = -1

    for(let i = 0;i<n;i++){
        if(arr[i] === x){// if this condition is true then only it goes to if condtion & if it not pass the condition
            //it return in the end -1 for both first and last
            if(first === -1){
                first = i
            }
             last = i
        }
    }
    return [first,last]
}
// Example:
let arr = [2, 4, 6, 8, 8, 8, 11, 13];
let x = 8;

const [first, last] = findFirstAndLast(arr, x);
console.log(`First occurrence: ${first}, Last occurrence: ${last}`);