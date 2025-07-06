
#include<stdio.h>

int main(){
    int age= 22;
    int*ptr=&age;

    // address 
    printf("%p\n",&age);
    printf("%u",&age);  // we can use this it esay to use and read the address of value
    printf("u\n",ptr); // the value of above and this willsame becuzthe value of age are saved in ptr ultimately
    printf("u\n",&ptr);// 
    return 0;
}

/// above we typed address here we type value .

// int main(){
//     int age = 23;
//     int *ptr = &age;
//     printf("%d\n",age);
//     printf("%d\n",*ptr);
//     printf("%d\n",*(&age));
//     return 0;
// }

// finding the value

// int main(){
//     int x;
//     int *ptr;

//     ptr = &x;
//     *ptr = 0;

//     printf(" x= %d\n",x);
//     printf(" *ptr= %d\n",*ptr);
   
//     *ptr += 5; // x= 5
//     printf("x=%d\n",x);
//     printf("*ptr=%d\n",*ptr);
//     (*ptr)++;                       ///*ptr = *ptr + 1= 5 + 1 = 6
//     printf("x=%d\n",x);
//     printf("*ptr=%d\n",*ptr);

//     return 0;

// }


