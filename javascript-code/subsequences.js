
// write a subsequences of array

function subsequences(ind, array, ds, n) {    // ind = index , ds= where subsequnces of aray store n = lenght of array
    // Base Case: if we reached end of array
    if (ind === n) {
        // Print current subsequence (ds)
        if (ds.length === 0) {
            console.log("{}");  // empty subsequence
        } else {
            console.log(ds.join(" "));//join(" ") //converts the array into a string where elements are separated by a space " ".
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


//Print (return) all subsequences whose sum is k..................
function sumOfSubsequences(ind,ds,s,sum,arr,nu){  // ind = index,ds = datastructure where all the array value get store ,s = 0 in intail ,sum = 2 have mention ,nu = length.arr
    if(ind === nu){
        if(s === sum){
            console.log(ds)// print subsequence whose sum matches
        }
        return;
        
    }
    // Take the current element
    ds.push(arr[ind]);
    s+=arr[ind]
    sumOfSubsequences(ind+1,ds,s,sum,arr,nu)
     // Skip the current element
    s-=arr[ind]
    ds.pop()
    sumOfSubsequences(ind + 1,ds,s,sum, arr,nu)
}
let arr = [1,2,1]
let nu = arr.length
let sum = 2

sumOfSubsequences(0,[],0,sum,arr,nu)


//Code to Print Any One Subsequence............................
// same code but their is variation if we want to print any one subsequnce 

function sumOfOneSubsequences(ind,ds,s,sumis,ar,num){  // ind = index,ds = datastructure where all the array value get store ,s = 0 in intail ,sum = 2 have mention ,nu = length.arr
    if(ind === num){
        if(s === sumis){
            console.log(ds)// print subsequence whose sum matches
            return true //// stop further recursion
        }
        return false;
        
    }
    // Take the current element
    ds.push(ar[ind]);
    s+=ar[ind]
    if(sumOfOneSubsequences(ind+1,ds,s,sumis,ar,num)=== true){
        return true //// if found in this path, stop
    }
     // Skip the current element
    s-=ar[ind]
    ds.pop()
    if(sumOfOneSubsequences(ind + 1,ds,s,sumis, ar,num)=== true){
        return true
    }
    return false  // // if no subsequence found it return false
}
let ar = [1,2,1]
let num = ar.length
let sumis = 2

sumOfOneSubsequences(0,[],0,sumis,ar,num)

// count the subsequnces
// in this we don't need of data structure like above we need them
function sumOfSubsequences(ind,s,su,arri,no){  // ind = index,ds = datastructure where all the array value get store ,s = 0 in intail ,sum = 2 have mention ,nu = length.arr
    if(ind === no){
        return su === s? 1:0
        
    }
    // Take the current element
  
    s+=arri[ind]
   let left = sumOfSubsequences(ind+1,s,su,arri,no)
     // Skip the current element
    s-=arri[ind]
    
    let right = sumOfSubsequences(ind + 1,s,su, arri,no)

    return left + right
}
let arri = [1,2,1]
let no = arri.length
let su = 2

console.log(sumOfSubsequences(0,0,su,arri,no))