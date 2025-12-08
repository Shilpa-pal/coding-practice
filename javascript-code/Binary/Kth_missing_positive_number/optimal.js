//Kth Missing Positive Number
//Problem Statement: You are given a strictly increasing array ‘vec’ and a positive integer
//  'k'. Find the 'kth' positive integer missing from 'vec'.
// Example 1:
// Input Format: vec[]={4,7,9,10}, k = 1
// Result: 1
// Explanation: The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 1, the first missing element is 1.
// Example 2:
// Input Format: vec[]={4,7,9,10}, k = 4
// Result: 5
// Explanation: The missing numbers are 1, 2, 3, 5, 6, 8, 11, 12, ……, and so on. Since 'k' is 4, the fourth missing element is 5.


function findMissingK(arr, n, k) {
    let low = 0; high = n - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        // → counts how many numbers are missing before vec[mid]
        let missing = arr[mid] - (mid + 1)
        // we use above formula 2 times 1st during loop and 2nd after completing loop
        //         Both use the same formula missing = vec[index] - (index + 1)
        // ✅ same meaning,different timing. 
        //During loop:vec = [4, 7, 9, 10], k = 4
        //mid = 1 → missing = 7 - (1 + 1) = 5th number is missing above arr
        //mid = 0 → missing = 4 - (0 + 1) = 3rd number is missing above arr
        if (missing < k) {
            low = mid + 1// kth missing lies to the right
        } else {
            high = mid - 1// kth missing lies to the left
        }
    }
    
    // 🔹 After loop ends:
    // 'high' now points to the last index where missing < k.
    // Example: high = 0 → vec[high] = 4
    // missing before vec[high] = vec[high] - (high + 1)
    // = 4 - (0 + 1) = 3 → missing numbers are [1, 2, 3]

    // So the kth missing number is:
    // vec[high] + (k - missing_before_high)
    // which simplifies to → k + high + 1
    return k + high + 1
}
let arr = [4, 7, 9, 10];
let n = 4, k = 4;
let ans = findMissingK(arr, n, k);
console.log("The missing number is:", ans);

// Note:
// Two ways to find the kth missing positive number:
// if (missing >= k) → store ans, go left → return ans + k
// if (missing < k) → go right → return k + high + 1

// there is aternative way to solve 

function alternativesolutionK(arr1,k1){
    let low = 0;high = arr1.length-1
    let ans = arr1.length
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        //If missing >= k → search left (high = mid - 1).this condition return ans + k1
        // If missing < k → search right (low = mid + 1).this condition return k +high + 1 
 //if(arr1[mid]-mid-1<k1) i can write this condition also same as above but return value will chnage also 
 // I mentioned above 
 // for that it would be low = mid+1 their instead of high = mid -1
        if(arr1[mid]-mid-1>=k1){// count of missing numbers till index mid
            ans = mid // potential answer index
             high = mid - 1
            
        }else{
        
            low = mid + 1
        }
    }
    return ans + k1
}
let arr1 = [4, 7, 9, 10];
let k1 = 4;
let result = alternativesolutionK(arr1, k1);
console.log("The missing number is:", result);
