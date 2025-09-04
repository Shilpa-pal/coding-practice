//cheack frequency of string

function main(inputs){
    let data1 =inputs.trim().split(/\s+/) 
    idx = 0

    // read the size of array
    let n = data1[idx]
    idx = idx + 1

    // read th element
    let arr = []
    for(let i = 0;i<n;i++){
        arr.push(data1[idx])
        idx = idx + 1
    }
     // precompute frequency (use object for strings)
    let hash = {}
    for(let i =0;i<n;i++){
        let ch = arr[i]
        hash[ch]= (hash[ch] || 0)+ 1
    }

    // size of query
    let query = data1[idx]
    idx = idx + 1

    // 
     // Step 5: Answer each query
    let Output = []
    for (let i=0;i<query;i++){
        let number = data1[idx];
        idx = idx + 1;
        Output.push(hash[number] || 0)  // if not found → 0  // //hash[number] → looks up frequency.

       
    }
     return Output.join("\n")
}
// input
let inputs =`
6
a b c a b c
5
a
b
c
d
e
`

console.log(main(inputs))