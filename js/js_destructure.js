// 인덱스 순서대로 변수에 할당 가능
const myName = ['Seal', 'Park'];
const [lastName, firstName] = myName;
console.log(firstName, lastName); // Park Seal

// 해당하지 않는 인덱스는 undefined
const colorArr = ['red', 'black'];
const [color1, color2, color3] = colorArr;
console.log(color1, color2, color3); // red black undefined

// 우항의 초기값이 반드시 배열의 모습이 아닌 반환값이 배열이여도 해당한다.
const [icecream1, icecream2] = '바밤바 누가바'.split(' ');
console.log(icecream1, icecream2); // 바밤바 누가바

// 필요하지 않은(무시하고 싶은) 요소는 comma만 사용한다.
const foodArr = ['김치', '치즈', '볶음밥']
const [food1, , food2] = foodArr;
console.log(food1, food2); // 김치 볶음밥

// 배열 뿐 아니라 이터러블 또한 구조분해할당 적용 가능
const [one, two, three] = "123";
console.log(one, two, three); // 1 2 3

// 변수를 교환할 수 있다.
let [num1, num2] = [10, 20];
[num1, num2] = [num2, num1];
console.log(num1, num2); // 20 10

// 나머지 연산자(...)를 이용하여 배열의 나머지를 저장할 수 있다.
// 점 세개가 반드시 있어야하며 마지막에 위치해야한다.
const firstNameArr = ['kim', 'park', 'lee', 'choi'];
const[firstName1, firstName2, ...rest] = firstNameArr;
console.log(firstName1, firstName2, rest); // kim park [ 'lee', 'choi' ]

// 객체 또한 분해가 가능하다.
const profile = {
  name: 'seal',
  age: 28,
  height: 179,
}
const { name, age, height } = profile;
console.log(name, age, height); // seal, 28, 179

// 콜론을 사용하여 새로운 변수 이름으로 선언이 가능하다.
const { name: n, age: a, height: h } = profile;
console.log(n, a, h); // seal 28 179

// 객체 또한 나머지 연산자를 통해 객체 타입으로 할당받을 수 있다.
const babamba = {
  type: 'icecream',
  flavor: 'cream',
  price: 500,
}
const { type, ...restInfomation } = babamba;
console.log(type, restInfomation); // icecream { flavor: 'cream', price: 500 }

// 중첩된 객체도 구조분해가 가능하다.
const myBackpack = {
  name: 'Refugio',
  brand: 'Patagonia',
  dimension: {
    width: 12,
    height: 19
  },
  sizes: [
    '26L', '28L'
  ]
}
const { 
  name, 
  brand, 
  dimension: { 
    width, 
    height
  }, 
  sizes: [
    smallSize, 
    largeSize
  ] 
} = myBackpack;
console.log(name, brand, width, height, smallSize, largeSize); // Refugio Patagonia 12 19 26L 28L

// 값이 없다면 기본값을 할당할 수 있다.
const myProfile = {
  name: 'seal',
  age: 28
};
const {name, age, gender = 'none'} = myProfile;
console.log(name, age, gender); // seal 28 none

// 값이 있다면 해당 값이 할당된다.
const myProfile2 = {
  name: 'seal',
  age: 28,
  gender: 'male'
};
const {name, age, gender = 'none'} = myProfile2;
console.log(name, age, gender); // seal 28 male

// 함수 매개변수의 기본값도 설정이 가능하다
function setProfile(name, age, gender = 'none') {
  //...
}

// 함수의 매개변수에서 구조 분해 할당 또한 가능하다.
function setProfile({ name, age, gender = 'none' }) {
  // ...
}