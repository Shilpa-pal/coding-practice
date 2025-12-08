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


//alterantive  it CAN also beknow find largest integer whose square ≤ x.
//That’s the floor value of √x.

function squareRoot(x) {
    if (x === 0 || x === 1) return x; // base cases

    let low = 1;
    let high = x;
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (mid * mid === x) {
            return mid; // perfect square
        } else if (mid * mid < x) {
            ans = mid; // store possible answer
            low = mid + 1; // search in right half
        } else {
            high = mid - 1; // search in left half
        }
    }

    return ans; // floor value of sqrt
}

let x = 27;
console.log("Square root (floor):", squareRoot(x));

//smallest integer whose square ≥ x.That’s the ceil value of √x.
// Since we want the ceil square root,
// When mid * mid < x2, store mid + 1 as a possible ceil.
// When mid * mid > x2, move left.
// If we find an exact square (mid * mid === x2), just return mid.

function ceilSqrt(x2){
    if(x2 ===0 || x2 === 1) return x2

    let low = 0
    let high = x2
    let ans = 0
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        if (mid * mid === x2) 
            return mid // perfect square
        else if(mid *mid<x2){
            low = high +1 // // mid is smaller, so move right
        }
        else{//mid * mid > x2  // mid is smaller, so move right
            ans = mid
            high = low -1
        }
    }
    return ans 

}

let x2 = 28;
console.log("Ceil sqrt of", x2, "=", ceilSqrt(x2));

//Combined floor and ceil Square Root (no built-in functions) used 

function floorAndCeilSqrt(x) {
    if (x === 0 || x === 1) {
        return { floor: x, ceil: x }; // both same for 0 & 1
    }

    let low = 1;
    let high = x;
    let floorValue = 0;
    let ceilValue = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let square = mid * mid;

        if (square === x) {
            // perfect square → both are same
            floorValue = ceilValue = mid;
            return { floor: floorValue, ceil: ceilValue };
        } 
        else if (square < x) {
            floorValue = mid;     // possible floor
            low = mid + 1;        // move right
        } 
        else {
            ceilValue = mid;      // possible ceil
            high = mid - 1;       // move left
        }
    }

    return { floor: floorValue, ceil: ceilValue };
}

let n = 28;
let result = floorAndCeilSqrt(n);

console.log(`For number ${n}:`);
console.log("Floor sqrt =", result.floor);
console.log("Ceil sqrt =", result.ceil);
