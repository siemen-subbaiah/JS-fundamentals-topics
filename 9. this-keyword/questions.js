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

// * 4
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
