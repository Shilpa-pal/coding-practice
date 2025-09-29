//Find the Majority Element that occurs more than N/2 times

function majorityEle(arr) {
    let n = arr.length// Size of the given array
    for (let i = 0; i < n; i++) {
        let cnt = 0
        for (let j = 0; j < n; j++) {
            // Counting the frequency of arr[i]
            if (arr[j] === arr[i]) {
                cnt++
            }
        }
        // Check if frequency is greater than n/2
        if (cnt > Math.floor(n / 2)) {
            return arr[i]
        }
    }
    return -1
}

let arr = [2, 2, 1, 1, 1, 2, 2];
let ans = majorityEle(arr);
console.log("The majority element is:", ans);

//ime Complexity: O(N2), 
//where N = size of the given array. Reason: For every element of the array the inner loop runs for N times. 
// And there are N elements in the array. So, the total time complexity is O(N2).
// Space Complexity: O(1) as we use no extra space.

//better solution 

function majorityElement(arr) {
    let n = arr.length
    let hash = new Map()

    for (let i = 0; i < n; i++) {
        let num = arr[i]
        if (hash.has(num)) {
            hash.set(num, hash.get(num) + 1)
        } else {   //So the if–else means:If number exists → increment its count.
            // If number doesn’t exist → start its count at 1.

            hash.set(num, 1) //If the key num does NOT exist yet, then:
            // Start counting from 1 (because it’s the first time we see num).
        }
    }
    for (const [num, count] of hash) {
        if (count > Math.floor(n / 2)) {
            return num
        }
    }
    return -1
}
const array = [2, 2, 1, 1, 1, 2, 2];
const result = majorityElement(array);
console.log("The majority element is:", result);

//Time Complexity: O(N*logN) + O(N), where N = size of the given array.
//Reason: We are using a map data structure. 
// Insertion in the map takes logN time. And we are doing it for N elements. So, it results in the first term O(N*logN).
//  The second O(N) is for checking which element occurs more than floor(N/2) times. If we use unordered_map instead, the first term will be O(N) for the best and average case and for the worst case, it will be O(N2).
// Space Complexity: O(N) as we are using a map data structure.

// better alternative solution 

function findmajorityEle(num) {
    let n = num.length
    num.sort((a, b) => a - b) // 1st we sort the number 

    let freq = 1, ans = num[0]  // keep freq = 1 and intial ans is 0
    for (let i = 1; i < n; i++) {  //start with 1 because we have to compare with previous no i.e 0idx
        if (num[i] === num[i - 1]) { // if current number is equl to previous 
            freq++  // do frq ++
        } else {
            freq = 1    // if not reset the freq to 1
            ans = num[i]  //ans is always the number whose frequency we are counting(like which number we are checking
            //  freq that no. is the ans)
        }
        if (freq > n / 2) { // check freq >n/2
            return ans  // return only when majority found
        }

    }
    return -1  // if no majority element    
}

let ar = [0, 1, 1, 1, 1,2,1, 2,1, 2, 0]
console.log(findmajorityEle(ar))