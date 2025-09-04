function countFreq(nums) {
    // Create an empty Map to store frequency of each number
    let freqMap = new Map();

    // Loop through each number in the array
    for (let num of nums) {
        // If number is already in the map, increment its count
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } 
        // Otherwise, add it to the map with count = 1
        else {
            freqMap.set(num, 1);
        }
    }

    // Prepare the result as an array of [element, frequency]
    let result = [];
    for (let [key, value] of freqMap) {
        // Push each pair [unique number, its frequency] into result
        result.push([key, value]);
    }

    // Return the final list of pairs
    return result;
}

// Example usage:
console.log(countFreq([1, 2, 2, 1, 3]));
// Output: [[1, 2], [2, 2], [3, 1]]



// check how many times number gets repeat

function hashing(input){
    let data = input.trim().split(/\s+/).map(Number)
    let idx = 0

    //read size of the array
    let n = data[idx]
    idx = idx + 1

    //read array  element
    let arr = []
    for(let i = 0;i<n;i++){
        arr.push(data[idx])
        idx = idx + 1
    }

    // precompute frequency
    let hash = new Array(13).fill(0)  // here length of array is 13 and it intialize by 0
    for(let i =0;i<n;i++){
        hash[arr[i]]= hash[arr[i]] + 1
    }

   //tep 4.size of query
    let q = data[idx]
    idx = idx + 1

     // Step 5: Answer each query
    let Output = []
    for (let i=0;i<q;i++){
        let number = data[idx];
        idx = idx + 1;
        Output.push(hash[number])  //hash[number] → looks up frequency.

       
    }
     return Output.join("\n")

}

// input
let input =`
5
1 3 2 1 3
5
1
4
2
3
12
;
`

console.log(hashing(input))


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