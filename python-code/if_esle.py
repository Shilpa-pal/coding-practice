
#Write a program to check whether the last elemnt of list
list = [2,4,5,7,9]
my_list = list[-1]
if my_list % 2 == 0:
     print(" it is even number")
else:
    print(" it is odd number")

##Write a program to check whether the last digit of a number is even or odd.
digit = 127
last_digit = 10 % digit
if last_digit % 2 == 0:
     print(" it is even number")
else:
     print(" it is odd number")
     
#Take gender ("M" or "F") and age, print "Eligible" if:

# Male ≥ 21
# Female ≥ 18

# age= int(input(" Enter your age :"))
# gender = input(" Enter your Gender M Or F:").lower()
# if age >= 21 and gender == "m":
#     print("You are eligible")
# elif age >= 18 and gender == "f":
#     print(" your are eligible")
# else:
#     print(" you are not eligible")

# intermediate level question

#Check if a number is perfect square using if.
# sequre = int(input("Enter a number is perfect square: "))

# if int(sequre ** 0.5)** 2 == sequre:
#     print(" it is perfect sequre.")
# else:
#     print(" it is not perfect sequre number. ")

# #Check whether a number is one-digit, two-digit or more.
# n=int(input(" enter a number to check is one-digit, two-digit or more: "))
# if 0 <= n <= 9:
#     print(" it is one digit number.")
# elif 10 <= n <=99:
#     print(" it is 2 digit number.")
# else:
#     print(" it is more than 2 digit.")

# #Input a number and check if it's divisible by both 2 and 3.
# divisible = int(input(" Enter a number to check divisible: "))
# if divisible % 2 == 0 and divisible % 3 == 0:
#     print(" This number is divible by 2 and 3")
# else:
#     print("This number is  not divible by 2 and 3")

# #Take gender ("M" or "F") and age, print "Eligible" if:

# # Male ≥ 21
# # Female ≥ 18
# age= int(input(" Enter your age :"))
# gender = input(" Enter your Gender M Or F:").lower()
# if age >= 21 and gender == "m":
#     print("You are eligible")
# elif age >= 18 and gender == "f":
#     print(" your are eligible")
# else:


# #Take marks and print "Pass" if marks ≥ 40, otherwise "Fail".

# marks = int(input(" Enter your marks"))
# if marks >=40:
#     print(" you are pass")
# else:
#     print(" your are fail")

# #Take a number and check if it’s a multiple of 3 or 7.

# multiple_num = int(input("Enter a number to cheak multiple"))
# if multiple_num  % 3 == 0 or multiple_num % 7 == 0:
#     print(" It is a multiple of 3 or 7.")
# else:
#     print("it is not mulitple of this number")

# #Input three numbers and print the maximum.
# num1=int(input("Enter 1st number: "))
# num2=int(input("Enter 2nd number: "))
# num3=int(input("Enter 3rd number: "))

# if num1>= num2 and num1>=num3:
#     print("num1 is greater",num1)
# elif num2>=num1 and num2 >= num3:
#     print("num 2nd is greter",num2)
# else:
#     print("number 3 is greter",num3)    

# # Input temperature and classify as Hot (≥30°C) or Cold (<30°C).
# temp= float(input("Enter temprature °C:" ))
# if temp >=30 :
#     print("hot")
# else:
#     print(" cold")

# #Input a year and check if it is a leap year.
# year = int(input(" Enter the year for leap year to cheack"))
# if (year % 4== 0):
#     if (year % 100 !=0):
#         print("leap year")
#     elif(year % 400 == 0):
#         print("leap year")
#     else:
#         print(" it not leap year")
# else:
#     print("it not leap year")

# """
# Given marks of a student, print on the screen:

# Grade A if marks >= 90
# Grade B if marks >= 70
# Grade C if marks >= 50
# Grade D if marks >= 35
# Fail, otherwise.


# For printing use:-

# for C++ : cout << variable_name;
# for Java : System.out.print();
# for Python : print()
# for Javascript : console.log()

# """

# def studentMarks(marks):

#     if marks >=90:
#         print("grade is A")
#     elif marks >=70:
#         print(" garde is B")
#     elif marks >=50:
#         print("grade is c")
#     elif marks >=35:
#         print("grade is D")
#     else:
#         print("grade is E")
        


# marks = 95
# studentMarks(marks)  

# #number as input and check if it’s positive or negative.

# num= int(input("Enter a number it can be positive and negtive as per your choice"))
# if num >=0:
#     print(num,"it is positive number")
# else:   
#     print(num,"is is negative number")

# #Take a number and print whether it is divisible by 5.

# number_divisible = 5
# if number_divisible % 5== 0:
#     print(" it is divisible by 5")

# else:
#     print("It is not divisinal by 5")

# #Check if a number is greater than 100.
# user_number = int(input(" Enter a number"))
# if user_number > 100:
#     print(" it is greater than 100")
# else:
#     print(" it is  not greater than 100")

# #Take age as input and print "Adult" if 18 or above, otherwise "Minor".
# age = int(input("Enter a age "))
# if 0<=age <= 111:
#     if age >= 18:
#         print(" you are  not minor")
#     else:
#         print(" you are minor")
# else:
#     print(" it is  invalid age")

# #Take two numbers and print the greater one.
# num1= int(input(" Enter 1st number"))
# num2= int(input(" Enter 2st number"))

# if num1> num2:
#     print(num1," number 1 is greatar value")
# else:
#     print(num2," number is greatar value")

# #Take a character input and check if it is a vowel or consonant.
# alphabets = input(" Enter a alphabets")

# if alphabets in'aeiouAEIOU':
#     print(" it is vowel")
# else:
#     print(" it is consonants")

# #Take a number and check if it lies between 1 and 10.

# value = int(input(" Take number from 0 to 1"))

# if 0<= value <=10:
#     print(" it lies between 0 to 10 number")
# else:
#     print(" it does not lies 0 to 10 number")



            
