
// If find single element  from array 
function singleNonDuplicate(array) {
    let n = array.length; // Size of the array
    let ans = 0;
    // XOR all the elements
    for (let i = 0; i < n; i++) {
        ans = ans ^ array[i]; // it compare with 0 and arr[i] 1st in iteration
        //after that each itertion ans get update ad it keeps compare with ans 
    }
    return ans;
}

let array = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
let ans = singleNonDuplicate(array);
console.log("The single element is:", ans);


// here is finding the miising number with array 

function findMissingNumber(arr){
    let n = arr.length
    let XOR1 = 0  // XOR of all numbers from 1 to n
    let XOR2 = 0 // XOR of all array elements

    
    // XOR all numbers from 1 to n
    for(let i =0;i<n;i++){
        XOR1 = XOR1 ^i
    }
    // XOR of all array elements
    for(let i =0;i<n;i++){
        XOR2 = XOR2 ^ arr[i]
    }
    // Missing number = xor1 ^ xor2
    return XOR1^XOR2
}
let arr = [1, 2, 4, 5];
let n = 5;
console.log("Missing number is:", findMissingNumber(arr, n));

