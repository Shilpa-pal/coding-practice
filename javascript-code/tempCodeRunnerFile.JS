// got another method to pirnt each words(string) in differnt row 
function printEachstr(str,i =0){
    if (i>=str.length) return
    console.log(str[i])
    printEachstr(str,i + 1)
    
}
let wordsarray=  "I love coding".split(" ");
printEachstr(wordsarray)