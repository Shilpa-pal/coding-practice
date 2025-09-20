//optimal solution for intersection

  function interSection(A1,B1){
    let i = 0
    let j = 0
    let ans = []
    while( i<A1.length && j<B1.length){
        if(A1[i]<B1[j]){
            i++
        }else if(B1[j]<A1[i]){
            j++
        }else{
            ans.push(A1[i]);
            i++
        }
    }
    return ans
  }
  const A1 = [1,2,2,3,3,4,5,6,7]; const B1=[2,2,3,5,7]
  console.log(interSection(A1,B1))