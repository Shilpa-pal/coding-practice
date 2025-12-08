// Find the Smallest Divisor Given a Threshold
//Problem Statement: You are given an array of integers 'arr' and an integer i.e. a 
// threshold value 'limit'. Your task is to find the smallest positive integer divisor,
//such that upon dividing all the elements of the given array by it, the sum of the division's result is less than or equal to the given threshold value.

// Examples
// ..Input Format: N = 5, arr[] = {1,2,3,4,5}, limit = 8
// Result: 3
// Explanation: We can get a sum of 15(1 + 2 + 3 + 4 + 5) if we choose 1 as a divisor. 
// The sum is 9(1 + 1 + 2 + 2 + 3)  if we choose 2 as a divisor. Upon dividing all the elements of the array by 3, we get 1,1,1,2,2 respectively. Now, their sum is equal to 7 <= 8 i.e. the threshold value. So, 3 is the minimum possible answer.

// Example 2:
// Input Format: N = 4, arr[] = {8,4,2,3}, limit = 10
// Result: 2
// Explanation: If we choose 


function smallestDivisorBrute(arr, limit) {
  let maxElement = Math.max(...arr)
  // We take maxElement since dividing by anything larger gives the same result (all 1s)
  //so there’s no point checking beyond it.
  for (let divisor = 1; divisor <= maxElement; divisor++) {
    console.log("🔹 Testing divisor:", divisor);
    let sum = 0
    // Calculate the sum of ceil division results
    for (let num of arr) {
      sum += Math.ceil(num / divisor)

      console.log(`Adding ceil(${num} / ${divisor}) = ${Math.ceil(num / divisor)} → current sum = ${sum}`)
      console.log(`👉 Total sum for divisor ${divisor} = ${sum}`);
      // If the sum is within the threshold, return this divisor
    }
    if (sum <= limit) {
      console.log(`Found valid divisor: ${divisor} (sum = ${sum})`);
      return divisor;//   return immediately when found smallest valid divisor

    }
    console.log("-----");

  }
  // If no divisor found (shouldn't happen for valid input)
  console.log("❌ No valid divisor found");
  return -1

}

// Example 1
// let arr = [1, 2, 3, 4, 5];
// let limit = 8;
// console.log(smallestDivisorBrute(arr, limit)); // Output: 3

// Example 2
let arr = [8, 4, 2, 3];
let limit = 10;
console.log(smallestDivisorBrute(arr, limit)); // Output: 2


//find the largest divisor:-

function largestDivisor(arr1, limit1) {
  let maxElement = Math.max(...arr1);
  let result = -1;  // to store the last valid divisor

  for (let divisor = 1; divisor <= maxElement; divisor++) {
    let sum = 0;
    for (let num of arr1) {
      sum += Math.ceil(num / divisor);
    }

    if (sum <= limit1) {
      // store as potential largest valid divisor
      result = divisor; // valid, but we keep checking for larger
    }
  }

  return result;// return the largest one found
}

let arr1 = [8, 4, 2, 3];
let limit1 = 10;
console.log(largestDivisor(arr1, limit1)); // Output: 


