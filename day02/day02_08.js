// 객체와 배열

// 객체 미리보기
// 자바스크립트에서 원시 타입이 아닌 모든 데이터는 근본적으로 객체
// 복합적인 정보를 프로퍼티 property - (키와 값의 조합)으로 저장하는 자료형

// 형식
// const objName = {
//   key1: value1,
//   key2: value2,
//   ...
// };

const person1 = {
  name: '김철수',
  age: 25,
  married: false
};

console.log(typeof person1); // object
console.log(person1); // { name: '김철수', age: 25, married: false }

// 프로퍼티 접근
// 속성값에 접근하는 두 방법
console.log(
  person1.name,
  person1.age,
  person1.married
); // 김철수 25 false

console.log(
  person1['name'], // 속성명을 string으로
  person1['age'],
  person1['married'],
); // 김철수 25 false

// 존재하지 않는 키로 접근시 undefined 반환
console.log(person1.birthdate); // undefined
console.log(person1['job']); //undefined

// (키) in (객체) - 특정 키 포함 여부 확인
console.log(
  'age' in person1,
  'job' in person1
); // treu false

// 프로퍼티 수정 및 추가
// 특정 프로퍼티의 값 변경
person1.age = 26;
person1['married'] = true

console.log(person1); // { name: '김철수', age: 26, married: true }
// const임에도 그 내용은 수정할 수 있음에 주목!

// 배열 미리보기
const winners = [12, 592, 7, 48];
const weekdays = ['월', '화', '수', '목', '금', '토', '일'];

// 자료형에 관계없이 한 배열에 넣을 수 있음
const randoms = ['홍길동', -24, true, null, undefined];

console.log(typeof winners); // object
console.log(winners, weekdays, randoms);
// [ 12, 592, 7, 48 ] ['월', '화','수', '목','금', '토', '일'] [ '홍길동', -24, true, null, undefined ]

// 값과 길이 접근
// 특정 순서의 값에 접근하는 법 (0부터 시작)
console.log(winners[0], weekdays[6], randoms[3]);
// 12, 일, null

// 배열의 길이(요소의 갯수)를 얻는 법
console.log(winners.length, weekdays.length, randoms.length); // 4, 7, 5

// 마지막 요소 얻기
console.log(winners[winners.length - 1]); // 48

// 수정 및 추가
const numbers = [1, 2, 3];

// 특정 위치의 값 수정
numbers[2] = 5;

console.log(numbers); // 1, 2, 5

// 맨 끝에 값 추가
numbers.push(10);

console.log(numbers); // 1, 2, 5, 10

// 배열의 범주 너머로 접근시 undefined 반환
const unde = [12, 592, 7, 48];
console.log(unde[unde.length]); // undefined

// 중첩 사용 가능
const person2 = {
  name: '김달순',
  age: 23,
  languages: ['Korean', 'English', 'French'],
  education: {
    school: '한국대',
    major: ['컴퓨터공학', '전자공학'],
    graduated: true,
  }
};

console.log(person2.languages[2]); // French
console.log(person2.education.graduated); // true

const groups = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];

const weapons = [
  { name: '롱소드', damage: 30, design: ['화룡검', '뇌신검'] },
  { name: '활', damage: 12 },
  { name: '워해머', damage: 48 },
];

console.log(groups[1][2]); // 5
console.log(weapons[2].damage); // 48
console.log(weapons[0].design[0]); // 화룡검