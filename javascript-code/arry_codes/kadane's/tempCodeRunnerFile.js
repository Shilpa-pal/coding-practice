
function alternateOfSubarray(ar){
    let n = ar.length
    let maxsum = Number.MIN_SAFE_INTEGER;
    for(let i = 0;i<n;i++){
        let cursum = 0
        for(let j =i;j<n;j++){
            cursum+= ar[j]
            maxsum = Math.max(cursum,maxsum)
        }
        return maxsum
    }
    return 0
}
const ar = [1, 2, 3, 4, 5];
console.log("Printing maximum subarray sum with timeComplexity O(N2)",alternateOfSubarray(ar))
