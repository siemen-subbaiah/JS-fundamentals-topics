**Function along with it's lexical scope bundled together forms a closure**

**When a function is returned in any of the function it returns both the function itself and it's lexical scope**

```
// function outer() {
//   const name = 'KR$NA';
//   return function inner() {
//     console.log(name);
//   };
// }

// const nameIs = outer();
// nameIs();
```

- 👆🏼 so here even if the nameIs() is invoked in any other scope, it remembers the outer lexical environment

**Lexical Scope** : These are when variables which are globally defined, outside of the function can be used in any function and can't be the other way around!

Uses of closures:

- Variables can be shared among the sibling functions in the same scope
- With closures it is possible to have private variables to a function
- Can be used in function currying
- Can be used in functions like memoization() and once()

### Closure scope chain:

Every closure has three scopes:

- The local scope of the inner function
- The outer scope of the outer function
- The global scope

- If you reference a function to a variable and in turn invoke or call that variable then the referenced function is a closure, cause it is returning another function which can remember its lexical scope!

### Difference between closure and scope

Closures : If a function returns another function, it can access the lexical scope of it's outer function!

Scope : It tells the context of how the variables can be accessed!

### Disadvantages of closures

- Over consumption of memory each time a closure is called
- If more copy of closures are created, it accumulates memory and the varibales won't be garbage collected
