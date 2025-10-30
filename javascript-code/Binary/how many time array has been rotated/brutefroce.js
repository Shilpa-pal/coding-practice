
// array has been rotated

function findKTimeRotated(arr){
    let n = arr.length
    let ans = Infinity
    let index = -1
    for(let i =0;i<n;i++){
        if(arr[i]<ans){
            ans = arr[i]
            index = i
        }
    }
    return index
}
let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let ans = findKTimeRotated(arr);
console.log("The array is rotated " + ans + " times.");

