function selectionSort(arr) {
    let n = arr.length

    for (let i = 0; i <= n - 2; i++) {
        let mini = i
        for (let j = i + 1; j <= n - 1; j++) {
            if (arr[j] < arr[mini]) {
                mini = j
            }
        }
        //swap 
        let temp = arr[mini]
        arr[mini] = arr[i]
        arr[i] = temp
    }
    return arr

}
// Example usage:
let arr = [13, 46, 24, 52, 20, 9];
console.log("Sorted array:", selectionSort(arr));
