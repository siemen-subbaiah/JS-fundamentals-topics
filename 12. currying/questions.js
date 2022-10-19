// * Currying - ex!

// function f(a) {
//   return function (b) {
//     return `${a} and ${b}`;
//   };
// }

// console.log(f(5)(6));

// * Currying - Arrow function ex!

// const addNums = (num1) => (num2) => num1 + num2;
// console.log(addNums(10)(2));

// * Evaluate based on the first argument's key! (RESUING VARIABLE FOR LOGIC)

// const evaluate = (key) => {
//   return (num1) => {
//     switch (key) {
//       case 'sum':
//         return (num2) => num1 + num2;
//       case 'multiply':
//         return (num2) => num1 * num2;
//       case 'divide':
//         return (num2) => num1 / num2;
//       case 'sub':
//         return (num2) => num1 - num2;
//       default:
//         return () => 'Wrong input';
//     }
//   };
// };

// console.log(evaluate('sum')(2)(3));

// * Infinite Currying

// const add = (a) => {
//   return (b) => {
//     if (b) return add(a + b);
//     return a;
//   };
// };

// console.log(add(1)(2)(2)());

// * PARTIAL APPLICATON!

// const sum = (num1) => {
//   return (num2, num3) => num1 + num2 + num3;
// };

// console.log(sum(10)(10, 20));
