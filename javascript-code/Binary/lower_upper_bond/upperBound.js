
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

// search inserted optimaal aproach(here we find the position to inert value so below we will not use splice )

function searchInsert(ar, target2) {
    let n = ar.length
    let low = 0, high = n - 1
    ans = n //Default: if target is larger than all elements, insert at the end
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (ar[mid] >= target2) {
            ans  = mid //Found a candidate index; may update to a smaller index by searching left
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

console.log("The index is,",ind)

// here we actually insert the value (we used splice to insert the value)
//.insertion, we always use the lower bound condition.
//The lower bound gives you the first position where the value is greater than or equal to the target.
//So:If the value already exists → we insert before the first occurrence (keeps sorted order stable).
//If the value doesn’t exist → you insert at the correct sorted position.

function insertvalue(array2,x){
    let n = array2.length
    let low = 0;high= n-1
    let ans = n
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        if(array2[i]>=mid){
            high = mid-1
            ans = mid
        }else{
            low = mid +1
        }
    }
    return ans
}
let array2 = [3, 4, 4, 7, 8, 10]
let x = 5
let place = insertValue(array2,x)
array2.splice(place,0,x)
console.log("This method is used by splice method to insert actually value .",x ,"is target value",array2)