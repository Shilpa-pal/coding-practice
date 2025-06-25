"""
Complete the function printNumber which takes an integer input from the user and prints it on the screen.



Use:-

for C++ : cout << variable_name;
for Java : System.out.print();
for Python : print()
for Javascript : console.log()


"""
def printNumber():
    val = int(input("Enter a number: "))
    print(val)
printNumber()


## use while loop to print a number till 10
num = 1
while num <=10:
    print(num)
    num=num + 1
print("value of number after end of running loop is",num)
print("end of the program")

# write a program that get some of integer value
nums = int(input("enter a number" )) ## input are like eg.123,2345
sum=0
while nums !=0:
    digit = nums % 10
    sum= digit +sum
    nums= nums//10
print("sum of digit is",sum)

#write a python program that accept the integer value and then count the number of even and odd number
# using fro loop
number = list(map(int,input("Enter a number ").split()))

even_num = 0
odd_num = 0

for i in number:
    if i % 2 == 0:
     even_num += 1
     print("is an even number",i)
else:
    odd_num += 1
    print("is an odd number",i)
print("Total even number",even_num)
print("Total odd number",odd_num)

# above same problem using while loop

value = list(map(int,input("Enter a number as per you:").split()))

count_of_even =0
count_of_odd=0
i=0

while i < len(value):
    if value[i] % 2 == 0:
      count_of_even+= 1
      print("is an even number",value[i])
    else:
        count_of_odd +=1
        print("is an odd number",value[i])
    i+= 1
 

print("Total even numbers:", count_of_even)
print("Total odd numbers:", count_of_odd)


