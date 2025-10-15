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


//approach 1st: mark -1 the all matrix element which coantians 1  but not 0 Element mark -1
//apprapch 2nd: mark -1 to 0 which row and colum have 0 element 

//note;why we passing matrix in below functio
//A 2D array is an array of arrays, which represents data in rows and columns
// like a table or matrix.
//I passed the matrix so that the helper functions(markRow and markCol) can modify the same 2D array directly,

//In markRow, I pass i because I already know which row has the zero.
//and inside that function, I loop through all columns j in that row.
function markRow(matrix,n,m,i){//  it take N + M working seprately both the for loop 
    // set all non-zero elements as -1 in the row i:
    for(j=0;j<m;j++){
        if(matrix[i][j] !==0){
            (matrix[i][j] = -1)
        }
    }
}
//In markCol, I pass j because I know which column has the zero.
//I loop through all rows i in that column.
function markCol(matrix,n,m,j){
    // set all non-zero elements as -1 in the col j:
    for(let i =0;i<n;i++){
        if(matrix[i][j] !==0){
             (matrix[i][j] = -1)
        }
    }
}
// Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
// below taking TC -timecomplexity - n*m becuse here nested loop
function markAllzero(matrix,i,j){
    for(i=0;i<n;i++){
        for(j =0;j<m;j++){
            if(matrix[i][j]===0){
                markRow(matrix,n,m,i)   
                markCol(matrix,n,m,j)
            }
        }
    }
    // Finally, mark all -1 as 0:
    //below taking TC -timecomplexity - n*m becuse here nested loop also 
    for(let i=0;i<n;i++){
        for(j=0;j<m;j++){
             if(matrix[i][j]===-1){
            (matrix[i][j] = 0)     
        }
    }
}
return matrix
}
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const n = matrix.length;
  const m = matrix[0].length;
    const ans = markAllzero(matrix, n, m);
  
  console.log("The Final matrix is: ");
  for (let i = 0; i < n; i++) {
    console.log(ans[i].join(" "));
  }

//time complexity-
//Nested loops (n outer, m inner) O(n × m)
//Two separate loops O(n + m)
//the total time becomes O(n × m × (n + m)).
//where N = no. of rows in the matrix and M = no. of columns in the matrix.
// reason: Firstly, we are traversing the matrix to find the cells with the value 0.
//  It takes O(N*M). Now, whenever we find any such cell we mark that row and 
// column with -1. This process takes O(N+M). So, combining this the whole process,
//  finding and marking, takes O((N*M)*(N + M)).
// Another O(N*M) is taken to mark all the cells with -1 as 0 finally.

//So the total time becomes:
//O(number of cells)×O(time per cell)
// =O(n×m)×O(n+m)
// = O(n×m×(n+m))