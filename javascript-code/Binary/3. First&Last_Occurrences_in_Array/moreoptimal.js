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

//another alternative which is more optimal than above it used upperbond and lower bond insted of this we using below one
// Note:
// in this we write first will write the binary search for first occurance last binary search
//  used for last occurance

function forFirstoccurancr(array, n, x1) {
    let low = 0, high = n - 1
    let first = -1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (array[mid] === x1) {
            first = mid, 
            high = mid - 1// I am looking for the first so i should go on left that is high = mid -1
        } else if (array[mid] < x1) {// x is samller than arr[i] so go on right
            low = mid + 1

        } else {//arr[i]>x mean x is bigger than arr[i] so go on left 
            high = mid - 1
        }
    }
    return first
}

function forlastOccurrence(array, n, x1) {
    let low = 0, high = n - 1
    let last = -1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (array[mid] === x1) {
            last = mid,// for now this can be my answer
                low = mid + 1// I am looking for the last so i should go on right that is low = mid +1

        } else if (array[mid] < x1) {// x is samller than arr[i] so go on right
            low = mid + 1
        } else {//arr[i]>x mean x is bigger than arr[i] so go on left 
            high = mid - 1
        }
    }
    return last
}

//Note;below if we not found 1st occuance than there will be not last occurance for sure
function bothFirstLast(array,n,x1){
    //To check whether the element even exists in the array. If it does, we can then find the last occurrence.
    let fs = forFirstoccurancr(array,n,x1)
    //If the first occurrence is -1, that means the element was not found in the array.
    //If the ele doesn’t exist,there’s no need to find the last occurrence — because it can’t exist either.
    if(fs === -1) return [-1,-1]//
    //If the element exists (not -1), then we now find its last index using the second binary search
    //  function forlastOccurrence.
    let ls = forlastOccurrence(array,n,x1)
    return [fs,ls] //We return both first and last occurrence indexes as an array of two values.
}

let array  = [2,8,8,8,8,8,11,13]
let x1= 8
let n = array.length
console.log("In this  we made binary of first an d last seprately,",bothFirstLast(array,n,x1))

//time complexity
//Time complexity of one binary search: O(log n)
// We run two binary searches — one for first and one for last occurrence
//Total time = O(log n) + O(log n) =O(2 * log n)
//But since we ignore constant factors (like 2) in Big-O notation:
//Final Time Complexity = O(log n) ✅

//Space Complexity
//Each function uses only a few variables (low, high, mid, etc.),
//so no extra data structures are used.
//Space Complexity = O(1) (constant space)