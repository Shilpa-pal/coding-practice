//There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal).
//Without altering the relative order of positive and negative elements, you must
//return an array of alternately positive and negative values. 
//The leftover elements should be placed at the very end in the same order as in array A.

//Note: Start the array with positive elements.


function rearrangeSignWithLeftOver(arr) {
    let n = arr.length

    // Define 2 arrays, one for storing positive 
    // and other for negative elements of the array.

    let povIndx = [] // Stores all positive numbers
    let negIndx = []// Stores all negative numbers
    // Segregate the array into positives and negatives.
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            negIndx.push(arr[i])// Push negative numbers into negIndx array
        } else {
            povIndx.push(arr[i])//placing in povIndx[] by push method
        }
    }

    // If positives are lesser than the negatives.
    if (povIndx.length < negIndx.length) {
        // First, fill array alternatively till the point 
        // where positives and negatives are equal in number.
        for (let i = 0; i < povIndx.length; i++) {// "we end loop on positive because positive are less → leftover negatives will be placed after"
            arr[2 * i] = povIndx[i]   // Positive at even index
            arr[2 * i + 1] = negIndx[i] // Negative at odd index
        }
        // General rule: leftover elements start at count of smaller array * number of indices per pair
        // first Fill the remaining negatives at the end of the array. this below line tells
        //  which is the emapty index to place left over
        let index = povIndx.length * 2 //index = 4(povidx.lenth) *2 in the array 4 positive number is present 
        //povIndx.length × 2 → leftover positions start at index 8 
        //this condition only apply if negtive number is more then positve 
        for (let i = povIndx.length; i < negIndx.length; i++) {
            arr[index] = negIndx[i]
            index++;
        }
        // If negatives are lesser than the positives.
        //note here is else condition used after if
    } else {
        // First, fill array alternatively till the point 
        // where positives and negatives are equal in numbe
        for (let i = 0; i < negIndx.length; i++) {
            arr[2 * i] = povIndx[i]// Positive at even index
            arr[2 * i + 1] = negIndx[i]// Negative at odd index
        }

        // General rule: leftover elements start at count of smaller array * number of indices per pair
        // Fill the remaining positives at the end of the array.
        //Thebelow line multiplier depends on how many indices each loop iteration consumes — here
        //  it’s 2 because we’re placing one positive and one negative per loop.”
 // Next empty index after pairs
        let index = negIndx.length * 2 //neg.length = 2 → number of alternating pairs place
        //Each pair occupies 2 positions → total 2 × 2 = 4 positions filled
        // Next empty index = 4

        //“If we fill 2 different indices → use *2.(like positive & negtive)
        //If we fill 3 → use *3.(like a,b,c are three differnt indices)
        for (let i = negIndx.length; i < povIndx.length; i++) {
            arr[index] = povIndx[i] //// Place leftover positives

            //Why [arrindex] = posIndx[i];?
            // index → the next empty position in the array (calculated as neg.length * 2 = 4)
            // posIndx[i] → the current leftover positive number
            // So this line is literally saying:
            // “Place the leftover positive number posIndx[i] into the next empty
            //  slot of the array arr[index].”
            index++;
        }
    }
    return arr
}
// Array Initialisation.
let arr = [1, 2, -4, -5, 3, 4];

let ans = rearrangeSignWithLeftOver(arr);

// for (let i = 0; i < ans.length; i++) {
//     // console.log(ans[i]);
//     console.log(ans.join(" "));
// }
console.log(ans.join(" ")); // instead of above we can write like this way also 