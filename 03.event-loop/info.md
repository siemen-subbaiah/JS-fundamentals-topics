**The event loop is a constantly running process that monitors both the callback queue and the call stack.**

- JavaScript can use the web API's offered by web browser like fetch(), setTimeout(), DOM API's etc

- Whenever a callback function is called, it first registers inside the web API, then the callback functions will go inside **callback queue aka task queue**, for ex if it is a setTimeout method's callback, then after the specified time the callback function goes inside the callback queue from the web API, if it is an addEventListener method, then once the user performs any event then the callback function goes inside the callback queue from the web API.

- The job of event loop is to check if there are any functions in the callback queue and if there are any, it pushes those functions inside the call stack only if the call stack is empty. Therefore event loop keeps monitoring both the callstack and the callback/task queue.

- The callback queue becomes empty once the event loop pushes those callback functions into the call stack

- **Microtask queue** is similar to callback queue, but it has higher priority. The callback functions inside the microtask queue is pushed first to the call stack after that the callback functions inside the callback queue are pushed to the call stack

- All the callback functions which are resolved through promises and MutationObserver will go inside the microtask queue

- The [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) interface provides the ability to watch for changes being made to the DOM tree

- **Starvation** of tasks inside callback queue can be occurred when there are more microtasks in the microtask queue and the tasks in callback queue will be waiting.

---

Need of event loop and callback queue is because since JavaScript has only one callstack, and if there are n number of callbacks, the callstack alone cannot manage it, and therefore the callbacks needs to be queued so that each and every callback functions gets a chance to execute.

![call-stack-img](https://res.cloudinary.com/practicaldev/image/fetch/s--Y1v6aJBu--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/ek7ji4zrimozpp2yzk0a.png)
