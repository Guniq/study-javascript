// 블록문과 스코프

// 블록문

// 0개 이상의 문statement들을 묶은 단위
// 일반적으로, 이후 배울 제어문, 함수 등에 사용
// 새로운 스코프 생성

// 스코프 scope
{
  const x = 'Hello';
  let y = 'world!';
  console.log(x, y);
}
// 블록 안에 선언된 변수와 상수를 밖에서 사용 불가
// console.log(x); // error
// console.log(y); // error


let x = 1;
{
  let y = 2;
  console.log(x, y);
}
// 블록 안쪽에서는 바깥의 것 사용 가능
console.log(x); // 블록바깥에 있어 출력 가능
// console.log(y); // 블록 안에있어 error

// 블록 안쪽에 변수나 상수가 새로 선언되면 바깥 것을 덮어씀
const xx = 0;
let yy = 'Hello!';
console.log(xx, yy);

{
  const xx = 1; // 블록 안에서는 바깥의 const 재선언 가능
  let yy = '안녕하세요~';

  console.log(xx, yy);
  // const, let을 빼먹으면 재선언이 아니라 바깥것의 값을(변수면) 바꿈!
}

console.log(xx, yy);

// 스코프 체인

// 스택 : 후입선출
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c); // 0, 1, 2

{
  let a = 'A';
  let b = 'B'
  console.log('시점 2:', a, b, c); // A, B, 2

  {
    let a = '가'
    console.log('시점 3:', a, b, c); // 가, B, 2
  }

  console.log('시점 4:', a, b, c); // A, B, 2
}
console.log('시점 5:', a, b, c); // 0, 1, 2

// 블럭 안에 해당 변수/상수가 없으면 바깥쪽으로 찾아 나감

// 전역 global 변수/상수
// 데이터 data 영역에 위치
// 코드 어느 곳에서든 접근 가능 - 블록 내 동명의 변수나 상수에 덮어씌워지지 않는 이상
// 프로그램 종료시 소멸
// 전역변수 사용은 최소화할 것

// 지역 local 변수/상수
// 스택 영역에 위치
// 해당 블록 안에서만 접근 가능
// 블록 실행 종료시 소멸
// 변수나 상수는 가능한 사용할 블록 내에서 선언 - 메모리 절약