//**Task 2.1: Predict and explain the output of the following code:
//console.log(a); //this will be undefined bcz its printing a before its intialization so variable declaire with var will be hoisted and not defined
var a = 10;
//console.log(a); //here it will print 10 bcz its not this point intialized
//console.log(b); //this will throw a reference error b is also hoisted and memory phases but js prevents its access in the temporal dead zone
let b = 20;
//console.log(b); //here it will print 20 if we handle above error

//**Task 2.2-Create a function that demonstrates the difference between var, let, and const in loops.
function loopDif(n) {
  for (var i = 0; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
// var case:
// var is function-scoped, so there is only ONE shared variable.
// Each loop iteration updates the same i.
// All callbacks reference that same i,
// so when they execute, they print the final value.

// let case:
// let is block-scoped and creates a NEW binding per iteration.
// Each callback captures its own separate i,
// so they print the correct values.

// const case:
// const cannot be reassigned.
// A loop counter must change (i++),
// so using const throws:
// TypeError: Assignment to constant variable.

//**  Task 2.3: Write code that demonstrates Temporal Dead Zone with let and const.
// console.log(num1);
// console.log(num2);

let num1 = 90;
const num2 = 98;

//**Task 3.1: Create a function calculator that takes two numbers and an operation (add,
// subtract, multiply, divide) and returns the result. Use default parameters.
function calculator(a = 98, b = 32, operation) {
  return operation(a, b);
}
function add(a, b) {
  console.log(a + b);
}
function sub(a, b) {
  console.log(a - b);
}
function mul(a, b) {
  console.log(a * b);
}
function devide(a, b) {
  console.log(a / b);
}
// calculator(undefined, undefined, add);

//**Task 3.2: Write an arrow function that takes unlimited numbers as arguments using rest
// parameters and returns their sum.
function unlimited(...arg) {
  let res = 0;
  for (let i = 0; i < arg.length; i++) {
    res += arg[i];
  }
  console.log(res);
}
// unlimited(5, 4, 9, 6);

//**Task 3.3: Create an IIFE that declares private variables and returns an object with methods
// to access them.
let privateData = (function () {
  let balance = 34;
  return {
    showBalance() {
      console.log(balance);
    },
  };
})();
// privateData.showBalance();

// Task 3.4: Write a function that demonstrates the difference between function declaration
// and function expression hoisting.
// demoDeclaration();
// demoReference(); //here it will hoisted to the top but like a variABLE so it will be undefined in this case and undefined() is not a function
function demoDeclaration() {
  console.log(3 + 6);
}
var demoReference = function () {
  console.log(7 - 4);
};
//**Task 4.1: Create a higher-order function repeat(n, action) that takes a number and a
// callback function, and executes the callback n times[web:48].
function repeat(n, action) {
  for (let i = 1; i <= n; i++) {
    action();
  }
}
function action() {
  console.log("action running");
}
// repeat(5, action);

//**Task 4.2: Create a higher-order function filterArray(arr, condition) where
// condition is a callback function that returns true/false.
let newarr = [];
let arr = [45, 23, 4, 32, 6, 43, 1, 8, 3, 65];
function filterArray(ar, condition) {
  for (let i = 0; i < ar.length; i++) {
    if (condition(ar[i])) {
      newarr.push(ar[i]);
    }
  }
  console.log(newarr);
}
function condition(arr) {
  return arr > 10;
}
// filterArray(arr, condition);

//**Task 4.3: Create a function multiplyBy(factor) that returns another function which
// multiplies its argument by the factor (function returning function).
function multiplyBy(factor) {
  return (...a) => {
    let newarr = [];
    for (const element of a) {
      newarr.push(element * factor);
    }
    console.log(newarr);
  };
}
// multiplyBy(2)(6, 5, 3);

//**Task 4.4: Create a higher-order function operate(a, b, operation) where operation is
// a callback that performs different math operations.
function operate(a, b, operation) {
  return operation(a, b);
}
function sum(a, b) {
  console.log(a + b);
}
// console.log(operate(8, 4, sum));

//**Task 4.5: Implement a custom forEach function that takes an array and a callback function.
let arr1 = [45, 23, 4, 32, 6, 43, 1, 8, 3, 65];

function foreachh(arr, callback) {
  return callback(arr);
}
function iterate(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// foreachh(arr1, iterate);

//**Task 5.1: Create a function processArray(arr, callback) that processes each element
// using the callback function.
//** */ Task 5.2: Create a function calculator(a, b, operationCallback) where operations
// (add, subtract, multiply, divide) are passed as callbacks.
// same task

//**Task 5.3: Simulate asynchronous behavior: Create fetchData(callback) that uses
// setTimeout to mimic API call and executes callback with data after 2 seconds.
function fetchData(callback) {
  return callback();
}
function setTime() {
  setTimeout(() => {
    console.log("data");
  }, 2000);
}
// fetchData(setTime);

//**Task 5.4: Create downloadFile(filename, onSuccess, onError) that randomly
// succeeds or fails and calls appropriate callback.
let filename = "anything.pdf";
function downloadFile(filename, onSuccess, onError) {
  console.log("downloading file");

  setTimeout(() => {
    isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      return onSuccess(`Download successful: ${filename}`);
    } else {
      return onError(`Error in downloading: ${filename}`);
    }
  }, 100);
}
// downloadFile(
//   filename,
//   (message) => console.log(message),
//   (err) => console.log(err),
// );

//**Task 5.5: Implement a custom sort function that accepts an array and a comparison
// callback function.

function sort(arr, callback) {
  return callback(arr);
}
function compare(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

// sort(arr, compare);

//**Task 6.1: Create an object student with properties: name, age, course, and a method
// getDetails() that returns student information.

let student = {
  name: "ajay",
  age: "21",
  course: "cse",
  getDetails() {
    console.log(
      `Student name ${this.name}, age ${this.age}, course ${this.course}`,
    );
  },
};

// student.getDetails();

//** */ Task 6.2: Write a function that performs deep cloning of an object (handle nested objects).
let obj = {
  name: "suman",
  age: 26,
  address: {
    vill: "contai",
    state: "westbengal",
  },
};
function Deepcloning(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => Deepcloning(item));
  }
  const newObj = {};
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      newObj[key] = Deepcloning(obj[key]);
    }
  }
  return newObj;
}
//console.log(Deepcloning(obj));

//**Task 6.3: Create an object with computed property names based on user input.
let keyFromUser = "name";
let valueFromUser = "suman";

const userObject = {
  [keyFromUser]: valueFromUser,
};
// console.log(userObject);

//**Task 6.3: Create an object with computed property names based on user input.
function createObject(key, value) {
  const obj = {
    [key]: value,
  };

  return obj;
}
const result = createObject("name", "suman");
//console.log(result);
const user = {
  name: "Suman",
  age: 26,
  city: "Contai",
};
Object.keys(user).forEach((key) => {
  // console.log(key, ":", user[key]);
}); //name : Suman
// age : 26
// city : Contai

// Task 7.1: Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
//  Use map() to create a new array with each number squared
//  Use filter() to get only even numbers
//  Use reduce() to find the sum of all numbers
//  Chain map(), filter(), and reduce() to get the sum of squares of even numbers
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newnum = num.map((items) => Math.pow(items, 2));
// console.log(newnum);
let evenNum = num.filter((item) => item % 2 === 0);
// console.log(evenNum);
let sumNum = num.reduce((acc, curr) => {
  return acc + curr;
}, 0);
// console.log(sumNum);
let sumSqEven = num
  .map((items) => Math.pow(items, 2))
  .filter((item) => item % 2 === 0)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);
// console.log(sumSqEven);

// Task 7.2: Given an array of objects:
// const users = [
// { name: &quot;John&quot;, age: 25, salary: 50000 },
// { name: &quot;Jane&quot;, age: 30, salary: 60000 },
// { name: &quot;Bob&quot;, age: 35, salary: 55000 },
// { name: &quot;Alice&quot;, age: 28, salary: 65000 }
// ];
//  Use map() to create an array of just names
//  Use filter() to get users with age &gt; 28
//  Use reduce() to calculate total salary
//  Use reduce() to group users by age
const users = [
  { name: "John", age: 25, salary: 50000 },
  { name: "Jane", age: 30, salary: 60000 },
  { name: "Bob", age: 35, salary: 55000 },
  { name: "Alice", age: 28, salary: 65000 },
];
let namesarr = users.map((items) => {
  return items.name;
});
//console.log(namesarr);
let agearr = users.filter((items) => {
  return items.age > 28;
});
// console.log(agearr);
let totalsal = users.reduce((acc, curr) => {
  return acc + curr.salary;
}, 0);
// console.log(totalsal);

//**Task 7.4: Given an array of students with marks, add 20 grace marks to students who scored
// less than 60, then filter students with marks &gt; 60, and finally calculate the total marks using
// method chaining.
const students = [
  { name: "Amit", marks: 45 },
  { name: "Neha", marks: 72 },
  { name: "Raj", marks: 55 },
  { name: "Sara", marks: 30 },
];

const totalMarks = students
  .map((student) => {
    const updatedMarks =
      student.marks < 60 ? student.marks + 20 : student.marks;

    return { ...student, marks: updatedMarks };
  })
  .filter((student) => student.marks > 60)
  .reduce((sum, student) => sum + student.marks, 0);

// console.log(totalMarks);

//** */ Task 8.1: Destructure the following array and object:
const arrr = [10, 20, 30, 40, 50];
const person = {
  firstName: "John",
  lastName: " Doe",
  age: 30,
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
};

let [ten, twenty, thirty, fourty, fifty] = arrr;
// console.log(ten);
let {
  firstName: name,
  lastName,
  age,
  address,
  address: { city, state },
} = person;
// console.log(city);
// console.log(name);
let newarrr = arrr.splice(0, 2);
// console.log(newarrr);two element in this array
// console.log(arrr);other are in old  array

//**Task 8.2: Write a function that accepts an object parameter and uses destructuring in the
// function parameters itself.
function destructure({ firstName, lastName } = person) {
  console.log(firstName);
}
// destructure(person);
// Create examples demonstrating type coercion in JavaScript (at least 5 examples).
// console.log(9 + "3");//93 and now the type will be string
// console.log(9 - "3");//93 here 3 will be converted to number and now the type will be number

//**Write a function that checks the data type of a variable and returns appropriate
// message for all primitive and reference types.

function checkDataType(value) {
  if (value === null) return "The value is null (primitive)";
  if (typeof value === "string") return "The value is a string (primitive)";
  if (typeof value === "number") return "The value is a number (primitive)";
  if (typeof value === "boolean") return "The value is a boolean (primitive)";
  if (typeof value === "undefined") return "The value is undefined (primitive)";
  if (typeof value === "symbol") return "The value is a symbol (primitive)";
  if (typeof value === "bigint") return "The value is a bigint (primitive)";

  if (Array.isArray(value)) return "The value is an array (reference)";
  if (value instanceof Function) return "The value is a function (reference)";
  if (value instanceof Date) return "The value is a Date object (reference)";
  if (value instanceof RegExp)
    return "The value is a RegExp object (reference)";
  if (typeof value === "object") return "The value is an object (reference)";

  return "Unknown type";
}

// console.log(checkDataType("hello"));        // string
// console.log(checkDataType(42));             // number
// console.log(checkDataType(true));           // boolean
// console.log(checkDataType(undefined));      // undefined
// console.log(checkDataType(null));           // null
// console.log(checkDataType(Symbol("id")));   // symbol
// console.log(checkDataType(123n));           // bigint
// console.log(checkDataType([1,2,3]));       // array
// console.log(checkDataType({name: "Suman"}));// object
// console.log(checkDataType(function(){}));   // function
// console.log(checkDataType(new Date()));     // Date object
// console.log(checkDataType(/abc/));          // RegExp object

//**Demonstrate the difference between == and === with 10 different examples.
//both == and === are used to compare values
//where == checks only values
//where === checks not only values it checks types also so type different but value same it will give you false
//example
//console.log(5 == "5"); //it will give true because it is comparing only value
//console.log(5 === "5"); //it will give false because it is comparing type also

//**Task 9.4: Create a function that identifies truthy and falsy values from an array.
function identifyTruthyFalsy(arr) {
  const result = arr.map((value) => {
    return {
      value: value,
      type: value ? "truthy" : "falsy",
    };
  });
  return result;
}
const values = [0, 1, "", "hello", null, undefined, [], {}, false, true, NaN];

//console.log(identifyTruthyFalsy(values));

// Task 10.1: Create a Bank Account object with the following:
//  Properties: accountNumber, accountHolder, balance
//  Methods: deposit(amount), withdraw(amount), getBalance(), getStatement()
//  Use closures to make balance private
//  Implement proper validation
function createBankAccount(accountNumber, accountHolder, initialBalance = 0) {
  function isValidAmount(amount) {
    return typeof amount === "number" && isFinite(amount) && amount > 0;
  }
  let balance = initialBalance;
  const transactions = [];

  if (!accountNumber || !accountHolder) {
    throw new Error("Account number and holder name are required.");
  }

  if (!isValidAmount(initialBalance) && initialBalance !== 0) {
    throw new Error("Invalid initial balance.");
  }

  transactions.push(`Account opened with balance: ${balance}`);

  return {
    accountNumber,
    accountHolder,

    deposit(amount) {
      if (!isValidAmount(amount)) {
        return "Invalid deposit amount.";
      }

      balance += amount;
      transactions.push(`Deposited: ${amount}`);
      return `Deposit successful. New balance: ${balance}`;
    },

    withdraw(amount) {
      if (!isValidAmount(amount)) {
        return "Invalid withdrawal amount.";
      }

      if (amount > balance) {
        return "Insufficient funds.";
      }

      balance -= amount;
      transactions.push(`Withdrawn: ${amount}`);
      return `Withdrawal successful. New balance: ${balance}`;
    },

    getBalance() {
      return `Current balance: ${balance}`;
    },

    getStatement() {
      return [...transactions];
    },
  };
}

const account = createBankAccount("123456", "Suman", 1000);

// console.log(account.deposit(500));
// console.log(account.withdraw(200));
// console.log(account.getBalance());
// console.log(account.getStatement());

//**Task 10.2: Create an array of products with properties: id, name, price, category. Implement
// the following:
//  Function to filter products by category

//  Function to find products within a price range
//  Function to calculate total value of all products
//  Function to get the most expensive product
//  Use appropriate array methods
// Products array
const products = [
  { id: 1, name: "Laptop", price: 75000, category: "Electronics" },
  { id: 2, name: "Phone", price: 30000, category: "Electronics" },
  { id: 3, name: "Shoes", price: 2500, category: "Fashion" },
  { id: 4, name: "Watch", price: 5000, category: "Fashion" },
  { id: 5, name: "Chair", price: 4000, category: "Furniture" },
];

function filterByCategory(productList, category) {
  return productList.filter((p) => p.category === category);
}

function findByPriceRange(productList, min, max) {
  return productList.filter((p) => p.price >= min && p.price <= max);
}

function calculateTotalValue(productList) {
  return productList.reduce((total, p) => total + p.price, 0);
}

function getMostExpensive(productList) {
  return productList.reduce((max, p) => (p.price > max.price ? p : max));
}
// console.log("Electronics:", filterByCategory(products, "Electronics"));
// console.log("Price 3k–40k:", findByPriceRange(products, 3000, 40000));
// console.log("Total value:", calculateTotalValue(products));
// console.log("Most expensive:", getMostExpensive(products));

//**Task 10.3: Create a Student Management System:
//  Array of student objects with: id, name, marks (array of subjects)
//  Calculate average marks for each student using map() and reduce()
//  Filter students with average &gt; 75
//  Find the topper student
//  Generate a report card for each student

const studentt = [
  { id: 1, name: "Amit", marks: [80, 75, 90, 85] },
  { id: 2, name: "Neha", marks: [60, 70, 65, 72] },
  { id: 3, name: "Ravi", marks: [95, 92, 88, 96] },
  { id: 4, name: "Sara", marks: [78, 82, 80, 76] },
];

const studentsWithAverage = studentt.map((student) => {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / student.marks.length;

  return { ...student, average };
});

const highPerformers = studentsWithAverage.filter(
  (student) => student.average > 75,
);

const topper = studentsWithAverage.reduce((top, student) =>
  student.average > top.average ? student : top,
);

function generateReportCards(studentList) {
  return studentList.map((student) => ({
    id: student.id,
    name: student.name,
    marks: student.marks,
    average: student.average.toFixed(2),
    result: student.average >= 40 ? "Pass" : "Fail",
  }));
}

const reportCards = generateReportCards(studentsWithAverage);

// console.log("Students with averages:", studentsWithAverage);
// console.log("High performers:", highPerformers);
// console.log("Topper:", topper);
// console.log("Report cards:", reportCards);

console.log(ff);
