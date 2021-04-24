// async & await
// clear style of using proimise;

function fetchUser() {
  // do network req in 10 sec
  return new Promise((resolve, reject) => {
    resolve('elle');
  });
}

const user = fetchUser();
console.log(user);