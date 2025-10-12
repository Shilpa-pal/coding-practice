//Leaders in an Array
//Problem Statement: Given an array, print all the elements which are leaders.
//  A Leader is an element that is greater than all of the elements on its right side
//  in the array.

function findleadersNum(arr) {
    let n = arr.length
    let ans = []

    // Last element of an array is always a leader,because it have no one to comapre
  // push into ans array.
    let max = arr[n - 1];
    ans.push(arr[n - 1])

     // Start checking from the end whether a number is greater
  // than max no. from right, hence leader.
    for (let i = n - 2; i > 0; i--) {
        if (arr[i] > max) {
            ans.push(arr[i])
            max = arr[i]
        }
    }
    return ans
    // for(let i = ans.length;i>=0;i--){
    //     console.log(ans[i])
    // }
}
let array = [10, 22, 12, 3, 0, 6]
console.log("leader of array is ", findleadersNum(array))
