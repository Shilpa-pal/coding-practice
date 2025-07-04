
#include<stdio.h>
#include <math.h>
void printHello();
void printGoodbye();


int main() {
    printHello();
    printGoodbye();
    return 0;
}

void printHello(){
    printf("Hello,goodmorning \n");
}

void printGoodbye(){
    prinf("Goodbye\n");
}

// made function that do namste to indian and bhorjie for french

void namste();
void bonjour();

int main(){
    char ch;
    printf(" Enter f your are in frenvh and i if you are from india");
    scanf("c",&ch);
    if (ch =="i"){
        namste();
    }else  {}
        bonjour();

    return 0;
}

void namste(){
    printf("Namste\n");
}

void bonjour(){
    printf("bonjour\n");
}


// make a function that do sum of two number

// int sum(int a,int b);

// int main(){
//     int a,b;
//     printf(" Enter first number:");
//     scanf("%d",&a);
//     printf("Enter second number:");
//     scanf("%d",&b);
//     int s = (a + b);
//     printf("sum is %d",s);

//     return 0;
// }

// int sum(int x,int y){
//     return x + y;
// }

// print a table as per your choice using def


// void printTable(int n);

// int main(){
//     int n;
//     printf("Enter a number:");
//     scanf("%d",&n);
//     printTable(n);

//     return 0;
// }


// void printTable(int n){
//     for(int i=1;i<=10;i++){
//         printf("%d\n",i*n);
//     }

// }


// it add 18% gst and calculate it then give the value

// void calculatePrice(float value);


// int main(){
//     float value = 100.0;
//     calculatePrice(value);
//     return 0;
// }

// void calculatePrice(float value){
//     value = value + (0.18 * value);
//     printf("%f",value);

// }

// calculate the sequare of a number.

// #include<math.h>

// int calcSquare(int n);

//  int main() {
//     int n;
//     printf("enter n : ");
//     scanf("%d", &n);
//     printf("square is : %d", calcSquare(n));
//     return 0;
//  }
//  int calcSquare(int n) {
//     return n * n;
//  }


//alternative solution
//  #include <math.h>

// int main() {
//     int n = 4;
//     printf("%f",pow(n, 2));

//     return 0;
// }

// alternative solution



// int main() {
//     int n = 4;
//     double square = pow(n, 2);  // Returns a double
//     printf("Square of %d is: %f\n", n, square);

//     return 0;
// }


// write formula of sequre,rectangal,circle

float squreArea(float side);
float circleArea(float rad);
float rectangleArea(float a,float b);


int main(){
    float a= 15.0;
    float b= 5.0;
    printf("area is:% f",rectangleArea(a,b));  // like this we call for circle and sequre
    return 0;
}

float squareArea(float side){
    return side * side;
}

float circleArea(float rad){
    return 3.14 * rad * rad;
}

float rectangleArea(float a,float b){
    return a * b;
}