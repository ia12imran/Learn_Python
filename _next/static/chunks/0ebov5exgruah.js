(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,90317,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={bindSnapshot:function(){return f},createAsyncLocalStorage:function(){return o},createSnapshot:function(){return c}};for(var n in s)Object.defineProperty(r,n,{enumerable:!0,get:s[n]});let a=Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"),"__NEXT_ERROR_CODE",{value:"E504",enumerable:!1,configurable:!0});class i{disable(){throw a}getStore(){}run(){throw a}exit(){throw a}enterWith(){throw a}static bind(e){return e}}let l="u">typeof globalThis&&globalThis.AsyncLocalStorage;function o(){return l?new l:new i}function f(e){return l?l.bind(e):i.bind(e)}function c(){return l?l.snapshot():function(e,...t){return e(...t)}}},42344,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"workAsyncStorageInstance",{enumerable:!0,get:function(){return s}});let s=(0,e.r(90317).createAsyncLocalStorage)()},63599,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"workAsyncStorage",{enumerable:!0,get:function(){return s.workAsyncStorageInstance}});let s=e.r(42344)},9885,(e,t,r)=>{"use strict";function s(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"encodeURIPath",{enumerable:!0,get:function(){return s}})},67585,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let s=e.r(32061);function n({reason:e,children:t}){if("u"<typeof window)throw Object.defineProperty(new s.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},52157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return o}});let s=e.r(43476),n=e.r(74080),a=e.r(63599),i=e.r(9885),l=e.r(43369);function o({moduleIds:e}){if("u">typeof window)return null;let t=a.workAsyncStorage.getStore();if(void 0===t)return null;let r=[];if(t.reactLoadableManifest&&e){let s=t.reactLoadableManifest;for(let t of e){if(!s[t])continue;let e=s[t].files;r.push(...e)}}if(0===r.length)return null;let f=(0,l.getAssetTokenQuery)();return(0,s.jsx)(s.Fragment,{children:r.map(e=>{let r=`${t.assetPrefix}/_next/${(0,i.encodeURIPath)(e)}${f}`;return e.endsWith(".css")?(0,s.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,n.preload)(r,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},69093,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return f}});let s=e.r(43476),n=e.r(71645),a=e.r(67585),i=e.r(52157);function l(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},f=function(e){let t={...o,...e},r=(0,n.lazy)(()=>t.loader().then(l)),f=t.loading;function c(e){let l=f?(0,s.jsx)(f,{isLoading:!0,pastDelay:!0,error:null}):null,o=!t.ssr||!!t.loading,c=o?n.Suspense:n.Fragment,d=t.ssr?(0,s.jsxs)(s.Fragment,{children:["u"<typeof window?(0,s.jsx)(i.PreloadChunks,{moduleIds:t.modules}):null,(0,s.jsx)(r,{...e})]}):(0,s.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(r,{...e})});return(0,s.jsx)(c,{...o?{fallback:l}:{},children:d})}return c.displayName="LoadableComponent",c}},70703,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}});let s=e.r(55682)._(e.r(69093));function n(e,t){let r={};"function"==typeof e&&(r.loader=e);let n={...r,...t};return(0,s.default)({...n,modules:n.loadableGenerated?.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},52109,e=>{"use strict";var t=e.i(43476),r=e.i(70703),s=e.i(71645),n=e.i(81336),a=e.i(9219),i=e.i(30063);let l=(0,r.default)(()=>e.A(29845),{loadableGenerated:{modules:[56980]},ssr:!1}),o=["All",...Array.from(new Set(a.practiceExercises.map(e=>e.topic)))],f=["All","Easy","Medium","Hard"];e.s(["default",0,function(){let[e,r]=(0,s.useState)(0),[c,d]=(0,s.useState)("All"),[u,p]=(0,s.useState)("All"),[m,_]=(0,s.useState)(""),[h,b]=(0,s.useState)(!1),g=a.practiceExercises.filter(e=>{let t="All"===c||e.topic===c,r="All"===u||e.level===u,s=e.title.toLowerCase().includes(m.toLowerCase())||e.description.toLowerCase().includes(m.toLowerCase());return t&&r&&s}),y=g[Math.min(e,g.length-1)];return(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-6",children:[(0,t.jsx)("div",{className:"w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center",children:(0,t.jsx)(n.Code2,{size:20,className:"text-green-600"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-gray-900",children:"Practice Code"}),(0,t.jsxs)("p",{className:"text-sm text-gray-500",children:[a.practiceExercises.length," coding challenges to strengthen your Python skills."]})]})]}),(0,t.jsx)("div",{className:"bg-white border border-gray-200 rounded-2xl p-4 mb-6",children:(0,t.jsxs)("div",{className:"grid sm:grid-cols-3 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-xs font-medium text-gray-500 mb-1.5",children:"Topic"}),(0,t.jsx)("select",{value:c,onChange:e=>{d(e.target.value),r(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500",children:o.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-xs font-medium text-gray-500 mb-1.5",children:"Difficulty"}),(0,t.jsx)("select",{value:u,onChange:e=>{p(e.target.value),r(0)},className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500",children:f.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-xs font-medium text-gray-500 mb-1.5",children:"Search"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(n.Search,{size:16,className:"absolute left-3 top-2.5 text-gray-400"}),(0,t.jsx)("input",{type:"text",value:m,onChange:e=>{_(e.target.value),r(0)},placeholder:"Search exercises...",className:"w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]})]})}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row gap-6",children:[(0,t.jsx)("div",{className:"lg:w-80 shrink-0",children:(0,t.jsxs)("div",{className:"bg-white border border-gray-200 rounded-2xl overflow-hidden",children:[(0,t.jsx)("div",{className:"px-4 py-3 border-b border-gray-100 flex items-center justify-between",children:(0,t.jsxs)("h3",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider",children:["Exercises (",g.length,")"]})}),(0,t.jsxs)("div",{className:"overflow-y-auto",style:{maxHeight:"calc(100vh - 22rem)"},children:[0===g.length&&(0,t.jsx)("div",{className:"p-6 text-center text-sm text-gray-400",children:"No exercises match your filters."}),(0,t.jsx)("div",{className:"space-y-0.5 p-2",children:g.map((s,n)=>(0,t.jsxs)("button",{type:"button",onClick:()=>{r(n),b(!1)},className:`w-full text-left px-3 py-2.5 rounded-lg text-sm transition cursor-pointer ${e===n?"bg-green-50 text-green-700 font-medium":"text-gray-600 hover:bg-gray-50"}`,children:[(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 text-xs font-medium shrink-0",children:n+1}),(0,t.jsx)("span",{className:"truncate",children:s.title})]}),(0,t.jsxs)("span",{className:"flex items-center gap-2 mt-1 ml-7",children:[(0,t.jsx)("span",{className:`text-[10px] px-1.5 py-0.5 rounded-full ${"Easy"===s.level?"bg-green-100 text-green-700":"Medium"===s.level?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:s.level}),(0,t.jsx)("span",{className:"text-[10px] text-gray-400",children:s.topic})]})]},n))})]})]})}),(0,t.jsx)("div",{className:"flex-1 min-w-0",children:y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"bg-white border border-gray-200 rounded-2xl p-6 mb-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,t.jsx)("h2",{className:"text-xl font-semibold text-gray-900",children:y.title}),(0,t.jsx)("span",{className:`px-2.5 py-1 rounded-full text-xs font-medium ${"Easy"===y.level?"bg-green-100 text-green-700":"Medium"===y.level?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:y.level})]}),(0,t.jsx)("p",{className:"text-gray-500 mb-4",children:y.description}),(0,t.jsx)("div",{className:"flex items-center gap-2 text-xs text-gray-400",children:(0,t.jsx)("span",{className:"px-2 py-0.5 bg-gray-100 rounded-full",children:y.topic})})]}),(0,t.jsx)(i.default,{fallback:(0,t.jsx)("div",{className:"rounded-xl border border-gray-700 bg-[#282c34] flex items-center justify-center text-gray-400 text-sm",style:{height:450},children:"Loading code editor..."}),children:(0,t.jsx)(l,{initialCode:y.starter,height:"450px"},y.title)}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("button",{type:"button",onClick:()=>b(!h),className:"inline-flex items-center gap-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 text-sm font-medium rounded-lg transition cursor-pointer",children:[(0,t.jsx)(n.Lightbulb,{size:16}),h?"Hide Solution":"Show Solution",(0,t.jsx)(n.ChevronDown,{size:14,className:`transition-transform ${h?"rotate-180":""}`})]}),h&&(0,t.jsx)("pre",{className:"mt-3 bg-slate-50 border border-amber-200 rounded-xl p-4 text-sm font-mono overflow-x-auto",children:y.solution})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between mt-6 pt-5 border-t border-gray-200",children:[(0,t.jsxs)("button",{type:"button",disabled:0===e,onClick:()=>{r(e=>Math.max(0,e-1)),b(!1)},className:"flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 disabled:opacity-30 disabled:hover:text-gray-600 transition cursor-pointer disabled:cursor-default",children:[(0,t.jsx)(n.ChevronLeft,{size:16})," Previous"]}),(0,t.jsxs)("span",{className:"text-xs text-gray-400",children:["Exercise ",e+1," of ",g.length]}),(0,t.jsxs)("button",{type:"button",disabled:e>=g.length-1,onClick:()=>{r(e=>Math.min(g.length-1,e+1)),b(!1)},className:"flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 disabled:opacity-30 disabled:hover:text-gray-600 transition cursor-pointer disabled:cursor-default",children:["Next ",(0,t.jsx)(n.ChevronRight,{size:16})]})]})]})})]})]})}])},30063,e=>{"use strict";var t=e.i(43476),r=e.i(71645);e.s(["default",0,function({fallback:e,children:s}){let[n,a]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{a(!0)},[]),n)?(0,t.jsx)(t.Fragment,{children:s}):(0,t.jsx)(t.Fragment,{children:e})}])},9219,e=>{"use strict";let t=[{title:"Hello World",description:"Write a program that prints 'Hello, World!' to the screen.",topic:"Introduction",level:"Easy",starter:`# Write your code here
print("Hello, World!")`,solution:'print("Hello, World!")'},{title:"Personal Introduction",description:"Create variables for your name, age, and favorite hobby. Print a sentence using f-strings.",topic:"Introduction",level:"Easy",starter:`# Create variables
name = "Your Name"
age = 20
hobby = "coding"

# Print a sentence using f-strings
print(f"...")`,solution:`name = "Your Name"
age = 20
hobby = "coding"
print(f"Hi, I'm {name}. I'm {age} years old and I love {hobby}!")`},{title:"Basic Calculator",description:"Write a program that adds, subtracts, multiplies, and divides two numbers.",topic:"Introduction",level:"Easy",starter:`# Basic calculator
a = 10
b = 4

print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")`,solution:`a = 10
b = 4
print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")`},{title:"Variables & Types",description:"Create variables of each type (int, float, string, bool) and print them with their types.",topic:"Syntax & Variables",level:"Easy",starter:`# Create variables of each type
my_int = 42
my_float = 3.14
my_string = "Hello"
my_bool = True

# Print each with its type
print(f"{my_int} -> {type(my_int)}")
print(f"{my_float} -> {type(my_float)}")
print(f"{my_string} -> {type(my_string)}")
print(f"{my_bool} -> {type(my_bool)}")`,solution:`my_int = 42
my_float = 3.14
my_string = "Hello"
my_bool = True
print(f"{my_int} -> {type(my_int)}")
print(f"{my_float} -> {type(my_float)}")
print(f"{my_string} -> {type(my_string)}")
print(f"{my_bool} -> {type(my_bool)}")`},{title:"Swap Two Variables",description:"Swap the values of two variables without using a third variable (Python trick!).",topic:"Syntax & Variables",level:"Medium",starter:`# Swap the values
a = "Python"
b = "Programming"

print(f"Before: a={a}, b={b}")

# TODO: Swap the values here



print(f"After: a={a}, b={b}")`,solution:`a, b = "Python", "Programming"
print(f"Before: a={a}, b={b}")
a, b = b, a
print(f"After: a={a}, b={b}")`},{title:"Type Conversion Challenge",description:"Convert strings to numbers, calculate, and convert back.",topic:"Syntax & Variables",level:"Medium",starter:`# Convert strings to numbers and calculate
num1 = "25"
num2 = "17.5"

# TODO: Convert and add them
# TODO: Print the result with a precision of 2 decimals

# TODO: Convert result back to string and print its type`,solution:`num1 = "25"
num2 = "17.5"
result = int(num1) + float(num2)
print(f"Sum: {result:.2f}")
result_str = str(result)
print(f"Converted back to string: {result_str} ({type(result_str).__name__})")`},{title:"String Reverser",description:"Reverse a string, count vowels, and check if it's a palindrome.",topic:"Strings",level:"Medium",starter:`def reverse_string(s):
    return s[::-1]

def count_vowels(s):
    return sum(1 for c in s.lower() if c in "aeiou")

def is_palindrome(s):
    clean = s.lower().replace(" ", "")
    return clean == clean[::-1]

# Test
text = "racecar"
print(f"Original: {text}")
print(f"Reversed: {reverse_string(text)}")
print(f"Vowels: {count_vowels(text)}")
print(f"Palindrome: {is_palindrome(text)}")`,solution:`def reverse_string(s): return s[::-1]
def count_vowels(s): return sum(1 for c in s.lower() if c in "aeiou")
def is_palindrome(s):
    clean = s.lower().replace(" ", "")
    return clean == clean[::-1]
text = "racecar"
print(f"Original: {text}")
print(f"Reversed: {reverse_string(text)}")
print(f"Vowels: {count_vowels(text)}")
print(f"Palindrome: {is_palindrome(text)}")`},{title:"String Cleaner",description:"Clean up a messy string: strip extra spaces, fix case, and remove digits.",topic:"Strings",level:"Medium",starter:`# Clean up messy strings
messy = "  Hello123World456  "
print(f"Original: '{messy}'")

# TODO: Remove all digits
# TODO: Strip whitespace
# TODO: Convert to proper case (each word capitalized)
# TODO: Print each cleaned result`,solution:`messy = "  Hello123World456  "
import re
cleaned_digits = re.sub(r'\\d+', '', messy)
cleaned = cleaned_digits.strip().title()
print(f"Cleaned: '{cleaned}'")`},{title:"Vowel Counter",description:"Count vowels, consonants, and spaces in a sentence.",topic:"Strings",level:"Medium",starter:`sentence = "The quick brown fox jumps over the lazy dog"

# TODO: Count vowels (a, e, i, o, u)
# TODO: Count consonants
# TODO: Count spaces
# TODO: Print the counts`,solution:`sentence = "The quick brown fox jumps over the lazy dog"
vowels = sum(1 for c in sentence.lower() if c in "aeiou")
consonants = sum(1 for c in sentence.lower() if c.isalpha() and c not in "aeiou")
spaces = sentence.count(" ")
print(f"Vowels: {vowels}")
print(f"Consonants: {consonants}")
print(f"Spaces: {spaces}")
print(f"Total chars: {len(sentence)}")`},{title:"Time Converter",description:"Convert total seconds into hours, minutes, and seconds.",topic:"Operators",level:"Easy",starter:`total_seconds = 3661

# Calculate hours, minutes, seconds
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60

print(f"{total_seconds} seconds = {hours}h {minutes}m {seconds}s")`,solution:`total_seconds = 3661
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60
print(f"{total_seconds} seconds = {hours}h {minutes}m {seconds}s")`},{title:"FizzBuzz",description:"Print numbers 1-100, but multiples of 3 say 'Fizz', multiples of 5 say 'Buzz', multiples of both say 'FizzBuzz'.",topic:"Operators",level:"Medium",starter:`for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz", end=" ")
    elif i % 3 == 0:
        print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
print()`,solution:`for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz", end=" ")
    elif i % 3 == 0:
        print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
print()`},{title:"Prime Number Checker",description:"Write a function that determines whether a number is prime.",topic:"Operators",level:"Hard",starter:`def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Test
for num in [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]:
    print(f"{num} is prime: {is_prime(num)}")`,solution:`def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True
for num in [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]:
    print(f"{num} is prime: {is_prime(num)}")`},{title:"Grade Calculator",description:"Convert a numeric score into a letter grade (A-F) with a comment.",topic:"Control Flow",level:"Easy",starter:`score = 85

# TODO: Assign grade based on score
# A: 90+, B: 80+, C: 70+, D: 60+, F: below 60
# Also add a comment for each grade

print(f"Score: {score}")
print(f"Grade: {grade}")
print(f"Comment: {comment}")`,solution:`score = 85
if score >= 90:
    grade, comment = "A", "Excellent!"
elif score >= 80:
    grade, comment = "B", "Good job!"
elif score >= 70:
    grade, comment = "C", "Not bad!"
elif score >= 60:
    grade, comment = "D", "Needs work"
else:
    grade, comment = "F", "Keep trying"
print(f"Score: {score}")
print(f"Grade: {grade}")
print(f"Comment: {comment}")`},{title:"Number Guessing Game",description:"Implement a number guessing game with feedback.",topic:"Control Flow",level:"Medium",starter:`import random

secret = random.randint(1, 20)
attempts = 0
guess = None

print("Guess the number (1-20)!")

while guess != secret:
    # Simulate user guesses (in a real game use input())
    guesses = [5, 10, 15, 20]
    guess = guesses[attempts] if attempts < len(guesses) else secret
    attempts += 1

    if guess < secret:
        print(f"Guess {attempts}: {guess} - Too low!")
    elif guess > secret:
        print(f"Guess {attempts}: {guess} - Too high!")
    else:
        print(f"Guess {attempts}: {guess} - Correct!")

print(f"Found in {attempts} attempts!")`,solution:`import random
secret = random.randint(1, 20)
attempts = 0
guess = None
print("Guess the number (1-20)!")
while guess != secret:
    guesses = [5, 10, 15, 20]
    guess = guesses[attempts] if attempts < len(guesses) else secret
    attempts += 1
    if guess < secret:
        print(f"Guess {attempts}: {guess} - Too low!")
    elif guess > secret:
        print(f"Guess {attempts}: {guess} - Too high!")
    else:
        print(f"Guess {attempts}: {guess} - Correct!")
print(f"Found in {attempts} attempts!")`},{title:"Multiplication Table",description:"Print a multiplication table using nested loops.",topic:"Control Flow",level:"Easy",starter:`# Multiplication table
size = 12

# TODO: Print a 12x12 multiplication table
# Use nested for loops
# Format numbers so they align nicely`,solution:`size = 12
for i in range(1, size + 1):
    row = [f"{i * j:>4}" for j in range(1, size + 1)]
    print("".join(row))`},{title:"Fibonacci Sequence",description:"Print the first N numbers of the Fibonacci sequence.",topic:"Control Flow",level:"Medium",starter:`# Fibonacci sequence
n = 10

# TODO: Print the first 10 Fibonacci numbers
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
# Each number is the sum of the two previous`,solution:`n = 10
a, b = 0, 1
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b
print()`},{title:"Second Largest Number",description:"Find the second largest number in a list without using sort().",topic:"Lists",level:"Medium",starter:`def second_largest(numbers):
    if len(numbers) < 2:
        return None
    first = second = float('-inf')
    for n in numbers:
        if n > first:
            second = first
            first = n
        elif n > second and n != first:
            second = n
    return second if second != float('-inf') else None

# Test
nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"List: {nums}")
print(f"Second largest: {second_largest(nums)}")`,solution:`def second_largest(numbers):
    if len(numbers) < 2: return None
    first = second = float('-inf')
    for n in numbers:
        if n > first:
            second = first
            first = n
        elif n > second and n != first:
            second = n
    return second if second != float('-inf') else None
nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"List: {nums}")
print(f"Second largest: {second_largest(nums)}")`},{title:"List Sorting & Filtering",description:"Filter, transform, and analyze lists without built-in sort.",topic:"Lists",level:"Medium",starter:`numbers = [45, 12, 78, 34, 67, 90, 23]

# TODO: Even numbers
# TODO: Numbers doubled
# TODO: Average of numbers
# TODO: Sorted in ascending (without .sort)
# TODO: Sorted in descending`,solution:`numbers = [45, 12, 78, 34, 67, 90, 23]
evens = [n for n in numbers if n % 2 == 0]
doubled = [n * 2 for n in numbers]
average = sum(numbers) / len(numbers)
ascending = sorted(numbers)
descending = sorted(numbers, reverse=True)
print(f"Evens: {evens}")
print(f"Doubled: {doubled}")
print(f"Average: {average:.1f}")
print(f"Ascending: {ascending}")
print(f"Descending: {descending}")`},{title:"Matrix Transpose",description:"Transpose a matrix (swap rows and columns).",topic:"Lists",level:"Hard",starter:`matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

# TODO: Transpose the matrix
# Expected result:
# [[1, 4, 7], [2, 5, 8], [3, 6, 9]]`,solution:`matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print(f"Original: {matrix}")
print(f"Transposed: {transposed}")`},{title:"Word Frequency Counter",description:"Count word frequencies in a paragraph and find the most common word.",topic:"Dictionaries",level:"Medium",starter:`def word_frequency(text):
    words = text.lower().split()
    freq = {}
    for word in words:
        word = word.strip(".,!?;:")
        freq[word] = freq.get(word, 0) + 1
    return dict(sorted(freq.items(), key=lambda x: x[1], reverse=True))

text = "the quick brown fox jumps over the lazy dog the fox the dog"
freq = word_frequency(text)

print("Word frequencies:")
for word, count in freq.items():
    bar = "#" * count
    print(f"  {word:>10}: {bar} ({count})")
print(f"\\nMost common: {list(freq.keys())[0]}")`,solution:`def word_frequency(text):
    words = text.lower().split()
    freq = {}
    for word in words:
        word = word.strip(".,!?;:")
        freq[word] = freq.get(word, 0) + 1
    return dict(sorted(freq.items(), key=lambda x: x[1], reverse=True))

text = "the quick brown fox jumps over the lazy dog the fox the dog"
freq = word_frequency(text)
print("Word frequencies:")
for word, count in freq.items():
    bar = "#" * count
    print(f"  {word:>10}: {bar} ({count})")
print(f"\\nMost common: {list(freq.keys())[0]}")`},{title:"Phone Book Manager",description:"Build a small phone book using a dictionary with add, lookup, and list functions.",topic:"Dictionaries",level:"Medium",starter:`contacts = {}

# TODO: Implement functions:
# - add_contact(name, phone)
# - get_phone(name)
# - list_contacts()  (sorted by name)
# - delete_contact(name)

# Test
add_contact("Alice", "555-1234")
add_contact("Bob", "555-5678")
add_contact("Charlie", "555-9012")

print(get_phone("Bob"))
list_contacts()
delete_contact("Charlie")
list_contacts()`,solution:`contacts = {}
def add_contact(name, phone): contacts[name] = phone
def get_phone(name): return contacts.get(name, "Not found")
def list_contacts():
    for name in sorted(contacts):
        print(f"  {name}: {contacts[name]}")
def delete_contact(name): contacts.pop(name, None)
add_contact("Alice", "555-1234")
add_contact("Bob", "555-5678")
add_contact("Charlie", "555-9012")
print(get_phone("Bob"))
list_contacts()
delete_contact("Charlie")
list_contacts()`},{title:"Nested Data Explorer",description:"Work with nested dictionaries (student records).",topic:"Dictionaries",level:"Hard",starter:`students = {
    "Alice": {"grades": [85, 90, 92], "major": "CS"},
    "Bob": {"grades": [70, 65, 72], "major": "Math"},
    "Charlie": {"grades": [95, 88, 93], "major": "CS"},
}

# TODO: Calculate each student's average grade
# TODO: Find the student with the highest average
# TODO: List all CS majors
# TODO: Print a report for each student`,solution:`students = {
    "Alice": {"grades": [85, 90, 92], "major": "CS"},
    "Bob": {"grades": [70, 65, 72], "major": "Math"},
    "Charlie": {"grades": [95, 88, 93], "major": "CS"},
}
for name, data in students.items():
    avg = sum(data["grades"]) / len(data["grades"])
    print(f"{name} ({data['major']}): {avg:.1f} average")
best = max(students, key=lambda n: sum(students[n]["grades"]) / len(students[n]["grades"]))
print(f"Best student: {best}")
cs_majors = [n for n, d in students.items() if d["major"] == "CS"]
print(f"CS majors: {cs_majors}")`},{title:"Temperature Converter",description:"Build functions to convert between Celsius and Fahrenheit.",topic:"Functions",level:"Easy",starter:`def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

# Test
temps_c = [0, 20, 37, 100]
for t in temps_c:
    print(f"{t}\xb0C = {celsius_to_fahrenheit(t):.1f}\xb0F")

print()
temps_f = [32, 68, 100, 212]
for t in temps_f:
    print(f"{t}\xb0F = {fahrenheit_to_celsius(t):.1f}\xb0C")`,solution:`def celsius_to_fahrenheit(c): return (c * 9/5) + 32
def fahrenheit_to_celsius(f): return (f - 32) * 5/9
temps_c = [0, 20, 37, 100]
for t in temps_c:
    print(f"{t}\xb0C = {celsius_to_fahrenheit(t):.1f}\xb0F")
print()
temps_f = [32, 68, 100, 212]
for t in temps_f:
    print(f"{t}\xb0F = {fahrenheit_to_celsius(t):.1f}\xb0C")`},{title:"Simple Calculator",description:"Build a calculator function that handles +, -, *, / with error handling.",topic:"Functions",level:"Medium",starter:`def calculator(a, op, b):
    try:
        if op == "+": return a + b
        elif op == "-": return a - b
        elif op == "*": return a * b
        elif op == "/":
            if b == 0:
                return "Error: Division by zero"
            return a / b
        else:
            return f"Error: Unknown operator '{op}'"
    except TypeError:
        return "Error: Invalid input types"

# Test
operations = [(10, "+", 5), (10, "-", 3), (4, "*", 7), (15, "/", 3), (10, "/", 0)]
for a, op, b in operations:
    print(f"  {a} {op} {b} = {calculator(a, op, b)}")`,solution:`def calculator(a, op, b):
    try:
        if op == "+": return a + b
        elif op == "-": return a - b
        elif op == "*": return a * b
        elif op == "/":
            if b == 0: return "Error: Division by zero"
            return a / b
        else: return f"Error: Unknown operator '{op}'"
    except TypeError:
        return "Error: Invalid input types"
operations = [(10, "+", 5), (10, "-", 3), (4, "*", 7), (15, "/", 3), (10, "/", 0)]
for a, op, b in operations:
    print(f"  {a} {op} {b} = {calculator(a, op, b)}")`},{title:"Callback & Higher-Order Functions",description:"Write functions that accept other functions as arguments.",topic:"Functions",level:"Hard",starter:`def apply_twice(func, x):
    return func(func(x))

def multiply:
    pass

# TODO: Define a function double(n) that returns n * 2
# TODO: Define a function square(n) that returns n ** 2
# TODO: Use apply_twice with these functions
# TODO: Print the results`,solution:`def apply_twice(func, x):
    return func(func(x))
def double(n): return n * 2
def square(n): return n ** 2
print(f"double(5) twice: {apply_twice(double, 5)}")
print(f"square(3) twice: {apply_twice(square, 3)}")`},{title:"Bank Account Class",description:"Create a BankAccount class with deposit, withdraw, and statement methods.",topic:"OOP: Classes & Objects",level:"Medium",starter:`class BankAccount:
    bank_name = "PyBank"

    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return f"Deposited {amount}"
        return "Invalid amount"

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            return f"Withdrew {amount}"
        return "Insufficient funds!"

    def get_balance(self):
        return f"{self.owner}'s balance: \\\${self.balance}"

# Test
acc = BankAccount("Alice", 1000)
print(acc.get_balance())
print(acc.deposit(500))
print(acc.withdraw(200))
print(acc.get_balance())
print(acc.withdraw(5000))`,solution:`class BankAccount:
    bank_name = "PyBank"
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return f"Deposited {amount}"
        return "Invalid amount"
    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            return f"Withdrew {amount}"
        return "Insufficient funds!"
    def get_balance(self):
        return f"{self.owner}'s balance: \\\${self.balance}"
acc = BankAccount("Alice", 1000)
print(acc.get_balance())
print(acc.deposit(500))
print(acc.withdraw(200))
print(acc.get_balance())
print(acc.withdraw(5000))`},{title:"Shape Hierarchy",description:"Create a Shape base class with Circle and Rectangle subclasses.",topic:"OOP: Classes & Objects",level:"Medium",starter:`import math

class Shape:
    def __init__(self, color="red"):
        self.color = color

    def area(self):
        return 0

    def describe(self):
        return f"{self.color} {self.__class__.__name__}, area={self.area():.2f}"

class Circle(Shape):
    def __init__(self, radius, color="blue"):
        super().__init__(color)
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height, color="green"):
        super().__init__(color)
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

# Test
shapes = [Circle(5), Rectangle(4, 6), Circle(3, "red")]
for s in shapes:
    print(s.describe())`,solution:`import math
class Shape:
    def __init__(self, color="red"): self.color = color
    def area(self): return 0
    def describe(self): return f"{self.color} {self.__class__.__name__}, area={self.area():.2f}"
class Circle(Shape):
    def __init__(self, radius, color="blue"):
        super().__init__(color); self.radius = radius
    def area(self): return math.pi * self.radius ** 2
class Rectangle(Shape):
    def __init__(self, width, height, color="green"):
        super().__init__(color); self.width = width; self.height = height
    def area(self): return self.width * self.height
shapes = [Circle(5), Rectangle(4, 6), Circle(3, "red")]
for s in shapes:
    print(s.describe())`},{title:"Instance Tracker with self",description:"Use self to track instance state and method chaining. Each instance should track how many times methods are called.",topic:"OOP: self & cls",level:"Medium",starter:`class Counter:
    def __init__(self, name):
        self.name = name
        self.count = 0
        self.history = []

    def increment(self):
        self.count += 1
        self.history.append(self.count)
        return self  # Enable method chaining

    def get_status(self):
        return f"{self.name}: count={self.count}, history={self.history}"

# Test (method chaining should work)
c = Counter("MyCounter")
c.increment().increment().increment()
print(c.get_status())
c.increment().increment()
print(c.get_status())`,solution:`class Counter:
    def __init__(self, name):
        self.name = name
        self.count = 0
        self.history = []

    def increment(self):
        self.count += 1
        self.history.append(self.count)
        return self

    def get_status(self):
        return f"{self.name}: count={self.count}, history={self.history}"

c = Counter("MyCounter")
c.increment().increment().increment()
print(c.get_status())
c.increment().increment()
print(c.get_status())`},{title:"Class Factory with cls",description:"Use @classmethod with cls to create factory methods that build objects in different ways.",topic:"OOP: self & cls",level:"Hard",starter:`class Employee:
    def __init__(self, name, salary, department):
        self.name = name
        self.salary = salary
        self.department = department

    def __repr__(self):
        return f"Employee('{self.name}', {self.salary}, '{self.department}')"

    @classmethod
    def from_string(cls, emp_str):
        # Parse "Name-Salary-Department"
        name, salary, dept = emp_str.split("-")
        return cls(name, int(salary), dept)

    @classmethod
    def create_manager(cls, name, salary):
        return cls(name, salary, "Management")

# Test
e1 = Employee.from_string("Alice-80000-Engineering")
e2 = Employee.create_manager("Bob", 95000)
e3 = Employee("Charlie", 70000, "Marketing")

print(e1)
print(e2)
print(e3)`,solution:`class Employee:
    def __init__(self, name, salary, department):
        self.name = name
        self.salary = salary
        self.department = department

    def __repr__(self):
        return f"Employee('{self.name}', {self.salary}, '{self.department}')"

    @classmethod
    def from_string(cls, emp_str):
        name, salary, dept = emp_str.split("-")
        return cls(name, int(salary), dept)

    @classmethod
    def create_manager(cls, name, salary):
        return cls(name, salary, "Management")

e1 = Employee.from_string("Alice-80000-Engineering")
e2 = Employee.create_manager("Bob", 95000)
e3 = Employee("Charlie", 70000, "Marketing")
print(e1)
print(e2)
print(e3)`},{title:"Singleton Pattern with __new__",description:"Implement the Singleton pattern using __new__ so only one instance of the class can exist.",topic:"OOP: __init__ & __new__",level:"Hard",starter:`class Database:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            print("Creating new Database instance")
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self, name="default"):
        self.name = name

# Test - should only create ONE instance
db1 = Database("Production")
db2 = Database("Staging")  # Should NOT create new instance

print(f"db1 is db2: {db1 is db2}")
print(f"db1.name: {db1.name}")
print(f"db2.name: {db2.name}")`,solution:`class Database:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            print("Creating new Database instance")
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self, name="default"):
        self.name = name

db1 = Database("Production")
db2 = Database("Staging")
print(f"db1 is db2: {db1 is db2}")
print(f"db1.name: {db1.name}")
print(f"db2.name: {db2.name}")`},{title:"Resource Manager with __del__",description:"Create a class that simulates opening and closing resources, with __del__ for cleanup.",topic:"OOP: __init__ & __new__",level:"Medium",starter:`class FileHandler:
    _open_files = []

    def __init__(self, filename):
        self.filename = filename
        self.is_open = True
        FileHandler._open_files.append(filename)
        print(f"Opened: {filename}")

    def __del__(self):
        if self.is_open:
            FileHandler._open_files.remove(self.filename)
            print(f"Auto-closed: {self.filename}")

    def close(self):
        if self.is_open:
            FileHandler._open_files.remove(self.filename)
            self.is_open = False
            print(f"Closed: {self.filename}")

    def __repr__(self):
        return f"FileHandler('{self.filename}', open={self.is_open})"

# Test
f1 = FileHandler("data.txt")
f2 = FileHandler("log.txt")
print(f"Open files: {FileHandler._open_files}")
f1.close()
print(f"After close: {FileHandler._open_files}")`,solution:`class FileHandler:
    _open_files = []

    def __init__(self, filename):
        self.filename = filename
        self.is_open = True
        FileHandler._open_files.append(filename)
        print(f"Opened: {filename}")

    def __del__(self):
        if self.is_open:
            FileHandler._open_files.remove(self.filename)
            print(f"Auto-closed: {self.filename}")

    def close(self):
        if self.is_open:
            FileHandler._open_files.remove(self.filename)
            self.is_open = False
            print(f"Closed: {self.filename}")

    def __repr__(self):
        return f"FileHandler('{self.filename}', open={self.is_open})"

f1 = FileHandler("data.txt")
f2 = FileHandler("log.txt")
print(f"Open files: {FileHandler._open_files}")
f1.close()
print(f"After close: {FileHandler._open_files}")`},{title:"Animal Sound System",description:"Implement polymorphism where different animals make different sounds through the same interface.",topic:"OOP: Polymorphism",level:"Medium",starter:`class Animal:
    def speak(self):
        return "..."

    def __repr__(self):
        return self.__class__.__name__

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Duck(Animal):
    def speak(self):
        return "Quack!"

class Snake(Animal):
    def speak(self):
        return "Hiss!"

# Test - same interface, different behavior
animals = [Dog(), Cat(), Duck(), Snake()]
for animal in animals:
    print(f"{animal}: {animal.speak()}")

# Bonus: polymorphism with isinstance
def describe_animal(animal):
    if isinstance(animal, Dog):
        print(f"{animal} is a loyal friend")
    elif isinstance(animal, Cat):
        print(f"{animal} is independent")
    else:
        print(f"{animal} is a wild animal")

describe_animal(Dog())
describe_animal(Cat())`,solution:`class Animal:
    def speak(self): return "..."
    def __repr__(self): return self.__class__.__name__

class Dog(Animal):
    def speak(self): return "Woof!"

class Cat(Animal):
    def speak(self): return "Meow!"

class Duck(Animal):
    def speak(self): return "Quack!"

class Snake(Animal):
    def speak(self): return "Hiss!"

animals = [Dog(), Cat(), Duck(), Snake()]
for animal in animals:
    print(f"{animal}: {animal.speak()}")

def describe_animal(animal):
    if isinstance(animal, Dog):
        print(f"{animal} is a loyal friend")
    elif isinstance(animal, Cat):
        print(f"{animal} is independent")
    else:
        print(f"{animal} is a wild animal")

describe_animal(Dog())
describe_animal(Cat())`},{title:"Math Operations with Operator Overloading",description:"Implement polymorphism through magic methods to make custom objects work with built-in operators.",topic:"OOP: Polymorphism",level:"Hard",starter:`class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __abs__(self):
        return (self.x**2 + self.y**2) ** 0.5

    def __len__(self):
        return int(abs(self))

# Test all operators
v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(f"v1 = {v1}")
print(f"v2 = {v2}")
print(f"v1 + v2 = {v1 + v2}")
print(f"v1 - v2 = {v1 - v2}")
print(f"v1 * 3 = {v1 * 3}")
print(f"v1 == v2: {v1 == v2}")
print(f"|v1| = {abs(v1)}")`,solution:`class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __abs__(self):
        return (self.x**2 + self.y**2) ** 0.5

v1 = Vector(3, 4)
v2 = Vector(1, 2)
print(f"v1 = {v1}")
print(f"v2 = {v2}")
print(f"v1 + v2 = {v1 + v2}")
print(f"v1 - v2 = {v1 - v2}")
print(f"v1 * 3 = {v1 * 3}")
print(f"v1 == v2: {v1 == v2}")
print(f"|v1| = {abs(v1)}")`},{title:"Bank Account with Encapsulation",description:"Protect bank account data using private attributes and properties for controlled access.",topic:"OOP: Encapsulation",level:"Hard",starter:`class BankAccount:
    def __init__(self, owner, balance=0):
        self.__owner = owner
        self.__balance = balance
        self.__transactions = []

    @property
    def balance(self):
        return self.__balance

    @property
    def owner(self):
        return self.__owner

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.__balance += amount
        self.__transactions.append(f"+{amount}")
        return self

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal must be positive")
        if amount > self.__balance:
            raise ValueError("Insufficient funds")
        self.__balance -= amount
        self.__transactions.append(f"-{amount}")
        return self

    @property
    def statement(self):
        return f"Account: {self.__owner}\\nBalance: \${self.__balance}\\nTransactions: {self.__transactions}"

# Test
acc = BankAccount("Alice", 1000)
acc.deposit(500).withdraw(200)
print(f"Balance: \${acc.balance}")
print(acc.statement)

# This should fail:
# acc.__balance = 999999  # AttributeError
# acc.withdraw(10000)     # ValueError`,solution:`class BankAccount:
    def __init__(self, owner, balance=0):
        self.__owner = owner
        self.__balance = balance
        self.__transactions = []

    @property
    def balance(self):
        return self.__balance

    @property
    def owner(self):
        return self.__owner

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.__balance += amount
        self.__transactions.append(f"+{amount}")
        return self

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal must be positive")
        if amount > self.__balance:
            raise ValueError("Insufficient funds")
        self.__balance -= amount
        self.__transactions.append(f"-{amount}")
        return self

    @property
    def statement(self):
        return f"Account: {self.__owner}\\nBalance: \${self.__balance}\\nTransactions: {self.__transactions}"

acc = BankAccount("Alice", 1000)
acc.deposit(500).withdraw(200)
print(f"Balance: \${acc.balance}")
print(acc.statement)`},{title:"Validated User Profile",description:"Use @property with validation to protect user data integrity.",topic:"OOP: Encapsulation",level:"Medium",starter:`class UserProfile:
    def __init__(self, username, email, age):
        self.username = username
        self.email = email
        self.age = age

    @property
    def username(self):
        return self.__username

    @username.setter
    def username(self, value):
        if len(value) < 3:
            raise ValueError("Username must be 3+ characters")
        self.__username = value

    @property
    def email(self):
        return self.__email

    @email.setter
    def email(self, value):
        if "@" not in value:
            raise ValueError("Invalid email format")
        self.__email = value

    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, value):
        if not isinstance(value, int) or value < 0 or value > 150:
            raise ValueError("Age must be 0-150")
        self.__age = value

    def __repr__(self):
        return f"UserProfile('{self.username}', '{self.email}', {self.age})"

# Test
profile = UserProfile("alice", "alice@email.com", 25)
print(profile)

# This should fail with validation:
# profile.username = "ab"  # ValueError
# profile.email = "invalid"  # ValueError
# profile.age = -5  # ValueError`,solution:`class UserProfile:
    def __init__(self, username, email, age):
        self.username = username
        self.email = email
        self.age = age

    @property
    def username(self):
        return self.__username

    @username.setter
    def username(self, value):
        if len(value) < 3:
            raise ValueError("Username must be 3+ characters")
        self.__username = value

    @property
    def email(self):
        return self.__email

    @email.setter
    def email(self, value):
        if "@" not in value:
            raise ValueError("Invalid email format")
        self.__email = value

    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, value):
        if not isinstance(value, int) or value < 0 or value > 150:
            raise ValueError("Age must be 0-150")
        self.__age = value

    def __repr__(self):
        return f"UserProfile('{self.username}', '{self.email}', {self.age})"

profile = UserProfile("alice", "alice@email.com", 25)
print(profile)`},{title:"Abstract Payment System",description:"Create an abstract payment processor with concrete implementations for different payment methods.",topic:"OOP: Abstraction",level:"Hard",starter:`from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

    @abstractmethod
    def refund(self, amount):
        pass

    def process_payment(self, amount):
        print(f"Processing \${amount}...")
        result = self.pay(amount)
        print(f"Result: {result}")
        return result

class CreditCard(PaymentProcessor):
    def __init__(self, card_number):
        self.card_number = card_number

    def pay(self, amount):
        return f"Charged \${amount} to card ending in {self.card_number[-4:]}"

    def refund(self, amount):
        return f"Refunded \${amount} to card ending in {self.card_number[-4:]}"

class PayPal(PaymentProcessor):
    def __init__(self, email):
        self.email = email

    def pay(self, amount):
        return f"Paid \${amount} via PayPal (\${self.email})"

    def refund(self, amount):
        return f"Refunded \${amount} to PayPal (\${self.email})"

# Test
processors = [
    CreditCard("1234567890123456"),
    PayPal("user@email.com")
]

for proc in processors:
    print(f"\\n--- {proc.__class__.__name__} ---")
    proc.process_payment(99.99)`,solution:`from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    @abstractmethod
    def pay(self, amount): pass

    @abstractmethod
    def refund(self, amount): pass

    def process_payment(self, amount):
        print(f"Processing \${amount}...")
        result = self.pay(amount)
        print(f"Result: {result}")
        return result

class CreditCard(PaymentProcessor):
    def __init__(self, card_number):
        self.card_number = card_number

    def pay(self, amount):
        return f"Charged \${amount} to card ending in {self.card_number[-4:]}"

    def refund(self, amount):
        return f"Refunded \${amount} to card ending in {self.card_number[-4:]}"

class PayPal(PaymentProcessor):
    def __init__(self, email):
        self.email = email

    def pay(self, amount):
        return f"Paid \${amount} via PayPal (\${self.email})"

    def refund(self, amount):
        return f"Refunded \${amount} to PayPal (\${self.email})"

processors = [CreditCard("1234567890123456"), PayPal("user@email.com")]
for proc in processors:
    print(f"\\n--- {proc.__class__.__name__} ---")
    proc.process_payment(99.99)`},{title:"Abstract Shape Calculator",description:"Build an abstract Shape class and implement concrete shapes with area and perimeter calculations.",topic:"OOP: Abstraction",level:"Hard",starter:`from abc import ABC, abstractmethod
import math

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

    @abstractmethod
    def describe(self):
        pass

    def __repr__(self):
        return self.describe()

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

    def perimeter(self):
        return 2 * math.pi * self.radius

    def describe(self):
        return f"Circle(r={self.radius})"

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

    def describe(self):
        return f"Rectangle({self.width}x{self.height})"

class Triangle(Shape):
    def __init__(self, a, b, c):
        self.a, self.b, self.c = a, b, c

    def area(self):
        s = (self.a + self.b + self.c) / 2
        return math.sqrt(s * (s-self.a) * (s-self.b) * (s-self.c))

    def perimeter(self):
        return self.a + self.b + self.c

    def describe(self):
        return f"Triangle({self.a},{self.b},{self.c})"

# Test
shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 4, 5)]
for s in shapes:
    print(f"{s}: area={s.area():.2f}, perimeter={s.perimeter():.2f}")`,solution:`from abc import ABC, abstractmethod
import math

class Shape(ABC):
    @abstractmethod
    def area(self): pass

    @abstractmethod
    def perimeter(self): pass

    @abstractmethod
    def describe(self): pass

    def __repr__(self): return self.describe()

class Circle(Shape):
    def __init__(self, radius): self.radius = radius
    def area(self): return math.pi * self.radius ** 2
    def perimeter(self): return 2 * math.pi * self.radius
    def describe(self): return f"Circle(r={self.radius})"

class Rectangle(Shape):
    def __init__(self, width, height): self.width = width; self.height = height
    def area(self): return self.width * self.height
    def perimeter(self): return 2 * (self.width + self.height)
    def describe(self): return f"Rectangle({self.width}x{self.height})"

class Triangle(Shape):
    def __init__(self, a, b, c): self.a, self.b, self.c = a, b, c
    def area(self):
        s = (self.a + self.b + self.c) / 2
        return math.sqrt(s * (s-self.a) * (s-self.b) * (s-self.c))
    def perimeter(self): return self.a + self.b + self.c
    def describe(self): return f"Triangle({self.a},{self.b},{self.c})"

shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 4, 5)]
for s in shapes:
    print(f"{s}: area={s.area():.2f}, perimeter={s.perimeter():.2f}")`},{title:"Safe Division Handler",description:"Write a safe division function handling ZeroDivisionError and TypeError.",topic:"Error Handling",level:"Medium",starter:`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Division by zero"
    except TypeError:
        return "Error: Invalid types"

# Test
tests = [(10, 3), (10, 0), ("10", 3), (10, "3")]
for a, b in tests:
    print(f"  {a} / {b} = {safe_divide(a, b)}")`,solution:`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Division by zero"
    except TypeError:
        return "Error: Invalid types"
tests = [(10, 3), (10, 0), ("10", 3), (10, "3")]
for a, b in tests:
    print(f"  {a} / {b} = {safe_divide(a, b)}")`},{title:"Custom Exception",description:"Create a custom exception class and raise it for invalid inputs.",topic:"Error Handling",level:"Hard",starter:`class InvalidAgeError(Exception):
    pass

def set_age(age):
    if not isinstance(age, int):
        raise InvalidAgeError("Age must be an integer!")
    if age < 0 or age > 150:
        raise InvalidAgeError("Age must be between 0 and 150!")
    return f"Age set to {age}"

# TODO: Test set_age with valid and invalid values
# Use try/except to catch InvalidAgeError
# Try: 25 (valid), -5 (invalid), 200 (invalid), "abc" (invalid)`,solution:`class InvalidAgeError(Exception): pass
def set_age(age):
    if not isinstance(age, int):
        raise InvalidAgeError("Age must be an integer!")
    if age < 0 or age > 150:
        raise InvalidAgeError("Age must be between 0 and 150!")
    return f"Age set to {age}"
for val in [25, -5, 200, "abc"]:
    try:
        print(set_age(val))
    except InvalidAgeError as e:
        print(f"  Error: {e}")`},{title:"CSV Reader",description:"Read data from a CSV-style string and compute statistics.",topic:"File Handling",level:"Medium",starter:`# Simulate CSV file data
data = """name,score
Alice,85
Bob,92
Charlie,78
Diana,95
Eve,88"""

# TODO: Parse the CSV data
# TODO: Compute average score
# TODO: Find the student with the highest score
# TODO: Print a sorted report`,solution:`data = """name,score
Alice,85
Bob,92
Charlie,78
Diana,95
Eve,88"""
lines = data.strip().split("\\n")
header = lines[0].split(",")
students = [line.split(",") for line in lines[1:]]
scores = [int(s[1]) for s in students]
print(f"Average: {sum(scores) / len(scores):.1f}")
best = max(students, key=lambda s: int(s[1]))
print(f"Highest: {best[0]} ({best[1]})")
report = sorted(students, key=lambda s: s[1], reverse=True)
for name, score in report:
    print(f"  {name}: {score}")`},{title:"Dice Roll Simulator",description:"Simulate dice rolls and visualize the distribution.",topic:"Modules",level:"Medium",starter:`import random
from collections import Counter

# Simulate 1000 dice rolls
rolls = [random.randint(1, 6) for _ in range(1000)]
counts = Counter(rolls)

print("Dice roll distribution (1000 rolls):")
for face in range(1, 7):
    bar = "#" * (counts[face] // 5)
    print(f"  {face}: {bar} ({counts[face]})")`,solution:`import random
from collections import Counter
rolls = [random.randint(1, 6) for _ in range(1000)]
counts = Counter(rolls)
print("Dice roll distribution (1000 rolls):")
for face in range(1, 7):
    bar = "#" * (counts[face] // 5)
    print(f"  {face}: {bar} ({counts[face]})")`},{title:"Password Generator",description:"Generate strong random passwords using the random module.",topic:"Modules",level:"Medium",starter:`import random
import string

def generate_password(length=12):
    # TODO: Use string module for character sets
    # TODO: Include lowercase, uppercase, digits, symbols
    # TODO: Ensure at least one char from each category

    chars = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(chars) for _ in range(length))
    return password

# Generate 5 passwords
for i in range(5):
    print(f"Password {i+1}: {generate_password()}")`,solution:`import random
import string
def generate_password(length=12):
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(chars) for _ in range(length))
for i in range(5):
    print(f"Password {i+1}: {generate_password()}")`}];e.s(["practiceExercises",0,t])}]);