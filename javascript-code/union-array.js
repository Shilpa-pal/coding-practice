//brute force approach for union 

function esayWaySol(arr1, arr2) {
    let n1 = arr1.length
    let n2 = arr2.length

    let myset = new Set()
    for (let i = 0; i < n1; i++) {
        myset.add(arr1[i])
    }
    for (let i = 0; i < n2; i++) {
        myset.add(arr2[i])
    }
    const temp = Array.from(myset)
    temp.sort((x, y) => x - y) // asending order sort
    // if we wnat descending just flip y-x
    return temp;
}
console.log(esayWaySol([1, 10, 2], [1, 3, 5, 6]))


// Optimal solution of union of numbers
function findUnion(a, b) {
    let n1 = a.length
    let n2 = b.length
    let i = 0
    let j = 0
    let union = []

    while (i < n1 && j < n2) {// if i less than j push i becuse in set we need 1st smalller number
        //if union length empty we inserting 1st number then push it || cheacking in union.length have same  value or not ? if not then push in  
        if (a[i] <= b[j]) {
            if (union.length === 0 || union[union.length - 1] !== a[i]) { //union.length - 1 gives the index of the last element (here: 2).1
                union.push(a[i])
            }
            i++
        } else {
            if (union.length === 0 || union[union.length - 1] !== b[j]) {
                union.push(b[j])
            }
            j++
        }
    }
    while (i < n1) {
        if (union[union.length - 1] !== a[i]) {
            union.push(a[i])
        }
        i++
    }
    while (j < n2) {
        if (union[union.length - 1] !== b[j]) {
            union.push(b[j])
        }
        j++
    }
    return union
}
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const b = [2, 3, 4, 4, 5, 11, 12]

const union = findUnion(a, b)

console.log("Union of arr1 and arr2 is:")
console.log(union.join(" "))


// Linear search function
function search(arr, n, num) {
    for (let i = 0; i < n; i++) {
        if (arr[i] === num) { // the index of i === the given number we have to check if found it give index number where 4 is present
            return i; // return index if found
        }
    }
    return -1; // return -1 if not found
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const num = 4;
const n = arr.length;

const val = search(arr, n, num);
console.log(val); // Output: 3

// intersection of the array
function findArrayIntersection(A, B) {
    let ans = []
    let m = B.length

    let vis = Array(m).fill(0)  // equivalent of vis[m] = {0};
    //Array(3) → [ <3 empty items> ] Array(4)-4 empty item 
    //.fill(0) → fills all positions of the array with 0.
    //Example: Array(3).fill(0) → [0, 0, 0]
    // vis[j] keeps track of which elements in array B have already been used in the intersection.
    // If vis[j] === 0, it means B[j] has not been used yet.
    // Once you use it (ans.push(B[j])), you mark it as used: vis[j] = 1.

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < m; j++) {
            if (A[i] === B[j] && vis[j] === 0) {
                ans.push(A[i]);
                vis[j] = 1;
                break;
            }
            if (B[j] > A[i]) break;
        }
    }
    return ans;
}
const A = [1, 2, 2, 3]; const B = [2, 2, 4]
console.log(findArrayIntersection(A, B)); // Output: [2,2]


//optimal solution for intersection

function interSection(A1, B1) {
    let i = 0
    let j = 0
    let ans = []
    while (i < A1.length && j < B1.length) {
        if (A1[i] < B1[j]) {   // if A1 less than B1 then move to next index don't check i.e i++
            i++
        } else if (B1[j] < A1[i]) {// if B1 less than a1 then move to next index don't check i.e j++
            j++
        } else {
            ans.push(A1[i]); // here we can write B1[j] also any can be work 
            i++
        }
    }
    return ans
}
const A1 = [1, 2, 2, 3, 3, 4, 5, 6, 7]; const B1 = [2, 2, 3, 5, 7]
console.log(interSection(A1, B1))
//output = [ 2, 2, 3, 3, 5, 7 ]

// find the missing number brute force apporoach

// array = [1,2,4,5] here is missing number is 3
function findmiss(arr) {
    let n = arr.length + 1; // 4+1 = 5// because one number is missing
    for (let i = 1; i <= n; i++) {
        let flag = 0// assume "not found yet"
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] === i) {
                flag = 1;//flag == 1 → the number i is present in the array.
                break
            }
        }
        if (flag === 0) {//flag == 0 → the number i was not found, so that is the missing number.
            return i //missing number
        }
    }
}
console.log(findmiss([1, 2, 4, 5])); // 3

// array = [1, 2, 4, 5] → missing number is 3
function findmiss(arr) {
    let n = arr.length + 1; // because one number is missing
    for (let i = 1; i <= n; i++) {
        let flag = 0; // reset for each i
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                flag = 1;
                break;
            }
        }
        if (flag === 0) {
            return i; // missing number found
        }
    }
}
console.log(findmiss([1, 2, 4, 5])); // 3

// here is solution of wihtout flag
function withoutflag(arr) {
    let n = arr.length + 1
    for (let i = 1; i <= n; i++) {//start with 1 becuse this with index number get comapre with inner looop
        let found = false; //instead of flag
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        if (!found) {//// means i was never found
            return i
        }
    }

}
console.log(withoutflag([1, 2, 4, 5])); // 3 

// here is better solution using map 

function betterSoltion(arr) {
    let n = arr.length + 1
    let hash = Array(n + 1).fill(0)
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = 1;
        //i = 0 → arr[0] = 1 →hash[arr[0]] = hash[1] = 1
        // Now hash = [0, 1, 0, 0, 0, 0]
        // i = 1 → arr[1] = 2 →hash[arr[1]]= hash[2] = 1
        // Now hash = [0, 1, 1, 0, 0, 0]
        // i = 2 → arr[2] = 4 →hash[arr[2]]= hash[4] = 1
        // Now hash = [0, 1, 1, 0, 1, 0]
        // i = 3 → arr[3] = 5 →=hash[arr[3]]= hash[5] = 1
        // Now hash = [0, 1, 1, 0, 1, 1]
    }
    for (let i = 1; i <= n; i++) {
        if (hash[i] === 0) {
            return i;
            //i = 1 → hash[1] = 1 → skip
            // i = 2 → hash[2] = 1 → skip
            // i = 3 → hash[3] = 0 → return 3 ✅
        }

    }
}
console.log(betterSoltion([1, 2, 4, 5]));

// optimal solution using sum 
function findMissingSum(arr) {
    let n = arr.length + 1; // total numbers including missing because we need to sum of natural number after that we minus from it 
    totalsum = (n * (n + 1)) / 2  // we do sumission of n natural numbers becuse we have seen array size  is 4 we have to take out missing one so for that we have to increse array by 1
    sum2 = 0
    for (let i = 0; i < arr.length; i++) {  // we looping to sum of 0 th index to 4 
        sum2 += arr[i]

    }
    // missing number = totalSum - arrSum
    return totalsum - sum2
}
console.log(findMissingSum([1, 2, 4, 5]));

// using XOR method to find out missing number 
function findMissingXOR(arr) {
    let xor1 = 0// XOR of all numbers from 1..n
    let xor2 = 0 // XOR of all elements in array
    let n = arr.length + 1// total numbers including missing
    // XOR 1..n
    for (let i = 1; i <= n; i++) {
        xor1 ^= i
    }
    // XOR all array elements
    for (let i = 0; i < arr.length; i++) {
        xor2 ^= arr[i]

    }
    return xor1 ^ xor2;
}
console.log(findMissingXOR([1, 2, 4, 5])); // 3

// another alternative of above who have Time complexcity is O(n) bexuase one array is used.........................................

// Function to find the missing number using XOR
function findMissingNumber(arr, N) {
    let xor1 = 0; // XOR of all numbers from 1 to N
    let xor2 = 0; // XOR of all elements in the array

    // Loop through array indices (0 to N-2) 
    // and simultaneously XOR array elements and natural numbers
    for (let i = 0; i < N - 1; i++) {
        xor2 = xor2 ^ arr[i];    // XOR array elements
        xor1 = xor1 ^ (i + 1);// XOR up to [1...N-1] it is natural nu.
        //The loop index i starts at 0 )
        // But the natural numbers we want to XOR start at 1, not 0 ,By doing i + 1, we shift the start from 0 → 1
    
    // XOR numbers from 1 to N-1
    // i + 1 is used because loop index i starts from 0,
    // but natural numbers start from 1
}

xor1 = xor1 ^ N; // Include the last number N in XOR  // XOR up to [1...N] reason of doing this -
///We want xor1 to represent the XOR of all numbers from 1 to N, not just 1 to N-1.
//xor1 = (1 ^ 2 ^ 3 ^ 4) ^ 5 = 1 ^ 2 ^ 3 ^ 4 ^ 5
//Adding xor1 ^ N at the end completes the full set:

// XOR of xor1 and xor2 gives the missing number
// Because all other numbers cancel out
return xor1 ^ xor2;
}

// Example usage:
function main() {
    const N = 5;              // Total numbers that should be in array
    const arr = [1, 2, 4, 5]; // Array with one number missing
    const ans = findMissingNumber(arr, N);
    console.log("The missing number is:", ans); // Output: 3
}

function  findMaxConsecutiveOnes(num){
    let maxi = 0
    let cnt = 0
    for(let i = 0;i<num.length;i++){
        if(num[i] === 1){   // here i write equal to 1 becaz i want to chexk freq of 1 
            cnt++
        }else{
            cnt = 0
        }
        maxi = Math.max(maxi,cnt)//returns the bigger number between a and b.
        // Math.max(0, 1) → 1
        // Math.max(2, 0) → 2
        // Math.max(4, 4) → 4
    }
    return maxi;
}
const nums = [1, 1, 0, 1, 1, 1];
console.log("The maximum consecutive 1's are", findMaxConsecutiveOnes(nums));

//Find the number that appears once, and other numbers twice.

function getSingleElement(arr){
    for(let i = 0;i<arr.length;i++){
        const num = arr[i]
        let cnt = 0
        //"whatever number num contains, the inner loop checks the whole array to see if the number is present and how many times,
        //  and if found, cnt+1." Array = [4, 1, 2, 1, 2]
        // Outer picks num = 4
        // Inner checks all elements:
//4 == 4 ✅ cnt=1, others don’t match → cnt=1 → return 4.

        for(let j = 0;j<arr.length;j++){
            if (arr[j] === num){
                cnt++
            }
        }
        if (cnt === 1){
            return num
        }
    }
    return -1
    
}
function main() {
  const arr = [4, 1, 2, 1, 2];
  const ans = getSingleElement(arr);
  console.log("The single element is:", ans);
}

main();