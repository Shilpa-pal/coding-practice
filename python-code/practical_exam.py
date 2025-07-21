# # #Write a regular expression to print the number of vowels and consonants in an input string.
# import re

# def count_vowels_and_consonants(text):
#     # Normalize the text to lowercase
#     text = text.lower()

#     # Count vowels using regex
#     vowels = len(re.findall(r'[aeiou]', text))
    
#     # Counting consonants using regex
#     consonants = len(re.findall(r'[bcdfghjklmnpqrstvwxyz]', text))

#     # Output in expected format
#     print(f"Vowels: {vowels}")
#     print(f"Consonants: {consonants}")

# input_text = input()
# count_vowels_and_consonants(input_text)

#Write a Python program to print the sum of all 3-digit prime numbers.

# # maked a function to check whether number is prime
# def is_prime(n):
#     if n < 2:
#         return False
#     for divisor in range(2, int(n**0.5) + 1):
#         if n % divisor == 0:
#             return False
#     return True

# prime_sum = 0  # Initializing the total sum

# # Iterating through all 3-digit numbers (from 100 to 999)
# for number in range(100, 1000):
#     if is_prime(number):
#         prime_sum += number

# print(prime_sum)   # Printing the final sum

#Write a Python program to create a dictionary having keys upper_case, lower_case, digits, spaces and 
# special symbol as keys and its count in the given string.

# Str1="Hello all, I am Aman Sharma. My ID is aman0702@gmail.com

# Function to count character types
def count_character_types(text):
    result = {
        "upper_case": 0,
        "lower_case": 0,
        "digits": 0,
        "spaces": 0,
        "special_symbols": 0  #key fixed here
    }

    for char in text:
        if char.isupper():
            result["upper_case"] += 1
        elif char.islower():
            result["lower_case"] += 1
        elif char.isdigit():
            result["digits"] += 1
        elif char.isspace():
            result["spaces"] += 1
        else:
            result["special_symbols"] += 1  # match with expected key

    return result

# Input string
input_string = "Hello all, I am Aman Sharma. My ID is aman0702@gmail.com"

# Calling  the function and it will print result
print(count_character_types(input_string))

# Problem Statement

# Write a Python program to create a Pandas DataFrame from a dictionary and fill missing values with the fill forward (ffill) method in the Pandas DataFrame.

 

# data = { 'Employee': ['John', 'Emma', 'Liam', None, 'Sophia'], 

# 'Department': ['HR', None, 'IT', 'Finance', None], 

# 'Salary': [50000, 55000, None, 60000, 65000] }
import pandas as pd

# Step 1: Define the employee dataset using a dictionary
employee_info = {
    'Name': ['John', 'Emma', 'Liam', None, 'Sophia'],
    'Dept': ['HR', None, 'IT', 'Finance', None],
    'Pay': [50000, 55000, None, 60000, 65000]
}

# Step 2: Convert the dictionary to a DataFrame
df = pd.DataFrame(employee_info)

# Step 3: Apply forward fill to handle missing values
df.fillna(method='ffill', inplace=True)

# Step 4: Output the cleaned DataFrame
print("Data after forward filling missing entries:")
print(df)

# Write a Python program in sqlite, with following instructions 
# - create database STUDENT 
# - create STUD_DETAIL table with three field STU_ID, NAME and BRANCH 
# - insert data of 3 students (101, "Aman", "CS"), (102, "Vimal","EE"), (103,"Rohit","ECE") 
# - Update BRANCH of Employee having ID 103 to "ME" 
# - print updated row
import sqlite3

# Step 1: Connect to SQLite database (creates it if not exists)
conn = sqlite3.connect("STUDENT.db")
cursor = conn.cursor()

# Step 2: Create table if it doesn't already exist
cursor.execute("""
CREATE TABLE IF NOT EXISTS STUD_DETAIL (
    STU_ID INTEGER PRIMARY KEY,
    NAME TEXT NOT NULL,
    BRANCH TEXT NOT NULL
)
""")

# Step 3: Insert initial data
student_data = [
    (101, "Aman", "CS"),
    (102, "Vimal", "EE"),
    (103, "Rohit", "ECE")
]
cursor.executemany("INSERT OR IGNORE INTO STUD_DETAIL (STU_ID, NAME, BRANCH) VALUES (?, ?, ?)", student_data)

# Step 4: Update the branch for student ID 103
cursor.execute("UPDATE STUD_DETAIL SET BRANCH = ? WHERE STU_ID = ?", ("ME", 103))

# Step 5: Retrieve and print the updated row
cursor.execute("SELECT * FROM STUD_DETAIL WHERE STU_ID = ?", (103,))
updated_student = cursor.fetchone()
print("Updated Student Record:")
print(updated_student)

# Step 6: Commit changes and close connection
conn.commit()
conn.close()
