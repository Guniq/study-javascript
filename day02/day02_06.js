// boolean과 관련 연산자

console.log(true, typeof true); // true boolean
console.log(false, typeof false); // false boolean

let a = 1 === 2;
let b = 'abc' !== 'def'
let c = a !== b;
let d = typeof a === typeof b === true;

console.log(a, typeof a); // false boolean
console.log(b, typeof b); // true boolean
console.log(c, typeof c); // true boolean
console.log(d, typeof d); // true boolean

// 연산자
// 부정 연산자
console.log(
  true, !true, false, !false
); // true false false true

console.log(
  true, !true, !!true, !!!true
); // true false true false

console.log(
  false, !false, !!false, !!!false
); // false true false true

console.log(
  true === !false,
  !(1 == '1'),
  !(1 === '1'),
  !(typeof false === 'boolean')
); // true false true false

// AND / OR 연산자
// && - AND : 양쪽 모두 true 여부 반환
console.log(
  true && true,
  true && false,
  false && true,
  false && false,
); // true false false false

// || - OR : 한 쪽이라도 true 여부 반환
console.log(
  true || true,
  true || false,
  false || true,
  false || false,
); // true true true false

let x = 14;
// x = 6;
// x = 25;

console.log(
  (x > 10 && x <= 20) || x % 3 === 0
); // true 


// 드 모르간의 법칙
a = true;
// a = false;
b = true;
// b = false;

console.log(
  !(a && b) === (!a || !b),
  !(a || b) === (!a && !b)
); // 항상 true

// 단축평가 short circuit
// && : 앞의 것이 false면 뒤의 것을 평가할 필요 없음
// || : 앞의 것이 true면 뒤의 것을 평가할 필요 없음
// 평가는 곧 실행 - 이 점을 이용한 간결한 코드
// 연산 부하가 적은 코드를 앞에 - 리소스 절약

let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!'); // 오류 발생

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.'); // false일시 이상 없음

x = true;
// x = false;

// &&, || 연산자는 값 자체를 반환
let y = x && 'abc';
let z = x || 123;

console.log(y, z); 
// abc true // false 123

// 삼항연산자 - ~ ? ~ : ~
x = true;
// x = false;

y = x ? '참입니다.' : '거짓입니다.';
console.log(y); // 참입니다 // 거짓입니다

let num = 103247;

console.log(
  'num은 3의 배수' +
  (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
); // num은 3의 배수가 아닙니다 // num은 3의 배수입니다

// error = true;
error = false;

error ? console.error('오류 발생!') : console.log('이상 없음'); // error : 오류 발생 // 이상 없음

// Truthy vs Falsy
// true 또는 false로 평가되는 값들

// Truthy
// 숫자는 0 제외 문자는 빈값 제외
console.log(
  1.23 ? true : false,
  -999 ? true: false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
); // true true true true true true true true

// true와 `같다`는 의미는 아님
console.log(
  1.23 == true,
  ' ' == true,
  {} == true
); // false false false

// Falsy
console.log(
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false,
); // false false false false false false

// 💡 어떤 값들은 false로 타입변환됨
console.log(
  0 == false,
  0 === false,
  '' == false,
  '' === false
); // true false true false
console.log(
  null == false,
  undefined == false,
  NaN == false,
); // false false false


x = 0;
y = 1;

x && x++; // 뒷부분 실행 x
y && y++; // 뒷부분 실행

console.log(x, y); // 0 2

x = 2;
y = 3;

console.log(
  x % 2 ? '홀' : '짝',
  y % 2 ? '홀' : '짝'
); // 짝 홀

x = '';
y = '회사원';
z = x || y;

console.log(z); // 회사원

x = x || '단기알바';
y = y || '단기알바'; 

console.log(x, y); // 단기알바 회사원

// boolean으로 직접변환
// 한 번 부정
console.log(
  !1, !-999, !'hello',
  !0, !'', !null
); // false false false true true true

// 두 번 부정하여 해당 boolean값으로
console.log(
  !!1, !!-999, !!'hello',
  !!0, !!'', !!null
); // true true true  false false false

x = 123;

console.log(
  'x는 홀수인가?',
  !!(x % 2)
); // x는 홀수인가? true