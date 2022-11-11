const btn = document.querySelector('#btn');

async function getJokes() {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await res.json();
  console.log(data.value);
}

function throttle(callbackFn, limit) {
  let toThrottle = false;

  return function (...args) {
    if (!toThrottle) {
      toThrottle = true;
      setTimeout(() => {
        toThrottle = false;
        callbackFn(args);
      }, limit);
    }
  };
}

const limitCall = throttle(getJokes, 2000);

btn.addEventListener('click', limitCall);
