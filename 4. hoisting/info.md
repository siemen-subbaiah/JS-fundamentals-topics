**The process of storing variables and function declaration in memory prior to the execution of the code is known as Hoisting**

- It is a concept in Javascript where functions or variables can be accessed without even initializing it.

- It moves the normal functions and var defined variables to the top of the scope (hoisted), let and const defined variables also are hoisted but it does not go to the global scope, instead it goes to the **Temporal Dead Zone**. (The phase from hoisting till it gets any value to be initialized)

- Arrow functions enact as var defined variables and get "undefined" during the memory creation phase.

- Normal functions makes a copy of it and stores it in the Memory Component, and because of this normal functions can be called before even initializing it.

- function expressions are not hoisted

![img](https://res.cloudinary.com/practicaldev/image/fetch/s--Ceq9cg87--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/kaf11wh85tkhfv1338b4.png)
