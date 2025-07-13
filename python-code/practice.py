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

#Check if a key exists in a dictionary
data = {'a': 1, 'b': 2}
key = 'b'

if key in data:
    print("Key exists")
else:
    print("Key does not exist")


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


# import re

# def count_vowel_consonants(text):
#     text=text.lower()

#     vowels=len(re.findall(r'[aeiou]',text))
#     con = len(re.findall(r'[bcdfghjklmnpqrsvwxyz]',text))

#     print(f"Vowels: {vowels}")
#     print(f"consonants: {con}")

# input_text = input()
# count_vowel_consonants(input_text)

# # alternate 

# def count_vow_and_con(word):

#     word =word.lower()
#     vowel_list ='aeiou'
#     consonats_list ='bcdfghjklmnpqrsvwxyz'
#     vowel=0
#     consonant= 0
#     for ch in word:
#         if ch in vowel_list:
#             vowel+=1
#         elif ch in consonats_list:
#             consonant+=1
#     print(f'vowel:{vowel}') 
#     print(f'consonts:{consonant}')   

# text_input = input()
# count_vow_and_con(text_input)


# # # it identify it is vowels or consonts;

# def check_vowels_or_consonants(text):
#     text = text.lower()
#     vowels = 'aeiou'
#     consonants = 'bcdfghjklmnpqrstvwxyz'

#     for ch in text:
#         if ch in vowels:
#             print(f"'{ch}' is a vowel")
#         elif ch in consonants:
#             print(f"'{ch}' is a consonant")
#         else:
#             print(f"'{ch}' is not a letter")

# # Example usage
# input_text = input("Enter a string: ")
# check_vowels_or_consonants(input_text)


# #  check if a character is a vowel or consonant

# def cheak_vowels_or_con(text):
#     text = text.lower()
#     vowel_is = 'aeiou'
    
#     if text.isalpha():
#         if text in vowel_is:
#             print(f"'{text}' is vowels")
#         else:
#             print(f"'{text}' it is consonants")
#     else:
#         print(" it is not charchter")        

# next_input = input("Enter a single charchter.")
# if len(next_input)==1:
#     cheak_vowels_or_con(next_input) 
# else:
#     print(" plese enter one charchter")

    
