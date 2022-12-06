// * POLYFILL FOR MAP!

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, temp));
//   }
//   return temp;
// };

// const nums = [1, 2, 3, 4];

// const multiplyNums = nums.myMap((num) => num * 2);
// console.log(multiplyNums);

// * POLYFILL FOR FILTER!

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, temp)){
//         temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const nums = [1, 2, 3, 4];

// const returnMoreThanTwo = nums.myFilter((num) => num > 2);
// console.log(returnMoreThanTwo);

// * POLYFILL FOR FIND!

// Array.prototype.myFind = function (cb) {
//   let temp = {};

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) {
//       temp = this[i];
//     }
//   }

//   return temp;
// };

// const nums = [1, 2, 3, 4, 2];

// const returnExactlyOne = nums.myFind((num) => num === 2);
// console.log(returnExactlyOne);

// * POLYFILL FOR REDUCE!

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }
//   return accumulator;
// };

// const nums = [1, 2, 3, 4, 5];

// const getSumOfArray = nums.myReduce((sum, num) => sum + num, 0);
// console.log(getSumOfArray);

// * POLYFILL FOR CALL!

// const obj = {
//   name: 'roc8',
//   website: 'https://www.roc8.careers',
// };

// function accessName() {
//   console.log(this.name);
// }

// Function.prototype.myCall = function (context, ...arguments) {
//   if (typeof this !== 'function') {
//     throw new Error(this + 'It is not callable');
//   }

//   context.fn = this;
//   context.fn(...arguments);
// };

// accessName.myCall(obj);

// * POLYFILL FOR APPLY!

// const obj = {
//   name: 'roc8',
//   website: 'https://www.roc8.careers',
// };

// function accessName(params) {
//   console.log(this.name + params[0] + params[1]);
// }

// Function.prototype.myApply = function (context, arguments) {
//   if (typeof this !== 'function') {
//     throw new Error(this + 'It is not callable');
//   }

//   if (!Array.isArray(arguments)) {
//     throw new Error('Array not passed');
//   }

//   context.fn = this;
//   context.fn(arguments);
// };

// accessName.myApply(obj, [' is', ' awesome']);

// * POLYFILL FOR BIND!

// const obj = {
//   name: 'roc8',
//   website: 'https://www.roc8.careers',
// };

// function accessName(parm1, parm2) {
//   console.log(this.name, parm1, parm2);
// }

// Function.prototype.myBind = function (context, ...args) {
//   if (typeof this !== 'function') {
//     throw new Error(this + 'It is not callable');
//   }

//   context.fn = this;

//   return function (...newArgs) {
//     return context.fn(...args, ...newArgs);
//   };
// };

// const accessFunc = accessName.myBind(obj, 'hello');
// accessFunc('hello2');

// * POLYFILL FOR PROMISE.ALL!

// function myPromiseAll(promises) {
//   const output = [];

//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, i) => {
//       promise
//         .then((res) => {
//           output.push(res);
//           if (i === promises.length - 1) {
//             resolve(output);
//           }
//         })
//         .catch((err) => reject(err));
//     });
//   });
// }

// myPromiseAll([Promise.resolve(2), Promise.resolve('roc8')]).then((res) =>
//   console.log(res)
// );

// * POLYFILL FOR FLAT!

// Array.prototype.myFlat = function () {
//   const outputArr = [];

//   function flatten(context) {
//     for (let i = 0; i < context.length; i++) {
//       if (Array.isArray(context[i])) {
//         flatten(context[i]);
//       } else {
//         outputArr.push(context[i]);
//       }
//     }
//     return outputArr;
//   }
//   return flatten(this);
// };

// const arr = [1, 2, [[1, 2, [2]]]];
// console.log(arr.myFlat());

// * POLYFILL FOR structuredClone (deepclone)!

// function deepClone(obj){

//   const copiedObj = {}
//   for(let key in obj){
//     if(typeof obj[key]!=='object' || Array.isArray(obj[key])){
//       copiedObj[key]=obj[key]
//     }else{
//       copiedObj[key]=deepClone(obj[key])
//     }
//   }

//   return copiedObj

// }

// const obj = {
//   name:'siemen',
//   age:20,
//   otherInfo:{
//     subInfo:{
//       lastName:'subbaiah'
//     }
//   }
// }

// const obj2 = deepClone(obj)
// obj2.otherInfo.subInfo.lastName = 'K K'

// console.log(obj.otherInfo.subInfo);
// console.log(obj2.otherInfo.subInfo);

// * Memoization/caching function

// function memoize(callbackFn) {
//   const res = {};

//   return function (...args) {
//     const argsCache = JSON.stringify(args);
//     if (!res[argsCache]) {
//       res[argsCache] = callbackFn.call(this, ...args); // callbackFn(args)
//     }
//     return res[argsCache];
//   };
// }
