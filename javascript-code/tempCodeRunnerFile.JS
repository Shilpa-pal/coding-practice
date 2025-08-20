function printPattern(n) {
    for (let i = 0; i < n; i++) {
        let start = (i % 2 === 0) ? 1 : 0;

        for (let j = 0; j <= i; j++) {
            process.stdout.write(start.toString());  // print without newline
            start = 1 - start;
        }

        console.log(); // move to next line
    }
}

printPattern(5);