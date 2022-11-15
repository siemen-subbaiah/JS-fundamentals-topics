**“Everything in Javascript happens inside an execution context”**

- The execution context is created by the browser

---

- <u>There are two types of Execution context</u> :

- ## Global Execution Context

- The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.

- For every JavaScript file, there can only be one GEC.

- ## Function Execution Context

- Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.

- Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

---

- <u>There are two parts in execution context</u> :

- ## Memory Component (Variable environment)

- Functions and variables are stored in the form of key value pairs.

- The functions are exactly copied as it is and stored and the variables declared with the var keyword are being assigned to undefined

- Since functions and var declared variables are first stored in the memory component, because of this behaviour hoisting is possible.

- ## Code Component (Thread of execution):

- The place where code is executed one line at a time, line by line.

- If function call is found, it creates a new FEC

- A stack named call stack manages this execution context by performs push and pop operations for the GEC and FEC

---
