

// 1. async
async function fetchUser() {
  // do network req in 10 sec
  return 'elle';
}

const user = fetchUser();
console.log(user);


// 2. await


function delay(ms){
  return new Promise((resolve, reject) => setTimeout(resolve,ms));
}
async function getBanana(){
  await delay(3000);
  return 'banana';
}

async function getApple(){
  await delay(1000);
  return 'apple';
}

function pickFluits(){
  return getApple()
  .then(apple=>getBanana().then(
      banana => console.log(`${apple} + ${banana}`)
  ));
}

//pickFluits();


async function pickFlutesV2(){
  const  banana = await getBanana();
  const  apple =  await getApple();
  return `${apple} + ${banana}`;

};

//pickFlutesV2().then(console.log);


// 3. promise all

function pickAll(){
  return Promise.all([getApple(),getApple()])
  .then(fluits => fluits.join('+'));
}

pickAll().then(console.log);

// 4. promise race


function pickOne(){
  return Promise.race([getApple(),getApple()])
  ;
}
pickOne().then(console.log);