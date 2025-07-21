
# # while loop using print the number till 5
# num = 1
# while num<=5:
#     print(num)
#     num = num +1
# print(" value of number after complted loop is:",num) 
# print(" loop completed")

# # program write to get sum of integer num
# number = int(input("Enter a 2 digitnumber  to cheak sum of integer number:"))

# sum = 0
# while number != 0:
#     digit = number % 10  # it give last digit 
#     sum += digit
#     print(f" added {digit},intermediate sum:{sum}")
#     number = number // 10   # it remove last digit number 
# print("sum of digit is",sum) 

# # sum digit 
# n= abs(int(input(" enter a number to digit count:")))
# count = 0
# if n == 0:
#     count = 1
# else:
#     while n !=0:
#         n = n//10
#         count += 1
# print(" total number of count: ",count)        

# # count number of string
# num = int(input("Enter a number :"))
# count = len(str(abs(num)))
# print("Total number of digit",count)


# ## Reverse a Number
# #We remove digits from the right and add them to a new number from the left.
# num= int(input(" Enter a number to check reverse :"))
# reverse  = 0
# while num !=0:
#     digit = num % 10
#     reverse = reverse * 10 + digit
#     num = num// 10
# print("reverse number is :",reverse)


#Check Palindrome Number
number = 121
original = number 
reverse = 0
while number != 0:
    digit_num= number % 10
    reverse = reverse * 10 + digit_num
    number = number // 10
if original == reverse:
    print(" palindrone")
else:
    print(" it is not palindrone")

# cheak Palindrone of words 
words = input("Enter a words:").lower()
reversed_word = words[::-1]
if words == reversed_word:
    print(" Palindrome")
else:
    print(" Not Palindrome")

# cheak sentences palindrone or not

sentances = "A man a plan a canal Panama"
cleaned = ''.join(char for char in sentances if char.isalnum())
reversed_sentances=cleaned[::-1]
if cleaned == reversed_sentances:
    print("It is a palindrome sentence.")
else:
    print("It is not a palindrome sentence.")