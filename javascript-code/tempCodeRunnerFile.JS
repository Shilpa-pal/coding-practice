function printString(i,n){ // starting point and n times
    if(i>n) return 
    console.log(i)
    printString(i - 1,n)
}
printString("Neha",3)