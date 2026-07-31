// ============ QUESTION BANK ============
// difficulty: "easy" | "medium" | "hard"
// body/input/output/hint: plain text; wrap inline code in backticks `like this`.
// starterCode is intentionally a minimal shell (just includes + main) so the
// student writes the logic themselves; structural guidance lives in the hint.
// tests are what get executed. A question counts as completed when all pass.

const SHELL = `#include <iostream>
using namespace std;

int main() {

    return 0;
}
`;

const SHELL_STRING = `#include <iostream>
#include <string>
using namespace std;

int main() {

    return 0;
}
`;

export const QUESTIONS = [
  {
    id: "even-odd",
    title: "Even or Odd",
    difficulty: "easy",
    body:
      "Write a program that reads one integer `n` from standard input " +
      "and prints `\"Even\"` if it's divisible by 2, or `\"Odd\"` otherwise.",
    input: "A single line containing one integer `n` (can be negative).",
    output: "Print exactly `Even` or `Odd`, no extra text.",
    examples: [
      { input: "4", output: "Even" },
      { input: "7", output: "Odd" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "4", expected: "Even" },
      { input: "7", expected: "Odd" },
      { input: "-8", expected: "Even" },
    ],
    hint:
      "declare an int `n`, read it with `cin >> n`, then use the modulo " +
      "operator `%`. what's the remainder of an even number divided by 2? " +
      "print the matching word.",
  },
  {
    id: "student-class-basics",
    title: "Student Class Basics",
    difficulty: "easy",
    body:
      "Create a class `Student` with public integer attributes `roll` and " +
      "`marks`. Read these two integers from standard input, assign them to an " +
      "instance of `Student`, and print the result formatted as " +
      "`Roll: <roll>, Marks: <marks>`.",
    input: "Two space-separated integers representing `roll` and `marks`.",
    output: "A single string formatted as `Roll: <roll>, Marks: <marks>`.",
    examples: [{ input: "10 85", output: "Roll: 10, Marks: 85" }],
    starterCode: SHELL,
    tests: [
      { input: "10 85", expected: "Roll: 10, Marks: 85" },
      { input: "0 0", expected: "Roll: 0, Marks: 0" },
      { input: "-5 100", expected: "Roll: -5, Marks: 100" },
      { input: "42 999", expected: "Roll: 42, Marks: 999" },
    ],
    hint:
      "define a class `Student` with public int members `roll` and `marks`. " +
      "in main, create a Student object and read the two ints straight into " +
      "`obj.roll` and `obj.marks`, then print `Roll: ` << obj.roll << `, ` << " +
      "`Marks: ` << obj.marks.",
  },
  {
    id: "complex-addition-overload",
    title: "Overloading the Addition Operator",
    difficulty: "medium",
    body:
      "Create a class `Complex` with integer attributes `real` and `imag`. " +
      "Overload the `+` operator as a member function to add two `Complex` " +
      "objects. Read four integers from standard input: the real and imaginary " +
      "parts of the first number, followed by the real and imaginary parts of " +
      "the second number. Print the resulting sum as `<real> + <imag>i`.",
    input: "Four space-separated integers: `r1 i1 r2 i2`.",
    output: "A single string formatted as `<real> + <imag>i`.",
    examples: [{ input: "1 2 3 4", output: "4 + 6i" }],
    starterCode: SHELL,
    tests: [
      { input: "1 2 3 4", expected: "4 + 6i" },
      { input: "-1 -2 1 2", expected: "0 + 0i" },
      { input: "0 5 2 0", expected: "2 + 5i" },
      { input: "-10 -20 -30 -40", expected: "-40 + -60i" },
    ],
    hint:
      "define class `Complex` with public int `real` and `imag`. overload " +
      "`operator+` as a member returning a new Complex whose real/imag are the " +
      "sums of `this` and the argument. in main read the four ints into two " +
      "Complex objects, add them, and print `result.real << \" + \" << " +
      "result.imag << \"i\"`.",
  },
  {
    id: "template-find-max",
    title: "Generic Maximum Function",
    difficulty: "easy",
    body:
      "Write a function template `findMax` that takes two arguments of the " +
      "same type and returns the larger one. Read two integers from standard " +
      "input, pass them to `findMax`, and print the result.",
    input: "Two space-separated integers.",
    output: "The larger of the two integers.",
    examples: [
      { input: "10 20", output: "20" },
      { input: "-5 -10", output: "-5" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "10 20", expected: "20" },
      { input: "-5 -10", expected: "-5" },
      { input: "0 0", expected: "0" },
      { input: "42 7", expected: "42" },
    ],
    hint:
      "write `template <typename T> T findMax(T a, T b)` returning `a > b ? " +
      "a : b`. in main read two ints and print findMax(x, y).",
  },
  {
    id: "safe-division-exception",
    title: "Safe Division with Exceptions",
    difficulty: "easy",
    body:
      "Write a program that reads two integers `a` and `b`. Calculate `a / b` " +
      "using integer division. If `b` is `0`, `throw` an exception (an integer " +
      "or `runtime_error`) and `catch` it to print `Division by zero error!`. " +
      "Otherwise, print the division result.",
    input: "Two space-separated integers `a` and `b`.",
    output:
      "The integer result of `a / b`, or `Division by zero error!` if `b` is " +
      "zero.",
    examples: [
      { input: "10 2", output: "5" },
      { input: "10 0", output: "Division by zero error!" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "10 2", expected: "5" },
      { input: "10 0", expected: "Division by zero error!" },
      { input: "-15 3", expected: "-5" },
      { input: "0 5", expected: "0" },
    ],
    hint:
      "read a and b, then wrap the division in a try block. if `b == 0`, " +
      "`throw` something; catch it and print `Division by zero error!`. " +
      "otherwise cout the result of `a / b`.",
  },
  {
    id: "shape-area-overloading",
    title: "Shape Area Overloading",
    difficulty: "easy",
    body:
      "Write two overloaded functions named `area`. One takes two integers " +
      "(width and height of a rectangle) and returns `width * height`. The " +
      "other takes a single integer (the side of a square) and returns " +
      "`side * side`. Read three integers from standard input. Print the " +
      "rectangle area (using the two-argument overload) on the first line, and " +
      "the square area (using the one-argument overload) on the second line.",
    input: "Three space-separated integers: `width height side`.",
    output: "Two lines: the rectangle area, then the square area.",
    examples: [{ input: "4 5 6", output: "20\n36" }],
    starterCode: SHELL,
    tests: [
      { input: "4 5 6", expected: "20\n36" },
      { input: "10 10 3", expected: "100\n9" },
      { input: "0 10 2", expected: "0\n4" },
      { input: "2 3 7", expected: "6\n49" },
    ],
    hint:
      "write two overloads of `area`: `int area(int w, int h)` returning " +
      "w * h, and `int area(int s)` returning s * s. in main read three ints " +
      "and print area(w, h) then area(s), each on its own line — the compiler " +
      "picks the right overload from the argument count.",
  },
  {
    id: "swap-using-references",
    title: "Swap Numbers Using References",
    difficulty: "easy",
    body:
      "Write a C++ program with a function `void swapNums(int& a, int& b)` " +
      "that swaps two integers using reference variables (as taught in " +
      "Lecture 2). Read two integers from standard input, call the `swapNums` " +
      "function, and print the updated variables separated by a space.",
    input: "Two space-separated integers.",
    output: "The two integers swapped, separated by a space.",
    examples: [{ input: "5 10", output: "10 5" }],
    starterCode: SHELL,
    tests: [
      { input: "5 10", expected: "10 5" },
      { input: "-100 200", expected: "200 -100" },
      { input: "0 0", expected: "0 0" },
      { input: "42 42", expected: "42 42" },
    ],
    hint:
      "write `void swapNums(int& a, int& b)` that swaps using a temp " +
      "variable. in main read x and y, call swapNums(x, y), then print x and " +
      "y separated by a space.",
  },
  {
    id: "student-static-count",
    title: "Keep Track of Objects with Static Members",
    difficulty: "medium",
    body:
      "Create a class `Student` with private variables `name` (string) and " +
      "`roll` (int). Include a static data member `count` to keep track of the " +
      "total number of student objects created, and a static member function " +
      "`getCount()` to return it (as required in Lecture 3). Read an integer " +
      "`n`. Then loop `n` times, reading a string and an integer each time to " +
      "create a `Student` object. Finally, print the total count using the " +
      "static member function.",
    input:
      "An integer `n` followed by `n` pairs of `<string> <integer>`.",
    output: "A single integer representing the total count of created students.",
    examples: [{ input: "3 Alice 1 Bob 2 Charlie 3", output: "3" }],
    starterCode: SHELL_STRING,
    tests: [
      { input: "3 Alice 1 Bob 2 Charlie 3", expected: "3" },
      { input: "0", expected: "0" },
      { input: "1 Dave 99", expected: "1" },
      { input: "5 A 1 B 2 C 3 D 4 E 5", expected: "5" },
    ],
    hint:
      "add `static int count;` inside the class and increment it in every " +
      "constructor, plus `static int getCount()`. define `int " +
      "Student::count = 0;` outside the class. in main read n, loop n times " +
      "reading a string and int and constructing a Student each time, then " +
      "print Student::getCount().",
  },
  {
    id: "constructor-destructor-order",
    title: "Constructor and Destructor Execution Order",
    difficulty: "medium",
    body:
      "Write a class `Test` with a private integer `id`. The constructor " +
      "should take an integer, assign it to `id`, and print `Constructed <id>`. " +
      "The destructor should print `Destroyed <id>`. In `main`, read 3 " +
      "integers. Create 3 local `Test` objects in sequence within a block scope " +
      "(so they get destroyed automatically). Verify that the execution of " +
      "destructors is in the reverse order of the constructors (Lecture 4 Try " +
      "it!).",
    input: "Three space-separated integers.",
    output:
      "Six lines: three construction messages followed by three destruction " +
      "messages.",
    examples: [
      {
        input: "10 20 30",
        output:
          "Constructed 10\nConstructed 20\nConstructed 30\nDestroyed 30\nDestroyed 20\nDestroyed 10",
      },
    ],
    starterCode: SHELL,
    tests: [
      {
        input: "10 20 30",
        expected:
          "Constructed 10\nConstructed 20\nConstructed 30\nDestroyed 30\nDestroyed 20\nDestroyed 10",
      },
      {
        input: "1 2 3",
        expected:
          "Constructed 1\nConstructed 2\nConstructed 3\nDestroyed 3\nDestroyed 2\nDestroyed 1",
      },
      {
        input: "-5 0 5",
        expected:
          "Constructed -5\nConstructed 0\nConstructed 5\nDestroyed 5\nDestroyed 0\nDestroyed -5",
      },
    ],
    hint:
      "class `Test` has private int `id`; the constructor stores id and prints " +
      "`Constructed <id>`; the destructor prints `Destroyed <id>`. in main read " +
      "a, b, c and create three Test objects in order — they're destroyed " +
      "automatically in reverse order at the end of main.",
  },
  {
    id: "complex-operator-overloading",
    title: "Complex Number IO and Addition Overloading",
    difficulty: "hard",
    body:
      "Create a class `Complex` with integers `real` and `imag`. Overload the " +
      "binary `+` operator to add two complex numbers. Also, overload the `<<` " +
      "insertion operator using a friend function to print the complex number " +
      "in the format `a + bi` (if `b` is positive/zero) or `a - bi` (if `b` is " +
      "negative, printing the absolute value of `b`). Read four integers from " +
      "standard input (`real1`, `imag1`, `real2`, `imag2`), add the two " +
      "resulting complex numbers, and print the sum using `cout <<` " +
      "(Lecture 5).",
    input: "Four space-separated integers.",
    output: "A single string representing the complex sum.",
    examples: [{ input: "1 2 3 -4", output: "4 - 2i" }],
    starterCode: SHELL,
    tests: [
      { input: "1 2 3 -4", expected: "4 - 2i" },
      { input: "5 5 5 5", expected: "10 + 10i" },
      { input: "0 0 0 0", expected: "0 + 0i" },
      { input: "-10 -20 5 10", expected: "-5 - 10i" },
      { input: "2 -3 -2 3", expected: "0 + 0i" },
    ],
    hint:
      "in Complex, overload `operator+` as a member returning a new Complex " +
      "with summed real/imag. overload `<<` as a `friend ostream& " +
      "operator<<(ostream&, const Complex&)`: print real, then if imag < 0 " +
      "print ` - ` and abs(imag), else ` + ` and imag, then `i`. in main read " +
      "four ints, add the two Complex objects, `cout << sum`.",
  },
  {
    id: "virtual-base-diamond-problem",
    title: "Solve Diamond Problem with Virtual Base Class",
    difficulty: "hard",
    body:
      "Implement a class hierarchy to resolve the diamond problem (Lecture 6 " +
      "Try it!). Create a base class `Person` with `name` (string) and `code` " +
      "(int). Derive classes `Account` (with `pay` float) and `Admin` (with " +
      "`experience` int) using virtual inheritance from `Person`. Create a " +
      "class `Master` that derives from both `Account` and `Admin`. Provide a " +
      "function in `Master` to display the information. Read a string and three " +
      "numbers (`name`, `code`, `pay`, `experience`). Create a `Master` object " +
      "and display its data in exactly this format: `Name: <name>, Code: " +
      "<code>, Pay: <pay>, Exp: <experience>`.",
    input:
      "A string `name`, followed by `code` (int), `pay` (float), and " +
      "`experience` (int).",
    output: "A single formatted string with the person's details.",
    examples: [
      { input: "John 101 5000 5", output: "Name: John, Code: 101, Pay: 5000, Exp: 5" },
    ],
    starterCode: SHELL_STRING,
    tests: [
      { input: "John 101 5000 5", expected: "Name: John, Code: 101, Pay: 5000, Exp: 5" },
      { input: "Alice 202 7500.5 10", expected: "Name: Alice, Code: 202, Pay: 7500.5, Exp: 10" },
      { input: "Bob 99 0 0", expected: "Name: Bob, Code: 99, Pay: 0, Exp: 0" },
    ],
    hint:
      "Person has protected string `name` and int `code`. `class Account : " +
      "virtual public Person` adds float pay; `class Admin : virtual public " +
      "Person` adds int experience; `class Master : public Account, public " +
      "Admin` has a display() printing `Name: <name>, Code: <code>, Pay: " +
      "<pay>, Exp: <experience>`. the `virtual` keyword avoids two copies of " +
      "Person. in main construct Master with all four values and call display.",
  },
  {
    id: "abstract-class-array-pointers",
    title: "Abstract Class and Array of Pointers (💀)",
    difficulty: "hard",
    body:
      "Create an abstract class `Student` with a pure virtual function " +
      "`displayStream()` (Lecture 7 Try it!). Derive three classes: " +
      "`Engineering`, `Science`, and `Medical`. Their `displayStream()` " +
      "functions should print `Engineering Student`, `Science Student`, and " +
      "`Medical Student` respectively. Read an integer `n` (number of queries). " +
      "For the next `n` inputs, read an integer (1 for Engineering, 2 for " +
      "Science, 3 for Medical). Store dynamically allocated derived objects " +
      "in an array of `Student*` pointers, then iterate through the array to " +
      "call `displayStream()` for each. Output each stream on a new line.",
    input: "An integer `n`, followed by `n` integers (each 1, 2, or 3).",
    output: "`n` lines describing the stream of each student.",
    examples: [
      {
        input: "3 1 3 2",
        output: "Engineering Student\nMedical Student\nScience Student",
      },
    ],
    starterCode: SHELL,
    tests: [
      {
        input: "3 1 3 2",
        expected: "Engineering Student\nMedical Student\nScience Student",
      },
      { input: "1 3", expected: "Medical Student" },
      {
        input: "4 1 1 2 2",
        expected:
          "Engineering Student\nEngineering Student\nScience Student\nScience Student",
      },
      { input: "0", expected: "" },
    ],
    hint:
      "derive Engineering, Science, Medical from `Student` and override " +
      "displayStream to print the matching text. in main, `Student** arr = " +
      "new Student*[n];`, loop reading each integer and `arr[i] = new " +
      "Engineering()` (etc.), then loop calling `arr[i]->displayStream()` and `delete " +
      "arr[i]`, finally `delete[] arr`.",
  },
  {
    id: "class-template-array-sort-avg",
    title: "Class Template for Array Sort and Average",
    difficulty: "hard",
    body:
      "Write a class template (Lecture 8) that holds an array of 5 elements of " +
      "generic type `T`. It should have methods `sortArray()` to sort the " +
      "elements in ascending order and `getAverage()` to return the average of " +
      "the elements as a double. Read 5 doubles from standard input. Instantiate " +
      "the template with `double`, populate the array, sort it, print the " +
      "sorted array space-separated on one line, and print the average on the " +
      "next line.",
    input: "Five numbers (doubles).",
    output:
      "Two lines: the sorted space-separated array, and the computed average.",
    examples: [{ input: "5 3 4 1 2", output: "1 2 3 4 5\n3" }],
    starterCode: SHELL,
    tests: [
      { input: "5 3 4 1 2", expected: "1 2 3 4 5\n3" },
      { input: "5.5 1.1 4.4 2.2 3.3", expected: "1.1 2.2 3.3 4.4 5.5\n3.3" },
      { input: "10 10 10 10 10", expected: "10 10 10 10 10\n10" },
      { input: "-1.5 0 2.5 -3.5 5", expected: "-3.5 -1.5 0 2.5 5\n0.5" },
    ],
    hint:
      "write `template <typename T> class ...` holding `T arr[5]`. " +
      "sortArray() can use `std::sort` (add `#include <algorithm>`, and note " +
      "the shell only has <iostream>). getAverage() returns `(double)sum / 5`. " +
      "in main read 5 doubles into the array, sort, print space-separated, " +
      "then the average on a new line.",
  },
  {
    id: "inline-function-cube",
    title: "Inline Function for Cube Calculation",
    difficulty: "easy",
    body:
      "Write an `inline` function named `cube` that takes an integer `n` and " +
      "returns its cube. Read an integer from standard input, pass it to your " +
      "inline function, and print the result. This demonstrates how small, " +
      "frequently called functions can be optimized by the compiler (Lecture " +
      "2).",
    input: "A single integer `n`.",
    output: "A single integer representing `n * n * n`.",
    examples: [{ input: "3", output: "27" }],
    starterCode: SHELL,
    tests: [
      { input: "3", expected: "27" },
      { input: "-4", expected: "-64" },
      { input: "0", expected: "0" },
      { input: "10", expected: "1000" },
    ],
    hint:
      "write `inline int cube(int n) { return n * n * n; }` above main. in " +
      "main read an int and print cube(n).",
  },
  {
    id: "function-overloading-area",
    title: "Function Overloading for Area",
    difficulty: "easy",
    body:
      "Write two overloaded functions named `calculateArea`. One takes a " +
      "single `double` (radius of a circle) and returns its area (use `3.14 * " +
      "radius * radius`). The other takes two `double`s (length and width of a " +
      "rectangle) and returns its area. Read three doubles from standard input: " +
      "`radius length width`. Print the circle area on the first line and the " +
      "rectangle area on the second line.",
    input: "Three space-separated doubles: `radius length width`.",
    output: "Two lines: the circle area, then the rectangle area.",
    examples: [{ input: "5.0 4.0 5.0", output: "78.5\n20" }],
    starterCode: SHELL,
    tests: [
      { input: "5.0 4.0 5.0", expected: "78.5\n20" },
      { input: "10.0 2.5 4.0", expected: "314\n10" },
      { input: "0.0 2.0 3.0", expected: "0\n6" },
      { input: "1.0 10.0 10.0", expected: "3.14\n100" },
    ],
    hint:
      "write two overloads of calculateArea: one taking a single double " +
      "radius returning `3.14 * radius * radius`, and one taking two doubles " +
      "returning length * width. in main read the three doubles, then print " +
      "calculateArea(radius) and calculateArea(length, width) each on its own " +
      "line — the compiler picks the overload by argument count.",
  },
  {
    id: "copy-constructor-point",
    title: "Demonstrate the Copy Constructor",
    difficulty: "medium",
    body:
      "Create a class `Point` with public integers `x` and `y`. Provide a " +
      "parameterized constructor `Point(int x, int y)` and a custom copy " +
      "constructor `Point(const Point &p)`. Read two integers to create the " +
      "first `Point` object `p1`. Create a second object `p2` using the copy " +
      "constructor on `p1`. Then read two more integers and add them to `p2`'s " +
      "`x` and `y` respectively. Print both points on separate lines in the " +
      "format `(x, y)` to prove that `p1` was unaffected by the changes to " +
      "`p2`.",
    input: "Four space-separated integers: `x1 y1 dx dy`.",
    output: "Two lines formatted as `(x, y)`.",
    examples: [
      { input: "10 20 5 -5", output: "(10, 20)\n(15, 15)" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "10 20 5 -5", expected: "(10, 20)\n(15, 15)" },
      { input: "0 0 100 100", expected: "(0, 0)\n(100, 100)" },
      { input: "-5 -10 5 10", expected: "(-5, -10)\n(0, 0)" },
    ],
    hint:
      "class `Point` has public int x, y; a parameterized constructor setting " +
      "both, and a copy constructor `Point(const Point& p)` copying x and y. " +
      "in main read `x1 y1 dx dy`, create `Point p1(x1, y1)`, then `Point p2 " +
      "(p1)`, add dx to p2.x and dy to p2.y, print both as `(x, y)` on separate " +
      "lines.",
  },
  {
    id: "unary-operator-negation",
    title: "Overload Unary Minus Operator",
    difficulty: "easy",
    body:
      "Create a class `Vector3D` with integers `x`, `y`, and `z`. Overload the " +
      "unary `-` operator as a member function to negate all three coordinates. " +
      "Read three integers from standard input to initialize the vector, apply " +
      "the unary minus operator, and print the resulting coordinates separated " +
      "by spaces.",
    input: "Three space-separated integers.",
    output: "The three negated integers, separated by spaces.",
    examples: [{ input: "5 -3 0", output: "-5 3 0" }],
    starterCode: SHELL,
    tests: [
      { input: "5 -3 0", expected: "-5 3 0" },
      { input: "10 20 30", expected: "-10 -20 -30" },
      { input: "-1 -2 -3", expected: "1 2 3" },
      { input: "0 0 0", expected: "0 0 0" },
    ],
    hint:
      "overload unary `-` as a member: `Vector3D operator-() const { return " +
      "Vector3D(-x, -y, -z); }`. in main read the three ints, create the " +
      "vector, and print the negated coordinates space-separated.",
  },
  {
    id: "multilevel-inheritance-payroll",
    title: "Multilevel Inheritance for Payroll",
    difficulty: "medium",
    body:
      "Create a base class `Person` with a protected string `name`. Derive a " +
      "class `Employee` from `Person` with a protected integer `baseSalary`. " +
      "Derive `Manager` from `Employee` with a private integer `bonus`. Create " +
      "a constructor in `Manager` that initializes all three fields. Provide a " +
      "`displayTotal()` method in `Manager` that prints `Name: <name>, Total: " +
      "<baseSalary + bonus>`. Read a string and two integers from standard " +
      "input, instantiate a `Manager`, and call `displayTotal()`.",
    input: "A string `name`, followed by two integers `baseSalary` and `bonus`.",
    output: "A formatted string: `Name: <name>, Total: <total>`.",
    examples: [
      { input: "Alice 50000 10000", output: "Name: Alice, Total: 60000" },
    ],
    starterCode: SHELL_STRING,
    tests: [
      { input: "Alice 50000 10000", expected: "Name: Alice, Total: 60000" },
      { input: "Bob 0 500", expected: "Name: Bob, Total: 500" },
      { input: "Charlie 100000 0", expected: "Name: Charlie, Total: 100000" },
    ],
    hint:
      "class `Person` has protected string name. `class Employee : public " +
      "Person` adds protected int baseSalary. `class Manager : public Employee` " +
      "adds private int bonus, with a constructor that initializes all three " +
      "fields, plus displayTotal() printing `Name: <name>, Total: <baseSalary + " +
      "bonus>`. in main read name, salary, bonus, create a Manager and call " +
      "displayTotal().",
  },
  {
    id: "this-pointer-shadowing",
    title: "Resolve Shadowing with the This Pointer",
    difficulty: "medium",
    body:
      "Create a class `Box` with private integer members `length`, `width`, " +
      "and `height`. Write a parameterized constructor whose parameter names " +
      "are exactly `length`, `width`, and `height`. Use the `this` pointer " +
      "inside the constructor to correctly assign the parameters to the data " +
      "members (resolving the naming conflict, as taught in Lecture 9). Write a " +
      "public method `volume()` that returns their product. Read 3 integers " +
      "from input, create the `Box`, and print the volume.",
    input: "Three space-separated integers.",
    output: "A single integer representing the volume.",
    examples: [{ input: "2 3 4", output: "24" }],
    starterCode: SHELL,
    tests: [
      { input: "2 3 4", expected: "24" },
      { input: "10 10 10", expected: "1000" },
      { input: "5 0 2", expected: "0" },
      { input: "1 1 1", expected: "1" },
    ],
    hint:
      "class `Box` has private int length, width, height. in the constructor " +
      "use `this->length = length;` (etc.) to set the members from the " +
      "same-named parameters. add `int volume()` returning the product. in main " +
      "read the three ints, create the Box, and print b.volume().",
  },
  {
    id: "exception-rethrowing",
    title: "Catching and Rethrowing Exceptions",
    difficulty: "hard",
    body:
      "Write a function `processNumber(int n)` that checks if `n < 0`. If " +
      "true, it throws a standard integer exception with the value `n`. Write a " +
      "`wrapperFunction(int n)` that calls `processNumber(n)` inside a " +
      "try-catch block. If `wrapperFunction` catches the integer exception, it " +
      "must print `Caught in wrapper, rethrowing...` and then immediately " +
      "`throw;` to pass it up. In `main`, call `wrapperFunction` within a " +
      "try-catch block. Catch the rethrown exception and print `Caught in " +
      "main!`. If no exception is thrown (i.e. `n >= 0`), print `Valid " +
      "number`. Read `n` from standard input.",
    input: "A single integer `n`.",
    output: "Exception trace or success message depending on `n`.",
    examples: [
      { input: "-5", output: "Caught in wrapper, rethrowing...\nCaught in main!" },
      { input: "10", output: "Valid number" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "-5", expected: "Caught in wrapper, rethrowing...\nCaught in main!" },
      { input: "10", expected: "Valid number" },
      { input: "0", expected: "Valid number" },
      { input: "-999", expected: "Caught in wrapper, rethrowing...\nCaught in main!" },
    ],
    hint:
      "in processNumber, `if (n < 0) throw n;`. in wrapperFunction, wrap the " +
      "call in try/catch(int): print `Caught in wrapper, rethrowing...` with a " +
      "newline (endl) then `throw;`. in main, wrap wrapperFunction in " +
      "try/catch(int) printing `Caught in main!`, and print `Valid number` if " +
      "no exception occurred.",
  },
];

export const DIFFICULTIES = ["easy", "medium", "hard"];
