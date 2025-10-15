// 🧩 Problem Statement

//If any element in the matrix is 0 
// make its entire row and column 0.

function zeroMatrix(metrix){
    const n = matrix.length  
    const m = matrix[0].length
    const row = new Array(n).fill(0)
    const col = new Array(m).fill(0)

    for(let i =0;i<n;i++){
        for(j =0;j<m;j++){
            if(metrix[i][j] === 0){
                // mark ith index of row with 1:
                row[i]=1;
                 // mark jth index of col with 1:
                col[j] = 1
            }
        }
    }
     // Finally, mark all (i, j) as 0
    // if row[i] or col[j] is marked with 1.

    for(let i = 0;i<n;i++){
        for(j=0;j<m;j++){
            if(row[i]||col[j]){
                matrix[i][j] = 0
            }
        }
    }
    return matrix

}

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const ans = zeroMatrix(matrix);

console.log("The Final matrix is:" ,ans); // instead of writing below i can use this line 
// for (const row of ans) {
//     console.log(row.join(" "));
// }  