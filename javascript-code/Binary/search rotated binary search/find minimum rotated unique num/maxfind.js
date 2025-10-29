
//find maximum 

function findMax(arr) {
    let n = arr.length
    let low = 0; high = n -1
    

    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] > arr[high]) {//Maximum on the right (unsorted part)
            low = mid
        }
        else if (arr[mid] < arr[high]) {//Maximum on the left
            high = mid - 1
        }
        else {
            //// arr[mid] == arr[high] //Duplicate, can’t decide
            high = high - 1 //// skip duplicates
        }
    }
    return arr[low]
}
let  arr = [4, 4, 4, 7, 0, 1, 4]
let ans = findMax(arr)
console.log("This will give maximum number from duplicates number in array",ans)

//No duplicates	O(log n)
//With duplicates	O(n) (worst case, e.g., all same values)