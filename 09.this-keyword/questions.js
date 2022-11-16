// * 1. Output Question
// const user = {
//   firstName: 'Krishna',
//   lastName: 'Kaul',
//   stageName: 'KR$NA',
//   sayMyName() {
//     const firstName = 'KR$...';
//     return this.firstName;
//   },
// };

// console.log(user.sayMyName());

// * 2. Output Question

// function makeUser() {
//   return {
//     name: 'KR$NA',
//     ref() {
//       return this;
//     },
//   };
// }

// console.log(makeUser());

// * 3. Output Question

// var length = 4;

// function callback() {
//   console.log(this.length);
// }

// const obj = {
//   length: 5,
//   callFun(fn) {
//     fn();
//   },
// };

// obj.callFun(callback);

// * 4 Output Question

// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message);
//   },
// };
// setTimeout(object.logMessage, 1000);

// Reason : While setTimeout() function uses the object.logMessage as a callback, still, it inovkes object.logMessage as a regular function, rather than a method.

// * 5 Output Question

// var length = 4;
// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   },
// };
// object.method(callback, 1, 2);

// Reason:
// - obj.method(callback, 1, 2) is invoked with 3 arguments: callback, 1 and 2. As result the arguments special variable inside method() is an array-like object of the following structure:

// {
//   0: callback,
//   1: 1,
//   2: 2,
//   length: 3
// }

// - Because arguments[0]() is a method invocation of callback on arguments object, this inside the callback equals arguments. As result this.length inside callback() is same as arguments.length — which is 3.

// * 5  Create an object calculator which calls like this : calculate.add(10).add(20).mul(20).sub(10)
// const calculate = {
//   total: 0,
//   add(parm) {
//     this.total = this.total + parm;
//     return this;
//   },
//   sub(parm) {
//     this.total = this.total - parm;
//     return this;
//   },
//   mul(parm) {
//     this.total = this.total * parm;
//     return this;
//   },
// };

// const result = calculate.add(10).add(20).mul(20).sub(10);
// console.log(result.total);
