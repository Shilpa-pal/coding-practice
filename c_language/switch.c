# include<stdio.h>
#include<math.h>

////switch with charchter

int main (){
    char day ;
    printf(" Enter Charcter from (eg,m,T,W,t,F,S,s)");
    scanf(" %c",&day);
    switch(day){
        case 'm':printf("monday\n");
        break;
        case 'T':printf(" Tuesday\n");
        break;
        case 'W':printf(" Tuesday\n");
        break;
        case 't':printf(" Tuesday\n");
        break;
        case 'F':printf(" Tuesday\n");
        break;
        case 's':printf(" Tuesday\n");
        break;
        case 'S':printf(" Tuesday\n");
        break;
        default:printf(" it is inavlid char.");

    }
    return 0;
}
// solved using if else ...............

#include <stdio.h>
#include <string.h>

int main() {
    char day[3];
    printf("Enter day (e.g., Mo, Tu, We, Th, Fr, Sa, Su): ");
    scanf("%2s", day);

    if (strcmp(day, "Mo") == 0)
        printf("Monday\n");
    else if (strcmp(day, "Tu") == 0)
        printf("Tuesday\n");
    else if (strcmp(day, "We") == 0)
        printf("Wednesday\n");
    else if (strcmp(day, "Th") == 0)
        printf("Thursday\n");
    else if (strcmp(day, "Fr") == 0)
        printf("Friday\n");
    else if (strcmp(day, "Sa") == 0)
        printf("Saturday\n");
    else if (strcmp(day, "Su") == 0)
        printf("Sunday\n");
    else
        printf("Invalid input\n");

    return 0;
}

// switch integear
// int main(){
//     int day = 4;
//     switch(day){
//         case 1:printf("monday\n");
//         break;
//         case 2:printf("Tuesday\n");
//         break;
//         case 3:printf("Wednesday\n");
//         break;
//         case 4:printf("Thursday\n");
//         break;
//         case 5:printf("Friday\n");
//         break;
//         case 6:printf("Saturday\n");
//         break;
//         case 7:printf("Sunday\n");
//         break;

//     }
//     return 0;
// }


// ternary oprator questions 
// int main (){
//     int age = 12 ;
//     age >12 ? printf(" He is adult :%d",age):printf(" He is child :%d\n",age);

// int number = 8;
// int luckynumber = 8;
// number == luckynumber ? printf("you are lucky \n"):printf("your not lucky");
//     return 0;
// }
