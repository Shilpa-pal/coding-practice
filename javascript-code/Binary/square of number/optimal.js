class Solution {
    // This function returns the floor value of the square root of a number
    mySqrt(x) {
        // Handle small numbers directly
        if (x < 2) return x;

        // Initialize binary search range
        let left = 1, right = Math.floor(x / 2), ans = 0;

        // Perform binary search
        while (left <= right) {
            // Find middle point
            let mid = Math.floor((left + right) / 2);

            // Check if mid*mid is less than or equal to x
            if (mid * mid <= x) {
                // Store mid as potential answer
                ans = mid;
                // Move to right half
                left = mid + 1;
            } else {
                // Move to left half
                right = mid - 1;
            }
        }

        // Return final answer
        return ans;
    }
}

const s = new Solution();
console.log(s.mySqrt(8));