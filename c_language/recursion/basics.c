#include <stdio.h>
#include <math.h>

// Function to calculate n factorial (using recursion)

// function to print factorial of n
// int factorial(int n);
// int main()
// {
//     int n;
//     printf("enter n : ");
//     scanf("%d", &n);
//     printf("factorial is : %d", factorial(n));
//     return 0;
// }
// int factorial(int n)
// {
//     if (n == 0)
//     {
//         return 1;
//     }
//     int factnm1 = factorial(n - 1);
//     int factn = factnm1 * n;
//     return factn;
// }

// wrire  function to print n term of the fibonachi

int fib(int n);

int main(){
    printf("%d",fib(5));
    return 0;
}

int fib(int n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    int fibNm1=fib(n-1);
    int fibNm2=fib(n-2);
    int fibN= fibNm1 + fibNm2;
    // printf("fib of %d is:%d\n",n,fibN);  by writting it it give repeated fibonacchi of each value 
    return fibN;
}
// calculate percentage Math, sci and hindi

// int calcultePer(int math,int sci,int hindi);

// int main(){
//     int math= 56;
//     int sci = 86;
//     int hindi = 84;
//     printf("%d",calcultePer(math,sci,hindi));

//     return 0;
// }

// int calcultePer(int math,int sci,int hindi){
//     int aver = (math + sci + hindi) /3;
//     return aver;
// }

// void printHW(int count);

// int main(){
//     printHW(10);
//     return 0;
// }

// void printHW(int count){
//     if (count == 0){
//         return;
//     }
//     printf("Hello world\n");
//     printHW(count -1);
// }

// // sum of first n natural numbers

// int sum(int n);

// int main(){
//     printf("sum is :%d",sum(5));  // here function get called

//     return 0;
// }

// int sum(int n){
//     if(n==1){
//         return 1;
//     }
//     int sumNm1 = sum(n-1);
//     int sumN = sumNm1 + 1;  // (n-1 )+ 1
//     return sumN;
// }

// function to print factorail number
// int fact(int n);

// int main()
// {
//     printf("factorial is:%d", fact(3));

//     return 0;
// }

// int fact(int n)
// {
//     if (n == 0)
//     {
//         return 1;
//     }
//     int factNm1 = fact(n - 1);
//     int factN = factNm1 * n;
//     return fact;
// }

// using function convert temp celsius to fahrenheit

// float convertTemp(float celsius);

// int main()
// {
//     float far = convertTemp(0);
//     printf("far: %f", far);
//     return 0;
// }

// float convertTemp(float celsius)
// {
//     float far = celsius * (9.0 / 5.0) + 32;
//     return far;
// }

// convert temperature fahrenheit to celsius

// float convertFren(float frehan);

// int main()
// {
//     float celcius = convertFren(8);
//     printf("% f", celcius);
//     return 0;
// }

// float convertFren(float frehan)
// {
//     float celsius = 5.0 / 9.0 * (frehan - 32);
//     return celsius;
// }
