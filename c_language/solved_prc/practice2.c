
#include<stdio.h>
//Write a C program to Reverse a Number
int main(){
    int num ,reverseNum= 0,remainder;
    printf("Enter an integer:");
    scanf("%d",&num);
    // reverse the number
    while (num!= 0){
        remainder = num% 10;   // get the lastdigit
        reverseNum = reverseNum * 10 +remainder;
        num/= 10 ;   // it remove last digit of number
        printf(" reverse num:%d\n",reverseNum);

    }
    return 0;
}