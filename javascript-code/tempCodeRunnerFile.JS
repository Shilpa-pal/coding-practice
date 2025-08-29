
function functionalpara(n){
    if(n === 0) return 
    return n + functionalpara(n -1)
}
console.log(functionalpara(5))