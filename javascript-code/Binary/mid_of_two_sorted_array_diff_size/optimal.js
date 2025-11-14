// Ensure a is the smaller array to minimize binary search scope
// we should Ensures array a is always the smaller one. if not then make it by swaping and return findMedianSortedArrays(b, a);
//if it already smaller no need to swap and return anything
//if not like our array we need to swap it
function findMedianSortedArrays(a, b) {
    let n1 = a.length;
    let n2 = b.length;

    // Ensure a is the smaller array
    if (n1 > n2) return findMedianSortedArrays(b, a);
    //high is n1 since after swaping n1 become b that's why high = n1 not n2
    let low = 0, high = n1; //// low = 0, high = 5
    let left = Math.floor((n1 + n2 + 1) / 2);
    let n = n1 + n2;
    // Binary search on the smaller array
    while (low <= high) {
        // Calculate the mid positions for both arrays
        let mid1 = Math.floor((low + high) / 2); // Math.floor((0 + 5) / 2) = 2
        let mid2 = left - mid1;// Math.floor((n1 + n2 + 1) / 2) - mid1; it can be written like this also
        //mid2 = left - mid1 = 5 - 2 = 3
        // Take 2 elements from array a
        // Take 3 elements from array b
        // Total = 5 elements (correct)

        // Handle boundary elements
        let l1 = -Infinity, l2 = -Infinity;
        let r1 = Infinity, r2 = Infinity;

        if (mid1 < n1) r1 = a[mid1];
        if (mid2 < n2) r2 = b[mid2];

        if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
        if (mid2 - 1 >= 0) l2 = b[mid2 - 1];
        // If correct partition
        if (l1 <= r2 && l2 <= r1) {
            // Total even => average of max left and min right
            if (n % 2 === 1) return Math.max(l1, l2);
            return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
        }
        else if (l1 > r2) {
            // Shift left in a[]
            high = mid1 - 1;
        } else {
            // Shift right in a[]
            low = mid1 + 1;
        }
    }

    return 0; // fallback (should never reach)
}
// Example usage
let a = [1, 4, 7, 10, 12];
let b = [2, 3, 6, 15];
console.log("Median is:", findMedianSortedArrays(a, b));