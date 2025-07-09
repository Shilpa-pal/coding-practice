//Write a function to find the largest number in an array.suing recursive



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
let ar = [67, 78, 45, 234]
function bigNum(ar) {
    return ar.reduce((max, curr) => {
        return curr > max ? curr : max;
    })
}

console.log(bigNum(ar))


// sort and direct inbuild method used to get this
function findLargest(arr) {
    return Math.max(...arr);
}

console.log(findLargest([34, 566, 4, 5]))

//Reverse a given string.
let word = " shilpa"
let ans = word.split("").reverse().join("")
console.log("Reverse string is:", ans)

//Find the minimum number in an array.

function minimumNum(array) {
    let smallnum = array[0]
    for (i = 0; i < array.length; i++) {
        if (smallnum > array[i]) {
            smallnum = array[i]
        }
    }
    console.log("minimum number is ", smallnum)
}
minimumNum([4, 5, 6, 7, 2])

// using reduce to solve the minimum number in an array.
let array1 = [2, 4, , 5, 67, 9]
function minNum(array1) {
    return array1.reduce((min, curr) => {
        return min < curr ? min : curr
    })
}
console.log(" By using reduce method Minimum num is", minNum(array1))

// using for each the minimum number in an array.
array2 = [2, 4, 5, 67, 9, 1]

function smallernum(array2) {
    let smallN = array2[0]
    array2.forEach(value => {
        if (value < smallN) {
            smallN = value;
        }
    })
    console.log(" Finding minimum num using foreach:", smallN)
    return smallN

}
smallernum(array2)

