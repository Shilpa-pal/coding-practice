//Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.
//Note: Rotate matrix 90 degrees anticlockwise
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix.


//note:-step1-1st we do swaping 
//step2-and after the swaping element,we will reverse it by doing this we will get our output of 90 degree roate

function rotateMatrix(matrix) {
    let n = matrix.length
    for (let i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            //transpose the metrix mean row become col and col become row
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
return matrix
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