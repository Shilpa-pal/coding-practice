
function swapArray(i,arr,n){
    if(i>= Math.floor(n/2)) return   // base case

    // swaping             
    // // temp = a
    // a = b
    //b = temp
    [arr[i] ,arr[n-i-1]]= [arr[n-i-1],arr[i]]
    
    swapArray(i+ 1,arr,n);   // recursive call
}
let arr1 = [1,2,3,4,5]
let n1 = arr1.length
swapArray(0,arr1,n1)
console.log(arr1.join(" "))

