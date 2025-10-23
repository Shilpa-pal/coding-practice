
// upper bond 
//brute force approach
// Note -The upper bound gives us the index where an element should be inserted 
// so that the array remains sorted.

function upperBond(arr, t,) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        // As soon as we find an element greater than target
        if (arr[i] > t) {
            return i
        }
    }
    return n //returning n means “position just after the last element.”
}
let arr = [3, 5, 8, 9, 15, 19];
let t = 8
console.log(" This is solution of brute force:", upperBond(arr, t))

// below code is for value inserted in array

function insertValue(a, target,) {
    let n = a.length
    for (let i = 0; i < n; i++) {
        if (a[i] > target)
            return i
    }
    return n
}
let a = [3, 5, 8, 9, 15, 19];
let target = 8;
// Find position where we should insert 't'
let pos = insertValue(a, target);
// 🧩 Insert element at that position
a.splice(pos, 0, target);
//pos-The index where insertion starts
//0-Don;t delete anything
//target-Value to insert at that position
console.log("After inserting", target, ":", a);

//value below insert and delete have done together using splice

function performingDelInsert(b, target1) {
    let n = b.length
    for (let i = 0; i < n; i++) {
        //note:- upper bound(>) is for insertion,
        //while lower bound (>=)is for replace or delete. 
        if (b[i] >= target1) {
            return i
        }
    }
    return n
}
let b = [3, 5, 7, 9, 11, 15, 19]
target1 = 15
///Find position where we should insert 't'
let position = performingDelInsert(b, target1)

// Delete 1 element and insert 8 there
b.splice(position, 1, 12)
console.log("This will give value of insert and delete. target value is ", target1, ":-", b)

//inserted optimaal aproach

function searchInsert(ar, target2) {
    let n = ar.length
    let low = 0, high = n - 1
    ans = n
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (ar[mid] >= target2) {
            ans  = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
}
let ar = [1, 2, 4, 7]
target2 = 4
let ind = searchInsert(ar,target2)

// ar.splice(ind,0)
console.log("The index is,",ind)