// while과 do while

// while - 조건이 참인 동안 반복수행
let x = 0;

while (x < 10) {
  console.log(x++); // ++를 빼면 무한루프
}

// 인위적인 무한반복에 널리 쓰이는 코드
// while (true) {
//   console.log('무한반복');
// }

// break문으로 무한반복 탈출 가능
x = 0;

while (true) {
  if (x++ >= 5) break; // // 5에 달성시 while문을 빠져나옴
  console.log(x);
}
// 1 ~ 5 출력

// continue와 break 사용
// 1, 3, 5, 7을 의도한 코드. 그러나...
// ⚠️ 무한루프! 왜일까요?
// x = 0;
// while (x < 14) {
//   if (x % 2 === 0) continue;
//   if (x > 7) break;
//   console.log(x++);
// }

// 짧게 짠 수정 코드
x = 0;
while (x < 14) {
  if (x++ % 2 === 0) continue;
  if (x > 8) break;
  console.log(x - 1); // 1, 3, 5, 7
}

// 가독성 위주로 짠 코드
// 코드에 의도가 드러나도록
x = 0;
while (x < 14) {
  const toContinue = x % 2 === 0; // 2의 배수는 continue로 거르고 동작
  const toBreak = x > 7; // 7이되면 while문을 빠져나감
  const xNow = x++;

  if (toContinue) continue;
  if (toBreak) break;

  console.log(xNow); // 1, 3, 5, 7
}

// 더 짧고도 직관성을 유지한 코드의 예
x = 0;
while (x < 14) {
  const xNow = x++;

  if (xNow % 2 === 0) continue;
  if (xNow > 7) break;

  console.log(xNow);
}

// do while - 일단 수행하고 조건을 평가
x = 12;

do {
  console.log(x++);
} while (x < 15){
  console.log("while");
}