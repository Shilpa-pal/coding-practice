function removeDuplicates(rray){

    let i = 0
    for(let j = 0;j<rray.length;j++){
        if(rray[i]!==rray[j]){
            rray[i+ 1] = rray[j];
            i++;
        }
    }
    return i + 1
}
console.log(removeDuplicates([1,1,2,2,2,3,3,3]))