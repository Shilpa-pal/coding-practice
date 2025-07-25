
# def add_number(*args):
#     return sum(args)
# print(add_number(1,3,5,7))

# def number(**kwargs):
#     for key,value in kwargs.items():
#         print(key,":",value)

# number(name="shiloa",age=27)


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

class python:
    def __init__(self,title,author):
        self.title = title
        self.author = author
    def display(self):
        print(f"Title {self.title},Author{self.author}")
b1 = python("The alchemist","paulo coelho")
b1.display()


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
class Animal:
    def sound(self):
        print(" Animal sound")
class Bird(Animal):
    def fly(self):
        print("animal fly")
class crow(Bird):
    def speak(self):
        print("animal speak")

# hierarchical inheritance 

class Vehicle:
    def car(self):
        print("this is car")
class Car(Vehicle):
    def drive(self):
        print("he drives a car")
class Truck(Vehicle):
    def drive_truck(self):
        print(" drivng a truck")

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
here_list = [3,4,5,6,7]
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


num_list = [3,5,6,7,8]
num_list.sort()
print(num_list)

