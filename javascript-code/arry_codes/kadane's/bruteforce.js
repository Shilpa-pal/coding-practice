// It  only print subarray list 
function printAllSubarray(arr){
    let n = arr.length
    for(let str = 0;str<n;str++){ // starting index
        for(let end = str;end<n;end++){ // ending index
            let subaaray = ""
            // arr[str..end]
            for(let i = str;i<=end;i++){// print elements from st to end
                subaaray +=arr[i]
            }
            process.stdout.write(subaaray + " ") //print in one row each iteration 
        }
        console.log() // print new line 
    }
}
const arr = [1, 2, 3, 4, 5];
printAllSubarray(arr);
//Maximum Subarray Sum in an Array
//it print sum of subarray which are maximum 

function printMaxOfSubArray(array){
    let maxi = Number.MIN_SAFE_INTEGER;
    let n = array .length
    for(let i = 0;i<n;i++){
        for(let j = i;j<n;j++){// ending index (must start from i)

            let sum = 0;
            for(let k = i;k<=j;k++){ // sum from i to j
            sum+= array[k]
        }
         maxi = Math.max(maxi,sum)
        } 
    }
    return maxi
}
const array = [1, 2, 3, 4, 5];
console.log("Printing maximum subarray sum",printMaxOfSubArray(array))

//Complexity Analysis
// Time Complexity: O(N3), where N = size of the array.
// Reason: We are using three nested loops, each running approximately N times.
// Space Complexity: O(1) as we are not using any extra space.

// here is alternative where time complexity is O(N2)

function alternateOfSubarray(ar){
    let n = ar.length
    let maxsum = Number.MIN_SAFE_INTEGER;
    for(let i = 0;i<n;i++){
        let cursum = 0
        for(let j =i;j<n;j++){// here I not used nested loop k because it were prit start to end indx
            //I removed the 3rd loop because instead of recalculating the sum from scratch, we “carry it forward” using cursum.
            cursum+= ar[j] // we can write this like cursum = cursum+ar[j]) both have same meaning
            maxsum = Math.max(cursum,maxsum)
        }
    }
    return maxsum
}
const ar = [1, 2, 3, 4, 5];
console.log("Printing maximum subarray sum with timeComplexity O(N2)",alternateOfSubarray(ar))


