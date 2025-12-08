function findLongestDivisor(arr2,limit2){
    let n = arr2.length
     if(n>limit2) return -1
    let maxElement1 = Math.max(...arr2)
    let low = 1
    let high = maxElement1
    let result = -1 //used to store a potential answer (if found later).

    function sumofDivisor(divisor){
        let sum = 0
        for(let i=0;i<n;i++){
            sum += Math.ceil(arr2[i]/divisor)
        }
        return sum
    }
    while(low<=high){
        let mid = Math.floor((low + high)/2)
        let sum = sumofDivisor(mid)
        if(sum<=limit2){ //“If the total sum using this divisor (mid) is within the limit,
        // then this divisor (mid) is a possible answer.”
            result = mid //because mid might be the smallest divisor that satisfies the condition.
            low = mid + 1 // move right → find larger divisor
        }else {
            high = mid -1 // sum too high → need smaller divisor
        }
    }
    return result
}
let arr2 = [1, 2, 3, 4, 5];
let limit2 = 8;
console.log("The longest divisor is:", findLongestDivisor(arr2, limit2));



