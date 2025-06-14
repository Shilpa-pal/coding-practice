
#include <stdio.h>
#include <ctype.h>

int main()
{
    char ch;

    printf("Enter a charchter\n");
    scanf("%c", &ch);
    printf("ASCII value of enter char: %d\n", ch);
    int bc = ch - '0';
    printf("ASCII value of enter char: %d\n", bc);

    if (bc >= 0 && bc <= 9)

    {
        printf("it is digit: %c", ch);
    }
    else
    {
        printf(" it is not a digit: %c", ch);
    }
    return 0;
}

// #include <stdio.h>
// int main() {
//     float  r;
//     printf("Enter a number\n");
//     scanf("%f",&r);
//     printf("area of suquare:%f \n",3.14*r*r);
//     return 0;
// }

//  Write a program to calculate perimeter of rectangle.
//  Take sides, a & b, from the userperimeter of rectangle

// int main(){
//     int length,width;
//     printf("enter length of rectangle \n");
//     scanf("%d",&length);
//     printf("enter width of rectangle \n");
//     scanf("%d",&width);
//     printf("perimeter of reactangle %d\n",2 *(length+width));
//     return 0;
// }

// take a number(n) from user & output its cube(n*n*n).
//  int main(){
//      int cube;
//      printf("enter any number\n");
//      scanf("%d",&cube);
//      printf("out of cube is %d",cube* cube*cube);
//      return(0);
//  }

// Write a program to print the average of 3 numbers.

// int main(){
//     int a=3,b=4,c=6;
//     printf("averge of 3 numbers is: %d",(a+b+c)% 3);
//     return 0;
// }

// Write a program to check if given character is digit or not

// # include <stdio.h>
// # include <ctype.h>
// int main(){
//     char ch;
//     printf("enter number \n");
//     scanf("%c",&ch);
//     if(isdigit(ch)){
//         printf("it is digit %c\n",ch);
//     }else{
//         printf("it is not digit %c\n",ch);

//     }

//     return 0;
// }

// same question but solution is alternative.
