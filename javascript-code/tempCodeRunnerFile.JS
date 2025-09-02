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