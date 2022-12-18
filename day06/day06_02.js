// 객체의 스프레드와 디스트럭쳐링
// 스프레드

// const class1 = {
//   x: 1, y: 'A', z: true  
// };

// const class2 = {...class1};

// 아래의 참조복사 코드와 다름
// const class2 = class1;

// console.log(class2); // {x: 1, y: 'A', z: true}

// 특정 객체의 프로퍼티를 포함하는 다른 객체 생성에 유용
const class1 = {
  a: 1, b: 'A', c: true
};
const class2 = {
  d: { x: 10, y: 100 }, e: [1, 2, 3]
};
const class3 = {
  ...class1, z: 0
}
const class4 = {
  ...class2, ...class3, ...class2.d
}

console.log(class3); // { a: 1, b: 'A', c: true, z: 0 }
console.log(class4);
// {
//   d: { x: 10, y: 100 },
//   e: [ 1, 2, 3 ],
//   a: 1,
//   b: 'A',
//   c: true,
//   z: 0,
//   x: 10,
//   y: 100
// }

// 중복되는 프로퍼티는 뒤의 것이 덮어씀
const class5 = {
  ...{ a: 1, b: 2 },
  ...{ b: 3, c: 4, d: 5 },
  ...{ c: 6, d: 7, e: 8 }
}
console.log(class5); // { a: 1, b: 3, c: 6, d: 7, e: 8 }

// 복사의 깊이
const class6 = {
  x: 1,
  y: { a: 2 },
  z: [3, 4]
};

const class7 = { ...class6 };
class6.x++;
class6.y.a++;
class6.z[0]++;

console.log(class6); // { x: 2, y: { a: 3 }, z: [ 4, 4 ] }
console.log(class7); // { x: 1, y: { a: 3 }, z: [ 4, 4 ] }

// 해당 객체 바로 안쪽의 원시값은 복제하지만 참조값은 같은 값을 가리킴
// 원시값만 있는 객체만 값에 의한 복사 - 얕은 복사


// 디스트럭쳐링
// 문법
// const obj1 = {
//   x: 1, y: 2, z: 3
// };

// const x = obj1.x;
// const y = obj1.y;
// const z = obj1.z;

// console.log(x, y, z); // 1, 2, 3

// 디스트럭쳐링으로 간략화
const obj1 = {
  x: 1, y: 2, z: 3
};

// const {x, y, z} = obj1;

// console.log(x, y, z); // 1, 2, 3

// 일부만 가져오는 것도 가능
const {x, z} = obj1;
console.log(x, z); // 1, 3


// 필요한 프로퍼티 값을 짧은 코드로 변수/상수에 담을 때
const array1 = [1, 2, 3, 4, 5];

// const length = array1.length;
const { length } = array1;

console.log(length); // 5

// 함수 인자값의 가독성을 위해 객체를 사용할 때
// 인자가 많은 함수 - 좋지 않음!
function introduce(name, age, job, married) {
  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}
// 여러 인자, 순서 중요 - 가독성 떨어짐
introduce('김철수', 28, '개발자', false); // 제 이름은 김철수, 나이는 28세구요. 직업은 개발자, 미혼입니다.

// 인자를 하나의 객체로 묶어 받음 
function introduce(person) {
  console.log(`제 이름은 ${person.name}, `
    + `나이는 ${person.age}세구요. `
    + `직업은 ${person.job}, `
    + `${person.married ? '기혼' : '미혼'}입니다.`
  )
}
// 가독성 좋음, 프로퍼티명만 제대로 입력하면 순서 무관
const person1 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O' // 추가 인자 무관
};

introduce(person1); // 제 이름은 김철수, 나이는 28세구요. 직업은 개발자, 미혼입니다.

// 디스트럭쳐링 (적절히 활용)
function introduce({age, married, job, name}) {
  // 순서 무관
  // 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄

  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}

const person2 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O'
};

introduce(person2); // 제 이름은 김철수, 나이는 28세구요. 직업은 개발자, 미혼입니다.