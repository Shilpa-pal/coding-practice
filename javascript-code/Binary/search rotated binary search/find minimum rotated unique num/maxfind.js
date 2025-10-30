
//find maximum 

function findMax(array) {
    let n = array.length
    let low = 0; high = n -1
    

    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        if (array[mid] > array[high]) {//Maximum on the right (unsorted part)
            low = mid
        }
        else if (array[mid] < array[high]) {//Maximum on the left
            high = mid - 1
        }
        else {
            //// arr[mid] == arr[high] //Duplicate, can’t decide
            high = high - 1 //// skip duplicates
        }
    }
    return array[low]
}
let  array = [4, 4, 4, 7, 0, 1, 4]
let ans = findMax(array)
console.log("This will give maximum number from duplicates number in array",ans)

//No duplicates	O(log n)
//With duplicates	O(n) (worst case, e.g., all same values)


//Find Maximum in Rotated Sorted Array

function findMax(arr) {
    let low = 0;
    let high = arr.length - 1;
    let ans = -Infinity;

    while (low <= high) {
        // If the current part is already sorted
        if (arr[low] <= arr[high]) {
            ans = Math.max(ans, arr[high]); // rightmost element will be the max
            break;
        }

        let mid = Math.floor((low + high) / 2);

        //  If left half is sorted
        if (arr[low] <= arr[mid]) {
            ans = Math.max(ans, arr[mid]); // max may be in left half
            low = mid + 1; // move right side
        } 
        // Else right half is sorted
        else {
            ans = Math.max(ans, arr[high]); // max may be in right half
            high = mid - 1; // move left
        }
    }

    return ans;
}

// Example
const arr = [4, 5, 6, 7, 0, 1, 2];
console.log("Maximum element is:", findMax(arr));


//Find Maximum in Rotated Sorted Array (with Duplicates)
function findMaxWithDuplicates(array1) {
    let low = 0;
    let high = array1.length - 1;
    let ans = -Infinity;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Case 1: Entire subarray is sorted
        if (array1[low] < array1[high]) {
            ans = Math.max(ans, array1[high]);
            break;
        }

        //  Case 2: If duplicates found (unclear direction)
        if (array1[low] === array1[mid] && array1[mid] === array1[high]) {
            ans = Math.max(ans, array1[low], array1[mid], array1[high]);
            low++;
            high--;
            continue;
        }

        //  Case 3: Left half is sorted
        if (array1[low] <= array1[mid]) {
            ans = Math.max(ans, array1[mid]);
            low = mid + 1; // move to right half
        }
        //  Case 4: Right half is sorted
        else {
            ans = Math.max(ans, array1[high]);
            high = mid - 1; // move to left half
        }
    }

    return ans;
}

// Example
const array1 = [4, 5, 6, 7, 7, 0, 1, 2, 2];
console.log("Maximum element with duplicates:", findMaxWithDuplicates(array1));
