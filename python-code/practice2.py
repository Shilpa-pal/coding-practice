
#Count frequency of each character in a string
def count_char(text):
    freq ={}
    for ch in text:
        if ch in freq:
            freq[ch] += 1
        else:
            freq[ch]= 1
    return freq
print(count_char("hello"))

def cheak(word):
    f= {}
    for ch in word:
        if ch in f:
            f[ch] += 1
        else:
            f[ch]= 1
    return f
print(cheak(" Shilpa"))


def cal_fac(n):
    fact = 1 
    for i in range (1,n+1):
        fact *= i
    print(fact)
cal_fac(6)

def is_prime(n):
    if n <= 1:
        return False  # 0 and 1 are not prime numbers

    for i in range(2, int(n ** 0.5) + 1):  # Check till square root of n
        if n % i == 0:
            return False  # Found a factor other than 1 and n
    return True  # No factors found, so it's prime

# Example usage
num = 17
if is_prime(num):
    print(f"{num} is a prime number")
else:
    print(f"{num} is not a prime number")

def fac(n):
    if n == 1 or n==0:
        return 1
    return n * fac(n-1)
print(fac(5))

def facto(n):
    fact = 1
    for i in range(1,n+1):
        fact*= i
    print(fact)
facto(8)

def fac(n):
    facto = 1
    for i in range(1,n+1):
        facto *= i
    print(facto)

n= 1211
# r = 0
# original = n
# while n > 0:
#     d = n % 10
#     r = r * 10 + d
#     n = n // 10
# if (original == r):
#     print(" it is palindrome")
# else:
#     print(" it is not")

num = 5
sum = 0
while num > 0:
    sum += num % 10
    num = num // 10
print("sum is ",sum)

text = " hellow"
vo ="aeiouAEIOU"
c= 0
for char in text:
    if char in vo:
        c += 1
print(c)

a= 5
b= 6
a = a +b
b = a-b
a = a-b
print(" a: ",a,"b",b)

for num in range(10, 51):
    if num > 1:
        for i in range(2, num):
            if num % i == 0:
                break
        else:
            print(num, end=" ")

def add_number(*args):
    return sum(args)
print(add_number(1,3,5,7))

def number(**kwargs):
    for key,value in kwargs.items():
        print(key,":",value)

number(name="shiloa",age=27)


# for num in range(1000,10000):
#     digit =str(num)

#     total = sum(int(d)**4 for d in digit )

#     if total == num:
#         print(num)
# # for n number of
# n= int(input("enter a digit"))

# start = 10**(n-1)
# end = 10**n

# for num in range(start,end):
#     total = sum(int(digit)**n for digit in str(num))
#     if num == total:
#         print(n)


# for num in range(100,1000):
#     digit_conv = str(num)

#     total_sum = sum(int(n)**3 for n in digit_conv)
#     if total_sum == num:
#         print(num)

# for n in range(1000,10000):
#     digit =str(n)
#     tot = sum(int(n)**4 for n in digit)
#     if tot == n:


 
 ##nested loop 
# def flatterd_list(nested):
#     flat =[]

#     for item in nested:
#         if isinstance(item,list):
#             flat.extend(flatterd_list(item))
#         else:
#             flat.append(item)
#     return flat
# nested_list=[[11, 22], [33, 44], [55, [76, 97]]]
# flatterd = flatterd_list(nested_list)
# print(flatterd)



# def falltered_list(nested):
#     flat = []

#     for item in nested:
#         if isinstance(list.item):
#             flat.extend(falltered_list(item))

#         else:
#             flat.append(item)
#     return flat

# nested_list=[[11, 22], [33, 44], [55, [76, 97]]]
# flatterd = flatterd_list(nested_list)
# print(flatterd)

# Write a python program to implement exception handling for ZeroDivision and ValueError.
# try:
#     num = int(input("enter an number to divide:"))
#     result = 10/num
#     print("result",result)
# except ZeroDivisionError:
#     print(" value can not divide by o")
# except ValueError:
#     print(" please provide valid input")

#Write a python program zto calculate area of rectangle using class and object concepts.
# class reactangle:
#     def __init__(self,length,width):
#         self.length = length
#         self.width=width
#     def calculate_area(self):
#         return self.length * self.width
    
# sol = reactangle(6,7)
# print(" Area of ractangle is ",sol.calculate_area())

# # solved basics question 
# def calculate_rec(a,b):
#     return a*b
# value =calculate_rec(6,8)
# print("area of ractangle is",value)

#Create a Python class named Book with attributes title and author.
#  Initialize these attributes with the init method and create a method to display the book details.

# class python:
#     def __init__(self,title,author):
#         self.title = title
#         self.author = author
#     def display(self):
#         print(f"Title {self.title},Author{self.author}")
# b1 = python("The alchemist","paulo coelho")
# b1.display()


#Define a class Circle with a private attribute radius. Provide a method to set the radius value and another method to calculate
#  and return the area of the circle.

# class circle:
#     def __init__(self,radius):
#         self.radius = radius

#     def radius_val(self):
#         return 3.14 * self.radius* self.radius
# r=circle(7)
# print("Area of circle:", r.radius_val())  

# some inheritance 
# class Animal:
#     def sound(self):
#         print(" Animal sound")
# class Bird(Animal):
#     def fly(self):
#         print("animal fly")
# class crow(Bird):
#     def speak(self):
#         print("animal speak")

# hierarchical inheritance 

# class Vehicle:
#     def car(self):
#         print("this is car")
# class Car(Vehicle):
#     def drive(self):
#         print("he drives a car")
# class Truck(Vehicle):
#     def drive_truck(self):
#         print(" drivng a truck")

#Write a python program to add new data item into list using append() and insert().
# my_list = [2,3,4,5,6]
# print(len(my_list))
# my_list.append(8)
# print(my_list)
# my_list.insert(3,10)
# print(my_list)


# his_list = [34,4,6]
# my_list = [8,5]
# his_list.extend(my_list)
# print(his_list)

# #33 flattend list
# def flattend_list(nested):
#     flat =[]

#     for item in nested:
#         if isinstance(item,list):
#             flat.extend(flattend_list(item))
#         else:
#             flat.append(item)
#     return flat
# nested_list=[[11, 22], [33, 44], [55, [76, 97]]]
# flattend = flattend_list(nested_list)
# print(flattend)

# # solved some basics append and insert 
# def display_list(show_list):
#     print(" current list",show_list)

# intial_val=[20,30, 40 ,50 ,60]
# display_list(intial_val)

# value_to_add = 70
# intial_val.append(value_to_add)
# display_list(intial_val)

# valu_to_put = 45
# replace_to = 3
# intial_val.insert(replace_to,valu_to_put)
# display_list(intial_val)

# Create a list of 5 numbers and print the list.
# here_list = [3,4,5,6,7]
# for i in here_list:
#     print(i)
# using while loop

# n = 0
# while (n<len(here_list)):
#     print(here_list[n])
#     n+= 1

# another_list = [3,5,6,7,8]
# print(another_list)
# another_list.append(9)
# print(another_list)
# another_list.insert(4,20)
# print(another_list)
# another_list.remove(3)
# print(another_list)
# another_list.pop()
# print(another_list)
# another_list.pop(3)
# print(another_list)
# print(len(another_list))
# another_list.count()
# print(another_list)


# num_list = [3,5,6,7,8,6,6,6]
# num_list.sort()
# print(num_list)
# count_che = num_list.count(6)
# print(count_che)

# reversed= [3,4,5,67]
# reversed.reverse()
# # usening sliceing

# number_list = [3,4,5,67]
# re = number_list[::-1]
# print(re)

# # using for loop 
# n = [2,3,45,6]
# num = []
# for item in n:
#     num =  [item] + num
# print(num)
# # reverse the normal number

# num = 123
# reversed_num = 0
# while num > 0:
#     digit = num % 10
#     reversed_num= reversed_num * 10 + digit
#     num = num // 10
# print(reversed_num)


# n = int(input(" Enter a number of 2 digit or 3: "))
# rev = 0
# while n> 0:
#     d = n % 10
#     rev = rev * 10 + d
#     n = n // 10
# print (rev)

# # #Check Palindrome Number

# num =121
# original = num
# r = 0
# while num != 0:
#     d = num % 10
#     r = r * 10 + d
#     num = num // 10
# if original == r:
#     print(" it is palindrone")
# else:
#     print(" it is not palindrone")
# cheaking palindrone of words 
# promt = input("Enter a words").lower().strip()
# reversed = promt[::-1]
# if promt == reversed:
#     print(" it is palindrome")
# else:
#     print(" it is not palindrome")

# words = input("Enter a words:").lower()
# reversed_word = words[::-1]
# if words == reversed_word:
#     print(" Palindrome")
# else:
#     print(" Not Palindrome")