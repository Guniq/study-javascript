// 문자열에 사용되는 연산자

// x == y : 값이 같다
// x === y : 자료형도 값도 같다
// x != y : 값이 다르다
// x !== y : 자료형 또는 값이 다르다
// x < y : 사전순상 x가 먼저 온다
// x <= y : 사전순상 x가 먼저 오거나 같다
// x > y : 사전순상 y가 먼저 온다
// x >= y : 사전순상 y가 먼저 오거나 같다

// 표기방식 구분하지 않음
console.log(
  '안녕하세요~' === "안녕하세요~",
  '안녕하세요~' === `안녕하세요~`,
  "안녕하세요~" === `안녕하세요~`,
); // true true true

// 대소문자 구분
console.log('Hello!' === 'hello!'); // false

// ==, != - 자료형 구분하지 않음 ⭐️ 암묵적 타입 변환
console.log(
  '1' == '1',
  '1' == 1,
  '1' == 2
); // true true false

console.log(
  '1' != '1',
  '1' != 1,
  '1' != 2
); // false false true

// ===, !== - 자료형 구분
console.log(
  '1' === '1',
  '1' === 1,
  '1' === 2
); // true false false

console.log(
  '1' !== '1',
  '1' !== 1,
  '1' !== 2
); // false true false

// <, <=, >, >= - 사전순 비교
console.log(
  'ABC' < 'abc',
  'apple' <= 'banana',
  '가나다' > '라마바',
  '안녕' >= '안녕'
); // true true false true

// 숫자 문자열 관련 주의!
console.log(
  100 > 12, // 숫자는 그 자체로 비교
  '100' > '12', // 문자는 사전순으로 비교
  '100' > 12, // 문자와 숫자를 비교하면 문자를 숫자로 변환
); // true false true

// 연결
// x + y : x와 y를 이어붙인 값을 반환
// x += y : x에 y를 이어붙이고 그 결과를 반환

// + 연산자 이항연산자
let str1 = 'Hello';
// 값 반환
let str2 = ' ' + 'World';

console.log(str1); // Hello
console.log(str2); // ' 'World

let str3 = str1 + str2;

console.log(str3); // Hello World

// 부수효과 없음(변화 없음)
console.log(str1); // Hello
console.log(str2); // ' 'World

// 값 반환
console.log(str3 + '!!!' + ' ' + '😀'); 
// Hello World!!! 😀

// 부수효과 없음(변화 없음)
console.log(str3); // Hello World

// += 연산자 할당연산자
str1 = '헬로';
str1 += ' 월드';

// 부수효과(변화 있음)
console.log(str1); // 헬로 월드

// 값 반환
str2 = str1 += '~~~';

console.log(str2); // 헬로 월드~~~

// 부수효과(변화 있음)
console.log(str1); // 헬로 월드~~~

// 오류. 왼쪽 값은 부수효과의 대상(변수)이어야 함
// let str = '헬로' += '월드'; // 변수에만 사용 가능

// 오류. 왼쪽 값은 부수효과의 대상(변수)이어야 함
const STR = '안녕~';
// STR += ' 반가워요!'; // 상수에 사용 불가

// 다수의 문자열 이어붙이기
const lyric1 = '노는 게 제일 좋아'
+ '\n친구들 모여라'
+ '\n언제나 즐거워'
+ '\n개구쟁이 뽀로로';

console.log(lyric1);
// 노는 게 제일 좋아
// 친구들 모여라
// 언제나 즐거워
// 개구쟁이 뽀로로

let lyric2 = '눈 덮인 숲 속 마을';
lyric2 += '\n꼬마펭귄 나가신다';
lyric2 += '\n언제나 즐거워';
lyric2 += '\n뽀롱뽀롱뽀롱뽀롱 뽀로로';

console.log(lyric2);
// 눈 덮인 숲 속 마을
// 꼬마펭귄 나가신다
// 언제나 즐거워
// 뽀롱뽀롱뽀롱뽀롱 뽀로로

// 다른 자료형과 더하면 문자열 반환
let result = '안녕' + 1 + true;

console.log(result); // 안녕1true
console.log(typeof result); // string

result += null;
result += undefined;

console.log(result); // 안녕1trunnullundefined
console.log(typeof result); // string