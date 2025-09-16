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
