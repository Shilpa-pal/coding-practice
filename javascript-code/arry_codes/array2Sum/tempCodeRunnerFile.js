
function betterSolution(arr,t){
    let n = arr.length
    let hashmap = new Map() 
    for(let i = 0;i<n;i++){
        let num = arr[i]
        let numpresent = t - num
        if(hashmap.has(numpresent)){
            return "Yes"
        }else{
            (hashmap.set(num,i))
        }

    }
    return "No"
}
console.log(betterSolution([2,3,1,4],4))