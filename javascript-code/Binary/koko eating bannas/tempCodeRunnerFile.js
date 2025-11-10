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
