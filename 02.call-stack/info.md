**In JavaScript call stack is a mechanism where whenever a function invocation has been made, it is automatically added to the call Stack. Once the function has executed all of its code, it is automatically removed from the call Stack.**

- When the program is first loaded, a global execution context is being pushed in the stack

- Whenever a function is invoked, it's execution context (Function execution context) is being pushed

- The call stack works based on the LIFO principle i.e., last-in-first-out.

- It performs push and pop operation

- The call stack is synchronous in nature

- Call stack is single threaded.

- It can be used to keep track of multiple function calls

- In short summary, the JavaScript engine uses the call stack to manage the execution contexts

---

![call-stack-img](https://media.geeksforgeeks.org/wp-content/uploads/20201213102457/global.png)
