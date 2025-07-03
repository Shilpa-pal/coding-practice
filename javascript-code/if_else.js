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
day_number = 6

if (day_number === 1){
    console.log("Monday")
}else if  (day_number === 2){
    console.log("Tuesday")
}else if  (day_number === 3){
    console.log("Wednesday")
}else if  (day_number === 4){
    console.log("Thusday")
}else if  (day_number === 5){
    console.log("Friday")
}else if  (day_number === 6){
    console.log("Saturday")
}else if  (day_number === 7){
    console.log("Sunday")

}else{
    console.log("invalid number you have chooosen ")
}

// above question is done by switch statmente

week_number= 7

switch(week_number){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thusday");
        break;
    case 5:
        console.log("Fridday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sonday");
        break;
    default:
    console.log(" invalid week number")
}

// using array
let dayNum = 3;
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if (dayNum >= 1 && dayNum <= 7) {
    console.log("Day is: " + days[dayNum - 1]); // here (-1 )used becuse when user enter 7,then -1 write to match correct index in array.
} else {
    console.log("Invalid day number");
}


// Check whether a person has fever or not based on body temperature input.

fever = 109

if (fever> 100){
    console.log(" This person have fever")
}else{
    console.log(" It does not have fever")
}

let char = 3

if (char >= "A" && char <= "Z") {
    console.log("It is an uppercase letter");
} else if (char >= "a" && char <= "z") {
    console.log("It is a lowercase letter");
} else if (char >= "0" && char <= "9") {
    console.log("It is a digit");
} else {
    console.log("It is a special character");
}

// Write a program to accept two angles and check if they form a valid triangle with the third angle.
let angle1 = 45
let angle2 = 55

let angle3 = 180 - (angle1 + angle2);

if (angle1 > 0 && angle2 > 0 && angle3 > 0 && (angle1 + angle2 + angle3 === 180)) {
    console.log(`Valid triangle. Third angle is ${angle3}°`);
} else {
    console.log("Invalid triangle.");
}

//
 let num = 22

if (num < 10 || num > 99) {
    console.log("Please enter a valid 2-digit number.");
} else {
    let tens = Math.floor(num / 10);  // First digit
    let ones = num % 10;              // Last digit

    if (tens === ones) {
        console.log("It is a palindrome.");
    } else {
        console.log("It is not a palindrome.");
    }
}

