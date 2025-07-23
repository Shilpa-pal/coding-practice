
# # # while loop using print the number till 5
# # num = 1
# # while num<=5:
# #     print(num)
# #     num = num +1
# # print(" value of number after complted loop is:",num) 
# # print(" loop completed")

# # # program write to get sum of integer num
# # number = int(input("Enter a 2 digitnumber  to cheak sum of integer number:"))

# # sum = 0
# # while number != 0:
# #     digit = number % 10  # it give last digit 
# #     sum += digit
# #     print(f" added {digit},intermediate sum:{sum}")
# #     number = number // 10   # it remove last digit number 
# # print("sum of digit is",sum) 

# # # sum digit 
# # n= abs(int(input(" enter a number to digit count:")))
# # count = 0
# # if n == 0:
# #     count = 1
# # else:
# #     while n !=0:
# #         n = n//10
# #         count += 1
# # print(" total number of count: ",count)        

# # # count number of string
# # num = int(input("Enter a number :"))
# # count = len(str(abs(num)))
# # print("Total number of digit",count)


# # ## Reverse a Number
# # #We remove digits from the right and add them to a new number from the left.
# # num= int(input(" Enter a number to check reverse :"))
# # reverse  = 0
# # while num !=0:
# #     digit = num % 10
# #     reverse = reverse * 10 + digit
# #     num = num// 10
# # print("reverse number is :",reverse)


# # #Check Palindrome Number
# # number = 121
# # original = number 
# # reverse = 0
# # while number != 0:
# #     digit_num= number % 10
# #     reverse = reverse * 10 + digit_num
# #     number = number // 10
# # if original == reverse:
# #     print(" palindrone")
# # else:
# #     print(" it is not palindrone")

# # # cheak Palindrone of words 
# # words = input("Enter a words:").lower()
# # reversed_word = words[::-1]
# # if words == reversed_word:
# #     print(" Palindrome")
# # else:
# #     print(" Not Palindrome")

# # # cheak sentences palindrone or not

# # sentances = "A man a plan a canal Panama"
# # cleaned = ''.join(char for char in sentances if char.isalnum())
# # reversed_sentances=cleaned[::-1]
# # if cleaned == reversed_sentances:
# #     print("It is a palindrome sentence.")
# # else:
# #     print("It is not a palindrome sentence.")

# #/Write a Python program to print ASCII value of a character.
# ch = input(" Enter a charchter:")
# print("ASCII value of",ch,"is",ord(ch))

# #Write a program to print all ASCII values from 'a' to 'z'.
# print(" ASCII value of lower chracter")
# for ch in range(ord('a'),ord('z') + 1):
#     print(chr(ch),":",ch)

# print(" ASCII value of upper charchter")
# for numb in range(ord("A"),ord("Z")+ 1):
#     print(chr(numb),":",numb)

# # using while loop 
# print(" Printing the ASCII value using while loop")
# numb = ord("A")
# while numb<=ord("Z"):
#     print(chr(numb),":",numb)
#     numb += 1

# #What is the difference between uppercase and lowercase letters in ASCII?
# dif = ord("a")-ord("A")
# print(" The differnace would be",dif)

# # how to know it is upper case or lowercase 
# char = input(" Enter a charchter as per your choice:")
# if 65<=ord(char) <=90:
#     print(" upper case")
# else:
#     print(" It is lowercase")

# #alternative
# char = input("Enter a character: ")

# if ord(char) >= 65 and ord(char) <= 90:
#     print("It is an uppercase letter.")
# else:
#     print("It is not an uppercase letter.")
# # if want to know uppercase without ASCII
# words_is = "X"
# if words_is.upper():
#     print(" it is in uppercase")
# else:
#     print(" it is in lowercase")

# # : How to convert lowercase to uppercase using ASCII?
# lower_is ="b"
# upper = chr(ord(lower_is)-32)
# print(upper)

# # : How to convert lowercase to uppercase using ASCII?
# upper = "B"
# lower = chr(ord(upper)+32)
# print(lower)


# ch = 'D'
# lower = ch.lower()
# print(lower)   # Output: 'd'


