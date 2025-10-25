//Problem Statement: You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
// The floor of x is the largest element in the array which is smaller than or equal to x.
// The ceiling of x is the smallest element in the array greater than or equal to x.

// Example 1:
// Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
// Result: 4 7
// Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

//optimal approach
function findFloor(arr, n, x) {
    let low = 0, high = n - 1
    let ans = -1 //It (gives a default “not found” value.
    //If at the end ans is still -1, it means there was no valid floor or ceil in the array
     //sefty-Prevents errors when no suitable element exists.

     // floor below use upperbound condition Yes, I know you have doubt in upper bond we were only 
     //useing > than sign like lower bond we were use >= sign but in upper bound we only remove th equal 
    //   > → gives the first greater value.
    // <= → gives the last smaller or equal value.
    // <= goes till the last possible value (that’s less than or equal to x).
     while (low <= high) {
        let mid = Math.floor((low + high) / 2)
         // maybe an answer 
         // aplly upperbnd contion and use sign <= smaller than equal to x
    
        if (arr[mid] <= x) {
            ans = arr[mid]
             // look for a larger floor on the right
            low = mid + 1
        } else {
            high = mid - 1 // look on the left
        }
    }
    return ans
}
function findCeil(arr, n, x) {
    let low = 0, high = n - 1
    ans = -1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
         // maybe an answer
        if (arr[mid] >= x) {
            ans = arr[mid]
// look for smaller ceil on the left
            high = mid - 1
        } else {
            low = mid + 1//// look on the right
        }
    }
    return ans
}
function getFloorCeil(arr, n, x) {
    const f = findFloor(arr, n, x)
    const c = findCeil(arr, n, x)
    return [f, c]
}

let arr = [3, 4, 4, 7, 8, 10]
let n = arr.length
let x = 5
const [f, c] = getFloorCeil(arr, n, x) //returns an array of two values.
//(f, c) → does not work as a tuple in JS, it just evaluates to c.
console.log(`This Give ans of Floor , ${f} and ${c}`) 