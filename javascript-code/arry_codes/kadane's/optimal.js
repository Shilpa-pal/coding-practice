//given an integar array nums,find the subarray with the largest sum and return an item.
//kadane's alogritham apply 

function kadaneApply(array) {
    let n = array.length
    let cursum = 0
    maxsum = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < n; i++) {
        cursum += array[i]

        maxsum = Math.max(cursum, maxsum)

        // If sum < 0: discard the sum calculated
        if (cursum < 0) {
            cursum = 0
        }
    }
    return maxsum
}
let y = [3, -4, 5, 4, -1, 7, -8]
console.log("it print max subarray by kadan's method", kadaneApply(y))
//Time Complexity: O(N2), where N = size of the array.
//Reason: We are using two nested loops, each running approximately N times.
//Space Complexity: O(1) as we are not using any extra space.


// some varient subarray is:"
function maxSubarraySum(arr) {
    let n = arr.length
    let max = Number.MIN_SAFE_INTEGER
    let sum = 0
    let start = 0, anStart = -1, ansEnd = -1

    
    for (let i = 0; i < n; i++) {
        if (sum === 0) {// when current running sum become 0(or negative) it means previous sum is not usesful
            //So we “reset” and say:
            start = i //“The next subarray should begin from here.”
            //Note is number less than max than it useless 

        }
        sum =  sum + arr[i]  // it calulate sum 
        //When we find a new maximum sum (sum > maxi), we want to remember which subarray gave us this new best sum.
        if (sum > max) {
            max = sum
            anStart = start //start = where that subarray began.
            ansEnd = i//i = where that subarray ended (current index).
//Array: [-2, 1, -3, 4]
// At i=0: sum = -2 (bad) → reset sum=0, and set start = 1 (next element may start new subarray).
// At i=1: sum = 1 (new maximum) → lock:
// ansStart = start = 1
// ansEnd = i = 1
// At i=3: sum = 4 (new maximum again) → lock:
// ansStart = start = 3
// ansEnd = i = 3
        }
        if (sum < 0) {
            sum = 0
        }
    }
    console.log("The maximum subarray sum is:", max);
    //If the best subarray is from index 3 to 6then ansStart = 3 ,ansEnd = 6
    //But if we just do arr.slice(3, 6), we’ll only get indices 3, 4, 5 → [4, -1, 2] , (missing last element).
//So we add +1:
    console.log("The subarray is:", arr.slice(anStart, ansEnd + 1));

}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubarraySum(arr);
