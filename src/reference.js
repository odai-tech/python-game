// ─── Python Reference — inspired by Python Crash Course (Eric Matthes) ──────
// Written in a beginner-friendly, conversational style:
// - Explains the WHY not just the WHAT
// - Calls out common mistakes
// - Uses relatable, simple examples
// - Matches the book's chapter structure

export const referenceCategories = [

  // ════════════════════════════════════════════════════════
  // CHAPTER 1 — GETTING STARTED
  // ════════════════════════════════════════════════════════
  {
    name: "Getting Started",
    emoji: "🚀",
    color: "#6366f1",
    description: "Your very first steps in Python. What is it, how does it work, and how do you run it?",
    bookChapter: "Chapter 1",
    commands: [
      {
        name: "What is Python?",
        syntax: "— Concept —",
        description: "Python is a programming language — a set of instructions you write for the computer. Python is special because it reads almost like English, which makes it one of the best languages to learn first. When you write Python code, Python reads your file line by line and executes each instruction in order.",
        examples: [
          { code: "# This is a Python program\n# The # symbol starts a comment — Python ignores it\nprint('Hello! I am a Python program.')", output: "Hello! I am a Python program." },
        ],
        tip: "Python reads your code from top to bottom, one line at a time — just like reading a book."
      },
      {
        name: "print()",
        syntax: "print(value)\nprint(value1, value2, ...)\nprint(value, end='\\n')",
        description: "print() is the most important function you'll learn first. It displays information on the screen. Whatever you put inside the parentheses gets shown. You can print text (put it in quotes), numbers, or variables.",
        examples: [
          { code: "print('Hello, World!')", output: "Hello, World!" },
          { code: "print('Python', 'is', 'fun')", output: "Python is fun" },
          { code: "print(42)", output: "42" },
          { code: "# print() with no arguments prints a blank line\nprint('First line')\nprint()\nprint('Third line')", output: "First line\n\nThird line" },
        ],
        tip: "Always use parentheses with print() in Python 3. If you see print 'hello' without parentheses, that's Python 2 — it won't work in modern Python.",
        commonMistake: "Forgetting the parentheses: print 'hello' → SyntaxError. The correct way is always print('hello')."
      },
      {
        name: "Comments",
        syntax: "# This is a comment\n# Python ignores everything after the #",
        description: "Comments are notes you write in your code for yourself (or other humans). Python completely ignores them — they're just there to explain what the code does. Good comments make your code much easier to understand later. Get in the habit of writing them!",
        examples: [
          { code: "# Calculate the total price\nprice = 19.99\ntax = price * 0.08  # 8% tax\ntotal = price + tax\nprint(total)", output: "21.5892" },
          { code: "# TODO: add more items later\n# Author: Your Name\n# Date: 2025\nprint('My program')", output: "My program" },
        ],
        tip: "Write comments that explain WHY you wrote the code, not just WHAT it does. 'x = x + 1  # add 1' is not helpful. 'x = x + 1  # move to the next item' is much better."
      },
      {
        name: "Indentation",
        syntax: "if condition:\n    # 4 spaces of indentation\n    code_here()",
        description: "Indentation (spaces at the start of a line) is how Python knows which code belongs inside an if statement, loop, or function. Unlike most languages, Python REQUIRES consistent indentation — it's not optional. Always use 4 spaces (not tabs).",
        examples: [
          { code: "# Correct indentation:\nfor i in range(3):\n    print(i)  # 4 spaces — inside the loop\nprint('done')  # no spaces — outside the loop", output: "0\n1\n2\ndone" },
        ],
        commonMistake: "Mixing tabs and spaces causes 'IndentationError'. Pick one (4 spaces is the Python standard) and stick to it.",
        tip: "Most code editors will automatically convert Tab key presses into 4 spaces for you."
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // CHAPTER 2 — VARIABLES AND DATA TYPES
  // ════════════════════════════════════════════════════════
  {
    name: "Variables & Data Types",
    emoji: "📦",
    color: "#8b5cf6",
    description: "Variables store information so you can use it later. Every piece of data in Python has a type.",
    bookChapter: "Chapter 2",
    commands: [
      {
        name: "Variables",
        syntax: "variable_name = value",
        description: "A variable is like a labelled box. You put a value in the box, give it a name, and then you can refer to it by that name whenever you need it. The = sign means 'store this value', NOT 'equals' (that's == with two equals signs).",
        examples: [
          { code: "message = 'Hello, Python world!'\nprint(message)", output: "Hello, Python world!" },
          { code: "# You can change a variable's value any time\ncounter = 0\nprint(counter)\ncounter = 10\nprint(counter)", output: "0\n10" },
          { code: "# Multiple variables\nname = 'Alice'\nage = 25\ncity = 'Paris'\nprint(name, 'is', age, 'years old')", output: "Alice is 25 years old" },
        ],
        tip: "Variable names should be lowercase with underscores: user_name, not UserName or username. This is the Python convention (called 'snake_case').",
        commonMistake: "Using a variable before assigning it: print(score)  — NameError if score was never defined!"
      },
      {
        name: "Naming Rules",
        syntax: "good_name = ...    # ✓\n_name = ...        # ✓\nname123 = ...      # ✓\n123name = ...      # ✗ can't start with number\nmy-name = ...      # ✗ hyphens not allowed",
        description: "Variable names can only contain letters, numbers, and underscores. They cannot start with a number. They are case-sensitive (name and Name are different variables). Avoid Python keywords like if, for, print, True, etc.",
        examples: [
          { code: "# Good names — descriptive!\nuser_age = 20\nfavorite_color = 'blue'\ntotal_score = 0", output: "" },
          { code: "# Avoid single letters except in short loops\n# Bad:\nx = 'John Smith'\n# Good:\nfull_name = 'John Smith'", output: "" },
        ],
        tip: "Give your variables names that describe what they store. When you read the code 6 months later, 'user_name' tells you everything, 'x' tells you nothing."
      },
      {
        name: "Strings",
        syntax: "'single quotes'\n\"double quotes\"\n'''triple quotes for\nmultiple lines'''",
        description: "A string is any text — letters, numbers, symbols, spaces. Strings must be wrapped in quotes. You can use either single quotes or double quotes — Python doesn't mind. Use whichever makes your code cleaner.",
        examples: [
          { code: "name = 'Eric'\nprint(name)", output: "Eric" },
          { code: "# Double quotes are useful when the text contains an apostrophe\nmessage = \"Python's syntax is clean and readable.\"\nprint(message)", output: "Python's syntax is clean and readable." },
          { code: "# String concatenation — joining strings with +\nfirst = 'Hello'\nlast = 'World'\nprint(first + ', ' + last + '!')", output: "Hello, World!" },
        ],
        tip: "Single and double quotes are interchangeable. Choose based on what's inside: use double quotes when your text contains an apostrophe (like \"Python's\").",
        commonMistake: "Mixing quote types: 'hello\" → SyntaxError. Start and end with the same type of quote."
      },
      {
        name: "String Methods",
        syntax: "string.method()",
        description: "Strings come with built-in tools called methods. You call them using a dot after the string or variable. They transform the text and return the result (they don't modify the original).",
        examples: [
          { code: "name = 'ada lovelace'\nprint(name.title())    # First letter of each word capitalized\nprint(name.upper())    # ALL CAPS\nprint(name.lower())    # all lowercase", output: "Ada Lovelace\nADA LOVELACE\nada lovelace" },
          { code: "# Removing whitespace — very useful for cleaning user input!\nname = '  python  '\nprint(name.rstrip())   # remove right side spaces\nprint(name.lstrip())   # remove left side spaces\nprint(name.strip())    # remove both sides", output: "  python\npython  \npython" },
          { code: "# Finding and replacing\nsentence = 'I love Java!'\nprint(sentence.replace('Java', 'Python'))", output: "I love Python!" },
        ],
        tip: "Methods don't change the original string — they return a NEW string. Always store or print the result: name = name.strip(), not just name.strip()."
      },
      {
        name: "f-strings (Formatted Strings)",
        syntax: "f'text {variable} more text'\nf'expression: {2 + 2}'",
        description: "f-strings let you embed variables directly inside strings. Put an f before the opening quote, then put your variables inside curly braces {}. This is the modern, cleanest way to combine text and variables in Python.",
        examples: [
          { code: "name = 'Jesse'\nage = 27\nprint(f'Hello, {name}! You are {age} years old.')", output: "Hello, Jesse! You are 27 years old." },
          { code: "# Any Python expression works inside {}\nprice = 4.99\nquantity = 3\nprint(f'Total: ${price * quantity:.2f}')", output: "Total: $14.97" },
          { code: "# Older style (still works but less clean)\nname = 'Alice'\nprint('Hello, ' + name + '!')        # concatenation\nprint('Hello, {}!'.format(name))     # .format()\nprint(f'Hello, {name}!')              # f-string ← best", output: "Hello, Alice!\nHello, Alice!\nHello, Alice!" },
        ],
        tip: "The f stands for 'formatted'. Always put the f right before the first quote: f'...' or f\"...\". No space between f and the quote!"
      },
      {
        name: "Numbers — int & float",
        syntax: "x = 42        # int (whole number)\ny = 3.14      # float (decimal)",
        description: "Python has two main number types. int (integer) is whole numbers like 1, 100, -5. float is decimal numbers like 3.14, -0.5, 2.0. Python handles math exactly as you'd expect, but there's one important difference: dividing two integers with / always gives a float.",
        examples: [
          { code: "# Basic arithmetic\nprint(2 + 3)   # 5   — addition\nprint(10 - 4)  # 6   — subtraction\nprint(3 * 4)   # 12  — multiplication\nprint(10 / 2)  # 5.0 — division (always float!)", output: "5\n6\n12\n5.0" },
          { code: "# More operators\nprint(10 // 3)  # 3   — floor division (rounds down)\nprint(10 % 3)   # 1   — modulo (remainder)\nprint(2 ** 8)   # 256 — exponent (power)", output: "3\n1\n256" },
          { code: "# Floats can have tiny precision surprises\nprint(0.2 + 0.1)  # not exactly 0.3!", output: "0.30000000000000004" },
        ],
        tip: "Use // when you want integer (whole number) division. Use % to check if a number is even: if n % 2 == 0: print('even')",
        commonMistake: "Trying to combine a number and a string with +: 'Age: ' + 25 → TypeError! Use an f-string: f'Age: {25}' or convert: 'Age: ' + str(25)"
      },
      {
        name: "Type Conversion",
        syntax: "int('25')     # string → integer\nfloat('3.14') # string → float\nstr(42)       # number → string\nbool(0)       # anything → True/False",
        description: "Sometimes you need to convert between types. For example, input() always gives you a string even if the user typed a number — you need to convert it. Python has built-in functions for this.",
        examples: [
          { code: "# input() always returns a string\nage = int(input('Enter your age: '))  # convert to int\nprint(f'Next year you will be {age + 1}')", output: "(user types 20)\nNext year you will be 21" },
          { code: "# Converting for string concatenation\nage = 23\nmessage = 'Happy ' + str(age) + 'rd Birthday!'\nprint(message)", output: "Happy 23rd Birthday!" },
          { code: "# What's truthy and what's falsy?\nprint(bool(0))      # False\nprint(bool(''))     # False — empty string\nprint(bool([]))     # False — empty list\nprint(bool(42))     # True\nprint(bool('hi'))   # True", output: "False\nFalse\nFalse\nTrue\nTrue" },
        ],
        tip: "int() will crash if you give it something that can't be a number. Always validate user input or use try/except (covered in Chapter 10)."
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // CHAPTER 3 & 4 — LISTS
  // ════════════════════════════════════════════════════════
  {
    name: "Lists",
    emoji: "📋",
    color: "#10b981",
    description: "Lists store multiple items in a single variable. They are ordered, changeable, and can hold any mix of data types.",
    bookChapter: "Chapters 3 & 4",
    commands: [
      {
        name: "Creating Lists",
        syntax: "my_list = [item1, item2, item3]\nempty_list = []",
        description: "A list is a collection of items stored in a specific order. You create it with square brackets []. Items are separated by commas. A list can hold anything — strings, numbers, or even other lists — all mixed together.",
        examples: [
          { code: "bicycles = ['trek', 'cannondale', 'redline']\nprint(bicycles)", output: "['trek', 'cannondale', 'redline']" },
          { code: "# Access items by position (index) — starts at 0!\nbicycles = ['trek', 'cannondale', 'redline']\nprint(bicycles[0])   # first\nprint(bicycles[1])   # second\nprint(bicycles[-1])  # last item (shortcut!)", output: "trek\ncannondale\nredline" },
          { code: "# Lists can hold any types, even mixed\nmixed = [42, 'hello', 3.14, True]\nprint(mixed)", output: "[42, 'hello', 3.14, True]" },
        ],
        tip: "Lists start at index 0, not 1. So a list with 3 items has indices 0, 1, 2. The last item is always at index -1.",
        commonMistake: "IndexError — trying to access an item that doesn't exist: bikes[10] when the list only has 3 items. Check len() first!"
      },
      {
        name: "Modifying Lists",
        syntax: "list[index] = new_value  # change an item\nlist.append(item)        # add to end\nlist.insert(i, item)     # add at position",
        description: "Lists are mutable — you can change them after creating them. You can change existing items, add new ones, or remove them.",
        examples: [
          { code: "# Change an item\nmotorcycles = ['honda', 'yamaha', 'suzuki']\nmotorcycles[0] = 'ducati'\nprint(motorcycles)", output: "['ducati', 'yamaha', 'suzuki']" },
          { code: "# Add to end\nmotorcycles = ['honda', 'yamaha']\nmotorcycles.append('ducati')\nprint(motorcycles)", output: "['honda', 'yamaha', 'ducati']" },
          { code: "# Insert at a specific position\nmotorcycles = ['honda', 'ducati']\nmotorcycles.insert(1, 'yamaha')  # insert at index 1\nprint(motorcycles)", output: "['honda', 'yamaha', 'ducati']" },
        ],
        tip: "append() is the most commonly used way to add items — it adds to the very end of the list."
      },
      {
        name: "Removing from Lists",
        syntax: "del list[index]       # delete by position\nlist.remove(value)    # delete by value\nlist.pop()            # remove & return last\nlist.pop(index)       # remove & return at i",
        description: "There are several ways to remove items depending on what you know about the item — its position, its value, or whether you need to use it after removing it.",
        examples: [
          { code: "# del removes by position, permanently\nmotorcycles = ['honda', 'yamaha', 'suzuki']\ndel motorcycles[0]\nprint(motorcycles)", output: "['yamaha', 'suzuki']" },
          { code: "# remove() removes by value (first occurrence)\nmotorcycles = ['honda', 'yamaha', 'suzuki', 'yamaha']\nmotorcycles.remove('yamaha')\nprint(motorcycles)", output: "['honda', 'suzuki', 'yamaha']" },
          { code: "# pop() removes AND returns the item — useful!\nmotorcycles = ['honda', 'yamaha', 'suzuki']\npopped = motorcycles.pop()   # removes last\nprint(f'Removed: {popped}')\nprint(motorcycles)", output: "Removed: suzuki\n['honda', 'yamaha']" },
        ],
        tip: "Use remove() when you know the VALUE of the item to remove. Use pop() when you want to use the removed item for something. Use del when you just want it gone."
      },
      {
        name: "Sorting Lists",
        syntax: "list.sort()           # sort in place (permanent)\nlist.sort(reverse=True)\nsorted(list)          # returns new sorted list",
        description: "Python makes it easy to sort lists. The key difference: sort() permanently changes the list, while sorted() leaves the original alone and returns a new sorted copy.",
        examples: [
          { code: "# sort() changes the list permanently\ncars = ['bmw', 'audi', 'toyota', 'subaru']\ncars.sort()\nprint(cars)", output: "['audi', 'bmw', 'subaru', 'toyota']" },
          { code: "# sorted() — original stays the same\ncars = ['bmw', 'audi', 'toyota']\nprint(sorted(cars))  # sorted copy\nprint(cars)          # original unchanged", output: "['audi', 'bmw', 'toyota']\n['bmw', 'audi', 'toyota']" },
          { code: "# Reverse order\ncars = ['bmw', 'audi', 'toyota']\ncars.sort(reverse=True)\nprint(cars)", output: "['toyota', 'bmw', 'audi']" },
          { code: "# reverse() flips the order (doesn't sort)\ncars = ['bmw', 'audi', 'toyota']\ncars.reverse()\nprint(cars)", output: "['toyota', 'audi', 'bmw']" },
        ],
        tip: "sorted() is safer when you might need the original order later. sort() is faster and uses less memory."
      },
      {
        name: "len() and Useful List Info",
        syntax: "len(list)       # how many items?\nmin(list)       # smallest\nmax(list)       # largest\nsum(list)       # total (numbers only)",
        description: "These built-in functions give you useful information about your list at a glance.",
        examples: [
          { code: "numbers = [3, 1, 4, 1, 5, 9, 2, 6]\nprint(len(numbers))   # 8 items\nprint(min(numbers))   # 1\nprint(max(numbers))   # 9\nprint(sum(numbers))   # 31", output: "8\n1\n9\n31" },
          { code: "# len() works on strings too!\nname = 'Python'\nprint(len(name))  # 6 characters", output: "6" },
        ],
        tip: "len() is useful for checking if a list is empty: if len(my_list) == 0: — or more Pythonically: if not my_list:"
      },
      {
        name: "Slicing Lists",
        syntax: "list[start:stop]       # items from start up to (not including) stop\nlist[start:stop:step]  # every step-th item\nlist[:3]               # first 3 items\nlist[-3:]              # last 3 items",
        description: "Slicing lets you grab a portion of a list. Think of it as 'give me items from here to there'. The stop index is NOT included in the result.",
        examples: [
          { code: "players = ['charles', 'martina', 'michael', 'florence']\nprint(players[0:3])   # first 3\nprint(players[1:4])   # index 1, 2, 3\nprint(players[:3])    # also first 3\nprint(players[-2:])   # last 2", output: "['charles', 'martina', 'michael']\n['martina', 'michael', 'florence']\n['charles', 'martina', 'michael']\n['michael', 'florence']" },
          { code: "# Copy a list with [:]\noriginal = [1, 2, 3]\ncopy = original[:]     # a real copy!\ncopy.append(4)\nprint(original)        # unchanged\nprint(copy)", output: "[1, 2, 3]\n[1, 2, 3, 4]" },
        ],
        tip: "list[:] creates a proper copy of a list. Never do copy = original — that creates two names pointing to the SAME list, not a copy!"
      },
      {
        name: "List Comprehensions",
        syntax: "[expression for item in list]\n[expression for item in list if condition]",
        description: "A list comprehension is a compact, elegant way to create a new list by transforming or filtering another list. It replaces a for loop + append pattern with a single readable line.",
        examples: [
          { code: "# Without comprehension:\nsquares = []\nfor n in range(1, 6):\n    squares.append(n**2)\nprint(squares)", output: "[1, 4, 9, 16, 25]" },
          { code: "# With comprehension — same result, one line:\nsquares = [n**2 for n in range(1, 6)]\nprint(squares)", output: "[1, 4, 9, 16, 25]" },
          { code: "# With a filter condition:\nevens = [n for n in range(10) if n % 2 == 0]\nprint(evens)", output: "[0, 2, 4, 6, 8]" },
        ],
        tip: "Read it as: 'give me n-squared, for each n in range(1,6)'. If it starts feeling hard to read, a regular for loop is totally fine!"
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // CHAPTER 5 — IF STATEMENTS
  // ════════════════════════════════════════════════════════
  {
    name: "If Statements",
    emoji: "🔀",
    color: "#f59e0b",
    description: "Make your programs smart. if statements run different code depending on whether a condition is True or False.",
    bookChapter: "Chapter 5",
    commands: [
      {
        name: "if / elif / else",
        syntax: "if condition:\n    # runs when True\nelif another_condition:\n    # runs if first was False, this is True\nelse:\n    # runs when everything above was False",
        description: "if statements are how your program makes decisions. Python evaluates the condition — if it's True, it runs that block. If not, it moves to elif (else-if) or else. Only ONE block runs, then Python continues past the whole if/elif/else structure.",
        examples: [
          { code: "age = 19\nif age >= 18:\n    print('You can vote!')\nelse:\n    print('Too young to vote.')", output: "You can vote!" },
          { code: "score = 85\nif score >= 90:\n    print('Grade: A')\nelif score >= 80:\n    print('Grade: B')\nelif score >= 70:\n    print('Grade: C')\nelse:\n    print('Grade: F')", output: "Grade: B" },
        ],
        tip: "You can have as many elif blocks as you need. else is optional — only add it if you have something specific to do when ALL conditions are False."
      },
      {
        name: "Comparison Operators",
        syntax: "==   equals\n!=   not equals\n>    greater than\n<    less than\n>=   greater than or equal\n<=   less than or equal",
        description: "These operators compare two values and return True or False. The most important one to remember: == is comparison, = is assignment. This is one of the most common beginner mistakes!",
        examples: [
          { code: "car = 'bmw'\nprint(car == 'bmw')    # True\nprint(car == 'audi')   # False\nprint(car != 'toyota') # True", output: "True\nFalse\nTrue" },
          { code: "age = 25\nprint(age >= 18)   # True\nprint(age < 18)    # False\nprint(18 <= age <= 65)  # chaining!", output: "True\nFalse\nTrue" },
        ],
        commonMistake: "Writing = instead of == in a condition: if age = 18: → SyntaxError. Always use == for comparison!"
      },
      {
        name: "Boolean Operators: and, or, not",
        syntax: "condition1 and condition2   # both must be True\ncondition1 or condition2    # at least one True\nnot condition               # flips True/False",
        description: "and, or, and not let you combine multiple conditions into one. They make your if statements much more powerful.",
        examples: [
          { code: "age = 22\nhas_id = True\nif age >= 18 and has_id:\n    print('Allowed in')\nelse:\n    print('Not allowed')", output: "Allowed in" },
          { code: "raining = False\nhave_umbrella = True\nif raining or not have_umbrella:\n    print('Stay inside!')\nelse:\n    print('Go outside!')", output: "Go outside!" },
        ],
        tip: "'and' is stricter (both must be True). 'or' is more lenient (just one needs to be True). 'not' flips the result."
      },
      {
        name: "in / not in",
        syntax: "item in list        # True if item is in list\nitem not in list    # True if item is NOT in list",
        description: "A quick and readable way to check if something is inside a list (or string, or dictionary). Much cleaner than comparing every item manually.",
        examples: [
          { code: "banned_users = ['andrew', 'carolina', 'david']\nuser = 'marie'\nif user not in banned_users:\n    print(f'Welcome, {user}!')\nelse:\n    print('You are banned.')", output: "Welcome, marie!" },
          { code: "# Also works with strings:\nlanguage = 'Python'\nif 'Py' in language:\n    print('Contains Py!')", output: "Contains Py!" },
        ],
        tip: "'in' on a list checks values. 'in' on a dictionary checks KEYS. Both are O(n) for lists but O(1) for sets and dicts."
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // CHAPTER 6 — DICTIONARIES
  // ════════════════════════════════════════════════════════
  {
    name: "Dictionaries",
    emoji: "📖",
    color: "#ef4444",
    description: "Dictionaries store pairs of information: a key and its value — like a real dictionary where words (keys) have definitions (values).",
    bookChapter: "Chapter 6",
    commands: [
      {
        name: "Creating Dictionaries",
        syntax: "my_dict = {key: value, key: value}\nempty_dict = {}",
        description: "A dictionary stores key-value pairs. The key is how you look something up (like a word in a real dictionary), and the value is what you get back (like the definition). Keys are usually strings, but values can be anything.",
        examples: [
          { code: "alien = {'color': 'green', 'points': 5}\nprint(alien['color'])   # access by key\nprint(alien['points'])", output: "green\n5" },
          { code: "# Start empty, then fill it\nperson = {}\nperson['name'] = 'Alice'\nperson['age'] = 30\nperson['city'] = 'Paris'\nprint(person)", output: "{'name': 'Alice', 'age': 30, 'city': 'Paris'}" },
        ],
        tip: "If you try to access a key that doesn't exist (dict['missing']), you get a KeyError. Use .get() to avoid this crash."
      },
      {
        name: "Accessing & Modifying",
        syntax: "dict[key]              # access (crashes if missing)\ndict.get(key)          # access (returns None if missing)\ndict.get(key, default) # access with fallback\ndict[key] = value      # add or update",
        description: "Accessing values by key is very fast. Modifying is simple — just assign a new value to the key. If the key doesn't exist, it's created. If it does exist, it's updated.",
        examples: [
          { code: "alien = {'color': 'green', 'speed': 'slow'}\n\n# Safe access with .get()\npoints = alien.get('points', 0)  # default 0 if missing\nprint(points)", output: "0" },
          { code: "# Update an existing key\nalien['color'] = 'yellow'\n# Add a new key\nalien['points'] = 10\nprint(alien)", output: "{'color': 'yellow', 'speed': 'slow', 'points': 10}" },
        ],
        tip: "Always use .get() when you're not sure a key exists. It returns None (or your default) instead of crashing."
      },
      {
        name: "Looping Through Dictionaries",
        syntax: "for key, value in dict.items():    # both key and value\nfor key in dict.keys():            # keys only\nfor value in dict.values():        # values only",
        description: "You'll often need to process every item in a dictionary. .items() is most commonly used since you usually want both the key and the value.",
        examples: [
          { code: "user_0 = {'username': 'efermi', 'first': 'Enrico', 'last': 'Fermi'}\nfor key, value in user_0.items():\n    print(f'{key}: {value}')", output: "username: efermi\nfirst: Enrico\nlast: Fermi" },
          { code: "# Loop through sorted keys for consistent order\nfavorite_languages = {'jen': 'python', 'sarah': 'c', 'phil': 'java'}\nfor name in sorted(favorite_languages.keys()):\n    print(f'{name}: {favorite_languages[name]}')", output: "jen: python\nphil: java\nsarah: c" },
        ],
        tip: "Dictionaries in Python 3.7+ remember the order items were inserted. But if you need a guaranteed order, use sorted()."
      },
      {
        name: "Nested Data",
        syntax: "list_of_dicts = [{...}, {...}]\ndict_of_lists = {'key': [...]}\ndict_of_dicts = {'key': {...}}",
        description: "Real programs often need complex data structures. You can nest lists inside dicts, dicts inside lists, or dicts inside dicts. Don't go too deep though — more than 2-3 levels becomes hard to read.",
        examples: [
          { code: "# List of dictionaries (common pattern!)\naliens = [\n    {'color': 'green', 'points': 5},\n    {'color': 'yellow', 'points': 10},\n]\nfor alien in aliens:\n    print(f\"{alien['color']} alien: {alien['points']} pts\")", output: "green alien: 5 pts\nyellow alien: 10 pts" },
          { code: "# Dictionary with a list as value\npizza = {\n    'crust': 'thick',\n    'toppings': ['mushrooms', 'extra cheese'],\n}\nprint(pizza['crust'])\nfor topping in pizza['toppings']:\n    print(f'  - {topping}')", output: "thick\n  - mushrooms\n  - extra cheese" },
        ],
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // CHAPTER 7 — LOOPS
  // ════════════════════════════════════════════════════════
  {
    name: "Loops",
    emoji: "🔄",
    color: "#06b6d4",
    description: "Loops repeat code automatically. for loops work through a sequence; while loops keep going until a condition becomes False.",
    bookChapter: "Chapter 7",
    commands: [
      {
        name: "for Loop",
        syntax: "for item in collection:\n    # code runs for each item",
        description: "A for loop automatically steps through every item in a list, string, or range, running the indented code block once for each item. You don't need to manage the index yourself — Python handles it.",
        examples: [
          { code: "magicians = ['alice', 'david', 'carolina']\nfor magician in magicians:\n    print(f'{magician.title()}, that was a great trick!')\nprint('All done!')", output: "Alice, that was a great trick!\nDavid, that was a great trick!\nCarolina, that was a great trick!\nAll done!" },
          { code: "# Loop over a string — iterates character by character\nfor char in 'Python':\n    print(char, end=' ')", output: "P y t h o n " },
        ],
        tip: "Give your loop variable a meaningful name: 'for magician in magicians' reads like English. 'for i in magicians' is less clear.",
        commonMistake: "Forgetting to indent the code inside the loop. Everything that should repeat MUST be indented 4 spaces."
      },
      {
        name: "range()",
        syntax: "range(stop)              # 0 to stop-1\nrange(start, stop)       # start to stop-1\nrange(start, stop, step) # every step",
        description: "range() generates a sequence of numbers on the fly without creating a whole list. Perfect for when you need to loop a specific number of times. The key rule: the stop number is NEVER included.",
        examples: [
          { code: "# Count 1 to 5\nfor n in range(1, 6):\n    print(n)", output: "1\n2\n3\n4\n5" },
          { code: "# Even numbers 2 to 10\nfor n in range(2, 11, 2):\n    print(n, end=' ')", output: "2 4 6 8 10 " },
          { code: "# Count down\nfor n in range(5, 0, -1):\n    print(n, end=' ')\nprint('Blast off!')", output: "5 4 3 2 1 Blast off!" },
        ],
        tip: "range(5) gives 0,1,2,3,4 — NOT 1,2,3,4,5. If you want 1 to 5, use range(1, 6)."
      },
      {
        name: "while Loop",
        syntax: "while condition:\n    # runs as long as condition is True\n    # MUST update something so condition eventually becomes False!",
        description: "A while loop keeps running as long as its condition is True. It's perfect when you don't know in advance how many times you'll need to loop — like waiting for user input or running until a game ends. WARNING: always make sure the condition will eventually become False, or you'll have an infinite loop!",
        examples: [
          { code: "# Count up\nnumber = 1\nwhile number <= 5:\n    print(number)\n    number += 1  # MUST update, or infinite loop!", output: "1\n2\n3\n4\n5" },
          { code: "# Classic: keep asking until they say quit\nprompt = \"\\nEnter a name (or 'quit' to stop): \"\nactive = True\nwhile active:\n    name = input(prompt)\n    if name == 'quit':\n        active = False\n    else:\n        print(f'Hello, {name}!')", output: "(keeps asking until user types quit)" },
        ],
        tip: "Use a 'flag' variable (active = True) to control complex while loops — it makes the code much more readable than a complicated condition.",
        commonMistake: "Infinite loop — forgot to update the condition variable. Always double-check that something inside the loop will eventually make the condition False!"
      },
      {
        name: "break & continue",
        syntax: "break     # exit the loop immediately\ncontinue  # skip rest of this iteration, go to next",
        description: "break and continue give you more control over loops. break jumps completely out of the loop. continue skips the rest of the current loop cycle but keeps looping.",
        examples: [
          { code: "# break — exit when you find what you want\nfor number in range(1, 100):\n    if number * number > 50:\n        print(f'Stopped at {number}')\n        break", output: "Stopped at 8" },
          { code: "# continue — skip certain items\nfor number in range(1, 11):\n    if number % 2 == 0:\n        continue  # skip even numbers\n    print(number, end=' ')", output: "1 3 5 7 9 " },
        ],
        tip: "Don't overuse break and continue — too many can make code hard to follow. Often a well-designed loop condition is cleaner."
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // CHAPTER 8 — FUNCTIONS
  // ════════════════════════════════════════════════════════
  {
    name: "Functions",
    emoji: "⚡",
    color: "#a855f7",
    description: "Functions are named, reusable blocks of code. Write it once, use it anywhere. They make programs shorter, easier to test, and easier to change.",
    bookChapter: "Chapter 8",
    commands: [
      {
        name: "Defining Functions",
        syntax: "def function_name(parameters):\n    \"\"\"Optional docstring describing the function.\"\"\"\n    # body\n    return value  # optional",
        description: "def declares a function. The function body is indented and only runs when you call the function. The docstring (in triple quotes) describes what the function does — add them to all your functions, they appear in help().",
        examples: [
          { code: "def greet_user(username):\n    \"\"\"Display a simple greeting.\"\"\"\n    print(f'Hello, {username.title()}!')\n\ngreet_user('jesse')   # call the function\ngreet_user('sarah')", output: "Hello, Jesse!\nHello, Sarah!" },
          { code: "# A function can call other functions\ndef make_shirt(size, message):\n    print(f'Size {size} shirt with: \"{message}\"')\n\nmake_shirt('large', 'Python is awesome!')", output: "Size large shirt with: \"Python is awesome!\"" },
        ],
        tip: "Functions should do ONE thing and do it well. If your function is getting long, split it into smaller functions."
      },
      {
        name: "Parameters & Arguments",
        syntax: "def func(required, optional='default'):\n    ...\n\nfunc('value')                  # positional\nfunc(param_name='value')       # keyword\nfunc('pos_value', param='kw')  # mixed",
        description: "Parameters are the variable names in the function definition. Arguments are the actual values you pass in when calling. Default values make parameters optional. Keyword arguments let you pass them in any order.",
        examples: [
          { code: "# Default parameter values\ndef describe_pet(animal_type, pet_name='unknown'):\n    print(f'I have a {animal_type} named {pet_name}.')\n\ndescribe_pet('hamster', 'Harry')\ndescribe_pet('dog')  # uses default", output: "I have a hamster named Harry.\nI have a dog named unknown." },
          { code: "# Keyword arguments — order doesn't matter!\ndef describe_pet(animal_type, pet_name):\n    print(f'{pet_name} is a {animal_type}.')\n\ndescribe_pet(pet_name='Harry', animal_type='hamster')", output: "Harry is a hamster." },
        ],
        tip: "Default parameter values must come AFTER required parameters in the function definition."
      },
      {
        name: "Return Values",
        syntax: "def func():\n    return value\n\nresult = func()  # capture the returned value",
        description: "return sends a value back from the function to whoever called it. Without return, a function returns None. You can return any type — number, string, list, dict, even another function.",
        examples: [
          { code: "def get_full_name(first, last):\n    \"\"\"Return a neatly formatted full name.\"\"\"\n    return f'{first.title()} {last.title()}'\n\nname = get_full_name('jimi', 'hendrix')\nprint(name)", output: "Jimi Hendrix" },
          { code: "# Return a dictionary (common pattern!)\ndef build_person(first, last, age=None):\n    person = {'first': first, 'last': last}\n    if age:  # only add if provided\n        person['age'] = age\n    return person\n\nprint(build_person('Jimi', 'Hendrix', 27))", output: "{'first': 'Jimi', 'last': 'Hendrix', 'age': 27}" },
        ],
        tip: "A function that returns a value is much more flexible than one that just prints. You can store the result, pass it to another function, or use it in a calculation."
      },
      {
        name: "*args — Arbitrary Arguments",
        syntax: "def func(*args):\n    # args is a tuple of all positional arguments",
        description: "When you don't know how many arguments someone will pass, use *args. The * tells Python to collect all extra positional arguments into a tuple called args (you can name it anything, but args is conventional).",
        examples: [
          { code: "def make_pizza(*toppings):\n    print('Making pizza with:')\n    for topping in toppings:\n        print(f'  - {topping}')\n\nmake_pizza('pepperoni')\nmake_pizza('mushrooms', 'cheese', 'peppers')", output: "Making pizza with:\n  - pepperoni\nMaking pizza with:\n  - mushrooms\n  - cheese\n  - peppers" },
        ],
        tip: "The * is what matters — the name 'args' is just a convention. *toppings, *items, *values all work the same way."
      },
      {
        name: "**kwargs — Arbitrary Keyword Arguments",
        syntax: "def func(**kwargs):\n    # kwargs is a dict of all keyword arguments",
        description: "** collects any number of keyword arguments into a dictionary. Used when you want to accept any keyword arguments, like when building a profile or configuration.",
        examples: [
          { code: "def build_profile(first, last, **user_info):\n    profile = {'first': first, 'last': last}\n    profile.update(user_info)\n    return profile\n\nresult = build_profile('albert', 'einstein',\n    location='princeton', field='physics')\nprint(result)", output: "{'first': 'albert', 'last': 'einstein', 'location': 'princeton', 'field': 'physics'}" },
        ],
        tip: "You can combine *args and **kwargs in one function: def func(required, *args, **kwargs). Order matters: required first, then *args, then **kwargs."
      },
      {
        name: "Lambda Functions",
        syntax: "lambda parameters: expression",
        description: "A lambda is a tiny function written in a single line. It can only contain one expression. Most useful as a quick, throwaway function — especially as an argument to sorted(), map(), or filter().",
        examples: [
          { code: "# Sort by a custom key\nnames = ['Charlie', 'Alice', 'Bob']\nnames.sort(key=lambda name: len(name))\nprint(names)", output: "['Bob', 'Alice', 'Charlie']" },
          { code: "# Simple transformation\ndouble = lambda x: x * 2\nprint(double(5))", output: "10" },
        ],
        tip: "Use lambda for short, simple operations. If it's getting complex or needs a name you'll reuse, write a proper def function instead."
      },
      {
        name: "Recursion",
        syntax: "def func(n):\n    if n == base_case:   # ALWAYS need this!\n        return base_value\n    return func(n - 1)  # call itself with smaller input",
        description: "A recursive function calls itself. This sounds strange, but it's a powerful technique for problems that can be broken into smaller copies of the same problem (like factorials, Fibonacci, tree traversal). The CRITICAL part: you must have a base case that stops the recursion, or Python will crash with RecursionError.",
        examples: [
          { code: "def factorial(n):\n    \"\"\"Return n! (n factorial)\"\"\"\n    if n == 1:              # base case — STOP here!\n        return 1\n    return n * factorial(n - 1)  # smaller problem\n\nprint(factorial(5))  # 5*4*3*2*1", output: "120" },
          { code: "def fibonacci(n):\n    \"\"\"Return the nth Fibonacci number.\"\"\"\n    if n <= 1:              # base case\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nfor i in range(8):\n    print(fibonacci(i), end=' ')", output: "0 1 1 2 3 5 8 13 " },
        ],
        tip: "Every recursive function needs TWO things: (1) a base case that returns without calling itself, (2) a recursive case that calls itself with a smaller/simpler input.",
        commonMistake: "Forgetting the base case → RecursionError: maximum recursion depth exceeded. Python limits recursion depth to ~1000 calls."
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // CHAPTER 9 — CLASSES & OOP
  // ════════════════════════════════════════════════════════
  {
    name: "Classes & OOP",
    emoji: "🏗️",
    color: "#14b8a6",
    description: "Classes let you create your own data types. Object-Oriented Programming (OOP) models real-world things as objects with data (attributes) and behaviour (methods).",
    bookChapter: "Chapter 9",
    commands: [
      {
        name: "Creating a Class",
        syntax: "class ClassName:          # CapWords naming\n    def __init__(self, ...):\n        self.attribute = value\n    def method(self):\n        ...",
        description: "A class is a blueprint for creating objects. __init__ is the constructor — it runs automatically when you create a new object. The first parameter of every method is self — it refers to the specific object being created or used.",
        examples: [
          { code: "class Dog:\n    \"\"\"A simple dog class.\"\"\"\n    \n    def __init__(self, name, age):\n        self.name = name  # attribute\n        self.age = age\n    \n    def sit(self):\n        print(f'{self.name} is now sitting.')\n    \n    def roll_over(self):\n        print(f'{self.name} rolled over!')\n\n# Create instances\nmy_dog = Dog('Willie', 6)\nyour_dog = Dog('Lucy', 3)\n\nprint(my_dog.name)  # access attribute\nmy_dog.sit()        # call method", output: "Willie\nWillie is now sitting." },
        ],
        tip: "Class names use CapWords (PascalCase): Dog, BankAccount, UserProfile. Instances use snake_case: my_dog, my_account."
      },
      {
        name: "Attributes",
        syntax: "self.attribute = value     # set in __init__\nobject.attribute           # read\nobject.attribute = value   # change\ndel object.attribute       # delete",
        description: "Attributes are variables that belong to an object. They store the object's state (its data). Set them in __init__ using self.name = value. Access them with dot notation: my_dog.name.",
        examples: [
          { code: "class Car:\n    def __init__(self, make, model, year):\n        self.make = make\n        self.model = model\n        self.year = year\n        self.odometer = 0  # default value\n    \n    def get_description(self):\n        return f'{self.year} {self.make} {self.model}'\n    \n    def read_odometer(self):\n        print(f'Odometer: {self.odometer:,} miles')\n\nmy_car = Car('audi', 'a4', 2024)\nprint(my_car.get_description())\nmy_car.odometer = 15000  # update attribute\nmy_car.read_odometer()", output: "2024 audi a4\nOdometer: 15,000 miles" },
        ],
      },
      {
        name: "Inheritance",
        syntax: "class Child(Parent):\n    def __init__(self, ...):\n        super().__init__(...)  # call parent's __init__\n        # add child-specific attributes",
        description: "Inheritance lets one class (child) automatically get all the attributes and methods of another (parent). Use it when you have a specialised version of something. super() calls the parent class's method — always call it in __init__ when using inheritance.",
        examples: [
          { code: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return 'Some sound'\n\nclass Dog(Animal):          # Dog inherits from Animal\n    def speak(self):        # override the method\n        return 'Woof!'\n\nclass Cat(Animal):\n    def speak(self):\n        return 'Meow!'\n\nanimals = [Dog('Rex'), Cat('Luna')]\nfor animal in animals:\n    print(f'{animal.name}: {animal.speak()}')", output: "Rex: Woof!\nLuna: Meow!" },
        ],
        tip: "Inheritance represents an 'is-a' relationship: a Dog IS AN Animal. If the relationship is 'has-a', use composition (store an object as an attribute) instead."
      },
      {
        name: "__str__ and __repr__",
        syntax: "def __str__(self):\n    return 'human-readable string'\n\ndef __repr__(self):\n    return 'developer-readable string'",
        description: "__str__ controls what print(object) shows. __repr__ controls what you see in the Python shell. Always define __str__ — without it, you get something useless like <Dog object at 0x105a5d710>.",
        examples: [
          { code: "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def __str__(self):\n        return f'{self.name} (age {self.age})'\n\nd = Dog('Willie', 6)\nprint(d)  # calls __str__ automatically", output: "Willie (age 6)" },
        ],
        tip: "Add __str__ to every class you write. It makes debugging much easier!"
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // CHAPTER 10 — FILES & EXCEPTIONS
  // ════════════════════════════════════════════════════════
  {
    name: "Files & Exceptions",
    emoji: "🛡️",
    color: "#f43f5e",
    description: "Read and write files. Handle errors gracefully so your program doesn't crash when something unexpected happens.",
    bookChapter: "Chapter 10",
    commands: [
      {
        name: "Reading Files",
        syntax: "with open('filename.txt') as f:\n    contents = f.read()      # whole file\n    lines = f.readlines()   # list of lines\n    for line in f:          # line by line",
        description: "with open() is the safest way to open files — it automatically closes the file when the block ends, even if an error occurs. f.read() reads the entire file as one string. Iterating over f reads line by line (memory-efficient for large files).",
        examples: [
          { code: "# Read the whole file\nwith open('pi_digits.txt') as f:\n    contents = f.read()\nprint(contents)", output: "3.1415926535\n  8979323846\n  2643383279" },
          { code: "# Read line by line\nwith open('pi_digits.txt') as f:\n    for line in f:\n        print(line.strip())  # strip() removes '\\n'", output: "3.1415926535\n8979323846\n2643383279" },
          { code: "# All lines as a list\nwith open('pi_digits.txt') as f:\n    lines = f.readlines()\n\nfor line in lines:\n    print(line.strip())", output: "3.1415926535\n8979323846\n2643383279" },
        ],
        tip: "ALWAYS use with open() — not just open(). The with block guarantees the file is closed even if your program crashes mid-read."
      },
      {
        name: "Writing Files",
        syntax: "with open('file.txt', 'w') as f:  # 'w' = write (overwrites!)\n    f.write('text')\n\nwith open('file.txt', 'a') as f:  # 'a' = append\n    f.write('more text')",
        description: "Opening with 'w' (write) creates the file if it doesn't exist, or WIPES IT COMPLETELY if it does. Opening with 'a' (append) adds to the end without deleting. Always use write() or writelines() to save data.",
        examples: [
          { code: "with open('programming.txt', 'w') as f:\n    f.write('I love programming!\\n')\n    f.write('I love creating new games!')", output: "(file is created with two lines)" },
          { code: "# Append — add to existing file\nwith open('programming.txt', 'a') as f:\n    f.write('\\nI also love working with data.')", output: "(adds a line to the file)" },
        ],
        commonMistake: "Using 'w' mode when you meant 'a' mode — you'll wipe your file! When in doubt, check whether you want to replace or add to the file.",
        tip: "write() doesn't add newlines automatically. You must include \\n at the end of each line yourself."
      },
      {
        name: "try / except",
        syntax: "try:\n    risky_code()\nexcept SpecificError:\n    handle_gracefully()\nexcept (TypeError, ValueError):\n    handle_these_too()\nelse:\n    runs_if_no_error()\nfinally:\n    always_runs()",
        description: "try/except lets you handle errors gracefully instead of crashing. Put the risky code in try. Specify exactly which error you expect in except — don't use a bare except: (it catches everything including bugs you should know about).",
        examples: [
          { code: "# Division by zero\ntry:\n    result = 5 / 0\nexcept ZeroDivisionError:\n    print(\"You can't divide by zero!\")", output: "You can't divide by zero!" },
          { code: "# File not found\ntry:\n    with open('missing.txt') as f:\n        contents = f.read()\nexcept FileNotFoundError:\n    print('Sorry, that file does not exist.')", output: "Sorry, that file does not exist." },
          { code: "# ValueError — bad input\ndef divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None\n\nresult = divide(10, 0)\nif result is None:\n    print('Error: division by zero')", output: "Error: division by zero" },
        ],
        tip: "Catch SPECIFIC exceptions (ZeroDivisionError, FileNotFoundError, ValueError) — not just Exception or a bare except. This way you don't accidentally hide bugs."
      },
      {
        name: "Common Exceptions",
        syntax: "# Reference list",
        description: "These are the most common errors you'll encounter in Python. Knowing their names helps you catch them specifically.",
        examples: [
          { code: "# ZeroDivisionError — dividing by zero\n1 / 0", output: "ZeroDivisionError: division by zero" },
          { code: "# FileNotFoundError — file doesn't exist\nopen('missing.txt')", output: "FileNotFoundError: No such file or directory" },
          { code: "# ValueError — wrong type of value\nint('hello')", output: "ValueError: invalid literal for int() with base 10: 'hello'" },
          { code: "# IndexError — list index out of range\n[][0]", output: "IndexError: list index out of range" },
          { code: "# KeyError — dictionary key missing\n{}['missing']", output: "KeyError: 'missing'" },
          { code: "# TypeError — wrong type\n'hello' + 5", output: "TypeError: can only concatenate str (not 'int') to str" },
          { code: "# NameError — variable not defined\nprint(undefined_variable)", output: "NameError: name 'undefined_variable' is not defined" },
          { code: "# AttributeError — object has no such method/attribute\n42.upper()", output: "AttributeError: 'int' object has no attribute 'upper'" },
        ],
        tip: "Read error messages carefully — Python tells you exactly what went wrong and on which line. The last line of the traceback is usually the most important."
      },
      {
        name: "raise",
        syntax: "raise ValueError('your message here')\nraise TypeError('explanation')",
        description: "raise lets you deliberately trigger an exception. Use it to validate inputs and report problems to whoever called your function. This is how you communicate 'something went wrong' to the caller.",
        examples: [
          { code: "def set_age(age):\n    if not isinstance(age, int):\n        raise TypeError('Age must be an integer.')\n    if age < 0 or age > 150:\n        raise ValueError(f'Age {age} is not realistic.')\n    return age\n\ntry:\n    set_age(-5)\nexcept ValueError as e:\n    print(f'Error: {e}')", output: "Error: Age -5 is not realistic." },
        ],
        tip: "raise is for validation — when the caller passes in something that doesn't make sense, tell them clearly what went wrong."
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // TUPLES & SETS
  // ════════════════════════════════════════════════════════
  {
    name: "Tuples & Sets",
    emoji: "🎯",
    color: "#84cc16",
    description: "Tuples are like lists but immutable (can't be changed). Sets store unique values and are lightning-fast for membership testing.",
    bookChapter: "Beyond Chapter 4",
    commands: [
      {
        name: "Tuples",
        syntax: "my_tuple = (item1, item2, item3)\nsingle = (item,)  # comma needed for single-item!\nx, y, z = my_tuple  # unpacking",
        description: "A tuple is like a list that can NEVER be changed — you can't add, remove, or modify items after creating it. Use tuples for data that should stay constant: coordinates, RGB colors, database rows. Python actually processes tuples faster than lists.",
        examples: [
          { code: "# Tuples for fixed data\ndimensions = (1920, 1080)  # screen resolution\nprint(f'Width: {dimensions[0]}, Height: {dimensions[1]}')", output: "Width: 1920, Height: 1080" },
          { code: "# Unpacking — assign each value to a variable\npoint = (10, 25, 3)\nx, y, z = point\nprint(f'X={x}, Y={y}, Z={z}')", output: "X=10, Y=25, Z=3" },
          { code: "# Swap variables — the Pythonic way!\na, b = 10, 20\na, b = b, a  # swap! No temp variable needed\nprint(a, b)", output: "20 10" },
        ],
        tip: "The comma makes a tuple, not the parentheses. (42,) is a one-element tuple. (42) is just the number 42 in parentheses.",
        commonMistake: "Trying to modify a tuple: my_tuple[0] = 5 → TypeError: 'tuple' object does not support item assignment."
      },
      {
        name: "Sets",
        syntax: "my_set = {item1, item2, item3}\nempty_set = set()  # NOT {} (that's an empty dict!)\nmy_set.add(item)\nitem in my_set  # very fast!",
        description: "A set stores unique items — duplicates are automatically removed. Sets are unordered (no index, no slicing). Their superpower: checking 'is this item in the set?' is EXTREMELY fast — much faster than checking in a list.",
        examples: [
          { code: "# Duplicates auto-removed\nfruits = {'apple', 'banana', 'apple', 'orange'}\nprint(fruits)  # apple appears only once", output: "{'banana', 'orange', 'apple'}" },
          { code: "# Remove duplicates from a list\nnames = ['Alice', 'Bob', 'Alice', 'Carol', 'Bob']\nunique_names = list(set(names))\nprint(unique_names)", output: "['Carol', 'Alice', 'Bob']  (order may vary)" },
          { code: "# Set operations — like math Venn diagrams\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # union — all items\nprint(a & b)  # intersection — common items\nprint(a - b)  # difference — in a but not b", output: "{1, 2, 3, 4, 5, 6}\n{3, 4}\n{1, 2}" },
        ],
        tip: "Use a set (not a list) when you're checking 'is item in collection?' frequently. 'item in my_list' gets slower as the list grows. 'item in my_set' is always fast."
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // OPERATORS — REFERENCE
  // ════════════════════════════════════════════════════════
  {
    name: "Operators",
    emoji: "🔢",
    color: "#f97316",
    description: "All the symbols that perform operations: math, comparison, logic, and assignment.",
    bookChapter: "Reference",
    commands: [
      {
        name: "Arithmetic Operators",
        syntax: "+  addition\n-  subtraction\n*  multiplication\n/  division (always float)\n// floor division (rounds down)\n%  modulo (remainder)\n** exponent (power)",
        description: "Python's math operators work exactly as you'd expect from a calculator, with a few extras. // gives you integer division (rounds toward negative infinity). % gives the remainder — very useful for checking divisibility.",
        examples: [
          { code: "print(10 + 3)   # 13\nprint(10 - 3)   # 7\nprint(10 * 3)   # 30\nprint(10 / 3)   # 3.333... (always float)\nprint(10 // 3)  # 3 (floor division)\nprint(10 % 3)   # 1 (remainder)\nprint(2 ** 10)  # 1024 (2 to the power 10)", output: "13\n7\n30\n3.3333333333333335\n3\n1\n1024" },
          { code: "# Modulo use case: even/odd check\nfor n in range(1, 6):\n    if n % 2 == 0:\n        print(f'{n} is even')\n    else:\n        print(f'{n} is odd')", output: "1 is odd\n2 is even\n3 is odd\n4 is even\n5 is odd" },
        ],
      },
      {
        name: "Augmented Assignment",
        syntax: "x += 5   # same as x = x + 5\nx -= 5   # same as x = x - 5\nx *= 2   # same as x = x * 2\nx /= 2   # same as x = x / 2\nx //= 2  # floor divide in place\nx %= 3   # modulo in place\nx **= 2  # power in place",
        description: "Augmented assignment operators are shortcuts for updating a variable. They're shorter to write and just as readable.",
        examples: [
          { code: "score = 0\nscore += 100   # scored 100 points\nscore += 50    # scored 50 more\nprint(score)   # 150", output: "150" },
          { code: "total = 1\nfor i in range(1, 6):\n    total *= i  # multiply total by i each time\nprint(total)  # 1*2*3*4*5 = 120", output: "120" },
        ],
      },
      {
        name: "Comparison Operators",
        syntax: "==   equal to\n!=   not equal to\n<    less than\n>    greater than\n<=   less than or equal\n>=   greater than or equal",
        description: "Comparison operators evaluate to True or False. They're used in if statements, while loops, and list comprehensions. Python also supports chaining: 0 < x < 10 works and is very readable.",
        examples: [
          { code: "x = 5\nprint(x == 5)   # True\nprint(x != 5)   # False\nprint(x > 3)    # True\nprint(x <= 5)   # True", output: "True\nFalse\nTrue\nTrue" },
          { code: "# Chaining comparisons\nage = 25\nprint(18 <= age < 65)  # True — very readable!", output: "True" },
        ],
        commonMistake: "= is assignment (x = 5). == is comparison (x == 5). Using one when you mean the other is one of the most common Python bugs!"
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // USEFUL BUILT-IN FUNCTIONS
  // ════════════════════════════════════════════════════════
  {
    name: "Built-in Functions",
    emoji: "⚙️",
    color: "#6366f1",
    description: "Python's built-in functions are always available — no import needed. These are the ones you'll use most often.",
    bookChapter: "Reference",
    commands: [
      {
        name: "input()",
        syntax: "variable = input('Prompt: ')",
        description: "input() pauses the program and waits for the user to type something, then press Enter. It ALWAYS returns a string — even if the user types a number. You must convert it with int() or float() if you need a number.",
        examples: [
          { code: "name = input('What is your name? ')\nprint(f'Hello, {name}!')", output: "(user types Alice)\nHello, Alice!" },
          { code: "# Always returns a string — convert if needed!\nage = int(input('How old are you? '))\nprint(f'Next year you will be {age + 1}')", output: "(user types 20)\nNext year you will be 21" },
        ],
        commonMistake: "Forgetting to convert: age = input('Age: ') then age + 1 → TypeError, because you're adding an int to a string!"
      },
      {
        name: "len()",
        syntax: "len(sequence)  → int",
        description: "Returns the number of items in a list, string, tuple, dict, or set. One of the most frequently used functions in Python.",
        examples: [
          { code: "print(len([1, 2, 3, 4, 5]))  # 5 items\nprint(len('Python'))         # 6 characters\nprint(len({'a': 1, 'b': 2})) # 2 keys", output: "5\n6\n2" },
          { code: "# Common pattern: check if empty\nmy_list = []\nif len(my_list) == 0:\n    print('List is empty')\n# Or more Pythonically:\nif not my_list:\n    print('List is empty')", output: "List is empty\nList is empty" },
        ],
      },
      {
        name: "range()",
        syntax: "range(stop)\nrange(start, stop)\nrange(start, stop, step)",
        description: "Generates a sequence of numbers. Crucially, it generates them one at a time (it's lazy), so it doesn't use memory even for huge ranges. The stop is never included.",
        examples: [
          { code: "# Count 0 to 4\nfor i in range(5):\n    print(i, end=' ')", output: "0 1 2 3 4 " },
          { code: "# Count 1 to 10\nfor i in range(1, 11):\n    print(i, end=' ')", output: "1 2 3 4 5 6 7 8 9 10 " },
          { code: "# Every 3rd number\nlist(range(0, 20, 3))", output: "[0, 3, 6, 9, 12, 15, 18]" },
        ],
      },
      {
        name: "enumerate()",
        syntax: "for index, value in enumerate(iterable, start=0):",
        description: "enumerate() gives you both the index AND the value as you loop. Much cleaner than using range(len(list)) and indexing manually.",
        examples: [
          { code: "# Without enumerate — clunky:\nfruits = ['apple', 'banana', 'cherry']\nfor i in range(len(fruits)):\n    print(i, fruits[i])", output: "0 apple\n1 banana\n2 cherry" },
          { code: "# With enumerate — clean!\nfruits = ['apple', 'banana', 'cherry']\nfor i, fruit in enumerate(fruits, start=1):\n    print(f'{i}. {fruit}')", output: "1. apple\n2. banana\n3. cherry" },
        ],
        tip: "If you ever write for i in range(len(my_list)), ask yourself if enumerate() would be cleaner — it almost always is!"
      },
      {
        name: "zip()",
        syntax: "for a, b in zip(list1, list2):",
        description: "zip() combines two (or more) lists element by element. Perfect when you have related data in parallel lists and want to loop through them together.",
        examples: [
          { code: "names = ['Alice', 'Bob', 'Carol']\nscores = [95, 78, 88]\n\nfor name, score in zip(names, scores):\n    print(f'{name}: {score}')", output: "Alice: 95\nBob: 78\nCarol: 88" },
          { code: "# Create a dict from two lists\nkeys = ['name', 'age', 'city']\nvalues = ['Alice', 30, 'Paris']\nprofile = dict(zip(keys, values))\nprint(profile)", output: "{'name': 'Alice', 'age': 30, 'city': 'Paris'}" },
        ],
        tip: "zip() stops at the shortest list. If your lists might have different lengths, use itertools.zip_longest() to keep going."
      },
      {
        name: "sorted() & reversed()",
        syntax: "sorted(iterable, key=None, reverse=False)\nlist(reversed(iterable))",
        description: "sorted() returns a new sorted list without changing the original. reversed() returns an iterator that goes backwards. Both work on any iterable.",
        examples: [
          { code: "nums = [3, 1, 4, 1, 5, 9]\nprint(sorted(nums))            # ascending\nprint(sorted(nums, reverse=True))  # descending\nprint(nums)                    # original unchanged!", output: "[1, 1, 3, 4, 5, 9]\n[9, 5, 4, 3, 1, 1]\n[3, 1, 4, 1, 5, 9]" },
          { code: "# Sort by custom key\nwords = ['banana', 'apple', 'cherry', 'kiwi']\nprint(sorted(words, key=len))", output: "['kiwi', 'apple', 'banana', 'cherry']" },
        ],
      },
      {
        name: "map() & filter()",
        syntax: "map(function, iterable)    → iterator\nfilter(function, iterable) → iterator",
        description: "map() applies a function to every item in a list. filter() keeps only items where the function returns True. Both return iterators — wrap with list() to get all values at once.",
        examples: [
          { code: "numbers = [1, 2, 3, 4, 5]\ndoubled = list(map(lambda x: x * 2, numbers))\nprint(doubled)", output: "[2, 4, 6, 8, 10]" },
          { code: "numbers = [1, 2, 3, 4, 5, 6, 7, 8]\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)", output: "[2, 4, 6, 8]" },
        ],
        tip: "List comprehensions are often more readable than map/filter: [x*2 for x in nums] instead of list(map(lambda x: x*2, nums)). Both work!"
      },
      {
        name: "any() & all()",
        syntax: "any(iterable)  # True if at least one item is truthy\nall(iterable)  # True only if every item is truthy",
        description: "Quick ways to check conditions across an entire collection without writing a loop.",
        examples: [
          { code: "scores = [72, 85, 90, 68, 77]\nprint(any(s >= 90 for s in scores))  # anyone get 90+?\nprint(all(s >= 60 for s in scores))  # everyone pass?", output: "True\nTrue" },
          { code: "names = ['Alice', 'Bob', '', 'Carol']\nprint(all(names))  # False — empty string is falsy", output: "False" },
        ],
      },
      {
        name: "type() & isinstance()",
        syntax: "type(object)              → type\nisinstance(object, type)  → bool",
        description: "type() tells you exactly what type something is. isinstance() checks if an object is a specific type (or any of several types). Prefer isinstance() for type-checking because it handles inheritance correctly.",
        examples: [
          { code: "print(type(42))        # <class 'int'>\nprint(type('hello'))   # <class 'str'>\nprint(type([1, 2]))    # <class 'list'>\nprint(type(3.14))      # <class 'float')", output: "<class 'int'>\n<class 'str'>\n<class 'list'>\n<class 'float'>" },
          { code: "print(isinstance(42, int))           # True\nprint(isinstance(42, (int, float)))  # True — check multiple!\nprint(isinstance('hi', int))         # False", output: "True\nTrue\nFalse" },
        ],
        tip: "isinstance() is preferred over type() == int because isinstance(True, int) returns True (booleans are ints in Python), which is usually what you want."
      },
      {
        name: "abs(), round(), min(), max(), sum()",
        syntax: "abs(x)           # absolute value\nround(x, digits) # round to n decimals\nmin(a, b, ...)   # smallest\nmax(a, b, ...)   # largest\nsum(iterable)    # total",
        description: "Quick math built-ins you'll use constantly. No import needed.",
        examples: [
          { code: "print(abs(-7))           # 7\nprint(round(3.14159, 2)) # 3.14\nprint(min(3, 1, 4, 1, 5)) # 1\nprint(max(3, 1, 4, 1, 5)) # 5\nprint(sum([1,2,3,4,5]))   # 15", output: "7\n3.14\n1\n5\n15" },
        ],
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // MODULES — REFERENCE
  // ════════════════════════════════════════════════════════
  {
    name: "Useful Modules",
    emoji: "📦",
    color: "#0ea5e9",
    description: "Python comes with a huge standard library. These are the modules you'll use most often — no installation required.",
    bookChapter: "Reference",
    commands: [
      {
        name: "import & from...import",
        syntax: "import module_name\nimport module_name as alias\nfrom module_name import something\nfrom module_name import *  # avoid this!",
        description: "Modules are files of Python code you can borrow from. import gives you access to the module's contents using dot notation (math.sqrt). from...import brings specific names directly into your file.",
        examples: [
          { code: "import math\nprint(math.pi)\nprint(math.sqrt(25))", output: "3.141592653589793\n5.0" },
          { code: "from math import pi, sqrt\nprint(pi)       # no 'math.' needed\nprint(sqrt(16))", output: "3.141592653589793\n4.0" },
          { code: "import random as rnd  # alias for convenience\nprint(rnd.randint(1, 10))", output: "7  (random)" },
        ],
        tip: "Avoid 'from module import *' — it dumps all names into your namespace and can cause confusing conflicts."
      },
      {
        name: "math module",
        syntax: "import math",
        description: "Mathematical functions and constants. Use it for anything beyond basic arithmetic.",
        examples: [
          { code: "import math\nprint(math.pi)         # 3.14159...\nprint(math.e)          # 2.71828...\nprint(math.sqrt(144))  # 12.0\nprint(math.floor(4.9)) # 4  (round down)\nprint(math.ceil(4.1))  # 5  (round up)\nprint(math.log(100, 10)) # 2.0  (log base 10)", output: "3.141592653589793\n2.718281828459045\n12.0\n4\n5\n2.0" },
        ],
      },
      {
        name: "random module",
        syntax: "import random",
        description: "Generate random numbers, make random choices, shuffle lists. Essential for games, simulations, and testing.",
        examples: [
          { code: "import random\n# Random integer between 1 and 6 (like a die)\nprint(random.randint(1, 6))", output: "4  (random)" },
          { code: "# Random choice from a list\nmagicians = ['alice', 'david', 'carolina']\nprint(random.choice(magicians))", output: "david  (random)" },
          { code: "# Shuffle a list in place\ndeck = [1, 2, 3, 4, 5, 6]\nrandom.shuffle(deck)\nprint(deck)", output: "[3, 1, 6, 2, 4, 5]  (random order)" },
          { code: "# Random float between 0 and 1\nprint(random.random())", output: "0.7236...  (random)" },
        ],
        tip: "Use random.seed(42) to get reproducible 'random' results — useful for testing and debugging."
      },
      {
        name: "os module",
        syntax: "import os",
        description: "Interact with the operating system — file paths, directories, environment variables.",
        examples: [
          { code: "import os\nprint(os.getcwd())          # current directory\nprint(os.listdir('.'))      # list files here\nprint(os.path.exists('file.txt'))  # does it exist?", output: "/Users/you/project\n['main.py', 'data.txt']\nFalse" },
          { code: "# Build file paths safely (works on all OS)\npath = os.path.join('folder', 'subfolder', 'file.txt')\nprint(path)", output: "folder/subfolder/file.txt" },
        ],
        tip: "Always use os.path.join() to build file paths — never hardcode / or \\ slashes, they differ between Mac/Linux and Windows."
      },
      {
        name: "json module",
        syntax: "import json\njson.dumps(data)   # Python → JSON string\njson.loads(string) # JSON string → Python\njson.dump(data, file)  # write to file\njson.load(file)        # read from file",
        description: "JSON (JavaScript Object Notation) is a standard format for storing and sharing data. Python's json module converts between Python dicts/lists and JSON strings perfectly.",
        examples: [
          { code: "import json\n# Python dict → JSON string\ndata = {'name': 'Alice', 'scores': [95, 87, 92]}\njson_str = json.dumps(data, indent=2)\nprint(json_str)", output: '{\n  "name": "Alice",\n  "scores": [\n    95,\n    87,\n    92\n  ]\n}' },
          { code: "# JSON string → Python dict\nparsed = json.loads(json_str)\nprint(parsed['name'])\nprint(type(parsed))", output: "Alice\n<class 'dict'>" },
        ],
        tip: "JSON is THE standard way to save and load data in Python programs. Learn it early — you'll use it constantly."
      },
      {
        name: "datetime module",
        syntax: "from datetime import datetime, date, timedelta",
        description: "Work with dates and times. Create, format, compare, and calculate date differences.",
        examples: [
          { code: "from datetime import datetime, date\nnow = datetime.now()\nprint(now.year, now.month, now.day)\nprint(now.strftime('%Y-%m-%d %H:%M'))", output: "2025 5 20\n2025-05-20 14:30" },
          { code: "from datetime import date, timedelta\ntoday = date.today()\nbirthday = date(2000, 6, 15)\nage_days = (today - birthday).days\nprint(f'Born {age_days:,} days ago')", output: "Born 9,105 days ago" },
        ],
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // COMPREHENSIONS & GENERATORS
  // ════════════════════════════════════════════════════════
  {
    name: "Comprehensions",
    emoji: "✨",
    color: "#eab308",
    description: "Elegant one-liners to create lists, dicts, and sets. A hallmark of 'Pythonic' code.",
    bookChapter: "Reference",
    commands: [
      {
        name: "List Comprehension",
        syntax: "[expression for item in iterable]\n[expression for item in iterable if condition]",
        description: "The most common comprehension. Creates a new list by transforming each item in an existing sequence. Optional if clause filters items.",
        examples: [
          { code: "# Squares of 1-5\nsquares = [n**2 for n in range(1, 6)]\nprint(squares)", output: "[1, 4, 9, 16, 25]" },
          { code: "# Only even numbers\nevens = [n for n in range(10) if n % 2 == 0]\nprint(evens)", output: "[0, 2, 4, 6, 8]" },
          { code: "# Transform strings\nnames = ['alice', 'bob', 'carol']\ncapitalized = [name.title() for name in names]\nprint(capitalized)", output: "['Alice', 'Bob', 'Carol']" },
        ],
        tip: "If your comprehension has a nested loop or complex condition and starts looking hard to read, use a regular for loop — readability always wins."
      },
      {
        name: "Dict & Set Comprehension",
        syntax: "{k: v for item in iterable}   # dict\n{expression for item in iterable}  # set",
        description: "Same idea as list comprehension but creates dicts or sets instead. Dict comprehensions are great for transforming keys or values. Set comprehensions auto-deduplicate.",
        examples: [
          { code: "# Dict comprehension\nnums = [1, 2, 3, 4, 5]\nsquare_dict = {n: n**2 for n in nums}\nprint(square_dict)", output: "{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}" },
          { code: "# Invert a dict\noriginal = {'a': 1, 'b': 2, 'c': 3}\ninverted = {v: k for k, v in original.items()}\nprint(inverted)", output: "{1: 'a', 2: 'b', 3: 'c'}" },
          { code: "# Set comprehension — auto unique\nletters = {ch.lower() for ch in 'Hello World'}\nprint(letters)", output: "{'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd'}" },
        ],
      },
      {
        name: "Generator Expression",
        syntax: "(expression for item in iterable)",
        description: "Like a list comprehension but with parentheses. DOESN'T create the whole list upfront — generates values one at a time. Use this when you only need to iterate once and memory matters (e.g., large datasets).",
        examples: [
          { code: "# Sum without creating a list\ntotal = sum(n**2 for n in range(1000000))\nprint(total)  # computed without a million-item list!", output: "333332833333500000" },
          { code: "# Vs list comprehension — both work, gen uses less RAM\ngen = (n**2 for n in range(5))   # generator\nlst = [n**2 for n in range(5)]    # full list\n\nprint(next(gen))  # 0\nprint(next(gen))  # 1", output: "0\n1" },
        ],
        tip: "When passing a comprehension directly to a function like sum() or max(), use a generator expression — you save memory AND can skip the extra list() call."
      },
    ]
  },

  // ════════════════════════════════════════════════════════
  // PYTHON STYLE & BEST PRACTICES
  // ════════════════════════════════════════════════════════
  {
    name: "Python Style Guide",
    emoji: "🎨",
    color: "#64748b",
    description: "How to write clean, Pythonic code that other programmers will respect. Based on PEP 8 — Python's official style guide.",
    bookChapter: "Reference",
    commands: [
      {
        name: "Naming Conventions",
        syntax: "variable_name = ...      # snake_case\nfunction_name()          # snake_case\nClassName                # PascalCase / CapWords\nCONSTANT_VALUE = ...     # UPPER_SNAKE_CASE\n_private_var = ...       # leading underscore = private",
        description: "Python has strong naming conventions. Following them makes your code instantly readable to any Python developer. These aren't enforced by Python — but they're universally followed.",
        examples: [
          { code: "# Good Python naming:\nuser_name = 'Alice'            # variable — snake_case\nfavorite_color = 'blue'\nMAX_CONNECTIONS = 100          # constant — UPPER_CASE\n\ndef calculate_average(numbers):  # function — snake_case\n    return sum(numbers) / len(numbers)\n\nclass BankAccount:              # class — PascalCase\n    pass", output: "" },
        ],
        tip: "Be consistent! Python developers immediately notice mismatched naming styles. Use snake_case everywhere except class names."
      },
      {
        name: "Line Length & Spacing",
        syntax: "# Lines: max 79 characters (PEP 8)\n# Around operators: spaces\nx = 5 + 3      # good\nx=5+3          # bad\n\n# Function calls: no spaces inside\nprint('hello')  # good\nprint( 'hello' ) # bad",
        description: "PEP 8 recommends lines no longer than 79 characters. Add spaces around operators (=, +, -, etc.) and after commas. This makes code more scannable.",
        examples: [
          { code: "# Good spacing:\nresult = first_number + second_number\nmy_list = [1, 2, 3, 4, 5]\nif score > 90 and attempts < 3:", output: "" },
          { code: "# Two blank lines before/after functions and classes\ndef function_one():\n    pass\n\n\ndef function_two():\n    pass", output: "" },
        ],
        tip: "Most editors have a PEP 8 linter built in. Let it guide you at first — you'll internalize the style quickly."
      },
      {
        name: "Docstrings",
        syntax: "def my_function():\n    \"\"\"One-line summary.\"\"\"\n    pass\n\ndef complex_function(x, y):\n    \"\"\"Summary line.\n    \n    More detail about what it does,\n    its parameters, and what it returns.\n    \"\"\"",
        description: "A docstring is a string literal as the first statement of a function, class, or module. It describes what the function does. Python stores it in the __doc__ attribute and help() displays it.",
        examples: [
          { code: "def get_formatted_name(first, last):\n    \"\"\"Return a full name, neatly formatted.\"\"\"\n    return f'{first.title()} {last.title()}'\n\n# Access it:\nhelp(get_formatted_name)", output: "Help on function get_formatted_name:\n  Return a full name, neatly formatted." },
        ],
        tip: "Write docstrings for every function you create. Future-you will thank present-you when debugging at 2am."
      },
      {
        name: "The Zen of Python",
        syntax: ">>> import this",
        description: "The Zen of Python is a set of 19 guiding principles for writing good Python code, written by Tim Peters. Type 'import this' in a Python shell to read them all. A few key ones:",
        examples: [
          { code: "# Beautiful is better than ugly.\n# Explicit is better than implicit.\n# Simple is better than complex.\n# Complex is better than complicated.\n# Readability counts.\n# There should be one obvious way to do it.\n# Now is better than never.\n# If the implementation is hard to explain, it's a bad idea.\nimport this", output: "The Zen of Python, by Tim Peters\n..." },
        ],
        tip: "The most important rule: 'Readability counts.' Write code for humans to read, not just for computers to execute. Your future self is the human you're writing for."
      },
    ]
  },

];

// ── Search helper ──────────────────────────────────────────────────────────────
export function searchReference(query) {
  if (!query.trim()) return referenceCategories;
  const q = query.toLowerCase();
  return referenceCategories
    .map(cat => ({
      ...cat,
      commands: cat.commands.filter(cmd =>
        cmd.name.toLowerCase().includes(q) ||
        cmd.description.toLowerCase().includes(q) ||
        cmd.syntax.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q) ||
        (cmd.tip && cmd.tip.toLowerCase().includes(q)) ||
        (cmd.commonMistake && cmd.commonMistake.toLowerCase().includes(q)) ||
        cmd.examples?.some(ex => ex.code.toLowerCase().includes(q))
      )
    }))
    .filter(cat => cat.commands.length > 0);
}
