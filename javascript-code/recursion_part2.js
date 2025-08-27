function printstring(n){
    if(n === 0) return 
    
    printstring(n-1)
    console.log(n)

}
printstring(5)


function useSum(n,last){
    if(n>last) return 
    console.log(n)
    useSum(n+ 1,last)
}
useSum(0,6)


function useSum1(num){
    if(num>5)return
    console.log(num)
    useSum1(num+ 1)
}
useSum1(1)


function printstring(str,i=0){
    if(i >=str.length) return//bae case
    console.log(str[i])   // print one charchter
    printstring(str,i+1)  //// move to next character
}
printstring("Shilpa")

// we can print each charchter by 33slice mathod also using ##one parameter as well
function printstr(s){
    if (s === "") return
    //console.log(s[0])  // this print each word in diff row   // if i add i before s[0] it will print index of each alphabates also
    process.stdout.write(s[0] + " ")   // print first character // this method pritn each word in same row 
    printstr(s.slice(1))   //    // pass remaining string
}
printstr("Harish")

// here is another method like slice just we have to replace ##slice with ##substring  another way
//  to solve same method diff syntax and one parameter also

function method2(string){
    if(string === "") return;
    console.log(string[0]) // 
    method2(string.substring(1))
}
method2("Shilpa & harish")


// got another method to pirnt each words(string) in differnt row 
function printEachstr(str,i =0){
    if (i>=str.length) return
    console.log(str[i])
    printEachstr(str,i + 1)
    
}
let wordsarray=  "I love coding".split(" "); // we used i To get the **i-th word**, we use `words[i]`.
    
printEachstr(wordsarray)