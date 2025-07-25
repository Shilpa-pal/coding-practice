class Trying:
    def __init__(self,name,age):
      self.name = name
      self.age = age

    def display(self):
        print(f"my name will print by {self.name} and i am {self.age} years old.")

p1=Trying("shilpa",25)
p1.display()

import math
class circle:
    def __init__(self):
        self.__radius = 0
    def setvalue(self,r):
        self.__radius = r
    def calculate(self):
        return math.pi * self.__radius ** 2
    
area=circle()
area.setvalue(5)
print(" area of circle is ",area.calculate())


with open("data.txt",'r')as file:
    for line in file:
        print(line)