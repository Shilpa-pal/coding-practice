function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function leftRotate(arr, n, d) {
    d = d % n; // handle if d > n
    reverse(arr, 0, d - 1);       // reverse first d elements
    reverse(arr, d, n - 1);       // reverse remaining elements
    reverse(arr, 0, n - 1);       // reverse whole array
}

// Example usage
let num = parseInt(prompt("Enter size of array:"));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Enter element ${i}:`)));
}
let d = parseInt(prompt("Enter number of rotations:"));

leftRotate(arr, n, d);
console.log("Rotated Array: ", arr.join(" "));
