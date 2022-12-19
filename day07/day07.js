// 전역 객체와 표준 빌트인 객체

// 전역객체
// 코드로 선언하거나 하지않아도 전역 범위에 항상 존재하는 객체

console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// console.log(
//   this === window, // true
//   window === self, // true
//   self === frames // true
// );

// 전역 객체에 포함되는 것
// 표준 빌트인 객체
// 호스트 객체 - 환경에서 제공하는 기타 객체들 : 브라우저의 Web API, Node.js API 등
// (브라우저 한정) - 전역으로 설정된 var 변수와 전역 함수
var myGlobalVar = 1;
const myGlobalConst = 1;

function myGlobalFunc () {};

console.log(
  globalThis.myGlobalVar,
  globalThis.myGlobalConst,
  globalThis.myGlobalFunc
); // undefined, undefined, undefined


// 표준 빌트인 객체
// ECMAScript 사양에 정의된 객체들 - 어떤 환경에서든 사용 가능
// 전역 프로퍼티로 제공됨 - globalThis등을 붙이지 않고 바로 사용 가능

// Node.js에서는 globalThis 출력시 표준 빌트인 객체들은 출력하지 않음
console.log(globalThis);

// 그러나 요소들로 갖고 있는 것은 확인 가능
console.log(globalThis.Infinity); // Infinity
console.log(globalThis.isNaN); // [function: isNaN]
console.log(globalThis.Object); // [function: Object]


// 래퍼 객체
const str = 'abcde';
console.log(
  str.length, // 5
  str.toUpperCase(), // ABCDE
  str[0] // a
);
// 원시값이 어떻게 프로퍼티를 갖고 있을까?

const str1 = new String('abcde');
const num = new Number(123.4567);
const bool = new Boolean(true);

console.log(typeof str1, str1); // [String: 'abcde']
console.log(typeof num, num); // [Number: 123.4567]
console.log(typeof bool, bool); // [Boolean: true]

// Number, String, Boolean 등은 표준 빌트인 객체에 속하는 래퍼 객체
// 원시값을 필요시 래퍼 객체로 감싸서 wrap 그것의 인스턴스로 만들어 기능 실행
// 원시값에서 객체를 사용하듯 해당 래퍼 객체의 프로퍼티를 호출할 때 래핑이 발생

// 해당 기능 사용 후에는 원시 객체로 돌아감 - 메모리 절약
const str2 = 'abcde'; 
console.log(str2.length); // 5
console.log(typeof str2, str2); // string, abcde

// valueOf 함수 - 래퍼 객체의 인스턴스에서 원시값 반환
const str3 = new String('abcde');
const num1 = new Number(123.4567);
const bool1 = new Boolean(true);

console.log(str3.valueOf()); // abcde
console.log(num1.valueOf()); // 123.4567
console.log(bool1.valueOf()); // true