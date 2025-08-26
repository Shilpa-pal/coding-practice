function printOneToN(i, n) {
    if (i > n) return;  
    console.log(i);    
    printOneToN(i + 1, n);  // move forward
}
printOneToN(0,5)
