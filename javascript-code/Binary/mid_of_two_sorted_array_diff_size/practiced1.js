
function medidianOfTwoSortedArray(a, b) {
    let m = a.length
    let n = b.length
    // Ensure a is the smaller array
    if (n > m) return medidianOfTwoSortedArray(b, a)
         //high is m since after swaping n1 become b that's why high = m not n
    let low = 0, high = m
    let left = Math.floor(m + n + 1) / 2
    let n1 = m + n
     // Binary search on the smaller array
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2)
        let mid2 = left - mid1
        // Handle boundary elements
        let l1 = -Infinity, l2 = -Infinity
        let r1 = Infinity, r2 = Infinity
        if (mid1 < m) l1 = a[mid1]
        if (mid2 < n) l2 = b[mid2]
        if (mid1 - 1 >= 0) r1 = a[mid1 - 1]
        if (mid2 - 1 >= 0) r2 = b[mid2 - 1]
        if (l1 <= r2 && l2 <= r1) {

            if (n1 % 2 === 1) return Math.max(l1, l2)
            return (Math.max(l1, l2) + Math.max(r1, r2)) / 2.0

        }
        else if(l1>r2) {
            // move left 
            high = mid1-1
        }else{
            // move right
            low = mid1 +1
        } 
    }
    return 0

}
// Example usage
let a = [1, 4, 7, 10, 12];
let b = [2, 3, 6, 15];
console.log("Median is:", medidianOfTwoSortedArray(a, b));

//Time Complexity = O(log(min(m, n)))
// Because:We ALWAYS choose the smaller array for binary search.
// If m is smaller → we search on m → O(log m)
// If n is smaller → we search on n → O(log n)
// Both cases = O(log(min(m, n))).
// Array A → 20000 elements
// Array B → 10 elements
// Binary search should run on array of length 10, not 20000.
// So complexity = log(10),
// not log(20000).
// That’s why the formula uses min(m, n).