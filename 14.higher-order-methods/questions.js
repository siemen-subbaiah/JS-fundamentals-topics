// * 1. Array.map

// const nums = [1, 2, 3, 4];

// const multiplyNums = nums.map((num) => num * 2);
// console.log(multiplyNums);

// * 2. Array.filter

// const nums = [1, 2, 3, 4];

// const returnMoreThanTwo = nums.filter((num) => num > 2);
// console.log(returnMoreThanTwo);

// * 3.a Array.reduce

// const nums = [1, 2, 3, 4, 5];

// const getSumOfArray = nums.reduce((sum, num) => sum + num, 0);
// console.log(getSumOfArray);

// * 3.b Array.reduce

// const cart = [
//   {
//     title: 'Facebook stock',
//     price: 322.55,
//     amount: 2,
//   },
//   {
//     title: 'Amazon',
//     price: 3253.59,
//     amount: 4,
//   },
//   {
//     title: 'Apple',
//     price: 142.08,
//     amount: 4,
//   },
//   {
//     title: 'Netflix',
//     price: 624.82,
//     amount: 3,
//   },
//   {
//     title: 'Google',
//     price: 2723.84,
//     amount: 2,
//   },
// ];

// const cartTotal = cart.reduce(
//   (total, item) => Math.ceil(total + item.price * item.amount),
//   0
// );

// console.log(cartTotal);

// -------------------------------------------------------------------------------------------------

const students = [
  { name: 'lisa', rollNumber: 31, marks: 80 },
  { name: 'rose', rollNumber: 15, marks: 69 },
  { name: 'jennie', rollNumber: 16, marks: 35 },
  { name: 'jisoo', rollNumber: 7, marks: 55 },
];

// * 1. Return only name of students in Capital

// const capitalLetters = students.map((student) => student.name.toUpperCase());
// console.log(capitalLetters);

// * 2. Return only details of those who scored ore than 60 marks

// const returnMoreThan60 = students.filter((student) => student.marks > 60);
// console.log(returnMoreThan60);

// * 3. Return only details of studnets who scored more than 60 makrs and rollnumber having greater than 15

// const multipleFilters = students
//   .filter((student) => student.marks > 60)
//   .filter((student) => student.rollNumber > 15);
// console.log(multipleFilters);

// * 4. Sum of marks of all students

// const caluclateSum = students.reduce((sum, student) => sum + student.marks, 0);
// console.log(caluclateSum);

// * 5. Return names of students who scored more than 60

// const returnMoreThan60Names = students
//   .filter((student) => student.marks > 60)
//   .map((student) => student.name);
// console.log(returnMoreThan60Names);

// * 6. Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

// const combineAll = students
//   .filter((student) => student.marks < 60)
//   .map((student) => (student.marks = student.marks + 20))
//   .reduce((sum, mark) => sum + mark, 0);
// console.log(combineAll);
