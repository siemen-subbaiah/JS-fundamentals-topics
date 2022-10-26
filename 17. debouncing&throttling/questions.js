const inputVal = document.querySelector('#inputVal');

let count = 0;

function debounce(func, delay) {
  return function () {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
}

inputVal.addEventListener(
  'input',
  debounce(() => {
    console.log(inputVal.value, count++);
  }, 1000)
);
