// String 객체

// 생성자 함수
const strObj1 = new String();
const strObj2 = new String('Hello World!');

console.log(strObj1); // [String: '']
console.log(strObj2); // [String: 'Hello World!']

console.log(strObj1.valueOf(), strObj1.toString()); // Hello World
console.log(strObj2.valueOf(), strObj2.toString()); // Hello World
// valueOf 또는 toString 메서드로 문자열 원시값 반환


const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]);
const fromObj = new String({a: 1});

console.log(typeof fromNum, fromNum); // object [String: '123']
console.log(typeof fromBool, fromBool); // object [String: 'true']
console.log(typeof fromArr, fromArr); // object [String: '1,A,false']
console.log(typeof fromObj, fromObj); // object [String: '[object Object]']
// 다른 타입들도 감쌀 수 있음 - 문자열로 변환한 값을 가진 String 객체 반환

// new 없이 사용하면
const str1 = String('Hello World!');
const str2 = String(123);
const str3 = String(true);
const str4 = String({x: 1, y: 2}); // [object Object]
const str5 = String([1, 2, 3]); // 1,2,3

console.log(typeof str1, str1); 
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4);
console.log(typeof str5, str5);
// 생성자로서가 아닌 String 함수는 주어진 인자를 문자열로 변환하여 반환


// 유사 배열 객체
let myStr = '안녕하세요!';

console.log(
  myStr.length,
  myStr[0],
  myStr[myStr.length - 1] // 제일 끝 글자
); // 6, 안, !

myStr[myStr.length - 1] = '?';
console.log(myStr); // 배열과 달리 그대로 안녕하세요! 출력

for (const letter of myStr) {
  console.log(letter);
}

// length 프로퍼티: 글자 수 반환
// [] 안에 인덱스 숫자를 넣어 ~번째 글자 읽기(만) 가능

// String은 원시값
// [] 접근 또는 인스턴스 메서드로 특정 글자만 수정하는 것은 불가능한 이유
// 수정하려면 변수 값 자체를 다른 문자열로 대체해야...


// 주요 인스턴스 메서드
// toUpperCase, toLowerCase
// 라틴어 문자를 모두 대문자/소문자로 변경하여 반환
const word = 'Hello, World.';
console.log(
  word.toUpperCase(), // HELLO, WORLD.
  word.toLowerCase() // hello, world.
); 

console.log(word); // Hello, World.
// 기존의 문자열은 바꾸지 않음!

// 흔한 활용예
function areSameWords (word1, word2) {
  return word1.toLowerCase() === word2.toLowerCase();
}

console.log(
  areSameWords('Hello', 'hello'), // true
  areSameWords('가나다', '가나다'), // true
  areSameWords('ABC', 'DEF') // false
);

// charAt, at
// 인자로 주어진 인덱스의 문자 반환

// charAt
console.log(
  'Hello World'.charAt(0), // H
  '안녕하세요~'.charAt(2) // 하
); 

// at
// 신기능, 배열에서도 사용
// 음수로 뒤에서부터 접근 가능(-1 부터)
console.log(
  '안녕하세요~'.at(1), // 녕
  '안녕하세요~'.at(-1) // ~
);

// indexOf, lastIndexOf
// 인자로 주어진 문자열이 앞, 또는 뒤에서 처음 나타나는 인덱스 반환
// 포함되지 않을 시 -1 반환
const word1 = '반갑습니다!';
console.log (
  word1.indexOf('습'), // 2
  word1.lastIndexOf('습') // 2
);

const word2 = '아니, 하나마나한 걸 왜 하나?';
console.log (
  word2.indexOf('하나'), // 4
  word2.lastIndexOf('하나') // 14 
);

console.log(
  '가나다라마'.indexOf('하'), // -1
  '가나다라마'.lastIndexOf('하') // -1
);

// includes, startsWith, endsWith
// 인자로 주어진 문자열 포함( 아무곳에 / 맨 앞에 / 맨 끝에 ) 여부 불리언으로 반환
const sentence = '옛날에 호랑이 한 마리가 살았어요.';

for (const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']) {
  console.log(
    'includes', word, sentence.includes(word) 
  );
  console.log(
    'startsWith', word, sentence.startsWith(word) 
  );
  console.log(
    'endsWith', word, sentence.endsWith(word) 
  );
  console.log('- - - - -');
}
// includes 옛날에 true
// startsWith 옛날에 true
// endsWith 옛날에 false
// - - - - -
// includes 호랑이 true
// startsWith 호랑이 false
// endsWith 호랑이 false
// - - - - -
// includes 살았어요. true
// startsWith 살았어요. false
// endsWith 살았어요. true
// - - - - -
// includes 나무꾼 false
// startsWith 나무꾼 false
// endsWith 나무꾼 false
// - - - - -

// search
// 인자로 받은 정규표현식과 일치하는 첫 부분의 인덱스 반환
// 없을 시 -1 반환
console.log(
  '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/), // 4
  '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/) // -1 (0 ~ 9 사이에 숫자가 없어서 -1 반환)
);

// substring
// 인자로 전달받은 인덱스를 기준으로 자른 문자열 반환
const word4 = 'ABCDEFGHIJKL';
const part = word4.substring(4, 8);

console.log(word4, part); // ABCDEFGHIJKL, EFGH

const word5 = 'ABCDEFGHIJKL';

console.log(
  word5.substring(4)
); // EFGHIJKL

console.log(
  word5.substring(-1),
  word5.substring(4, 100),
  word5.substring(100)
); // ABCDEFGHIJKL EFGHIJKL 
// 인자를 하나만 넣으면 해당 인덱스부터 끝까지
// 음수나 범위 외 숫자는 범위 내 최소/최대 숫자로

const sentence1 = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord = sentence1.substring(
  0, sentence1.indexOf(' ') // 공백이 있을때까지
);
const lastWord = sentence1.substring(
  sentence1.lastIndexOf(' ') + 1, sentence1.length
);

console.log(firstWord, lastWord); // 옛날에 살았어요.

// slice
// substring과 같으나 음수로 뒤에서부터 자를 수 있음
const word6 = 'ABCDEFGHIJKL';
console.log(
  word6.substring(4, 8),
  word6.slice(4, 8),
); // EFGH, EFGH

console.log(
  word6.substring(-4),
  word6.slice(-4)
); // ABCDEFGHIJKL, IJKL

const sentence2 = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord2 = sentence2.slice(
  0, sentence2.indexOf(' ')
);

const lastWord2 = sentence2.slice(
  sentence2.lastIndexOf(' ') + 1 - sentence2.length
);

console.log(firstWord2, lastWord2); // 옛날에 살았어요.

// split
// 인수로 주어진 문자열이나 정규표현식으로 분리하여 배열을 반환
console.log(
  '010-1234-5678'.split('-'), // [ '010', '1234', '5678' ] // -를 기준으로 분리
  'ABC1DEF2GHI3JKL'.split(/[0-9]/) // [ 'ABC', 'DEF', 'GHI', 'JKL' ] // 0 ~ 9 사이의 숫자를 기준으로 분리
)

// 인자로 빈 문자열을 넣거나 인자 생략시
const word7 = '안녕하세요';

console.log(
  word7.split(''), // [ '안', '녕', '하', '세', '요' ]
  word7.split() // [ '안녕하세요' ]
)

const word8 = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';

console.log(
  word8.split(' ', 2), // [ '하나', '하면' ]
  word8.split(' ', 4) // [ '하나', '하면', '할머니가', '지팡이' ]
)
// 두 번째 인자로 배열의 최대 길이 지정 가능

const sentence3 = '옛날에 호랑이 한 마리가 살았어요.';
const splitted = sentence3.split(' ');

const firstWord3 = splitted[0];
const lastWord3 = splitted[splitted.length - 1];

console.log(firstWord3, lastWord3); // 옛날에 살았어요.


// trim, trimStart, trimEnd
// 앞뒤의 공백 제거하여 반환
const word9 = '  Hello World!  ';
console.log(`--${word9}--`); // --  Hello World!  --
console.log(`--${word9.trim()}--`); // --Hello World!--
console.log(`--${word9.trimStart()}--`); // --Hello World!  --
console.log(`--${word9.trimEnd()}--`); // --  Hello World!--
// 중간의 공백은 제거하지 않음

// repeat
// 인자로 주어진 정수만큼 문자열을 반복하여 반환
const word10 = '호이';

console.log(word10.repeat(3));
console.log(word10.repeat(0));
console.log(word10.repeat());
// console.log(word.repeat(-1));
// 인수가 없거나 0이면 빈 문자열 반환, 음수면 오류 발생


// replace, replaceAll
// 첫 번째 인자로 받은 문자열 또는 정규식을 두 번째 인자로 치환한 결과를 반환
console.log(
  '이스탄불은 터키의 수도이다.'.replace('터키', '튀르키예')
);

const word11 = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';

console.log(word11.replace('밥', '라면')); // 라면 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!
console.log(word11.replace(/밥/g, '라면')); // 라면 좀 먹자, 라면. 응? 야, 라면 좀 먹자고 라면, 라면!
// replace의 첫 인자가 문자열이면 일치하는 첫 부분만 치환
// 모두 치환하려면 정규식 /.../g 사용

console.log(word11.replaceAll('밥', '라면')); // // 라면 좀 먹자, 라면. 응? 야, 라면 좀 먹자고 라면, 라면!
console.log(word11.replaceAll(/밥/g, '라면'));
// replaceAll은 문자열도 자동으로 /.../g처럼 인식


// 메서드 체이닝 method chaining
// 값을 반환하는 인스턴스 메서드를 연속으로 사용
const word12 = ' 모두 HELLO! ';
const rpFrom = 'hello';
const rpTo = 'bye';

console.log(
  word12
  .trimStart()                // '모두 HELLO! '
  .toLowerCase()              // '모두 hello! '
  .replaceAll(rpFrom, rpTo)   // '모두 bye! '
  .toUpperCase()              // '모두 BYE! '
  .repeat(3)                  // '모두 BYE! 모두 BYE! 모두 BYE! '
  .trimEnd()                  // '모두 BYE! 모두 BYE! 모두 BYE!'
);

console.log(word12); // 원본은 그대로