//Write a C program to check whether a number is a palindrome or not.
#include <stdio.h>
int main() {
    int num, reversed = 0, remainder, original;
    scanf("%d", &num);

    original = num; // Storing the original number

    // Reversed the number using a while loop
    while (num > 0) {
        remainder = num % 10;  // we will get the last digit
        reversed = reversed * 10 + remainder;  //It Build the reversed number
        num /= 10;  //It Remove the last digit
    }

    // Comparing original number with the reversed one
    if (original == reversed)
        printf("Palindrome\n");
    else
        printf("Non Palindrome\n");

    return 0;
}

//Write a C program to find largest among 3 numbers. 
#include <stdio.h>
int main(){
    int num1,num2,num3,largest;
    scanf("%d %d %d",&num1,&num2,&num3);
    // assuming num1 is largest number
    largest = num1;
    // Comparing with num2 number
    if(num2>largest){
        largest=num2;
    }
    //// Comparing with num3 number
    if(num3> largest){
        largest=num3;
    }
    // printing the result of largest number
    printf("%d\n",largest);
	
    return 0;
}

//Write a C program that checks if a character is a vowel or consonant using a switch - case statement.

#include <stdio.h>
int main(){
	char ch;  // Declaring a variable to store the input character
    scanf("%c",&ch); //// Read a single character from user input
    //using switch-case to check if the character is a vowel or Not
    switch (ch) {
        // If the character is any of the lowercase and uppercase vowels
        case 'a': case 'e': case 'i': case 'o': case 'u':
        case 'A': case 'E': case 'I': case 'O': case 'U':
            printf("Vowel\n");  // Print "Vowel" if it matches any case above
            break;              // Exit from the switch statement
        default:
            printf("Consonant\n");  // Print "Consonant" for all other characters
    }
       return 0;
}

//Write a C program to find factorial of a number using recursion
#include <stdio.h>
 // Function declaration: calculates factorial of n recursively
long long factorial(int n) {
    // Base case: 
    if (n == 0 || n == 1)
        return 1;
    else
        // Recursive case: n * factorial of (n-1)
        return n * factorial(n - 1);
}

int main() {
    int num;  // Variable to store user input

    scanf("%d", &num);  // Read an integer from user

    // If the input is negative, factorial is not defined
    if (num < 0)
        printf("IF factorial of negative number is not possible\n");
    else
        // Call the recursive function and print the result
        printf("%lld\n", factorial(num));    
}

// Write a C program that implements a basic calculator using functions to perform addition,
// subtraction, multiplication, and division.
#include <stdio.h>

// Function to perform addition
float add(float firstNumber, float secondNumber) {
    return firstNumber + secondNumber;
}

// Function to perform subtraction
float subtract(float firstNumber, float secondNumber) {
    return firstNumber - secondNumber;
}

// Function to perform multiplication
float multiply(float firstNumber, float secondNumber) {
    return firstNumber * secondNumber;
}

// Function to perform division
float divide(float firstNumber, float secondNumber) {
    if (secondNumber != 0) {
        return firstNumber / secondNumber;
    } else {
        return 0;
    }
}

// Main function to read input and call 
int main() {
    float number1, number2, result;
    char operator;

    // Take input in the format: number1  number2 operator
    scanf(" %f %f %c", &number1, &number2, &operator);

    // Used if-else to determine operation
    if (operator == '+') {
        result = add(number1, number2);
    } else if (operator == '-') {
        result = subtract(number1, number2);
    } else if (operator == '*') {
        result = multiply(number1, number2);
    } else if (operator == '/') {
        result = divide(number1, number2);
    } else {
        result = 0;  // Invalid operator
    }

    // Output 
    printf("%.6f\n", result);

    return 0;
    }

