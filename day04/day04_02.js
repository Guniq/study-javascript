// 매개변수

// 함수의 매개변수 갯수를 넘어가는 인수
// 오류를 일으키지 않고 무시됨
function add(a, b){
  return a + b;
}
console.log(
  add(1, 3), // 4
  add(1, 3, 5), // 4
  add(1, 3, 5, 7) // 4
);

// 기본값 매개변수
function add(a = 2, b = 4){
  console.log(`${a} + ${b}`); // 2 + 4, 1 + 4, 1 + 3
  return a + b;
}

console.log(
  add(), // 6
  add(1), // 5
  add(1, 3) // 4
);


// arguments - 함수내에서 사용가능한 지역 변수
// 배열의 형태를 한 객체 - 배열은 아니지만 사실상 배열처럼 동작
// 함수 호출 시 전달된 모든 인수들을 배열 형태로 가짐
function add(a, b) {
  console.log('1.', arguments); // [Arguments] { '0': 1, '1': 3, '2': 5, '3': 7 }
  console.log('2.', arguments[0]); // 1
  console.log('3.', typeof arguments); // object
  return a + b;
}

console.log(
  '4.', add(1, 3, 5, 7) // 4
);

function add(a, b) {
  for (const arg of arguments) {
    console.log(arg); // 1, 3, 5, 7
  }
  return a + b;
}
console.log(
  add(1, 3, 5, 7) // 4
);
// for ... of가 가능한 이유: iterable이기 때문
// 화살표 함수에서는 arguments 사용 불가! 화살표 함수로 바꾸어 실행해 볼 것

function getAverage() {
  let result = 0;
  for (const num of arguments) {
    result += num;
  }
  return result / arguments.length;
}

console.log(
  getAverage(1, 4, 7),
  getAverage(24, 31, 52, 80)
); // 4, 46.75


// 타입에 안전한 버전
function getAverage() {
  let result = 0, count = 0;
  for (const num of arguments) {
    if (typeof num !== 'number') continue; // 숫자가 아닐때 continue
    result += num;
    count++;
  }
  return result / count;
}

console.log(
  getAverage(2, '가', 8, true, 5)
); // 5


const add2 = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function combineArms () {
  return (x, y) => {
    let result = x;
    for (const arm of arguments) {
      if (typeof arm !== 'function') continue;
      result = arm(result, y);
    }
    return result;
  }
}

const add_mul = combineArms(add2, mul, 1, true);
const add_mul_sub = combineArms(add2, mul, sub);
const add_mul_sub_div = combineArms(add2, mul, sub, div);

// 익명 함수 사용됨
const add_mul_sub_div_pow
  = combineArms(add2, mul, sub, div, (x, y) => x ** y);

console.log(
  add_mul(8, 3), // 33
  add_mul_sub(8, 3), // 30
  add_mul_sub_div(8, 3), // 10
  add_mul_sub_div_pow(8, 3) // 1000
);
  

// 나머지 변수
// 특정 매개변수들 뒤에 정해지지 않은 수의 매개변수들을 받을 때
// 마지막 인자로만 사용 가능
// arguments와는 달리 실제 배열임

console.log(
  '3.',
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅

function classIntro(classNo, teacher, ...children){
  console.log('1.', children); // [ '영희', '철수', '보라' ]
  console.log('2.', arguments); // [Arguments] { '0': 3, '1': '김민지', '2': '영희', '3': '철수', '4': '보라' }

  let childrenStr = '';
  for(const child of children){
    if(childrenStr) childrenStr += ', ';
    childrenStr += child;
  }
  return `${classNo}반의 선생님은 ${teacher},`
  + `학생들은 ${childrenStr}입니다.`
}


const add3 = (a, b) => a + b;
const sub3 = (a, b) => a - b;
const mul3 = (a, b) => a * b;
const div3 = (a, b) => a / b;

function doMultiArms(x, y, ...arms){
  let result = x;
  for(const arm of arms){
    if(typeof arm !== 'function') continue;
    result = arm(result, y);
  }
  return result;
}
console.log(
  doMultiArms(8, 3, add, mul, 1, true), // 33
  doMultiArms(8, 3, add, mul, sub), // 30
  doMultiArms(8, 3, add, mul, sub, div), // 10
  doMultiArms(8, 3, add, mul, sub, div, (x, y) => x ** y) // 1000
);


