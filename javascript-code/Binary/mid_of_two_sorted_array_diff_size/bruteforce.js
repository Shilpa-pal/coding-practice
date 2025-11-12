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


function medianOfTwosortedArray(arr1, arr2) {

    let merged = []
    let i = 0, j = 0

    //M  erge both array
    if (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i])
            i++
        } else {
            merged.push(arr2[j])
            j++
        }
    }
    // Add remaining elements
    while (i < arr1.length) merged.push(arr1[i++])
    while (j < arr2.length) merged.push(arr2[j++])

    // Find median
    const n = merged.length
    if(n %2 ==1)
        return merged[Math.floor(n/2)] // this formula for odd number of array
    else{
        return (merged[n/2-1] + merged[n/2])/2 // This formula for even number of array
    }
}
let arr1 = [2,4,6]
let arr2 = [2]
console.log("The Median of Two Sorted Arrays of different sizes",medianOfTwosortedArray(arr1,arr2))
// Complexity Analysis
// Time Complexity: O(N1+N2)), every element of both array is visited once.
// Space Complexity: O(N1+N2), to store the merged array.