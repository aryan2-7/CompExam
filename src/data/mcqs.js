// ============ MCQ QUESTION BANK ============
// Raw format mirrors the paper source: [session, [[question, options, correctIndex, confidence]]]
// Grouping key is the exact session string ("Mar/Apr 2017"), so months from
// the same year stay as separate entries. confidence ("certain"/"likely") is
// stored but not rendered.

const RAW = [
  [
    "Mar/Apr 2017",
    [
      ["How many types of constructor are there in C++?", ["1", "2", "3", "4"], 2, "likely"],
      ["When is an abstract class useful?", ["no classes should be derived from it", "no objects should be instantiated from it", "you want to defer the declaration of the class", "there are multiple paths from one derived class to another"], 1, "certain"],
      ["Diamond Problem in C++ can be solved using", ["Virtual Function", "Inheritance", "Virtual Base Class", "Polymorphism"], 2, "certain"],
      ["Derived class is also called", ["Parent class", "Child class", "Base class", "Virtual class"], 1, "certain"],
      ["What is meant by pure virtual function?", ["Function which does not have definition of its own", "Function which does have definition of its own", "Function which does not have any return type", "Function which has many arguments"], 0, "certain"],
      ["What is meant by Polymorphism?", ["Class having many forms", "Class having only single form", "Class having two forms", "Class having no forms at all"], 0, "certain"],
      ["How many types of inheritance are there in C++?", ["2", "3", "4", "5"], 3, "likely"],
      ["What should be the name of constructor?", ["Same as object", "Same as member", "Same as class", "Same as function"], 2, "certain"],
      ["What is a function template?", ["Creating a function without having to specify the exact type", "Creating a function with having an exact type", "Both a & b", "Creating a function with no arguments"], 0, "certain"],
      ["What does the class can hold?", ["Another class", "Data", "Function", "Both Data and Function"], 3, "certain"],
      ["How many specifiers are there in class?", ["1", "2", "3", "4"], 2, "certain"],
      ["Which operator is used to define the member of a class externally?", [":", "::", "#", ";"], 1, "certain"],
      ["The access specifier if not declared in a program is by default", ["Public", "Protected", "Private", "Null"], 2, "certain"],
      ["Constructors are a special type of member function which are used to:", ["Initialize the objects", "Construct the data members", "Validate the data's", "Declare the arguments"], 0, "certain"],
      ["When struct is used instead of the keyword class, what will happen in the program?", ["Access is public by default", "Access is private by default", "Access is protected by default", "None of the mentioned"], 0, "certain"],
      ["Which of the following operators can't be overloaded?", ["::", "+", "-", "*"], 0, "certain"],
      ["What is an operator overloading?", ["Making C++ operator works with objects", "Giving new meaning to existing operator", "Both first and second", "Making new operator"], 2, "certain"],
      ["Function overloading is also similar to", ["Operator overloading", "Constructor overloading", "Function overriding", "None"], 1, "certain"],
      ["What will happen while using pass by reference?", ["The values of those variables are passed to the function so that it can manipulate them", "The location of the variable in memory is passed to the function so that it can use the same memory area for its processing", "Changes in parameters will not be intact", "The function declaration should contain ampersand (&) in its type declaration"], 1, "certain"],
      ["Which keyword is used to check exception in the block of code?", ["try", "throw", "catch", "multiple catch"], 0, "certain"]
    ]
  ],
  [
    "Aug 2018",
    [
      ["What is output of following section of code:\n`#include <iostream>\nusing namespace std;\n\nint fun(int x, int y = 0, int z = 5) {\n  return (x + y + z);\n}\n\nint main() {\n  cout << fun(5);\n  return 0;\n}`", ["0", "5", "10", "Compiler Error"], 2, "certain"],
      ["Which of the objects call same constructor from the following object declaration?\n`point p1 = 3, p2(5), p3(p1), p4;`", ["p4 and p2", "p4 and p1", "p3 and p2", "p1 and p2"], 3, "likely"],
      ["Operator overloading using friend function takes ___ than using member function.", ["One lesser argument", "One more argument", "Same number of argument", "Two more arguments with reference"], 1, "certain"],
      ["A member function can always access the data ___.", ["in the object of which it is a member", "in the class of which it is a member", "in any object of the class of which it is a member", "in the public part of its class"], 2, "certain"],
      ["How can a static data member \"show\" of a class B be accessed from main function where A is an object of class B?", ["B::show()", "B::show", "A::show()", "A::show"], 0, "certain"],
      ["Function overloading is an example of", ["Inheritance", "dynamic polymorphism", "static polymorphism", "Function overriding"], 2, "certain"],
      ["If class A is inheriting class B in a way, Class A: B", ["Protected members of B becomes private members of A", "All members of B becomes protected members of A", "Public members of B becomes protected members of A", "Private members of A becomes public members of B"], 0, "certain"],
      ["Which of the following operator cannot be overloaded?", ["bitwise operator", "relational operator", "conditional operator", "preprocessor operator"], 2, "certain"],
      ["Destructor are those function which", ["Get called when object are destroyed", "Get automatically called when object contents are updated", "Get automatically called when object are out of scope", "Get called when memory space for object is deallocated"], 0, "certain"],
      ["Copy constructor may not work properly when object is passed by value and its data member contents", ["Array", "Numerical values", "Structure", "Pointer reference"], 3, "certain"],
      ["The way of defining a function member function outside the declaration of class template is", ["template<A> A class_Name<A>::function_name()", "template<A> <A> class_Name A::function_name()", "template<A> A class_Name<A>:function_name()", "template<A> A class_Name::function_name()"], 0, "certain"],
      ["The catch statement to catch a string thrown from the try block is", ["catch(char s[])", "catch(string s)", "catch(char const *s)", "catch(...)"], 2, "certain"],
      ["The default access modifier of data members of structure in C++ is", ["Public", "Private", "Protected", "Restricted"], 0, "certain"],
      ["What is the composition in OOP?", ["Object inside object", "Class inside class", "Object as member of a class", "Class as member of object"], 2, "certain"],
      ["The function call is fixed before the program gets executed is called as", ["Dynamic linkage", "Late binding", "Static linkage", "Run time binding"], 2, "certain"],
      ["Virtual function is used in OOP to", ["Achieve function overloading", "Static linkage", "Achieve compile time polymorphism", "Run time polymorphism"], 3, "certain"],
      ["C++ emphasis on ___ rather than ___.", ["function, data", "data, function", "function, loop", "function, array"], 1, "certain"],
      ["In C++, Inheritance exhibits ___.", ["Has-A Relationship", "Is-A Relationship", "Association Relationship", "Composition relationship"], 1, "certain"],
      ["Exceptions in OOP are", ["Syntax errors", "Runtime anomalies", "Logical errors", "Compile time errors"], 1, "certain"],
      ["___ is a member function that is declared within a base class and redefined by derived class.", ["Friend function", "Const member function", "Virtual function", "Static function"], 2, "certain"]
    ]
  ],
  [
    "Aug 2019",
    [
      ["The C++ header file ___ contains function prototypes for the standard input and standard output functions.", ["<cmath>", "<fstream>", "<cstdio>", "<iostream>"], 3, "certain"],
      ["The act of representing essential features without including the background explanations is called ___.", ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"], 0, "certain"],
      ["Object oriented programming gives priority to ___.", ["Data", "Function", "Both a and b", "None of the mentioned"], 0, "certain"],
      ["If class A is friend of class B and class B is friend of class C then, which of the followings is true?", ["Class C is friend of class A", "Class A is friend of class C", "Class A and Class C do not have friend relationship", "None of the above"], 2, "certain"],
      ["The output of following code segment is:\n`int a = 10;\nint b = 10;\ncout << (a > b ? a : b);`", ["Syntax Error", "5", "10", "None of the mentioned"], 2, "certain"],
      ["Default access specifier for data members of a class is", ["Protected", "Public", "Internal", "Private"], 3, "certain"],
      ["A function declaration inside a class gives importance to ___ of arguments.", ["type", "type and identifier", "type and name", "variable"], 0, "certain"],
      ["How do we define a destructor for a class A?", ["A~(){}", "~A(){}", "A(){}~", "A()~{}"], 1, "certain"],
      ["The use of an object of one class in definition of another class is called", ["Encapsulation", "Inheritance", "Abstraction", "Composition"], 3, "certain"],
      ["Consider the following three classes:\n`class A {};\nclass B {};\nclass C : public B, public A {};`\nWhich is the order of invocation of constructors when an object of class C is instantiated?", ["first B(), then A(), and then C()", "only C() is invoked", "first C(), then B(), and then A()", "first A(), then B(), and then C()"], 0, "likely"],
      ["If class A is inheriting class B as, Class A: B then", ["Public members of B becomes protected members of A", "Private members of A becomes public members of B", "Protected members of B becomes private members of A", "Public members of B becomes public members of A"], 3, "certain"],
      ["Rethrowing an exception should", ["Have argument as mandatory in throw keyword", "Have multiple catch section", "Have keyword used \"rethrow\"", "Have nested block of try and catch"], 3, "certain"],
      ["Virtual function is used to", ["deal ambiguous scenario in sub-ordinate class", "deal non-ambiguous scenario in super class", "achieve run time polymorphism", "create abstract class"], 2, "certain"],
      ["Which of the followings is true?", ["Parameterized constructor should take arguments by pass by reference", "We can send argument by pass by value to copy constructor", "We must send argument by pass by reference to copy constructor", "We can send argument to copy constructor by both pass by value and pass by reference"], 2, "certain"],
      ["How can we initialize private base class variables from a derived class constructor?", ["We can assign values to the variables directly in the derived class constructor", "We can call the base class constructor inside the {} of the derived class constructor", "We can call the base class constructor after the function header of the derived class constructor, with a : in-between the two", "It is not possible to initialize private base class variables from a derived class constructor"], 2, "certain"],
      ["Template in C++", ["is way of achieving procedural programming", "is way of achieving generic programming", "is way of achieving object oriented programming", "is way of achieving run time polymorphism"], 1, "certain"],
      ["Which of the followings operators cannot be overloaded?", ["?:", "==", "!", "+"], 0, "certain"],
      ["Which of the followings cannot be considered as polymorphism in OOP?", ["Function Overloading", "Operator Overloading", "Constructor Overloading", "Function Overriding"], 2, "likely"],
      ["Static linkage of base class pointer with base class members can be avoided by using", ["Virtual base class", "Abstract class", "Virtual function", "derive class pointer"], 2, "certain"],
      ["For overloading A++, the operator overloading is defined as ___.", ["Return-type operator ++()", "Return-type operator ++(int)", "Friend Return-type operator ++()", "Friend Return-type operator ++(int)"], 1, "certain"]
    ]
  ],
  [
    "Dec 2018",
    [
      ["In C++, setw manipulator is declared in ___ header file.", ["<iostream>", "<fstream>", "<cstdio>", "<iomanip>"], 3, "certain"],
      ["___ feature of object oriented programming hides the internal details of how any object does its work.", ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"], 1, "certain"],
      ["Which of the following is an example of Object Oriented Programming?", ["Smalltalk", "COBOL", "Pascal", "FORTRAN"], 0, "certain"],
      ["Linking of a function call to the code to be executed in response to the function invocation is called", ["Static Binding", "Message Passing", "Dynamic Binding", "Polymorphism"], 2, "likely"],
      ["What is the output of the following program:\n`int main() {\n  if (0) {\n    cout << \"Hi\";\n  } else {\n    cout << \"Bye\";\n  }\n  return 0;\n}`", ["Bye", "Hi", "HiBye", "Compilation Error"], 0, "certain"],
      ["Which of the following is a correct single line comment?", ["/* Comments */", "/* Comment/*", "// Comment", "{Comment}"], 2, "certain"],
      ["Which of the following operator cannot be overloaded", ["+", "<", "%", ".*"], 3, "certain"],
      ["What is the output of the following program:\n`#include <iostream.h>\n\nvoid Execute(int &x, int y = 200) {\n  int TEMP = x + y;\n  x += TEMP;\n  if (y != 200)\n    cout << TEMP << x << y << \"--\";\n}\n\nint main() {\n  int A = 50, B = 20;\n  cout << A << B << \"--\";\n  Execute(A, B);\n  cout << A << B << \"--\";\n  return 0;\n}`", ["5020--5020--", "5020--70120200--5020", "5020--701202012020--", "5020--7050200--5020--"], 0, "likely", { allWrong: true, trueAnswer: "5020--7012020--12020--", disputedNote: "This is the exact code given in the MCQ but it's not executable as it misses namespace and has a .h for iostream, the correct answer after making fixes isnt even listed here" }],
      ["In the following:\n`class X {\n  int fun1();\n};\nclass Y {\n  friend int X::fun1();\n};`", ["Function fun1() is member of class Y and friend of class X.", "Function fun1() is member of class X and friend of class Y.", "Function fun1() is member of class X and friend of class X.", "Function fun1() is member of class Y and friend of class Y."], 1, "certain"],
      ["An expression A.B in C++ means", ["A is member of object B", "B is member of Object A", "Product of A and B", "None"], 1, "certain"],
      ["Which of the following concept of OOP allows compiler to insert arguments in a function call if it is not specified?", ["Call by value", "Call by reference", "Default argument", "Call by pointer"], 2, "certain"],
      ["Which of the following statement is correct?", ["Base class constructor gets invoked in the order they are declared and then of derived class.", "Constructors for virtual base classes are invoked before any non-virtual base classes.", "Both a and b", "None"], 2, "certain"],
      ["Which of the following is FALSE about references in C++", ["References cannot be NULL", "A reference must be initialized when declared", "Once a reference is created, it cannot be later made to reference another object; it cannot be reset.", "References cannot refer to constant value"], 3, "certain"],
      ["What is the output of following C++ program:\n`int i;\n\nclass A {\n public:\n  ~A() { i = 10; }\n};\n\nint foo() {\n  i = 3;\n  A ob;\n  return i;\n}\n\nint main() {\n  cout << foo() << endl;\n  return 0;\n}`", ["3", "0", "10", "13"], 0, "certain"],
      ["When a base class is publicly inherited by the derived class, then", ["Private members of base class become private member of derived class.", "Public members of base class become public member of derived class.", "Protected members of base class become protected member of derived class.", "Public, protected members of base class become public, protected members of derived class"], 3, "certain"],
      ["What will happen in this code?\n`int a = 100, b = 200;\nint *p = &a, *q = &b;\np = q;`", ["b is assigned to a", "p now points to b", "a is assigned to b", "q now points to a"], 1, "certain"],
      ["How can we make a class abstract?", ["By making all member functions constant.", "By declaring it abstract using the virtual keyword.", "By declaring it abstract using the static keyword.", "By making at least one member function as pure virtual function."], 3, "certain"],
      ["Template in C++,", ["Is way of achieving procedural programming", "Is way of achieving generic programming", "Is way of achieving object oriented programming", "Uses the type of the data that is operated upon need not be specified as a parameter"], 1, "certain"],
      ["Which keyword is used to handle an exception?", ["try", "throw", "catch", "None"], 0, "likely"],
      ["An Exception is a...", ["Runtime Error", "Compile-time Error", "Logical Error", "None"], 0, "certain"]
    ]
  ],
  [
    "May/Jun 2022",
    [
      ["Which of the following function definition is not included inside a class?", ["Static function", "Friend function", "Const function", "Virtual function"], 1, "certain"],
      ["In C++ Program, inline functions are expanded during", ["run time", "compile time", "debug time", "coding time"], 1, "certain"],
      ["A normal C++ operator that acts in special ways on newly defined data types is said to be", ["Glorified", "Classified", "Encapsulated", "Overloaded"], 3, "certain"],
      ["What are mandatory parts in function declaration?", ["return type, function name", "return type, function name, parameters", "both a and b", "none of the mentioned"], 0, "certain"],
      ["How many ways of passing a parameter are there in C++?", ["1", "2", "3", "4"], 2, "certain"],
      ["What will happen while using pass by reference?", ["The values of those variables are passed to the function so that it can manipulate them", "The location of the variable in memory is passed to the function so that it can use the same memory area for its processing", "Changes in parameters will not be intact", "Manipulation in different memory locations of parameters"], 1, "certain"],
      ["Which one is the main purpose of the destructor?", ["Kill the class", "Destruct the object", "Deallocate and clean up resources occupied by an object", "Deallocate and clean up resources occupied by a class"], 2, "certain"],
      ["If new keyword is used in default constructor, its paired delete keyword will be appropriate to use in", ["parameterized constructor", "copy Constructor", "member function of the class", "destructor of the class"], 3, "certain"],
      ["Object oriented programming gives priority to ___ of data.", ["characteristics", "operations", "Both a and b", "behaviour"], 2, "likely"],
      ["How can a static member function \"show()\" of a class A be accessed from main function where B is an object of class A?", ["B::show()", "B:show", "A::show", "A::show()"], 3, "certain"],
      ["Consider the following three classes:\n`class A {};\nclass B {};\nclass C : virtual A, virtual public B {};`\nWhat is the order of invocation of constructors when an object of class C is instantiated?", ["B(), A(), C()", "only C() is invoked", "C(), B(), A()", "A(), B(), C()"], 3, "likely"],
      ["For overloading A++, the operator overloading is defined as", ["Return-type operator ++()", "Return-type operator ++(int)", "Friend Return-type operator ++()", "Friend Return-type operator ++(int)"], 1, "certain"],
      ["Which of the following operator cannot be overloaded?", ["Bitwise operator", "Relational Operator", "Conditional Operator", "Arithmetic operators"], 2, "certain"],
      ["If class A is inheriting class B in a way, Class A: B then", ["Public members of B become protected members of A", "Private members of A becomes public members of B", "Protected members of B becomes private members of A", "Public members of B become public members of A"], 3, "certain"],
      ["Virtual function is used to", ["deal ambiguous scenario in sub-ordinate class", "deal non-ambiguous scenario in super class", "achieve run time polymorphism", "create abstract class"], 2, "certain"],
      ["Rethrowing an exception should have", ["argument as mandatory in throw keyword", "multiple catch section", "keyword used \"rethrow\"", "nested block of try and catch"], 3, "certain"],
      ["Diamond Problem in C++ can be solved using", ["virtual function", "virtual base class", "inheritance", "polymorphism"], 1, "certain"],
      ["What is a form of software reuse in which the programmer creates a class from the existing one?", ["Abstraction", "Inheritance", "Encapsulation", "Polymorphism"], 1, "certain"],
      ["An abstract class is useful when", ["no classes should be derived from it", "no objects should be instantiated from it", "you want to defer the declaration of the class", "there are multiple paths from one derived class to another"], 1, "certain"],
      ["Template is used to achieve ___ in OOP.", ["generic Programming", "functional Programming", "modular Programming", "hierarchical programming"], 0, "certain"]
    ]
  ],
  [
    "Apr/May 2023",
    [
      ["Which of the following statements is TRUE?", ["A friend function of a class can be inherited.", "There is no limit on the numbers of classes that might be present in a C++ program.", "There can be C++ programs without any function.", "A function should not always return some value."], 1, "certain"],
      ["Which of the following are good reasons to use an object-oriented language?", ["We can define our own data types and operations.", "Program statements are simpler than in procedural languages.", "An Object Oriented program can be taught to correct its own errors.", "It is easier to conceptualize an Object Oriented program."], 3, "likely"],
      ["A member function can always access the data of", ["its object", "its class", "any object of its class", "any the public part of its class"], 2, "certain"],
      ["Private data members of any class are accessible", ["to any function in the program", "only if you know the password", "to member functions of that class", "only to public members of the class"], 2, "certain"],
      ["When an array name is passed to a function, the function", ["accesses exactly the same array as the calling program", "accesses a copy of the array passed by the program", "refers to the array using the same name from that used by the calling program", "refers to the array using the different name from that used by the calling program"], 0, "certain"],
      ["Friend function of a class are those function, which can", ["be used in overloading", "access protected and public data members of a class", "access data members with every access specifier", "access only private data member of a class"], 2, "certain"],
      ["Which of the following prototypes is post increment operator overloading for a class Point using friend function?", ["Point Point++(int,Point)", "int Point++(int)", "Point operator++(Point,int)", "Point operator++(Point)"], 2, "certain"],
      ["Which of the following is used for generic programming?", ["Virtual class", "Virtual function", "Modularity", "Template"], 3, "certain"],
      ["If class A is inheriting class B in a way, class A: protected B", ["Public members of B becomes protected members of A", "Public members of A becomes protected members of B", "Protected members of A becomes private members of B", "Public members of B becomes public members of A"], 0, "certain"],
      ["Rethrowing an exception should have", ["argument in throw keyword", "multiple catch section", "keyword used \"rethrow\"", "nested block of try and catch"], 3, "certain"],
      ["Virtual function is used to", ["deal ambiguous scenario in subordinate class", "deal non-ambiguous scenario in super class", "achieve runtime polymorphism", "create abstract class"], 2, "certain"],
      ["Private data members of the base class in inheritance are", ["inherited but they can only be accessed by public or protected methods of the base class", "inherited and they can be freely accessed in the derived class", "not inherited", "inherited but there is no way to access them in the derived class"], 0, "certain"],
      ["Static function \"count()\" of a class A can be accessed by ___ from the main() function where B is an object of class A.", ["B::count()", "B::count", "A::count()", "A::count"], 2, "certain"],
      ["An inline function executes ___ than a normal function but requires ___ memory.", ["Slower, low", "slower, high", "Faster, low", "faster, high"], 3, "certain"],
      ["In the given code section:\n`class X {};\nclass Y {\n  X a;\n};`", ["Class X is friend of Class Y", "Class X is composed of Class X", "Class Y is friend of class Y", "Class Y composed of class X"], 3, "certain"],
      ["In C++, Inheritance allows us", ["Code Reusability", "Creating Hierarchy of class", "Extendibility", "All of the mentioned"], 3, "certain"],
      ["A class can have virtual", ["Constructor", "destructor", "data members", "identifier"], 1, "certain"],
      ["If class A is friend of class B and if class B is friend of class C, which of the following is true?", ["Class C is friend of class A", "Class A is friend of class C", "Class A is never a friend of Class C until explicitly declared", "Class B is a friend of class A and class C"], 2, "certain"],
      ["Observe the following program:\n`class Example {\n public:\n  int a, b, c;\n  Example() { a = a; b = b; c = c; }\n  Example(int x, int y, int z) { a = x; b = y; c = z; }\n  Example(Example &E) {}\n};`\nIf we write `Example E(1, 2, 3); Example E1 = E;` in main() function, which constructor(s) will be called?", ["Constructor 1 and Constructor 2", "Constructor 2 and Constructor 3", "Constructor 2", "Generate error"], 1, "certain"],
      ["Which of the following is an abstract class?", ["Class having virtual function", "Derived class having definition of pure virtual base class function", "Derived class having no definition of pure virtual base class function", "Class having pure virtual class"], 2, "likely"]
    ]
  ],
  [
    "Jun/Jul 2024",
    [
      ["Which of the following is not a valid function name in C++?", ["int sum();", "int sum(int a, int b);", "char sum();", "int sum(int,int);"], 2, "likely"],
      ["What will be the output of the following C++ code?\n`int a = 10, b, c;\nb = a++;\nc = a;\ncout << a << \" \" << b << \" \" << c << endl;`", ["10 11 11", "11 11 11", "11 10 11", "10 10 10"], 2, "certain"],
      ["Which of the following is the logical and operator?", ["||", "&", "'", "&&"], 3, "certain"],
      ["Which of the following OOP features indicates the code reusability?", ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"], 3, "certain"],
      ["For which of the following, \"PI++;\" code will fail?", ["#define PI 3.14", "char PI = \"A\";", "float PI= 3.14;", "float PI= 3.1428"], 0, "likely"],
      ["What will be the output of the following C code?\n`char ch[] = \"Interviewbit Scaler\";\nint l = strlen(ch);\ncout << l << endl;`", ["18", "19", "20", "21"], 1, "certain"],
      ["We must use initializer list in a constructor when", ["There is a reference variable in class", "There is a constant variable in class", "There is an object of another class. And the other class doesn't have default constructor.", "All of the above"], 3, "certain"],
      ["When the inheritance is private, which of the following statement is true?", ["the private methods in base class are protected in the derived class.", "the private methods in base class are accessible in the derived class.", "the private methods in base class are public in the derived class.", "the private methods in base class are inaccessible in the derived class."], 3, "certain"],
      ["Which of the following is the correct syntax for template function?", ["template return_type Function_Name(Parameters)", "template return_type (Parameters)", "template return_type Function_Name", "template return_type Function_Name(void)"], 0, "likely"],
      ["What is the difference between delete and delete[] in C++?", ["delete is syntactically correct but delete[] is wrong and hence will give an error if used in any case", "delete is used to delete normal objects whereas delete[] is used to pointer objects", "delete is a keyword whereas delete[] is an identifier", "delete is used to delete single object whereas delete[] is used to multiple(array/pointer of) objects"], 3, "certain"],
      ["Which is the CORRECT statement about operator overloading?", ["Only arithmetic operators can be overloaded", "Only non-arithmetic operators can be overloaded", "Precedence of operators are changed after overloading", "Associativity and precedence of operators does not change"], 3, "certain"],
      ["Which of the following can be considered as the correct syntax for declaring an array of pointers of integers that has a size of 5 in C++?", ["int arr=new int[5];", "int *arr=new int*[5];", "int **arr=new int*[5];", "int *arr=new int[5];"], 2, "likely", { disputedNote: "In the question paper, option c is a typo, it was \"int **arr=`net` int *[5]\"" }],
      ["Which feature of OOP is indicated by the following code?\n`class student {\n  int marks;\n};\n\nclass topper : public student {\n  int age;\n  topper(int age) { this->age = age; }\n};`", ["Encapsulation and inheritance", "polymorphism", "Inheritance and polymorphism", "inheritance"], 0, "certain"],
      ["How many types of access specifier are provided in C++?", ["4", "3", "2", "1"], 1, "certain"],
      ["Which is the most significant feature used in the multilevel inheritance?", ["code efficiency", "code reusability", "code readability", "flexibility"], 1, "certain"],
      ["What is encapsulation in OOP?", ["It is a way of combining various member functions into a single unit.", "It is a way of combining various data members into a single unit.", "It is a way of combining various data members and member functions into a single unit which can operate on any data.", "It is a way of combining various data members and member functions that operate on those data members into a single unit."], 3, "certain"],
      ["What is the correct syntax of accessing a static member of a class Base in C++?", ["Base->value", "Base'value", "Base.value", "Base::value"], 3, "certain"],
      ["Which of the following is not TRUE about polymorphism?", ["Increases overhead of function definition always", "It is feature of OOP", "Ease in readability of program", "Helps in redefining the same functionality"], 0, "certain"],
      ["Which among the following can show polymorphism?", ["overloading &&", "overloading <<", "overloading ||", "overloading +="], 1, "certain"],
      ["What is the inheritance type in which a class can inherit properties from more than one class?", ["single", "multilevel", "multiple", "hierarchical"], 2, "certain"]
    ]
  ],
  [
    "Sep 2024",
    [
      ["If class A is friend of class B and if class B is friend of class C, which of the following is TRUE?", ["Class C is friend of class A", "Class A is friend of class C", "Class A and Class C do not have friend relationship", "Class A, Class B and Class C are friends of one another"], 2, "certain"],
      ["In C++, a function contained within a class is called?", ["Procedure", "An operator", "Template", "A member function"], 3, "certain"],
      ["In C++, the constructors that take arguments are called", ["Inline Constructors", "Recursive Constructors", "Default Constructors", "Parameterized Constructor"], 3, "certain"],
      ["In C++, members of a class are ___ by default.", ["Public", "Private", "Protected", "Static"], 1, "certain"],
      ["Object oriented programming gives priority to ___.", ["Data and characteristics", "Function and Operations", "Data and Function", "Objects"], 2, "likely"],
      ["One of the following is TRUE for an inline function.", ["It executes faster as it is treated as a macro internally", "It executes faster because its priority is more than normal function", "Inline function is appropriate for complex equations", "It reduces program size"], 0, "certain"],
      ["OOP allow a programmer to hide unwanted details as well as code through", ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"], 2, "likely"],
      ["Operator overloading is also called ___ Polymorphism.", ["Compile time", "Run-time", "Completion time", "Dynamic"], 0, "certain"],
      ["Overloaded functions are", ["Very long functions that can hardly run", "One function containing another one or more functions inside it", "Two or more functions with the same name but different number and types of parameters or type", "Two or more functions with the same name but different types of parameters or type"], 2, "certain"],
      ["What are the advantages of passing arguments by reference?", ["Changes to parameter values within the function also affect the original arguments.", "There is need to copy parameter values (i.e. less memory used)", "There is no need to call constructors for parameters (i.e. faster)", "All of the mentioned"], 3, "certain"],
      ["Which is used to define the member of a class externally?", [":", "::", "#", "->"], 1, "certain"],
      ["Which of the following operators cannot be overloaded?", ["::", "+", "-", "[]"], 0, "certain"],
      ["Which of the following prototypes is the pre-increment operator overloading for a class Point?", ["Point Point++(int)", "int Point++()", "Point operator++()", "Point operator++(int)"], 2, "certain"],
      ["In diamond problems there is an occurrence of", ["Multiple Inheritance.", "Multilevel inheritance.", "Multiple and Multilevel inheritance.", "Hierarchical Inheritance."], 0, "certain"],
      ["Exceptions are thrown", ["From the catch block to the try block.", "From a throw statement to the try block.", "From the point of the error to a catch block.", "From a throw statement to a catch block."], 3, "certain"],
      ["Pick out the CORRECT statement.", ["Constructors and destructors have void return type.", "A derived class's constructor cannot explicitly invoke its base class's Constructor.", "A derived class's destructor cannot invoke its base class's destructor.", "A derived class's destructor can invoke its base class's destructor."], 3, "certain"],
      ["Select the RIGHT option.\nStatement A: \"A definition is also a declaration.\"\nStatement B: \"An identifier can be declared just once.\"", ["Statement A is true, Statement B is false.", "Statement B is true, Statement A is false.", "Both are false.", "Both are true."], 0, "likely"],
      ["When there is inheritance of where, class D: B, class E: D then the order of destructor call will be", ["E(), D() and B()", "D(), E() and B()", "B(), E() and D()", "B(), D() and E()"], 0, "certain"],
      ["When there is inheritance of where, class D: B, class E: virtual D then the order of constructor call will be", ["E(), D() and B()", "E(), B() and B()", "D(), E() and B()", "B(), D() and E()"], 3, "likely"],
      ["What is a function template?", ["Creating a function without having to specify the exact type", "Creating a function with having an exact type", "Basics of class template", "Combination of function declaration and definition"], 0, "certain"]
    ]
  ],
  [
    "Jan 2025",
    [
      ["What type of programming language is C++?", ["C++ is an object oriented programming language", "C++ is a procedural programming language", "C++ supports both procedural and object oriented programming language", "C++ is a functional programming language"], 2, "certain"],
      ["Identify the correct extension of the user-defined header file in C++", [".cpp", ".hg", ".h", ".hf"], 2, "certain"],
      ["In Object Oriented Programming, what does encapsulation refer to?", ["Storing data in arrays", "The process of inheritance", "hiding necessary information", "Combining data and methods"], 3, "likely"],
      ["What is the output of the following code:\n`class Test {\n  int x;\n};\n\nint main() {\n  Test t;\n  cout << t.x;\n  return 0;\n}`", ["Compiler Error", "0", "Garbage Value", "undefined"], 0, "certain"],
      ["Which of the following is true?", ["All objects of a class share all data members of class", "objects of a class do not share non-static members. Every object has its own copy.", "objects of a class do not share codes of non-static methods, they have their own copy", "Objects are independent"], 1, "certain"],
      ["What is the order of constructor and destructors calls in C++:", ["Constructors: Derived to Base, Destructors: Base to Derived", "Constructors and Destructors follow the same order", "Constructors: Base to Derived, Destructors: Derived to Base", "Constructors: Derived to Base, Destructors: Derived to Base"], 2, "certain"],
      ["Which of the following statements is true about constructors?", ["Has no return type", "Cannot contain a function call", "Has a return type", "Has a void return type"], 0, "certain"],
      ["Which of the following operator(s) cannot be overloaded?", [". (Member Access or Dot operator)", "?: (Ternary or Conditional Operator)", ":: (Scope Resolution Operator)", "All of the above"], 3, "certain"],
      ["What is the do-while loop also known as?", ["Exit control", "Entry control", "Pre tested", "All of the above"], 0, "certain"],
      ["Which is the correct statement about operator overloading?", ["Only arithmetic operators can be overloaded", "Only non-arithmetic operators can be overloaded", "Precedence of operators are changed after overloading", "Associativity and precedence of operators does not change"], 3, "certain"],
      ["Which among the following best defines single level inheritance?", ["A class inheriting a derived class", "A class inheriting a base class", "A class inheriting a nested class", "A class which gets inherited by 2 classes"], 1, "certain"],
      ["Which is the correct syntax of declaring a virtual function?", ["virtual int func();", "virtual int func(){};", "inline virtual func();", "inline virtual func(){};"], 0, "certain"],
      ["Base class", ["can be made abstract", "can't be made abstract", "must be abstract", "if made abstract, compile time error occurs"], 0, "certain"],
      ["___ binding means that an object is bound to its function call at compile time.", ["late", "static", "dynamic", "fixed"], 1, "certain"],
      ["If we attempt to dereference an uninitialized pointer, it will ___ by referring to any other location in memory.", ["cause a compile time error", "run time error", "cause run time error", "executes"], 2, "certain"],
      ["___ is a member function that is declared within a base class and redefined by derived class.", ["virtual function", "static function", "friend function", "const member function"], 0, "certain"],
      ["Which of the following is used for generic programming?", ["Virtual functions", "Modules", "Templates", "Abstract Classes"], 2, "certain"],
      ["Which of the following is CORRECT about templates?", ["It is a type of runtime polymorphism", "It allows the programmer to write one code for all data types", "Helps in object oriented programming", "makes the program run faster"], 1, "certain"],
      ["If the inner catch handler is not able to handle the exception then", ["Compiler will look for outer try handler", "Program terminates abnormally", "Program will check for appropriate catch handler of outer try block", "None of these"], 2, "certain"],
      ["Generic catch handler is represented by", ["catch(..,)", "catch(---)", "catch(...)", "catch(void x)"], 2, "certain"]
    ]
  ]
];

function slug(session, index) {
  return (
    session
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") +
    "-q" +
    (index + 1)
  );
}

function yearsOf(session) {
  const m = session.match(/\d{4}/);
  return m ? [Number(m[0])] : [];
}

export const MCQ_QUESTIONS = RAW.flatMap(([session, qs]) =>
  qs.map((q, i) => ({
    id: slug(session, i),
    session,
    years: yearsOf(session),
    body: q[0],
    options: q[1],
    answerIndex: q[2],
    confidence: q[3],
    ...(q[4] ?? {}),
  }))
);

// Newest-first session order.
export const MCQ_SESSIONS = [
  "Jan 2025",
  "Sep 2024",
  "Jun/Jul 2024",
  "Apr/May 2023",
  "May/Jun 2022",
  "Aug 2019",
  "Dec 2018",
  "Aug 2018",
  "Mar/Apr 2017",
];

export function countBySession() {
  const counts = {};
  for (const q of MCQ_QUESTIONS) counts[q.session] = (counts[q.session] ?? 0) + 1;
  return counts;
}
