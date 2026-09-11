import { Topic, Lesson } from "./types";

export const topics: Topic[] = [
  {
    slug: "intro",
    title: "Python Introduction",
    icon: "rocket",
    description: "What is Python and why learn it?",
    level: "beginner",
    lessons: [
      {
        slug: "what-is-python",
        title: "What is Python?",
        description: "Learn what Python is and why it's so popular.",
        content: `Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and first released in 1991.

**Why Python?**
- **Easy to learn** - Simple, readable syntax
- **Versatile** - Web dev, data science, AI, automation, scripting
- **Huge community** - Massive ecosystem of libraries
- **High demand** - One of the most sought-after skills in tech

**Python is used by:**
- Instagram, Spotify, Netflix (backend services)
- NASA, ESA (scientific computing)
- Google, Amazon, Microsoft (AI/ML)
- Instagram handles 1+ billion users with Python/Django`,
        codeExample: `# Your first Python program
print("Hello, World!")

# Python can do math
print(2 + 3)

# Python can work with text
print("Python is awesome!".upper())
print("Hello".center(20, "-"))`,
        practiceCode: `# Try printing your name
name = "Your Name"
print(f"Hello, {name}!")

# Try some math
print(10 * 5)
print(100 / 3)
print(2 ** 10)  # 2 to the power of 10`,
        practiceTask: "Print your name, calculate 10 * 5, and compute 2 to the power of 10.",
        quiz: [
          {
            question: "Who created Python?",
            options: ["James Gosling", "Guido van Rossum", "Bjarne Stroustrup", "Dennis Ritchie"],
            correctIndex: 1,
            explanation: "Python was created by Guido van Rossum and first released in 1991.",
          },
          {
            question: 'What does print("Hello") output?',
            options: ["Hello", '"Hello"', "Error", "Nothing"],
            correctIndex: 0,
            explanation: "print() outputs the string without quotes: Hello",
          },
        ],
      },
      {
        slug: "getting-started",
        title: "Getting Started",
        description: "How to install and run Python.",
        content: `**Installing Python:**

1. Visit python.org/downloads
2. Download the latest version (Python 3.x)
3. Run the installer (check "Add Python to PATH" on Windows)
4. Verify installation in terminal: \`python --version\`

**Running Python:**

- **Interactive mode**: Type \`python\` in terminal
- **Script mode**: Create a \`.py\` file and run \`python filename.py\`
- **Online**: Use this app's code editor!

**Your first script:**
Create a file called \`hello.py\`:
\`\`\`python
print("Hello from a Python file!")
\`\`\`
Run it: \`python hello.py\``,
        codeExample: `# Variables store data
name = "Alice"
age = 25
height = 5.6
is_student = True

# Print with f-strings
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} ft")
print(f"Student: {is_student}")`,
        practiceCode: `# Create your own variables
name = "Your Name"
age = 20
language = "Python"

print(f"I am {name}")
print(f"I am {age} years old")
print(f"I am learning {language}")`,
        practiceTask: "Create variables for your name, age, and favorite language. Print them using f-strings.",
        quiz: [
          {
            question: 'What is the output of: x = 5; print(x + 3)?',
            options: ["53", "8", "5 + 3", "Error"],
            correctIndex: 1,
            explanation: "x = 5, so x + 3 = 8",
          },
          {
            question: "Which file extension is used for Python files?",
            options: [".python", ".py", ".pt", ".pyt"],
            correctIndex: 1,
            explanation: "Python files use the .py extension.",
          },
        ],
      },
    ],
  },
  {
    slug: "syntax",
    title: "Python Syntax",
    icon: "code",
    description: "Learn Python syntax rules and basics.",
    level: "beginner",
    lessons: [
      {
        slug: "basic-syntax",
        title: "Basic Syntax",
        description: "Understanding Python's syntax rules.",
        content: `**Key Syntax Rules:**

1. **Indentation matters** - Python uses indentation (spaces) instead of braces
2. **No semicolons** - Statements end at the line break
3. **Case sensitive** - \`Variable\` and \`variable\` are different
4. **Comments** - Use \`#\` for single-line comments

**Indentation:**
Python uses indentation to define code blocks. Use 4 spaces (standard).

\`\`\`python
if True:
    print("This is indented")   # 4 spaces
    print("Still inside if")    # 4 spaces
print("This is outside")        # no indentation
\`\`\``,
        codeExample: `# This is a comment
name = "Python"  # inline comment

# Indentation defines blocks
for i in range(3):
    print(f"Count: {i}")
    if i == 1:
        print("  Middle item!")

# Multiple lines with backslash
total = 1 + 2 + 3 + \\
        4 + 5 + 6
print(f"Total: {total}")`,
        practiceCode: `# Try indentation with a loop
for i in range(5):
    print(f"Step {i}")
    if i % 2 == 0:
        print("  -> Even number!")
    else:
        print("  -> Odd number!")`,
        practiceTask: "Write a for loop that prints numbers 0-4, labeling each as even or odd using if/else.",
        quiz: [
          {
            question: "How many spaces is standard Python indentation?",
            options: ["2", "4", "8", "1 tab"],
            correctIndex: 1,
            explanation: "PEP 8 recommends 4 spaces for indentation.",
          },
          {
            question: "What symbol starts a comment in Python?",
            options: ["//", "/*", "#", "--"],
            correctIndex: 2,
            explanation: "Python uses # for comments.",
          },
        ],
      },
      {
        slug: "variables",
        title: "Variables",
        description: "Creating and using variables.",
        content: `**Variables** are containers for storing data values.

**Naming Rules:**
- Must start with a letter or underscore
- Can contain letters, numbers, underscores
- Cannot use Python keywords (if, for, class, etc.)
- Case sensitive (\`myVar\` ≠ \`myvar\`)

**No declaration needed** - Just assign a value:
\`\`\`python
x = 10          # int
name = "Alice"  # string
pi = 3.14       # float
active = True   # bool
\`\`\`

**Multiple assignment:**
\`\`\`python
x, y, z = 1, 2, 3
a = b = c = 0
\`\`\``,
        codeExample: `# Different variable types
count = 42          # Integer
price = 19.99       # Float
name = "Python"     # String
is_fun = True       # Boolean
nothing = None      # NoneType

# Type checking
print(type(count))
print(type(price))
print(type(name))

# Swap variables
a, b = 10, 20
a, b = b, a
print(f"a={a}, b={b}")`,
        practiceCode: `# Create variables of different types
integer_var = 42
float_var = 3.14
string_var = "Hello"
bool_var = True

print(type(integer_var))
print(type(float_var))
print(type(string_var))
print(type(bool_var))

# Swap two variables
x = "first"
y = "second"
x, y = y, x
print(f"x={x}, y={y}")`,
        practiceTask: "Create one variable of each type (int, float, string, bool), print their types, then swap two variables.",
        quiz: [
          {
            question: "Which is a valid Python variable name?",
            options: ["2name", "_name", "my-name", "class"],
            correctIndex: 1,
            explanation: "_name is valid. Names can't start with numbers, contain hyphens, or be keywords.",
          },
          {
            question: "What type is: x = 3.14?",
            options: ["int", "float", "decimal", "number"],
            correctIndex: 1,
            explanation: "3.14 is a float (floating point number).",
          },
        ],
      },
      {
        slug: "data-types",
        title: "Data Types",
        description: "Understanding Python's built-in data types.",
        content: `**Python's Core Data Types:**

| Type | Example | Description |
|------|---------|-------------|
| \`int\` | \`42\` | Whole numbers |
| \`float\` | \`3.14\` | Decimal numbers |
| \`str\` | \`"hello"\` | Text strings |
| \`bool\` | \`True\` | Boolean (True/False) |
| \`list\` | \`[1, 2, 3]\` | Ordered, mutable collection |
| \`tuple\` | \`(1, 2, 3)\` | Ordered, immutable collection |
| \`dict\` | \`{"a": 1}\` | Key-value pairs |
| \`set\` | \`{1, 2, 3}\` | Unordered unique items |
| \`None\` | \`None\` | No value |

**Type conversion:**
\`\`\`python
int("42")     # string to int
float("3.14") # string to float
str(42)       # int to string
list("abc")   # string to list ['a','b','c']
\`\`\``,
        codeExample: `# Exploring data types
print(type(42))         # <class 'int'>
print(type(3.14))       # <class 'float'>
print(type("hello"))    # <class 'str'>
print(type(True))       # <class 'bool'>
print(type([1,2,3]))    # <class 'list'>
print(type((1,2)))      # <class 'tuple'>
print(type({"a": 1}))   # <class 'dict'>
print(type({1, 2}))     # <class 'set'>
print(type(None))       # <class 'NoneType'>

# Type conversion
x = "100"
y = int(x) + 50
print(f"Converted: {y}")  # 150`,
        practiceCode: `# Check types and convert
values = [42, 3.14, "hello", True, None, [1,2], {"a":1}]

for v in values:
    print(f"{str(v):>12} -> {type(v).__name__}")

# Convert string to number
num_str = "256"
num = int(num_str)
print(f"Square of {num}: {num ** 2}")`,
        practiceTask: "Print each data type and its value. Convert the string '256' to int and print its square.",
        quiz: [
          {
            question: "What is the type of [1, 2, 3]?",
            options: ["tuple", "list", "array", "set"],
            correctIndex: 1,
            explanation: "[1, 2, 3] is a list (square brackets).",
          },
          {
            question: 'What does int("42") return?',
            options: ['"42"', "42 (string)", "42 (integer)", "Error"],
            correctIndex: 2,
            explanation: "int() converts the string '42' to the integer 42.",
          },
        ],
      },
    ],
  },
  {
    slug: "strings",
    title: "Python Strings",
    icon: "type",
    description: "Working with text data in Python.",
    level: "beginner",
    lessons: [
      {
        slug: "string-basics",
        title: "String Basics",
        description: "Creating and using strings.",
        content: `**Strings** are sequences of characters enclosed in quotes.

**Creating strings:**
\`\`\`python
single = 'Hello'
double = "Hello"
triple = """Multi-line
string"""
\`\`\`

**String operations:**
\`\`\`python
"Hello" + " World"  # Concatenation: "Hello World"
"Ha" * 3            # Repetition: "HaHaHa"
len("Hello")        # Length: 5
\`\`\`

**Escape characters:**
\`\`\`python
\\n  Newline
\\t  Tab
\\'  Single quote
\\"  Double quote
\\\\  Backslash
\`\`\`

**Raw strings** (ignore escape chars):
\`\`\`python
path = r"C:\\new\\folder"
\`\`\``,
        codeExample: `# String creation
s1 = 'Single quotes'
s2 = "Double quotes"
s3 = """Triple quotes
for multi-line
strings"""

# String operations
first = "Python"
second = "Programming"
combined = first + " " + second
repeated = "Ha" * 5

print(combined)
print(repeated)
print(len(combined))

# Escape characters
print("Line 1\\nLine 2")
print("She said \\"Hello\\"")`,
        practiceCode: `# Practice string operations
word = "Python"

print(f"Length: {len(word)}")
print(f"Uppercase: {word.upper()}")
print(f"Lowercase: {word.lower()}")
print(f"Reversed: {word[::-1]}")
print(f"First char: {word[0]}")
print(f"Last char: {word[-1]}")

# String repetition
print("=" * 30)
print("Python " * 3)`,
        practiceTask: "Print the length, uppercase, lowercase, and reversed version of 'Python'. Create a line of 30 equals signs.",
        quiz: [
          {
            question: 'What is len("Hello")?',
            options: ["4", "5", "6", "Error"],
            correctIndex: 1,
            explanation: '"Hello" has 5 characters.',
          },
          {
            question: 'What does "Hi" * 3 produce?',
            options: ["Hi3", "Hi Hi Hi", "HiHiHi", "Error"],
            correctIndex: 2,
            explanation: 'String repetition: "Hi" * 3 = "HiHiHi"',
          },
        ],
      },
      {
        slug: "string-methods",
        title: "String Methods",
        description: "Built-in string methods.",
        content: `**Common String Methods:**

| Method | Description | Example |
|--------|-------------|---------|
| \`.upper()\` | Uppercase | \`"hello".upper()\` → \`"HELLO"\` |
| \`.lower()\` | Lowercase | \`"HELLO".lower()\` → \`"hello"\` |
| \`.strip()\` | Remove whitespace | \`" hi ".strip()\` → \`"hi"\` |
| \`.split()\` | Split into list | \`"a,b,c".split(",")\` → \`["a","b","c"]\` |
| \`.join()\` | Join list to string | \`"-".join(["a","b"])\` → \`"a-b"\` |
| \`.replace()\` | Replace text | \`"hello".replace("l","r")\` → \`"herro"\` |
| \`.find()\` | Find substring | \`"hello".find("ll")\` → \`2\` |
| \`.count()\` | Count occurrences | \`"hello".count("l")\` → \`2\` |
| \`.startswith()\` | Starts with? | \`"hello".startswith("he")\` → \`True\` |
| \`.endswith()\` | Ends with? | \`"hello".endswith("lo")\` → \`True\` |

**Note:** Strings are **immutable** - methods return new strings.`,
        codeExample: `text = "  Hello, World!  "

# Case methods
print(text.upper())
print(text.lower())
print(text.strip())  # Remove extra spaces
print(text.strip().title())  # Title Case

# Search methods
sentence = "the cat sat on the mat"
print(sentence.find("cat"))       # 4
print(sentence.count("the"))      # 2
print(sentence.startswith("the"))  # True
print(sentence.endswith("mat"))    # True

# Transform methods
print(sentence.replace("cat", "dog"))
print("a,b,c".split(","))
print("-".join(["2024", "01", "01"]))`,
        practiceCode: `# Practice string methods
messy = "  HeLLo PyTHon WoRLD  "

print(f"Original: '{messy}'")
print(f"Stripped: '{messy.strip()}'")
print(f"Lower: '{messy.strip().lower()}'")
print(f"Title: '{messy.strip().title()}'")
print(f"Replace: '{messy.strip().replace('Python', 'World')}'")

# Split and join
csv_data = "apple,banana,cherry"
fruits = csv_data.split(",")
print(f"Fruits: {fruits}")
joined = " | ".join(fruits)
print(f"Joined: {joined}")`,
        practiceTask: "Clean up the messy string using strip, lower, and title methods. Split a CSV string and rejoin with pipes.",
        quiz: [
          {
            code: 'text = "  Hello  "',
            question: "What does text.strip() return?",
            options: ['"  Hello"', '"Hello"', '"Hello  "', '"  Hello  "'],
            correctIndex: 1,
            explanation: ".strip() removes whitespace from both ends.",
          },
          {
            question: 'What does "a,b,c".split(",") return?',
            options: ['"a,b,c"', '["a","b","c"]', '("a","b","c")', '{"a","b","c"}'],
            correctIndex: 1,
            explanation: ".split(',') returns a list of substrings.",
          },
        ],
      },
      {
        slug: "string-formatting",
        title: "String Formatting",
        description: "Formatting strings with f-strings and more.",
        content: `**Three ways to format strings:**

**1. f-strings (recommended - Python 3.6+):**
\`\`\`python
name = "Alice"
age = 25
print(f"{name} is {age} years old")
print(f"{name} will be {age + 1} next year")
print(f"{'centered':^20}")
print(f"{3.14159:.2f}")  # 3.14
\`\`\`

**2. .format() method:**
\`\`\`python
print("{} is {} years old".format(name, age))
print("{1} {0}".format("World", "Hello"))
\`\`\`

**3. % formatting (old style):**
\`\`\`python
print("%s is %d years old" % (name, age))
\`\`\`

**f-string expressions:**
\`\`\`python
print(f"{'hello':>20}")  # Right align, width 20
print(f"{'hello':<20}")  # Left align
print(f"{'hello':^20}")  # Center
print(f"{42:05d}")        # Zero-padded: 00042
print(f"{0.856:.1%}")     # Percentage: 85.6%
\`\`\``,
        codeExample: `name = "Alice"
score = 95.678
items = 3

# f-string basics
print(f"Student: {name}")
print(f"Score: {score:.1f}")
print(f"Items: {items:03d}")

# Expressions in f-strings
print(f"Double score: {score * 2:.1f}")
print(f"Name length: {len(name)}")

# Alignment
headers = ["Name", "Score", "Grade"]
for h in headers:
    print(f"{h:>15}")

# Formatting numbers
big_num = 1000000
print(f"Population: {big_num:,}")
print(f"Percentage: {0.95:.0%}")`,
        practiceCode: `# Practice f-string formatting
product = "Laptop"
price = 999.99
quantity = 5

print(f"Product: {product}")
print(f"Price: \${price:.2f}")
print(f"Quantity: {quantity}")
print(f"Total: \${price * quantity:.2f}")

# Table formatting
print(f"{'Item':<15}{'Price':>10}{'Qty':>8}{'Total':>12}")
print(f"{product:<15}\${price:>9.2f}{quantity:>8}\${price*quantity:>11.2f}")

# Number formatting
print(f"Hex: {255:x}")
print(f"Oct: {255:o}")
print(f"Binary: {255:b}")
print(f"Scientific: {0.00123:.2e}")`,
        practiceTask: "Create a product receipt using f-strings. Format a table with item, price, quantity, and total columns.",
        quiz: [
          {
            code: 'x = 3.14159',
            question: 'What does f"{x:.2f}" produce?',
            options: ["3.14", "3.14159", "3.1", "3"],
            correctIndex: 0,
            explanation: ".2f formats to 2 decimal places: 3.14",
          },
          {
            question: "Which is the recommended modern way to format strings?",
            options: ["% formatting", ".format()", "f-strings", "string.concat()"],
            correctIndex: 2,
            explanation: "f-strings (Python 3.6+) are the most readable and performant.",
          },
        ],
      },
    ],
  },
  {
    slug: "operators",
    title: "Python Operators",
    icon: "calculator",
    description: "Arithmetic, comparison, and logical operators.",
    level: "beginner",
    lessons: [
      {
        slug: "arithmetic-operators",
        title: "Arithmetic Operators",
        description: "Math operations in Python.",
        content: `**Arithmetic Operators:**

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| \`+\` | Addition | \`5 + 3\` | \`8\` |
| \`-\` | Subtraction | \`5 - 3\` | \`2\` |
| \`*\` | Multiplication | \`5 * 3\` | \`15\` |
| \`/\` | Division | \`5 / 3\` | \`1.6667\` |
| \`//\` | Floor Division | \`5 // 3\` | \`1\` |
| \`%\` | Modulus | \`5 % 3\` | \`2\` |
| \`**\` | Exponent | \`5 ** 3\` | \`125\` |

**Operator precedence** (PEMDAS):
1. \`**\` (exponent)
2. \`+\`, \`-\` (unary)
3. \`*\`, \`/\`, \`//\`, \`%\`
4. \`+\`, \`-\``,
        codeExample: `a, b = 17, 5

print(f"{a} + {b} = {a + b}")    # 22
print(f"{a} - {b} = {a - b}")    # 12
print(f"{a} * {b} = {a * b}")    # 85
print(f"{a} / {b} = {a / b}")    # 3.4
print(f"{a} // {b} = {a // b}")  # 3
print(f"{a} % {b} = {a % b}")    # 2
print(f"{a} ** {b} = {a ** b}")  # 1419857

# Practical examples
print(f"\\n100 items, 3 per box:")
print(f"  Boxes needed: {-(-100 // 3)}")  # Ceiling division
print(f"  Leftover: {100 % 3}")`,
        practiceCode: `# Calculator operations
x = 48
y = 7

print(f"{x} + {y} = {x + y}")
print(f"{x} - {y} = {x - y}")
print(f"{x} * {y} = {x * y}")
print(f"{x} / {y} = {x / y:.4f}")
print(f"{x} // {y} = {x // y}")
print(f"{x} % {y} = {x % y}")

# Practical: convert seconds
total_seconds = 3661
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60
print(f"\\n{total_seconds} seconds = {hours}h {minutes}m {seconds}s")`,
        practiceTask: "Convert 3661 seconds into hours, minutes, and seconds using floor division and modulus.",
        quiz: [
          {
            question: "What is 17 // 5?",
            options: ["3.4", "3", "4", "2"],
            correctIndex: 1,
            explanation: "// is floor division - it rounds down to 3.",
          },
          {
            question: "What is 17 % 5?",
            options: ["3", "2", "3.4", "175"],
            correctIndex: 1,
            explanation: "% gives the remainder: 17 = 3*5 + 2, so remainder is 2.",
          },
        ],
      },
      {
        slug: "comparison-operators",
        title: "Comparison Operators",
        description: "Comparing values in Python.",
        content: `**Comparison Operators:**

| Operator | Meaning | Example |
|----------|---------|---------|
| \`==\` | Equal to | \`5 == 5\` → \`True\` |
| \`!=\` | Not equal | \`5 != 3\` → \`True\` |
| \`>\` | Greater than | \`5 > 3\` → \`True\` |
| \`<\` | Less than | \`5 < 3\` → \`False\` |
| \`>=\` | Greater or equal | \`5 >= 5\` → \`True\` |
| \`<=\` | Less or equal | \`5 <= 3\` → \`False\` |

**Chained comparisons:**
\`\`\`python
x = 5
print(1 < x < 10)    # True
print(1 < x < 3)     # False
\`\`\``,
        codeExample: `x, y = 10, 20

# Basic comparisons
print(f"{x} == {y}: {x == y}")
print(f"{x} != {y}: {x != y}")
print(f"{x} > {y}: {x > y}")
print(f"{x} < {y}: {x < y}")
print(f"{x} >= {y}: {x >= y}")
print(f"{x} <= {y}: {x <= y}")

# Chained comparisons
age = 25
print(f"\\n18 <= {age} <= 65: {18 <= age <= 65}")

# String comparison
print(f'"apple" < "banana": {"apple" < "banana"}')
print(f'"abc" == "abc": {"abc" == "abc"}')`,
        practiceCode: `# Comparison practice
score = 85
grade = ""

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Score: {score}")
print(f"Grade: {grade}")

# Test chaining
temperature = 25
print(f"{temperature}C is comfortable: {20 <= temperature <= 30}")`,
        practiceTask: "Write code that assigns a letter grade (A-F) based on a score using comparison operators.",
        quiz: [
          {
            question: "What is the result of: 5 != 5?",
            options: ["True", "False", "5", "Error"],
            correctIndex: 1,
            explanation: "5 != 5 is False because 5 is equal to 5.",
          },
          {
            question: "Which checks if two values are NOT equal?",
            options: ["==", "!=", "<>", "!="],
            correctIndex: 1,
            explanation: "!= is the not-equal operator.",
          },
        ],
      },
      {
        slug: "logical-operators",
        title: "Logical Operators",
        description: "and, or, not operators.",
        content: `**Logical Operators:**

| Operator | Description | Example |
|----------|-------------|---------|
| \`and\` | True if BOTH are true | \`True and False\` → \`False\` |
| \`or\` | True if AT LEAST ONE is true | \`True or False\` → \`True\` |
| \`not\` | Reverses the boolean | \`not True\` → \`False\` |

**Truth table for \`and\`:**
\`\`\`
True and True   → True
True and False  → False
False and True  → False
False and False → False
\`\`\`

**Truth table for \`or\`:**
\`\`\`
True or True   → True
True or False  → True
False or True  → True
False or False → False
\`\`\`

**Short-circuit evaluation:**
Python stops evaluating as soon as the result is determined.
\`\`\`python
x = 0
result = x != 0 and 10 / x > 2  # Safe! Won't divide by zero
\`\`\``,
        codeExample: `age = 25
has_id = True
is_vip = False

# and - both must be true
print(f"Can enter: {age >= 21 and has_id}")

# or - at least one must be true
print(f"VIP or over 21: {is_vip or age >= 21}")

# not - reverses
print(f"Not VIP: {not is_vip}")

# Complex conditions
score = 85
has_bonus = True
passed = score >= 70 and (score >= 80 or has_bonus)
print(f"\\nPassed with honors: {passed}")

# Short-circuit
name = ""
display = name or "Anonymous"
print(f"Name: {display}")`,
        practiceCode: `# Logical operators practice
username = "admin"
password = "secret123"
is_active = True

# Check login
valid_login = (username == "admin" and password == "secret123") and is_active
print(f"Login valid: {valid_login}")

# Age groups
age = 17
is_student = True
discount = (age < 18 or age > 65) or is_student
print(f"Gets discount: {discount}")

# Not operator
logged_in = False
if not logged_in:
    print("Please log in to continue")

# Truthy/Falsy
print(f"bool('') = {bool('')}")
print(f"bool('hello') = {bool('hello')}")
print(f"bool(0) = {bool(0)}")
print(f"bool(42) = {bool(42)}")`,
        practiceTask: "Write a login check that requires username='admin', password='secret', and is_active=True. Also test truthy/falsy values.",
        quiz: [
          {
            question: "What is True and False?",
            options: ["True", "False", "None", "Error"],
            correctIndex: 1,
            explanation: "and requires BOTH to be True. Since one is False, result is False.",
          },
          {
            question: "What is not False or True?",
            options: ["False", "True", "None", "Error"],
            correctIndex: 1,
            explanation: "not False = True, then True or True = True",
          },
        ],
      },
    ],
  },
  {
    slug: "control-flow",
    title: "Control Flow",
    icon: "git-branch",
    description: "If/else statements and loops.",
    level: "beginner",
    lessons: [
      {
        slug: "if-else",
        title: "If / Elif / Else",
        description: "Conditional statements.",
        content: `**If/Elif/Else** controls program flow based on conditions.

\`\`\`python
if condition1:
    # runs if condition1 is True
elif condition2:
    # runs if condition1 is False AND condition2 is True
elif condition3:
    # runs if all above are False AND condition3 is True
else:
    # runs if ALL conditions are False
\`\`\`

**Shorthand (ternary):**
\`\`\`python
x = 10
result = "even" if x % 2 == 0 else "odd"
\`\`\`

**Match statement (Python 3.10+):**
\`\`\`python
status = 404
match status:
    case 200: print("OK")
    case 404: print("Not Found")
    case _: print("Unknown")  # default
\`\`\``,
        codeExample: `temp = 28

# Temperature advisor
if temp < 0:
    print("Freezing! Stay inside.")
elif temp < 15:
    print("Cold. Wear a jacket.")
elif temp < 25:
    print("Nice weather!")
elif temp < 35:
    print("Getting warm.")
else:
    print("Hot! Stay hydrated.")

# Nested conditions
age = 20
has_ticket = True

if age >= 18:
    if has_ticket:
        print("Welcome to the movie!")
    else:
        print("Please buy a ticket.")
else:
    print("Sorry, you must be 18+.")

# Ternary operator
number = 7
parity = "even" if number % 2 == 0 else "odd"
print(f"{number} is {parity}")`,
        practiceCode: `# Grade calculator
score = int(input("Enter score (0-100): ") or "85")

if score >= 90:
    grade = "A"
    comment = "Excellent!"
elif score >= 80:
    grade = "B"
    comment = "Good job!"
elif score >= 70:
    grade = "C"
    comment = "Not bad!"
elif score >= 60:
    grade = "D"
    comment = "Needs improvement"
else:
    grade = "F"
    comment = "Try harder"

print(f"Score: {score}")
print(f"Grade: {grade}")
print(f"Comment: {comment}")`,
        practiceTask: "Create a program that takes a score (use 85 as default) and outputs the grade (A-F) with a comment.",
        quiz: [
          {
            question: "How many elif blocks can an if statement have?",
            options: ["1", "2", "Unlimited", "0"],
            correctIndex: 2,
            explanation: "You can have unlimited elif blocks, plus one else.",
          },
          {
            question: "What does the _ case do in match?",
            options: ["Matches everything", "Default case", "Error", "Nothing"],
            correctIndex: 1,
            explanation: "_ is the wildcard/default case in match statements.",
          },
        ],
      },
      {
        slug: "for-loops",
        title: "For Loops",
        description: "Iterating with for loops.",
        content: `**For loops** iterate over a sequence (list, string, range, etc.)

\`\`\`python
# Basic for loop
for item in sequence:
    print(item)
\`\`\`

**range() function:**
\`\`\`python
range(5)        # 0, 1, 2, 3, 4
range(1, 6)     # 1, 2, 3, 4, 5
range(0, 10, 2) # 0, 2, 4, 6, 8
\`\`\`

**Loop with enumerate:**
\`\`\`python
for index, item in enumerate(["a", "b", "c"]):
    print(f"{index}: {item}")
\`\`\`

**Loop with zip:**
\`\`\`python
names = ["Alice", "Bob"]
scores = [95, 87]
for name, score in zip(names, scores):
    print(f"{name}: {score}")
\`\`\`

**List comprehension:**
\`\`\`python
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
\`\`\``,
        codeExample: `# Basic iteration
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# range
print("\\nCounting:")
for i in range(1, 6):
    print(f"  {i}")

# enumerate
print("\\nWith index:")
for i, fruit in enumerate(fruits):
    print(f"  {i}: {fruit}")

# List comprehension
squares = [x**2 for x in range(1, 6)]
print(f"\\nSquares: {squares}")

# Nested loops
print("\\nMultiplication table (1-3):")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"  {i}x{j}={i*j}", end="")
    print()`,
        practiceCode: `# Practice loops
# Print all even numbers from 1 to 20
print("Even numbers:")
for i in range(1, 21):
    if i % 2 == 0:
        print(f"  {i}", end="")
print()

# Sum of numbers 1-100
total = 0
for i in range(1, 101):
    total += i
print(f"\\nSum 1-100: {total}")

# Factorial
n = 5
factorial = 1
for i in range(1, n + 1):
    factorial *= i
print(f"{n}! = {factorial}")

# Pattern
print("\\nTriangle:")
for i in range(1, 6):
    print("*" * i)`,
        practiceTask: "Print even numbers 1-20, calculate sum of 1-100, compute 5!, and print a triangle pattern of stars.",
        quiz: [
          {
            question: "What does range(1, 5) produce?",
            options: ["1,2,3,4,5", "1,2,3,4", "0,1,2,3,4", "1,2,3"],
            correctIndex: 1,
            explanation: "range(1, 5) generates 1, 2, 3, 4 (stop is exclusive).",
          },
          {
            question: "What does enumerate() return?",
            options: ["Just values", "Just indices", "Index-value pairs", "Nothing"],
            correctIndex: 2,
            explanation: "enumerate() returns (index, value) pairs.",
          },
        ],
      },
      {
        slug: "while-loops",
        title: "While Loops",
        description: "Looping with while.",
        content: `**While loops** repeat as long as a condition is True.

\`\`\`python
while condition:
    # code to repeat
\`\`\`

**Common patterns:**
\`\`\`python
# Counter
count = 0
while count < 5:
    print(count)
    count += 1

# Input validation
while True:
    user_input = input("Enter a number: ")
    if user_input.isdigit():
        break

# Game loop
game_running = True
while game_running:
    # game logic
    if should_quit:
        game_running = False
\`\`\`

**break and continue:**
- \`break\` - exits the loop entirely
- \`continue\` - skips to next iteration`,
        codeExample: `# Basic while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# Guessing game simulation
secret = 7
guess = 0
attempts = 0

print("\\nGuess the number (1-10)!")
while guess != secret:
    guesses = [3, 5, 7]  # Simulated guesses
    guess = guesses[attempts] if attempts < len(guesses) else 7
    attempts += 1
    if guess < secret:
        print(f"  Guess {attempts}: {guess} - Too low!")
    elif guess > secret:
        print(f"  Guess {attempts}: {guess} - Too high!")
    else:
        print(f"  Guess {attempts}: {guess} - Correct!")

print(f"Found in {attempts} attempts!")

# Break and continue
print("\\nSkip multiples of 3:")
for i in range(1, 16):
    if i % 3 == 0:
        continue
    if i > 12:
        break
    print(f"  {i}", end="")
print()`,
        practiceCode: `# While loop exercises
# Countdown
print("Countdown:")
n = 10
while n > 0:
    print(f"  {n}...")
    n -= 1
print("  Liftoff!")

# Fibonacci
print("\\nFibonacci (first 10):")
a, b = 0, 1
for _ in range(10):
    print(f"  {a}", end="")
    a, b = b, a + b

# Sum until negative
print("\\n\\nSum until negative:")
numbers = [5, 3, 8, -1, 4]
total = 0
for num in numbers:
    if num < 0:
        break
    total += num
print(f"  Sum: {total}")`,
        practiceTask: "Write a countdown from 10, print the first 10 Fibonacci numbers, and sum a list until a negative number.",
        quiz: [
          {
            question: "What happens if the while condition is never False?",
            options: ["Runs once", "Error", "Infinite loop", "Skips"],
            correctIndex: 2,
            explanation: "If the condition never becomes False, it's an infinite loop.",
          },
          {
            question: "What does 'continue' do in a loop?",
            options: ["Exits loop", "Skips to next iteration", "Restarts program", "Pauses"],
            correctIndex: 1,
            explanation: "continue skips the rest of the current iteration and goes to the next one.",
          },
        ],
      },
    ],
  },
  {
    slug: "lists",
    title: "Python Lists",
    icon: "list",
    description: "Working with ordered, mutable collections.",
    level: "beginner",
    lessons: [
      {
        slug: "list-basics",
        title: "List Basics",
        description: "Creating and accessing lists.",
        content: `**Lists** are ordered, mutable collections that can hold any type.

\`\`\`python
# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True, None]
nested = [[1, 2], [3, 4]]
empty = []
\`\`\`

**Accessing elements:**
\`\`\`python
fruits = ["apple", "banana", "cherry"]
fruits[0]    # "apple" (first)
fruits[-1]   # "cherry" (last)
fruits[1:3]  # ["banana", "cherry"] (slicing)
\`\`\`

**List methods:**
\`\`\`python
fruits.append("date")      # Add to end
fruits.insert(1, "fig")    # Insert at index
fruits.remove("banana")    # Remove by value
fruits.pop()               # Remove last
fruits.sort()              # Sort in place
fruits.reverse()           # Reverse in place
len(fruits)                # Length
\`\`\``,
        codeExample: `# Creating lists
colors = ["red", "green", "blue"]
numbers = list(range(1, 6))

# Accessing
print(f"First: {colors[0]}")
print(f"Last: {colors[-1]}")
print(f"Slice: {colors[1:]}")

# Modifying
colors.append("yellow")
colors.insert(1, "purple")
print(f"After add: {colors}")

colors.remove("green")
popped = colors.pop()
print(f"After remove: {colors}")
print(f"Popped: {popped}")

# Useful operations
print(f"Length: {len(colors)}")
print(f"Index of blue: {colors.index('blue')}")
print(f"Count of red: {colors.count('red')}")
print(f"'red' in colors: {'red' in colors}")`,
        practiceCode: `# List practice
scores = [85, 92, 78, 95, 88]

print(f"Scores: {scores}")
print(f"Highest: {max(scores)}")
print(f"Lowest: {min(scores)}")
print(f"Average: {sum(scores) / len(scores):.1f}")

# Add and sort
scores.append(73)
scores.sort(reverse=True)
print(f"\\nAfter adding 73, sorted: {scores}")

# Slicing
print(f"Top 3: {scores[:3]}")
print(f"Bottom 3: {scores[-3:]}")`,
        practiceTask: "Create a list of 5 scores. Find max, min, average. Add a new score, sort it, and print top 3.",
        quiz: [
          {
            question: "Which method adds an element to the end of a list?",
            options: [".add()", ".append()", ".insert()", ".push()"],
            correctIndex: 1,
            explanation: ".append() adds an element to the end of a list.",
          },
          {
            question: 'What does [1,2,3][1] return?',
            options: ["1", "2", "3", "[2]"],
            correctIndex: 1,
            explanation: "Index 1 is the second element: 2.",
          },
        ],
      },
      {
        slug: "list-comprehension",
        title: "List Comprehension",
        description: "Creating lists concisely.",
        content: `**List comprehension** creates new lists from expressions.

**Syntax:**
\`\`\`python
[expression for item in iterable if condition]
\`\`\`

**Examples:**
\`\`\`python
# Basic
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# With function
upper = [word.upper() for word in ["hello", "world"]]

# Nested
pairs = [(x, y) for x in range(3) for y in range(3)]

# Conditional expression
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
\`\`\`

**When to use comprehensions:**
- Simple transformations
- Filtering
- When it improves readability
- Don't use for complex logic - use regular loops instead`,
        codeExample: `# Basic list comprehensions
squares = [x**2 for x in range(1, 11)]
print(f"Squares: {squares}")

# With filter
evens = [x for x in range(1, 21) if x % 2 == 0]
print(f"Evens: {evens}")

# String manipulation
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print(f"Upper: {upper_words}")

# Nested
matrix = [[i*3 + j + 1 for j in range(3)] for i in range(3)]
print(f"Matrix: {matrix}")

# Flattened
flat = [num for row in matrix for num in row]
print(f"Flat: {flat}")

# Conditional
labels = ["+" if x > 5 else "-" for x in range(1, 11)]
print(f"Labels: {labels}")`,
        practiceCode: `# List comprehension practice
# 1. Cube of odd numbers 1-20
cubes = [x**3 for x in range(1, 21) if x % 2 != 0]
print(f"Odd cubes: {cubes}")

# 2. Extract and transform
data = ["  Alice ", " BOB", "charlie  "]
cleaned = [name.strip().title() for name in data]
print(f"Cleaned: {cleaned}")

# 3. Grade conversion
scores = [95, 82, 67, 73, 88, 45, 91]
grades = ["A" if s >= 90 else "B" if s >= 80 else "C" if s >= 70 else "D" if s >= 60 else "F" for s in scores]
print(f"Grades: {list(zip(scores, grades))}")

# 4. Matrix operations
transposed = [[row[i] for row in [[1,2,3],[4,5,6]]] for i in range(3)]
print(f"Transposed: {transposed}")`,
        practiceTask: "Use list comprehensions to: cube odd numbers, clean strings, convert scores to grades, and transpose a matrix.",
        quiz: [
          {
            question: "What does [x*2 for x in range(3)] produce?",
            options: ["[2, 4, 6]", "[0, 2, 4]", "[1, 2, 3]", "[0, 1, 2]"],
            correctIndex: 1,
            explanation: "range(3) = 0,1,2, each multiplied by 2 = 0,2,4",
          },
          {
            question: "Where does the filter condition go?",
            options: ["Before for", "After for, before if", "At the end", "Before the expression"],
            correctIndex: 1,
            explanation: "Syntax: [expr for item in iterable if condition]",
          },
        ],
      },
    ],
  },
  {
    slug: "functions",
    title: "Python Functions",
    icon: "function-square",
    description: "Creating reusable code blocks.",
    level: "intermediate",
    lessons: [
      {
        slug: "function-basics",
        title: "Function Basics",
        description: "Defining and calling functions.",
        content: `**Functions** are reusable blocks of code.

\`\`\`python
def function_name(parameters):
    """Docstring - describes what the function does."""
    # code block
    return result
\`\`\`

**Key concepts:**
- \`def\` keyword starts function definition
- Parameters are optional
- \`return\` sends a value back (optional)
- Without \`return\`, function returns \`None\`

**Default parameters:**
\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
\`\`\`

**Multiple return values:**
\`\`\`python
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)
\`\`\``,
        codeExample: `# Basic function
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
print(greet("Bob"))

# Default parameters
def power(base, exponent=2):
    return base ** exponent

print(f"\\nPower: {power(3)} = {power(3, 3)}")

# Multiple returns
def analyze(scores):
    return min(scores), max(scores), sum(scores) / len(scores)

data = [85, 92, 78, 95, 88]
low, high, avg = analyze(data)
print(f"\\nScores: {data}")
print(f"Min: {low}, Max: {high}, Avg: {avg:.1f}")

# No return
def print_line(char="=", length=30):
    print(char * length)

print()
print_line()
print("Section Title")
print_line("-")`,
        practiceCode: `# Practice functions
def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def fibonacci(n):
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[-1] + fib[-2])
    return fib

# Test
temps = [0, 20, 37, 100]
for t in temps:
    print(f"{t}°C = {celsius_to_fahrenheit(t):.1f}°F")

print(f"\\nPrimes up to 30: {[x for x in range(31) if is_prime(x)]}")
print(f"Fibonacci(10): {fibonacci(10)}")`,
        practiceTask: "Create functions for: Celsius to Fahrenheit conversion, checking if a number is prime, and generating Fibonacci sequences.",
        quiz: [
          {
            question: "What does a function return without a return statement?",
            options: ["0", "Empty string", "None", "Error"],
            correctIndex: 2,
            explanation: "Functions without return return None.",
          },
          {
            code: "def add(a, b=5):\n    return a + b\n\nprint(add(3))",
            question: "What does add(3) return?",
            options: ["3", "5", "8", "Error"],
            correctIndex: 2,
            explanation: "b defaults to 5, so 3 + 5 = 8.",
          },
        ],
      },
      {
        slug: "lambda",
        title: "Lambda Functions",
        description: "Anonymous one-line functions.",
        content: `**Lambda** functions are small anonymous functions.

\`\`\`python
# Syntax
lambda parameters: expression

# Equivalent to:
def func(parameters):
    return expression
\`\`\`

**Common uses:**
\`\`\`python
# Simple transformation
double = lambda x: x * 2

# With sorted
students = [("Alice", 90), ("Bob", 80)]
students.sort(key=lambda s: s[1], reverse=True)

# With map/filter
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))
evens = list(filter(lambda x: x % 2 == 0, nums))

# In list comprehension
squares = [x**2 for x in range(10)]
\`\`\`

**When to use:**
- Short, one-off functions
- As arguments to higher-order functions (map, filter, sorted)
- For complex logic, use \`def\` instead`,
        codeExample: `# Lambda basics
double = lambda x: x * 2
add = lambda a, b: a + b

print(f"Double 5: {double(5)}")
print(f"Add 3,7: {add(3, 7)}")

# With sorted
students = [("Alice", 92), ("Bob", 85), ("Charlie", 95), ("Diana", 88)]
by_grade = sorted(students, key=lambda s: s[1], reverse=True)
print(f"\\nBy grade: {by_grade}")

# With map and filter
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

print(f"\\nSquared: {squared}")
print(f"Evens: {evens}")

# Real-world example
words = ["banana", "apple", "cherry", "date"]
by_length = sorted(words, key=lambda w: len(w))
print(f"\\nBy length: {by_length}")`,
        practiceCode: `# Lambda practice
# Sort list of dicts by different keys
people = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25},
    {"name": "Charlie", "age": 35}
]
by_age = sorted(people, key=lambda p: p["age"])
print("By age:", [p["name"] for p in by_age])

# Map: convert temperatures
temps_c = [0, 20, 37, 100]
temps_f = list(map(lambda c: c * 9/5 + 32, temps_c))
print(f"\\nC: {temps_c}")
print(f"F: {temps_f}")

# Filter: words longer than 4 chars
words = ["hi", "hello", "hey", "howdy", "yo"]
long_words = list(filter(lambda w: len(w) > 4, words))
print(f"\\nLong words: {long_words}")

# Reduce (manual)
from functools import reduce
product = reduce(lambda a, b: a * b, [1, 2, 3, 4, 5])
print(f"\\nProduct 1-5: {product}")`,
        practiceTask: "Use lambda with sorted to sort a list of dicts, map to convert temperatures, and filter long words.",
        quiz: [
          {
            question: "What is a lambda function?",
            options: ["Named function", "Anonymous function", "Class method", "Built-in function"],
            correctIndex: 1,
            explanation: "Lambda creates small anonymous (unnamed) functions.",
          },
          {
            question: "Lambda functions can have multiple expressions?",
            options: ["Yes, unlimited", "Only one expression", "Only with return", "Only two"],
            correctIndex: 1,
            explanation: "Lambda functions are limited to a single expression.",
          },
        ],
      },
    ],
  },
  {
    slug: "dictionaries",
    title: "Python Dictionaries",
    icon: "book-open",
    description: "Key-value pair collections.",
    level: "beginner",
    lessons: [
      {
        slug: "dict-basics",
        title: "Dictionary Basics",
        description: "Creating and using dictionaries.",
        content: `**Dictionaries** store data in key-value pairs.

\`\`\`python
# Creating dictionaries
person = {"name": "Alice", "age": 30, "city": "NYC"}
empty = {}
from_keys = dict.fromkeys(["a", "b", "c"], 0)
\`\`\`

**Accessing values:**
\`\`\`python
person["name"]          # "Alice" (KeyError if missing)
person.get("name")      # "Alice" (None if missing)
person.get("x", "N/A")  # "N/A" (default value)
\`\`\`

**Dictionary methods:**
\`\`\`python
person.keys()     # dict_keys(["name", "age", "city"])
person.values()   # dict_values(["Alice", 30, "NYC"])
person.items()    # dict_items([("name","Alice"), ...])
person.update({"age": 31})
person.pop("city")
\`\`\`

**Iteration:**
\`\`\`python
for key in person:
    print(key, person[key])

for key, value in person.items():
    print(f"{key}: {value}")
\`\`\``,
        codeExample: `# Creating and accessing
student = {
    "name": "Alice",
    "grades": [90, 85, 92],
    "major": "CS"
}

print(f"Name: {student['name']}")
print(f"Major: {student.get('major', 'Undeclared')}")
print(f"GPA: {student.get('gpa', 'N/A')}")

# Modifying
student["age"] = 20
student["grades"].append(88)
print(f"\\nUpdated: {student}")

# Methods
print(f"\\nKeys: {list(student.keys())}")
print(f"Values: {list(student.values())}")

# Iteration
print("\\nStudent info:")
for key, value in student.items():
    print(f"  {key}: {value}")`,
        practiceCode: `# Dictionary practice
# Word frequency counter
text = "the cat sat on the mat the cat"
words = text.split()
freq = {}
for word in words:
    freq[word] = freq.get(word, 0) + 1

print("Word frequencies:")
for word, count in sorted(freq.items(), key=lambda x: x[1], reverse=True):
    print(f"  '{word}': {count}")

# Nested dictionary
contacts = {
    "Alice": {"phone": "555-1234", "email": "alice@mail.com"},
    "Bob": {"phone": "555-5678", "email": "bob@mail.com"}
}

print("\\nAlice's email:", contacts["Alice"]["email"])

# Invert dictionary
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}
print(f"\\nOriginal: {original}")
print(f"Inverted: {inverted}")`,
        practiceTask: "Count word frequencies in a string, access nested dictionary values, and invert a dictionary.",
        quiz: [
          {
            question: "What does .get() do vs direct access?",
            options: ["Same thing", "Returns None instead of error", "Faster", "Returns default"],
            correctIndex: 1,
            explanation: ".get() returns None (or default) instead of raising KeyError.",
          },
          {
            question: "How do you iterate over key-value pairs?",
            options: [".keys()", ".values()", ".items()", ".entries()"],
            correctIndex: 2,
            explanation: ".items() returns (key, value) tuples for iteration.",
          },
        ],
      },
    ],
  },
  {
    slug: "oop",
    title: "Object-Oriented Python",
    icon: "box",
    description: "Classes, objects, and OOP concepts.",
    level: "intermediate",
    lessons: [
      {
        slug: "classes-basics",
        title: "Classes & Objects",
        description: "Creating classes and objects.",
        content: `**Classes** are blueprints for creating objects.

\`\`\`python
class Dog:
    # Class attribute (shared by all instances)
    species = "Canine"

    # Constructor (initializes instance)
    def __init__(self, name, age):
        self.name = name   # Instance attribute
        self.age = age

    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"

    # String representation
    def __repr__(self):
        return f"Dog('{self.name}', {self.age})"
\`\`\`

**Creating objects:**
\`\`\`python
dog1 = Dog("Rex", 5)  # Calls __init__
print(dog1.bark())     # "Rex says Woof!"
print(dog1.species)    # "Canine"
\`\`\`

**Key concepts:**
- \`class\` keyword defines a class
- \`__init__\` is the constructor
- \`self\` refers to the current instance
- Instance attributes are unique to each object
- Class attributes are shared`,
        codeExample: `class BankAccount:
    bank_name = "PyBank"

    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.history = []

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.history.append(f"+{amount}")
            return True
        return False

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            self.history.append(f"-{amount}")
            return True
        print("Insufficient funds!")
        return False

    def get_statement(self):
        lines = [f"Account: {self.owner}"]
        lines.append(f"Bank: {self.bank_name}")
        for entry in self.history:
            lines.append(f"  {entry}")
        lines.append(f"Balance: \${self.balance}")
        return "\\n".join(lines)

# Usage
acc = BankAccount("Alice", 1000)
acc.deposit(500)
acc.withdraw(200)
print(acc.get_statement())`,
        practiceCode: `class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
        self.courses = []

    def add_course(self, course):
        self.courses.append(course)

    def average_grade(self):
        return sum(self.grade) / len(self.grade) if self.grade else 0

    def is_passing(self):
        return self.average_grade() >= 60

    def __str__(self):
        status = "Passing" if self.is_passing() else "Failing"
        return f"{self.name}: Avg {self.average_grade():.1f} ({status})"

# Create students
s1 = Student("Alice", [90, 85, 92])
s2 = Student("Bob", [55, 62, 48])
s3 = Student("Charlie", [78, 82, 75])

for s in [s1, s2, s3]:
    s.add_course("Python")
    print(s)
    print(f"  Courses: {s.courses}")`,
        practiceTask: "Create a Student class with name, grades, and methods for average grade, pass/fail status, and course management.",
        quiz: [
          {
            question: "What does __init__ do?",
            options: ["Destroys object", "Initializes object", "Creates class", "Imports module"],
            correctIndex: 1,
            explanation: "__init__ is the constructor that initializes a new object.",
          },
          {
            question: "What does 'self' refer to?",
            options: ["The class", "The current instance", "The parent class", "Nothing"],
            correctIndex: 1,
            explanation: "self refers to the current instance of the class.",
          },
        ],
      },
      {
        slug: "inheritance",
        title: "Inheritance",
        description: "Extending classes.",
        content: `**Inheritance** lets a class reuse code from another class.

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):        # Dog inherits from Animal
    def speak(self):      # Override parent method
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"
\`\`\`

**Key concepts:**
- Parent class (base/super class)
- Child class (derived/sub class)
- Method overriding
- \`super().__init__()\` calls parent constructor
- \`isinstance(obj, Class)\` checks type

**Types of inheritance:**
- Single: A → B
- Multiple: A, B → C
- Multilevel: A → B → C`,
        codeExample: `class Shape:
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
        import math
        return math.pi * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height, color="green"):
        super().__init__(color)
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

# Usage
shapes = [Circle(5), Rectangle(4, 6), Circle(3, "red")]
for s in shapes:
    print(s.describe())

# isinstance check
c = Circle(10)
print(f"\\nIs Shape: {isinstance(c, Shape)}")
print(f"Is Circle: {isinstance(c, Circle)}")`,
        practiceCode: `class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer = 0

    def drive(self, miles):
        self.odometer += miles
        return f"Drove {miles} miles"

    def __str__(self):
        return f"{self.year} {self.make} {self.model} ({self.odometer} mi)"

class ElectricCar(Vehicle):
    def __init__(self, make, model, year, battery_kwh):
        super().__init__(make, model, year)
        self.battery = battery_kwh
        self.charge_level = 100

    def charge(self):
        self.charge_level = 100
        return "Fully charged!"

    def drive(self, miles):
        result = super().drive(miles)
        self.charge_level -= miles * 0.3
        return f"{result} (Battery: {max(0, self.charge_level):.0f}%)"

car = ElectricCar("Tesla", "Model 3", 2024, 75)
print(car)
print(car.drive(50))
print(car.drive(100))
print(car.charge())`,
        practiceTask: "Create a Vehicle class and extend it with ElectricCar that adds battery tracking and charging.",
        quiz: [
          {
            question: "What does super().__init__() do?",
            options: ["Creates new class", "Calls parent constructor", "Destroys object", "Nothing"],
            correctIndex: 1,
            explanation: "super().__init__() calls the parent class's constructor.",
          },
          {
            question: "Can a child class override a parent method?",
            options: ["No, never", "Yes, by redefining it", "Only with permission", "Only static methods"],
            correctIndex: 1,
            explanation: "Child classes override parent methods by redefining them.",
          },
        ],
      },
      {
        slug: "oop-attributes",
        title: "Attributes",
        description: "Class and instance attributes.",
        content: `**Attributes** are named values attached to a class or its objects.

**Two kinds:**
- **Class attribute** - defined directly in the class body, shared by ALL instances
- **Instance attribute** - set on \`self\` inside methods, unique to each object

\`\`\`python
class Employee:
    company = "Acme"    # class attribute (shared)

    def __init__(self, name):
        self.name = name   # instance attribute (per object)
\`\`\`

**Attribute rules:**
- Read/write with dot notation: \`obj.name\`, \`obj.name = "Annie"\`
- Deleting: \`del obj.name\`
- If you assign to an attribute on an object, Python creates an instance attribute that shadows the class attribute
- \`obj.attr\` lookup order: instance → class → parent classes
- \`obj.__dict__\` shows the instance's own attributes
- Get/set dynamically with \`getattr(obj, name)\`, \`setattr(obj, name, value)\`, \`hasattr(obj, name)\``,
        codeExample: `class Counter:
    total = 0   # class attribute (shared)

    def __init__(self, label):
        self.label = label   # instance attribute

    def bump(self):
        Counter.total += 1


a = Counter("A")
b = Counter("B")

print(a.total, b.total)   # both see the shared class attribute
Counter.total = 10
print(a.total)            # 10

a.label = "changed"       # instance attribute, only affects a
print(a.label, b.label)

print(a.__dict__)
print(Counter.__dict__)   # 'total' lives on the class`,
        practiceCode: `# Practice: class vs instance attributes
class Player:
    game = "Python Arena"   # class attribute

    def __init__(self, name, hp):
        self.name = name    # instance attributes
        self.hp = hp


p1 = Player("Hero", 100)
p2 = Player("Mage", 80)

print(p1.game, p2.game)     # shared class attribute
print(p1.name, p1.hp)

p1.game = "Other Game"      # creates an INSTANCE attribute
print(p1.game)
print(p2.game)              # class attribute unchanged
print(Player.game)`,
        practiceTask: "Create a Player class with a class attribute 'game' and instance attributes name/hp, then demonstrate how assigning to one instance shadows the class attribute.",
        quiz: [
          {
            question: "What is a class attribute?",
            options: ["Unique per object", "Shared by all instances", "Always private", "A method"],
            correctIndex: 1,
            explanation: "A class attribute is defined on the class and shared by all instances.",
          },
          {
            question: "Where do instance attributes usually get created?",
            options: ["Class body", "__init__ via self.attr", "No methods", "At import time"],
            correctIndex: 1,
            explanation: "Instance attributes are typically created inside __init__ using self.",
          },
        ],
      },
      {
        slug: "oop-methods",
        title: "Methods",
        description: "Functions defined inside a class.",
        content: `A **method** is a function that belongs to a class. It is called on an object (or class) using dot notation.

**Three kinds of methods:**
- **Instance method** - first argument \`self\` (the object); can access object state
- **Class method** - decorated with \`@classmethod\`, first argument \`cls\` (the class)
- **Static method** - decorated with \`@staticmethod\`, no \`self\` or \`cls\`

\`\`\`python
class Math:
    @staticmethod
    def add(a, b):
        return a + b

    @classmethod
    def create(cls):
        return cls()
\`\`\`

**Key method rules:**
- Instance methods need \`self\` as the first parameter
- You call methods with parentheses: \`obj.method()\`
- \`obj.method()\` is shorthand for \`ClassName.method(obj)\`
- \`@classmethod\` receives the class, not the instance
- \`@staticmethod\` behaves like a plain function but lives in the class namespace
- Methods can read \`inspect\`? No - they simply use \`self\` to touch attributes`,
        codeExample: `class Greeter:
    @classmethod
    def info(cls):
        return f"Class: {cls.__name__}"

    @staticmethod
    def say_hello(name):
        return f"Hello, {name}!"

    def greet(self, name):   # instance method
        return f"{self.caller} says hi to {name}"


g = Greeter()
g.caller = "Host"          # dynamic attribute

print(g.greet("Annie"))
print(Greeter.greet(g, "Annie"))   # same as g.greet(...)
print(Greeter.say_hello("Bob"))    # static method
print(Greeter.info())              # class method`,
        practiceCode: `# Practice: three kinds of methods
class Calculator:
    @staticmethod
    def add(a, b):
        return a + b

    def multiply(self, a, b):
        return a * b

    @classmethod
    def describe(cls):
        return f"I am a {cls.__name__}"


print(Calculator.add(2, 3))        # static: no self/cls
print(Calculator.describe())       # class: gets cls

c = Calculator()
print(c.multiply(4, 5))            # instance: gets self
print(c.add(10, 20))               # static works on instance too`,
        practiceTask: "Create a Calculator with a static add method, a class method describe, and an instance multiply method, then call all three.",
        quiz: [
          {
            question: "What decorator creates a class method?",
            options: ["@staticmethod", "@classmethod", "@property", "@method"],
            correctIndex: 1,
            explanation: "@classmethod makes a method that receives the class as cls.",
          },
          {
            question: "What is the first parameter of an instance method?",
            options: ["cls", "self", "instance", "this"],
            correctIndex: 1,
            explanation: "Instance methods receive self, the object itself.",
          },
        ],
      },
      {
        slug: "oop-self-cls",
        title: "self, cls Keywords",
        description: "self binds to instances, cls to the class.",
        content: `\`self\` and \`cls\` are conventional names for the first parameters of methods.

- **\`self\`** - used in instance methods. It refers to the CURRENT object that called the method. It lets the method read/write that object's attributes.
- **\`cls\`** - used in class methods (\`@classmethod\`). It refers to the CLASS itself, so the method can access class attributes or create new instances.

\`\`\`python
class V:
    count = 0
    def __init__(self):
        self.x = 1          # self = the new object
    @classmethod
    def make(cls):          # cls = the class V
        return cls()
    @staticmethod
    def helper():
        pass                # neither self nor cls
\`\`\`

**Rules:**
- \`self\` and \`cls\` are just names; Python passes the object/class automatically
- The name \`self\` is convention, but always use it for readability
- Calling \`obj.method()\` passes obj as \`self\`; calling \`Class.method(obj)\` works too
- \`cls.method()\` can create instances with \`cls()\` (useful in factories)
- A method that needs neither is a \`@staticmethod\``,
        codeExample: `class Account:
    total = 0

    def __init__(self, owner, amount=0):
        self.owner = owner       # self = this object
        self.amount = amount
        Account.total += amount

    def add(self, money):        # self = the account to change
        self.amount += money

    @classmethod
    def default(cls):            # cls = Account
        return cls("New Account")


a = Account("Alice", 100)
a.default()                      # creates another Account via cls()
a.add(50)
print(a.owner, a.amount)
print(Account.total)

b = Account("Bob")
print(Account.add(b, 10))        # call with explicit instance
print(b.amount)`,
        practiceCode: `# Practice: self and cls
class Robot:
    count = 0

    def __init__(self, name):
        self.name = name         # self: this robot
        Robot.count += 1

    def rename(self, new_name):  # self: the robot to change
        self.name = new_name

    @classmethod
    def total_robots(cls):       # cls: the Robot class
        return cls.count

    @classmethod
    def create_robot(cls, name):  # cls can make instances
        return cls(name)


r1 = Robot("R2D2")
r2 = Robot.create_robot("C3PO")
r2.rename("C-3PO")

print(r1.name)
print(r2.name)
print(Robot.total_robots())
print(Robot.count)`,
        practiceTask: "Create a Robot class using self for instance work and cls for class methods that count robots and create new robots.",
        quiz: [
          {
            question: "What does self refer to inside an instance method?",
            options: ["The class", "The current object", "The module", "Nothing"],
            correctIndex: 1,
            explanation: "self refers to the current instance (object) that called the method.",
          },
          {
            question: "What does cls refer to inside a @classmethod?",
            options: ["The instance", "The class itself", "The parent", "The function"],
            correctIndex: 1,
            explanation: "cls refers to the class itself, not an instance.",
          },
        ],
      },
      {
        slug: "oop-special-methods",
        title: "__init__, __new__, __del__ Methods",
        description: "The object lifecycle: creation, initialization, destruction.",
        content: `These dunder (double underscore) methods control an object's lifecycle.

**\`__init__(self, ...)\`** - the initializer. Called right after an object is created, it sets up instance attributes.

**\`__new__(cls, ...)\`** - the allocator. Called BEFORE \`__init__\` to create and return the instance. Rarely overridden; used for singletons or immutable types.

**\`__del__(self)\`** - the destructor. Called when the object is about to be garbage collected (or the process ends).

\`\`\`python
class Demo:
    def __new__(cls, *a, **kw):
        obj = super().__new__(cls)   # allocate the object
        return obj

    def __init__(self, x):
        self.x = x

    def __del__(self):
        print("object destroyed")
\`\`\`

**Lifecycle order when you call \`Demo(5)\`:**
1. \`__new__\` runs → creates the instance
2. \`__init__\` runs → initializes it
3. Object is used
4. \`__del__\` runs → cleanup before destruction

**Notes:**
- You almost never write \`__new__\`; let it default
- \`__del__\` is not guaranteed to run immediately and is unreliable for critical cleanup
- \`del obj\` removes the reference (may trigger \`__del__\` when refcount hits zero)`,
        codeExample: `class Widget:
    def __new__(cls, name):
        obj = super().__new__(cls)   # step 1: allocate
        obj.created = name
        return obj

    def __init__(self, name):
        self.name = name             # step 2: initialize

    def __del__(self):
        print(f"Cleaning up {self.name}")


w = Widget("gear")
print(w.name)
print(w.created)

del w               # drops the reference
print("done")`,
        practiceCode: `# Practice: lifecycle methods
class Timer:
    def __new__(cls, label):
        obj = super().__new__(cls)
        obj.label = label
        return obj

    def __init__(self, label):
        self.timer = label

    def __del__(self):
        print(f"{self.label} destroyed")


t = Timer("app")
print(t.timer)

del t
print("script ending")`,
        practiceTask: "Create a Timer class using __new__ to set an attribute, __init__ to set another, and __del__ to print cleanup. Delete the object and observe the order.",
        quiz: [
          {
            question: "Which method runs first when creating an object?",
            options: ["__init__", "__new__", "__del__", "__str__"],
            correctIndex: 1,
            explanation: "__new__ allocates the instance and runs before __init__.",
          },
          {
            question: "What does __del__ do?",
            options: ["Creates the object", "Initializes attributes", "Cleans up before destruction", "Returns the instance"],
            correctIndex: 2,
            explanation: "__del__ is the destructor called before the object is collected.",
          },
        ],
      },
      {
        slug: "oop-polymorphism",
        title: "Polymorphism",
        description: "One interface, many implementations.",
        content: `**Polymorphism** means "many forms": the same function/method works on objects of different classes as long as they expose the same interface.

**How it shows up in Python:**
- **Duck typing** - if it walks like a duck and quacks like a duck, treat it as a duck
- **Method overriding** - child classes replace parent methods while keeping the same name
- **Built-in polymorphism** - \`len()\` works on strings, lists, dicts because they all implement \`__len__\`

\`\`\`python
class Dog:
    def speak(self):
        return "Woof"

class Cat:
    def speak(self):
        return "Meow"

for animal in [Dog(), Cat()]:
    print(animal.speak())   # same call, different behavior
\`\`\`

**Rules:**
- No need for explicit interfaces; objects just need compatible methods
- \`isinstance()\` still works across a common base class
- Overriding must keep the same method name; arguments are flexible
- \`super()\` lets a child call the parent version`,
        codeExample: `class Shape:
    def area(self):
        return 0

class Square(Shape):
    def __init__(self, side):
        self.side = side
    def area(self):                 # override
        return self.side ** 2

class Triangle(Shape):
    def __init__(self, b, h):
        self.b, self.h = b, h
    def area(self):                 # override
        return 0.5 * self.b * self.h


shapes = [Square(4), Triangle(3, 6), Shape()]
for s in shapes:
    print(type(s).__name__, s.area())

print(sum(s.area() for s in shapes))`,
        practiceCode: `# Practice: polymorphism
class EBook:
    def open_page(self):
        return "Opened digital page"

class PaperBook:
    def open_page(self):
        return "Opened paper page"


def open_any(book):
    print(book.open_page())   # duck typing


open_any(EBook())
open_any(PaperBook())

# len() polymorphism
for x in ["hey", [1, 2, 3], {"a": 1, "b": 2}]:
    print(type(x).__name__, len(x))`,
        practiceTask: "Create EBook and PaperBook classes with an open_page method each, call them through one generic function, and show how len() works on different types.",
        quiz: [
          {
            question: "What is polymorphism?",
            options: ["Many classes", "Same interface, many behaviors", "One class", "No methods"],
            correctIndex: 1,
            explanation: "Polymorphism lets different classes respond to the same method call.",
          },
          {
            question: "What is duck typing?",
            options: ["A design pattern", "Behavior matters over type", "Only for birds", "Requires inheritance"],
            correctIndex: 1,
            explanation: "Duck typing: an object's suitability depends on its methods, not its declared type.",
          },
        ],
      },
      {
        slug: "oop-encapsulation",
        title: "Encapsulation",
        description: "Hiding internal state with private members.",
        content: `**Encapsulation** bundles data with the methods that operate on it and hides internal details from outside access.

**Private attribute conventions:**
- \`_name\` - single underscore: "protected", a convention that means internal
- \`__name\` - double underscore: name mangling to \`_ClassName__name\`, strongly private

\`\`\`python
class Bank:
    def __init__(self):
        self.__balance = 0       # private by convention

    def deposit(self, amt):
        self.__balance += amt

balance = Bank()
balance.deposit(100)
print(balance.__balance)             # AttributeError
\`\`\`

**Controlled access with properties:**
\`\`\`python
@property
def balance(self):
    return self.__balance

@balance.setter
def balance(self, value):
    if value >= 0:
        self.__balance = value
\`\`\`

**Why encapsulate:**
- Protect invariants (e.g., balance can't go negative)
- Hide implementation so internals can change freely
- Python is about convention, not enforcement - \`_name\` is a signal, not a wall`,
        codeExample: `class Account:
    def __init__(self, owner):
        self.owner = owner
        self.__balance = 0      # hidden

    def deposit(self, amt):
        if amt > 0:
            self.__balance += amt
            return True
        return False

    @property
    def balance(self):
        return self.__balance

    @balance.setter
    def balance(self, amount):   # controlled writes
        if amount >= 0:
            self.__balance = amount
        else:
            raise ValueError("No negative balances")


a = Account("Alice")
a.deposit(100)

print(a.balance)          # via property
print(a._Account__balance)  # mangled name still reachable
print(a.__dict__)`,
        practiceCode: `# Practice: encapsulation
class Vault:
    def __init__(self):
        self._code = "1234"      # protected by convention
        self.__pin = "9999"      # name-mangled

    @property
    def pin(self):
        return "***"

    def check_pin(self, attempt):
        return attempt == self.__pin


v = Vault()
print(v._code)               # accessible but "internal"
print(v.pin)                 # property hides it
print(v.check_pin("9999"))
print(v._Vault__pin)         # mangled name
print(v.__dict__)`,
        practiceTask: "Create a Vault class with a protected _code and private __pin, a property that hides the pin, and a check_pin method to validate attempts.",
        quiz: [
          {
            question: "What does a double underscore before an attribute name do?",
            options: ["Deletes it", "Name mangles it", "Makes it a method", "Nothing"],
            correctIndex: 1,
            explanation: "__name triggers name mangling to _ClassName__name, making it effectively private.",
          },
          {
            question: "Which decorator exposes a private attribute read-only?",
            options: ["@classmethod", "@property", "@static", "@getter"],
            correctIndex: 1,
            explanation: "@property wraps a method into attribute-style read access.",
          },
        ],
      },
      {
        slug: "oop-abstraction",
        title: "Abstraction",
        description: "Hiding implementation details with ABCs.",
        content: `**Abstraction** means exposing only the essential interface and hiding complex details. In OOP, Python supports this through **Abstract Base Classes (ABCs)**.

An abstract class defines the interface (method signatures) that subclasses must implement. You cannot instantiate an abstract class directly.

\`\`\`python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def sound(self):
        pass

class Dog(Animal):
    def sound(self):        # must implement
        return "Woof"

# Animal() raises TypeError; Dog() works
\`\`\`

**Rules:**
- Inherit from \`ABC\` (or pass \`metaclass=ABCMeta\`)
- Mark required methods with \`@abstractmethod\`
- Any subclass must implement all abstract methods to be instantiable
- Abstract classes can still contain normal concrete methods
- \`abc.abstractmethod\` forces a common contract on all subclasses`,
        codeExample: `from abc import ABC, abstractmethod

class Payment(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

    def receipt(self, amount):     # concrete method
        return f"Paid {amount}"


class Card(Payment):
    def pay(self, amount):
        return f"Card charged {amount}"


class Cash(Payment):
    def pay(self, amount):
        return f"Cash handed over {amount}"


for p in [Card(), Cash()]:        # abstract temp; no Payment()
    print(p.pay(100))
    print(p.receipt(100))`,
        practiceCode: `# Practice: abstraction
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def move(self):
        pass


class Car(Vehicle):
    def move(self):
        return "Driving on road"


class Boat(Vehicle):
    def move(self):
        return "Sailing on water"


# Vehicle()  -> TypeError: can't instantiate abstract class
for v in [Car(), Boat()]:
    print(type(v).__name__, v.move())`,
        practiceTask: "Create an abstract Vehicle class with an abstract move method, then implement Car and Boat subclasses and call move() on both.",
        quiz: [
          {
            question: "Can you instantiate an abstract class directly?",
            options: ["Yes", "No", "Always", "Only with args"],
            correctIndex: 1,
            explanation: "Abstract classes cannot be instantiated; they only define the interface.",
          },
          {
            question: "What decorator marks a method as abstract?",
            options: ["@staticmethod", "@abstractmethod", "@classmethod", "@property"],
            correctIndex: 1,
            explanation: "@abstractmethod from the abc module declares a required method.",
          },
        ],
      },
    ],
  },
  {
    slug: "error-handling",
    title: "Error Handling",
    icon: "alert-triangle",
    description: "Try/except and exception handling.",
    level: "intermediate",
    lessons: [
      {
        slug: "try-except",
        title: "Try / Except",
        description: "Handling errors gracefully.",
        content: `**Try/Except** catches and handles errors.

\`\`\`python
try:
    # code that might fail
    result = 10 / 0
except ZeroDivisionError:
    # handles specific error
    print("Cannot divide by zero!")
except ValueError as e:
    # catches ValueError, stores error in e
    print(f"Bad value: {e}")
except Exception as e:
    # catches all other errors
    print(f"Unexpected error: {e}")
else:
    # runs if NO error occurred
    print("Success!")
finally:
    # ALWAYS runs
    print("Cleanup code")
\`\`\`

**Common exceptions:**
\`\`\`
ValueError      - Wrong value type
TypeError       - Wrong operation for type
KeyError        - Dictionary key not found
IndexError      - List index out of range
FileNotFoundError - File doesn't exist
ZeroDivisionError - Division by zero
AttributeError  - Attribute doesn't exist
\`\`\``,
        codeExample: `# Basic try/except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")

# Handling multiple exceptions
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Division by zero"
    except TypeError:
        return "Error: Invalid types"

print(safe_divide(10, 3))
print(safe_divide(10, 0))
print(safe_divide("10", 3))

# Raising exceptions
def set_age(age):
    if not isinstance(age, int) or age < 0 or age > 150:
        raise ValueError(f"Invalid age: {age}")
    return f"Age set to {age}"

try:
    print(set_age(25))
    print(set_age(-5))
except ValueError as e:
    print(f"Error: {e}")

# Practical example
def read_number(text):
    try:
        return float(text)
    except ValueError:
        print(f"  '{text}' is not a valid number")
        return None

values = ["3.14", "abc", "42", "xyz"]
for v in values:
    result = read_number(v)
    if result is not None:
        print(f"  Converted: {result}")`,
        practiceCode: `# Error handling practice
def divide_list(numbers, divisor):
    results = []
    for n in numbers:
        try:
            results.append(n / divisor)
        except ZeroDivisionError:
            results.append(float('inf'))
            print(f"  {n} / 0 = inf")
        except TypeError:
            results.append(None)
            print(f"  Cannot divide {type(n).__name__}")
    return results

print("Dividing [10, 20, 30] by 3:")
print(f"  {divide_list([10, 20, 30], 3)}")

print("\\nDividing [10, 20, 30] by 0:")
print(f"  {divide_list([10, 20, 30], 0)}")

# Context manager pattern
def process_file_data(data_dict):
    for key, value in data_dict.items():
        try:
            result = 100 / value
            print(f"  {key}: {result:.1f}")
        except (ZeroDivisionError, TypeError) as e:
            print(f"  {key}: Error - {type(e).__name__}")

data = {"a": 10, "b": 0, "c": 5, "d": "x"}
print("\\nProcessing:")
process_file_data(data)`,
        practiceTask: "Write a safe division function that handles ZeroDivisionError and TypeError. Process a mixed dictionary of values.",
        quiz: [
          {
            question: "When does the 'else' block in try/except run?",
            options: ["Always", "Only on error", "Only if no error", "Never"],
            correctIndex: 2,
            explanation: "The else block runs only if no exception was raised.",
          },
          {
            question: "When does 'finally' run?",
            options: ["Only on error", "Only if no error", "Always", "Never"],
            correctIndex: 2,
            explanation: "finally always runs, whether or not an exception occurred.",
          },
        ],
      },
    ],
  },
  {
    slug: "file-handling",
    title: "File Handling",
    icon: "file-text",
    description: "Reading and writing files.",
    level: "intermediate",
    lessons: [
      {
        slug: "file-operations",
        title: "File Operations",
        description: "Working with files in Python.",
        content: `**File modes:**
\`\`\`
"r"   Read (default)
"w"   Write (overwrites)
"a"   Append
"x"   Create (error if exists)
"r+"  Read and write
\`\`\`

**Best practice - use 'with':**
\`\`\`python
with open("file.txt", "r") as f:
    content = f.read()
# File automatically closed
\`\`\`

**Reading methods:**
\`\`\`python
f.read()          # Entire file as string
f.readline()      # One line
f.readlines()     # List of lines
\`\`\`

**Writing:**
\`\`\`python
with open("output.txt", "w") as f:
    f.write("Hello\\n")
    f.writelines(["Line 1\\n", "Line 2\\n"])
\`\`\``,
        codeExample: `import json

# Writing a text file
with open("demo.txt", "w") as f:
    f.write("Line 1: Hello\\n")
    f.write("Line 2: World\\n")
    f.write("Line 3: Python\\n")

# Reading a file
with open("demo.txt", "r") as f:
    content = f.read()
    print(content)

# Reading line by line
with open("demo.txt", "r") as f:
    for i, line in enumerate(f, 1):
        print(f"Line {i}: {line.strip()}")

# Working with JSON
data = {
    "students": [
        {"name": "Alice", "grade": 95},
        {"name": "Bob", "grade": 87}
    ]
}

with open("students.json", "w") as f:
    json.dump(data, f, indent=2)

with open("students.json", "r") as f:
    loaded = json.load(f)
    for s in loaded["students"]:
        print(f"{s['name']}: {s['grade']}")`,
        practiceCode: `# File handling practice
import os

# Create sample data
lines = [
    "Python is great",
    "I love coding",
    "Practice makes perfect",
    "Keep learning",
    "Never give up"
]

# Write with line numbers
with open("numbered.txt", "w") as f:
    for i, line in enumerate(lines, 1):
        f.write(f"{i}. {line}\\n")

# Read and count
with open("numbered.txt", "r") as f:
    content = f.read()
    words = content.split()
    lines_list = content.strip().split("\\n")

print(f"Words: {len(words)}")
print(f"Lines: {len(lines_list)}")
print(f"Characters: {len(content)}")

# Search for a word
search = "Python"
count = content.lower().count(search.lower())
print(f"\\n'{search}' found {count} time(s)")

# File info
size = os.path.getsize("numbered.txt")
print(f"File size: {size} bytes")`,
        practiceTask: "Write 5 lines to a file, read them back, count words/lines/characters, and search for a specific word.",
        quiz: [
          {
            question: "Why use 'with' when opening files?",
            options: ["It's faster", "Auto-closes the file", "Required syntax", "None of the above"],
            correctIndex: 1,
            explanation: "'with' ensures the file is automatically closed, even if an error occurs.",
          },
          {
            question: "What mode overwrites an existing file?",
            options: ['"r"', '"a"', '"w"', '"x"'],
            correctIndex: 2,
            explanation: '"w" opens for writing and truncates (overwrites) the file.',
          },
        ],
      },
    ],
  },
  {
    slug: "modules",
    title: "Python Modules",
    icon: "puzzle",
    description: "Importing and using modules.",
    level: "intermediate",
    lessons: [
      {
        slug: "importing-modules",
        title: "Importing Modules",
        description: "Using built-in and external modules.",
        content: `**Modules** are Python files containing functions/classes.

**Import methods:**
\`\`\`python
import math
print(math.sqrt(16))

from math import sqrt, pi
print(sqrt(16))

from math import *  # Import all (avoid this)
print(sqrt(16))

import math as m    # Alias
print(m.sqrt(16))
\`\`\`

**Common built-in modules:**
\`\`\`
math      - Math functions
random    - Random numbers
datetime  - Date and time
os        - Operating system
json      - JSON handling
re        - Regular expressions
collections - Special containers
functools - Function utilities
itertools - Iteration tools
\`\`\`

**Creating your own:**
\`\`\`python
# mymodule.py
def greet(name):
    return f"Hello, {name}!"

# main.py
from mymodule import greet
\`\`\``,
        codeExample: `import math
import random
from datetime import datetime, timedelta

# Math module
print("Math functions:")
print(f"  sqrt(144) = {math.sqrt(144)}")
print(f"  pi = {math.pi:.6f}")
print(f"  ceil(3.2) = {math.ceil(3.2)}")
print(f"  floor(3.8) = {math.floor(3.8)}")

# Random module
print("\\nRandom:")
print(f"  randint(1,10) = {random.randint(1,10)}")
print(f"  choice(['a','b','c']) = {random.choice(['a','b','c'])}")
print(f"  random() = {random.random():.4f}")

# Datetime module
now = datetime.now()
print(f"\\nDatetime:")
print(f"  Now: {now}")
print(f"  Date: {now.strftime('%Y-%m-%d')}")
print(f"  Time: {now.strftime('%H:%M:%S')}")
tomorrow = now + timedelta(days=1)
print(f"  Tomorrow: {tomorrow.strftime('%A')}")`,
        practiceCode: `import random
from collections import Counter

# Generate random data
scores = [random.randint(40, 100) for _ in range(20)]
print(f"Random scores: {scores}")

# Analyze with Counter
score_counts = Counter(scores)
print(f"\\nMost common: {score_counts.most_common(3)}")

# Statistics
import statistics
print(f"\\nMean: {statistics.mean(scores):.1f}")
print(f"Median: {statistics.median(scores)}")
print(f"Stdev: {statistics.stdev(scores):.2f}")

# Simulate dice rolls
dice_rolls = [random.randint(1, 6) for _ in range(1000)]
dice_counts = Counter(dice_rolls)
print(f"\\nDice rolls (1000):")
for face in range(1, 7):
    bar = "#" * (dice_counts[face] // 5)
    print(f"  {face}: {bar} ({dice_counts[face]})")`,
        practiceTask: "Generate 20 random scores (40-100), analyze them with Counter and statistics, and simulate 1000 dice rolls.",
        quiz: [
          {
            question: "What's the difference between 'import math' and 'from math import sqrt'?",
            options: ["Same thing", "First uses m.sqrt(), second uses sqrt()", "First is faster", "Second imports all"],
            correctIndex: 1,
            explanation: "'import math' requires math.sqrt(), 'from math import sqrt' allows sqrt() directly.",
          },
          {
            question: "Which module handles date and time?",
            options: ["time", "datetime", "calendar", "Both time and datetime"],
            correctIndex: 3,
            explanation: "Both 'time' and 'datetime' modules handle dates and times, but datetime is more feature-rich.",
          },
        ],
      },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getLessonBySlug(topicSlug: string, lessonSlug: string): Lesson | undefined {
  const topic = getTopicBySlug(topicSlug);
  return topic?.lessons.find((l) => l.slug === lessonSlug);
}

export function getTotalLessons(): number {
  return topics.reduce((acc, t) => acc + t.lessons.length, 0);
}

export function getNextLesson(currentTopicSlug: string, currentLessonSlug: string): { topicSlug: string; lessonSlug: string } | null {
  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    for (let j = 0; j < topic.lessons.length; j++) {
      if (topic.slug === currentTopicSlug && topic.lessons[j].slug === currentLessonSlug) {
        if (j + 1 < topic.lessons.length) {
          return { topicSlug: topic.slug, lessonSlug: topic.lessons[j + 1].slug };
        }
        if (i + 1 < topics.length) {
          return { topicSlug: topics[i + 1].slug, lessonSlug: topics[i + 1].lessons[0].slug };
        }
        return null;
      }
    }
  }
  return null;
}
