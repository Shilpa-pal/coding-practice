function varieanttwo(arr1,t){
    let n = arr1.length
    for(let i = 0;i<n;i++){
        for(let j = i +1;j<n;j++){
            if(arr1[i]+arr1[j] === t){
                return [i,j]

            }
        }
    }
    return [-1,-1]
}
let arr1 = [2, 6, 5, 8, 11]
let t = 14
let ans1 = "This is the answer for variant 1:" + varieanttwo(arr1, t);
console.log(ans1)