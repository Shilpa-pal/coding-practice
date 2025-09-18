function leftRotate(arr,d){
    let n = arr.length
    d = d % n // handle if d greater than n
    let temp = []
    for(let i = 0;i<d;i++){
        temp[i]=arr[i]
    
    }
    for(let i = d;i<n;i++){
        arr[i-d] =arr[i]
    }
    for(let i = 0;i<d;i++){
        arr[n-d+i] = temp[i] // here is formula n(lenth of arr)-d(the number we have to roate )+ i(it start with 0,than one )
        //(0 goes n-d index,1 goes(n-d)+172 goes(n-d)+2)ind
    }
    return arr
}
console.log(leftRotate([1, 2, 3, 4, 5, 6, 7], 3));