**By nature JavaScript is synchronous, blocking and single threaded language.**

- Synchronous: code executes line by line

- Blocking: code waits for the first function to be executed, unless the first function is being executed the second function does not run.

- Single threaded: Each thread can do only one task and hence here it is single threaded

**To solve this Asynchronous JavaScript comes in. Here with some external web API's such as setTimeout, promises we can let our code run other operations at the same time without blocking the main thread.**

- Synchronous Behaviour: Here the JavaScript code is being executed line by line

- Asynchronous Behaviour: Here the JavaScript code is being executed at once (can be done using callbacks or promises)!

## Callbacks

- These are functions which are being passed to another function's arguments.

- Can be used to achieve Asynchronous behaviour.

Disadvantages of callbacks:

- With lot of callbacks inside callbacks, callback hell can be created and this makes compilcated to manage

- Inversion of control : Giving the control of an important sequence of a function which might fail to execute the callback function (This is a security issue since the user does not have control while calling the callbacks).

## Promises

Promise is a JavaScript object which has two main parts:

1. Promise state
2. Data

- The promise state has 3 states in it:

  - pending
  - fullfilled (resolved)
  - rejected

- The data part is the eventual data which will be filled once the promise has been resolved!

- In short promise is a JavaScript object which can be eventually filled after an asynchronous operation is done

- It takes a callback function with two parameters: resolve and reject

- JavaScript rejects or resolves a promise only once!

- Promise objects are immutable

- A Promise can be consumed using the then/catch or async/await.

- then keyword takes in two callback functions, the first one indicates the success callback and the second one indicates the failure callback

- Whatever is being passed inside the resolve can be used inside the then or can be used by assigning a value to the await keyword value

- Promise.reject and Promise.resolve is used to directly
  resolve or reject a promise!

### Promise Chaining

- The idea is that the new result or a new promise itself is passed through the chain of .then handlers.

- Returning promises allows us to build chains of asynchronous actions.

### Promise Combinators

- Promise Combinators are utility methods to deal with multiple promises that need to be executed in parallel.

- **Promise.all()** : This takes in an array of promises and executes all of them, and if one of them as an error then it stops the execution and none of the results are not resolved and the error is catched

- **Promise.allSettled()** : This takes in an array of promises and executes all of them, and even if one of them as an error it does not stop the execution and results are resolved and the error is also catched

- **Promise.race()** : This takes in an array of promises and resolves only the first one, and it either resolves the first one if it has no error or rejects the first one if it has an error, it does not go to the second promise at all.

- **Promise.any()** : This takes in an array of promises but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with AggregateError

### Difference b/w async/await and .then(handler)

- In sync/await first the promises are being resolved then the further code is being run, basically whatever is being written after the promise consuming will be held and executed only when the above code is finished running!

- In .then all the other code will be executed first and then only the promise consuming code will be executed
