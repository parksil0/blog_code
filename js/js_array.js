/**
 * Array.from()
 */

const arr = [1, 2, 3, 4];

// arr배열의 요소를 하나하나 새로운 배열에 담는다.
const createdByArrayFrom = Array.from(arr);

// 변수 arr 배열의 참조값을 대입한다.
const createdByReference = arr;

console.log(createdByArrayFrom === arr); // false
console.log(createdByReference === arr); // true

// 배열의 참조값을 받은 변수로 배열의 요소를 변경하면, 같은 참조값을 가진 변수의 요소도 변경된다.
createdByReference[0] = 100;
console.log(arr); // [ 100, 2, 3, 4 ]

createdByArrayFrom[0] = 200;
console.log(arr); // [ 100, 2, 3, 4 ]
console.log(createdByArrayFrom); // [ 200, 2, 3, 4 ]

const arr1 = Array.from('seal');
console.log(arr1); // [ 's', 'e', 'a', 'l' ]

// 화살표 함수 사용
const arr2 = Array.from([1, 2, 3], (v) => v + v);
console.log(arr2); // [ 2, 4, 6 ]

// 구조분해 문법을 사용하여 생성할 수 있다. length, v: value
const arr3 = Array.from({ length: 5 }, (v) => 0)
console.log(arr3); // [ 0, 0, 0, 0, 0 ]

// v: value. i: index
const arr4 = Array.from({ length: 3 }, (v, i) => i)
console.log(arr4); // [ 0, 1, 2 ]

/**
 * Array.sort()
 * 정렬은 브라우저마다, 안정 소트(stable sort)가 아닐 수 있다.
 * 그래서 같은 배열 안에서 브라우저에 따라 다른 정렬 결과를 가져올 수 있다.
 */

const arr5 = [7, 3, 6, 4, 2, 8];
console.log(arr5.sort()); // 기본은 오름차순 : [ 2, 3, 4, 6, 7, 8 ] 

// sort() 함수의 파라미터가 비어있으면 정렬하려는 배열의 모든 요소를 문자열로 변환한 후 정렬한다.
const UnicodeExArr = [7, 3, 6, 4, 200, 80];
console.log(UnicodeExArr.sort()); // [ 200, 3, 4, 6, 7, 80 ]

const arr6 = [7, 3, 6, 4, 2, 8].sort((v1, v2) => v2 - v1);
console.log(arr6); // [ 2, 3, 4, 6, 7, 8 ]

const arr7 = [1, 2, 3, 4, 5, 6, 7, 8].sort((v1, v2) => v1 - v2);
console.log(arr7); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const students = [
  { name: "Kim", age: "22" },
  { name: "Lee", age: "31" },
  { name: "Park", age: "15" },
  { name: "Choi", age: "27" },
  { name: "Han", age: "19" },
];

students.sort((student1, student2) => {
  if (student1.name > student2.name) {
    return -1;
  } else if (student1.name < student2.name) {
    return 1;
  } 
  return 0;
});
console.log(students);

/**
 * Array.filter()
 * 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
 * filter()는 호출되는 배열을 변화시키지(mutate) 않는다.
 */

const animalArr = ['dog', 'lion', 'tiger', 'cat', 'rabbit']

const arr8 = animalArr.filter((name) => name.length > 3);
console.log(arr8); // [ 'lion', 'tiger', 'rabbit' ]

console.log(animalArr.filter((item, index, arr) => {
  console.log("item:", item, ", index:", index, ", arr:", arr);
}));

// Array.filter()는 호출되는 배열을 변화시키지 않는 이유는, 
// 메서드 내에서 새로운 배열을 생성하여 조건이 true 일 때에만 새로 생성한 배열에 push()를 하기 때문이다.
console.log(animalArr); // [ 'dog', 'lion', 'tiger', 'cat', 'rabbit' ]

const myNameArr = ['Seal', 'Silas', 'Sil', 'Park'];

console.log(myNameArr.filter((item) => item.toLowerCase().indexOf('s') > -1)); //[ 'Seal', 'Silas', 'Sil' ]

function searchKeyword(arr, keyword) {
  return arr.filter((item) => item.toLowerCase().indexOf(keyword) > -1);
}

console.log(searchKeyword(myNameArr, 's')); // [ 'Seal', 'Silas', 'Sil' ]

function greaterThanFive(item) {
  return item > 5
}

const arr9 = [6, 4, 2, 8, 5, 1, 3].filter((number) => number > 5);
console.log(arr9); // [ 6, 8 ]

const arr9_1 = [6, 4, 2, 8, 5, 1, 3].filter(greaterThanFive);
console.log(arr9_1); // [ 6, 8 ]

/**
 * Array.forEach()
 * 주어진 함수를 배열 요소 각각에 대해 실행한다.
 * 또한 리턴값이 없고, 배열을 변형하지도 않는다.
 * forEach()는 조기에 종료가 불가능하다.
 */

const myNameSpell = ["S", "e", "a", "l", " ", "P", "a", "r", "k"];

let myNameFor = '';
for (let i = 0; i < myNameSpell.length; i++) {
  myNameFor += myNameSpell[i];
}

console.log(myNameFor); // Seal Park

let myNameForEach = '';
myNameSpell.forEach((item) => {
  myNameForEach += item;
});

console.log(myNameForEach);

let arr10 = [];

// 2차원 배열을 forEach() 메소드로 접근하는 방법.
[[1, 2], [3, 4], [5, 6]].forEach((arr) => {
  arr.forEach((item) => {
    arr10.push(item ** 2);
  })
});

console.log(arr10); // [ 1, 4, 9, 16, 25, 36 ]

/**
 * Array.indexOf()
 * 메서드에서 지정된 요소(index)를 찾는다.
 * 존재하면 인덱스 번호를, 존재하지 않는다면 -1를 리턴한다.
 * 발견된 가장 최초의 인덱스 번호를 리턴한다.
 */

const numArr = [7, 4, 3, 1, 2, 6, 3, 7, 2, 7, 1, 7];

// 메서드 인자로 값을 입력하면 해당 값이 위치한 인덱스를 리턴한다.
console.log(numArr.indexOf(7)); // 1

// 두 번째 인자는 시작하려는 인덱스 번호이다.
console.log(numArr.indexOf(7, 1));

console.log(numArr.indexOf(0)); // -1

const fruitArr = ['banana', 'melon', 'apple', 'orange', 'watermelon'];

console.log(fruitArr.indexOf('melon'));

// indexOf() 메서드는 최초의 인덱스만 리턴하기 때문에, 찾으려는 인덱스가 최소 두 개 이상이라면 아래와 같은 로직을 사용해보는 것도 고민할 수 있다.
let arr12 = [];
const toFindElement = 7;
let index = numArr.indexOf(toFindElement);

while(index !== -1) {
  arr12.push(index);
  index = numArr.indexOf(toFindElement, index+1);
}

console.log(arr12); // [0, 7, 9, 11];

/**
 * Array.map()
 * 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
 * Array.filter()와 마찬가지로 원본 배열을 손상시키지 않는다.
 * Array.filter()는 조건에 맞으면 리턴하고, Array.map()은 모두 각각 순회를 하여 계산을 하여 리턴한다.
 */

const arr13 = [7, 4, 3, 8, 2, 9, 1];
const arr14 = arr13.map((num) => num ** 2);

console.log(arr13); // [7, 4, 3, 8, 2, 9, 1]
console.log(arr14); // [49, 16, 9, 64, 4, 81, 1]

// 매개변수로 각 요소, 인덱스, 원본배열을 사용할 수 있다.
arr13.map((item, index, arr) => {
  console.log("item:", item, ", index:", index," , arr:", arr);
})
