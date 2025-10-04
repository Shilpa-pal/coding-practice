////Rearrange Array Elements by Sign
//Question.here’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements,
// you must return an array of alternately positive and negative values.

function RearrangebySign(arr){
    let n = arr.length
    
  // Define an array for storing the answer separately.
    let ans = new Array(n).fill(0)//ans = [0, 0, 0, 0];  // initially

  // Positive elements start from 0 and negative from 1.
    let posIdx = 0,negIdx = 1;
    for(let i =0;i<n;i++){
        if(arr[i]<0){   //Fill negative elements in odd indices and increment by 2.
            //arr[2] = -4 (negative) → ans[1] = -4; then negIdx = 3.
            // arr[3] = -5 (negative) → ans[3] = -5; then negIdx = 5.
            ans[negIdx]=arr[i]
            negIdx +=2 //we incrementing to the next index
        }else{          //Fill positive elements in even indices and increment by 2.
            ans[posIdx] = arr[i]
            posIdx +=2//why +=2?After placing one element, the next same-type element should be placed 
            // two positions ahead, because we’re skipping one index 
        }
    }
     return ans
  
}
// Define an array and call the RearrangebySign function.
let A = [1, 2, -4, -5];

let ans = RearrangebySign(A);

// Print the result.
console.log(ans.join(" "));

//Time Complexity: O(N) { O(N) for traversing the array once and substituting positives
//  and negatives simultaneously using pointers, where N = size of the array A}.
// TimeComple--O(n) (fill array) + O(n) (loop) = O(n) ✅
//Space Complexity-We used an extra array ans of size n. So → O(n) extra space.
