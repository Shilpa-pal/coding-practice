
# """
# Complete the function printNumber which takes an integer input from the user and prints it on the screen.

# Use:-

# for C++ : cout << variable_name;
# for Java : System.out.print();
# for Python : print()
# for Javascript : console.log()


# """
# def printNumber():
#     val = int(input("Enter a number: "))
#     print(val)
# printNumber()


# ## use while loop to print a number till 10

# num = 1
# while num <=10:
#     print(num)
#     num=num + 1
# print("value of number after end of running loop is",num)
# print("end of the program")

# # write a program that get some of integer value

# nums = int(input("enter a number" )) ## input are like eg.123,2345
# sum=0
# while nums !=0:
#     digit = nums % 10
#     sum= digit +sum
#     nums= nums//10
# print("sum of digit is",sum)

# #write a python program that accept the integer value and then count the number of even and odd number
# # using fro loop
# number = list(map(int,input("Enter a number ").split()))

# even_num = 0
# odd_num = 0

# for i in number:
#     if i % 2 == 0:
#      even_num += 1
#      print("is an even number",i)
# else:
#     odd_num += 1
#     print("is an odd number",i)
# print("Total even number",even_num)
# print("Total odd number",odd_num)

# # above same problem using while loop

# value = list(map(int,input("Enter a number as per you:").split()))

# count_of_even =0
# count_of_odd=0
# i=0

# while i < len(value):
#     if value[i] % 2 == 0:
#       count_of_even+= 1
#       print("is an even number",value[i])
#     else:
#         count_of_odd +=1
#         print("is an odd number",value[i])
#     i+= 1
 

# print("Total even numbers:", count_of_even)
# print("Total odd numbers:", count_of_odd)

# # write a program for factorial

# number = int(input("Enter a number for factorial:"))
# fact = 1
# for i in range(1,number + 1):
#    fact = fact *i
# print("The factorail of",number ,"is",fact)


# # cheack prime number
# primeNum = int(input(" Enter a number to cheack it is prime number or not."))

# if primeNum <=1:
#    print("it is not prime number")
# else:
#    is_prime = True
#    for i in range(2,primeNum):
#       if primeNum % i ==0:
#          is_prime=False
#          break
# if is_prime:
#    print(" it is prime number")
# else:
#    print(" it is not prime number")
         
        
# # To cheak prime number I solved it by using function
# def is_prime(num):
#    if num <=1:
#       return False
#    for j in range(2,num):
#       if num %j == 0:
#          return False
#    return True    #This line runs only if the loop finishes without finding any divisor.
   
# number = int(input("Enter a number to cheack prime number"))
# if is_prime(number):
#    print(" it is prime number ")
# else:
#    print(" it is not prime number")

# # here is one more alternative which is one liner coding 

# number = int(input("Enter a number to know prime number:"))
# print("Prime" if all(number % i ==0 for i in range(2,number))and num > 1 else"Not Prime")


# def count_vowels(words):
#    vowel = 0
#    for ch in words:
#       if ch in 'aeiouAEIOU':
#          vowel=vowel+ 1
#    return vowel
# user = input("Enter a stirng")
# print(" Number of vowels Present",count_vowels(user))

# write a function that swap the value of two 

def swap_value(n1,n2):
   n1,n2= n2,n1
   print("inside the function n1=",n1 , "n2 =",n2)
number1=int(input(" Enter the value of n1",))
number2=int(input(" Enter the value of n2",))
print("before calling the function:number1=",number1 ,"number2=",number2)
swap_value(number1,number2)
print("after calling the function:number1=",number1 ,"number2=",number2)

# here function with keyword argumnt


def keyword(name,price):
   print("name=",name)
   print("price=",price)

# calling the function   ## argument that identify the parameter by their name
keyword(name="fruits",price="210")
keyword("rise",80)
keyword(price="312",name="almond")






