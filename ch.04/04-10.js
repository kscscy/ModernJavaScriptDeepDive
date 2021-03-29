console.log(score); // undefined
// 변수에 값을 할당할 때는 이전 값 undefined 가 저장되어 있던 메모리 공간을 지우고 그 메모리 공간에 할당 값 80을 새롭게 저장하는 것이 아니라
// 새로운 메모리 공간을 확보하고 그곳에 할당 값 80을 저장한다.


score = 80;
var score;

console.log(score); // ?? // 80 예상