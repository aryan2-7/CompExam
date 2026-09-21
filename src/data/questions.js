// ============ QUESTION BANK (PYQs) ============
// difficulty: "easy" | "medium" | "hard"
// body/input/output/hint: plain text; wrap inline code in backticks `like this`.
// starterCode is intentionally a minimal shell so the student writes the
// logic themselves; structural guidance lives in the hint.
// tests are what get executed. A question counts as completed when all pass.
// source: original paper string; sources: split list; years: filterable years;
// repeated: true when asked in multiple papers.

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
    id: "inch-to-centimeter",
    title: "Inch to Centimeter",
    difficulty: "easy",
    source: "Jun/Jul 2024",
    sources: ["Jun/Jul 2024"],
    years: [2024],
    repeated: false,
    body:
      "Write a C++ program that reads a length in inches and converts it to " +
      "centimeters using `1 inch = 2.54 cm`.",
    input: "One real number `x` (`0 <= x <= 10000`) on a single line.",
    output:
      "Print exactly the length in centimeters, rounded to 2 decimal places, " +
      "with nothing else.",
    examples: [
      { input: "1", output: "2.54" },
      { input: "10", output: "25.40" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "1", expected: "2.54" },
      { input: "0", expected: "0.00" },
      { input: "10", expected: "25.40" },
      { input: "2.5", expected: "6.35" },
      { input: "100", expected: "254.00" },
    ],
    hint:
      "Multiply by `2.54` and use `fixed` with `setprecision(2)` from " +
      "`<iomanip>`.",
  },
  {
    id: "circle-class",
    title: "Circle Class",
    difficulty: "easy",
    source: "Jun/Jul 2024",
    sources: ["Jun/Jul 2024"],
    years: [2024],
    repeated: false,
    body:
      "Define a class `Circle` with a private data member `radius` and the " +
      "member functions `void setSize(float radius)`, `float getArea()` and " +
      "`float getPerimeter()`. The area is `3.14159 * r * r` and the " +
      "perimeter is `2 * 3.14159 * r`. Write a complete program that reads a " +
      "radius, sets it with `setSize`, and prints the area and perimeter.",
    input: "One real number `r` (`0 <= r <= 1000`).",
    output:
      "Print exactly two numbers separated by a single space: the area, then " +
      "the perimeter, each rounded to 2 decimal places.",
    examples: [
      { input: "1", output: "3.14 6.28" },
      { input: "2.5", output: "19.63 15.71" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "1", expected: "3.14 6.28" },
      { input: "0", expected: "0.00 0.00" },
      { input: "2.5", expected: "19.63 15.71" },
      { input: "10", expected: "314.16 62.83" },
      { input: "0.5", expected: "0.79 3.14" },
    ],
    hint:
      "Keep `radius` private, set it only through `setSize`, and format both " +
      "values with `fixed` and `setprecision(2)`.",
  },
  {
    id: "circle-constructor-overloading",
    title: "Circle Area and Circumference by Constructor Overloading",
    difficulty: "medium",
    source: "Mar/Apr 2017",
    sources: ["Mar/Apr 2017"],
    years: [2017],
    repeated: false,
    body:
      "Write a program using constructor overloading to compute a circle's " +
      "area and circumference. Provide a default constructor (radius `1`), a " +
      "constructor taking a radius, and a constructor taking a diameter flag. " +
      "The program reads a mode `m` and a value `v`: if `m` is `0` the object " +
      "is built with the default constructor and `v` is ignored, if `m` is " +
      "`1` it is built from radius `v`, and if `m` is `2` it is built from " +
      "diameter `v` (radius is `v / 2`). Use `3.14159` for pi.",
    input:
      "Two numbers on one line: integer `m` in `{0, 1, 2}` and real `v` " +
      "(`0 <= v <= 1000`).",
    output:
      "Print exactly the area and the circumference separated by a single " +
      "space, each rounded to 2 decimal places.",
    examples: [
      { input: "0 99", output: "3.14 6.28" },
      { input: "2 4", output: "12.57 12.57" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "0 99", expected: "3.14 6.28" },
      { input: "1 2.5", expected: "19.63 15.71" },
      { input: "2 4", expected: "12.57 12.57" },
      { input: "1 0", expected: "0.00 0.00" },
      { input: "2 10", expected: "78.54 31.42" },
    ],
    hint:
      "Three constructors with different parameter lists let the compiler " +
      "pick the right one; compute area and circumference in member functions.",
  },
  {
    id: "complex-multiplication",
    title: "Complex Number Multiplication",
    difficulty: "medium",
    source: "Mar/Apr 2017",
    sources: ["Mar/Apr 2017"],
    years: [2017],
    repeated: false,
    body:
      "Write a program that multiplies two complex numbers using operator " +
      "overloading. Define a class `Complex` with `real` and `imag` parts and " +
      "overload `operator*` so that `(a + bi) * (c + di) = (ac - bd) + " +
      "(ad + bc)i`.",
    input:
      "Four integers `a b c d` on one line (`-1000 <= a, b, c, d <= 1000`).",
    output:
      "Print exactly the product as `real imag`, separated by a single space.",
    examples: [
      { input: "1 2 3 4", output: "-5 10" },
      { input: "2 0 0 3", output: "0 6" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "1 2 3 4", expected: "-5 10" },
      { input: "0 0 5 6", expected: "0 0" },
      { input: "-1 -1 -1 1", expected: "2 0" },
      { input: "2 0 0 3", expected: "0 6" },
      { input: "1 0 1 0", expected: "1 0" },
    ],
    hint:
      "Return a new `Complex` from `operator*` built from the two formulas; " +
      "don't modify either operand.",
  },
  {
    id: "province-array-objects",
    title: "Province Array of Objects",
    difficulty: "easy",
    source: "Aug 2019",
    sources: ["Aug 2019"],
    years: [2019],
    repeated: false,
    body:
      "Create a class `Province` with `name`, `area` (sq km) and `population`. " +
      "Read the information of exactly seven provinces into an array of " +
      "objects and display each one.",
    input:
      "Seven lines, each with `name area population`, where `name` is a " +
      "single word (use `_` instead of spaces), `area` and `population` are " +
      "integers.",
    output:
      "Print exactly seven blocks in the order read, each block is three " +
      "lines: `Province name: <name>`, then `Area: <area> sq km`, then " +
      "`Population: <population>` (21 lines total).",
    examples: [
      {
        input: "S1 100 1000\nS2 200 2000\nS3 300 3000\nS4 400 4000\nS5 500 5000\nS6 600 6000\nS7 700 7000",
        output:
          "Province name: S1\nArea: 100 sq km\nPopulation: 1000",
      },
    ],
    starterCode: SHELL_STRING,
    tests: [
      {
        input: "S1 1 1\nS1 1 1\nS1 1 1\nS1 1 1\nS1 1 1\nS1 1 1\nS1 1 1",
        expected:
          "Province name: S1\nArea: 1 sq km\nPopulation: 1\nProvince name: S1\nArea: 1 sq km\nPopulation: 1\nProvince name: S1\nArea: 1 sq km\nPopulation: 1\nProvince name: S1\nArea: 1 sq km\nPopulation: 1\nProvince name: S1\nArea: 1 sq km\nPopulation: 1\nProvince name: S1\nArea: 1 sq km\nPopulation: 1\nProvince name: S1\nArea: 1 sq km\nPopulation: 1",
      },
      {
        input: "S1 100 1000\nS2 200 2000\nS3 300 3000\nS4 400 4000\nS5 500 5000\nS6 600 6000\nS7 700 7000",
        expected:
          "Province name: S1\nArea: 100 sq km\nPopulation: 1000\nProvince name: S2\nArea: 200 sq km\nPopulation: 2000\nProvince name: S3\nArea: 300 sq km\nPopulation: 3000\nProvince name: S4\nArea: 400 sq km\nPopulation: 4000\nProvince name: S5\nArea: 500 sq km\nPopulation: 5000\nProvince name: S6\nArea: 600 sq km\nPopulation: 6000\nProvince name: S7\nArea: 700 sq km\nPopulation: 7000",
      },
      {
        input: "Z1 0 0\nZ2 0 0\nZ3 0 0\nZ4 0 0\nZ5 0 0\nZ6 0 0\nZ7 0 0",
        expected:
          "Province name: Z1\nArea: 0 sq km\nPopulation: 0\nProvince name: Z2\nArea: 0 sq km\nPopulation: 0\nProvince name: Z3\nArea: 0 sq km\nPopulation: 0\nProvince name: Z4\nArea: 0 sq km\nPopulation: 0\nProvince name: Z5\nArea: 0 sq km\nPopulation: 0\nProvince name: Z6\nArea: 0 sq km\nPopulation: 0\nProvince name: Z7\nArea: 0 sq km\nPopulation: 0",
      },
      {
        input: "A1 10 100\nA2 20 200\nState_3 20304 5529452\nA4 40 400\nA5 50 500\nA6 60 600\nA7 70 700",
        expected:
          "Province name: A1\nArea: 10 sq km\nPopulation: 100\nProvince name: A2\nArea: 20 sq km\nPopulation: 200\nProvince name: State_3\nArea: 20304 sq km\nPopulation: 5529452\nProvince name: A4\nArea: 40 sq km\nPopulation: 400\nProvince name: A5\nArea: 50 sq km\nPopulation: 500\nProvince name: A6\nArea: 60 sq km\nPopulation: 600\nProvince name: A7\nArea: 70 sq km\nPopulation: 700",
      },
    ],
    hint:
      "Use `Province p[7]` with a `read()` and a `display()` member function, " +
      "and loop over the array.",
  },
  {
    id: "inline-area-overload",
    title: "Inline Overloaded Area Functions",
    difficulty: "easy",
    source: "Aug 2019",
    sources: ["Aug 2019"],
    years: [2019],
    repeated: false,
    body:
      "Define two `inline` functions with the same name `area` (function " +
      "overloading): `area(float R)` returns the area of a circle " +
      "(`3.14 * R * R`), and `area(float L, float B)` returns the area of a " +
      "rectangle (`L * B`). The program reads a shape code and the needed " +
      "values, then prints the area.",
    input:
      "First an integer `t` (`1` = circle, `2` = rectangle). If `t = 1`, one " +
      "real number `R` follows. If `t = 2`, two real numbers `L B` follow.",
    output: "Print exactly the area rounded to 2 decimal places.",
    examples: [
      { input: "1 2", output: "12.56" },
      { input: "2 3 4", output: "12.00" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "1 2", expected: "12.56" },
      { input: "2 3 4", expected: "12.00" },
      { input: "1 0", expected: "0.00" },
      { input: "2 0 5", expected: "0.00" },
      { input: "2 2.5 4", expected: "10.00" },
    ],
    hint:
      "Mark both functions `inline` and let the number of arguments choose " +
      "the overload.",
  },
  {
    id: "length-class-addition",
    title: "Length Class Addition",
    difficulty: "medium",
    source: "Aug 2019",
    sources: ["Aug 2019"],
    years: [2019],
    repeated: false,
    body:
      "Define a class `Length` with data members `feet` and `inches`, with " +
      "appropriate constructors, and overload `operator+` to add two `Length` " +
      "objects. Carry over correctly using `12 inches = 1 foot`. For example " +
      "`2 ft 9 in + 3 ft 9 in = 6 ft 6 in`.",
    input:
      "Four integers `f1 i1 f2 i2` on one line (`0 <= i1, i2 < 12`, " +
      "`0 <= f1, f2 <= 1000`).",
    output:
      "Print exactly `<feet> <inches>` for the sum, separated by a single " +
      "space, with `inches` in `0..11`.",
    examples: [
      { input: "2 9 3 9", output: "6 6" },
      { input: "1 11 0 1", output: "2 0" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "2 9 3 9", expected: "6 6" },
      { input: "0 0 0 0", expected: "0 0" },
      { input: "1 11 0 1", expected: "2 0" },
      { input: "5 6 4 6", expected: "10 0" },
      { input: "0 5 0 4", expected: "0 9" },
    ],
    hint:
      "Add feet and inches separately, then move `inches / 12` into feet and " +
      "keep `inches % 12`.",
  },
  {
    id: "alphabet-digit-exception",
    title: "Alphabet or Digit Exception",
    difficulty: "medium",
    source: "Aug 2019",
    sources: ["Aug 2019"],
    years: [2019],
    repeated: false,
    body:
      "Write a program that reads a single character. Use exception handling: " +
      "if the character is alphabetic, print the welcome message; if it is a " +
      "numeric character, throw an exception and print the error message from " +
      "the `catch` block.",
    input: "One character `c` (a letter `a-z`/`A-Z` or a digit `0-9`).",
    output:
      "Print exactly `Welcome` if `c` is alphabetic, otherwise print exactly " +
      "`Error`.",
    examples: [
      { input: "a", output: "Welcome" },
      { input: "7", output: "Error" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "a", expected: "Welcome" },
      { input: "Z", expected: "Welcome" },
      { input: "7", expected: "Error" },
      { input: "0", expected: "Error" },
      { input: "m", expected: "Welcome" },
    ],
    hint:
      "Use `isdigit`/`isalpha`, `throw` inside a `try` when a digit is found, " +
      "and print the messages from the appropriate branch.",
  },
  {
    id: "counter-increment-overload",
    title: "Postfix and Prefix Increment Overloading",
    difficulty: "medium",
    source: "May/Jun 2022, Jan 2025",
    sources: ["May/Jun 2022", "Jan 2025"],
    years: [2022, 2025],
    repeated: true,
    body:
      "Define a class `Counter` holding an integer, overload prefix `++c` " +
      "(increments then returns) and postfix `c++` (returns the old value " +
      "then increments, with the dummy `int` parameter). In May/Jun 2022 the " +
      "postfix version was required as a friend function. The program reads " +
      "`n`, creates `Counter c(n)`, then prints the results in order of " +
      "`++c`, then `c++`, then the final value of `c`.",
    input: "One integer `n` (`-1000 <= n <= 1000`).",
    output:
      "Print exactly three integers separated by single spaces: the value " +
      "returned by `++c`, the value returned by `c++`, and the final value " +
      "of `c`.",
    examples: [
      { input: "5", output: "6 6 7" },
      { input: "0", output: "1 1 2" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "5", expected: "6 6 7" },
      { input: "0", expected: "1 1 2" },
      { input: "-1", expected: "0 0 1" },
      { input: "-5", expected: "-4 -4 -3" },
      { input: "999", expected: "1000 1000 1001" },
    ],
    hint:
      "Prefix takes no parameter and returns the updated object; postfix " +
      "takes a dummy `int`, saves a copy, increments, and returns the copy.",
  },
  {
    id: "stats-template-largest-average",
    title: "Class Template Largest and Average",
    difficulty: "hard",
    source: "May/Jun 2022",
    sources: ["May/Jun 2022"],
    years: [2022],
    repeated: false,
    body:
      "Write a class template `Stats<T>` that stores an array of elements and " +
      "can display the largest value and the average value of the stored " +
      "elements. The program reads `n` integers, stores them in a " +
      "`Stats<int>`, and prints the largest and the average.",
    input:
      "First line `n` (`1 <= n <= 100`). Second line `n` integers " +
      "(`-10000 <= a[i] <= 10000`).",
    output:
      "Print exactly the largest value and the average (rounded to 2 decimal " +
      "places) separated by a single space.",
    examples: [
      { input: "3\n1 2 3", output: "3 2.00" },
      { input: "4\n-1 -2 -3 -4", output: "-1 -2.50" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "3\n1 2 3", expected: "3 2.00" },
      { input: "1\n7", expected: "7 7.00" },
      { input: "4\n-1 -2 -3 -4", expected: "-1 -2.50" },
      { input: "3\n0 0 0", expected: "0 0.00" },
      { input: "5\n10 20 30 40 50", expected: "50 30.00" },
    ],
    hint:
      "Declare `template <class T> class Stats`, keep a `T` array and its " +
      "size, and compute the average as a floating-point division.",
  },
  {
    id: "template-sort-average",
    title: "Class Template Sort and Average",
    difficulty: "hard",
    source: "Apr/May 2023",
    sources: ["Apr/May 2023"],
    years: [2023],
    repeated: false,
    body:
      "Write a class template that sorts the values stored in an array and " +
      "returns their average. The program reads `n` integers, stores them in " +
      "the template class, sorts them ascending and prints them, then prints " +
      "their average.",
    input:
      "First line `n` (`1 <= n <= 100`). Second line `n` integers " +
      "(`-10000 <= a[i] <= 10000`).",
    output:
      "Print exactly two lines. Line 1: the sorted values separated by " +
      "single spaces. Line 2: the average rounded to 2 decimal places.",
    examples: [
      { input: "3\n3 1 2", output: "1 2 3\n2.00" },
      { input: "4\n-1 5 0 2", output: "-1 0 2 5\n1.50" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "3\n3 1 2", expected: "1 2 3\n2.00" },
      { input: "1\n9", expected: "9\n9.00" },
      { input: "4\n-1 5 0 2", expected: "-1 0 2 5\n1.50" },
      { input: "3\n5 5 5", expected: "5 5 5\n5.00" },
      { input: "5\n10 -10 20 -20 0", expected: "-20 -10 0 10 20\n0.00" },
    ],
    hint:
      "Implement a simple bubble sort inside a member function of `template " +
      "<class T>` and compute the average using a `double` sum.",
  },
  {
    id: "restaurant-bill-polymorphism",
    title: "Restaurant Bill with Runtime Polymorphism",
    difficulty: "hard",
    source: "May/Jun 2022",
    sources: ["May/Jun 2022"],
    years: [2022],
    repeated: false,
    body:
      "Deal with food orders and compute the bill. Class `Food` has `DishName` " +
      "(string) and `Price` (int). Class `TableInfo` has a unique integer " +
      "`TableNo` and a `Menu` array of `Food`. Class `BillAmount` derives " +
      "from `TableInfo` and has `NetAmt` (sum of dish prices), `VAT` (13% of " +
      "`NetAmt`), `ServiceCharge` (10% of `NetAmt`) and `GrossAmt = NetAmt + " +
      "VAT + ServiceCharge`. Store customers for 5 tables and use runtime " +
      "polymorphism (a virtual `display` through a base pointer) to print " +
      "each table's bill.",
    input:
      "For each of 5 tables: a line with `TableNo k`, then `k` lines each " +
      "`DishName Price` (`DishName` a single word, `Price` an integer, " +
      "`1 <= k <= 10`).",
    output:
      "Print exactly one line per table, in input order: `Table <no>: " +
      "NetAmt=<x> VAT=<y> ServiceCharge=<z> GrossAmt=<w>` with every amount " +
      "rounded to 2 decimal places.",
    examples: [
      {
        input: "1 3\nMomo 250\nChowmein 150\nTea 100\n2 1\nRice 200\n3 1\nBurger 150\n4 2\nPizza 300\nCoke 50\n5 1\nCoffee 80",
        output:
          "Table 1: NetAmt=500.00 VAT=65.00 ServiceCharge=50.00 GrossAmt=615.00",
      },
    ],
    starterCode: SHELL_STRING,
    tests: [
      {
        input: "1 3\nMomo 250\nChowmein 150\nTea 100\n2 1\nRice 200\n3 1\nBurger 150\n4 2\nPizza 300\nCoke 50\n5 1\nCoffee 80",
        expected:
          "Table 1: NetAmt=500.00 VAT=65.00 ServiceCharge=50.00 GrossAmt=615.00\nTable 2: NetAmt=200.00 VAT=26.00 ServiceCharge=20.00 GrossAmt=246.00\nTable 3: NetAmt=150.00 VAT=19.50 ServiceCharge=15.00 GrossAmt=184.50\nTable 4: NetAmt=350.00 VAT=45.50 ServiceCharge=35.00 GrossAmt=430.50\nTable 5: NetAmt=80.00 VAT=10.40 ServiceCharge=8.00 GrossAmt=98.40",
      },
      {
        input: "1 1\nDal 1000\n2 1\nRice 100\n3 1\nBurger 100\n4 1\nPizza 100\n5 1\nTea 100",
        expected:
          "Table 1: NetAmt=1000.00 VAT=130.00 ServiceCharge=100.00 GrossAmt=1230.00\nTable 2: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00\nTable 3: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00\nTable 4: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00\nTable 5: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00",
      },
      {
        input: "1 1\nMomo 99\n2 1\nRice 100\n3 1\nBurger 100\n4 1\nPizza 100\n5 1\nTea 100",
        expected:
          "Table 1: NetAmt=99.00 VAT=12.87 ServiceCharge=9.90 GrossAmt=121.77\nTable 2: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00\nTable 3: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00\nTable 4: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00\nTable 5: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00",
      },
      {
        input: "1 1\nTea 1\n2 1\nRice 100\n3 1\nBurger 100\n4 1\nPizza 100\n5 1\nCoffee 100",
        expected:
          "Table 1: NetAmt=1.00 VAT=0.13 ServiceCharge=0.10 GrossAmt=1.23\nTable 2: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00\nTable 3: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00\nTable 4: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00\nTable 5: NetAmt=100.00 VAT=13.00 ServiceCharge=10.00 GrossAmt=123.00",
      },
    ],
    hint:
      "Give the base class a `virtual void display()`, keep an array of base " +
      "pointers to the 5 `BillAmount` objects, and call `display()` through " +
      "each pointer.",
  },
  {
    id: "everest-friend-subtraction",
    title: "Mount Everest Height with Friend Subtraction",
    difficulty: "medium",
    source: "May/Jun 2022",
    sources: ["May/Jun 2022"],
    years: [2022],
    repeated: false,
    body:
      "Write a class that stores a height in meters and centimeters, " +
      "initialized through a parameterized constructor. Create `MtEverest` " +
      "and `BaseCamp`, then compute `HeightfromBaseCamp` by overloading " +
      "`operator-` as a friend function so that `HeightfromBaseCamp = " +
      "MtEverest - BaseCamp`. Borrow correctly when centimeters go negative " +
      "(`100 cm = 1 m`).",
    input:
      "Four integers `m1 c1 m2 c2` on one line, where `m1 c1` is `MtEverest` " +
      "and `m2 c2` is `BaseCamp` (`0 <= c1, c2 < 100`, `MtEverest >= " +
      "BaseCamp`).",
    output:
      "Print exactly `<meters> <centimeters>` of the difference, with " +
      "centimeters in `0..99`.",
    examples: [
      { input: "8848 86 5364 0", output: "3484 86" },
      { input: "5 50 2 75", output: "2 75" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "8848 86 5364 0", expected: "3484 86" },
      { input: "10 0 10 0", expected: "0 0" },
      { input: "5 50 2 75", expected: "2 75" },
      { input: "100 0 0 1", expected: "99 99" },
      { input: "3 20 3 5", expected: "0 15" },
    ],
    hint:
      "Convert both heights to total centimeters, subtract, then split the " +
      "result into `total / 100` and `total % 100`.",
  },
  {
    id: "static-object-counter",
    title: "Static Object Counter",
    difficulty: "easy",
    source: "Aug 2018, Apr/May 2023",
    sources: ["Aug 2018", "Apr/May 2023"],
    years: [2018, 2023],
    repeated: true,
    body:
      "Implement a class with a `static` data member (a count) and a `static` " +
      "member function. Each object holds a serial number: the first object " +
      "created is numbered `1`, the second `2`, and so on, and the constructor " +
      "examines the static count to decide the serial number of the new object. " +
      "The program reads `n`, creates `n` objects, has each one report its own " +
      "serial number, and then uses the static function to print the total " +
      "number of objects created.",
    input: "One integer `n` (`0 <= n <= 1000`).",
    output:
      "Print exactly `n` lines `Object number: <k>` for `k = 1..n` in order, " +
      "followed by one final line `Total objects: <n>`. When `n = 0`, print " +
      "only `Total objects: 0`.",
    examples: [
      {
        input: "3",
        output:
          "Object number: 1\nObject number: 2\nObject number: 3\nTotal objects: 3",
      },
      { input: "0", output: "Total objects: 0" },
    ],
    starterCode: SHELL,
    tests: [
      {
        input: "3",
        expected:
          "Object number: 1\nObject number: 2\nObject number: 3\nTotal objects: 3",
      },
      { input: "0", expected: "Total objects: 0" },
      { input: "1", expected: "Object number: 1\nTotal objects: 1" },
      { input: "2", expected: "Object number: 1\nObject number: 2\nTotal objects: 2" },
      {
        input: "5",
        expected:
          "Object number: 1\nObject number: 2\nObject number: 3\nObject number: 4\nObject number: 5\nTotal objects: 5",
      },
    ],
    hint:
      "Increment the static counter in the constructor and copy it into the " +
      "object's own serial number, define the static member outside the class, " +
      "and call the static function with `ClassName::function()`.",
  },
  {
    id: "library-fines-polymorphism",
    title: "Library Book Fines with Runtime Polymorphism",
    difficulty: "hard",
    source: "Apr/May 2023",
    sources: ["Apr/May 2023"],
    years: [2023],
    repeated: false,
    body:
      "Implement the book issuing component of a library. Class `Book` has " +
      "`name` and `author` (strings). Derive `ReferenceBook` (stores `genre`) " +
      "and `IssuableBook` (stores `genre`) with `lateReturn` (days late) and " +
      "`fine` (fine amount). A reference book can be issued for `1` day and " +
      "earns a fine of Rs. `5`/day after `1` day. An issuable book can be " +
      "issued for `30` days and earns a fine of Rs. `1`/day after `30` days. " +
      "Each issue gets a unique `issueID` starting from `1` and " +
      "auto-incremented by `1` per issue. Use runtime polymorphism (a virtual " +
      "method called through a `Book*`) to display information for the books " +
      "issued.",
    input:
      "First line `k` (number of issues, `1 <= k <= 20`). Then `k` lines each " +
      "`type name author genre lateDays`, where `type` is `R` (reference) or " +
      "`I` (issuable), the four text fields are single words, and `lateDays` " +
      "is an integer `0 <= lateDays <= 1000`.",
    output:
      "Print exactly one line per issue, in order: `IssueID=<id> " +
      "Name=<name> Author=<author> Genre=<genre> Late=<lateDays> " +
      "Fine=<fine>`.",
    examples: [
      {
        input: "2\nI Dune Herbert SciFi 5\nR Atlas Smith Geography 2",
        output:
          "IssueID=1 Name=Dune Author=Herbert Genre=SciFi Late=5 Fine=0\nIssueID=2 Name=Atlas Author=Smith Genre=Geography Late=2 Fine=5",
      },
    ],
    starterCode: SHELL_STRING,
    tests: [
      {
        input: "1\nR Atlas Smith Geo 0",
        expected: "IssueID=1 Name=Atlas Author=Smith Genre=Geo Late=0 Fine=0",
      },
      {
        input: "1\nR Atlas Smith Geo 1",
        expected: "IssueID=1 Name=Atlas Author=Smith Genre=Geo Late=1 Fine=0",
      },
      {
        input: "1\nR Atlas Smith Geo 10",
        expected: "IssueID=1 Name=Atlas Author=Smith Genre=Geo Late=10 Fine=45",
      },
      {
        input: "1\nI Dune Herbert SciFi 31",
        expected: "IssueID=1 Name=Dune Author=Herbert Genre=SciFi Late=31 Fine=1",
      },
      {
        input: "1\nI Dune Herbert SciFi 45",
        expected: "IssueID=1 Name=Dune Author=Herbert Genre=SciFi Late=45 Fine=15",
      },
    ],
    hint:
      "Compute the fine as `max(0, late - allowedDays) * rate` inside each " +
      "derived class's overriding method, and use a `static int` for the ID " +
      "counter.",
  },
  {
    id: "greatest-three-template",
    title: "Function Template with Multiple Types",
    difficulty: "medium",
    source: "Apr/May 2023, Sep 2024",
    sources: ["Apr/May 2023", "Sep 2024"],
    years: [2023, 2024],
    repeated: true,
    body:
      "Write a function template that works with multiple template types. In " +
      "Apr/May 2023 the template took two different types, and in Sep 2024 a " +
      "template returned the greatest of three numbers with the arguments " +
      "passed as reference variables. Implement `template <class T> T " +
      "greatest(T &a, T &b, T &c)` and use it on integers. The program reads " +
      "three integers and prints the greatest.",
    input: "Three integers `a b c` on one line (`-100000 <= a, b, c <= 100000`).",
    output: "Print exactly the greatest of the three values.",
    examples: [
      { input: "1 2 3", output: "3" },
      { input: "-5 -2 -9", output: "-2" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "1 2 3", expected: "3" },
      { input: "3 2 1", expected: "3" },
      { input: "-5 -2 -9", expected: "-2" },
      { input: "0 0 0", expected: "0" },
      { input: "7 7 5", expected: "7" },
    ],
    hint:
      "Take the parameters by reference and compare them with `if`/`else` or " +
      "nested `? :` inside the template.",
  },
  {
    id: "date-age-calculation",
    title: "Date Class Age Calculation",
    difficulty: "hard",
    source: "Apr/May 2023",
    sources: ["Apr/May 2023"],
    years: [2023],
    repeated: false,
    body:
      "Implement a class that represents a day in `YYYY`, `MM`, `DD` format. " +
      "Overload an operator (for example `operator-`) so that subtracting a " +
      "birth date from a given date returns the age of the person, in " +
      "completed years, at the entered date. Age is the number of full years, " +
      "so a birthday not yet reached in the entered year does not count.",
    input:
      "Six integers on one line: `by bm bd cy cm cd`, where `(by, bm, bd)` " +
      "is the birth date and `(cy, cm, cd)` is the entered date (`cy >= by`, " +
      "valid dates).",
    output: "Print exactly the age in completed years as a single integer.",
    examples: [
      { input: "2000 5 15 2024 5 15", output: "24" },
      { input: "2000 5 15 2024 5 14", output: "23" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "2000 5 15 2024 5 15", expected: "24" },
      { input: "2000 5 15 2024 5 14", expected: "23" },
      { input: "2000 5 15 2024 6 1", expected: "24" },
      { input: "2024 1 1 2024 1 1", expected: "0" },
      { input: "1990 12 31 2025 1 1", expected: "34" },
    ],
    hint:
      "Start with `cy - by`, then subtract one if `(cm, cd)` is earlier than " +
      "`(bm, bd)`.",
  },
  {
    id: "age-after-period",
    title: "Age After a Period",
    difficulty: "hard",
    source: "Sep 2024",
    sources: ["Sep 2024"],
    years: [2024],
    repeated: false,
    body:
      "Write a program to represent an age of a person in years, months and " +
      "days. Overload `operator+` to calculate the age of the person after a " +
      "certain period, where the period is also represented in years, months " +
      "and days. Normalize the result using `1 month = 30 days` and `1 year " +
      "= 12 months`.",
    input:
      "Six integers `y1 m1 d1 y2 m2 d2` on one line, the age followed by the " +
      "period (all `>= 0`, `m < 12`, `d < 30` for each).",
    output:
      "Print exactly `<years> <months> <days>` of the sum, with months in " +
      "`0..11` and days in `0..29`.",
    examples: [
      { input: "20 5 15 1 2 20", output: "21 8 5" },
      { input: "10 11 29 0 1 1", output: "11 1 0" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "20 5 15 1 2 20", expected: "21 8 5" },
      { input: "0 0 0 0 0 0", expected: "0 0 0" },
      { input: "10 11 29 0 1 1", expected: "11 1 0" },
      { input: "5 6 10 5 6 10", expected: "11 0 20" },
      { input: "1 0 0 0 0 0", expected: "1 0 0" },
    ],
    hint:
      "Add each field, carry `days / 30` into months, then carry `months / " +
      "12` into years, keeping the remainders.",
  },
  {
    id: "array-max-exception",
    title: "Maximum of Array with Exception Handling",
    difficulty: "medium",
    source: "Sep 2024",
    sources: ["Sep 2024"],
    years: [2024],
    repeated: false,
    body:
      "Write a program that returns the greatest value of an array and uses " +
      "exception handling to check two conditions: the array size is out of " +
      "bound (`n` is outside `1..100`) or the array contains a negative " +
      "value. The array must contain only positive numbers.",
    input:
      "First line `n`. Second line (only present when `1 <= n <= 100`) `n` " +
      "integers.",
    output:
      "Print exactly `Array size out of bound` if `n < 1` or `n > 100`. " +
      "Otherwise print exactly `Negative value found` if any element is " +
      "negative. Otherwise print exactly the greatest value.",
    examples: [
      { input: "3\n4 9 2", output: "9" },
      { input: "3\n4 -1 2", output: "Negative value found" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "3\n4 9 2", expected: "9" },
      { input: "1\n5", expected: "5" },
      { input: "3\n4 -1 2", expected: "Negative value found" },
      { input: "0", expected: "Array size out of bound" },
      { input: "101", expected: "Array size out of bound" },
    ],
    hint:
      "Check the size and read the values inside a `try` block, `throw` a " +
      "distinct message for each failure, and print it from the `catch`.",
  },
  {
    id: "digital-wallet-abstract",
    title: "Digital Wallet with Abstract Class",
    difficulty: "hard",
    source: "Sep 2024",
    sources: ["Sep 2024"],
    years: [2024],
    repeated: false,
    body:
      "Represent transactions of a digital wallet. Define an abstract class " +
      "`Digital_wallet` with data members `Balance` and `RewardPoints`. " +
      "Derive class `Transaction` that performs load balance, make a payment " +
      "and show payment history. For every payment strictly greater than " +
      "`2000`, earn `50` reward points. Every `1000` reward points earn a " +
      "balance of `10`, added to the balance and removing those `1000` " +
      "points. A payment is only accepted if `amount <= Balance`, otherwise " +
      "it is rejected. Store the transactions in an array and use runtime " +
      "polymorphism to display a particular transaction by its ID (IDs start " +
      "at `1` in the order performed).",
    input:
      "First line `q` (`1 <= q <= 20`). Then `q` lines, each `L amount` (load " +
      "balance) or `P amount` (make a payment), with `1 <= amount <= 100000`. " +
      "The last line contains one integer `id`, the transaction to display.",
    output:
      "Print exactly `ID=<id> Type=<Load|Payment> Amount=<amount> " +
      "Status=<OK|Rejected> Balance=<balance after> Reward=<reward after>` " +
      "for the requested transaction.",
    examples: [
      {
        input: "2\nL 5000\nP 3000\n2",
        output: "ID=2 Type=Payment Amount=3000 Status=OK Balance=2000 Reward=50",
      },
    ],
    starterCode: SHELL,
    tests: [
      {
        input: "1\nL 5000\n1",
        expected: "ID=1 Type=Load Amount=5000 Status=OK Balance=5000 Reward=0",
      },
      {
        input: "2\nL 5000\nP 3000\n2",
        expected: "ID=2 Type=Payment Amount=3000 Status=OK Balance=2000 Reward=50",
      },
      {
        input: "2\nL 3000\nP 2000\n2",
        expected: "ID=2 Type=Payment Amount=2000 Status=OK Balance=1000 Reward=0",
      },
      {
        input: "2\nL 100\nP 500\n2",
        expected: "ID=2 Type=Payment Amount=500 Status=Rejected Balance=100 Reward=0",
      },
    ],
    hint:
      "Make `Digital_wallet` abstract with a pure virtual `display`, keep a " +
      "`Transaction*` (or base pointer) array, and record a snapshot of " +
      "balance and reward after each operation.",
  },
  {
    id: "employee-virtual-base",
    title: "Employee Virtual Base Class",
    difficulty: "hard",
    source: "Jun/Jul 2024",
    sources: ["Jun/Jul 2024"],
    years: [2024],
    repeated: false,
    body:
      "Define a virtual base class. Create a base class `Employee` with a " +
      "`name` and `id`. Derive two classes, `Administrative` and `Academic`, " +
      "virtually from `Employee`. Derive another class `HOD` from both. " +
      "Create appropriate data members and member functions in each class to " +
      "show the implementation of a virtual base class, and construct the " +
      "`HOD` so that the `Employee` part is initialized only once.",
    input:
      "One line `name id salary`, with `name` a single word, `id` and " +
      "`salary` integers.",
    output:
      "Print exactly one line: `Name: <name> ID: <id> Salary: <salary>`.",
    examples: [{ input: "Ram 101 50000", output: "Name: Ram ID: 101 Salary: 50000" }],
    starterCode: SHELL_STRING,
    tests: [
      { input: "Ram 101 50000", expected: "Name: Ram ID: 101 Salary: 50000" },
      { input: "A 1 0", expected: "Name: A ID: 1 Salary: 0" },
      { input: "Sita 7 120000", expected: "Name: Sita ID: 7 Salary: 120000" },
      { input: "Hari 999 1", expected: "Name: Hari ID: 999 Salary: 1" },
    ],
    hint:
      "Write `class Administrative : virtual public Employee` (same for " +
      "`Academic`), so `HOD` holds a single `Employee` subobject and can " +
      "print `name` and `id` without ambiguity.",
  },
  {
    id: "player-class",
    title: "Player Class",
    difficulty: "easy",
    source: "Jan 2025",
    sources: ["Jan 2025"],
    years: [2025],
    repeated: false,
    body:
      "Design a class `Player` with data members `player_Name`, `jersy_no`, " +
      "`country` and `email_address`. Define a constructor and appropriate " +
      "methods to get the player information and display it. The program " +
      "reads one player and displays the information.",
    input:
      "One line with four values: `player_Name jersy_no country " +
      "email_address` (single-word strings, and `jersy_no` an integer).",
    output:
      "Print exactly four lines: `Name: <player_Name>`, `Jersey No: " +
      "<jersy_no>`, `Country: <country>`, `Email: <email_address>`.",
    examples: [
      {
        input: "Messi 10 Argentina messi@mail.com",
        output: "Name: Messi\nJersey No: 10\nCountry: Argentina\nEmail: messi@mail.com",
      },
    ],
    starterCode: SHELL_STRING,
    tests: [
      {
        input: "Messi 10 Argentina messi@mail.com",
        expected: "Name: Messi\nJersey No: 10\nCountry: Argentina\nEmail: messi@mail.com",
      },
      {
        input: "A 0 X a@b.c",
        expected: "Name: A\nJersey No: 0\nCountry: X\nEmail: a@b.c",
      },
      {
        input: "Paras 7 Nepal paras@nep.com",
        expected: "Name: Paras\nJersey No: 7\nCountry: Nepal\nEmail: paras@nep.com",
      },
      {
        input: "Zed 99 India zed@ind.in",
        expected: "Name: Zed\nJersey No: 99\nCountry: India\nEmail: zed@ind.in",
      },
    ],
    hint:
      "Take the four fields in the constructor, keep them private, and print " +
      "them from a `display()` method.",
  },
  {
    id: "rectangle-calculate-inheritance",
    title: "Rectangle and Calculate Inheritance",
    difficulty: "medium",
    source: "Jan 2025",
    sources: ["Jan 2025"],
    years: [2025],
    repeated: false,
    body:
      "Create a parent class `Rectangle` with `length` and `breadth` of type " +
      "`float` and the member functions `void setlength(float)` and `void " +
      "setbreadth(float)`. Create a child class `Calculate` with `float " +
      "perimeter()`, `float area()` and `void show()` (displays the length " +
      "and breadth). In `main`, create two objects and set their sizes from " +
      "input, then display each rectangle with its area and perimeter.",
    input:
      "Four real numbers on one line: `l1 b1 l2 b2` (`0 <= value <= 1000`).",
    output:
      "Print exactly two lines, one per rectangle: " +
      "`Length=<l> Breadth=<b> Area=<a> Perimeter=<p>` with every number " +
      "rounded to 2 decimal places.",
    examples: [
      {
        input: "10 7.5 12.5 10",
        output:
          "Length=10.00 Breadth=7.50 Area=75.00 Perimeter=35.00\nLength=12.50 Breadth=10.00 Area=125.00 Perimeter=45.00",
      },
    ],
    starterCode: SHELL,
    tests: [
      {
        input: "10 7.5 12.5 10",
        expected:
          "Length=10.00 Breadth=7.50 Area=75.00 Perimeter=35.00\nLength=12.50 Breadth=10.00 Area=125.00 Perimeter=45.00",
      },
      {
        input: "0 5 1 1",
        expected:
          "Length=0.00 Breadth=5.00 Area=0.00 Perimeter=10.00\nLength=1.00 Breadth=1.00 Area=1.00 Perimeter=4.00",
      },
      {
        input: "2 3 4 5",
        expected:
          "Length=2.00 Breadth=3.00 Area=6.00 Perimeter=10.00\nLength=4.00 Breadth=5.00 Area=20.00 Perimeter=18.00",
      },
      {
        input: "100 100 0.5 0.5",
        expected:
          "Length=100.00 Breadth=100.00 Area=10000.00 Perimeter=400.00\nLength=0.50 Breadth=0.50 Area=0.25 Perimeter=2.00",
      },
    ],
    hint:
      "`Calculate` publicly inherits `Rectangle`, so it can read the " +
      "protected `length` and `breadth` set by the parent's setters.",
  },
  {
    id: "bank-account-inheritance",
    title: "Bank Account Inheritance",
    difficulty: "hard",
    source: "Jan 2025",
    sources: ["Jan 2025"],
    years: [2025],
    repeated: false,
    body:
      "A bank maintains two kinds of accounts: a Saving account, which " +
      "provides interest but no withdrawal facility, and a Current account, " +
      "which provides withdrawal facility but no interest. Create a class " +
      "`Account` that stores the customer name, account number and type of " +
      "account. Derive `Current_Account` and `Saving_Account` and give them " +
      "the necessary constructors and destructors. Support these tasks: " +
      "create an instance and display the customer details, accept deposits " +
      "and update the balance, display the balance, and compute and deposit " +
      "interest (Saving only). Interest is `balance * rate / 100`, added to " +
      "the balance.",
    input:
      "First line `S` or `C` (account type), then `name accountNo`. Then a " +
      "line with `d` (deposits count) followed by `d` deposit amounts, then " +
      "a line with the interest `rate` (percent).",
    output:
      "Print exactly: line 1 `Name: <name> Account: <accountNo> Type: " +
      "<Saving|Current>`, line 2 `Balance: <balance>` after the deposits, " +
      "and for a Saving account a line 3 `Balance after interest: <balance>`. " +
      "Balances are printed rounded to 2 decimal places. A Current account " +
      "prints only lines 1 and 2.",
    examples: [
      {
        input: "S Ram 1001\n2 1000 500\n10",
        output:
          "Name: Ram Account: 1001 Type: Saving\nBalance: 1500.00\nBalance after interest: 1650.00",
      },
    ],
    starterCode: SHELL_STRING,
    tests: [
      {
        input: "S Ram 1001\n2 1000 500\n10",
        expected:
          "Name: Ram Account: 1001 Type: Saving\nBalance: 1500.00\nBalance after interest: 1650.00",
      },
      {
        input: "C Sita 2002\n1 800\n5",
        expected: "Name: Sita Account: 2002 Type: Current\nBalance: 800.00",
      },
      {
        input: "S A 1\n0\n10",
        expected:
          "Name: A Account: 1 Type: Saving\nBalance: 0.00\nBalance after interest: 0.00",
      },
      {
        input: "S B 2\n1 100\n0",
        expected:
          "Name: B Account: 2 Type: Saving\nBalance: 100.00\nBalance after interest: 100.00",
      },
      {
        input: "C D 4\n2 50 25\n5",
        expected: "Name: D Account: 4 Type: Current\nBalance: 75.00",
      },
    ],
    hint:
      "Keep `balance` in the base class with a `deposit()`, and put " +
      "`computeInterest()` only in `Saving_Account`; the interest rate line " +
      "is read but ignored for a Current account.",
  },
  {
    id: "calculator-class-template",
    title: "Calculator Class Template",
    difficulty: "hard",
    source: "Jan 2025",
    sources: ["Jan 2025"],
    years: [2025],
    repeated: false,
    body:
      "Write a class template `Calculator<T>` that shows the working of a " +
      "calculator, with member functions `add`, `sub`, `mul` and `div` taking " +
      "two values of type `T`. The program reads an operator and two integers " +
      "and prints the result using `Calculator<int>`, with `div` performing " +
      "integer division. A division by zero must print an error.",
    input:
      "One line `op a b`, where `op` is one of `+`, `-`, `*`, `/` and `a`, " +
      "`b` are integers (`-10000 <= a, b <= 10000`).",
    output:
      "Print exactly the integer result, or exactly `Division by zero` when " +
      "`op` is `/` and `b` is `0`.",
    examples: [
      { input: "+ 3 4", output: "7" },
      { input: "/ 7 2", output: "3" },
    ],
    starterCode: SHELL,
    tests: [
      { input: "+ 3 4", expected: "7" },
      { input: "- 3 10", expected: "-7" },
      { input: "* -3 4", expected: "-12" },
      { input: "/ 7 2", expected: "3" },
      { input: "/ 5 0", expected: "Division by zero" },
    ],
    hint:
      "Declare `template <class T> class Calculator` with four small methods, " +
      "and check for a zero divisor before calling `div`.",
  },
  {
    id: "master-virtual-base",
    title: "Master Class with Virtual Base Class",
    difficulty: "hard",
    source: "Aug 2018",
    sources: ["Aug 2018"],
    years: [2018],
    repeated: false,
    body:
      "A class `master` derives information from the classes `account` and " +
      "`admin`, which in turn are derived from the class `person`. Define all " +
      "four classes and use the concept of a virtual base class so that " +
      "`master` holds a single copy of `person`. `person` has data members " +
      "`name` and `code`, `account` has `pay`, `admin` has `experience`, and " +
      "`master` has the derived data members `name`, `code`, `experience` and " +
      "`pay`. The program creates a `master` object, then updates it, and " +
      "displays its information after each step.",
    input:
      "First line `name code experience pay` (`name` a single word, the other " +
      "three integers). Second line `experience pay`, the new values used to " +
      "update the object.",
    output:
      "Print exactly two lines. Line 1 (before the update): `Name: <name> " +
      "Code: <code> Experience: <experience> Pay: <pay>`. Line 2 (after the " +
      "update, only `experience` and `pay` change): the same format with the " +
      "new values.",
    examples: [
      {
        input: "Ram 101 5 50000\n6 60000",
        output:
          "Name: Ram Code: 101 Experience: 5 Pay: 50000\nName: Ram Code: 101 Experience: 6 Pay: 60000",
      },
    ],
    starterCode: SHELL_STRING,
    tests: [
      {
        input: "Ram 101 5 50000\n6 60000",
        expected:
          "Name: Ram Code: 101 Experience: 5 Pay: 50000\nName: Ram Code: 101 Experience: 6 Pay: 60000",
      },
      {
        input: "A 1 0 0\n0 0",
        expected:
          "Name: A Code: 1 Experience: 0 Pay: 0\nName: A Code: 1 Experience: 0 Pay: 0",
      },
      {
        input: "Sita 7 2 30000\n3 35000",
        expected:
          "Name: Sita Code: 7 Experience: 2 Pay: 30000\nName: Sita Code: 7 Experience: 3 Pay: 35000",
      },
      {
        input: "Hari 999 10 1\n10 2",
        expected:
          "Name: Hari Code: 999 Experience: 10 Pay: 1\nName: Hari Code: 999 Experience: 10 Pay: 2",
      },
    ],
    hint:
      "Declare `account` and `admin` with `virtual public person`, give " +
      "`master` update and display functions, and remember `name` and `code` " +
      "stay the same during the update.",
  },
  {
    id: "function-template-array-average",
    title: "Function Template Array Average",
    difficulty: "medium",
    source: "Aug 2018",
    sources: ["Aug 2018"],
    years: [2018],
    repeated: false,
    body:
      "Write a function template that returns the `float` average and takes " +
      "two arguments: an array of numbers and the size of the array. In " +
      "`main`, use the function with different types of data: first an `int` " +
      "array, then a `float` array.",
    input:
      "First line `n` (`1 <= n <= 100`). Second line `n` integers. Third line " +
      "`m` (`1 <= m <= 100`). Fourth line `m` real numbers.",
    output:
      "Print exactly two lines: the average of the integer array, then the " +
      "average of the float array, each rounded to 2 decimal places.",
    examples: [{ input: "3\n1 2 3\n2\n1.5 2.5", output: "2.00\n2.00" }],
    starterCode: SHELL,
    tests: [
      { input: "3\n1 2 3\n2\n1.5 2.5", expected: "2.00\n2.00" },
      { input: "1\n7\n1\n7", expected: "7.00\n7.00" },
      { input: "4\n-1 -2 -3 -4\n3\n0 0 0", expected: "-2.50\n0.00" },
      { input: "2\n1 2\n4\n0.5 0.5 0.5 0.5", expected: "1.50\n0.50" },
      { input: "5\n10 20 30 40 50\n2\n-1 1", expected: "30.00\n0.00" },
    ],
    hint:
      "Declare `template <class T> float average(T arr[], int size)`, sum as " +
      "a `float`, and call it once with an `int` array and once with a " +
      "`float` array.",
  },
  {
    id: "publication-abstract-polymorphism",
    title: "Publication Abstract Class with Runtime Polymorphism",
    difficulty: "hard",
    source: "Aug 2018",
    sources: ["Aug 2018"],
    years: [2018],
    repeated: false,
    body:
      "Create a class `publication` that stores the `title` (a string) and " +
      "`price` (type `float`) of a publication. Derive two classes: `book`, " +
      "which adds a `page_count` (type `int`), and `tape`, which adds a " +
      "playing `time_in_minutes` (type `float`). Each of the three classes has " +
      "a `getdata()` function to get its data and a `putdata()` function to " +
      "display it. Make `publication` an abstract class (with pure virtual " +
      "`getdata` and `putdata`) and achieve runtime polymorphism by calling " +
      "them through `publication*` pointers.",
    input:
      "First line `k` (`1 <= k <= 20`). Then `k` lines, each starting with a " +
      "type `B` (book) or `T` (tape). A `B` line is `B title price page_count`, " +
      "a `T` line is `T title price time_in_minutes`. `title` is a single " +
      "word, `price` and `time_in_minutes` are real numbers, and `page_count` " +
      "is an integer.",
    output:
      "Print exactly one line per publication, in input order. A book prints " +
      "`Book Title: <title> Price: <price> Pages: <page_count>`. A tape prints " +
      "`Tape Title: <title> Price: <price> Time: <time_in_minutes>`. Every " +
      "`price` and `time_in_minutes` is rounded to 2 decimal places.",
    examples: [
      {
        input: "2\nB Dune 250 412\nT Jazz 99.5 45.25",
        output:
          "Book Title: Dune Price: 250.00 Pages: 412\nTape Title: Jazz Price: 99.50 Time: 45.25",
      },
    ],
    starterCode: SHELL_STRING,
    tests: [
      {
        input: "1\nB Dune 250 412",
        expected: "Book Title: Dune Price: 250.00 Pages: 412",
      },
      {
        input: "1\nT Jazz 99.5 45.25",
        expected: "Tape Title: Jazz Price: 99.50 Time: 45.25",
      },
      {
        input: "2\nB Dune 250 412\nT Jazz 99.5 45.25",
        expected:
          "Book Title: Dune Price: 250.00 Pages: 412\nTape Title: Jazz Price: 99.50 Time: 45.25",
      },
      { input: "1\nB Free 0 0", expected: "Book Title: Free Price: 0.00 Pages: 0" },
      {
        input: "2\nT A 1 0\nB B 2 3",
        expected:
          "Tape Title: A Price: 1.00 Time: 0.00\nBook Title: B Price: 2.00 Pages: 3",
      },
    ],
    hint:
      "Since the program reads from stdin without prompts, have `getdata()` " +
      "read the remaining fields for its own type (the leading `B`/`T` picks " +
      "which object to create), and keep the objects in an array of " +
      "`publication*`.",
  },
];
