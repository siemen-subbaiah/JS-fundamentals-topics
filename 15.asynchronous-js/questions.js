// * CALLBACK HELL EX!

const starIceCream = (cb) => {
  setTimeout(() => {
    cb('Ice cream started!');
  }, 1000);
};

const putToppings = (cb) => {
  setTimeout(() => {
    cb('started to put toppings!');
  }, 3000);
};

const makeTheCone = (cb) => {
  setTimeout(() => {
    cb('started to make the cone!');
  }, 2000);
};

starIceCream((log) => {
  console.log(log);
  putToppings((log) => {
    console.log(log);
    makeTheCone((log) => {
      console.log(log);
    });
  });
});

// * PROMISES HELPS TO AVOID CALLBACK HELL BY GIVING THREE STATES, BASED ON THESE STATES THE DATA CAN CONSUMED!

// * CREATION OF PROMISES!

const starIceCream2 = () => {
  return new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      reject('Error');
    } else {
      setTimeout(() => {
        resolve('Ice cream started!');
      }, 1000);
    }
  });
};
const putToppings2 = () => {
  return new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      reject('Error');
    } else {
      setTimeout(() => {
        resolve('started to put toppings!');
      }, 3000);
    }
  });
};
const makeTheCone2 = () => {
  return new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      reject('Error');
    } else {
      setTimeout(() => {
        resolve('started to make the cone!');
      }, 2000);
    }
  });
};

// * CONSUMING PROMISES USING THEN AND CATCH!

starIceCream2().then((data) => {
  console.log(data);
  putToppings2().then((data) => {
    console.log(data);
    makeTheCone2().then((data) => {
      console.log(data);
    });
  });
});

// * RETURNING THE PROMISE! (PROMISE CHAINING!)
starIceCream2()
  .then((data) => {
    console.log(data);
    return putToppings2();
  })
  .then((data) => {
    console.log(data);
    return makeTheCone2();
  })
  .then((data) => {
    console.log(data);
  });

// * PROMISE COMBINATORS!

// * 1.
Promise.all([starIceCream2(), putToppings2(), makeTheCone2()]).then((res) =>
  console.log(res)
);

// * 2.
Promise.allSettled([starIceCream2(), putToppings2(), makeTheCone2()]).then(
  (res) => console.log(res)
);

// * 3.
Promise.race([starIceCream2(), putToppings2(), makeTheCone2()]).then((res) =>
  console.log(res)
);

// * 4.
Promise.any([starIceCream2(), putToppings2(), makeTheCone2()]).then((res) =>
  console.log(res)
);

// * CONSUMING PROMISES USING ASYNC/AWAIT!

const display = async () => {
  const data1 = await starIceCream2();
  console.log(data1);
  const data2 = await putToppings2();
  console.log(data2);
  const data3 = await makeTheCone2();
  console.log(data3);
};

display();

// --------------------------------------------------------------------

// * 1. Output Question

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => console.log(res));

// console.log('end');

// * 2. Output Question

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => console.log(res));

// console.log('end');

// * 3. Output Question

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(3);
// });

// promise1.then((res) => console.log('result' + res));

// console.log('end');

// * 4. Output Question

// console.log('start');

// function fn() {
//   return new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success');
//   });
// }

// console.log('middle');

// fn().then((res) => console.log(res));

// console.log('end');

// * 5. Output Question

// function Job() {
//   return new Promise((resolve, reject) => {
//     reject();
//   });
// }

// let promise = Job();

// promise
//   .then(() => console.log('success 1'))
//   .then(() => console.log('success 2'))
//   .then(() => console.log('success 3'))
//   .catch(() => console.log('error 1'))
//   .then(() => console.log('success 5'));

// * 6. Promise Chaining

// const firstPromise = new Promise((resolve, reject) => {
//   resolve('First');
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise
//   .then((data) => {
//     return data;
//   })
//   .then((data) => console.log(data));

//  * 7 Rewrite this example code using async/await instead of.then/catch

// function loadJson1(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson1('https://fakeurl.com/no-such-user.json').catch((err) =>
//   console.log(err)
// );

// * REWRITE!
// const loadJson2 = async (url) => {
//   try {
//     const res = await fetch(url);
//     if (res.status === 200) {
//       return res.json();
//     } else {
//       throw new Error(res.status);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// loadJson2('https://fakeurl.com/no-such-user.json');

// * 8 Promise Chaining
// * a. new result is being passed through the chain of .then(handler)

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// })
//   .then((data) => {
//     console.log(data);
//     return data * 2;
//   })
//   .then((data) => {
//     console.log(data);
//   });

// * b.  handler, used in .then(handler) may create and return a promise.

// fetch('https://www.github.com/api/users')
//   .then((res) => res.json())
//   .then((data) => console.log(data));
