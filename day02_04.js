// 숫자(number)와 관련 연산자

// 양과 음의 정수와 실수
// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
  typeof integer,
  typeof real,
  typeof negative
); // number number number

// 무한대
let x = 1 / 0;
console.log(x, typeof x); // Infinity number
console.log(x + 1); // Infinity

// 무한대에는 양음이 있음
console.log(-x, typeof -x); // -Infinity number

let y = -1 / 0;
console.log(y, typeof y); // -Infinity number

let z = Infinity;
console.log(z, typeof z); // Infinity number

// 숫자가 아닌 것 Not a Number
x = 1 / 'abc';
y = 2 * '가나다';
z = NaN;

console.log(x, typeof x); // NaN number
console.log(y, typeof y); // NaN number
console.log(z, typeof z); // NaN number

// 주어진 값이 NaN인지 여부 확인하는 방법
x = 1 / 'abc';

console.log(
  x,
  x == NaN,
  x === NaN,
  isNaN(x), // 숫자가 아닐 시 true
  Number.isNaN(x) // 보다 엄격한 버전
); // NaN false false true true

// isNaN과 Number.isNaN의 차이
// isNaN : 숫자가 아니다 싶으면 무조건 true 반환
// Number.isNaN : 숫자 자료형인 주제에 숫자가 아니어야만 true 반환

// 특정 숫자로 변환 가능한 문자
console.log(
  typeof '1', isNaN('1'), Number.isNaN('1')
); // string false false

// 특정 숫자로 변환 불가인 문자의 경우 차이
console.log(
  typeof 'a', isNaN('a'), Number.isNaN('a')
); // string true false

// NaN값인 경우
console.log(
  typeof (1/'a'), isNaN(1/'a'), Number.isNaN(1/'a')
); // number true true

// 연산자

// 이항 산술 연산자
// +, -, *, /, %, **
// 셈의 결과를 반환
// 부수효과 없음

// 값 반환
x = 10;
y = x * 10;

console.log(y); // 100

console.log(
  y + 1, // 덧샘
  y - 1, // 뺄셈
  y * 2, // 곱셈
  y / 5, // 나눗셈
  y % 3,  // 나머지
  y ** 2 // 제곱
); // 101, 99, 200, 20, 1, 10000

// 부수효과 없음(변화 없음)
console.log(y); // 100

// 널리 사용되는 홀수와 짝수의 판별법
console.log(
  '홀수 ',
  123 % 2,
  55 % 2,
  999 % 2
); // 홀수 1 1 1
console.log(
  '짝수 ',
  2 % 2,
  100 % 2,
  8 % 2
); // 짝수 0 0 0

// 괄호의 사용
console.log(
  4 * 1 + 2,
  4 * (1 + 2),
  4 * -(1 + 2),
  -(4 * -(1 + 2))
); // 6 12 -12 12

// 단항 산술 연산자
// a++ : 값 그대로 1 증가
// ++a : 1 증가한 값 1 증가
// a-- : 값 그대로 1 감소
// --a : 1 감소한 값 1 감소
// +a : 값 그대로
// -a : 양음을 반전한 값

x = 10;

// 값을 반환부터 하고 증가
// console.log('1.', x++, x); // 1. 10 11

// 값을 증가부터 하고 반환
// console.log('2.', ++x, x); // 2. 11 11

x = 3;
y = 4;

// 부수효과가 일어나는 시점
console.log(x-- * --y, x, y); // 9 2 3

x = 1;
console.log(
  +x,
  -x,
  -(-x),
  -(x++),
  -x * -1
); // 1 -1 1 -1 2

// 문자열을 숫자로 바꿈
console.log(
  +'100',
  -'100',
  +'abc' // 숫자로 변환될 수 없는 문자열
); // 100 -100 NaN

x = '100';
// console.log(x++, x); // 100 101

y = '100';
// console.log(--y, y); // 99 99

// 숫자로 변환될 수 없는 문자열
// 첫 번째 값 주의 - 증가 이전에도 변환
z = 'abc';
console.log(z++, z); // NaN NaN

// 할당 산술 연산자(부수효과)

// x += y : x = x + y
// x -= y : x = x - y
// x *= y : x = x * y
// x /= y : x = x / y
// x %= y : x = x % y
// x **= y : x = x ** y

x = 3;

x += 2;
console.log(x); // 5

x -= 3;
console.log(x); // 2

x *= 12;
console.log(x); // 24

x /= 3;
console.log(x); // 8

x %= 5;
console.log(x); // 3

x **= 4;
console.log(x) // 81

// 변화되어 할당

y = 25;

console.log(
  y **= 0.5, // 할당된 결과 반환
  y
); // 5 5