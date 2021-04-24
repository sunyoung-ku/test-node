function printA(callback) {
  setTimeout(() => {
    console.log('a');
    callback();
  }, 4000);
}

function printB(callback) {
  setTimeout(() => {
    console.log('b');
    callback();
  }, 3000);
}

function printC(callback) {
  setTimeout(() => {
    console.log('c');
    callback();
  }, 2000);
}

printA(() => {
  printB(() => {
    printC(() => {

    })
  })
});

