//iterrative implimentation

function findInsortedArrayX(arr, target) {
     let n = arr.length
    let low = 0, high = n - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] === target) {// if the mid value equal to target 
            return mid
        }
        else if
            (arr[mid] > target)
            //If the middle element is greater than or equal to the target → search left half.
            high = mid - 1
        else
            low = mid + 1 //Otherwise → search right half.
    }
    return -1
}

let arr = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 6;
let ind = findInsortedArrayX(arr, target);
if (ind === -1) console.log("The target is not present.");
else console.log("The target is at index:", ind);

// recursive way 

function binarySearch(array,low,high,target){
    let n = array.length
    if(low>high) return -1 // base case
    let mid = Math.floor((low + high)/2)
    //// 🎯 Check if middle element matches the target 
    if(array[mid]===target)return mid  //// Return index if found
    // 👈 If target is smaller, search in the left half
    else if(array[mid]>target)
        return binarySearch(array,low,mid-1,target)
    else   // 👉 If target is larger, search in the right half
        return binarySearch(array,mid +1,high,target)
    
}
// Wrapper function — simplifies the function call for user
function search(array,target1){
    //  // Start search with full range (0 to array.length - 1)
    return binarySearch(array,0,array.length-1,target1)
}
let array = [3, 4, 6, 7, 9, 12, 16, 17];
let target1 = 7;

// 🔍 Perform binary search
let index = search(array, target1);
if (ind === -1) console.log("The target is not present.");
else console.log("The target is at index:", index);
//Note Works the same as the iterative version — just uses recursive calls instead of a loop.
//Each recursive call reduces the search range by half.