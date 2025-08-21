function pattern15(n){
    for(let i = n;i>=1;i--){
        let row = " ";
        for(let j=0;j<i ;j++){
            row +=  String.fromCharCode(65 + j) + " ";  // converts numbers to letters: // 65 = A, 66 = B, 67 = C …
        }
        console.log(row.trim());
    }
}        
pattern15(6)