function insertionSort(ar){
    let n = ar.length

    for(let i = 1;i<n;i++){
        let curr = ar[i]  // we can write arr[i]     // means index that start from 0,1,2,3 ...etc
        let prev = i-1      // the value before the current  aasume [4,3,2,1] if current is 2 than previous is 3 (i-1)
 // shift larger elements one step ahead
        while(prev >= 0 && ar[prev] > curr){
             ar[prev+ 1]  = ar[prev]    
            prev--;
        }
        
        // place current element at the correct position
        ar[prev+ 1] = curr
    }
    return ar

}
console.log(insertionSort([4, 1, 5, 2, 3]));

