/* 

* Ques 1 - Create a button UI and add throttling as follows =>
--> Show "Button Pressed <X> Times" every time button is pressed
--> Increase "Triggered <Y> Times" count after 800ms of debounce

*/

// * YET TO BE IMPMENTED!

const btn = document.querySelector('#btn');
const btnPress = document.querySelector('.increment_pressed');
const count = document.querySelector('.increment_count');

let pressedCount = 0;
let triggerCount = 0;

btn.addEventListener('click', () => {
  btnPress.innerHTML = pressedCount++;
});
