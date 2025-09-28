//Find the Majority Element that occurs more than N/2 times

function majorityEle(arr){
    let n = arr.length// Size of the given array
    for(let i =0;i<n;i++){
        let cnt = 0
        for(let j = 0;j<n;j++){
            // Counting the frequency of arr[i]
            if(arr[j]===arr[i]){
                cnt++
            }
        }
        // Check if frequency is greater than n/2
        if(cnt > Math.floor(n/2)){
            return arr[i]
        }
    }
    return -1
}

let arr = [2, 2, 1, 1, 1, 2, 2];
let ans = majorityEle(arr);
console.log("The majority element is:", ans);
    