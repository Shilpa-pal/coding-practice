// bt using Two-pointer  approach and it always requires a sorted array.
function optimalSol(arr1, k1) {
    arr1.sort((a, b) => a - b);
    let n = arr1.length
    let left = 0
    let right = n - 1 //becuse going right to left means towards 0 inx
    while (left < right) {
        let sum = arr1[left] + arr1[right]
        if (sum === k1) {
            return "yes";
        } else if (sum < k1) { // if sum less than target left idx go to next index i.e is ++
            left++//makes the sum bigger.
        } else {
            //Moving right-- Moving left++makes the sum smaller.
            right--;// if sum > k then go to right-- becuase we going towards left that's why --
        }
    }
    return "No";
}

let arr1 = [2, 6, 5, 8, 11]
let k1 = 14
let ans1 = "This is the answer for variant 1:" + optimalSol(arr1, k1);
console.log(ans1)  
