function findSingleNo(arr){
    let n = arr.length
    if(n === 1) return arr[0]
    for(let i =0;i<n;i++){
        // Check for first index i === 0
        if(i === 0){
            if(arr[i]!== arr[n+1]) // n+1 measn in array next index
                return arr[i]
        }
        // Check for last index
        else if(i = n-1){//n-1 measn in array previous index
            if(arr[i] !== arr[i-1]){
                return arr[i]
            }
        }
        else{ //Somewhere in the middle
            if(arr[i]!=arr[i-1] && arr[i] !== arr[i+1])
                return arr[i]
        }
    }
      // Dummy return statement
    return -1
}
var arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
var ans = singleNonDuplicate(arr);
console.log("The single element is: " + ans);