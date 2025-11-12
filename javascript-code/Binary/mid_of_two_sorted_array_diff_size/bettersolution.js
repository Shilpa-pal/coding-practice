//Median of Two Sorted Arrays of different sizes
// Problem Statement:
// Given two sorted arrays arr1 and arr2 of size m and n respectively, return the median of the two sorted arrays. 
// The median is defined as the middle value of a sorted list of numbers. In case the length of the list is even, 
// the median is the average of the two middle elements.

//Examples
// Input: n1 = 3, arr1[] = {2,4,6}, n2 = 3, arr2[] = {1,3,5}
// Output: 3.5
// Explanation: 
// The array after merging 'a' and 'b' will be {1, 2, 3, 4, 5, 6}. As the length of the merged list is even, the median is the average of the two middle elements. Here two medians are 3 and 4. So the median will be the average of 3 and 4, which is 3.5.

// Input: n1 = 3, arr1[] = {2,4,6}, n2 = 2, arr2[] = {1,3}
// Output: 3
// Explanation: 
// The array after merging 'a' and 'b' will be { 1, 2, 3, 4, 6 }. The median is 3.

// Function to find median of two sorted arrays
function median(a, b) {
    // Get sizes
    let n1 = a.length, n2 = b.length

    //Total size
    let n = n1 + n2

    // Median indices
    //     ind2 = Math.floor(9 / 2) = 4
    // ind1 = ind2 - 1 = 3
    let ind2 = Math.floor(n / 2)
    let ind1 = ind2 - 1

    // Initialize counters and pointers
    let i = 0, j = 0, cnt = 0
    let ind1el = -1, ind2el = -1

    //merge step 
    //This loop runs as long as both arrays have elements left to compare.
    //It stops when one array is completely traversed.
    while (i < n1 && j < n2) {
        //Compare the current elements of both arrays (a[i] and b[j]).
        //Pick the smaller one because, in sorted order, the smaller number would come first.
        if (a[i] < b[j]) {
            // These two below lines check whether the current merged position (cnt)
            //matches one of the median indices (ind1 or ind2).
            //If yes, it means the element we are taking right now is at that median position, so we store it in ind1el or ind2el.
            if (cnt === ind1) ind1el = a[i] //
            if (cnt === ind2) ind2el = a[i]
            i++
        } else {
            if (cnt === ind1) ind1el = a[j]
            if (cnt === ind2) ind2el = a[j]
            j++
        }
        cnt++
    }// Remaining from a
    while (i < n1) {
        if (cnt === ind1) ind1el = a[i];
        if (cnt === ind2) ind2el = a[i];
        i++;
        cnt++;
    }
    // Remaining from b
    while (j < n2) {
        if (cnt === ind1) ind1el = b[j];
        if (cnt === ind2) ind2el = b[j];
        j++;
        cnt++;
    }
    // Return the median
    if (n % 2 === 1) return ind2el * 1.0;
    return (ind1el + ind2el) / 2.0;

}
// Driver code
let a = [1, 4, 7, 10, 12];
let b = [2, 3, 6, 15];
console.log("The median is " + median(a, b).toFixed(1));
// Complexity Analysis
// Time Complexity: O(N1+N2), every element of both the arrays is visited once.
// Space Complexity: O(1), constant extra space is used.