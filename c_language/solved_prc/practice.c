
#include<stdio.h>
 main (){
    int a;
    printf(" Enter a number to cheack divisible or :");
    scanf("%d",&a);
    printf("%d", a % 2 == 0);
    return 0;
 }


//  to cheak it snowving or not

 int main (){
    int issunday =0;
    int snowing = 1;
    printf("%d\n",issunday && snowing);
    return 0;
 }

//  if it's monday or raining then true 
 int main (){
    int ismonday = 1;
    int israning = 0;
    printf("%d\n",ismonday || israning);
    return 0;
 }
 //if number is greater than 9 & less than 100 return true it's kind of cheak  (two digit) number
 int main(){
    int a;
    printf(" Enter a number:");
    scanf("%d",&a);
    printf("%d\n",a>9 && a<100);
    return 0;
 }

 //if we want to cheak three digit number
 int main(){
    int x;
    printf(" enter a number: ");
    scanf("%d",&x);
    printf("%d",x> 99 && x<1000);

    return 0;
 }

 //write a program to prit average of 3
 int main(){
    int a,b,c;
    printf(" enter a 1st number:");
    scanf("%d",&a);
    printf(" enter a 2nd number:");
    scanf("%d",&b);
    printf(" enter a 3rd number:");
    scanf("%d",&c);
    printf("%d",a+b+c/3);

    return 0;
 }
// int main() {
//     printf(" Hello World");
//     return 0;
// }

// int main() {
//     int age = 23;
//     int percentage = '%';
//     int pi = 3.14;
//     printf(" age is %d\n",age);
//     printf(" name is %c\n",percentage);
//     printf("pi value is %f\n",pi);
    
//     return 0;
// }

// int main() {
//     int a,b;
//     printf("enter a\n");
//     scanf("%d",&a);
//     printf("enter b\n");
//     scanf("%d",&b);

//     printf("sum of a and b is %d\n", a +b);

//     return 0;
// }

// int main (){
//     int r;
//     printf("enter value of r\n",r);
//     scanf("%f",&r);
//     printf(" are of circle is %f",3.14 * r *r);
//     return 0;
// }
//  # include <stdio.h>
//  int main() {
//  int a = 10;
//  a += 10;
//  printf("a+10 = %d \n", a);
//  a-= 10;
//  printf("a-10 = %d \n", a);
//  a *= 10;
//  printf("a*10 = %d \n", a);
//  a /= 10;
//  printf("a/10 = %d \n", a);
//  a %= 10;
//  printf("a%c10 = %d \n", '%', a);
//  return 0;
//  }



 // write a program to check the given character is digit or not
