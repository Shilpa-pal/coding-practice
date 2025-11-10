// // Find the Smallest Divisor Given a Threshold
// //Problem Statement: You are given an array of integers 'arr' and an integer i.e. a 
// // threshold value 'limit'. Your task is to find the smallest positive integer divisor,
// //such that upon dividing all the elements of the given array by it, the sum of the division's result is less than or equal to the given threshold value.

// // Examples
// // ..Input Format: N = 5, arr[] = {1,2,3,4,5}, limit = 8
// // Result: 3
// // Explanation: We can get a sum of 15(1 + 2 + 3 + 4 + 5) if we choose 1 as a divisor. 
// // The sum is 9(1 + 1 + 2 + 2 + 3)  if we choose 2 as a divisor. Upon dividing all the elements of the array by 3, we get 1,1,1,2,2 respectively. Now, their sum is equal to 7 <= 8 i.e. the threshold value. So, 3 is the minimum possible answer.

function largestdivisor(arr1, limit1) {
    let n = arr1.length
    if (n > limit1) return -1
    let MaxElement = Math.max(...arr1)
    let low = 1
    let high = MaxElement
    let result = -1
    function calculateSum(divisor) {
        let sum = 0
        for (let num of arr1) {
            sum += Math.ceil(num/divisor)
        }
        return sum
    }
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let sum = calculateSum(mid)
        if (sum <= limit1) {
            result = mid
            low = mid + 1
            
        } else
            high = mid - 1
    }
    return result
}


let arr1 = [3, 6, 7, 11];
let limit1 = 8;
console.log("Answer of largestest divisor ", largestdivisor(arr1, limit1))


function smallestDivisor(arr, limit) {
    let n = arr.length
    if (n > limit) return -1
    let maxElement = Math.max(...arr)
    let low = 1
    let high = maxElement
    let result = -1

    function calculteSumOffdivsior(divisor) {
        let sum = 0
        console.log(`\n🔹 Checking divisor = ${divisor}`);
        for (let num of arr) {
            let part = Math.ceil(num / divisor)
            console.log(`num =${num},ceil(${num}${divisor})=${part} `)
            sum += part
            // we getting divisor 6 becuse if we taking mid we get 6 Then you get sum = 5 (<= limit),so it moves left:
            // and after next check is divisor = 3
            //You get sum = 10 (> limit) so it moves right: low = mid + 1 = 4
        }
        console.log(`➡️ Total sum for divisor ${divisor} = ${sum}`);
        return sum
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let sum = calculteSumOffdivsior(mid)
        if (sum <= limit) {
            result = mid
            high = mid - 1
        } else
            low = mid + 1
    }
    return result

}
let arr = [3, 6, 7, 11];
let limit = 8;
console.log("Answer of Smallest divisor ", smallestDivisor(arr, limit))
