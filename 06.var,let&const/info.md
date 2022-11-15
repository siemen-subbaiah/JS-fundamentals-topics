**In terms of Hoisting:**

- var declared variables are hoisted to the top of their scope and initialized with a value of undefined.

- let and const are hoisted but its memory is allocated at other place than window (Global Scope) which cannot be accessed before initialization

- Temporal Dead Zone exists until a variable is declared and assigned to a value.

- window.variable OR this.variable will not give any value of a variable defined using let or const (this is simply because once these variables are defined/initialized it does not go the global scope)

**In terms of Scope:**

- The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

- var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

- let and const are block scoped (meaning when the program runs let and const declared variables are being stored in a different memory space which is outside of the global scope)

- Shadowing is a concept of using the same variable names in both inner scope and outer scope .

- Illegal Shadowing is trying to shadow a let variable with a var variable

**Other info**

- var variables can be re-declared and updated

- let can be updated but not re-declared.

- const can't be updated and can't be re-declared

- const variable declaration and initialization must be done on the same line.

- If let and const varibles are declared globally then it goes to something called as **Script** instead of **Global**

- But if these let and const declared variables are declared in a block, then it goes to something called as **Block** instead of **Script**
