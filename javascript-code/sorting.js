// insertion method

function selectionSort(arr) {
    let n = arr.length   // it is lenght of the array
//  step 1:Outer loop → goes from 0 to n-2
    for (let i = 0; i <= n - 2; i++) {   // outer loop 

        //step 2: assume the current index i has the smallest element
        let mini = i     // here i = 0      //mini is the index of the smallest element found in the unsorted part.

        //step 3: // Inner loop → search for the smallest element in the unsorted part 
         // Starts from i+1 and goes till n-1
        for (let j = i + 1; j <= n - 1; j++) {  // we initiate outer loop with 0 that's why we intilaize inner loop with i+1

             //step 4: Compare the element at j with the element at mini
            if (arr[j] < arr[mini]) {   //arr[mini] - means smallest value at that index
               // Compare 46 < 13 → no
               // Compare 24 < 13 → no
               // Compare 52 < 13 → no
               // Compare 20 < 13 → no
               // Compare 9 < 13 → ✅ yes → mini = 5
             // step 5:update mini → we found a new smaller element
                mini = j  
            }
        }
        //step 6:// After the inner loop, mini holds the index of the smallest element
        // Swap arr[i] with arr[mini]
        let temp = arr[mini]
        arr[mini] = arr[i]
        arr[i] = temp
    }
//     below explained each term 
// i = 0
// mini = 5
// arr = [13, 46, 24, 52, 20, 9]
// Now the swap runs:
// let temp = arr[mini];
// → temp = 9 (we save the minimum element).
// arr[mini] = arr[i];
// → arr[5] = arr[0] → arr[5] = 13
// → array becomes [13, 46, 24, 52, 20, 13].
// arr[i] = temp;
// → arr[0] = 9
// → array becomes [9, 46, 24, 52, 20, 13].

// ✅ So the smallest element (9) is placed at position i = 0.

//step-7:    // Return the sorted array
    return arr

}
// Example usage:
let arr = [13, 46, 24, 52, 20, 9];
console.log("Sorted array:", selectionSort(arr));
