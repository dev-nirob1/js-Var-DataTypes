// Array static methods
// Array.of() Methods
const arrOf = [2, 3, true, { item: 1 }];
const pussed = arrOf.push(2);
// console.log(arrOf);
// console.log(pussed);
// console.log(arrOf.at(3));

// array like
const li = document.getElementsByTagName("li");
// console.log(li[3]);
const listItem = Array.from(li); //array.from() array like ke actual array te convert kore.
// console.log(listItem);
// console.log(listItem.at(2)); now you can apply any array method

function sum() {
//   console.log(arguments);
  const arr = Array.from(arguments);
//   console.log(arr);
  //spread operator use koreo arguments object ke actuall array te convert kora jay
  [...arguments].forEach((elem) => {
    // console.log(elem);
  });
}

sum(1, 2, 3, 4);

// Array.fromAsync()

const asyncData = {
    0: Promise.resolve('a'),
    1: Promise.resolve('b'),
    2:Promise.resolve('c'),
    length: 3
}
const newAsyncArray = Array.fromAsync(asyncData)
newAsyncArray.then(res => console.log(res))
console.log(newAsyncArray);
