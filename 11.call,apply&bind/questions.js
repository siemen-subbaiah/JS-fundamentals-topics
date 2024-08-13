// * CALL!

// const user = {
//   firstName: 'Krishna',
//   lastName: 'Kaul',
//   stageName: 'KR$NA',
// };

// function sayMyName(job) {
//   console.log(`Hello my name is ${this.stageName} and I am a ${job}`);
// }

// sayMyName.call(user, 'rapper');

// * APPLY!

// const user = {
//   firstName: 'Krishna',
//   lastName: 'Kaul',
//   stageName: 'KR$NA',
// };

// function sayMyName(job) {
//   console.log(`Hello my name is ${this.stageName} and I am a ${job}`);
// }

// sayMyName.apply(user, ['rapper']);

// * BIND!

// const user = {
//   firstName: 'Krishna',
//   lastName: 'Kaul',
//   stageName: 'KR$NA',
// };

// function sayMyName(job) {
//   console.log(`Hello my name is ${this.stageName} and I am a ${job}`);
// }

// const bindFunc = sayMyName.bind(user);

// bindFunc('rapper');

// * 1. Output Question

// const age = 10;
// const person = {
//   name: 'KR$NA',
//   age: 34,
//   getAge: function () {
//     return this.age;
//   },
// };

// const person2 = {
//   age: 22,
// };

// console.log(person.getAge.call(person2));

// * 2. Output Question

// const animals = [
//   { species: 'Lion', name: 'King' },
//   { species: 'Whale', name: 'Queen' },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log('#' + i + ' ' + this.species + ': ' + this.name);
//   };
//   this.print();
// }

// animals.forEach((animal, i) => printAnimals.call(animal, i));

// * 3. Append an array to another array!

// const array = ['a', 'b'];
// const elements = [0, 1, 2];

// * using the spread operator
// array.push(...elements);
// console.log(array);

// * using apply (since second argument of the 'call' should take an array!)!
// array.push.apply(array, elements);
// console.log(array);

// * 4. Find min/max number in an array

// const numbers = [12, 22, 1, 51];

// * using the spread operator
// console.log(Math.max(...numbers));

// * using apply
// console.log(Math.max.apply(null, numbers));

// * 5. Output Question

// function f() {
//   console.log(this.name);
// }

// f.bind({ name: 'KR$NA' }).bind({ name: 'jcole' })();
