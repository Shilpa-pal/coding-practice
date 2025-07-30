
#include <stdio.h>

//  check number is odd and even
int main(){
    int num;
    printf(" Enter a number:");
    scanf("%d",&num);
    if (num >0){
        printf(" it is posditive number\n");
        if (num % 2 == 0){
            printf(" it is even number %d\n",num);
    
        }else{
            printf(" it is odd number:%d\n",num);
        }
    }else {
        printf(" it is not negative number");
    }

    return 0;
}
 //write a program to check the given character is digit or not
// int main (){
//     char ch;
//     printf(" enter a char");
//     scanf(" %c",&ch);
//    ( ch>='0' && ch<='9')
//     ?printf("it is digit:%c\n",ch):printf(" it is not digit:%c\n",ch);
//     return 0;
// }
//if to else statement 
// int main (){
//     int age ;
//     printf(" Enter a age:");
//     scanf("%d",&age);
//     if (age>=18 && age<=100){
//         printf("He is adult:%d\n",age);
//     }else if (age<18 ){
//         printf("He is minor:%d\n",age);
//     }else{
//         printf(" invalid age\n ");
//     }
//     return 0;
// }

//write a program to cheak smallest number
// int main(){
//     int x,y;
//     printf("Enter  a 1st number:");
//     scanf("%d",&x);
//     printf("Enter  a 2nd number:");
//     scanf("%d",&y);
//     (x>y)
//         ?printf("Greter number is :%d\n",x)
//         :(y>x)
//         ?printf(" greater number is x:%d\n",y )
//         :printf(" both number are equal :%d\n",x);

//     return 0;
// }

//solving sam equestion via use if else
// int main(){
//     int x,y;
//     printf(" Enter a number:");
//     scanf("%d",&x);
//     printf(" Enter a number:");
//     scanf("%d",&y);
//     if (x>y){
//         printf("greater number is:%d\n",x);
//     }else if (y>x){
//         printf("greter number is :%d\n",y);
//     }else{
//         printf("number is equal:%d\n",x);
//     }

//     return 0;
// }

//  main (){
//     int a;
//     printf(" Enter a number to cheack divisible or :");
//     scanf("%d",&a);
//     printf("%d", a % 2 == 0);
//     return 0;
//  }

// //  to cheak it snowving or not

//  int main (){
//     int issunday =0;
//     int snowing = 1;
//     printf("%d\n",issunday && snowing);
//     return 0;
//  }

// //  if it's monday or raining then true 
//  int main (){
//     int ismonday = 1;
//     int israning = 0;
//     printf("%d\n",ismonday || israning);
//     return 0;
//  }
//  //if number is greater than 9 & less than 100 return true it's kind of cheak  (two digit) number
//  int main(){
//     int a;
//     printf(" Enter a number:");
//     scanf("%d",&a);
//     printf("%d\n",a>9 && a<100);
//     return 0;
//  }

//  //if we want to cheak three digit number
//  int main(){
//     int x;
//     printf(" enter a number: ");
//     scanf("%d",&x);
//     printf("%d",x> 99 && x<1000);

//     return 0;
//  }

//  //write a program to prit average of 3
//  int main(){
//     int a,b,c;
//     printf(" enter a 1st number:");
//     scanf("%d",&a);
//     printf(" enter a 2nd number:");
//     scanf("%d",&b);
//     printf(" enter a 3rd number:");
//     scanf("%d",&c);
//     printf("%d",a+b+c/3);

//     return 0;
//  }
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




