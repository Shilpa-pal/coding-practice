
function bruteForceFloorCeil(arr,n,x){
    let floor = -1
    let ceil = -1
/// for floor
    for(let i =0;i<n;i++){
        if(arr[i]>=x){
            if(floor === -1||arr[i]>floor){
                floor =arr[i]
            }
        }

        // for ceil
        if(arr[i]<=x){
            if(ceil === -1 || arr[i]<ceil){
                ceil = arr[i]
            }
        }
    }
    return [floor, ceil];
}
// Example usage 
let arr = [3, 4, 4, 7, 8, 10]; 
let x = 5; const [floor, ceil] =  bruteForceFloorCeil(arr, x); 
console.log(`Floor = ${floor}, Ceil = ${ceil}`)