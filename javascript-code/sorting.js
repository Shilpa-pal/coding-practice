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


/// bubble sort code   od iterative method  

function bubbleShort(array) {
    let n = array.length
    for (let i = 0; i <= n - 2; i++) {    // here we can also write let i = 0; i<n-1 ;i++  for outer loop
        //j runs 0 → 3 (because n - i - 1 = 5 - 0 - 1 = 4).
        for (let j = 0; j <= n - i - 2; j++) {  // let i = 0; i<n-i-1 ;i++ for inner loop

            //Compare 4 & 1 → swap → [1, 4, 5, 2, 3] 
            // Compare 4 & 5 → no swap
            // Compare 5 & 2 → swap → [1, 4, 2, 5, 3]
            // Compare 5 & 3 → swap → [1, 4, 2, 3, 5] ✅ Largest element 5 at the end.
            // it comapre arr[0] > arr[1] 
            if (array[j] > array[j + 1]) {   //  arr[j + 1] meaning next to j[0] mean j[1]
                // swap 
                let temp = array[j]  // arr[j] value is 4 but now we temp assume temp value is temp= 4 
                array[j] = array[j + 1] // arr[j+1] is now 1 so it becomes arr[j] value arr[j] = 1 and array become [1, 1, 5, 2, 3] 
                array[j + 1] = temp  // now temp value is 4 now it is value of array[j+1] = 4
            }
        }
    }
    return array
}
let array = [4, 1, 5, 2, 3]
console.log("Sorted array:", bubbleShort(array))


// another way to write not way just diffrent way of looping format of bubbleshort
function bubbleSort(arri) {
    let n = arri.length;

    // Outer loop → how many passes A pass = one sweep of the inner loop.
    // Each pass puts the next largest element in its correct spot at the end.
    for (let i = 0; i < n - 1; i++) {   // here the loop i ened at n-1 but U know it will goes until n-2 becuse last index not count so both are the same meaning

        // Inner loop → compares adjacent elements
        for (let j = 0; j < n - i - 1; j++) { //we not written n-1 because it will take more item not inefficient
            //But it makes extra comparisons with already sorted elements
            //j < n - 1 = correct but inefficient.
            // j < n - i - 1 = correct and optimized.
            if (arri[j] > arri[j + 1]) {
                // Swap elements
                // let temp = arri[j];
                // arri[j] = arri[j + 1];
                // arri[j + 1] = temp;
                [arri[j], arri[j + 1]] = [arri[j + 1], arri[j]]
            }
        }
    }
    return arri
}

let arri = [5, 26, 9, 57, 87, 4, 1]
console.log("sorted version", bubbleSort(arri))


//bubble sort of recursive code 

function bubbleRecursive(ar, n = ar.length) {
    if (n === 1) return ar//base case  //bucuse last element no need to sort 
    function bubble(i) {
        if (i === n - 1) return
        if (ar[i] > ar[i + 1]) {
            //swap
            [ar[i], ar[i + 1]] = [ar[i + 1], ar[i]];
        }
        bubble(i + 1)  //mean like j++ like iterative 
    }
    bubble(0);  // here it intiate with 0
    return bubbleRecursive(ar, n - 1)
}
let ar = [7, 4, 1, 5, 3]
console.log(bubbleRecursive(ar))

//here is alternative of of above 
// In this i will not use two functions I'll used only one

function recursiveBubble(a,n = a.length, i = 0) {// here a- means array 
    if (n === 1) return a;
    if (i < n - 1) {
        if (a[i] > a[i + 1]) {
            //swap
            [a[i], a[i + 1]] = [a[i + 1], a[i]];

        } 
        // move forward in pass // meanj++ m
            return recursiveBubble(a,n,i + 1)

    } // Outer recursion → one pass done, now reduce size mean //i++
            return recursiveBubble(a,n-1,0)

    
}
let a = [5, 1, 4, 2];
console.log(recursiveBubble(a));

// insertion method

function insertionSort(ar) {
    let n = ar.length

    for (let i = 1; i < n; i++) {  // start with index 1st becuse prev i-1 is previous value of index 1 so for compaare ar[0] >ar[1]
        let curr = ar[i]  // we can write arr[i]     // means index that start from 0,1,2,3 ...etc
        let prev = i - 1      // the value before the current  aasume [4,3,2,1] if current is 2 than previous is 3 (i-1)
        // shift larger elements one step ahead
        while (prev >= 0 && ar[prev] > curr) {
            ar[prev + 1] = ar[prev]    // That means the previous index value is copied into the next index (shift to the right).
            //mean value copied in prev + 1
            // Example with [4,1,5,2,3]:
            // i = 1, curr = 1, prev = 0  4>1 this condition is true
            // ar[1] = ar[0] → [4,4,5,2,3] it will shift to the right means  0 index value get compied t0 index 1 value 
            
           
            //→ Shift: arr[prev + 1] = arr[prev]
            // arr[1] = arr[0] → [4, 4, 5, 2, 3] 
            prev--;
        }
        // place current element at the correct position
        //When the while loop finishes:
            // ar[prev + 1] = curr happens
        ar[prev + 1] = curr
    }
    return ar
}
console.log(insertionSort([4, 1, 5, 2, 3]));

//inseration backword recursive code.........................................................................................
function insertionSortRecursive(arr, n = arr.length) {
    if (n <= 1) return arr;   // base case

    insertionSortRecursive(arr, n - 1);  // sort first n-1 elements

    let last = arr[n - 1];   // element to insert
    let j = n - 2;

    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];  // shift arr[j+1] = slot where we copy the bigger element (arr[j]).
// arr[j+1] = arr[j]
// arr[4]   = arr[3]
// Index:  0   1   2   3   4   indx j (n-2) value below have written
//Array:  [1,  2,  4,  5,  3] 
//At some point, j = 3 → arr[j] = 5.
//j+1 = 4 means last index it always shift to the right thta's why we used j+ 1
//We want to move 5 one slot to the right, so it shifts from position j to position j+1

        j--;
    }
    //After the loop:
    arr[j + 1] = last;     //insert   //  final correct position where we place last.

    return arr;
}
arr=[4, 1, 5, 2, 3]
console.log(insertionSortRecursive(arr))

// forwards insertion Recursive.................................................................................
function insertionSortRecursiveForward(arr, i = 1) {
    if (i >= arr.length) return arr;  // base case (no more elements left)

    let curr = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > curr) {
        arr[prev + 1] = arr[prev];
        prev--;
    }
    arr[prev + 1] = curr;

    // recursion replaces the loop increment
    return insertionSortRecursiveForward(arr, i + 1);
}

arr=[4, 1, 5, 2, 3]
console.log(insertionSortRecursiveForward(arr))
