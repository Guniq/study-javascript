// for 루프

// 골호 안의 3개의 식에 따른 반복수행
// 변수의 선언 및 할당
// 종료조건. 부재 시 항상 참
// 참일 시 블록 안의 코드 이후 실행문

// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
  console.log(i);
  // i++ : 0, 1, 2, 3, 4
}

for (let i = 0; i < 5;) {
  console.log(++i); // ++i로 바꿔볼 것
  // i++ : 0, 1, 2, 3, 4
  // ++i : 1, 2, 3, 4, 5
}

for (let i = 10; i >= 0; i-= 2) {
  console.log(i); 
  // 10, 8, 6, 4, 2, 0
}

// 중첩 사용
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
    // 1 * 1 = 1, 1 * 2 = 2, ... 9 * 9 = 81
  }
}

// 둘 이상의 변수 사용
for (let x = 0, y = 10; x <= y; x++, y--) {
  console.log(x, y);
  // 0 10, 1 9, 2 8, 3 7, 4 6, 5 5
}

// 무한루프 실행시 브라우저가 멈출 수 있음
let x = 0;

// for (;;) {
//   console.log(x);
// }
console.log('출력 안됨');

// for (let i = 0; i < 10; i++) {
//   console.log(i--);
// }
console.log('출력 안됨');

// 객체와 배열의 for문
// 객체: for (키 이름 in 객체명) - 객체의 키들을 순서대로 반환
const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}

for (const key in lunch) { // 변할 것이 아니므로 const 사용
  console.log(key, ':', lunch[key])
}
// 키의 이름은 자유롭게 사용 가능
for (const k in lunch) {
  console.log(k, ':', lunch[k])
}

// 배열: for (항목 of 배열명) - 배열의 항목들을 순서대로 반환
const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
  // 1 가나다 false null
}
for (const el of list) {
  console.log(el);
  // 1 가나다 false null
}
// 문자열 역시 이터러블이므로 사용 가능
for (const letter of '안녕하세요~') {
  console.log(letter);
}

// for ... of문의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 변수(i)를 사용하므로 위험요소 존재
for (let i = 0; i < numbers.length; i++) {
  // 이곳에 i를 변경하는 코드가 들어간다면...
  console.log(numbers[i]);
  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) {
  console.log(num);
  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // 복사된 값. let 사용 주목
  numbers2.push(num + 1);
  // number2값 2증가
}
console.log(numbers1, numbers2);
// [1, 2, 3, 4,  5, 6, 7, 8, 9, 10] [3, 4,  5,  6,  7, 8, 9, 10, 11, 12]


for (let i = 0; i < numbers1.length; i++) {
  numbers1[i]++; // 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
}
// numbers1의 값이 1씩 증가함
console.log(numbers1, numbers2);


// continue와 break
// continue - 한 루프를 건너뜀
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
  // 3의 배수를 빼고 출력
}
console.log('for 루프 종료');

// break - 블록을 종료하고 빠져나옴
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
  // 5 달성시 for문을 빠져나옴
}
console.log('for 루프 종료');


// label - 중첩된 반복문을 명명하여 continue 또는 break에 사용
outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}