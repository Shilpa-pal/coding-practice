// // //
// // Given marks of a student, print on the screen:

// // Grade A if marks >= 90
// // Grade B if marks >= 70
// // Grade C if marks >= 50
// // Grade D if marks >= 35
// // Fail, otherwise.


// // For printing use:-

// // for C++ : cout << variable_name;
// // for Java : System.out.print();
// // for Python : print()
// // for Javascript : console.log()

// // //

function studentOfMarks(marks) {
    if (marks >= 90) 
        return "Your grade is A"
    
    else if (marks >= 70)
        return "Your grade is B"
    else if (marks >= 50)
        return "Your grade is C"
    else if (marks >= 35)
        return "Your grade is D"
    else {
        return "Your grade is E"
    }
}
let result = studentOfMarks(81)
console.log(result)

//  check number is perfect sequre or not

let input = 7
input = Number(input)
if ((input ** 0.5) ** 2 == input){
    console.log(" It is perfect sequre root");
} 
else {
    console.log(" it is not perfect sequre")
}


//Input a number and check if it's in range 100 to 999.
let numb = 110;

if (numb >= 100 && numb <= 999) {
    console.log("It is in range");
} else {
    console.log("It is not in range");
}


// Input the day number (1 to 7), print the day name.
