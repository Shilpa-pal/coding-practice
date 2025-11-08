function findMissingK(arr, n, k) {
    let low = 0; high = n - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        // → counts how many numbers are missing before vec[mid]
        let missing = arr[mid] - (mid + 1)
        // we use above formula 2 times 1st during loop and 2nd after completing loop
        //         Both use the same formula missing = vec[index] - (index + 1)
        // ✅ same meaning,different timing. 
        //During loop:vec = [4, 7, 9, 10], k = 4
        //mid = 1 → missing = 7 - (1 + 1) = 5th number is missing above arr
        //mid = 0 → missing = 4 - (0 + 1) = 3rd number is missing above arr
        if (missing < k) {
            low = mid + 1// kth missing lies to the right
        } else {
            high = mid - 1// kth missing lies to the left
        }
    }
    
    // 🔹 After loop ends:
    // 'high' now points to the last index where missing < k.
    // Example: high = 0 → vec[high] = 4
    // missing before vec[high] = vec[high] - (high + 1)
    // = 4 - (0 + 1) = 3 → missing numbers are [1, 2, 3]

    // So the kth missing number is:
    // vec[high] + (k - missing_before_high)
    // which simplifies to → k + high + 1
    return k + high + 1
}
let arr = [4, 7, 9, 10];
let n = 4, k = 4;
let ans = findMissingK(arr, n, k);
console.log("The missing number is:", ans);