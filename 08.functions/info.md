**Functions are heart of Javascript ❤**

## Function Statement aka Function Declaration

```
function sayMyName() {
  console.log('My name is KR$NA');
}
```

- Using normal function keyword to declare a function

## Function Expression

```
const sayMyName = function () {
  console.log('My name is KR$NA');
};
```

- Referencing a function to a variable

- Difference b/w Function Statement and Function Expression is in hoisting, The Function expression is treated like a variable and is given undefined initially in the memory creation phase

## Arrow function

- An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

- Difference b/w arrow function and normal function

  - The function keyword is not needed in arrow function
  - The implicit return(arrow functions can even return without the return keyword)
  - The normal function can access the arguments keyword inside the function, but the arrow function cannot do this
  - 'this' keyword cannot be used in the object when arrow function is used

## Named Function

```
const sayMyName = function tellName() {
  console.log('My name is KR$NA');
};
```

- A Function having a name in the function expression

- The gotcha here is the name of the function cannot be used to invoke cause it wont be present in the global scope, instead this function name will be present in the local scope of the function

- **Anonymous Function**: A Function without no name. But can only be used when assigning values or when returning or when passing as parameters & arguments and not when declaring a function

## Callback function

```
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);

```

- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- There are two types of callbacks:

- **Synchronous callback**: A callback which is executed immediately (Ex : map, sort, filter).
- **Asynchronous callback**: A callback that is often used to continue or resume code execution after an asynchronous operation has completed.

## IFFE(Immediately Invoked Function Expressions)

```
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
// 1
```

- A function which is invoked without calling

## First Class Function

- The behaviour of a function where the function can be passed as an argument, assigned to a variable, and returned

```
function wassup(fn) {
  return fn;
}

function nothingMuch() {
  console.log('Nothing much dude');
}

wassup(nothingMuch());
```

## Pure Function

- A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed

```
function add(num1,num2){
  return num1+num2
}
add(2,3)
```

## Higher order Function

- A function which takes another function as an argument or returns a function is known as a higher order function.

```
const numbers = [1,2,3,4,5]

function filterNumbers(callbackFn,numbArr){
  const temp = [];
  for(let i = 0;i<numbArr.length;i++){
    callbackFn(numbArr[i]) && temp.push(numbArr[i])
  }
  return temp;
}

function isEven(x){
  return x % 2 === 0
}

filterNumbers(isEven,numbers)

```

**Functions are first class citizens in JavaScript because of the behaviour of first class functions**

### Difference between parameters and arguments

- **Parameters**: Values passed in the function declaration or function statement

- **Arguments**: Values passed in the function call or function invocation
