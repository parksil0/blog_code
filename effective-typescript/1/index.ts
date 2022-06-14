interface State {
  name: string;
  capital: string;
}

// #1 오타 입력했을 때
const states1: State[] = [
  { name: "Alabama", capitol: "Montgomery" }, // Type '{ name: string; capitol: string; }' is not assignable to type 'State'.  Object literal may only specify known properties, but 'capitol' does not exist in type 'State'. Did you mean to write 'capital'?
];

console.log(states1[0].capital); // undefined

// #2 정상적으로 입력했을 때
const states2: State[] = [{ name: "Alabama", capital: "Montgomery" }];

console.log(states2[0].capital); // Montgomery

// #3 타입스크립트가 잡지 못하는 에러
const myName = ["Park", "Seal"];
console.log(myName[2].toUpperCase()); // TypeError: Cannot read property 'toUpperCase' of undefined

// #4 strictNullChecks: false
const x: number = null; // 정상, null은 유효한 값이다.

// #5 strictNullChecks: true
const y: number = null; // Error
