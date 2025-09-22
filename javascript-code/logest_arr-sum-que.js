
// here in given arr we have to find sum of target number means in the to + contigeous form (in array continue number )
// like in form of subarray we have to find sum of subarray to get traget number 
// here is brute force approach of find the the sum of target number

function findSum(arr, k) {
    let n = arr.length
    let count = 0
    for (let i = 0; i < n; i++) {
        let sum = 0
        for (let j = i; j < n;j++) {
            sum += arr[j];
            if (sum === k)
                count++
        }

    }
    return count;

}
const arr = [4, 9, 20, 3, 10, 5]
let k = 33
console.log(findSum(arr,k))
