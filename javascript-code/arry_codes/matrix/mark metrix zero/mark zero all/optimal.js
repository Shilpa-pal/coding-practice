// Set Matrix Zero
//Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

// Examples
// Examples 1:
// Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.

// Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
// Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0
// Set Matrix Zero
//Give

function zeroMatrix(matrix) {
    let n = matrix.length
    let m = matrix[0].length
    // const row[n] = matrix[...][0]  somethinf of zero in matrix[i][j] = matrix[row][col]
    // const col[m] = matrix[0][...] zero of something 
    let col0 = 0

    // Step 1: Traverse the matrix and mark 1st row & col accordingly:
    //We use first row and first column as markers to remember which rows and columns should be set to 0 later.

    for (let i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            if (matrix[i][j] === 0) { //this condition meanwe must make its entire row and its entire column 0.
                //(mean below line)ith row make  entire row 
                (matrix[i][0]) = 0 //matrix[i][0] = 0 → to remember that the entire row i should become zero
                // jth col make zero
                if (j !== 0) {//That means the zero is not in the first column.
                    (matrix[0][j]) = 0 //// Mark this entire column
                } else {
                    //Else (j == 0)
                    // → That means the zero is in the first column.
                    // → We can’t use matrix[0][0] for marking (it’s shared).
                    // → So we use col0 = 0 as a separate flag to remember

                    col0 = 0  //Without that separate col0 variable, the logic would fail for cases where 
                    //the zero appears in the first column — because matrix[0][0] can’t represent
                    //  both first row and first column together.

                    //note
                    //matrix[i][0] = 0 → mark the row
                    // matrix[0][j] = 0 → mark the column (if not the first)
                    // col0 = 0 → mark the first column (special case)
                }
            }
        }
    }
    //step:2 after marking we check  below without mark
    for (let i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            if (matrix[i][j] !== 0) {
                // check for col and row
                // below code mean cheack if col marking have zero and row marking have zero then mark them zero 
                // we check this by step 1 marking
                if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                    matrix[i][j] = 0
                }
            }
        }
    }
    if (matrix[0][0] = 0) {
        for (j = 0; j < m; j++) {
            matrix[0][j] = 0// if above condition is true then every ele in 1st row all be zero 
        }
    }
    if (col0 == 0) {
        for (let i = 0; i < n; i++) matrix[i][0] = 0
        //if above condition is true then every ele in 1st col will be zero.
    }
    return matrix
}

const matrix = [
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
];
const ans = zeroMatrix(matrix)
console.log("The Final matrix is:", ans)
