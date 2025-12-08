
 function findSingleElement(arr){
    let n = arr.length
    //If there’s only one element, that’s obviously the single non-duplicate — return it.
    if(n === 1) return arr[0]
    //If the first element doesn’t match the second,
//then the first element is unique — return it.
    if(arr[0] !== arr[1]) return arr[0]
    //If the last element doesn’t match the second last,
//then the last element is unique — return it.
    if(arr[n-1] !==arr[n-2]) return arr[n-1]

    //Initialize Binary Search Range
    let low = 1;high =n- 2
    
    while(low<=high){
        let mid = Math.floor((low + high)/2)
//If arr[mid] is not equal to its left or right neighbor,
//then it’s the single element — return it arr[mid]
        if(arr[mid] !==arr[mid +1] && arr[mid] !== arr[mid-1]){
            return arr[mid]
        }
        //if remainder is 1 means odd we check the previous number[mid -1]
        // if remeainder is 0  means even we check the [mid +1] 
        if((mid % 2 === 1 &&  arr[mid]  === arr[mid-1])||(mid % 2 === 0 && arr[mid] === arr[mid +1])){
            low = mid +1 // Eliminate left half
        }
        else {
            high = mid -1 //// Eliminate right half
        }
    }
    return -1
}
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
let ans = findSingleElement(arr);
console.log("The single element is:", ans);