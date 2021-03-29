const arr = [4,5,3];

arr.forEach(console.log);
// arr.forEach(alert); // error

/**
  forEach 의 callback 함수에서 사용하는 value, index, array 가 순서대로 출력
  4 0 [ 4, 5, 3 ]
  5 1 [ 4, 5, 3 ]
  3 2 [ 4, 5, 3 ]
 */