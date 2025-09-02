
// write a subsequences of array

function subsequences(ind, array, ds, n) {    // ind = index , ds= where subsequnces of aray store n = lenght of array
    // Base Case: if we reached end of array
    if (ind === n) {
        // Print current subsequence (ds)
        if (ds.length === 0) {
            console.log("{}");  // empty subsequence
        } else {
            console.log(ds.join(" "));join(" ") //converts the array into a string where elements are separated by a space " ".
            //ds = [3, 1, 2]; to this ................... ds.join(" ") → "3 1 2"
        }
        return;
    }

    // ---------- TAKE CASE ----------
    // Include arr[index] in the subsequence
    ds.push(array[ind]);      //it adds in ds 
    subsequences(ind + 1, array, ds, n)

    // to skip 
    // Backtrack: remove the last element added
    ds.pop();
    // ---------- NOT TAKE CASE ----------
    // Move forward without including arr[index]
    subsequences(ind + 1, array, ds, n)

}
// Driver code
let array = [3, 2, 1]   // here is array given 
let n = array.length   // here is length of array 
subsequences(0, array, [], n)   // here called the function