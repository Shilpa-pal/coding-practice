function searchElement(matrix,target){
    let n = matrix.length
    let m = matrix[0].length
    let row = 0
    let col = m-1
    while(row<n && col>= 0){
        if(matrix[row][col] === target) return true
        else if (matrix[row][col] < target) row++;
        else col--;
    }
    return false;
}
const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];

const result = searchElement(matrix, 8);
console.log(result ? "true" : "false");
// Time Complexity: O(N+M), where N = given row number, M = given column number.
// Reason: We are starting traversal from (0, M-1), and at most, we can end up being in the
//  cell (M-1, 0). So, the total distance can be at most (N+M). So, the time complexity is O(N+M).
// Space Complexity: O(1) as we are not using any extra space.