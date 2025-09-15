function recursiveBubble(a,n = a.length, i = 0) {// here a- means array 
    if (n === 1) return a;
    if (i < n - 1) {
        if (a[i] > a[i + 1]) {
            //swap
            [a[i], a[i + 1]] = [a[i + 1], a[i]];

        }
            return recursiveBubble(a,n,i + 1)

    }
            return recursiveBubble(a,n-1,0)

    
}
let a = [5, 1, 4, 2];
console.log(recursiveBubble(a));