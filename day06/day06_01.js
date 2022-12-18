// 상속
// 서로 다른 클래스나 생성자 함수가 같은 속성들을 공유할 때
// 이들은 관계를 정의함으로써 코드의 중복을 줄이고 효율을 높임

// 클래스의 상속 문법
class Bird{
  wings = 2;
}
class Eagle extends Bird{
  claws = 2;
}
class Penguin extends Bird{
  swim() {console.log('수영중~~');}
}
class EmperorPenguin extends Penguin{
  size = 'XXXL';
}

const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();

console.log(birdy, eaglee, pengu, pengdol); 
// Bird { wings: 2 } Eagle { wings: 2, claws: 2 } Penguin { wings: 2 } EmperorPenguin { wings: 2, size: 'XXXL' }

for (const i of [
  [ '1.', birdy instanceof Bird ], // true
  [ '2.', eaglee instanceof Bird ], // true
  [ '3.', eaglee instanceof Eagle ], // true
  [ '4.', pengdol instanceof Penguin ], // true
  [ '5.', pengdol instanceof Bird ], // true
  [ '6.', birdy instanceof Eagle ] // false
]) {
  console.log(i[0], i[1]);
}

pengu.swim(); // 수영중~~
pengdol.swim(); // 수영중~~
// eaglee.swim(); // error

// 클래스에서는 extends (부모클래스)로 상속관계 정의
// 자식 클래스에서 또 다른 클래스가 상속받을 수 있음
// 자식 클래스는 부모 클래스의 속성을 기본적으로 가져옴
// 자식 클래스의 인스턴스는 부모 클래스의 인스턴스로 인식됨
// [[Protorype]]으로 상속관계 살펴볼 것 - 최종적으로 Object


class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}

class YalcoChickenAndCafe extends YalcoChicken {
  cafeMenu = { '아메리카노': 4000, '라떼': 4500 };
  cafeOrder (name) {
    return `${this.cafeMenu[name]}원입니다.`
  }
}

const chain1 = new YalcoChickenAndCafe('서면', 2)

console.log(chain1);
// YalcoChickenAndCafe {
//   no: 2,
//   menu: { '후라이드': 10000, '양념치킨': 12000 },
//   name: '서면',
//   cafeMenu: { '아메리카노': 4000, '라떼': 4500 }
// }

console.log(
  chain1.order('후라이드'),
  chain1.cafeOrder('라떼')
); // 10000원 입니다, 4500 원입니다.


// 오버라이딩
// 자식 클래스에서 부모로부터 물려받은 속성이나 기능을 덮어씀
class Bird1 {
  wings = 2;
  canFly = true;
  travel () { console.log('비행중...') }
}
class Eagle1 extends Bird1 {
  claws = 2;
}
class Penguin1 extends Bird1 {
  canFly = false;
  travel () { console.log('수영중...') }
}

const eaglee1 = new Eagle1();
const pengu1 = new Penguin1();

console.log(eaglee1); // Eagle1 {wings: 2, canFly: true, claws: 2}
eaglee1.travel(); // 비행중

console.log(pengu1); // Penguin1 {wings: 2, canFly: false}
pengu1.travel(); // 수영중


class YalcoChicken1 {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}

class YorkNannyYalcoChicken extends YalcoChicken1 {
  introduce () {
    return `또 뭐 쳐먹으러 기어들어왔어.`;
  }
  order (name) {
    return `${this.menu[name]}원이여.`
  }
}

const chain2 = new YorkNannyYalcoChicken ('종로', 48);
const chain3 = new YalcoChicken1('종로', 3);

console.log(chain3.introduce()); // 안녕하세요, 3호 종로점입니다!
console.log(chain2.introduce()); // 또 뭐 쳐먹으러 기어들어왔어.
console.log(chain2.order('양념치킨')); // 12000원이여.


// super
// 부모 클래스의 constructor 또는 메서드 호출
class YalcoChicken2{
  no = 0;
  menu = {'후라이드': 10000, '양념치킨': 12000};

  constructor(name, no){
    this.name = name;
    if(no) this.no = no;
  }
  introduce(){
    return `안녕하세요, ${this.no}호 ${this.name}점 입니다!`;
  }
  order(name){
    return `${this.menu[name]}원 입니다.`
  }
}

class ConceptYalcoChicken extends YalcoChicken2{
  #word = '';
  constructor(name, no, word){
    super(name, no);
    this.#word = word;
  }
  introWithConcept(){
    return super.introduce() + ' ' + this.#word;
  }
  order(name){
    return super.order(name) + ' ' + this.#word;
  }
}
const pikaChain = new ConceptYalcoChicken('도봉', 50, '피카피카~');

console.log(pikaChain);
// ConceptYalcoChicken {
//   no: 50,
//   menu: { '후라이드': 10000, '양념치킨': 12000 },
//   name: '도봉'
// }
console.log(pikaChain.introWithConcept()); // 안녕하세요, 50호 도봉점 입니다! 피카피카~
console.log(pikaChain.order('후라이드')); // 10000원 입니다. 피카피카~

// super는 다른 클래스에서 상속받은 클래스에서만 사용 가능
// 자식 클래스의 constructor 내에서는 부모 클래스의 constructor를 가리킴
// 자식 클래스의 메서드 내에서는 부모 클래스를 가리킴
// 부모 클래스의 constructor나 메서드에 추가적인 동작을 넣기 위해 사용


// 정적 메서드에서
class YalcoChicken3 {
  static brand = '얄코치킨';
  static contact () {
    console.log(`${this.brand}입니다. 무엇을 도와드릴까요?`);
  }
}

class ConceptYalcoChicken1 extends YalcoChicken3 {
  static contact () {
    super.contact();
    console.log('컨셉 가맹문의는 홈페이지를 참조하세요.');
  }
}

ConceptYalcoChicken1.contact();
// 얄코치킨입니다. 무엇을 도와드릴까요?
// 컨셉 가맹문의는 홈페이지를 참조하세요.