
// find the longest  aaray sum
// 1st approach we run the loop
// start with  ind[0] = 2
//sum = 0+2 = 2  it check 2 = 10 not
//rem = 2-10 = -8 cheack it is in map? NO
/// IT UPdate preSumMap{2:0} agin it goes to next index
//maxlen = 0

function longestArraySum(a, k) {
    let n = a.length
    let preSumMap = new Map()

    let sum = 0
    let maxLen = 0

    for (let i = 0; i < n; i++) {
        sum += a[i] //// calculate the prefix(all the number of sum ) sum till index i

        if (sum === k) { // we check sum = to k or not 
            //
        // if the sum = k, update the maxLen 
            maxLen = Math.max(maxLen, i + 1)// reason of writeing i+ 1---ans becuz when 
            //calculating subarray length, we always use the formula:
            //length = endIndex - startIndex + 1
            //Case 1: sum === k,This means the subarray starts at index 0 and ends at index i.
            // StartIndex = 0, EndIndex = i  ,So length = i - 0 + 1 = i + 1.

            //Case 2: prefixMap has (sum - k)This means there was an earlier prefix sum at index j.
            // The subarray starts from j+1 (here is j+1 we take becuse our i start with 0 , so next index will be j + 1) and ends at i.
//StartIndex = j+1, EndIndex = i  ,So length = i - (j+1) + 1 = i - j.

//Iteration 3: i = 2, a[2] = 5
// //sum = 5 + 5 = 10
// sum === k? (10 === 10) → Yes → maxLen = max(0, 2+1) = 3
// rem = 10 - 10 = 0
// preSumMap.has(0)? No
// preSumMap.has(10)? No → store {10 → 2}
//preSumMap = {2 → 0, 5 → 1, 10 → 2},maxLen = 3

        }
        let rem = sum - k // here we check remaining 
        if (preSumMap.has(rem)) {  // and in map cheack is it exist in map or not  if it does updated the len 
            len = i - preSumMap.get(rem)
            maxLen = Math.max(maxLen, len)
        }

        //// update the map checking the conditions
        if (!preSumMap.has(sum)) {  //here we cheack if sum not in map 
            preSumMap.set(sum, i) // then we add it 

        }
    }
    return maxLen;

}

let a = [2, 3, 5, 1, 9];
let k = 10
console.log("The length of the longest subarray is:", longestArraySum(a, k))



