
//You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.
// Example 1:
// Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
// Output: 4
// Explanation: 3 is occurring 4 times in 
// the given array so it is our answer.

// Example 2:
// Input: N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
// Output: 5
// Explanation: 2 is occurring 5 times in the given array so it is our answer.


function firstoccurance(arr,n,x){
    let low = 0,high = n-1
    let first = -1
    while(low<=high){
        let mid = Math.floor((low +high)/2)
         // maybe an answer
        if(arr[mid]===x){
            first = mid
               // look for smaller index on the left
            high = mid -1 // continue searching in left half
        }else if(arr[mid]<x){
            // look on the right
            low= mid+1

        }else{
            high = mid - 1// look on the left
        }
    }
    return first
}
function lastOcuurance(arr,n,x){
    let low = 0,high = n-1
    let last = -1
    while(low<=high){
        let mid = Math.floor((low +high)/2)
        if(arr[mid]===x){
            last = mid,
            // look for larger index on the right
            low = mid +1 // continue searching in right half
        }else if(arr[mid]<x){
            low = mid+1  // look on the right

        }else{
            high = mid - 1 // look on the left
        }
    }
    return last
}

function countNumofOccuarnce(arr,n,x){
    let fs = firstoccurance(arr,n,x)
    if(fs === -1) return [-1,-1]// x not found in array
    let ls = lastOcuurance(arr,n,x)
    return [fs,ls]
    //return (fs -ls +1)   // WITH this line i can get answer  of counting arry of number also 
    // but in below i written in detailed way of code
}

function counting(arr,n,x){
    let [fs,ls] = countNumofOccuarnce(arr,n,x)
    if(fs === -1) return 0;
    return ls-fs + 1   // this line of code will gove exact number of occurance
}

let arr  = [2,8,8,8,8,8,11,13]
let x= 8
let n = 8
let ans = counting(arr,n,x)

// It give from 1st index to last index ocuurance of number
console.log("In this  we made binary of first and last seprately,",countNumofOccuarnce(arr,n,x))
// it give Count Occurrences in Sorted Array means how many time it appered
console.log("This will give counting occurance of number ",ans)


// Combined Time Complexity:

// Finding first occurrence → O(log n)
// Finding last occurrence → O(log n)

// Total = O(log n + log n) = O(2 × log n)
// and constants are ignored in Big-O,
//  So final complexity = O(log n)