
// # include<stdio.h>
// int main(){

//     int i=5;
//     int*ptr = &i;
//     int **pptr = &ptr;
//     printf("%d\n",**pptr);

//     return 0;

// }

void square(int n);
void _square(int *n);

int main(){
    int number = 5;
    square(number);
    printf("number=%d\n",number);

     _square(&number);
     printf("number = %d\n",number);

    return 0;
}
// call by value
void square(int n){
     n= n* n;
    printf("sequre is: %d\n",n);
}
//  call by  refrance 
void _square(int *n){
     *n= (*n)* (*n);
     printf("sequre is: %d\n",*n);

}


// swap the value
void swap(int a,int b);

int main(){
  
    return 0;
}

//call by value
void swap(int a,int b){
      int t=a;
    a=b;
    b=a;
    

}

