// Search in a row and column-wise sorted matrix

// Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote
//  the number of rows and columns, respectively. The elements of each row and each column are sorted
// in non-decreasing order.
// But, the first element of a row is not necessarily greater than the last element of the previous 
// row (if it exists).
// You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.

function findTarget(matrix,target){
    const n = matrix.length, m = matrix[0].length;
    for(let i =0;i<n;i++){
        for(let j =0;j<m;j++){
            if(matrix[i][j] === target){
                return true
            }
        }
    }
    return false
}
const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const result = findTarget(matrix, 8);
console.log(result ? "true" : "false");
// Complexity Analysis
// Time Complexity: O(N X M), where N = given row number, M = given column number.
// Reason: In order to traverse the matrix, we are using nested loops running for n and m times respectively.

// Space Complexity: O(1) as we are not using any extra space.
