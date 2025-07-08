
// Write a function to find the largest number in an array.
let arr = [3, 5, 7]
function largestNum(arr) {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    console.log("largest number is ", largest)
    return largest

}
largestNum(arr)

// above using foreach

array = [4, 56, 78, 97]
function largerNum(array) {
    let large = array[0]
    array.forEach(value => {
        if (value > large) {
            large = value;
        }
    })
    console.log(" Using foreach larger number is", large)
    return large
}
largerNum(array)
// alternative of finding large from reduce by using if else

function largenum(array) {
    return array.reduce((max, curr) => {
        if (curr > max) {
            return curr;
        } else {
            return max
        }
    }, arr[0])
}
console.log(largenum([34, 56, 789, 90]))

// finding large number using ternery oprator in reduce
let ar =[67,78,45,234]
function bigNum(ar){
    return ar.reduce((max,curr)=>{
        return curr> max? curr:max;
    })
}

console.log(bigNum(ar))

