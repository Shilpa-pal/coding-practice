"""
Given marks of a student, print on the screen:

Grade A if marks >= 90
Grade B if marks >= 70
Grade C if marks >= 50
Grade D if marks >= 35
Fail, otherwise.


For printing use:-

for C++ : cout << variable_name;
for Java : System.out.print();
for Python : print()
for Javascript : console.log()

"""

def studentMarks(marks):

    if marks >=90:
        print("grade is A")
    elif marks >=70:
        print(" garde is B")
    elif marks >=50:
        print("grade is c")
    elif marks >=35:
        print("grade is D")
    else:
        print("grade is E")
        


marks = 95
studentMarks(marks)   
