// ─── Beginner Lessons: Comprehensive Python Foundation ──────────────────────
// Deep explanations with 3+ examples per concept

export const beginnerChapters = [
  { id: 1, name: 'Understanding Code', emoji: '🧠', color: '#10b981', description: 'What programming really is' },
  { id: 2, name: 'Strings', emoji: '📝', color: '#3b82f6', description: 'Working with text' },
  { id: 3, name: 'Numbers', emoji: '🔢', color: '#8b5cf6', description: 'Integers and decimals' },
  { id: 4, name: 'Booleans', emoji: '⚡', color: '#f59e0b', description: 'True and False logic' },
  { id: 5, name: 'Variables', emoji: '📦', color: '#ef4444', description: 'Storing and naming data' },
  { id: 6, name: 'Lists', emoji: '📋', color: '#06b6d4', description: 'Collections of items' },
  { id: 7, name: 'Dictionaries', emoji: '🗂️', color: '#ec4899', description: 'Key-value pairs' },
  { id: 8, name: 'Conditionals', emoji: '🔀', color: '#14b8a6', description: 'Making decisions' },
  { id: 9, name: 'Loops', emoji: '🔄', color: '#f97316', description: 'Repeating actions' },
  { id: 10, name: 'Functions', emoji: '⚙️', color: '#6366f1', description: 'Reusable code blocks' },
];

export const beginnerLessons = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CHAPTER 1: Understanding Code
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 1,
    chapterId: 1,
    title: 'What is Programming?',
    xp: 15,
    bookContent: `
# What is Programming?

Programming is the art of giving **precise instructions** to a computer. Think of it like writing a recipe — but for a cook who takes everything 100% literally.

## Why Computers Need Instructions

Computers are incredibly fast but have **zero intuition**. They cannot:
- Guess what you mean
- Fill in missing details
- Make assumptions

If you tell a human "make me a sandwich," they understand. If you tell a computer the same thing, it has no idea what a sandwich is, where bread is, or what "make" means.

## What is Code?

Code is simply **text written in a specific language** that computers can understand. Just like humans have English, Spanish, and Japanese — computers have Python, JavaScript, and C++.

Python looks like this:
\`\`\`python
print("Hello, World!")
\`\`\`

This single line tells the computer: "Display the text 'Hello, World!' on the screen."

## Example 1: A Simple Instruction

\`\`\`python
print("Welcome to Python!")
\`\`\`

**What happens:**
1. Python sees the word \`print\` — this is a **command** (also called a function)
2. It looks inside the parentheses \`()\` to see WHAT to print
3. It sees \`"Welcome to Python!"\` — the quotes mark this as text
4. It displays that text on screen

**Output:** \`Welcome to Python!\`

## Example 2: Multiple Instructions

\`\`\`python
print("Line 1")
print("Line 2")
print("Line 3")
\`\`\`

**What happens:**
- Python reads **top to bottom**, one line at a time
- First it prints "Line 1"
- Then it prints "Line 2"
- Finally it prints "Line 3"

**Output:**
\`\`\`
Line 1
Line 2
Line 3
\`\`\`

## Example 3: Order Matters

\`\`\`python
print("I wake up")
print("I eat breakfast")
print("I go to work")
\`\`\`

If you swap lines 2 and 3, the story changes! Code runs in **exact order**.

## Key Takeaways

1. **Code is instructions** — written in a language computers understand
2. **Computers are literal** — they do exactly what you say, nothing more
3. **Order matters** — code runs from top to bottom
4. **\`print()\`** — displays text on screen (your first Python command!)
    `,
    exerciseTitle: 'Your First Program',
    exerciseDescription: 'Use print() to display: Hello, Python!',
    initialCode: '# Type your code below\n',
    expectedOutput: 'Hello, Python!',
    hint: 'print("Hello, Python!")',
    successMessage: 'You wrote your first line of code!'
  },

  {
    id: 2,
    chapterId: 1,
    title: 'How Python Reads Your Code',
    xp: 15,
    bookContent: `
# How Python Reads Your Code

Understanding HOW Python processes your code helps you write better programs and fix errors faster.

## The Execution Process

When you click "Run", Python does this:

1. **Reads** your code from top to bottom
2. **Checks** for syntax errors (typos, missing symbols)
3. **Executes** each line one at a time
4. **Stops** if it encounters an error

## Example 1: Line-by-Line Execution

\`\`\`python
print("Step 1: Starting")
print("Step 2: Processing")
print("Step 3: Done!")
\`\`\`

Python executes this like reading a book:
- Read line 1 → execute → show "Step 1: Starting"
- Read line 2 → execute → show "Step 2: Processing"
- Read line 3 → execute → show "Step 3: Done!"

Each line **completely finishes** before the next one starts.

## Example 2: What Errors Look Like

\`\`\`python
print("This works fine")
prin("This has a typo")    # 'print' is misspelled!
print("This never runs")
\`\`\`

**What happens:**
1. Line 1 runs successfully
2. Line 2 has an error — Python stops immediately
3. Line 3 never runs at all

Python shows an error message telling you what went wrong and which line.

## Example 3: Blank Lines Are Ignored

\`\`\`python
print("First")

print("Second")


print("Third")
\`\`\`

**Output:**
\`\`\`
First
Second
Third
\`\`\`

Blank lines help YOU organize code — Python skips them completely.

## Comments: Notes for Humans

Lines starting with \`#\` are **comments** — Python ignores them:

\`\`\`python
# This is a comment - Python skips it
print("This runs")  # Comments can go here too
\`\`\`

Use comments to explain your code to yourself and others.

## Key Takeaways

1. Python reads **top to bottom**, one line at a time
2. Each line **finishes** before the next starts
3. Errors **stop** execution immediately
4. Blank lines are **ignored** (use them to organize!)
5. Lines starting with \`#\` are **comments** (notes for humans)
    `,
    exerciseTitle: 'Print Three Lines',
    exerciseDescription: 'Print "One", "Two", "Three" on separate lines',
    initialCode: '# Print three words on three lines\n',
    expectedOutput: 'One\nTwo\nThree',
    hint: 'print("One")\nprint("Two")\nprint("Three")',
    successMessage: 'You understand code execution order!'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAPTER 2: Strings
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 3,
    chapterId: 2,
    title: 'What is a String?',
    xp: 20,
    bookContent: `
# What is a String?

A **string** is Python's way of storing **text**. Any letters, words, sentences, or even emojis can be stored as a string.

## The Definition

> A string is a **sequence of characters** enclosed in quotes.

Characters include: letters (a-z, A-Z), numbers (0-9), symbols (!@#$), spaces, and emojis.

## How to Create a String

Wrap your text in quotes — single \`'\` or double \`"\`:

\`\`\`python
"Hello, World!"     # Double quotes
'Hello, World!'     # Single quotes - exactly the same!
\`\`\`

Both work identically. Most programmers use double quotes.

## Example 1: Different Types of Strings

\`\`\`python
# A single word
print("Python")

# A sentence
print("I am learning to code!")

# Numbers AS TEXT (not for math!)
print("12345")

# Symbols and spaces
print("Hello @ World # 2024!")

# Emojis work too
print("I love coding! 🐍")
\`\`\`

**Key insight:** The string \`"12345"\` is TEXT, not a number. You can't do math with it.

## Example 2: Empty and Whitespace Strings

\`\`\`python
# Empty string - contains nothing
empty = ""
print(empty)    # Prints a blank line

# Whitespace string - contains only spaces
spaces = "   "
print(spaces)   # Prints 3 spaces (invisible but there!)

# String with just a newline character
newline = "\\n"
print(newline)  # Prints a blank line
\`\`\`

Empty strings are useful as "starting points" when building text.

## Example 3: Quotes Inside Strings

What if your text contains quotes? Use the OTHER type:

\`\`\`python
# Use double quotes to contain single quotes
print("It's a beautiful day!")

# Use single quotes to contain double quotes
print('She said "Hello!" to me.')

# Or use backslash to "escape" quotes
print("She said \\"Wow!\\" loudly.")
\`\`\`

**Output:**
\`\`\`
It's a beautiful day!
She said "Hello!" to me.
She said "Wow!" loudly.
\`\`\`

## Why Strings Matter

Strings are everywhere in programming:
- User names: \`"Alice"\`
- Messages: \`"Welcome back!"\`
- File paths: \`"/home/user/documents"\`
- Website URLs: \`"https://python.org"\`
- Data from forms, files, databases — mostly strings!

## Key Takeaways

1. **Strings store text** — any characters in quotes
2. **Single or double quotes** — both work the same
3. **"123" is NOT a number** — it's text that looks like a number
4. **Empty strings exist** — \`""\` contains zero characters
5. **Mix quote types** to include quotes in your text
    `,
    exerciseTitle: 'Create a Greeting',
    exerciseDescription: 'Print the string: Welcome to Python!',
    initialCode: '# Print the welcome message\n',
    expectedOutput: 'Welcome to Python!',
    hint: 'print("Welcome to Python!")',
    successMessage: 'You created your first string!'
  },

  {
    id: 4,
    chapterId: 2,
    title: 'String Concatenation',
    xp: 20,
    bookContent: `
# String Concatenation

**Concatenation** means **joining strings together**. It's like gluing pieces of text into one longer piece.

## The + Operator for Strings

Use \`+\` to combine strings:

\`\`\`python
"Hello" + "World"    # Results in "HelloWorld"
\`\`\`

Notice: **no automatic space!** You must add it yourself.

## Example 1: Basic Concatenation

\`\`\`python
first = "Hello"
second = "World"

# Without space - words stick together
print(first + second)        # HelloWorld

# With space added manually
print(first + " " + second)  # Hello World

# With punctuation
print(first + ", " + second + "!")  # Hello, World!
\`\`\`

**Output:**
\`\`\`
HelloWorld
Hello World
Hello, World!
\`\`\`

## Example 2: Building Sentences

\`\`\`python
name = "Alice"
action = "loves"
thing = "Python"

# Combine into a sentence
sentence = name + " " + action + " " + thing + "!"
print(sentence)
\`\`\`

**Output:** \`Alice loves Python!\`

Think of it as:
\`"Alice"\` + \`" "\` + \`"loves"\` + \`" "\` + \`"Python"\` + \`"!"\` = \`"Alice loves Python!"\`

## Example 3: Concatenating Multiple Pieces

\`\`\`python
line1 = "Python is:"
line2 = "- Easy to learn"
line3 = "- Powerful"
line4 = "- Fun!"

# Build a multi-line message
message = line1 + "\\n" + line2 + "\\n" + line3 + "\\n" + line4
print(message)
\`\`\`

**Output:**
\`\`\`
Python is:
- Easy to learn
- Powerful
- Fun!
\`\`\`

The \`\\n\` is a **newline character** — it creates a line break.

## Common Mistakes

\`\`\`python
# ERROR: Can't concatenate string with number!
age = 25
print("I am " + age + " years old")  # ❌ TypeError!

# FIX: Convert number to string first
print("I am " + str(age) + " years old")  # ✅ Works!
\`\`\`

The \`str()\` function converts anything to a string.

## Key Takeaways

1. **\`+\` joins strings** together into one string
2. **No automatic spaces** — add \`" "\` where needed
3. **\`\\n\` creates newlines** inside a string
4. **Can't mix strings and numbers** — use \`str()\` to convert
5. Concatenation is **building blocks** — combine small pieces into big text
    `,
    exerciseTitle: 'Join Two Words',
    exerciseDescription: 'Create variables first="Hello" and second="World", then print them joined with a space',
    initialCode: '# Create two variables and join them\n',
    expectedOutput: 'Hello World',
    hint: 'first = "Hello"\nsecond = "World"\nprint(first + " " + second)',
    successMessage: 'You can concatenate strings!'
  },

  {
    id: 5,
    chapterId: 2,
    title: 'String Methods',
    xp: 25,
    bookContent: `
# String Methods

Every string comes with built-in **methods** — special functions that transform or analyze the string.

## What is a Method?

A method is a function that "belongs to" a value. Call it using **dot notation**:

\`\`\`python
"hello".upper()    # Call the upper() method on "hello"
\`\`\`

## Example 1: Changing Case

\`\`\`python
text = "Hello World"

# Convert to all UPPERCASE
print(text.upper())      # HELLO WORLD

# Convert to all lowercase
print(text.lower())      # hello world

# Capitalize first letter only
print(text.capitalize()) # Hello world

# Title Case (Each Word Capitalized)
print(text.title())      # Hello World

# Swap cases
print(text.swapcase())   # hELLO wORLD
\`\`\`

**Important:** These methods **return a new string** — they don't change the original!

\`\`\`python
text = "hello"
text.upper()        # Returns "HELLO" but doesn't save it
print(text)         # Still prints "hello"

text = text.upper() # Now we save it back
print(text)         # Prints "HELLO"
\`\`\`

## Example 2: Searching in Strings

\`\`\`python
sentence = "Python is amazing and Python is free"

# Find position of first occurrence (0-indexed)
print(sentence.find("Python"))     # 0 (starts at position 0)
print(sentence.find("is"))         # 7
print(sentence.find("Java"))       # -1 (not found)

# Count occurrences
print(sentence.count("Python"))    # 2
print(sentence.count("is"))        # 2
print(sentence.count("xyz"))       # 0

# Check if string starts/ends with something
print(sentence.startswith("Python"))  # True
print(sentence.endswith("free"))      # True
print(sentence.endswith("Python"))    # False
\`\`\`

## Example 3: Cleaning and Replacing

\`\`\`python
# Remove whitespace from edges
messy = "   Hello World   "
print(messy.strip())       # "Hello World" (both sides)
print(messy.lstrip())      # "Hello World   " (left only)
print(messy.rstrip())      # "   Hello World" (right only)

# Replace text
message = "I love Java"
print(message.replace("Java", "Python"))  # I love Python

# Replace all occurrences
text = "cat cat cat"
print(text.replace("cat", "dog"))  # dog dog dog

# Replace limited occurrences
print(text.replace("cat", "dog", 1))  # dog cat cat (only first one)
\`\`\`

## Quick Reference Table

| Method | What it does | Example |
|--------|--------------|---------|
| \`.upper()\` | All uppercase | \`"Hi".upper()\` → \`"HI"\` |
| \`.lower()\` | All lowercase | \`"Hi".lower()\` → \`"hi"\` |
| \`.strip()\` | Remove edge whitespace | \`" Hi ".strip()\` → \`"Hi"\` |
| \`.replace(a,b)\` | Replace a with b | \`"Hi".replace("H","B")\` → \`"Bi"\` |
| \`.find(x)\` | Find position of x | \`"Hello".find("l")\` → \`2\` |
| \`.count(x)\` | Count occurrences | \`"Hello".count("l")\` → \`2\` |
| \`.startswith(x)\` | Starts with x? | \`"Hello".startswith("He")\` → \`True\` |

## Key Takeaways

1. **Methods are called with dot notation**: \`string.method()\`
2. **Methods return NEW strings** — they don't modify the original
3. **\`.upper()\` / \`.lower()\`** — change letter case
4. **\`.strip()\`** — clean up whitespace
5. **\`.replace()\`** — swap text
6. **\`.find()\` / \`.count()\`** — search for text
    `,
    exerciseTitle: 'Convert to Uppercase',
    exerciseDescription: 'Create text = "hello python" and print it in all uppercase',
    initialCode: '# Convert text to uppercase\n',
    expectedOutput: 'HELLO PYTHON',
    hint: 'text = "hello python"\nprint(text.upper())',
    successMessage: 'You mastered string methods!'
  },

  {
    id: 6,
    chapterId: 2,
    title: 'String Indexing & Slicing',
    xp: 25,
    bookContent: `
# String Indexing & Slicing

Strings are **sequences** — each character has a **position** (index). You can access individual characters or extract portions.

## What is an Index?

An index is a character's position number. **Python starts counting at 0**:

\`\`\`
String:  P  y  t  h  o  n
Index:   0  1  2  3  4  5
\`\`\`

## Example 1: Accessing Single Characters

\`\`\`python
word = "Python"

# Access by index using square brackets
print(word[0])    # P (first character)
print(word[1])    # y (second character)
print(word[5])    # n (sixth character)

# Negative indices count from the end
print(word[-1])   # n (last character)
print(word[-2])   # o (second to last)
print(word[-6])   # P (first, from the end)
\`\`\`

**Visualization:**
\`\`\`
Positive:  0   1   2   3   4   5
         | P | y | t | h | o | n |
Negative: -6  -5  -4  -3  -2  -1
\`\`\`

## Example 2: Slicing (Extracting Portions)

Use \`[start:end]\` to get a **slice** — characters from start UP TO (not including) end:

\`\`\`python
text = "Hello World"
#       01234567890

print(text[0:5])    # "Hello" (positions 0,1,2,3,4)
print(text[6:11])   # "World" (positions 6,7,8,9,10)
print(text[0:1])    # "H" (just position 0)

# Shortcuts
print(text[:5])     # "Hello" (from start to 5)
print(text[6:])     # "World" (from 6 to end)
print(text[:])      # "Hello World" (entire string)

# Negative slicing
print(text[-5:])    # "World" (last 5 characters)
print(text[:-6])    # "Hello" (everything except last 6)
\`\`\`

## Example 3: Slicing with Step

Use \`[start:end:step]\` to skip characters:

\`\`\`python
text = "0123456789"

print(text[::2])     # "02468" (every 2nd character)
print(text[1::2])    # "13579" (every 2nd, starting at 1)
print(text[::3])     # "0369" (every 3rd character)

# Reverse a string!
print(text[::-1])    # "9876543210" (step of -1 = backwards)

word = "Python"
print(word[::-1])    # "nohtyP" (reversed!)
\`\`\`

## Getting String Length

Use \`len()\` to get the number of characters:

\`\`\`python
word = "Python"
print(len(word))     # 6

sentence = "Hello World"
print(len(sentence)) # 11 (space counts!)

empty = ""
print(len(empty))    # 0
\`\`\`

## Key Takeaways

1. **Indexing starts at 0** — first character is \`[0]\`
2. **Negative indices** count backwards — \`[-1]\` is the last character
3. **Slicing \`[start:end]\`** — gets characters from start UP TO end
4. **Slicing shortcuts** — \`[:5]\` from start, \`[5:]\` to end
5. **Step \`[::2]\`** — skip characters; \`[::-1]\` reverses
6. **\`len()\`** — returns the number of characters
    `,
    exerciseTitle: 'Get First Character',
    exerciseDescription: 'Create word = "Python" and print only the first character',
    initialCode: '# Print the first character\n',
    expectedOutput: 'P',
    hint: 'word = "Python"\nprint(word[0])',
    successMessage: 'You understand string indexing!'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAPTER 3: Numbers
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 7,
    chapterId: 3,
    title: 'Integers (int)',
    xp: 20,
    bookContent: `
# Integers (int)

An **integer** (or \`int\`) is a **whole number** — no decimal point, no fractions.

## What are Integers?

Integers can be:
- **Positive**: 1, 42, 1000000
- **Negative**: -1, -42, -1000000
- **Zero**: 0

They CANNOT have decimal points: 3.14 is NOT an integer.

## Example 1: Creating Integers

\`\`\`python
# Positive integers
age = 25
score = 100
population = 8000000000

# Negative integers
temperature = -10
debt = -5000
below_sea = -420

# Zero
nothing = 0

# Print them
print(age)          # 25
print(temperature)  # -10
print(nothing)      # 0

# Check the type
print(type(age))    # <class 'int'>
\`\`\`

## Example 2: Math with Integers

\`\`\`python
a = 10
b = 3

# Basic operations
print(a + b)    # 13 (addition)
print(a - b)    # 7 (subtraction)
print(a * b)    # 30 (multiplication)
print(a / b)    # 3.333... (division - returns float!)
print(a // b)   # 3 (floor division - integer result)
print(a % b)    # 1 (modulo - remainder)
print(a ** b)   # 1000 (exponent - 10 to the power of 3)

# Order of operations (PEMDAS)
print(2 + 3 * 4)      # 14 (multiplication first)
print((2 + 3) * 4)    # 20 (parentheses first)
\`\`\`

## Example 3: Practical Uses

\`\`\`python
# Counting items
apples = 5
oranges = 3
total_fruit = apples + oranges
print(total_fruit)  # 8

# Calculating scores
base_score = 100
bonus = 25
penalty = 10
final_score = base_score + bonus - penalty
print(final_score)  # 115

# Integer division for grouping
students = 23
groups = 4
per_group = students // groups  # How many per group?
leftover = students % groups    # How many left over?
print(per_group)  # 5
print(leftover)   # 3 (23 = 5*4 + 3)
\`\`\`

## Integer Operations Reference

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| \`+\` | Addition | \`5 + 3\` | \`8\` |
| \`-\` | Subtraction | \`5 - 3\` | \`2\` |
| \`*\` | Multiplication | \`5 * 3\` | \`15\` |
| \`/\` | Division | \`5 / 2\` | \`2.5\` (float!) |
| \`//\` | Floor Division | \`5 // 2\` | \`2\` |
| \`%\` | Modulo (Remainder) | \`5 % 2\` | \`1\` |
| \`**\` | Exponent | \`5 ** 2\` | \`25\` |

## Key Takeaways

1. **Integers are whole numbers** — no decimals
2. **Can be positive, negative, or zero**
3. **Division \`/\` always returns a float** — use \`//\` for integer division
4. **\`%\` gives the remainder** — useful for checking divisibility
5. **\`**\` is exponentiation** — \`2**3\` means 2³ = 8
6. **\`type()\`** tells you the data type
    `,
    exerciseTitle: 'Calculate a Sum',
    exerciseDescription: 'Create a=15 and b=7, then print their sum',
    initialCode: '# Add two numbers\n',
    expectedOutput: '22',
    hint: 'a = 15\nb = 7\nprint(a + b)',
    successMessage: 'You can work with integers!'
  },

  {
    id: 8,
    chapterId: 3,
    title: 'Floats (Decimal Numbers)',
    xp: 20,
    bookContent: `
# Floats (Decimal Numbers)

A **float** is a number with a **decimal point**. The name comes from "floating-point number."

## What are Floats?

\`\`\`python
3.14      # A float
0.5       # A float
-273.15   # A float
2.0       # Also a float! (has decimal point)
\`\`\`

Even \`2.0\` is a float because it has a decimal point, unlike \`2\` which is an integer.

## Example 1: Creating Floats

\`\`\`python
# Decimal numbers
pi = 3.14159
price = 19.99
temperature = -40.5
percentage = 0.75

print(pi)           # 3.14159
print(price)        # 19.99
print(temperature)  # -40.5

# Check the type
print(type(pi))     # <class 'float'>
print(type(19.99))  # <class 'float'>

# Integer divided by integer = float!
print(10 / 4)       # 2.5
print(type(10/4))   # <class 'float'>
\`\`\`

## Example 2: Float Math

\`\`\`python
a = 10.5
b = 3.2

print(a + b)    # 13.7
print(a - b)    # 7.3
print(a * b)    # 33.6
print(a / b)    # 3.28125

# Mixing floats and integers
price = 19.99
quantity = 3
total = price * quantity
print(total)    # 59.97

# Rounding
print(round(3.14159, 2))   # 3.14 (2 decimal places)
print(round(3.7))          # 4 (nearest integer)
print(round(3.5))          # 4 (rounds to even)
\`\`\`

## Example 3: Practical Uses

\`\`\`python
# Money calculations
subtotal = 24.99
tax_rate = 0.08  # 8%
tax = subtotal * tax_rate
total = subtotal + tax

print(round(tax, 2))     # 2.0
print(round(total, 2))   # 26.99

# Temperature conversion (Celsius to Fahrenheit)
celsius = 25.0
fahrenheit = (celsius * 9/5) + 32
print(fahrenheit)  # 77.0

# Percentages
score = 85
max_score = 100
percentage = (score / max_score) * 100
print(percentage)  # 85.0
\`\`\`

## Float Precision Warning

Floats can have tiny rounding errors:

\`\`\`python
print(0.1 + 0.2)  # 0.30000000000000004 (not exactly 0.3!)
\`\`\`

This is how computers store decimals — it's normal! Use \`round()\` when displaying.

## Converting Between Types

\`\`\`python
# int to float
x = 5
print(float(x))    # 5.0

# float to int (truncates, doesn't round!)
y = 3.9
print(int(y))      # 3 (cuts off decimal, NOT 4!)

# String to float
price_text = "19.99"
price = float(price_text)
print(price + 1)   # 20.99
\`\`\`

## Key Takeaways

1. **Floats have decimal points** — \`3.14\`, \`2.0\`, \`-5.5\`
2. **Division always returns float** — \`10 / 5\` is \`2.0\`
3. **\`round()\`** rounds to specified decimal places
4. **Floats can have tiny errors** — \`0.1 + 0.2\` ≠ exactly \`0.3\`
5. **\`int()\` truncates** — cuts off decimals (doesn't round!)
6. **\`float()\`** converts to float
    `,
    exerciseTitle: 'Calculate Total Price',
    exerciseDescription: 'If price=19.99 and quantity=3, print the total (should be 59.97)',
    initialCode: '# Calculate total price\n',
    expectedOutput: '59.97',
    hint: 'price = 19.99\nquantity = 3\nprint(round(price * quantity, 2))',
    successMessage: 'You understand floats!'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAPTER 4: Booleans
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 9,
    chapterId: 4,
    title: 'What is a Boolean?',
    xp: 20,
    bookContent: `
# What is a Boolean?

A **Boolean** (or \`bool\`) has only two possible values: **\`True\`** or **\`False\`**.

Named after mathematician George Boole, booleans are the foundation of all computer logic and decision-making.

## The Two Boolean Values

\`\`\`python
is_raining = True
is_sunny = False

print(is_raining)       # True
print(is_sunny)         # False
print(type(is_raining)) # <class 'bool'>
\`\`\`

**Important:** Capital T and F! \`True\` works, \`true\` does not.

## Example 1: Comparisons Return Booleans

\`\`\`python
# Comparison operators
print(5 > 3)      # True (5 is greater than 3)
print(5 < 3)      # False (5 is not less than 3)
print(5 == 5)     # True (5 equals 5)
print(5 != 3)     # True (5 is not equal to 3)
print(5 >= 5)     # True (5 is greater than or equal to 5)
print(5 <= 3)     # False (5 is not less than or equal to 3)

# Store results in variables
age = 18
is_adult = age >= 18
print(is_adult)   # True
\`\`\`

## Example 2: String Comparisons

\`\`\`python
name = "Alice"

print(name == "Alice")   # True (exact match)
print(name == "alice")   # False (case sensitive!)
print(name != "Bob")     # True (not equal to "Bob")

# Check content
text = "Hello World"
print("Hello" in text)   # True ("Hello" is inside text)
print("Python" in text)  # False
print("xyz" not in text) # True ("xyz" is NOT in text)
\`\`\`

## Example 3: Combining Booleans

Use \`and\`, \`or\`, \`not\` to combine conditions:

\`\`\`python
age = 25
has_license = True

# AND - both must be true
can_drive = age >= 18 and has_license
print(can_drive)  # True (both conditions met)

# OR - at least one must be true
is_weekend = False
is_holiday = True
day_off = is_weekend or is_holiday
print(day_off)    # True (holiday is True)

# NOT - reverses the value
is_raining = False
is_dry = not is_raining
print(is_dry)     # True (opposite of False)

# Complex combinations
score = 85
passed = score >= 60 and score <= 100
print(passed)     # True
\`\`\`

## Truth Table

| A | B | A and B | A or B | not A |
|---|---|---------|--------|-------|
| True | True | True | True | False |
| True | False | False | True | False |
| False | True | False | True | True |
| False | False | False | False | True |

## Comparison Operators Reference

| Operator | Meaning | Example |
|----------|---------|---------|
| \`==\` | Equal to | \`5 == 5\` → True |
| \`!=\` | Not equal to | \`5 != 3\` → True |
| \`>\` | Greater than | \`5 > 3\` → True |
| \`<\` | Less than | \`5 < 3\` → False |
| \`>=\` | Greater or equal | \`5 >= 5\` → True |
| \`<=\` | Less or equal | \`5 <= 3\` → False |
| \`in\` | Contains | \`"a" in "cat"\` → True |

## Key Takeaways

1. **Booleans are True or False** — only two values
2. **Comparisons return booleans** — \`5 > 3\` returns \`True\`
3. **\`and\`** — both must be True
4. **\`or\`** — at least one must be True
5. **\`not\`** — flips True to False and vice versa
6. **\`in\`** — checks if something is inside something else
    `,
    exerciseTitle: 'Check if Greater',
    exerciseDescription: 'Create x=10, then print whether x is greater than 5',
    initialCode: '# Check if x > 5\n',
    expectedOutput: 'True',
    hint: 'x = 10\nprint(x > 5)',
    successMessage: 'You understand booleans!'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAPTER 5: Variables
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 10,
    chapterId: 5,
    title: 'Creating Variables',
    xp: 20,
    bookContent: `
# Creating Variables

A **variable** is a **named container** that stores a value. Think of it as a labeled box where you put data.

## Why Variables?

Without variables, you'd have to re-type values everywhere:

\`\`\`python
# Without variables (repetitive!)
print(3.14159 * 10 * 10)  # Area of circle
print(3.14159 * 5 * 5)    # Another circle

# With variables (clean!)
pi = 3.14159
radius1 = 10
radius2 = 5
print(pi * radius1 * radius1)
print(pi * radius2 * radius2)
\`\`\`

## Example 1: Assigning Values

\`\`\`python
# Use = to assign a value to a name
name = "Alice"        # String
age = 25              # Integer
height = 5.7          # Float
is_student = True     # Boolean

# Print them
print(name)       # Alice
print(age)        # 25
print(height)     # 5.7
print(is_student) # True
\`\`\`

The **\`=\`** sign means "put the value on the right INTO the variable on the left."

## Example 2: Variable Naming Rules

\`\`\`python
# VALID names
name = "valid"
user_name = "valid"    # underscores OK
userName = "valid"     # camelCase OK
name2 = "valid"        # numbers OK (not at start)
_private = "valid"     # starting underscore OK

# INVALID names (will cause errors!)
# 2name = "invalid"    # Can't start with number
# user-name = "invalid" # No hyphens
# user name = "invalid" # No spaces
# class = "invalid"     # Can't use Python keywords
\`\`\`

**Python keywords** (reserved words) include: \`if\`, \`else\`, \`for\`, \`while\`, \`True\`, \`False\`, \`def\`, \`class\`, \`return\`, \`import\`, etc.

## Example 3: Variables Can Change

\`\`\`python
score = 0
print(score)    # 0

score = 10
print(score)    # 10 (replaced old value)

score = score + 5   # Add 5 to current value
print(score)    # 15

score += 10     # Shortcut: add 10
print(score)    # 25

# Variables can even change type (not recommended!)
data = 42       # Integer
print(type(data))  # <class 'int'>

data = "hello"  # Now it's a string!
print(type(data))  # <class 'str'>
\`\`\`

## Best Practices

\`\`\`python
# Good: descriptive names
user_age = 25
total_price = 99.99
is_logged_in = True

# Bad: vague names
x = 25
tp = 99.99
flag = True

# Good: lowercase with underscores (snake_case)
first_name = "Alice"

# Acceptable: constants in UPPERCASE
MAX_SIZE = 100
PI = 3.14159
\`\`\`

## Key Takeaways

1. **\`=\` assigns values** to variable names
2. **Names must start with letter or underscore**
3. **No spaces or hyphens** in names
4. **Can't use Python keywords** as names
5. **Variables can change** — just assign a new value
6. **Use descriptive names** — \`age\` not \`x\`
7. **Use snake_case** for variable names
    `,
    exerciseTitle: 'Store and Print',
    exerciseDescription: 'Create a variable called message with value "Hello World" and print it',
    initialCode: '# Create and print the variable\n',
    expectedOutput: 'Hello World',
    hint: 'message = "Hello World"\nprint(message)',
    successMessage: 'You can create variables!'
  },

  {
    id: 11,
    chapterId: 5,
    title: 'f-Strings (Formatted Strings)',
    xp: 25,
    bookContent: `
# f-Strings (Formatted Strings)

An **f-string** is a special way to embed variables directly inside a string. It's the cleanest way to mix text and data.

## The Syntax

Put \`f\` before the opening quote, then use \`{variable}\` to insert values:

\`\`\`python
name = "Alice"
print(f"Hello, {name}!")   # Hello, Alice!
\`\`\`

The \`f\` stands for "formatted."

## Example 1: Basic f-Strings

\`\`\`python
name = "Bob"
age = 30
city = "New York"

# Without f-string (ugly concatenation)
print("My name is " + name + " and I am " + str(age) + " years old.")

# With f-string (clean and readable!)
print(f"My name is {name} and I am {age} years old.")
print(f"I live in {city}.")

# Output:
# My name is Bob and I am 30 years old.
# I live in New York.
\`\`\`

## Example 2: Expressions Inside f-Strings

You can put ANY Python expression inside the \`{}\`:

\`\`\`python
price = 19.99
quantity = 3

# Math inside f-string
print(f"Total: {price * quantity} dollars")       # Total: $59.97

# Method calls inside f-string
name = "alice"
print(f"Hello, {name.upper()}!")           # Hello, ALICE!

# Comparisons
score = 85
print(f"Passed: {score >= 60}")            # Passed: True

# Multiple values
a = 5
b = 3
print(f"{a} + {b} = {a + b}")              # 5 + 3 = 8
\`\`\`

## Example 3: Formatting Numbers

\`\`\`python
pi = 3.14159265359
price = 1234.5
percentage = 0.857

# Limit decimal places
print(f"Pi: {pi:.2f}")           # Pi: 3.14 (2 decimal places)
print(f"Pi: {pi:.4f}")           # Pi: 3.1416 (4 decimal places)

# Add commas to large numbers
print(f"Price: {price:,.2f}")    # Price: 1,234.50

# Percentage formatting
print(f"Score: {percentage:.1%}") # Score: 85.7%

# Padding and alignment
num = 42
print(f"{num:>10}")   #         42 (right-align, width 10)
print(f"{num:<10}")   # 42         (left-align, width 10)
print(f"{num:^10}")   #     42     (center, width 10)
print(f"{num:05}")    # 00042      (pad with zeros)
\`\`\`

## Comparison: Three Ways to Format

\`\`\`python
name = "Alice"
age = 25

# Method 1: Concatenation (old, messy)
print("Hello, " + name + "! You are " + str(age) + ".")

# Method 2: .format() method (older)
print("Hello, {}! You are {}.".format(name, age))

# Method 3: f-string (best! Python 3.6+)
print(f"Hello, {name}! You are {age}.")
\`\`\`

**Always use f-strings** — they're the most readable!

## Key Takeaways

1. **Put \`f\` before the quote**: \`f"..."\`
2. **Use \`{variable}\` to insert values**
3. **Expressions work**: \`{price * 1.08}\`
4. **Methods work**: \`{name.upper()}\`
5. **Format numbers**: \`{pi:.2f}\` for 2 decimal places
6. **f-strings are the best way** to combine text and data
    `,
    exerciseTitle: 'Use an f-String',
    exerciseDescription: 'Create name="Python" and version=3, then print "I love Python 3!" using an f-string',
    initialCode: '# Use an f-string\n',
    expectedOutput: 'I love Python 3!',
    hint: 'name = "Python"\nversion = 3\nprint(f"I love {name} {version}!")',
    successMessage: 'You mastered f-strings!'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAPTER 6: Lists
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 12,
    chapterId: 6,
    title: 'What is a List?',
    xp: 25,
    bookContent: `
# What is a List?

A **list** is an **ordered collection** of items. It can hold multiple values in a single variable.

## Creating Lists

Use square brackets \`[]\` with items separated by commas:

\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, 3.14, True]  # Different types OK!
empty = []  # Empty list
\`\`\`

## Example 1: Accessing List Items

Lists use **zero-based indexing** (just like strings):

\`\`\`python
colors = ["red", "green", "blue", "yellow"]
#          0       1        2        3

print(colors[0])    # red (first item)
print(colors[1])    # green (second item)
print(colors[-1])   # yellow (last item)
print(colors[-2])   # blue (second to last)

# Get multiple items (slicing)
print(colors[0:2])  # ['red', 'green']
print(colors[1:])   # ['green', 'blue', 'yellow']

# Get list length
print(len(colors))  # 4
\`\`\`

## Example 2: Modifying Lists

Unlike strings, lists are **mutable** — you can change them:

\`\`\`python
fruits = ["apple", "banana", "cherry"]

# Change an item
fruits[0] = "mango"
print(fruits)  # ['mango', 'banana', 'cherry']

# Add to the end
fruits.append("orange")
print(fruits)  # ['mango', 'banana', 'cherry', 'orange']

# Insert at specific position
fruits.insert(1, "grape")
print(fruits)  # ['mango', 'grape', 'banana', 'cherry', 'orange']

# Remove by value
fruits.remove("banana")
print(fruits)  # ['mango', 'grape', 'cherry', 'orange']

# Remove by index
del fruits[0]
print(fruits)  # ['grape', 'cherry', 'orange']

# Remove and return last item
last = fruits.pop()
print(last)    # orange
print(fruits)  # ['grape', 'cherry']
\`\`\`

## Example 3: List Operations

\`\`\`python
# Combine lists
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2
print(combined)  # [1, 2, 3, 4, 5, 6]

# Repeat a list
repeated = [0] * 5
print(repeated)  # [0, 0, 0, 0, 0]

# Check if item exists
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)   # True
print("mango" in fruits)   # False

# Count occurrences
numbers = [1, 2, 2, 3, 2, 4]
print(numbers.count(2))    # 3

# Find index of item
print(fruits.index("banana"))  # 1

# Sort the list
nums = [3, 1, 4, 1, 5, 9, 2]
nums.sort()
print(nums)  # [1, 1, 2, 3, 4, 5, 9]

# Reverse the list
nums.reverse()
print(nums)  # [9, 5, 4, 3, 2, 1, 1]
\`\`\`

## List Methods Quick Reference

| Method | What it does |
|--------|--------------|
| \`.append(x)\` | Add x to end |
| \`.insert(i, x)\` | Insert x at position i |
| \`.remove(x)\` | Remove first x |
| \`.pop()\` | Remove & return last item |
| \`.sort()\` | Sort in place |
| \`.reverse()\` | Reverse in place |
| \`.index(x)\` | Find position of x |
| \`.count(x)\` | Count occurrences of x |

## Key Takeaways

1. **Lists hold multiple items** in order
2. **Use \`[]\` to create** and access items
3. **Zero-indexed** — first item is \`[0]\`
4. **Mutable** — can add, remove, change items
5. **\`.append()\`** adds to end
6. **\`in\`** checks if item exists
    `,
    exerciseTitle: 'Create a List',
    exerciseDescription: 'Create a list called numbers containing 1, 2, 3 and print it',
    initialCode: '# Create and print the list\n',
    expectedOutput: '[1, 2, 3]',
    hint: 'numbers = [1, 2, 3]\nprint(numbers)',
    successMessage: 'You created your first list!'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAPTER 7: Dictionaries
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 13,
    chapterId: 7,
    title: 'What is a Dictionary?',
    xp: 25,
    bookContent: `
# What is a Dictionary?

A **dictionary** stores data as **key-value pairs**. Instead of accessing items by position (index), you access them by a **unique key**.

Think of a real dictionary: you look up a **word** (key) to find its **definition** (value).

## Creating Dictionaries

Use curly braces \`{}\` with \`key: value\` pairs:

\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
\`\`\`

## Example 1: Accessing Values

\`\`\`python
person = {"name": "Alice", "age": 25, "city": "New York"}

# Access by key
print(person["name"])    # Alice
print(person["age"])     # 25
print(person["city"])    # New York

# Using .get() - safer, returns None if key missing
print(person.get("name"))      # Alice
print(person.get("country"))   # None (no error!)
print(person.get("country", "Unknown"))  # "Unknown" (default value)

# Check if key exists
print("name" in person)     # True
print("country" in person)  # False
\`\`\`

## Example 2: Modifying Dictionaries

\`\`\`python
person = {"name": "Alice", "age": 25}

# Change a value
person["age"] = 26
print(person)  # {'name': 'Alice', 'age': 26}

# Add new key-value pair
person["email"] = "alice@email.com"
print(person)  # {'name': 'Alice', 'age': 26, 'email': 'alice@email.com'}

# Remove a key
del person["email"]
print(person)  # {'name': 'Alice', 'age': 26}

# Remove and return value
age = person.pop("age")
print(age)     # 26
print(person)  # {'name': 'Alice'}
\`\`\`

## Example 3: Practical Uses

\`\`\`python
# Store product info
product = {
    "name": "Laptop",
    "price": 999.99,
    "in_stock": True,
    "specs": {
        "ram": "16GB",
        "storage": "512GB SSD"
    }
}

print(f"Product: {product['name']}")
print(f"Price: {product['price']} dollars")
print(f"RAM: {product['specs']['ram']}")  # Nested access

# Count word frequency
text = "apple banana apple cherry apple banana"
word_count = {}
for word in text.split():
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1
print(word_count)  # {'apple': 3, 'banana': 2, 'cherry': 1}

# User settings
settings = {
    "theme": "dark",
    "font_size": 14,
    "notifications": True
}
print(f"Theme: {settings['theme']}")
\`\`\`

## Dictionary Methods

\`\`\`python
person = {"name": "Alice", "age": 25}

# Get all keys
print(person.keys())    # dict_keys(['name', 'age'])

# Get all values
print(person.values())  # dict_values(['Alice', 25])

# Get all pairs
print(person.items())   # dict_items([('name', 'Alice'), ('age', 25)])

# Merge another dictionary
extra = {"city": "NYC", "job": "Engineer"}
person.update(extra)
print(person)  # {'name': 'Alice', 'age': 25, 'city': 'NYC', 'job': 'Engineer'}
\`\`\`

## Key Takeaways

1. **Dictionaries use key-value pairs** — \`{"key": value}\`
2. **Access by key**: \`dict["key"]\` or \`dict.get("key")\`
3. **Keys must be unique** — no duplicates
4. **Keys must be immutable** — strings, numbers, tuples (not lists)
5. **Values can be anything** — strings, numbers, lists, even other dicts
6. **Use \`.get()\` for safe access** — avoids errors on missing keys
    `,
    exerciseTitle: 'Create a Dictionary',
    exerciseDescription: 'Create a dict called person with "name" = "Alice" and print person["name"]',
    initialCode: '# Create dict and print the name\n',
    expectedOutput: 'Alice',
    hint: 'person = {"name": "Alice"}\nprint(person["name"])',
    successMessage: 'You understand dictionaries!'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAPTER 8: Conditionals
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 14,
    chapterId: 8,
    title: 'if Statements',
    xp: 25,
    bookContent: `
# if Statements

**Conditionals** let your program make decisions. The \`if\` statement runs code only when a condition is True.

## Basic if Syntax

\`\`\`python
if condition:
    # This code runs only if condition is True
    # Notice the indentation (4 spaces)!
\`\`\`

## Example 1: Simple if Statements

\`\`\`python
age = 20

if age >= 18:
    print("You are an adult")
    print("You can vote")

# Both lines print because age (20) >= 18 is True

# With a False condition
temperature = 15

if temperature > 30:
    print("It's hot!")

# Nothing prints because 15 > 30 is False
\`\`\`

## Example 2: if-else

\`\`\`python
age = 15

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Output: You are a minor (because 15 >= 18 is False)

# Another example
score = 75

if score >= 60:
    print("You passed!")
else:
    print("You failed. Try again.")

# Output: You passed!
\`\`\`

## Example 3: if-elif-else Chain

Use \`elif\` (short for "else if") for multiple conditions:

\`\`\`python
score = 85

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

print(f"Your grade: {grade}")  # Your grade: B

# Temperature example
temp = 25

if temp < 0:
    print("Freezing!")
elif temp < 15:
    print("Cold")
elif temp < 25:
    print("Nice")
elif temp < 35:
    print("Warm")
else:
    print("Hot!")

# Output: Warm
\`\`\`

## Important: Indentation

Python uses **indentation** to define code blocks:

\`\`\`python
if True:
    print("This is inside the if")
    print("This too")
print("This is outside - always runs")

# WRONG - IndentationError!
# if True:
# print("No indentation = error!")
\`\`\`

## Nested Conditionals

\`\`\`python
age = 25
has_ticket = True

if age >= 18:
    if has_ticket:
        print("Welcome to the concert!")
    else:
        print("You need a ticket.")
else:
    print("Sorry, 18+ only.")
\`\`\`

## Key Takeaways

1. **\`if\` checks a condition** — runs code only if True
2. **\`else\`** — runs if the condition is False
3. **\`elif\`** — check additional conditions
4. **Indentation is required** — 4 spaces after \`:\`
5. **Only one branch runs** in if-elif-else chain
6. Conditions can be any expression that evaluates to True/False
    `,
    exerciseTitle: 'Simple if Statement',
    exerciseDescription: 'Set x = 10. If x is greater than 5, print "Big number"',
    initialCode: '# Write the if statement\nx = 10\n',
    expectedOutput: 'Big number',
    hint: 'x = 10\nif x > 5:\n    print("Big number")',
    successMessage: 'You can write conditionals!'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAPTER 9: Loops
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 15,
    chapterId: 9,
    title: 'for Loops',
    xp: 25,
    bookContent: `
# for Loops

A **for loop** repeats code **for each item** in a sequence (list, string, range, etc.).

## Basic Syntax

\`\`\`python
for item in sequence:
    # Do something with item
\`\`\`

## Example 1: Looping Through a List

\`\`\`python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

# Output:
# apple
# banana
# cherry

# Each iteration, 'fruit' becomes the next item in the list
\`\`\`

## Example 2: Using range()

\`range()\` generates a sequence of numbers:

\`\`\`python
# range(5) = 0, 1, 2, 3, 4
for i in range(5):
    print(i)

# Output: 0 1 2 3 4 (each on new line)

# range(start, end) - end is NOT included
for i in range(2, 6):
    print(i)

# Output: 2 3 4 5

# range(start, end, step)
for i in range(0, 10, 2):
    print(i)

# Output: 0 2 4 6 8

# Countdown
for i in range(5, 0, -1):
    print(i)

# Output: 5 4 3 2 1
\`\`\`

## Example 3: Practical Uses

\`\`\`python
# Sum all numbers 1 to 10
total = 0
for num in range(1, 11):
    total = total + num
print(total)  # 55

# Loop through string characters
word = "Python"
for char in word:
    print(char)
# P y t h o n (each on new line)

# Loop with index using enumerate()
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(f"{index}: {color}")
# 0: red
# 1: green
# 2: blue

# Nested loops
for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()  # New line after each row
# (0,0) (0,1) (0,2)
# (1,0) (1,1) (1,2)
# (2,0) (2,1) (2,2)
\`\`\`

## Loop Control

\`\`\`python
# break - exit the loop immediately
for i in range(10):
    if i == 5:
        break
    print(i)
# Output: 0 1 2 3 4

# continue - skip to next iteration
for i in range(5):
    if i == 2:
        continue
    print(i)
# Output: 0 1 3 4 (skips 2)
\`\`\`

## Key Takeaways

1. **\`for item in sequence:\`** — iterates through each item
2. **\`range(n)\`** — generates 0 to n-1
3. **\`range(start, end)\`** — generates start to end-1
4. **\`range(start, end, step)\`** — with custom step
5. **\`break\`** — exits loop immediately
6. **\`continue\`** — skips to next iteration
7. **\`enumerate()\`** — gives both index and item
    `,
    exerciseTitle: 'Print Numbers 1-5',
    exerciseDescription: 'Use a for loop with range() to print numbers 1, 2, 3, 4, 5',
    initialCode: '# Print 1 through 5\n',
    expectedOutput: '1\n2\n3\n4\n5',
    hint: 'for i in range(1, 6):\n    print(i)',
    successMessage: 'You mastered for loops!'
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAPTER 10: Functions
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 16,
    chapterId: 10,
    title: 'Creating Functions',
    xp: 30,
    bookContent: `
# Creating Functions

A **function** is a reusable block of code that performs a specific task. Define once, use many times!

## Why Functions?

\`\`\`python
# Without functions (repetitive)
print("Hello, Alice!")
print("Welcome to Python!")

print("Hello, Bob!")
print("Welcome to Python!")

# With a function (reusable)
def greet(name):
    print(f"Hello, {name}!")
    print("Welcome to Python!")

greet("Alice")
greet("Bob")
\`\`\`

## Example 1: Basic Function

\`\`\`python
# Define a function with 'def'
def say_hello():
    print("Hello, World!")

# Call the function
say_hello()  # Hello, World!
say_hello()  # Hello, World!

# Function with parameters
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Hello, Alice!
greet("Bob")    # Hello, Bob!
\`\`\`

## Example 2: Return Values

Functions can **return** a value back to the caller:

\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8

# Use directly in expressions
print(add(10, 20))  # 30
total = add(1, 2) + add(3, 4)
print(total)  # 10

# Multiple return values
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)

low, high, total = get_stats([1, 5, 3, 9, 2])
print(f"Min: {low}, Max: {high}, Sum: {total}")
# Min: 1, Max: 9, Sum: 20
\`\`\`

## Example 3: Default Parameters

\`\`\`python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Hello, Alice!
greet("Bob", "Hi")          # Hi, Bob!
greet("Charlie", "Welcome") # Welcome, Charlie!

# Practical example
def calculate_price(amount, tax_rate=0.08, discount=0):
    subtotal = amount * (1 - discount)
    total = subtotal * (1 + tax_rate)
    return round(total, 2)

print(calculate_price(100))              # 108.0
print(calculate_price(100, 0.10))        # 110.0
print(calculate_price(100, 0.08, 0.20))  # 86.4
\`\`\`

## Scope: Local vs Global

\`\`\`python
x = 10  # Global variable

def my_function():
    y = 5  # Local variable - only exists inside function
    print(x)  # Can READ global
    print(y)

my_function()
print(x)  # 10
# print(y)  # ERROR - y doesn't exist outside function!
\`\`\`

## Key Takeaways

1. **\`def name():\`** — defines a function
2. **Parameters** — inputs the function accepts
3. **\`return\`** — sends a value back to the caller
4. **Default parameters** — have fallback values
5. **Local variables** — only exist inside the function
6. **Call with \`()\`** — \`say_hello()\` runs it
    `,
    exerciseTitle: 'Create a Function',
    exerciseDescription: 'Create a function called double(x) that returns x * 2. Then print double(5)',
    initialCode: '# Define and use the function\n',
    expectedOutput: '10',
    hint: 'def double(x):\n    return x * 2\n\nprint(double(5))',
    successMessage: 'You can create functions!'
  },
];
