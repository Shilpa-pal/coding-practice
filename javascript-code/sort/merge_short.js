
// function merge(arr, low, mid, high) {
//     let temp = []
//     let left = low
//     let right = mid + 1
//     //  // Merge elements from the two halves into temp in sorted order
//     while (left <= mid && right <= high)
//         if (arr[left] <= arr[right]) {
//             temp.push(arr[left])
//             left++

//         } else {
//             temp.push(arr[right])
//             right++
//         }

//     // If left half still has elements, append them Keep moving through the left side until you reach the end (mid).
//     // If anything is left over on the left side, just put it into temp.
//     while (left <= mid) {   //it push till left side = mid if left idx 2 and mid vlaue is 2 it shoud goes till last index if any leftover number in left push them on left side
//         temp.push(arr[left]);
//         left++;    // if left(3)inx goes greater than mid value(2)ind stop the loop right awayIf mid = 2
//         // So yes — once left passes mid, no more left-side elements are left to push.
//         //left++ keeps moving the pointer on the left side. The loop condition is left <= mid.
//         // left = 0 → 1 → 2 → still okay (≤ 2)
//         // left = 3 → not okay (> 2) → loop ends ❌

//     }
//     // If right half still has elements, append them
//     while (right <= high) {
//         temp.push(arr[right]);
//         right++
//     }
//     // Copy temp back into arr at positions low..high  (in sorting form)
//     //We just finished merging two sorted halves into a temporary array temp.
//     for (let i = low; i <= high; i++) {
//         //i = 0 arr[0] = temp[0 - 0] = temp[0] = 8
//         // i = 1 → arr[1] = temp[1 - 0] = temp[1] = 12
//         //i = 2→ arr[2] = temp[2 - 0] = temp[2] = 17
//         arr[i] = arr[i - low]
//         //temp = a small tray where we keep the sorted numbers.arr[low..high] = the place in the big array where we must put them back.
//         // i = the position in the big array. 
//         // i - low = the position in the tray (temp).
//         //So: Take numbers from the tray (temp[0], temp[1]...)
//         // Paste them back into the correct spot in the big array (arr[low], arr[low+1]...).
//     }
// }
// // mS: recursive helper that sorts arr[low..high]
// function mS(arr, low, high) {
//     if (low >= high) return;               // base case: 0 or 1 element
//     const mid = Math.floor((low + high) / 2);
//     mS(arr, low, mid);                     // sort left half
//     mS(arr, mid + 1, high);                // sort right half
//     merge(arr, low, mid, high);            // merge sorted halves
// }
// // mergeSort: public wrapper
// // function mergeShort(arr) {
// //     // if (!Array.isArray(arr)) throw new TypeError('mergeSort expects an array');
// //     // if (arr.length <= 1) return arr;
// //     mS(arr, 0, arr.length - 1);
// //     return arr;  // sorted in-place, also returned for convenience
// // }
// // Example
// // const a = [5, 2, 8, 1, 3];
// // console.log('before:', a);
// // mergeShort(a);
// // console.log('after: ', a);
// // ✅ Example use:

// // if I want to run above comment so I have to comment this below one 
// let arr = [5, 2, 8, 3, 1];
// mS(arr, 0, arr.length - 1); //“Sort the array from the first element (index 0) to the last element (index 4).”
// console.log(arr); // [1, 2, 3, 5, 8]


function mergingSort(arr,st,mid,end){
    let temp = []
    let  i = st
    let  j = mid + 1

    while(i<=mid && j<=end){
        if(arr[i]<=arr[j]){
            temp.push(arr[i]);
            i++;
        }else{
        temp.push(arr[j])
        j++
    }
    }
    while(i<=mid){
        temp.push(arr[i])
        i++
    }
    while(j<=end){
        temp.push(arr[j])
        j++
    }
    // ✅ Copy back using i - st
  for (let i = st; i <= end; i++) {
    arr[i] = temp[i - st];
  }
}

function mergeSort(arr, st, end) {
  if (st < end) {
    let mid = st + Math.floor((end - st) / 2);

    mergeSort(arr, st, mid);     // left half
    mergeSort(arr, mid + 1, end); // right half
    mergingSort(arr, st, mid, end);     // merge halves
  }
}

// Example usage
let arr = [12, 31, 35, 8, 32, 17];
mergeSort(arr, 0, arr.length - 1);
console.log(arr); // [8, 12, 17, 31, 32, 35]
