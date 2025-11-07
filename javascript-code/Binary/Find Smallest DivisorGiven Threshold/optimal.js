
function findSmallestDivisor(arr,limit){
    let n = arr.length
// Here, n = 4 and limit = 2.
// Even if every element becomes 1, sum = 4 > 2 →  impossible.
// Hence, return -1 directly ✅
//edge case
    if(n>limit) return -1//if sum of divior is greater than limit, so we will never finddiviosr,sum<=limit
let maxElement = Math.max(...arr)
let low = 1// Minimum possible divisor
let high = maxElement // Maximum possible divisor (largest element in array)
let result = -1 //used to store a potential answer (if found later).

  // Helper function to calculate sum of ceil(num / divisor)
  function calculateSumDivsor(divisor){
    let sum =0
    for(let num of arr){
          // Divide each element by the divisor and take the ceiling
        sum+= Math.ceil(num/divisor)
    }
     return sum // Return the total sum after division
  }
   // Apply Binary Search between low and high
  while(low<=high){
    let mid = Math.floor((low+high)/2)
    //We pass mid as an argument because it represents the current divisor we are testing in binary search, 
    // & we need to calculate the total sum for that specific divisor.
    let sum = calculateSumDivsor(mid)
    if(sum<=limit){
        result = mid // possible answer found
        high = mid -1  // Move to the left (smaller divisors)
    }else{     // If the sum is too large, we need a bigger divisor to reduce the sum
        low = mid +1  // Move to the right (larger divisors)
    }
  }
  return result
}
let arr = [1, 2, 3, 4, 5];
let limit = 8;
console.log("The smallest divisor is:", findSmallestDivisor(arr, limit));








