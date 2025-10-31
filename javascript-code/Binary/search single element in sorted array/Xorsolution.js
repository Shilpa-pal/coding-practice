
// If find single element  from array 
function singleNonDuplicate(arr) {
    let n = arr.length; // Size of the array
    let ans = 0;
    // XOR all the elements
    for (let i = 0; i < n; i++) {
        ans = ans ^ arr[i]; // it compare with 0 and arr[i] 1st in iteration
        //after that each itertion ans get update ad it keeps compare with ans 
    }
    return ans;
}

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
let ans = singleNonDuplicate(arr);
console.log("The single element is:", ans);


// here is finding the miising number with array 

