
//Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.
//Note: Rotate matrix 90 degrees anticlockwise

//When we rotate 90° clockwise:
// The first row becomes the last column.
// The second row becomes the middle column.
// The last row becomes the first column.
function rotateMatrix(matrix){
    let n = matrix.length
    //below line written to create new array(empty) for roatate matrix elememt 
    const rotate = Array.from({length:n},()=> Array(n).fill(0))

    //transversing the metrix
    for(let i =0;i<n;i++){
        for(j=0;j<n;j++){
            //Copy element from old (i,j) to new rotated position (j, n - i - 1)
            //j -- Becomes new row index
            //n - i - 1--	Becomes new column index (flipped side
            rotate[j][n-i-1] = matrix[i][j]//
        }
    }
    return rotate
}
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const rotated = rotateMatrix(arr);

console.log("Rotated Image:");
for (let i = 0; i < rotated.length; i++) {
  console.log(rotated[i].join(" "));
}
