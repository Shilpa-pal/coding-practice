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