function findMin(arr) {
    // Step 1: assume first element is the minimum
    let min = arr[0]
    // Step 2: traverse the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]// update min if smaller element found
        }
    }
    return min
}

let arr = [4, 5, 6, 1, 2, 3]
console.log("This is minimum number in present array.", findMin(arr))


//another alternative

class Solution {
    findMin(array) {
        // Initialize answer with a large number
        let minVal = Infinity
        for (let i = 0; i <array.length; i++) {
             // Update minimum value
            minVal = Math.min(minVal, array[i])
        }
        return minVal
    }

}
let array = [4,5,6,2,3] 
let sol = new Solution()

const result =sol.findMin(array)
console.log("Minimum element is", result);