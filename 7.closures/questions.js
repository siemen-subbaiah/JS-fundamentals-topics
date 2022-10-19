// * 1. Output Question

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // 1
//   }
//   console.log(count); // 0
// })();

// * 2. Write a function that allows to do this 👇🏼

// var addSix = createBase(5);
// addSix(10); // 15
// addSix(5); // 10

// * ANS!
// const createBase=(num1)=> {
//   return (num2) => {
//     console.log(num1 + num2);
//   };
// }

//  * 3. Improve time optimization of the below function using closures!

// 👇🏼

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }

//   console.log(a[index]);
// }
// console.time('33');
// find(33);
// console.timeEnd('33');

// * ANS!
// function find() {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }

//   return (index) => console.log(a[index]);
// }

// const closure = find();
// console.time('33');
// closure(33);
// console.timeEnd('33');

//  * 4. Output Question and make it print 0 1 2

// 👇🏼
// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();

// * ANS!

// a.* CHANGE THE 'var' variable to 'let'

// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();

// b. * KEEP THE 'var' variable and closurize the setTimeout function

// function a() {
//   for (var i = 0; i < 3; i++) {
//     function inner(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     inner(i);
//   }
// }
// a();

// * 5. Using closure to create a private counter!

// function counter() {
//   let _counter = 0;

//   function add(increment) {
//     _counter = _counter + increment;
//   }

// let assignedCounter = _counter; // * This won't work!

//   function retrive() {
//     return _counter;
//   }

//   return { add, retrive };
// }

// const c = counter();
// c.add(5);
// c.add(10);
// console.log(c.retrive());

// * 6. Run the function once!

// let view;

// function likeTheVideo() {
//   let counter = 0;

//   view = 'the video';
//   return () => {
//     if (counter > 0) {
//       console.log('liked!');
//     } else {
//       console.log('like', view);
//       counter++;
//     }
//   };
// }

// const test = likeTheVideo();
// test();
// test();
// test();

// * COUNTER WITH DIFFERENT FUNCTION REFERENCES!

// function counter() {
//   let count = 0;

//   return function incrementCount() {
//     count++;
//     console.log(count);
//   };
// }

// const count1 = counter();
// count1();
// count1();
// count1();

// console.log('------');

// const count2 = counter();
// count2();
// count2();

// * Each time a refernce is made to the counter(), a separate independent copy is being made!
