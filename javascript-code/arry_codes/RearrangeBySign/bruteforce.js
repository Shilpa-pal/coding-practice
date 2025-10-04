//Rearrange Array Elements by Sign
//Question.here’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements,
// you must return an array of alternately positive and negative values.

//arr[] = {1,2,-4,-5}, N = 4

function rearrangeSign(arr){
    let n = arr.length
    // Define 2 arrays, one for storing positive 
  // and other for negative elements of the array.
    let posIdx = []
    let negIdx = []
    for(let i =0;i<n;i++){
        //if arr num greater than 0 it means number is postive 
        //and if not then number is negative 
        if(arr[i]>0){       //condition if arr indx is positive push in positive array which have made above
            posIdx.push(arr[i])
        }else{
            negIdx.push(arr[i])
        }
    }
    //}
//Why does it run only n/2 times?
//The array has equal positives and negatives.
// Example: n = 4 → we’ll have 2 positives and 2 negatives.
// So we only need to loop through the number of pairs (positive, negative).
// Each iteration places two elements:
// A[2*i] → one positive  ,A[2*i+1] → one negative
// That’s why we stop at n/2 instead of n.
    for(let i =0;i<n/2;i++){
    //In the final rearranged array, positives should always go in even indices:
        arr[2*i]= posIdx[i]//Forloop variable i = 0,1,2...,multiplying by 2 gives exactly those even indices.
        //Negatives should always go in odd indices:
        arr[2*i+1]= negIdx[i]//Adding +1 to an even number (2*i) makes it odd.1, 3, 5, 7, ...
    }
    return arr  
}
let arr = [1, 2, -4, -5];
let ans = rearrangeSign(arr);

// Print the result.
console.log(ans.join(" "));

//Time Complexity: O(N+N/2) { O(N) for traversing the array once for segregating positives and negatives
// and another O(N/2) for adding those elements alternatively to the array,
//  where n = size of the array arr}.
// Space Complexity:  O(N/2 + N/2) =