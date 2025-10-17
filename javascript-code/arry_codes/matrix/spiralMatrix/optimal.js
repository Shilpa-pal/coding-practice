
// examples:
// Example 1:
// Input: Matrix[][] = { { 1, 2, 3, 4 },
// 		      { 5, 6, 7, 8 },
// 		      { 9, 10, 11, 12 },
// 	              { 13, 14, 15, 16 } }

// Outhput: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.


function spiralMatrix(matrix) {
    // Define ans array to store the result.
    let ans = []
    // Determine the number of rows and columns
    let n = matrix.length// no. of rows
    let m = matrix[0].length; // no. of columns

    let top = 0
    let right = m - 1
    let left = 0
    let bottom = n - 1
    // below line remove the repeatation of number
    while (top <= bottom && left <= right) {//till top less than = to bottom && till left less than equal to right
        // For moving left to right
        for (let i = left; i <= right; i++) {
            // row is fixed,col will change means here i become col
            ans.push(matrix[top][i])
        }
        //++ → boundary moves inward (when we finish printing from top or left)
        top++;
        // For moving top to bottom.
        for (let i = top; i <= bottom; i++) {
            //col fixed, row will change means here i -become row
            ans.push(matrix[i][right])
        }
        //-- → boundary moves inward (when we finish printing from bottom or right)
        right--;

        if (top <= bottom) {
            // For moving right to left.
            for (let i = right; i >= left; i--)
                // row is fixed,col will change means here i become col
                ans.push(matrix[bottom][i])
            bottom--
        }
        if (left <= right) {

            // For moving bottom to top.
            for (let i = bottom; i >= top; i--) {
                //col fixed, row will change means here i -become row
                ans.push(matrix[i][left])
            }
            left++
        }

    }
    return ans

}
// Matrix initialization.
let matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];

let ans = spiralMatrix(matrix);

for (let i = 0; i < ans.length; i++) {
    console.log(ans[i] + " ");
}

console.log(); // Empty console.log() to print a newline