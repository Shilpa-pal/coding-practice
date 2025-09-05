// another alternative to slove when we know charchater is in lowercase

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
    hash[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
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