const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, cur) => acc.concat(cur), []);

console.log(flattened);

const filteredArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, cur) => {
  if (cur > 5) acc.push(cur);
  return acc;
}, []);

console.log(filteredArray);

const plus10 = [1, 2, 3, 4, 5].reduce((acc, cur) => {
  acc.push(cur + 10);
  return acc;
}, []);

console.log(plus10);
