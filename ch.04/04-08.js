console.log(score); // undefined
// 자바스크립트 엔진은 소스코드를 실행하기에 앞서 소스코드의 평가 과정을 거쳐서 소스코드를 실행하기 위한 준비를 한다.
// 이때 소스코드 실행을 위한 준비 단계인 소스코드의 평가 과정에서 자바스크립트 엔진은 변수 선언을 포함한 모든 선언문(변수 선언문, 함수 선언문 등)을 소스코드에서 찾아내 먼저 실행한다.
// 그리고 소스코드의 평가 과정이 끝나면 비로소 변수 선언을 포함한 모든 선언문을 제외하고 소스코드를 한 줄씩 순차적으로 실행한다.

// 변수 선언문이 코드의 선수도 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 변수 호이스팅이라 한다.
// 변수 선언뿐 아니라 var, let, const, function, function*, class 키워드를 사용해서 선언하는 모든 식별자(변수, 함수, 클래스 등)는 호이스팅된다.
// 모든 선언문은 런타임 이전 단계에서 먼저 실행되기 때문이다.

var score;
score = 80;

console.log(score); // 80