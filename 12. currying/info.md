**Currying is a function that takes only one argument at a time and returns a new function expecting the next argument**

```
function f(a) {
  return function (b) {
    return `${a} and ${b}`;
  };
}
console.log(f(5)(6));
```

- Currying can be used to:

  - Avoid passing the same variable.
  - To make the function pure and less prone to errors.

- Difference b/w a partial application and currying:

  - **Partial application**: A function returning another function that might return another function, but each returned function can take several parameters

  - **Currying**: A function returning another function that might return another function, but every returned function must take only one parameter at a time
