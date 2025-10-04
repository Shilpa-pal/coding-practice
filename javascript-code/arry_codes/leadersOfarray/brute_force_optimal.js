
function leadersFind(array){
    let n = array.length
    for(let i =0;i<n;i++){
        let leaders = true
        for(let j =0;j<n;j++){
            if(array[j]>array[i]){
                leaders = false
                break
            }
        }
    }
}
let array = [10,22,12,3,0,6]
console.log("leader of array is ",leadersFind(array))