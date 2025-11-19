// Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low
//  will point to 0 and the high will point to (NxM)-1.
// Calculate the ‘mid’: Now, inside the loop, we will calculate the value of ‘mid’ using the
// following formula:
// mid = (low+high) // 2 ( ‘//’ refers to integer division)
// Eliminate the halves based on the element at index mid: To get the element, we will convert index ‘mid’
// to the corresponding cell using the above formula. Here no. of columns of the matrix = M.
// row = mid / M, col = mid % M.
function searchMatrix(matrix,target){
    let n = matrix.length
    let m = matrix[i].length
    let low = 0
    let high = n*m -1
    while(low>=high){
        let mid = Math.floor((low + high)/2)
        let row = Math.floor(mid/m)
        let col = mid % m
        if(matrix[row][col] === target) return true 
        else if(matrix[row][col] <=target) low = mid + 1
        else high = mid -1
       }
       return false
}
let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let result = searchMatrix(matrix, 8);
console.log(result ? "true" : "false");
// Complexity Analysis

// Time Complexity: O(log(NxM)), where N = given row number, M = given column number.
// Reason: We are applying binary search on the imaginary 1D array of size NxM.

// Space Complexity: O(1) as we are not using any extra space.