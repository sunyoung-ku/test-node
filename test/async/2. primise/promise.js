// Promise : 비동기 Operation
// 1. STATE : pending -> fulfilled or rejected
// 2. Producer | Consumer

// 1. Producer

// 프로미스가 만들어질떄 , 자동실행됨
const promise = new Promise(((resolve, reject) => {
  // do some heave work () , network . file access
  console.log('doing something...');
  setTimeout(() => {

    //  resolve('handle resolve');
    reject(new Error('not handle'));

  }, 2000);
}));

// Consumers : then , catch , finally

promise.then(value => {
  console.log(value);
}).catch(error => {
  console.log('handle error');
  console.log(error);
}).finally(() => {
  console.log('finished');
});

// 3. prmise chaining

const fetchNumber = new Promise(((resolve, reject) => {
  setTimeout(() => {
    console.log('go number chaining');
    resolve(1);
  }, 1000);
}));

fetchNumber //
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    })
  }).then(num => console.log(num));



