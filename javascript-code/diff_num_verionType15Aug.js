// sum of num 

let no = 4567;  //Store original number
let su = 0,tem = no; //su = sum of digits, tem = copy of no

while(tem > 0){  //Loop until tem becomes 0
    console.log(tem);  //Print current value of tem
    su+=tem % 10   //Add last digit of tem to su
    tem = Math.floor(tem/10)   // 6️⃣ Remove last digit from tem
}
console.log(no)  // Print original number
console.log(su) // print sum number

    let num = 123
    let sum = 0, temp = num;  // it create copy of input num that we can modify the temp  in the loop without losing the original num.
    while(temp>0){         // loop runs as long as temp greater than 0 Why? Because we’ll keep removing digits from temp until it becomes 0, 
    // meaning all digits have been processed.
        sum +=temp  % 10;    //temp % 10 extracts the last digit of temp.2)sum += ... means “add that last digit to sum”.
        temp = Math.floor(temp /10) //Removes the last digit from temp.Math.floor() ensures it’s rounded down to an integer.
    }
    console.log(sum)