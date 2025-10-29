function findrotatedArrayDuplicateNum(arr, k) {
    let n = arr.length
    let low = 0
    let high = n - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)//This finds the middle element each time.
        // //if mid points the target
        if (arr[mid] === k)
            return true
    
        //edge case
        //If the start, middle, and end elements are all equal,
// We can’t decide which part is sorted, so we shrink the search range from both ends:
// low++ → move low one step right
// high-- → move high one step left
// By doing this, we skip the duplicate values and move inward,
        if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
            low = mid + 1
            high = mid - 1
            continue;
        }
        // if left part is sorted:
        if (arr[low] <= arr[mid]) {
            if (arr[low] <= k && k <= arr[mid]) {
                // //element exists:
                high = mid - 1
            } else {
                //element does not exists:
                low = mid + 1 // 
            }
        } else {//if right part is sorted:
            if (arr[mid] <= k && k <= arr[high]) {
                 //element exists:
                low = mid + 1
            } else {
                //element does not exist:
                high = mid - 1
            }
        }
    }
    return false
}

let arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
let k = 3;
let ans = findrotatedArrayDuplicateNum(arr, k);
if (!ans) {
    console.log("Target is not present.");
} else {
    console.log("Target is present in the array.");
}
