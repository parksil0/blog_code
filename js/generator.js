// 함수 선언문
function* genDecFunc() {
  yield 1;
}

// 제너레이터 함수 표현식
const genExpFunc = function* () {
  yield 1;
};

// 제너레이터 메서드
const obj = {
  *genObjMethod() {
    yield 1;
  },
};

// 제너레이터 클래스 메서드
class MyClass {
  *genClsMethod() {
    yield 1;
  }
}

// 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
const returnGenerator = genDecFunc();

// 제너레이터 객체는 이터러블이면서 이터레이터이다.
// 이터러블은 Symbol.iterator 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체이다.
console.log(Symbol.iterator in returnGenerator);

// 이터레이터는 nest 메서드를 갖는다.
console.log("next" in returnGenerator);

// throw 메서드를 호출하면 인수로 전달받은 에러를 발생시키고,
// undefined를 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환한다.
function* genFuncWithTryCatch() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.error(e);
  }
}

const generatorWithTryCatch = genFuncWithTryCatch();

console.log(generatorWithTryCatch.next()); // { value: 1, done: false }
console.log(generatorWithTryCatch.return("end")); // { value: 'end', done: true }
// console.log(generatorWithTryCatch.throw("error")); // { value: undefined, done: true }

const generator = genFuncWithTryCatch();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

function* getFuncWithArgument() {
  const x = yield 1;
  const y = yield x + 10;
  return x + y;
}

const generatorWithArgument = getFuncWithArgument();

console.log(generatorWithArgument.next()); // { value: 1, done: false }
console.log(generatorWithArgument.next(10)); // { value: 20, done: false }
console.log(generatorWithArgument.next(20)); // { value: 30, done: true }

// const fetch = require("node-fetch");

const async = (generatorFunc) => {
  const generator = generatorFunc();

  const onResolved = (arg) => {
    const result = generator.next(arg);

    return result.done
      ? result.value
      : result.value.then((res) => onResolved(res));
  };

  return onResolved;
};

async(function* fetchTodo() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  const response = yield fetch(url);
  const todo = yield response.json();

  console.log(todo);
})();
