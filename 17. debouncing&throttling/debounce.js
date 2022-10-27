/* 

* Ques 1 - Create a button UI and add debounce as follows =>
--> Show "Button Pressed <X> Times" every time button is pressed
--> Increase "Triggered <Y> Times" count after 800ms of debounce

*/

const btn = document.querySelector('#btn');
const btnPress = document.querySelector('.increment_pressed');
const count = document.querySelector('.increment_count');

let pressedCount = 0;
let triggerCount = 0;

function debounce(cb, delay) {
  let timeoutId;
  return function () {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb();
    }, delay);
  };
}

const debounceCount = debounce(() => {
  triggerCount = triggerCount + 1;
  count.innerHTML = triggerCount;
}, 2000);

btn.addEventListener('click', () => {
  btnPress.innerHTML = pressedCount++;
  debounceCount();
});
