// 자료형 - 데이터의 종류

// 자바스크립트의 원시 자료형
// 담백하게 값 하나만 담는 단순 자료형
const a = true, b = 123.45, c = '안녕하세요!';

// typeof 연산자: 뒤에 오는 값의 자료형을 반환
// 반환한다는 것 - 해당 코드 부분을 반환값으로 바꿔 쓸 수 있다는 것 
console.log(a, typeof a); // true, boolean
console.log(b, typeof b); // 123.45, number
console.log(c, typeof c); // 안녕하세요!, string

let d;
console.log(d, typeof d); // undefined, undefined

d = null;
console.log(d, typeof d); // null, object

const e = Symbol('hello');
console.log(typeof e); // symbol


// 불리언 

let isEmployed = true;
let isMarried = false;

console.log('직업 있음:', isEmployed); // 직업있음: true
console.log('기혼:', isMarried); // 기혼: false
// "기다" / "아니다"
// 참 또는 거짓 (true or false) - 상반된 둘 중 하나의 값을 담을 수 있음
// 직접 할당되기보다는 반환값으로 프로그램 곳곳에서 활용됨

const a = 1 > 2;
const b = 1 < 2;

console.log(a, typeof a); // false, boolean
console.log(b, typeof b); // true, boolean

// 숫자 

let integer = 100;
let real = 12.34;
let negative = -99;

console.log(integer, real, negative);
// 자바스크립트에는 정수와 실수의 구분이 없음 - 정수도 실수로 처리
// 정수는 2^53 - 1까지 안정적으로 표현 가능 - 더 큰 정수는 이후 배울 BigInt로

// 문자열 
let first_name = "Brendan";
let last_name = 'Eich';
let description = `미국의 프로그래머로
자바스크립트 언어를 만들었으며
모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);
// "글자(들)"
// 큰따옴표, 작은따옴표, 또는 백틱으로 둘러싸인 텍스트 데이터
// 🔗 유니코드 문자 - 전 세계의 모든 문자 표현 가능

console.log(
  typeof (typeof true),
  typeof (typeof 123.45),
  typeof (typeof 'Hello'),
); // typeof의 반환값은 문자열


// undefined

let x;
console.log(typeof x); // undefined
// 값이 부여되지 않은 상태라는 의미
// 그러나 undefined도 값임 많은 다른 언어들과 다른 점
// 아무 것도 반환하지 않는 구문 - undefined 반환

// null

let x;
console.log('값 넣기 전', typeof x);
// '값 넣기전', object
x = null;
console.log('null값 넣은 후', typeof x);
// 'null값 넣은 후', null

// 의도적인 빈 값을 의미
// 그러나 null 역시 값임. - "비어있다"란 의미의 값
// object(객체) 등이 들어있거나 반환되어야 하지만 없을 때 주로 사용

// "있어봐, 뭐 들어올 자리야" / "뭘 줘야 되는 거 아는데 줄 게 없어"
// 객체 생성이 실패한 경우 등에 대신 반환
// 주의! typeof가 object를 반환 초기 오류 - 객체는 원시타입이 아님
let x = null;
console.log(typeof null, typeof x);

// null 여부는 아래와 같이 확인할 것
console.log(x === null); // true