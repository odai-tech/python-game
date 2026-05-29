export const levels = [
  // ── CHAPTER 1: BASICS ──────────────────────────────────────────────────
  {
    id: 1,
    chapter: "The Basics",
    title: "Hello, World!",
    description:
      "Every programmer's first step! Use the `print()` function to display a message on the screen. Type exactly:\n\n`print(\"Hello, World!\")`",
    hint: "The print() function displays text. Put your text inside quotes inside the parentheses: print(\"your text here\")",
    initialCode: "# Your first Python program!\n# Use print() to say hello to the world\n\n",
    expectedOutput: "Hello, World!",
    difficulty: "Beginner",
    xp: 50,
    successMessage: "🎉 Welcome to Python! You've written your very first program.",
    concept: "print() outputs text to the console. Text must be inside quotes."
  },
  {
    id: 2,
    chapter: "The Basics",
    title: "Variables",
    description:
      "Variables are like labeled boxes that store data. Create a variable called `name` and assign your name to it, then print it.\n\nExample: `name = \"Alex\"`\n\nStore **'Dragon Slayer'** in `name` and print it.",
    hint: "Variables are created with: variable_name = value\nFor text (strings), use quotes. Then just call print(variable_name)",
    initialCode: "# Create a variable called name\n# Assign the string 'Dragon Slayer' to it\n# Then print it\n\n",
    expectedOutput: "Dragon Slayer",
    difficulty: "Beginner",
    xp: 75,
    successMessage: "Variables mastered! You can now store and reuse data.",
    concept: "Variables store data. Use = to assign a value. String values need quotes."
  },
  {
    id: 3,
    chapter: "The Basics",
    title: "Numbers & Math",
    description:
      "Python is a powerful calculator! It supports `+`, `-`, `*` (multiply), `/` (divide), and `**` (power).\n\nCreate a variable `gold` with value `10`, a variable `bonus` with value `5`, then print their sum.",
    hint: "Create two variables then print their sum:\ngold = 10\nbonus = 5\nprint(gold + bonus)",
    initialCode: "# Create variables gold = 10 and bonus = 5\n# Print their sum\n\n",
    expectedOutput: "15",
    difficulty: "Beginner",
    xp: 75,
    successMessage: "Math wizard! Python can handle all kinds of calculations.",
    concept: "Python supports arithmetic: + - * / ** (power) // (floor div) % (modulo)"
  },
  {
    id: 4,
    chapter: "The Basics",
    title: "String Magic",
    description:
      "Strings (text) have superpowers! You can combine them with `+` (concatenation) or use f-strings for easy formatting.\n\nCreate `hero = 'Arthur'` and `level = 5`, then print:\n`Arthur is level 5`\n\nUse an f-string: `f\"{hero} is level {level}\"`",
    hint: "f-strings let you embed variables in text:\nf\"Hello, {variable_name}!\"\nThe f before the quote is important!",
    initialCode: "hero = 'Arthur'\nlevel = 5\n# Use an f-string to print: Arthur is level 5\n\n",
    expectedOutput: "Arthur is level 5",
    difficulty: "Beginner",
    xp: 100,
    successMessage: "String sorcery! f-strings are one of Python's best features.",
    concept: "f-strings: f\"text {variable} more text\" — embed variables directly in strings."
  },

  // ── CHAPTER 2: DECISIONS ───────────────────────────────────────────────
  {
    id: 5,
    chapter: "Decisions",
    title: "If / Else",
    description:
      "Code can make decisions! An `if` statement runs code only when a condition is `True`.\n\nA hero has `health = 75`. Print `'Healthy'` if health is above 50, otherwise print `'Danger!'`",
    hint: "if condition:\n    # code when True (indent with 4 spaces!)\nelse:\n    # code when False\n\nCompare numbers with: > < == >= <=",
    initialCode: "health = 75\n# Write an if/else:\n# If health > 50, print 'Healthy'\n# Otherwise print 'Danger!'\n\n",
    expectedOutput: "Healthy",
    difficulty: "Beginner",
    xp: 100,
    successMessage: "Decision maker! Your code can now branch based on conditions.",
    concept: "if/else: run different code based on whether a condition is True or False."
  },
  {
    id: 6,
    chapter: "Decisions",
    title: "Elif Chains",
    description:
      "Sometimes you need more than two options. Use `elif` (\"else if\") to chain conditions.\n\n`score = 85`\n- 90 or above → print `'S Rank'`\n- 70 or above → print `'A Rank'`\n- Otherwise → print `'B Rank'`",
    hint: "if score >= 90:\n    print('S Rank')\nelif score >= 70:\n    print('A Rank')\nelse:\n    print('B Rank')",
    initialCode: "score = 85\n# Use if/elif/else to determine the rank\n\n",
    expectedOutput: "A Rank",
    difficulty: "Beginner",
    xp: 125,
    successMessage: "Multi-path master! elif lets you handle many cases cleanly.",
    concept: "elif = else if. Chain as many as you need between if and else."
  },

  // ── CHAPTER 3: LOOPS ──────────────────────────────────────────────────
  {
    id: 7,
    chapter: "Loops",
    title: "For Loops",
    description:
      "Loops repeat code automatically! A `for` loop with `range()` counts for you.\n\nPrint the numbers **1, 2, 3, 4, 5** (one per line) using a `for` loop and `range(1, 6)`.",
    hint: "for i in range(1, 6):  # 1 up to (not including) 6\n    print(i)           # indent 4 spaces!",
    initialCode: "# Use a for loop with range(1, 6) to print 1 through 5\n\n",
    expectedOutput: "1\n2\n3\n4\n5",
    difficulty: "Beginner",
    xp: 125,
    successMessage: "Loop legend! You just saved yourself from writing 5 print statements.",
    concept: "range(start, stop) generates numbers from start up to (not including) stop."
  },
  {
    id: 8,
    chapter: "Loops",
    title: "While Loops",
    description:
      "A `while` loop keeps running **as long as** a condition is True.\n\nStart with `power = 1`. Double it each loop while it's less than 20. Print each value of power.\n\nExpected output:\n`1`\n`2`\n`4`\n`8`\n`16`",
    hint: "power = 1\nwhile power < 20:\n    print(power)\n    power = power * 2  # or: power *= 2",
    initialCode: "power = 1\n# While power < 20: print power, then double it\n\n",
    expectedOutput: "1\n2\n4\n8\n16",
    difficulty: "Intermediate",
    xp: 150,
    successMessage: "While warrior! You controlled a loop with a dynamic condition.",
    concept: "while loops continue until the condition becomes False. Always update the condition variable!"
  },
  {
    id: 9,
    chapter: "Loops",
    title: "Loop + Sum",
    description:
      "Combine a loop with an accumulator variable to build a total.\n\nSum all numbers from 1 to 10 using a loop. Print the result.\n\n(1+2+3+4+5+6+7+8+9+10 = **55**)",
    hint: "total = 0\nfor i in range(1, 11):\n    total = total + i  # or: total += i\nprint(total)",
    initialCode: "# Create a total variable starting at 0\n# Add each number 1-10 to it in a loop\n# Print the final total\n\n",
    expectedOutput: "55",
    difficulty: "Intermediate",
    xp: 150,
    successMessage: "Accumulator ace! This pattern is used everywhere in programming.",
    concept: "Accumulator pattern: start at 0, add to it each iteration. total += i is short for total = total + i"
  },

  // ── CHAPTER 4: LISTS ──────────────────────────────────────────────────
  {
    id: 10,
    chapter: "Lists",
    title: "Creating Lists",
    description:
      "Lists store multiple values in one variable.\n\nCreate a list called `inventory` with items: `'sword'`, `'shield'`, `'potion'`.\n\nThen print the **first item** (index 0) and the **last item** (index -1 or index 2).",
    hint: "inventory = ['sword', 'shield', 'potion']\nprint(inventory[0])   # first item\nprint(inventory[-1])  # last item (-1 means last)",
    initialCode: "# Create a list called inventory\n# Print the first item\n# Print the last item\n\n",
    expectedOutput: "sword\npotion",
    difficulty: "Intermediate",
    xp: 175,
    successMessage: "List lord! Lists are one of Python's most powerful data structures.",
    concept: "Lists: [item1, item2, item3]. Index with [0] (first), [-1] (last). Lists are ordered & changeable."
  },
  {
    id: 11,
    chapter: "Lists",
    title: "Looping Lists",
    description:
      "You can loop through every item in a list with `for item in list`.\n\nGiven `spells = ['Fireball', 'Ice Shard', 'Thunder']`, print each spell on its own line.",
    hint: "spells = ['Fireball', 'Ice Shard', 'Thunder']\nfor spell in spells:\n    print(spell)",
    initialCode: "spells = ['Fireball', 'Ice Shard', 'Thunder']\n# Loop through spells and print each one\n\n",
    expectedOutput: "Fireball\nIce Shard\nThunder",
    difficulty: "Intermediate",
    xp: 175,
    successMessage: "Iteration illusion! Looping over lists is something you'll do every day.",
    concept: "for item in list: — the simplest way to process every element in a list."
  },
  {
    id: 12,
    chapter: "Lists",
    title: "List Methods",
    description:
      "Lists have built-in methods to add, remove, and sort items.\n\nStart with `heroes = ['Mage', 'Rogue']`.\n1. `.append('Warrior')` to add to the end\n2. Print the length with `len(heroes)`\n3. Print the whole list",
    hint: "heroes = ['Mage', 'Rogue']\nheroes.append('Warrior')\nprint(len(heroes))\nprint(heroes)",
    initialCode: "heroes = ['Mage', 'Rogue']\n# 1. Append 'Warrior' to heroes\n# 2. Print the length of heroes\n# 3. Print the list itself\n\n",
    expectedOutput: "3\n['Mage', 'Rogue', 'Warrior']",
    difficulty: "Intermediate",
    xp: 200,
    successMessage: "Method maestro! append, remove, sort, len — lists are full of useful tools.",
    concept: ".append() adds to end. len() returns size. Other useful: .sort(), .remove(), .pop()"
  },

  // ── CHAPTER 5: FUNCTIONS ──────────────────────────────────────────────
  {
    id: 13,
    chapter: "Functions",
    title: "Your First Function",
    description:
      "Functions are reusable blocks of code. Define them with `def`, then call them.\n\nWrite a function called `greet` that prints `'Welcome, adventurer!'`.\nThen call the function.",
    hint: "def greet():           # define the function\n    print('Welcome, adventurer!')  # indent 4 spaces\n\ngreet()  # call the function",
    initialCode: "# Define a function called greet\n# It should print: Welcome, adventurer!\n# Then call the function\n\n",
    expectedOutput: "Welcome, adventurer!",
    difficulty: "Intermediate",
    xp: 200,
    successMessage: "Function founder! def lets you write code once and reuse it anywhere.",
    concept: "def name(): defines a function. Call it with name(). Always indent the body 4 spaces."
  },
  {
    id: 14,
    chapter: "Functions",
    title: "Parameters",
    description:
      "Functions become powerful when they accept **parameters** (inputs).\n\nWrite a function `power_up(hero, stat)` that prints:\n`'{hero} gained +10 {stat}!'`\n\nCall it with `power_up('Mira', 'strength')` and `power_up('Leo', 'speed')`.",
    hint: "def power_up(hero, stat):\n    print(f'{hero} gained +10 {stat}!')\n\npower_up('Mira', 'strength')\npower_up('Leo', 'speed')",
    initialCode: "# Define power_up(hero, stat) function\n# It prints: {hero} gained +10 {stat}!\n# Call it twice as shown\n\n",
    expectedOutput: "Mira gained +10 strength!\nLeo gained +10 speed!",
    difficulty: "Intermediate",
    xp: 225,
    successMessage: "Parameter pro! Parameters let functions work with different data each call.",
    concept: "Parameters are inputs to functions. def func(param1, param2): — use them inside the function body."
  },
  {
    id: 15,
    chapter: "Functions",
    title: "Return Values",
    description:
      "Functions can **return** a result for you to use elsewhere.\n\nWrite a function `calculate_damage(attack, defense)` that returns `attack - defense`.\n\nCall it with attack=50 and defense=20, store the result in `damage`, and print it.",
    hint: "def calculate_damage(attack, defense):\n    return attack - defense\n\ndamage = calculate_damage(50, 20)\nprint(damage)",
    initialCode: "# Define calculate_damage(attack, defense)\n# It should return attack - defense\n# Call it with 50, 20 and print the result\n\n",
    expectedOutput: "30",
    difficulty: "Intermediate",
    xp: 250,
    successMessage: "Return ranger! return sends data back from a function so you can use it.",
    concept: "return exits a function and sends a value back. Capture it: result = my_func()"
  },

  // ── CHAPTER 6: DICTIONARIES ───────────────────────────────────────────
  {
    id: 16,
    chapter: "Dictionaries",
    title: "Key-Value Pairs",
    description:
      "Dictionaries store data as **key: value** pairs — like a real dictionary maps words to definitions.\n\nCreate a `character` dict with keys `'name'`, `'class'`, `'level'` — values `'Zara'`, `'Mage'`, `10`.\n\nPrint `character['name']` and `character['level']`.",
    hint: "character = {\n    'name': 'Zara',\n    'class': 'Mage',\n    'level': 10\n}\nprint(character['name'])\nprint(character['level'])",
    initialCode: "# Create a character dictionary\n# Keys: 'name', 'class', 'level'\n# Values: 'Zara', 'Mage', 10\n# Print the name and level\n\n",
    expectedOutput: "Zara\n10",
    difficulty: "Advanced",
    xp: 275,
    successMessage: "Dictionary detective! Key-value pairs are used in almost every real program.",
    concept: "Dicts: {key: value}. Access with dict[key]. Keys are usually strings, values can be anything."
  },
  {
    id: 17,
    chapter: "Dictionaries",
    title: "Looping Dicts",
    description:
      "Use `.items()` to loop through both keys and values in a dictionary.\n\nGiven `stats = {'HP': 100, 'MP': 50, 'ATK': 75}`, print each stat like:\n`HP: 100`\n`MP: 50`\n`ATK: 75`",
    hint: "stats = {'HP': 100, 'MP': 50, 'ATK': 75}\nfor key, value in stats.items():\n    print(f'{key}: {value}')",
    initialCode: "stats = {'HP': 100, 'MP': 50, 'ATK': 75}\n# Loop through stats and print each key: value\n\n",
    expectedOutput: "HP: 100\nMP: 50\nATK: 75",
    difficulty: "Advanced",
    xp: 275,
    successMessage: "Dict dynamo! .items() gives you both key and value — super useful!",
    concept: "dict.items() returns (key, value) pairs. Loop with: for k, v in my_dict.items():"
  },

  // ── CHAPTER 7: ADVANCED ───────────────────────────────────────────────
  {
    id: 18,
    chapter: "Advanced",
    title: "List Comprehensions",
    description:
      "List comprehensions create lists in a single elegant line!\n\nCreate a list `squares` that contains the squares of numbers 1 through 5.\n(1, 4, 9, 16, 25)\n\nThen print it.",
    hint: "squares = [x**2 for x in range(1, 6)]\nprint(squares)\n\n# This is equivalent to:\n# squares = []\n# for x in range(1, 6):\n#     squares.append(x**2)",
    initialCode: "# Use a list comprehension to create squares\n# [expression for variable in iterable]\n\n",
    expectedOutput: "[1, 4, 9, 16, 25]",
    difficulty: "Advanced",
    xp: 300,
    successMessage: "Comprehension champion! List comprehensions are the Pythonic way to build lists.",
    concept: "[expr for x in iterable] — creates a list by applying expr to each item. Add if condition at end to filter."
  },
  {
    id: 19,
    chapter: "Advanced",
    title: "String Methods",
    description:
      "Strings have dozens of built-in methods!\n\n`message = '  hello, world!  '`\n\n1. Strip spaces: `.strip()`\n2. Capitalize: `.title()`\n3. Count 'l': `.count('l')`\n\nPrint each result on its own line.",
    hint: "message = '  hello, world!  '\nprint(message.strip())\nprint(message.strip().title())\nprint(message.count('l'))",
    initialCode: "message = '  hello, world!  '\n# 1. Print message stripped of whitespace\n# 2. Print message stripped then title-cased\n# 3. Print count of letter 'l' in message\n\n",
    expectedOutput: "hello, world!\nHello, World!\n3",
    difficulty: "Advanced",
    xp: 300,
    successMessage: "String surgeon! Python's string methods are incredibly powerful.",
    concept: "str.strip() removes whitespace. .title() capitalises words. .count(x) counts occurrences. Chain methods!"
  },
  {
    id: 20,
    chapter: "Advanced",
    title: "The Final Boss",
    description:
      "Combine everything you've learned! \n\nWrite a function `analyze(numbers)` that takes a list and prints:\n- The **sum** (use `sum()`)\n- The **maximum** (use `max()`)\n- The **minimum** (use `min()`)\n\nCall it with `[4, 7, 2, 9, 1, 5]`.\n\nExpected:\n`Sum: 28`\n`Max: 9`\n`Min: 1`",
    hint: "def analyze(numbers):\n    print(f'Sum: {sum(numbers)}')\n    print(f'Max: {max(numbers)}')\n    print(f'Min: {min(numbers)}')\n\nanalyze([4, 7, 2, 9, 1, 5])",
    initialCode: "# Write the analyze(numbers) function\n# Print Sum, Max, Min with f-strings\n# Call it with [4, 7, 2, 9, 1, 5]\n\n",
    expectedOutput: "Sum: 28\nMax: 9\nMin: 1",
    difficulty: "Advanced",
    xp: 500,
    successMessage: "🏆 LEGENDARY! You've completed PyQuest and mastered Python fundamentals! You're a real programmer now.",
    concept: "sum(), max(), min() are built-in functions. Combine them with f-strings and functions for clean, readable code."
  },

  // ── CHAPTER 8: BOOLEANS & LOGIC ──────────────────────────────────────
  {
    id: 21,
    chapter: "Booleans & Logic",
    title: "Boolean Values",
    description:
      "In Python, truth has a type! `True` and `False` are **boolean** values — the result of any condition.\n\nPrint `True` by itself, then print its type using `type(True)`.\n\nExpected:\n`True`\n`<class 'bool'>`",
    hint: "print(True)\nprint(type(True))\n\n# True and False must be capitalised — Python is case-sensitive!",
    initialCode: "# Booleans are True or False (capitalised!)\n# Print the value True\n# Then print its type with type()\n\n",
    expectedOutput: "True\n<class 'bool'>",
    difficulty: "Beginner",
    xp: 100,
    successMessage: "Truth unlocked! Booleans are the foundation of every decision your code makes.",
    concept: "bool type has two values: True and False. type() reveals any value's data type."
  },
  {
    id: 22,
    chapter: "Booleans & Logic",
    title: "Logical Operators",
    description:
      "Combine booleans with `and`, `or`, and `not`!\n\nA hero has `shield = True` and `potion = False`.\n\nPrint:\n- `shield and potion` → both must be True\n- `shield or potion` → at least one must be True\n- `not shield` → flips the value\n\nExpected:\n`False`\n`True`\n`False`",
    hint: "shield = True\npotion = False\nprint(shield and potion)  # False — potion is False\nprint(shield or potion)   # True  — shield is True\nprint(not shield)         # False — flips True to False",
    initialCode: "shield = True\npotion = False\n# Print: shield AND potion\n# Print: shield OR potion\n# Print: NOT shield\n\n",
    expectedOutput: "False\nTrue\nFalse",
    difficulty: "Beginner",
    xp: 125,
    successMessage: "Logic lord! and/or/not are the building blocks of complex conditions.",
    concept: "and: both must be True. or: at least one True. not: flips True↔False."
  },
  {
    id: 23,
    chapter: "Booleans & Logic",
    title: "Comparison Chains",
    description:
      "Python lets you **chain comparisons** just like in maths: `10 < 20 < 30`!\n\nA hero's `score = 75`. Check:\n- Is score between 50 and 100 inclusive? → `50 <= score <= 100`\n- Is score exactly 75? → `score == 75`\n\nPrint both results.\n\nExpected:\n`True`\n`True`",
    hint: "score = 75\nprint(50 <= score <= 100)  # chained comparison!\nprint(score == 75)         # equality check with ==",
    initialCode: "score = 75\n# Check if score is between 50 and 100 (inclusive)\n# Check if score equals exactly 75\n# Print both results\n\n",
    expectedOutput: "True\nTrue",
    difficulty: "Beginner",
    xp: 125,
    successMessage: "Chain champion! Python's chained comparisons are cleaner than any other language.",
    concept: "Chained comparisons: a < b < c checks both at once. == tests equality (not = which assigns)."
  },

  // ── CHAPTER 9: STRINGS DEEP DIVE ─────────────────────────────────────
  {
    id: 24,
    chapter: "Strings Deep Dive",
    title: "String Slicing",
    description:
      "Slice strings like a ninja! `text[start:stop]` extracts a portion.\n\n`message = 'Dragon Quest'`\n\n- `message[0:6]` → first 6 characters\n- `message[-4:]` → last 4 characters\n\nPrint both slices.\n\nExpected:\n`Dragon`\n`uest`",
    hint: "message = 'Dragon Quest'\nprint(message[0:6])   # 'Dragon' — indices 0 to 5\nprint(message[-4:])   # 'uest'  — last 4 characters",
    initialCode: "message = 'Dragon Quest'\n# Slice characters 0 to 6 (not including 6)\n# Slice the last 4 characters\n# Print both results\n\n",
    expectedOutput: "Dragon\nuest",
    difficulty: "Intermediate",
    xp: 150,
    successMessage: "Slice sorcerer! Slicing is one of Python's most elegant string tools.",
    concept: "text[start:stop] — stop is exclusive. Negative indices count from the end: -1 is last char."
  },
  {
    id: 25,
    chapter: "Strings Deep Dive",
    title: "String Methods 2",
    description:
      "Strings have dozens of built-in methods. Let's use three!\n\n`word = 'hello world'`\n\n1. `.upper()` → all caps\n2. `.replace('world', 'Python')` → swap a word\n3. `.split()` → chop into a list\n\nPrint each on its own line.\n\nExpected:\n`HELLO WORLD`\n`hello Python`\n`['hello', 'world']`",
    hint: "word = 'hello world'\nprint(word.upper())\nprint(word.replace('world', 'Python'))\nprint(word.split())",
    initialCode: "word = 'hello world'\n# 1. Print word in ALL CAPS using .upper()\n# 2. Print with 'world' replaced by 'Python'\n# 3. Print word split into a list\n\n",
    expectedOutput: "HELLO WORLD\nhello Python\n['hello', 'world']",
    difficulty: "Intermediate",
    xp: 175,
    successMessage: "Method master! upper, replace, split — string methods make text manipulation effortless.",
    concept: ".upper() uppercases. .replace(old,new) swaps text. .split() splits on whitespace into a list."
  },
  {
    id: 26,
    chapter: "Strings Deep Dive",
    title: "String Formatting",
    description:
      "Python has two great ways to format strings: `.format()` and f-strings.\n\n`template = 'Level {} hero: {}'`\n\n1. Use `.format(10, 'Zara')` to fill the `{}`s\n2. Use an f-string to produce the same result\n\nBoth should print:\n`Level 10 hero: Zara`",
    hint: "template = 'Level {} hero: {}'\nprint(template.format(10, 'Zara'))\n\n# f-string version:\nlevel = 10\nname = 'Zara'\nprint(f'Level {level} hero: {name}')",
    initialCode: "template = 'Level {} hero: {}'\n# 1. Use .format(10, 'Zara') on template and print it\n# 2. Use an f-string to print the same text\nlevel = 10\nname = 'Zara'\n\n",
    expectedOutput: "Level 10 hero: Zara\nLevel 10 hero: Zara",
    difficulty: "Intermediate",
    xp: 175,
    successMessage: "Format fanatic! Both .format() and f-strings are tools every Python dev knows cold.",
    concept: "'text {} more {}'.format(a, b) fills {} in order. f'text {a} more {b}' embeds variables directly."
  },
  {
    id: 27,
    chapter: "Strings Deep Dive",
    title: "Join & Split",
    description:
      "`.join()` merges a list into a string. `.split()` does the reverse!\n\n1. `words = ['fire', 'ice', 'thunder']` — join with `' + '`\n2. `stats = 'HP:100:MP:50'` — split by `':'`\n\nPrint both results.\n\nExpected:\n`fire + ice + thunder`\n`['HP', '100', 'MP', '50']`",
    hint: "words = ['fire', 'ice', 'thunder']\nprint(' + '.join(words))\n\nstats = 'HP:100:MP:50'\nprint(stats.split(':'))",
    initialCode: "words = ['fire', 'ice', 'thunder']\n# Join the list with ' + ' as separator and print it\n\nstats = 'HP:100:MP:50'\n# Split stats by ':' and print the resulting list\n\n",
    expectedOutput: "fire + ice + thunder\n['HP', '100', 'MP', '50']",
    difficulty: "Intermediate",
    xp: 200,
    successMessage: "Join & split juggler! These two methods are perfect mirrors of each other.",
    concept: "'sep'.join(list) glues list items with sep. str.split('sep') breaks on that separator."
  },

  // ── CHAPTER 10: TUPLES & SETS ─────────────────────────────────────────
  {
    id: 28,
    chapter: "Tuples & Sets",
    title: "Tuples",
    description:
      "Tuples are like lists, but **immutable** — once created, they can't change. Great for fixed data like coordinates!\n\n`coords = (10, 25)`\n\nPrint:\n1. The first element `coords[0]`\n2. The length `len(coords)`\n3. The whole tuple `coords`\n\nExpected:\n`10`\n`2`\n`(10, 25)`",
    hint: "coords = (10, 25)\nprint(coords[0])    # first element\nprint(len(coords))  # number of elements\nprint(coords)       # the whole tuple",
    initialCode: "coords = (10, 25)\n# Print the first element\n# Print the length of the tuple\n# Print the whole tuple\n\n",
    expectedOutput: "10\n2\n(10, 25)",
    difficulty: "Intermediate",
    xp: 200,
    successMessage: "Tuple titan! Tuples are perfect for data that should never change.",
    concept: "Tuples use () and are immutable — you can read them but not modify them. Faster than lists for fixed data."
  },
  {
    id: 29,
    chapter: "Tuples & Sets",
    title: "Tuple Unpacking",
    description:
      "Unpack a tuple into individual variables in one line — it's cleaner than indexing!\n\n`position = (5, 12, 3)`\n\nUnpack as `x, y, z = position`, then print:\n`X:5 Y:12 Z:3`\n\nUse an f-string.",
    hint: "position = (5, 12, 3)\nx, y, z = position          # unpacking!\nprint(f'X:{x} Y:{y} Z:{z}')",
    initialCode: "position = (5, 12, 3)\n# Unpack position into x, y, z\n# Print using an f-string: X:5 Y:12 Z:3\n\n",
    expectedOutput: "X:5 Y:12 Z:3",
    difficulty: "Intermediate",
    xp: 200,
    successMessage: "Unpack unleashed! Tuple unpacking keeps your code clean and readable.",
    concept: "x, y, z = (5, 12, 3) assigns each value to a variable in one step. Also works with lists."
  },
  {
    id: 30,
    chapter: "Tuples & Sets",
    title: "Sets",
    description:
      "Sets store **unique** values — duplicates are automatically removed!\n\n`enemies = {'goblin', 'orc', 'troll', 'goblin'}`\n\n1. Print `len(enemies)` — notice 'goblin' only counts once\n2. Add `'dragon'` with `.add()`\n3. Print whether `'goblin'` is in enemies\n\nExpected:\n`3`\n`True`",
    hint: "enemies = {'goblin', 'orc', 'troll', 'goblin'}\nprint(len(enemies))          # 3 — duplicate removed\nenemies.add('dragon')\nprint('goblin' in enemies)   # True",
    initialCode: "enemies = {'goblin', 'orc', 'troll', 'goblin'}\n# Print the length (duplicates removed automatically!)\n# Add 'dragon' to the set\n# Check if 'goblin' is in enemies and print the result\n\n",
    expectedOutput: "3\nTrue",
    difficulty: "Intermediate",
    xp: 225,
    successMessage: "Set slayer! Sets are the fastest way to check membership and remove duplicates.",
    concept: "Sets {} store unique items only. .add() inserts. in checks membership. No guaranteed order."
  },
  {
    id: 31,
    chapter: "Tuples & Sets",
    title: "Set Operations",
    description:
      "Sets support maths-style operations: **union** (all items) and **intersection** (shared items)!\n\n`a = {1, 2, 3, 4}` and `b = {3, 4, 5, 6}`\n\nPrint:\n- `sorted(a | b)` — union (all unique items)\n- `sorted(a & b)` — intersection (items in both)\n\nExpected:\n`[1, 2, 3, 4, 5, 6]`\n`[3, 4]`",
    hint: "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(sorted(a | b))  # | is union\nprint(sorted(a & b))  # & is intersection",
    initialCode: "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n# Print sorted union of a and b (a | b)\n# Print sorted intersection of a and b (a & b)\n\n",
    expectedOutput: "[1, 2, 3, 4, 5, 6]\n[3, 4]",
    difficulty: "Intermediate",
    xp: 250,
    successMessage: "Set ops star! Union and intersection are powerful tools for comparing collections.",
    concept: "a | b = union (all unique). a & b = intersection (shared). a - b = difference (in a not b)."
  },

  // ── BACK TO THE BASICS ────────────────────────────────────────────────
  {
    id: 32,
    chapter: "The Basics",
    title: "Type Conversion",
    description:
      "Python variables have types, and you can convert between them!\n\n- `int('25')` converts a string to an integer\n- `float('1.75')` converts a string to a float\n- `str(42)` converts a number to a string\n\nPrint:\n1. `int('25') + 5`\n2. `float('1.75')`\n3. `str(42) + ' knights'`\n\nExpected:\n`30`\n`1.75`\n`42 knights`",
    hint: "print(int('25') + 5)       # 30\nprint(float('1.75'))       # 1.75\nprint(str(42) + ' knights') # 42 knights",
    initialCode: "# Convert '25' to int and add 5, then print\n# Convert '1.75' to float and print\n# Convert 42 to str, add ' knights', and print\n\n",
    expectedOutput: "30\n1.75\n42 knights",
    difficulty: "Beginner",
    xp: 100,
    successMessage: "Type transformer! Knowing how to convert types prevents countless bugs.",
    concept: "int(), float(), str() convert between types. You can't add a string to a number without converting first."
  },
  {
    id: 33,
    chapter: "The Basics",
    title: "Multiple Assignment",
    description:
      "Python lets you assign multiple variables at once — and even swap them in one line!\n\n1. Assign `a, b = 10, 20` and print `a` and `b` on one line\n2. Swap them: `a, b = b, a` and print again\n\nExpected:\n`10 20`\n`20 10`",
    hint: "a, b = 10, 20\nprint(a, b)    # print() with comma puts a space between values\na, b = b, a    # swap!\nprint(a, b)",
    initialCode: "# Assign a = 10 and b = 20 in one line\n# Print a and b (print(a, b) adds a space automatically)\n# Swap a and b in one line\n# Print again\n\n",
    expectedOutput: "10 20\n20 10",
    difficulty: "Beginner",
    xp: 100,
    successMessage: "Swap sorcerer! Python's multiple assignment makes swapping trivial — no temp variable needed.",
    concept: "a, b = x, y assigns multiple at once. a, b = b, a swaps in place — pure Pythonic magic."
  },

  // ── CHAPTER 11: ERROR HANDLING ────────────────────────────────────────
  {
    id: 34,
    chapter: "Error Handling",
    title: "Try / Except",
    description:
      "Errors happen — `try/except` lets your code handle them gracefully instead of crashing!\n\n1. Try to run `int('dragon')` — catch the `ValueError` and print `'Invalid number!'`\n2. Try to run `100 // 0` — catch the `ZeroDivisionError` and print `'Cannot divide by zero!'`\n\nExpected:\n`Invalid number!`\n`Cannot divide by zero!`",
    hint: "try:\n    int('dragon')\nexcept ValueError:\n    print('Invalid number!')\n\ntry:\n    result = 100 // 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')",
    initialCode: "# First try/except: convert 'dragon' to int\n# Catch ValueError and print 'Invalid number!'\n\n# Second try/except: compute 100 // 0\n# Catch ZeroDivisionError and print 'Cannot divide by zero!'\n\n",
    expectedOutput: "Invalid number!\nCannot divide by zero!",
    difficulty: "Advanced",
    xp: 300,
    successMessage: "Error exterminator! try/except is your shield against runtime crashes.",
    concept: "try: run risky code. except ErrorType: handle it. Common types: ValueError, ZeroDivisionError, TypeError."
  },
  {
    id: 35,
    chapter: "Error Handling",
    title: "Except with Message",
    description:
      "Capture the error's own message using `as e`!\n\nWrite `safe_divide(a, b)` that returns `a / b`, but if a `ZeroDivisionError` occurs, returns `f'Error: {e}'`.\n\nPrint:\n- `safe_divide(10, 2)` → `5.0`\n- `safe_divide(10, 0)` → `Error: division by zero`",
    hint: "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError as e:\n        return f'Error: {e}'\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))",
    initialCode: "# Define safe_divide(a, b)\n# Try to return a / b\n# Catch ZeroDivisionError as e and return f'Error: {e}'\n\n# Call safe_divide(10, 2) and print\n# Call safe_divide(10, 0) and print\n\n",
    expectedOutput: "5.0\nError: division by zero",
    difficulty: "Advanced",
    xp: 325,
    successMessage: "Exception expert! Capturing error messages makes debugging and logging a breeze.",
    concept: "except ErrorType as e: captures the error object. str(e) or f'{e}' gives the error message."
  },
  {
    id: 36,
    chapter: "Error Handling",
    title: "Finally Block",
    description:
      "The `finally` block **always** runs — whether an error happened or not. Perfect for cleanup!\n\nTry `result = 10 / 2`. In `finally`, print `'Quest complete!'`. After the try/except/finally, print `result`.\n\nExpected:\n`Quest complete!`\n`5.0`",
    hint: "try:\n    result = 10 / 2\nexcept Exception:\n    print('error')\nfinally:\n    print('Quest complete!')  # always runs!\nprint(result)",
    initialCode: "# try: set result = 10 / 2\n# except: print 'error'\n# finally: print 'Quest complete!'\n# After the block, print result\n\n",
    expectedOutput: "Quest complete!\n5.0",
    difficulty: "Advanced",
    xp: 325,
    successMessage: "Finally finished! The finally block is essential for cleanup like closing files or connections.",
    concept: "finally: always executes after try/except, even if an exception occurred. Used for cleanup code."
  },

  // ── CHAPTER 12: SORTING & SEARCH ─────────────────────────────────────
  {
    id: 37,
    chapter: "Sorting & Search",
    title: "Sorting Lists",
    description:
      "Python's `sorted()` returns a sorted copy of a list without changing the original.\n\n`scores = [42, 88, 15, 73, 99, 56]`\n\nPrint:\n1. `sorted(scores)` — ascending order\n2. `sorted(scores, reverse=True)` — descending order\n\nExpected:\n`[15, 42, 56, 73, 88, 99]`\n`[99, 88, 73, 56, 42, 15]`",
    hint: "scores = [42, 88, 15, 73, 99, 56]\nprint(sorted(scores))\nprint(sorted(scores, reverse=True))",
    initialCode: "scores = [42, 88, 15, 73, 99, 56]\n# Print scores sorted in ascending order\n# Print scores sorted in descending order\n\n",
    expectedOutput: "[15, 42, 56, 73, 88, 99]\n[99, 88, 73, 56, 42, 15]",
    difficulty: "Intermediate",
    xp: 250,
    successMessage: "Sort sovereign! sorted() is non-destructive — the original list stays unchanged.",
    concept: "sorted(list) returns a new sorted list. reverse=True flips order. list.sort() sorts in-place."
  },
  {
    id: 38,
    chapter: "Sorting & Search",
    title: "Sort with Key",
    description:
      "Sort by a custom rule using the `key` parameter!\n\n`heroes = ['Zara', 'Al', 'Beatrice', 'Ed']`\n\nSort by **name length** using `key=len`, then print the result.\n\nExpected:\n`['Al', 'Ed', 'Zara', 'Beatrice']`",
    hint: "heroes = ['Zara', 'Al', 'Beatrice', 'Ed']\nprint(sorted(heroes, key=len))\n\n# key=len tells Python: sort by the length of each string",
    initialCode: "heroes = ['Zara', 'Al', 'Beatrice', 'Ed']\n# Sort by name length using key=len\n# Print the sorted list\n\n",
    expectedOutput: "['Al', 'Ed', 'Zara', 'Beatrice']",
    difficulty: "Intermediate",
    xp: 275,
    successMessage: "Key quester! The key parameter unlocks infinite sorting possibilities.",
    concept: "sorted(list, key=func) applies func to each element and sorts by that result. key=len, key=str.lower etc."
  },
  {
    id: 39,
    chapter: "Sorting & Search",
    title: "Enumerate",
    description:
      "`enumerate()` gives you both the **index** and the **value** as you loop — no manual counter needed!\n\n`items = ['sword', 'shield', 'potion']`\n\nLoop with `enumerate(items, 1)` to start counting at 1, and print:\n`1. sword`\n`2. shield`\n`3. potion`",
    hint: "items = ['sword', 'shield', 'potion']\nfor i, item in enumerate(items, 1):  # start=1\n    print(f'{i}. {item}')",
    initialCode: "items = ['sword', 'shield', 'potion']\n# Use enumerate(items, 1) to loop with a 1-based counter\n# Print: {i}. {item}\n\n",
    expectedOutput: "1. sword\n2. shield\n3. potion",
    difficulty: "Intermediate",
    xp: 250,
    successMessage: "Enumerate enchanter! enumerate() replaces the clunky range(len(list)) pattern.",
    concept: "enumerate(iterable, start=0) yields (index, value) pairs. Set start=1 for human-friendly numbering."
  },
  {
    id: 40,
    chapter: "Sorting & Search",
    title: "Zip",
    description:
      "`zip()` pairs up two lists element by element — perfect for combining related data!\n\n`names = ['Alice', 'Bob', 'Carol']`\n`scores = [95, 78, 88]`\n\nLoop through `zip(names, scores)` and print:\n`Alice: 95`\n`Bob: 78`\n`Carol: 88`",
    hint: "names = ['Alice', 'Bob', 'Carol']\nscores = [95, 78, 88]\nfor name, score in zip(names, scores):\n    print(f'{name}: {score}')",
    initialCode: "names = ['Alice', 'Bob', 'Carol']\nscores = [95, 78, 88]\n# Use zip(names, scores) to loop through both at once\n# Print: {name}: {score}\n\n",
    expectedOutput: "Alice: 95\nBob: 78\nCarol: 88",
    difficulty: "Intermediate",
    xp: 275,
    successMessage: "Zip wizard! zip() is a clean way to pair up parallel lists without index juggling.",
    concept: "zip(a, b) pairs elements: [(a[0],b[0]), (a[1],b[1])...]. Stops at the shortest list."
  },

  // ── CHAPTER 13: RECURSION ─────────────────────────────────────────────
  {
    id: 41,
    chapter: "Recursion",
    title: "Factorial",
    description:
      "A **recursive** function calls itself! Every recursion needs a **base case** to stop.\n\nWrite `factorial(n)` that returns `1` if `n <= 1`, otherwise returns `n * factorial(n - 1)`.\n\nPrint `factorial(5)` → should be `120`.\n\n(5 × 4 × 3 × 2 × 1 = 120)",
    hint: "def factorial(n):\n    if n <= 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nprint(factorial(5))",
    initialCode: "# Define factorial(n)\n# Base case: if n <= 1, return 1\n# Recursive case: return n * factorial(n - 1)\n\n# Print factorial(5)\n\n",
    expectedOutput: "120",
    difficulty: "Advanced",
    xp: 350,
    successMessage: "Recursive ranger! factorial is the classic example — functions calling themselves is mind-bending but powerful.",
    concept: "Recursion: a function calls itself with a simpler input. Always needs a base case, or it loops forever."
  },
  {
    id: 42,
    chapter: "Recursion",
    title: "Fibonacci",
    description:
      "The Fibonacci sequence is a famous recursive pattern: each number is the sum of the two before it.\n\n`0, 1, 1, 2, 3, 5, 8, 13, 21, ...`\n\nWrite `fib(n)` that returns `n` if `n <= 1`, otherwise returns `fib(n-1) + fib(n-2)`.\n\nPrint `fib(8)` → should be `21`.",
    hint: "def fib(n):\n    if n <= 1:\n        return n\n    else:\n        return fib(n - 1) + fib(n - 2)\n\nprint(fib(8))",
    initialCode: "# Define fib(n)\n# Base case: if n <= 1, return n\n# Recursive case: return fib(n-1) + fib(n-2)\n\n# Print fib(8) — should be 21\n\n",
    expectedOutput: "21",
    difficulty: "Advanced",
    xp: 375,
    successMessage: "Fibonacci fighter! You just implemented one of the most famous sequences in mathematics.",
    concept: "fib(n) = fib(n-1) + fib(n-2). Two recursive calls! fib(0)=0, fib(1)=1, fib(8)=21."
  },
  {
    id: 43,
    chapter: "Recursion",
    title: "Recursive Sum",
    description:
      "Recursion works on lists too! Sum a list by taking the first item and recursively summing the rest.\n\nWrite `total(lst)` that returns `0` if the list is empty, otherwise returns `lst[0] + total(lst[1:])`.\n\nPrint `total([1, 2, 3, 4, 5])` → should be `15`.",
    hint: "def total(lst):\n    if not lst:          # empty list — base case\n        return 0\n    return lst[0] + total(lst[1:])  # first + rest\n\nprint(total([1, 2, 3, 4, 5]))",
    initialCode: "# Define total(lst)\n# Base case: if not lst (empty), return 0\n# Recursive case: return lst[0] + total(lst[1:])\n\n# Print total([1, 2, 3, 4, 5])\n\n",
    expectedOutput: "15",
    difficulty: "Advanced",
    xp: 375,
    successMessage: "Sum summoner! Recursive list processing is elegant — peel off one item and recurse on the rest.",
    concept: "lst[1:] is a slice containing everything after index 0. 'not lst' is True for an empty list."
  },

  // ── CHAPTER 14: LAMBDAS & FUNCTIONAL ──────────────────────────────────
  {
    id: 44,
    chapter: "Lambdas & Functional",
    title: "Lambda Functions",
    description:
      "Lambdas are tiny **anonymous functions** written in a single line!\n\n`lambda x: x * 2` is a function that takes `x` and returns `x * 2`.\n\nCreate:\n- `double = lambda x: x * 2`\n- `square = lambda x: x ** 2`\n\nPrint `double(7)` and `square(5)`.\n\nExpected:\n`14`\n`25`",
    hint: "double = lambda x: x * 2\nsquare = lambda x: x ** 2\nprint(double(7))\nprint(square(5))",
    initialCode: "# Create a lambda called double that multiplies x by 2\n# Create a lambda called square that raises x to the power 2\n# Print double(7)\n# Print square(5)\n\n",
    expectedOutput: "14\n25",
    difficulty: "Advanced",
    xp: 350,
    successMessage: "Lambda legend! One-line functions are perfect when you need a quick throwaway operation.",
    concept: "lambda params: expression — a compact function with no name. Assigned to a variable it works like def."
  },
  {
    id: 45,
    chapter: "Lambdas & Functional",
    title: "Map & Filter",
    description:
      "`filter()` keeps items that pass a test. `map()` transforms every item.\n\n`numbers = range(1, 11)`\n\n1. `evens = list(filter(lambda x: x % 2 == 0, numbers))` — keep even numbers\n2. `doubled = list(map(lambda x: x * 2, evens))` — double each even\n\nPrint `evens`, then print `doubled`.\n\nExpected:\n`[2, 4, 6, 8, 10]`\n`[4, 8, 12, 16, 20]`",
    hint: "numbers = range(1, 11)\nevens = list(filter(lambda x: x % 2 == 0, numbers))\ndoubled = list(map(lambda x: x * 2, evens))\nprint(evens)\nprint(doubled)",
    initialCode: "numbers = range(1, 11)\n# Use filter() with a lambda to keep only even numbers\nevens = list(filter(lambda x: x % 2 == 0, numbers))\n# Use map() with a lambda to double each even number\ndoubled = list(map(lambda x: x * 2, evens))\n# Print evens, then print doubled\n\n",
    expectedOutput: "[2, 4, 6, 8, 10]\n[4, 8, 12, 16, 20]",
    difficulty: "Advanced",
    xp: 400,
    successMessage: "Functional fighter! map and filter are the cornerstones of functional programming style.",
    concept: "filter(func, iter) keeps items where func returns True. map(func, iter) applies func to every item."
  },

  // ── CHAPTER 15: OOP & CLASSES ─────────────────────────────────────────
  {
    id: 46,
    chapter: "OOP & Classes",
    title: "Your First Class",
    description:
      "A **class** is a blueprint for creating objects. `__init__` is the constructor — it runs when you create an instance.\n\nDefine a `Hero` class with `__init__(self, name, level)` that stores both as attributes.\n\nCreate `h = Hero('Zara', 10)` and print `h.name` and `h.level`.\n\nExpected:\n`Zara`\n`10`",
    hint: "class Hero:\n    def __init__(self, name, level):\n        self.name = name\n        self.level = level\n\nh = Hero('Zara', 10)\nprint(h.name)\nprint(h.level)",
    initialCode: "# Define a class called Hero\n# __init__ should accept name and level, and store them as self.name and self.level\n\n# Create an instance: h = Hero('Zara', 10)\n# Print h.name and h.level\n\n",
    expectedOutput: "Zara\n10",
    difficulty: "Advanced",
    xp: 400,
    successMessage: "Object oracle! Classes let you bundle data and behaviour into reusable blueprints.",
    concept: "class Foo: defines a blueprint. __init__(self, ...) initialises each instance. self refers to the object."
  },
  {
    id: 47,
    chapter: "OOP & Classes",
    title: "Class Methods",
    description:
      "Classes can have **methods** — functions that belong to the object and know about its data via `self`.\n\nDefine `Hero` with `__init__(self, name, level)` and a method `describe(self)` that returns `f'{self.name} is level {self.level}'`.\n\nCreate `Hero('Zara', 10)` and print the result of `.describe()`.\n\nExpected:\n`Zara is level 10`",
    hint: "class Hero:\n    def __init__(self, name, level):\n        self.name = name\n        self.level = level\n\n    def describe(self):\n        return f'{self.name} is level {self.level}'\n\nh = Hero('Zara', 10)\nprint(h.describe())",
    initialCode: "# Define Hero with __init__(self, name, level)\n# Add a describe(self) method that returns f'{self.name} is level {self.level}'\n\n# Create Hero('Zara', 10) and print h.describe()\n\n",
    expectedOutput: "Zara is level 10",
    difficulty: "Advanced",
    xp: 425,
    successMessage: "Method magician! Methods let objects act on their own data — the heart of OOP.",
    concept: "Methods are functions inside a class. self gives access to instance attributes. Call with object.method()."
  },
  {
    id: 48,
    chapter: "OOP & Classes",
    title: "Inheritance",
    description:
      "**Inheritance** lets one class extend another, reusing and adding to its features!\n\nGiven the `Hero` base class (with `__init__` and `describe`), create `Mage(Hero)` that:\n- Adds `mana` in `__init__` using `super().__init__(name, level)`\n- Has a `cast(self)` method returning `f'{self.name} casts a spell! (Mana: {self.mana})'`\n\nCreate `Mage('Luna', 8, 200)` and print `.describe()` then `.cast()`.\n\nExpected:\n`Luna is level 8`\n`Luna casts a spell! (Mana: 200)`",
    hint: "class Hero:\n    def __init__(self, name, level):\n        self.name = name\n        self.level = level\n    def describe(self):\n        return f'{self.name} is level {self.level}'\n\nclass Mage(Hero):\n    def __init__(self, name, level, mana):\n        super().__init__(name, level)\n        self.mana = mana\n    def cast(self):\n        return f'{self.name} casts a spell! (Mana: {self.mana})'\n\nm = Mage('Luna', 8, 200)\nprint(m.describe())\nprint(m.cast())",
    initialCode: "class Hero:\n    def __init__(self, name, level):\n        self.name = name\n        self.level = level\n    def describe(self):\n        return f'{self.name} is level {self.level}'\n\n# Define Mage(Hero) below\n# __init__(self, name, level, mana) — call super().__init__(name, level)\n# cast(self) — returns f'{self.name} casts a spell! (Mana: {self.mana})'\n\n# Create m = Mage('Luna', 8, 200)\n# Print m.describe() and m.cast()\n\n",
    expectedOutput: "Luna is level 8\nLuna casts a spell! (Mana: 200)",
    difficulty: "Advanced",
    xp: 600,
    successMessage: "🏆 INHERITANCE INCARNATE! You've unlocked the most powerful pattern in object-oriented programming. The dungeon fears you.",
    concept: "class Child(Parent): inherits all parent methods. super().__init__() calls the parent constructor."
  }
];

export const chapters = [
  { name: "The Basics",          color: "#6366f1", emoji: "🌱" },
  { name: "Decisions",           color: "#8b5cf6", emoji: "🔀" },
  { name: "Loops",               color: "#06b6d4", emoji: "🔄" },
  { name: "Lists",               color: "#10b981", emoji: "📋" },
  { name: "Functions",           color: "#f59e0b", emoji: "⚡" },
  { name: "Dictionaries",        color: "#ef4444", emoji: "📖" },
  { name: "Advanced",            color: "#ec4899", emoji: "🚀" },
  { name: "Booleans & Logic",    color: "#06b6d4", emoji: "🧠" },
  { name: "Strings Deep Dive",   color: "#f97316", emoji: "🔤" },
  { name: "Tuples & Sets",       color: "#84cc16", emoji: "🎯" },
  { name: "Error Handling",      color: "#8b5cf6", emoji: "🛡️" },
  { name: "Sorting & Search",    color: "#14b8a6", emoji: "🔍" },
  { name: "Recursion",           color: "#f43f5e", emoji: "🌀" },
  { name: "OOP & Classes",       color: "#a855f7", emoji: "🏗️" },
  { name: "Lambdas & Functional",color: "#eab308", emoji: "λ"  },
];
