// - [ ] **T-001**: Create an array of 5 elements using the Array Constructor.
const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);
// - [ ] **T-002**: Create an array of 3 empty slots.
const emptyArray = new Array(3);
// console.log(emptyArray);

// - [ ] **T-003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.
let alphabets = ["a", "b", "c", "d", "e", "f"];
const fouthInd = alphabets[alphabets.length - 3];
// console.log(fouthInd);

// - [ ] **T-004**: Use the `for` loop on the above array to print elements in the odd index.
for (let i = 0; i <= alphabets.length - 1; i++) {
  if (i % 2 === 1) {
    // console.log(alphabets[i]);
  }
}

// - [ ] **T-005**: Add one element at the front and the end of an array.
const books = ["bangla", "english", "math"];
const frontAdd = books.unshift("physics");
const endAdd = books.push("chemistry");
// console.log(books, frontAdd, endAdd);

// - [ ] **T-006**: Remove an element from the front and the end of an array.
const fruits = ["mango", "jackfruits", "berry"];
const frontRemove = fruits.shift();
const endRemove = fruits.pop();
// console.log(fruits, frontRemove, endRemove);

// - [ ] **T-007**: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const foods = [
  "Pizza",
  "rice",
  "tacos",
  "sushi",
  "pasta",
  "noodles",
  "curry",
  "hamburgers",
  "bread",
  "Eggs",
];
// console.log(foods.length);
const [, , , , , noodles] = foods;
// console.log(noodles);

// - [ ] **T-008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [, , ...rest] = foods;
// console.log(rest);

// - [ ] **T-009**: Clone an Array(Shallow cloning)
const skinCare = ["cream", "vasline", "meril", "lotion"];
const cloneArray = [...skinCare];
// console.log(skinCare === cloneArray);

// - [ ] **T-010**: Empty an array using its length property
const anArray = ["dfkdf", "dfdfkh", "dfkjdfkd", "dfdkfhd"];
anArray.length = 0;
// console.log(anArray);

// - [ ] **T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= nums.length - 1; i++) {
  if (nums[i] === 5) {
    nums.length = 6;
    // console.log(nums);
  }
//   console.log("data", nums[i]);
}
