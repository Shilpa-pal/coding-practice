//Problem Statement: Given an integer array arr of size N, sorted in ascending order 
// (with distinct values) and a target value k. Now the array is rotated at some pivot point 
// unknown to you. Find the index at which k is present and if k is not present return -1.

// Example 1:
// Input Format: arr = [4,5,6,7,0,1,2,3], k = 0
// Result: 4// Explanation: Here, the target is 0. We can see that 0 is present in the given
//  rotated sorted array, nums. Thus, we get output as 4, which is the index at which 0 is present in the array.

function findRoatedTargetNum(arr, n, k) {
    let low = 0 //low → start of array
    high = n - 1 //high → end of array

    while (low <= high) {// this is condition to stop loop
        let mid = Math.floor((low + high) / 2)// formula of binary search that divide array into sort 
        //If the middle element equals the target, return its index immediately.
        if (arr[mid] === k) return mid
        // Left part is sorted
        if (arr[low] <= arr[mid]) {
            //If above condition is true, it means:
            //Elements from low → mid are in sorted order.
            //In fst iteration example below:
            //arr[low] = 7, arr[mid] = 2 → 7 <= 2  (false)
            //So, the left part is not sorted, the right part must be sorted.

            if (arr[low] <= k && k <= arr[mid]) {// element exists in left half
                high = mid - 1
            } else {// element exists in right half
                low = mid + 1
                //  If the target k lies between the range of arr[low] to arr[mid],
                // then move high to mid - 1 (search left).
                // Otherwise, move low to mid + 1 (search right).
            }
        }
        else {//else condition (arr[mid] <= arr[high])
            //             If k lies between arr[mid] and arr[high],
            // move low to mid + 1 → search right half.
            // Else, move high to mid - 1 → search left half.
            if (arr[mid] <= k && k <= arr[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}
let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let n = 9, k = 1;
let ans = findRoatedTargetNum(arr, n, k);
if (ans === -1)
    console.log("Target is not present.");
else
    console.log("The index is:", ans);

//timecomplexity
// O(log n) → Binary search halves the array each step.

// O(1) space.