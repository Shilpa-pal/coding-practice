
function findMinRotated(arr) {
    let n = arr.length
    let low = 0; high = n - 1
    let ans = Infinity

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (arr[low] <= arr[mid]) {
            ans = Math.min(ans, arr[low])
            low = mid + 1
        } else { //(arr[mid] <= arr[high]) else condition

            high = mid - 1
            ans = Math.min(ans, arr[mid])
        }
    }
    return ans
}
array = [4, 5, 6, 7, 1, 2]
let res = findMinRotated(array)
console.log("This is optimal solution of finding minimul value from the array",res)



// this code is work when whole array is sorted 
// mean left and right half
function findMin(arr) {
    let low = 0;
    let high = arr.length - 1;
    let ans = Infinity;

    while (low <= high) {
        // If the current range is already sorted
        /// If the search space is already sorted
        if (arr[low] <= arr[high]) {
            ans = Math.min(ans, arr[low]);
            break; // no need to check further
        }

        let mid = Math.floor((low + high) / 2);

        //  If left half is sorted
        //// smallest in left half  // go to right half
        if (arr[low] <= arr[mid]) {
            ans = Math.min(ans, arr[low]); // smallest in left half
            low = mid + 1; // move right
        }
        //  Else right half is sorted
        else {
            ans = Math.min(ans, arr[mid]); // mid might be the smallest
            high = mid - 1; // move left
        }
    }

    return ans;
}

// Example
const arr = [4, 5, 6, 7, 0, 1, 2];
console.log("Minimum element is:", findMin(arr));

// alternative solution 

class Solution {
    // Function to find the minimum element using binary search
    findMin(nums) {
        // Initialize low and high pointers
        let low = 0, high = nums.length - 1;

        // Binary search loop
        while (low < high) {

            // Calculate mid index
            let mid = Math.floor(low + (high - low) / 2);

            // Check which half to discard
            if (nums[mid] > nums[high]) {

                // Minimum lies in right half
                low = mid + 1;

            } else {
                // Minimum lies in left half (including mid)
                high = mid;
            }
        }
        // Return the minimum element
        return nums[low];
    }
}
// Input array
const nums = [4, 5, 6, 7, 0, 1, 2];

// Create object of Solutin
const sol = new Solution();
// Call function and store result
const result = sol.findMin(nums);
// Output the result
console.log("Minimum element is", result);

