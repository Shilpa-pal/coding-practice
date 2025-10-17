function spiralMatrix(matrix) {
    let ans = []
    let n = matrix.length
    let m = matrix[0].length

    let top = 0
    let right = m - 1
    let left = 0
    let bottom = n - 1
    while (top <= bottom && left <= right) {//till top less than = to bottom && till left less than equal to right
        for (let i = left; i <= right; i++) {
            ans.push(matrix[i][top])
        }
        top++;
        for (let i = top; top <= bottom; i++) {
            ans.push(matrix[i][right])
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--)
                ans.push(matrix[bottom][i])
            bottom--
        }
        if (left <= right) {
            for (let i = bottom; i >= top; top++) {
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