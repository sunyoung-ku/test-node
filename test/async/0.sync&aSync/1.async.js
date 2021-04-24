

function printA(){
  setTimeout( () => { console.log('a');} , 4000);
}
function printB(){
  setTimeout( () => { console.log('b');} , 3000);
}
function printC(){
  setTimeout( () => { console.log('c');} , 2000);
}

printA();
printB();
printC();
