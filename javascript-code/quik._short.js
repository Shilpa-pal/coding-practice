// quick short

function partition(arr,str,end){
    let idx = str -1   // st -1 written because we start with index -1 means before 0
    let pivIdx = arr[end]   // last number we have chosen for pivote form array arr[end] means last index of array

    for(let j =str;j<end;j++){
        if(arr[j]<=pivIdx){   // this condition says if arr[j] means the indx no. less than piviote number then perfrom swap else idx++
            idx++
            [arr[j],arr[idx]] = [arr[idx],arr[j]]
        }
    }
    idx++
    [arr[end],arr[idx]] = [arr[idx],arr[end]] //// place pivot at right place
    return idx;

}
function quickshort(arr,str,end){
    if (str>=end) return;    // base case
       let  pivIdx= partition(arr,str,end)

        quickshort(arr,str,pivIdx-1)   /// left
        quickshort(arr,pivIdx + 1,end) //right
    }

let arr = [5,2,6,4,1,3]
quickshort(arr,0,arr.length -1)
console.log(arr)