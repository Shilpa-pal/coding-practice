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



// check how many times number gets repeat by hashing technique

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


// hashing technique cheack frequency of string

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


// hashing technique another alternative to slove when we know charchater is in lowercase

function mainAlpha(inp){
    let data2 = inp.trim().split(/\s+/);
    let idx = 0

     // Step 1: Read string
     let s = data2[idx]
     idx = idx + 1   // we can write this dirext idx++

    //
  // Step 2: Precompute frequency for 26 lowercase letters
  let hash = new Array(26).fill(0)
  for(let i = 0;i<s.length;i++){
    let ch = s[i]
    hash[ch.charCodeAt(0) - "a".charCodeAt(0)]++;  //harCodeAt(0) gives ASCII code.
//'a'.charCodeAt(0) = 97
//'c'.charCodeAt(0) = 99
  }

  //  // Step 3: Read number of queries
  let query = parseInt(data2[idx])
  idx = idx+ 1

  // ANswer each query
  let output = []
  for(let i = 0;i<query;i++){
    let c = data2[idx]
    idx = idx + 1   /// we can write this dirext idx++

    output.push(hash[c.charCodeAt(0)-"a".charCodeAt(0)])

  }
  
  return output.join("\n");
}

// Example input
let inp = `
abcdabehf
5
a
g
h
b
c
`;

console.log(mainAlpha(inp));


//hashing technique general method! for uppercase lowercase and symbol

function main(iput) {
  const lines = iput.trim().split(/\s+/); // split all whitespace → tokens: [string, q, q1, q2, ...]
  let idx = 0;                              // input cursor (which token we're on)

  const s = lines[idx++];                   // read the string, then move cursor to next token

  // ------- precompute frequency for all ASCII chars (0..255)
  const hash = new Array(256).fill(0);      // create 256 boxes, all starting at 0
  for (let i = 0; i < s.length; i++) {      // iterate each character of the string
    const code = s.charCodeAt(i);           // numeric code of s[i] (e.g., 'a' → 97)
    hash[code] = hash[code] + 1;            // Whenever we see the same character again, we “bump” (increment) its frequency in the hash table by 1.
    // (equivalently: hash[code]++)
  }

  // ------- read queries and answer them
  let q = Number(lines[idx++]);             // how many queries? (also advance cursor)
  const out = [];                            // collect answers to print once at the end

  while (q--) {                              // run exactly q times (after each check, q decreases)
    const c = lines[idx++];                  // read next query character, advance cursor
    const code = c.charCodeAt(0);            // its numeric code
    out.push(hash[code]);                    // push precomputed frequency (0 if it never appeared)
  }

  return out.join("\n");                     // join answers by newline
}
// Example input
let iput = `
abcdabehf
5
a
g
h
b
c
`;

console.log(main(iput));


/// here is same logic as above but some syntax changes used short form we can write it like this also  hashing technique
function mainalternate(userinput){
    let lines = userinput.trim().split(/\s+/)
    let s = lines[0]  //.. the string
 
    //precumpute
        let hash = new Array(256).fill(0)
        for(let ch  of s){
            let code = ch.charCodeAt(0)// ASCII code
            hash[code]++
        }

    // read queries
    let q = Number[lines[0]];
    let output = []
    let idx = 2
    while (q--){ //5 → 4 → 3 → 2 → 1 → 0 (loop runs while value before -- is non-zero) //when q hits 0, loop stops.
        let c = lines[idx++]
        let code = c.charCodeAt(0);
        output.push(hash[code])
    }
    return output.join("\n")

}
// Example input
let userinput = `
abcdabehf
5
a
g
h
b
c
`;

console.log(main(userinput));