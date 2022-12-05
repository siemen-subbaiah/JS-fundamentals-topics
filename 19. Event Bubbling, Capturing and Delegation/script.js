const thirdBtn = document.querySelector('.third');
const secondBtn = document.querySelector('.second');
const firstBtn = document.querySelector('.first');
const cards = document.querySelector('.cards');

// * Event bubbling
// thirdBtn.addEventListener('click', () => {
//   console.log('child');
// });

// secondBtn.addEventListener('click', () => {
//   console.log('parent');
// });

// firstBtn.addEventListener('click', () => {
//   console.log('grandparent');
// });

// * Event capturing
// thirdBtn.addEventListener(
//   'click',
//   () => {
//     console.log('child');
//   },
//   true
// );

// secondBtn.addEventListener(
//   'click',
//   () => {
//     console.log('parent');
//   },
//   true
// );

// firstBtn.addEventListener(
//   'click',
//   () => {
//     console.log('grandparent');
//   },
//   true
// );

// * stop bubbling and capturig
// thirdBtn.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('child');
// });

// secondBtn.addEventListener('click', () => {
//   console.log('parent');
// });

// firstBtn.addEventListener('click', () => {
//   console.log('grandparent');
// });

// * Event delegation
// cards.addEventListener('click', (e) => {
//   alert(e.target.dataset.info);
//   if (!e.target.style.backgroundColor) {
//     e.target.style.backgroundColor = 'blue';
//   } else {
//     e.target.style.backgroundColor = 'transparent';
//   }
// });
