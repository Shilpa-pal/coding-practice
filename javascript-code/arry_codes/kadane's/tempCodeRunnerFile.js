// some varient subarray is:"
function maxSubarraySum(arr) {
    let n = arr.length
    let max = Number.MIN_SAFE_INTEGER
    let sum = 0
    let start = 0, anStart = -1, ansEnd = -1

    
    for (let i = 0; i < n; i++) {
        if (sum === 0) {
            start = i

        }
        sum += arr[i]
        if (sum > max) {
            max = sum
            anStart = start
            ansEnd = i
        }
        if (sum < 0) {
            sum = 0
        }
    }
    console.log("The maximum subarray sum is:", max);
    console.log("The subarray is:", arr.slice(anStart, ansEnd + 1));
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubarraySum(arr);
