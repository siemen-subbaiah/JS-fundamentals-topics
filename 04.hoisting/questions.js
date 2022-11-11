// * 1. Output question

// function run1() {
//   console.log(a, b, c);

//   var a = 10;
//   const b = 10;
//   let c = 10;
// }

// run1();

// * 2. Output question

// console.log(y);
// y = 1;

// console.log(y);
// var y = 2;

// y = 3;
// console.log(y);
// var y;

// * 3. Output question

// var a = 1;
// console.log(a);
// var a = 2;
// console.log(a);

// 👆🏼 var declared variables can be redeclared with the same variable names in the global scope

// * 4. Output question

// function run2() {
//   let a = 'KR$NA';

//   console.log(a);

//   if (true) {
//     let a = 'KARMA';

//     console.log(a);
//   }
// }

// run2();

// 👆🏼 let and const declared variables also can be redeclared with the same variable names but in a block scope. (This can also be called shadowing)

// * 5. Output question

// function run3() {
//   let a = 'KR$NA';

//   console.log(a);

//   if (true) {
//     var a = 'KARMA';

//     console.log(a);
//   }
// }

// run3();

// 👆🏼, this is known as illegal shadowing!

// * 7. Output question

// var z = 1;
// let z;
// console.log(z);

// console.log(z);
// let z = 1;

// * 8. Output question

// function hoistExample() {
//   var a;
//   console.log('Before: ', a);
//   a = 10;
//   console.log('After: ', a);
// }
// hoistExample();

// * 9. Output question

// var rate = 10;
// function getRate() {
//   if (rate === undefined) {
//     var rate = 6;
//     return rate;
//   } else {
//     return 10;
//   }
// }

// console.log('Rate is ', getRate());

// * 10. Explain the scope of TDZ!

// {
// TDZ STARTS!
//   const func = () => console.log(letVar);
//   TDZ ZONE!
//   let letVar = 3; //TDZ ENDS!
//   func();
// }
