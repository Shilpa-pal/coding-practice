// better approach 
function betterzerosOneCt(arr2){
    let n = arr2.length
    let count0 = 0,count1 = 0,count2 = 0

    for(let i =0;i<n;i++){
        if(arr2[i]===0)count0++
        else if(arr2[i]===1)count1++
        else count2++
    }
    for(let i = 0;i<count0;i++){
        arr2[i] = 0;
    }
    for(let i=count0;i<count0 + count1;i++){
        arr2[i] =1
    }
    for(let i = count0 + count1;i<n;i++){
        arr2[i]= 2
    }
}
let arr2 = [0,2,1,0,1,0,0,1]
betterzerosOneCt(arr2)
console.log("sorted array")
console.log(arr2.join(" "))