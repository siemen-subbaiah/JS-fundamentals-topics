// * 1. CREATE A FUNCTION THAT MULTIPLIES ALL NUMERIC PROPERTY VALUES OF test object BY 2

// const nums = {
//   a: 100,
//   b: 200,
//   title: 'My nums',
// };

// const multiplyByTwo = (obj) => {
//   for (key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] = obj[key] * 2;
//     }
//   }
// };

// multiplyByTwo(nums);
// console.log(nums);

// * 2. Output Question
// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]); //456

// * 3. Output Question
// const user = {
//   firstName: 'Krishna',
//   lastName: 'Kaul',
//   stageName: 'KR$NA',
// };

// console.log(JSON.stringify(user, ['stageName'])); //ONLY THE SECOND WILL BE SHOWN!

// * 4. Output Question
// let c = { greeting: 'Hey' };

// let d = c;
// d.greeting = 'Hello';

// console.log(c);

//  👆🏼 When one Object is assigned to another object, it does not copy it only provides the reference and hence both the objects will be manipulated

// * 5. Output Question
// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });
// BECAUSE BOTH ARE DIFFERENT AND STORED IN DIFFERENT MEMORY LOCATIONS

// * 6. Output Question
// const value = { number: 10 };
// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };
// multiply(); //20
// multiply(value); //20
// multiply(value); //40

// *7. Output Question
// const checkReference = (obj) => {
//   obj.age = 35;
//   obj = {
//     name: 'KRISHNA KAUL',
//     age: 34,
//   };
//   return obj;
// };

// const personObj = {
//   name: 'KR$NA',
//   age: 34,
// };

// const modifiedPersonObj = checkReference(personObj);
// console.log(personObj);
// console.log(modifiedPersonObj);

// * 8. SHALLOW COPY!
// const sports = [
//   'Cricket',
//   'Tennis',
//   'Swimming',
//   { a: 'Hockey', b: 'Baseball' },
// ];
// const copiedSports = [...sports];

// copiedSports[0] = 'Baseball'; // first level has been changed

// copiedSports[3].a = 'Ice Hockey'; // attempt to change the second level has been made and the original array also has been changed

// console.log(sports);
// console.log(copiedSports);

// * copying only the first level using : spread operator, Array.from() and slice()

// * 9. DEEP COPY!
// const sports = [
//   'Cricket',
//   'Tennis',
//   'Swimming',
//   { a: 'Hockey', b: 'Baseball' },
// ];
// const copiedSports = JSON.parse(JSON.stringify(sports));

// copiedSports[0] = 'baseball';
// copiedSports[3].a = 'Ice Hockey';

// console.log(sports);
// console.log(copiedSports);

// * copying both the first and second level using : JSON.parse and JSON.stringify
