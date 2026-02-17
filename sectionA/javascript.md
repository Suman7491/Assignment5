# A.3 JavaScript Introduction & V8 Engine

## Key Points to Revise

- **JavaScript**: A **single-threaded**, **interpreted programming language** used for web development to create dynamic and interactive content.  
- **V8 Engine Architecture**:
  - **Parser** – Reads JavaScript code and converts it into an **Abstract Syntax Tree (AST)**.
  - **AST (Abstract Syntax Tree)** – A tree representation of the code’s structure, making it easier for the engine to process.
  - **Ignition** – The **interpreter** in V8 that executes bytecode generated from the AST.
  - **TurboFan** – The **optimizing compiler** in V8 that analyzes code patterns and generates faster machine code for performance.
- **Just-In-Time (JIT) Compilation** – A process where JavaScript is **compiled at runtime** rather than before execution, combining the benefits of interpretation and compilation for faster execution.
- **Memory Management**:
  - **Memory Heap** – A large, unstructured region in memory used for **dynamic allocation** of objects and variables.
  - **Call Stack** – A **stack data structure** that keeps track of currently executing functions in the program.
- **Event Loop & Asynchronous Execution** – Mechanism that allows JavaScript to perform **non-blocking operations** like I/O, timers, and network requests while maintaining a single-threaded model.  

## Quick Revision Questions

1. **Explain the V8 engine architecture and how it executes JavaScript code**  
   - V8 parses JavaScript into an **AST**, interprets it using **Ignition**, and optimizes hot code using **TurboFan**. This allows JavaScript code to execute efficiently in browsers and Node.js.

2. **What is the role of Ignition and TurboFan in V8?**  
   - **Ignition**: Interprets bytecode from AST for immediate execution.  
   - **TurboFan**: Compiles frequently used code paths into optimized machine code for better performance.

3. **How does JIT compilation improve performance?**  
   - **Just-In-Time (JIT) compilation** analyzes code while the program runs and compiles hot paths into **optimized machine code**, making repeated executions faster than interpreting code every time.

4. **What is the difference between Call Stack and Memory Heap?**  
   - **Call Stack**: Manages **function execution order** and keeps track of which function is currently running.  
   - **Memory Heap**: Manages **dynamic memory allocation** for objects, variables, and data structures used by the program.

# A.2 Variables (var, let, const)

## Key Points to Revise

- **var**  
  - **Function-scoped**: Accessible within the function where it is declared.  
  - **Hoisted**: The declaration is moved to the top of its scope during compilation, but its value is `undefined` until assigned.  

- **let**  
  - **Block-scoped**: Accessible only within the block `{}` where it is declared.  
  - **Hoisted but in Temporal Dead Zone (TDZ)**: Cannot be accessed before declaration, even though memory is allocated.  

- **const**  
  - **Block-scoped**: Accessible only within the block where declared.  
  - **Cannot be reassigned**: Must be initialized at the time of declaration.  
  - **Properties of objects declared with const can be changed**, but the variable reference itself cannot be reassigned.  

- **Scope chain and lexical scoping**  
  - **Scope chain**: Determines the accessibility of variables in nested functions.  
  - **Lexical scoping**: Functions access variables based on where they were **defined** in the code, not where they are called.  

## Quick Revision Questions

1. **Compare var, let, and const with examples**  
   ```javascript
   // var example
   function varExample() {
       console.log(x); // undefined (hoisted)
       var x = 10;
   }

   // let example
   function letExample() {
       // console.log(y); // ReferenceError: Cannot access 'y' before initialization
       let y = 20;
       console.log(y); // 20
   }

   // const example
   const z = 30;
   // z = 40; // TypeError: Assignment to constant variable
## Temporal Dead Zone (TDZ)

- **Definition:**  
  The period between entering a variable’s scope and its declaration, during which **accessing the variable throws a ReferenceError**.

- **Example with `let`:**  
  ```javascript
  {
      // console.log(a); // ReferenceError: Cannot access 'a' before initialization
      let a = 10;
      console.log(a); // 10
  }
## Reassigning `const` Object Properties

### Example:

```javascript
const obj = { name: "Alice" };

obj.name = "Bob";            // ✅ Allowed (modifying property)
// obj = { name: "Charlie" }; // ❌ Not allowed (cannot reassign reference)


# A.3 Hoisting

## Key Points to Revise

- **Hoisting**  
  JavaScript moves **declarations** (not initializations) to the top of their scope during the compilation phase.

- **var Hoisting**  
  - Hoisted and initialized with `undefined`.
  - Can be accessed before declaration, but value will be `undefined`.

- **let and const Hoisting**  
  - Hoisted but **not initialized**.
  - Stored in the **Temporal Dead Zone (TDZ)** until the declaration line is executed.
  - Accessing them before declaration throws a `ReferenceError`.

- **Function Declarations**  
  - Fully hoisted (both name and body).
  - Can be called before they are defined in the code.

- **Function Expressions**  
  - Not fully hoisted.
  - If assigned to `var`, only the variable is hoisted (with `undefined`), not the function definition.
  - Cannot be invoked before assignment.

---

## Quick Revision Questions

### 1. Explain hoisting with `var`, `let`, and `const`

```javascript
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;

console.log(c); // ReferenceError
const c = 30;

## Hoisting Summary

- `var` is hoisted with value `undefined`.

- `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until declaration.

---

## 2. What is the difference between function declaration and function expression hoisting?

### Example:

```javascript
// Function Declaration
greet(); //  Works
function greet() {
    console.log("Hello");
}

// Function Expression
sayHi(); //  TypeError (if var) or ReferenceError (if let/const)
var sayHi = function () {
    console.log("Hi");
};

## Explanation

### Function Declaration

- Fully hoisted with its body.
- You can call it before its definition in the code.

### Function Expression

- Only the variable is hoisted (if declared with `var`), not the function itself.
- Calling it before assignment results in an error.

---

## 3. Predict the Output of Hoisting Scenarios

### Example:

```javascript
var x = 5;

function test() {
    console.log(x);
    var x = 10;
}

test();


# A.5 Functions

## Key Points to Revise

### • Function Declaration vs Function Expression vs Arrow Functions

- **Function Declaration**
  - Defined using the `function` keyword with a name.
  - Fully hoisted.
  ```javascript
  function greet() {
      return "Hello";
  }

### • Function Expression

- Function assigned to a variable.
- Not fully hoisted.

```javascript
const greet = function() {
    return "Hello";
};
### • Default Parameters

- Provide default values to parameters if no argument is passed.
- Prevents `undefined` errors when arguments are missing.

```javascript
function greet(name = "Guest") {
    return "Hello " + name;
}


### • Default Parameters

- Provide default values to parameters if no argument is passed.
- Prevents `undefined` errors when arguments are missing.

```javascript
function greet(name = "Guest") {
    return "Hello " + name;
}

### • Rest Parameters

- Collect multiple arguments into a single array using `...`.
- Allows a function to accept unlimited number of arguments.

```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}


# JavaScript Concepts

## 1. Return Statement

The `return` statement is used inside a function to:

- Send a value back to the function caller
- Stop the execution of the function

### Syntax:
```javascript
function functionName() {
    return value;
}

## Important Points:

- A function stops executing after `return`.
- If no value is returned, the function returns `undefined`.
- You can return numbers, strings, objects, arrays, or even another function.

---

## 2. Function Scope vs Block Scope

### 🔹 Function Scope

- Variables declared with `var` are function-scoped.
- They are accessible anywhere inside the function.

### Example:
```javascript
function test() {
    var x = 10;
    console.log(x); // 10
}

test();
console.log(x); // Error: x is not defined


## IIFE (Immediately Invoked Function Expression)

An IIFE is a function that runs immediately after it is defined.

### Syntax:
```javascript
(function () {
    // code
})();

### Example:
```javascript
(function () {
    console.log("This runs immediately!");
})();

## First-Class Functions in JavaScript

In JavaScript, functions are treated as **first-class citizens**.  
This means functions can be used just like any other value.

### What Does It Mean?

- Functions can be assigned to variables  
- Functions can be passed as arguments to other functions  
- Functions can be returned from other functions  

---

### 1️⃣ Assign Function to a Variable
```javascript
const greet = function () {
    console.log("Hello!");
};

greet(); // Hello!

### Pass Function as an Argument (Callback)

```javascript
function sayHello() {
    console.log("Hello!");
}

function execute(fn) {
    fn();
}

execute(sayHello);

### Return a Function from Another Function

```javascript
function outer() {
    return function () {
        console.log("Inner function");
    };
}

const innerFunc = outer();
innerFunc();


# JavaScript Quick Revision

## 1. Difference Between Function Declaration, Expression, and Arrow Function


JavaScript Functions Quick Revision
1. Difference between function declaration, expression, and arrow function- Function Declaration: A function declared using the function keyword followed by the function name.

function add(a, b) {
  return a + b;
}

- Function Expression: A function assigned to a variable or property.

const add = function(a, b) {
  return a + b;
};

- Arrow Function: A concise function syntax using the => operator.

const add = (a, b) => a + b;


2. What are default parameters and rest parameters?- Default Parameters: Allow you to set a default value for a parameter if it's not provided.

function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, World!

- Rest Parameters: Allow you to represent an indefinite number of arguments as an array.

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // Output: 6


3. Explain IIFE and its use cases- IIFE (Immediately Invoked Function Expression): A function that is executed immediately after it's defined.

(function() {
  console.log('Hello, World!');
})();

- Use Cases:
    - Creating a new scope to avoid polluting the global namespace.
    - Initializing variables and functions that are only used once.
    - Creating a closure to preserve variables.

4. How do arrow functions differ from regular functions?- No this binding: Arrow functions don't have their own this context.
- No arguments object: Arrow functions don't have an arguments object.
- No new keyword: Arrow functions can't be used as constructors.
- Implicit return: Arrow functions can return values implicitly.

5. What does it mean that functions are first-class citizens in JavaScript?- Functions can be assigned to variables: Functions can be assigned to variables, just like any other value.
- Functions can be passed as arguments: Functions can be passed as arguments to other functions.
- Functions can return values: Functions can return values, including other functions.
- Functions can be stored in data structures: Functions can be stored in arrays, objects, and other data structures.


// Example: Assigning a function to a variable
const greet = function(name) {
  console.log(`Hello, ${name}!`);
};

// Example: Passing a function as an argument
function executeFunction(func) {
  func('World');
}
executeFunction(greet); // Output: Hello, World!


Higher-Order Functions Quick Revision
Definition- A higher-order function is a function that takes another function as an argument or returns a function as its result.
- Functions are first-class citizens in JavaScript, enabling higher-order functions.

Common Higher-Order Functions- map(): Applies a function to each element in an array.
- filter(): Creates a new array with elements that pass a test provided by a function.
- reduce(): Applies a function to each element in an array, reducing it to a single value.
- forEach(): Executes a function on each element in an array.

Quick Revision Questions1. What is a higher-order function? Give 3 examples- A higher-order function is a function that takes another function as an argument or returns a function as its result.
- Examples:
    - map()
    - filter()
    - reduce()

2. How is map() a higher-order function?- map() is a higher-order function because it takes a function as an argument and applies it to each element in an array.

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]


3. Create a custom higher-order function that takes a function as argument
function repeat(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

function sayHello() {
  console.log('Hello!');
}

repeat(sayHello, 3);
// Output:
// Hello!
// Hello!
// Hello!


4. Why are higher-order functions important in JavaScript?- Higher-order functions enable function composition and abstraction, making code more modular and reusable.
- They facilitate array manipulation, event handling, and async operations.
- Higher-order functions promote a declarative programming style, making code more concise and expressive.

Benefits of Higher-Order Functions- Abstraction: Higher-order functions abstract away low-level details, making code more readable and maintainable.
- Reusability: Higher-order functions promote code reusability, reducing duplication and improving modularity.
- Flexibility: Higher-order functions enable flexible and dynamic code composition.


Callback Functions Quick Revision
Definition- A callback function is a function passed as an argument to another function, allowing the receiving function to execute the callback at a later time.

Synchronous Callbacks- Definition: Synchronous callbacks are executed immediately, one after the other, in the order they are called.
- Examples: map(), filter(), sort()

const numbers = [1, 2, 3];
numbers.map((num) => console.log(num));
// Output:
// 1
// 2
// 3


Asynchronous Callbacks- Definition: Asynchronous callbacks are executed at a later time, often in response to an event or completion of an operation.
- Examples: setTimeout(), event listeners, API calls

setTimeout(() => console.log('Hello!'), 2000);
// Output (after 2 seconds):
// Hello!


Quick Revision Questions1. What is a callback function and why is it used?- A callback function is a function passed as an argument to another function, allowing the receiving function to execute the callback at a later time.
- It's used for code reusability, async handling, and event handling.

2. Difference between synchronous and asynchronous callbacks- Synchronous callbacks are executed immediately, while asynchronous callbacks are executed at a later time.
- Synchronous callbacks block the execution flow, while asynchronous callbacks do not.

3. How do you pass arguments to a callback function?- You can pass arguments to a callback function by including them as additional arguments when calling the receiving function.

function greet(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

greet('John', sayHello);
// Output:
// Hello, John!


4. Give 3 real-world examples of callbacks in JavaScript- Event listeners: addEventListener('click', callback)
- API calls: fetch(url, callback)
- Timeouts: setTimeout(callback, delay)

Benefits of Callbacks- Code reusability: Callbacks promote code reusability by allowing functions to be passed as arguments.
- Async handling: Callbacks enable async handling, making it easier to manage asynchronous operations.
- Flexibility: Callbacks provide flexibility in handling different scenarios and edge cases.

Best Practices- Use named callbacks for readability and maintainability.
- Avoid nested callbacks (callback hell) by using promises or async/await.
- Use callbacks judiciously, considering the complexity and readability of your code.



Objects Quick Revision
Object Creation Methods- Literal Notation: Creating an object using curly brackets {}.

const person = { name: 'John', age: 30 };

- Constructor Function: Creating an object using a constructor function.

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person('John', 30);

- Object.create(): Creating an object using the Object.create() method.

const person = Object.create(null);
person.name = 'John';
person.age = 30;


Accessing Properties- Dot Notation: Accessing properties using dot notation (e.g., person.name).
- Bracket Notation: Accessing properties using bracket notation (e.g., person['name']).

Adding, Modifying, and Deleting Properties- Adding: Adding a new property to an object (e.g., person.country = 'USA';).
- Modifying: Modifying an existing property (e.g., person.name = 'Jane';).
- Deleting: Deleting a property (e.g., delete person.age;).

Object Methods- Definition: Functions that are properties of an object.

const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};
person.greet(); // Output: Hello, my name is John!


this Keyword- Definition: Refers to the current object being executed.

const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};
person.greet(); // Output: Hello, my name is John!


Object Destructuring- Definition: Extracting properties from an object into variables.

const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // Output: John
console.log(age); // Output: 30


Object.keys(), Object.values(), Object.entries()- Object.keys(): Returns an array of an object's keys.
- Object.values(): Returns an array of an object's values.
- Object.entries(): Returns an array of an object's key-value pairs.

const person = { name: 'John', age: 30 };
console.log(Object.keys(person)); // Output: ['name', 'age']
console.log(Object.values(person)); // Output: ['John', 30]
console.log(Object.entries(person)); // Output: [['name', 'John'], ['age', 30]]


Shallow Copy vs Deep Copy- Shallow Copy: Creating a new object that references the same properties as the original object.
- Deep Copy: Creating a new object with its own copies of the original object's properties.

const person = { name: 'John', age: 30 };
// Shallow copy
const shallowCopy = { ...person };
// Deep copy
const deepCopy = JSON.parse(JSON.stringify(person));


# Objects – Quick Revision

---

## 1️ Different Ways to Create Objects in JavaScript

###  Literal Notation
Creating an object using curly brackets `{}`.

## 4️ What is the Difference Between Shallow and Deep Copy?

- **Shallow Copy:** Creating a new object that references the same properties as the original object (for nested objects, references are shared).
- **Deep Copy:** Creating a new object with its own completely independent copies of the original object's properties.

```js
const person = { name: 'John', age: 30 };


// Shallow copy
const shallowCopy = { ...person };

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(person));

## 3️ Explain `this` Keyword in Object Methods

- The `this` keyword refers to the current object being executed.
- In object methods, `this` refers to the object that the method is called on.

```js
const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};

person.greet(); 
// Output: Hello, my name is John!

## 2️⃣ How Does the `delete` Operator Work with Objects?

- The `delete` operator removes a property from an object.
- It returns `true` if the property is deleted successfully, and `false` otherwise.
- If the property does not exist, `delete` returns `true` without throwing an error.

```js
const person = { name: 'John', age: 30 };

delete person.age;

console.log(person); 
// Output: { name: 'John' }
### Constructor Function Example

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person('John', 30);

### Object.create() Example

```js
const person = Object.create(null);

person.name = 'John';
person.age = 30;

### Class Syntax (ES6+) Example

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person('John', 30);


# Array Methods – Quick Revision

## 1️⃣ Array Creation and Initialization

- **Array Literal:** Creating an array using square brackets `[]`.

```js
const numbers = [1, 2, 3, 4, 5];
const numbers = new Array(1, 2, 3, 4, 5);
const numbers = Array.from('12345'); 
// Output: ['1', '2', '3', '4', '5']

## 2️ Array Methods

- **`map()`** – Transforms each element and returns a new array.  
  - Takes a callback function as an argument.

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); 
// Output: [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); 
// Output: [2, 4]

- **`reduce()`** – Reduces an array to a single value.  
  - Takes a callback function and an initial value as arguments.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); 
// Output: 15

const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);

console.log(result); 
// Output: [4, 8, 10]


## 3️⃣ `forEach()` vs `map()`

- **`forEach()`** – Executes a callback function on each element, **returns `undefined`**.  
- **`map()`** – Transforms each element and **returns a new array**.

```js
const numbers = [1, 2, 3, 4, 5];

// Using forEach
numbers.forEach((num) => console.log(num)); 
// Output: 1, 2, 3, 4, 5

// Using map
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); 
// Output: [2, 4, 6, 8, 10]


# Array Methods – map(), filter(), and reduce()

## 1️⃣ `map()`

- Transforms each element of an array and **returns a new array**.
- Takes a callback function as an argument.

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); 
// Output: [2, 4, 6, 8, 10]

## `filter()`

- Filters elements based on a condition and **returns a new array**.  
- Takes a callback function as an argument.

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); 
// Output: [2, 4]


## `reduce()`

- Reduces an array to a **single value**.  
- Takes a callback function and an initial value as arguments.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); 
// Output: 15


# A.10 Destructuring – Key Points to Revise

---

## 1️ Array Destructuring

- Extract values from arrays into separate variables.

```js
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a, b, c); 
// Output: 1 2 3


## Object Destructuring

- Extract properties from objects into variables.

```js
const person = { name: 'John', age: 30 };

const { name, age } = person;

console.log(name, age); 
// Output: John 30


## Default Values in Destructuring

- Assign default values if the property/element is `undefined`.

```js
// Array destructuring with default
const numbers = [1];
const [a, b = 10] = numbers;

console.log(a, b); 
// Output: 1 10

// Object destructuring with default

## Rest Operator in Destructuring

- Collect remaining elements or properties using the `...` operator.

```js
// Array destructuring
const numbers = [1, 2, 3, 4];
const [a, ...rest] = numbers;
console.log(a, rest); 
// Output: 1 [2, 3, 4]

// Object destructuring
const person = { name: 'John', age: 30, city: 'NY' };
const { name, ...others } = person;
console.log(name, others); 
// Output: John { age: 30, city: 'NY' }


## Nested Destructuring

- Extract values from nested arrays or objects.

```js
// Object with nested object
const person = { 
  name: 'John', 
  address: { city: 'NY', zip: 10001 } 
};

const { name, address: { city, zip } } = person;

console.log(name, city, zip); 
// Output: John NY 10001

// Array with nested array
const numbers = [1, [2, 3]];
const [a, [b, c]] = numbers;

console.log(a, b, c); 
// Output: 1 2 3


## Renaming Variables During Destructuring

- Assign extracted properties to new variable names.

```js
const person = { name: 'John', age: 30 };

const { name: firstName, age: years } = person;

console.log(firstName, years); 
// Output: John 30


# Destructuring – Quick Revision

## 1️⃣ Difference Between Array and Object Destructuring

- **Array Destructuring:** Extracts values from an array and assigns them to variables.

```js
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); 
// Output: 1
console.log(b); 
// Output: 2
console.log(c); 
// Output: 3

const person = { name: 'John', age: 30 };
const { name, age } = person;

console.log(name); 
// Output: John
console.log(age); 
// Output: 30



## 2️⃣ How to Assign Default Values in Destructuring

- Assign default values using the `=` operator.

```js
// Array destructuring with default value
const numbers = [1, 2];
const [a, b, c = 3] = numbers;

console.log(a); 
// Output: 1
console.log(b); 
// Output: 2
console.log(c); 
// Output: 3

// Object destructuring with default value
const person = { name: 'John' };
const { name, age = 30 } = person;

console.log(name); 
// Output: John
console.log(age); 
// Output: 30


## 3️⃣ How to Rename Variables During Object Destructuring

- Rename variables using the `:` operator.

```js
const person = { name: 'John', age: 30 };
const { name: fullName, age: personAge } = person;

console.log(fullName); 
// Output: John
console.log(personAge); 
// Output: 30


## 4️⃣ Explain Nested Destructuring

- **Nested Destructuring:** Extracts properties from nested objects or arrays.

```js
// Nested object destructuring
const person = { 
  name: 'John', 
  address: { street: '123 Main St', city: 'New York' } 
};
const { name, address: { street, city } } = person;

console.log(name); 
// Output: John
console.log(street); 
// Output: 123 Main St
console.log(city); 
// Output: New York

// Nested array destructuring
const numbers = [1, [2, 3], 4];
const [a, [b, c], d] = numbers;

console.log(a); 
// Output: 1
console.log(b); 
// Output: 2
console.log(c); 
// Output: 3
console.log(d); 
// Output: 4





# A.11 Data Types & Data Comparison – Key Points to Revise

---

## 1️ Primitive Types

- Immutable, stored by **value**.
- **Types:**  
  - `String` – Text  
    ```js
    const name = "John";
    ```
  - `Number` – Numeric values  
    ```js
    const age = 30;
    ```
  - `Boolean` – `true` or `false`  
    ```js
    const isActive = true;
    ```
  - `Null` – Explicitly no value  
    ```js
    const data = null;
    ```
  - `Undefined` – Variable declared but not assigned  
    ```js
    let x;
    console.log(x); // undefined
    ```
  - `Symbol` – Unique identifier  
    ```js
    const id = Symbol("id");
    ```
  - `BigInt` – Large integers beyond Number limit  
    ```js
    const big = 123456789012345678901234567890n;
    ```

---

## 2️ Reference Types

- Mutable, stored by **reference**.
- **Types:**  
  - `Object`  
    ```js
    const person = { name: "John", age: 30 };
    ```
  - `Array`  
    ```js
    const numbers = [1, 2, 3];
    ```
  - `Function`  
    ```js
    function greet() { console.log("Hello"); }
    ```

---

## 3️ `typeof` Operator

- Returns the type of a variable.

```js
console.log(typeof 42);          // "number"
console.log(typeof "Hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof {});          // "object"
console.log(typeof undefined);   // "undefined"
console.log(typeof Symbol());    // "symbol"
console.log(typeof 10n);         // "bigint"
console.log(typeof function(){}); // "function"

# A.11 Data Types & Data Comparison – Quick Revision

---

## 1️⃣ Primitive Types

- **Definition:** Immutable data types stored by **value**. Cannot hold multiple values or methods.
- **Types:**
  - **String** – Sequence of characters
    ```js
    const name = "John";
    ```
  - **Number** – Numeric values (integer or float)
    ```js
    const age = 30;
    ```
  - **Boolean** – Logical value: `true` or `false`
    ```js
    const isActive = true;
    ```
  - **Null** – Represents intentional absence of any value
    ```js
    const data = null;
    ```
  - **Undefined** – Variable declared but not assigned
    ```js
    let x;
    console.log(x); // undefined
    ```
  - **Symbol** – Unique identifier, often used as object keys
    ```js
    const id = Symbol("id");
    ```
  - **BigInt** – For integers larger than `Number.MAX_SAFE_INTEGER`
    ```js
    const big = 123456789012345678901234567890n;
    ```

---

## 2️⃣ Reference Types

- **Definition:** Mutable data types stored by **reference**, allowing multiple variables to point to the same object.
- **Types:**
  - **Object**
    ```js
    const person = { name: "John", age: 30 };
    ```
  - **Array**
    ```js
    const numbers = [1, 2, 3];
    ```
  - **Function**
    ```js
    function greet() { console.log("Hello"); }
    ```

---

## 3️⃣ `typeof` Operator

- **Definition:** Returns the data type of a variable.
```js
console.log(typeof 42);          // "number"
console.log(typeof "Hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof {});          // "object"
console.log(typeof undefined);   // "undefined"
console.log(typeof Symbol());    // "symbol"
console.log(typeof 10n);         // "bigint"
console.log(typeof function(){}); // "function"


## 4️⃣ Type Coercion

**Definition:** Automatic or manual conversion of values from one type to another.

- **Implicit Coercion:** JavaScript converts types automatically.

```js
console.log("5" - 2);  // 3
console.log("5" + 2);  // "52"


## == vs ===

- `==` → Equality **with type coercion** (converts types before comparing)  
- `===` → Strict equality, **no type coercion** (values and types must match)

```js
console.log(5 == "5");  // true
console.log(5 === "5"); // false


## Truthy and Falsy Values

**Definition:** Determines how values behave in boolean contexts.

- **Falsy values:** `false`, `0`, `""`, `null`, `undefined`, `NaN`  
- **Truthy values:** All other values

```js
if ("hello") console.log("Truthy"); // Output: Truthy
if (0) console.log("Falsy");       // Not executed


# Data Types and Operators – Quick Revision

---

## 1️⃣ List All Primitive and Reference Data Types

- **Primitive Data Types:** Immutable and stored by value
  - Number  
  - String  
  - Boolean  
  - Null  
  - Undefined  
  - Symbol (ES6+)  
  - BigInt (ES11+)  

- **Reference Data Types:** Mutable and stored by reference
  - Object  
  - Array  
  - Function  
  - Date  
  - RegExp  
  - Map  
  - Set  

---

## 2️⃣ Difference Between `==` and `===`

- **`==` (Loose Equality):** Compares values **after type coercion**

```js
console.log(1 == '1');    // Output: true
console.log(true == 1);   // Output: true

console.log(1 === '1');   // Output: false
console.log(true === 1);  // Output: false


## 3️⃣ What Are Truthy and Falsy Values?

- **Falsy Values:**  
  - `false`  
  - `0`  
  - `''` (empty string)  
  - `null`  
  - `undefined`  
  - `NaN`

- **Truthy Values:** All values that are not falsy

```js
if ('hello') { console.log('Truthy'); } // Output: Truthy
if (0) { console.log('Falsy'); }        // No output


## Explain Type Coercion with Examples

**Type Coercion:** Converting a value from one data type to another.

---

### 1️⃣ Implicit Coercion

- JavaScript automatically converts types when performing operations.

```js
console.log('5' + 5);   // Output: '55' (string concatenation)
console.log('5' - 5);   // Output: 0 (number subtraction)
console.log(true + 1);  // Output: 2 (true -> 1)
console.log(false + 1); // Output: 1 (false -> 0)
console.log(null == undefined); // Output: true (null -> undefined)
console.log([] == '');           // Output: true ([] -> '')


## Explicit Coercion

- **Definition:** Manually converting values from one data type to another using JavaScript functions.

```js
console.log(Number('5'));   // Output: 5
console.log(String(5));     // Output: '5'
console.log(Boolean(1));    // Output: true














