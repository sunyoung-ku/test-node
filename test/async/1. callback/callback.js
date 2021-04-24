// CALL BACK 방식의 java script
// javascript : synchronous
// hosting -> var , function decaration

console.log('1');
console.log('2');
console.log('3');


// sync : 정해진 순서에 따라 실행

// async : 언제 리턴될지 모르는 실행방식
// hander , timeout
console.clear();
setTimeout(function (){
  console.log('2');
}, 1000);


setTimeout(()=>{
  console.log('2');
}, 1000);

// callback 비동기

// synchronous call back

function printImmediately(print){
  print();
}

printImmediately(()=>console.log('hello'));

// asynchronous call back
function printWithDelay(print,timeout){
  setTimeout(print,timeout);
}

printWithDelay(()=> console.log('asycnc call back '),2000);