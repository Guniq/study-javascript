// 일급 객체

// 함수를 변수와 같이 다루는 언어에 있는 개념
// 자바스크립트의 함수도 일급 객체 함수는 기본적으로 객체

// 함수의 자료형
function addNumbers(a, b){return a + b;}
console.log(typeof addNumbers); // function

// 일급 객체의 특성
// 상수 또는 변수에 할당될 수 있음
// 다른 함수에 인자로 전달될 수 있음
// 다른 함수의 결과값으로서 반환될 수 있음

// 할당
function isOddNum(number){
  console.log(
    (number & 2 ? '홀' : '짝')
    + '수입니다.'
  );
  return number & 2 ? true : false;
};
const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의

console.log(checkIfOdd(23)); // 홀수입니다, true

let x = 7, y = 3;

let func1 = (a, b) => a + b;
let func2 = (a, b) => a - b;
console.log(func1(x, y), func2(x, y)); // 10, 4

func1 = func2
console.log(func1(x, y), func2(x, y)); // 4, 4
// 함수도 객체와 배열처럼 참조타입


// 객체와 배열의 값으로도 할당 가능
let person = {
  name : '홍길동',
  age : 30,
  married : true,
  introduce : function(formal){
    return formal
    ? '안녕하십니까. 홍길동 대리라고 합니다.'
    : '안녕하세요, 홍길동이라고 해요.';
  }
};

console.log(person.introduce(true)); // 안녕하십니까. 홍길동 대리라고 합니다.
console.log(person.introduce(false)); // 안녕하세요, 홍길동이라고 해요.

let arithmetics = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b
];

for(arm of arithmetics){
  console.log(arm(5, 3));
}
// 객체의 함수 프로퍼티를 메서드 method라고 불렀음


// 객체에 함수 프로퍼티를 포함할 때 기억할 것
person = {
  name : '홍길동',
  age : 30,
  married : true,
  introduce : function(){
    return `저는 ${this.name}, ${this.age}살이고`
    + `${this.married ? '기혼' : '미혼'}입니다.`;
  }
}
console.log(person.introduce());

// 객체의 다른 프로퍼티에 접근: this 사용

// 객체 리터럴의 프로퍼티로는 this 사용하는 화살표 함수 권장하지 않음
// 화살표 함수로 바꾸고 실행해보기
// 자세한 내용은 이후 this 섹션에서 다룰 것


// 인자로 전달
// 함수가 다른 함수를 인자로 전달받음
// 전달받는 함수 : 고차 함수 highter-order function
// 전달되는 함수 : 콜백 함수 callback function

let list = [1, 2, 3, 4, 5];

function doInArray(array, func){
  for(item of array){
    func(item);
  }
}
// console.log - console이란 객체에서 log란 키에 할당된 함수
doInArray(list, console.log); // 1, 2, 3, 4, 5

// doInArray : 고차함수
// console.log : 콜백함수

function doNTimes (func, repeat, x, y) { // doNTimes(x * y, 3, 5, 2)
  let result = x;
  for (i = 0; i < repeat; i++) {
    result = func(result, y);
  }
  return result;
}

console.log(
  doNTimes((x, y) => x * y, 3, 5, 2), // 40
  doNTimes((x, y) => x / y, 3, 5, 2), // 0.625
);
// 인자로 전달된 함수들 : 변수나 상수에 할당되지 않아 이름이 없음 - 익명 함수 anonymous function

// calculate
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// evaluate
const isOdd = (number) => !!(number % 2);
const isPositive = (number) => number > 0;

function calcAndEval (calc, eval, x, y) {
  return eval(calc(x, y));
}

console.log(
  calcAndEval(add, isOdd, 5, 7), // false
  calcAndEval(subtract, isPositive, 5, 7), // false
  calcAndEval(multiply, isOdd, 5, 7) // true
);


// 결과값으로 반환
function getIntroFunc (name, formal) {
  return formal
  ? function () {
    console.log(`안녕하십니까, ${name}입니다.`);
  } : function () {
    console.log(`안녕하세요~ ${name}이라고 해요.`);
  }
}
const hongIntro = getIntroFunc('홍길동', true); 
const jeonIntro = getIntroFunc('전우치', false); 
hongIntro(); // 안녕하십니까, 홍길동입니다.
jeonIntro(); // 안녕하십니까, 전우치라고 해요.


const add2 = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function comb3ArmFuncs(armFunc1, armFunc2, armFunc3) {
  return (x, y) => armFunc3(armFunc2(armFunc1(x, y), y), y); 
}
const add_mul_sub = comb3ArmFuncs(add2, mul, sub);
const mul_add_div = comb3ArmFuncs(mul, add2, div);
const div_add_mul = comb3ArmFuncs(div, add2, mul);

console.log(
  add_mul_sub(10, 4), /// (10 + 4) * 4 - 4 => 52  
  mul_add_div(10, 4), // ((10 * 4) + 4) / 4 => 11 
  div_add_mul(10, 4) // ((10 / 4) + 4) * 4 => 26
);


// 커링 : 필요한 인자보다 적은 수의 인자를 받으면, 나머지 인자를 인자로 받는 다른 함수를 반환

// 기존의 코드
function addMultSubt(a, b, c, d){
  return (a + b) * c - d;
}
const addMultSubt2 = (a, b, c, d) => (a + b) * c - d;

console.log(
  addMultSubt(2, 3, 4, 5),
  addMultSubt2(2, 3, 4, 5)
);

// 커링으로 작성된 함수
function curryAddMultSubt (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return (a + b) * c - d;
      }
    }
  }
}
const curryAddMultSubt2 = a => b => c => d => (a + b) * c - d;
console.log(
  curryAddMultSubt(2)(3)(4)(5),
  curryAddMultSubt2(2)(3)(4)(5)
);

const curryAddMultSubtFrom2 = curryAddMultSubt(2);
const curryMultSubtFrom5 = curryAddMultSubt(2)(3);
const currySubtFrom20 = curryAddMultSubt(2)(3)(4);

console.log(curryAddMultSubtFrom2);
console.log(curryMultSubtFrom5);
console.log(currySubtFrom20);
// 화살표 함수로 바꾸어 다시 실행해 볼 것
console.log(
  curryAddMultSubtFrom2(3)(4)(5),
  curryMultSubtFrom5(4)(5),
  currySubtFrom20(5)
);
