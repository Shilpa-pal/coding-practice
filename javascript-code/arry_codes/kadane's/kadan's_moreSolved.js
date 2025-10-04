//We want maximum sum subarray.
// find the largest sum from array 

function maxiSumArray(arr) {
    let n = arr.length
    // i used below line becuse I want to compare with smallest number by doing this i can always update maxi
    // sum in arr even if the all value will be negative also it will update maxi sum
    //for eg if num = 0 ,0 > maxi is true 
    //-2>maxi is true

    let maxi = Number.MIN_SAFE_INTEGER // we take minimum becuse we want to compare with smallest value 
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum = sum + arr[i]

        // maxi = Math.max(sum,maxi) // either this line comment or below line to run the code
        if (sum > maxi) {
            maxi = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return maxi

}
let arr = [5, -2, 3, 4]
console.log(" Finding the maximum sum of ", maxiSumArray(arr))

// here is alternative method where i used 
// Note --satrt = i+1 when sum<0 then after this condition gets apllies
// it tells whenyou seee negative sum throw it and move to next index
function maxiSumArray(arr) {
    let sum = 0, maxi = Number.MIN_SAFE_INTEGER;
    let start = 0, ansStart = -1, ansEnd = -1;
    //Nothing has been added yet, so the “current subarray” starts at the first element, 
    // which is index 0. That’s why we initialize start = 0.

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
            ansStart = start;
            ansEnd = i;
        }
        if (sum < 0) {   // reset
            sum = 0;//throw away the negative running sum, start fresh.
            // // new subarray can start from next index
            start = i + 1;//→ mark the next index as potential start
            //could begin if it leads to a maximum sum later.”) of a new subarray.[this condition you can see in file optimal soltionof kadane's]
            //With start = i+1, we’re handling the negative sum case, so the current index is discarded.
            //With start = i, we’re handling the exact zero so the current index can still be a valid start.
        }
    }
    console.log("The subarray is:", arr.slice(ansStart, ansEnd + 1));
    console.log(" Finding the maximum sum of ", maxi)

}
let array = [5, -2, 3, 4]
maxiSumArray(array)

// minimum sum of aaray and minimum subarray

//below is simplest method to get mani sum from array 
function minimumsum(arr) {
    let num = arr.length
    let mini = Number.MAX_SAFE_INTEGER
    let sum = 0
    for (let i = 0; i < num; i++) {
        sum += arr[i]

        if (sum < mini) {
            mini = sum
        }
        if(sum>0){
            sum = 0
        }
    }
    return mini
}
let arr1  = [5, -2, 3, 4, -10, 2, -1];
console.log(" Finding the maximum sum of ", minimumsum(arr1))

// minimum sum with subaaray= [3, -5, 2], and current subarray is [-5, 2]
// start = 1 (index of -5)
// i = 2 (index of 2)
// Length = i - start + 1 = 2 - 1 + 1 = 2 → correct, 2 elements in subarray.