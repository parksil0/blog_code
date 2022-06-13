function greetUser(username) {
  return new Promise((resolve, reject) => { // pending
    if (username) {
      resolve(`Hello ${username}!`);
    }
    reject(new Error('sorry. there is no username'));
  });
};

greetUser('seal')
  .then(response => { // fulfilled
    console.log(response);
  })
  .catch(error => { // rejected
    console.log(error);
  });

// Promise.all()은 배열 안의 모든 프로미스 객체가 통과되어야만 정상적으로 작동한다.
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => {
    resolve('nice')
  }, 4000)),
  new Promise((resolve, reject) => setTimeout(() => {
    resolve('to')
  }, 3000)),
  new Promise((resolve, reject) => setTimeout(() => {
    resolve('meet');
  }, 2000)),
  new Promise((resolve, reject) => setTimeout(() => {
    resolve('you');
  }, 1000)),
]).then(response => {
  console.log(response);
});

// 아래는 프로미스를 연결한 예제이다. 순서가 필요한 경우 콜백을 이어받아 실행한다.
// 단 한번이라도 실패(reject)가 된다면 아래의 함수는 에러를 리턴한다.
// 연속적으로 성공을 해야만 하는 경우에 사용한다.(e.g.. 로그인처리)
const sayHello = () => new Promise((resolve, reject) => {
    resolve('nice');
  })
  .then((result) => { // result는 프로미스 객체가 이행(fulfilled)이 된다면 결과를 result로 받아온다. 만약 실패한다면 catch에서 실행된다.
    return new Promise((response, reject) => {
      response(`${result} to`)
    });
  })
  .then((result) => {
    return new Promise((response, reject) => {
      // reject(new Error('error!')) // reject가 실행되는 순간 이행됐던 모든 프라미스는 사라지고 바로 catch로 넘어간다.
      response(`${result} meet`);
    });
  })
  .then((result) => {
    return new Promise((response, reject) => {
      response(`${result} you`);
    });
  })
  .then((result) => {
    console.log(result);
  })
  .catch(error => {
    console.log('rejected', error);
  });

sayHello();

// 프로미스를 연결하는 방법 외에 Promise.all()이라는 정적 메서드를 사용하는 방법도 있다.
// 위의 예제와 마찬가지로, Promise.all()에서 하나라도 reject 혹은 error가 발생한다면, 성공적으로 배열에 저장된 값들도 사라지게 된다.
const introduceUsername = () => Promise.all([
  new Promise((resolve, reject) => setTimeout(() => {
    resolve('my')
  }, 4000)),
  new Promise((resolve, reject) => setTimeout(() => {
    resolve('name')
  }, 3000)),
  new Promise((resolve, reject) => setTimeout(() => {
    resolve('is');
  }, 2000)),
  new Promise((resolve, reject) => setTimeout(() => {
    reject('error!');
    // resolve('seal');
  }, 1000)),
]).then(response => {
  console.log(response); // UnhandledPromiseRejectionWarning: seal;
}).catch(error => {
  console.error(error); // error!
});

introduceUsername();

