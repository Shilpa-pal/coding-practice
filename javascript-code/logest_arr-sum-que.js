
// here in given arr we have to find sum of target number means in the to + contigeous form (in array continue number )
// like in form of subarray we have to find sum of subarray to get traget number 
// here is brute force approach of find the the sum of target number

function findSum(arr1, k1) {
    let n = arr1.length
    let count = 0
    for (let i = 0; i < n; i++) {
        let sum = 0
        for (let j = i; j < n;j++) {
            sum += arr1[j];
            if (sum === k1)
                count++
        }

    }
    return count;

}
const arr1 = [4, 9, 20, 3, 10, 5]
let k1 = 33
console.log(findSum(arr1,k1))


//optimal solution of it Number of subarrays with sum k
function subarraySum(arr, k) {
    const n = arr.length;
    let count = 0;

    // Prefix sum array
    const prefixSum = new Array(n).fill(0);
    prefixSum[0] = arr[0];

    for (let i = 1; i < n; i++) {
        //prefixSum[i] means the sum of all elements from the **start of the array (index 0)** up to index i. 
        // * So: prefixSum[i] = arr[0] + arr[1] + ... + arr[i]
        prefixSum[i] = prefixSum[i - 1] + arr[i];// it intialize with 1 that's why we i-1 =prefixsum[0] we intailize to 0 that's why used i-1
    }        
    //Iteration 1:** (i = 1) //prefixSum[1] = prefixSum[0] + arr[1] = 4 + 9 = 13,prefixSum = [4, 13, 0, 0, 0, 0]
//Iteration 2:** (i = 2) = prefixSum[2]=prefixSum[2] = prefixSum[1] + arr[2] = 13 + 20 = 33 ,
//prefixSum = [4, 13, 33, 0, 0, 0]
//**Iteration 3:** (i = 3)
//prefixSum[3] = prefixSum[2] + arr[3] = 33 + 3 = 36,prefixSum = [4, 13, 33, 36, 0, 0]
   // Iteration 4:** (i=4) prefixSum[4] = prefixSum[3] + arr[4] = 36 + 10 = 46 
   //**Iteration 5:** (i = 5) =prefixSum[5] = prefixSum[4] + arr[5] = 46 + 5 = 51 ,prefixSum = [4, 13, 33, 36, 46, 51]

    // Hashmap to store frequencies of prefix sums
    const m = new Map();

    for (let j = 0; j < n; j++) {
        // Case 1: subarray [0...j] itself has sum = k
        if (prefixSum[j] === k) count++;
        // Case 2: check if prefixSum[j] - k exists in map

        //index i+1 to j://sum(i+1..j)=prefixSum[j]−prefixSum[i]
        //prefixSum[j]=arr[0]+arr[1]+...+arr[j]
        const val = prefixSum[j] - k;//val = prefixSum[j] - k = 46 - 33 = 13
        //sum(i+1..j)=prefixSum[j]−prefixSum[i]=k⟹prefixSum[i]=prefixSum[j]−k
        //prefixSum[4] = 46
//val = prefixSum[4] - k = 46 - 33 = 13,     arr[2..4] = [20, 3, 10] =20+3+10=33=k
        if (m.has(val)) {
            count += m.get(val);
        }

        // Store/update frequency of current prefixSum[j]
        if (!m.has(prefixSum[j])) {
            m.set(prefixSum[j], 0);
        }
        m.set(prefixSum[j], m.get(prefixSum[j]) + 1);
    }

    return count;
}

// Example usage:
const arr = [4, 9, 20, 3, 10, 5];
const k = 33;
console.log("Number of subarrays with sum k:", subarraySum(arr, k));n


// find the logest array lenth with sum equal to the k
function getLongestSubarray(a,k2){
    let n = a.length
    let sum = 0
    let maxLen = 0
    let prefixmap = new Map()
    for(let i = 0;i<n;i++){
        sum += arr[a]

        if(sum === k2){
            maxLen = Math.max(maxLen,i+1)
        }
        let rem = sum - k2
        if(prefixmap.has(rem)){
            let len = i - prefixmap.get(rem)
            maxLen = Math.max(maxLen,len)
        } 
        if(!prefixmap.has(sum)){
            prefixmap.set(sum,i)
        }
    }
    return maxLen
}
let a = [2, 3, 5, 1, 9]; 
let k2 = 10;
 let len = getLongestSubarray(a, k2); 
 console.log("The length of the longest subarray is:", len);