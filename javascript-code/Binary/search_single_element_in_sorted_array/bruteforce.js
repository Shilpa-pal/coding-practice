//Problem Statement: Given an array of N integers. Every number in the array except one appears 
// twice. Find the single number in the array.

function singleNonDuplicate(arr){
    let n = arr.length
    if(n === 1) return arr[0]
    for(let i =0;i<n;i++){
        // Check for first index i === 0
        if(i === 0){
            //compare the current element (arr[i]) with its next element (arr[i + 1]),
            if(arr[i]!== arr[i+1]) // n+1 measn in array next index
                return arr[i]
        }
        // Check for last index i = n-1
        else if(i === n-1){//n-1 measn in array previous index
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

// O(N), N = size of the given array.
// Reason: We are traversing the entire array.

// Space Complexity: O(1) as we are not using any extra space.