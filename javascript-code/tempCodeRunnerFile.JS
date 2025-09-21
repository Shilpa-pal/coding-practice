function  findMaxConsecutiveOnes(num){
    let maxi = 0
    let cnt = 0
    for(let i = 0;i<num.length;i++){
        if(num[i] === 1){
            cnt++
        }else{
            cnt = 0
        }
        maxi = Math.max(maxi,cnt)
    }
    return maxi;
}
const nums = [1, 1, 0, 1, 1, 1];
console.log("The maximum consecutive 1's are", findMaxConsecutiveOnes(nums));