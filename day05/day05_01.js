// 생성자 함수의 필요성

// 얄코치킨의 체인점을 나타내는 객체들
// const chain1 = {
//   name: '판교',
//   no: 3,
//   introduce(){
//     return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//   }
// };
// const chain2 = {
//   name: '강남',
//   no: 17,
//   introduce(){
//     return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//   }
// };
// const chain3 = {
//   name: '제주',
//   no: 24,
//   introduce(){
//     return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//   }
// };

// 이처럼 같은 형식으로 객체들을 다수로 만들어야 한다면?


// 생성자 함수로 객체 만들기
// 생성자 함수
function YalcoChicken(name, no){
  this.name = name;
  this.no = no;
  this.introduce = function(){
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

// 인스턴스 생성
const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1, chain1.introduce()); // YalcoChicken { name: '판교', no: 3, introduce: [Function (anonymous)] } 안녕하세요, 3호 판교점입니다!
console.log(chain2, chain2.introduce()); // YalcoChicken { name: '강남', no: 17, introduce: [Function (anonymous)] } 안녕하세요, 17호 강남점입니다!
console.log(chain3, chain3.introduce()); // YalcoChicken { name: '제주', no: 24, introduce: [Function (anonymous)] } 안녕하세요, 24호 제주점입니다!

// 생성자 함수명은 일반적으로 대문자로 시작 - 파스칼 케이스
// 생성자 함수로 만들어진 객체를 인스턴스 instance 라 부름
// this.~로 생성될 인스턴스의 프로퍼티들 정의
// 생성자 함수는 new 연산자와 함께 사용
// 암묵적으로 this 반환
// 생성자 함수에서는 메서드 정의 불가 - 객체 리터럴과 클래스에서는 가능

// new를 붙이지 않으면 undefined 반환
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}
console.log(YalcoChicken('홍대', 30)); // undefined
// 호출시 new를 붙이는가 여부에 따라 호출 원리가 다름

// 객체를 반환하는 함수랑은 뭐가 다른지
function createYalcoChicken(name, no){
  return{
    name, no, 
    introduce(){
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  }
}
const chain4 = createYalcoChicken('판교', 5); // new로 호출안함
const chain5 = createYalcoChicken('강남', 33);
const chain6 = createYalcoChicken('제주', 21);

console.log(chain4, chain4.introduce());
console.log(chain5, chain5.introduce());
console.log(chain6, chain6.introduce());


// 생성자 함수로 만들어진 객체
// 프로토타입 - 자바스크립트 객체지향의 중심

function YalcoChicken(name, no){
  this.name = name;
  this.no = no;
  this.introduce = function(){
    return `안녕하세요, ${this.no}호 ${this.name}점입니다`;
  }
}
const chain =  new YalcoChicken('판교', 3);
console.log(chain);

// 본사에서 새 업무를 추가
// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};
console.log(chain1.introEng()); // Welcome to Yalco Chicken at 판교!

console.log(new YalcoChicken('강남', 17).introEng()); // Welcome to Yalco Chicken at 강남!

// 타 언어의 클래스와는 다르며 사용하기에 따라 더 강력함
// 사실 introduce와 introEng은 종류가 다름 (인스턴프 vs 프로토타입)


// 타 방식으로 만든 객체와의 차이
function YalcoChicken(name, no){
  this.name = name;
  this.no = no;
  this.introduce = function(){
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

function createYalcoChicken(name, no){
  return{
    name, no,
    introduce(){
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  }
}

// 객체 리터럴
const chain7 = {
  name: '판교', no: 3,
  introduce: function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

// 객체 반환 함수
const chain8 = createYalcoChicken('강남', 17);

// 생성자 함수
const chain9 = new YalcoChicken('제주', 24);

console.log(chain7, chain7 instanceof YalcoChicken); // { name: '판교', no: 3, introduce: [Function: introduce] } false
console.log(chain8, chain8 instanceof YalcoChicken); // { name: '강남', no: 17, introduce: [Function: introduce] } false
console.log(chain9, chain9 instanceof YalcoChicken); // YalcoChicken { name: '제주', no: 24, introduce: [Function (anonymous)] } true
// 생성자 함수만 다름

// 객체 자체의 로그도 상세가 다름 유의 앞에 생성자 함수명이 붙음
// instanceof : 객체가 특정 생성자 함수에 의해 만들어졌는지 여부 반환
// 프로토타입의 constructor의 체인이 해당 생성자 함수 포함하는지 여부


// 생성자 함수 자체의 프로퍼티와 함수
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

// 본사의 정보와 업무
YalcoChicken.brand = '얄코치킨';
YalcoChicken.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};
const chain10 = new YalcoChicken('판교', 3);

console.log(YalcoChicken.contact()); // 얄코치킨입니다. 무엇을 도와드릴까요?
// console.log(chain10.contact()); // static error


// new 생략 실수 방지하기
function YalcoChicken(name, no){
  this.name = name;
  this.no = no;
  this.introduce = function(){
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }

  if(!new.target){ // 이 부분을 지우고 다시 해 볼 것
    return new YalcoChicken(name, no);
  }
}

const chain11 = new YalcoChicken('판교', 3);
const chain12 = YalcoChicken('강남', 17);

console.log(chain11, chain12); // 정상 출력
// if를 지울 시 error

// 해당 함수가 new 연산자 없이 호출되었을 경우 재귀호출을 통해 생성해 내보냄
// 다음 강에 배울 클래스에서는 new 없이는 오류가 발생하므로 필요없음