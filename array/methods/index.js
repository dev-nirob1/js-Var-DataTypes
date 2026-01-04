// concat() method
const first = [1, 2, 3];
const second = [4, 5, 6];
const marged = first.concat(second);
// console.log(marged);
const third = [7, 8, 8];

// marge multiple array
const margedMulti = marged.concat(first, second, third);
// console.log(margedMulti);

// join() method

const num = [1, 2, 3];
const result = num.join(); //join element by comma(,)
const separator = num.join("-"); //separte element by (-)
const arr = ["hello"]; // empty array ba ekta element thakle sekkhetre separator kaj korbe na
const empArr = arr.join("-");
// console.log(empArr);

// fill() method
const colors = ["red", "blue", "yellow", "green"];
const fillMode = colors.fill("pink"); //sob gulo element 'pink' diye fil hobe
const col = colors.fill("redBlu", 0, 2); //0 index theke 2index er age projonto fill hobe. karon endIndex count hoyona
//jodi last end index na deya hoy tahole array er length porjonto fill hobe.
// console.log(col);

// includes() method
const nam = ["jimu", "sayaf", "porosh", "talha"];
const acheNakiNai = nam.includes("porosh");
// console.log(acheNakiNai);

const phones = ["nokia", "samsung", "realme", "1", "pexels", "1"];
const indexNum = phones.indexOf("1");
const lastIndexNum = phones.lastIndexOf("1");
// console.log(lastIndexNum);

// reverse() method
const numbers = [1, 2, 3, 4];
numbers.reverse();
// console.log(numbers);

// sort() method
// problem:1

// Tasks:
// 1️⃣ Price অনুযায়ী ascending order (low → high) sort করো।
// 2️⃣ Price অনুযায়ী descending order (high → low) sort করো।
// 3️⃣ Name অনুযায়ী alphabetical order sort করো।
// 4️⃣ Name অনুযায়ী reverse alphabetical order sort করো।
const products = [
  { name: "Laptop", price: 80000 },
  { name: "Earphone", price: 2000 },
  { name: "Phone", price: 30000 },
  { name: "Keyboard", price: 5000 },
];
// Price অনুযায়ী ascending order (low → high) sort
const lowToHigh = [...products].sort((a, b) => {
  return a.price - b.price;
});
// console.log(lowToHigh);

// Price অনুযায়ী descending order (high → low) sort
const highToLow = [...products].sort((a, b) => {
  return b.price - a.price;
});
// console.log(highToLow);

// Name অনুযায়ী alphabetical order sort করো।
const nameAZ = [...products].sort((a, b) => {
  // console.log(a.name);
  if (a.name < b.name) return 1;
});
// console.log(nameAZ);

//  Name অনুযায়ী reverse alphabetical order sort

const nameZA = [...products].sort((a,b)=> {
    if(a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0
})
// console.log(nameZA);

// splice() method 
const methods = ['slice', 'sort', 'includes', 'indexOf'];
const deleted = methods.splice(1, 0, 'splice') //will return empty array cause we didn't pass number param (how many element will delete);
const deletedItem = methods.splice(1, methods.length, 'fill')
// console.log(deletedItem);
// console.log(deleted, methods);

// problem-1 
let names = ['tom', 'jerry', 'oggy']; //delete the array
// names.splice(0, names.length) 
// names = []

// console.log(names);

// at() method 
const numb = [1,2,3,4,5];
const item = numb.at() //will return 1st elemment cause didn't pass anything

const atElem = numb.at(3) //will return 4
const negativeIndex = numb.at(-2); //nagative index
// console.log(atElem);

// flat() Method 
const nestedArr = [1,2,3,[4,5],[6,7,[8,9,[10,11]]]]
// console.log(nestedArr.flat()); 1level nesting
// console.log(nestedArr.flat(2)); 2lelel nesting
// console.log(nestedArr.flat(Infinity)); joto nesting e thakuk flat() hobe 

const data = [1,2,3,4,5,6,7,8];
const copy = data.copyWithin(0, 2, 4);
// console.log(data);

// toReversed method 
const date = [1,2,3];
const revDate = date.toReversed();
// console.log(date, revDate);

// toSorted Method 
const alphab = ['c', 'b', 'a', 'd'];
const sorNum = [1,2,3,4]
const descNum = sorNum.toSorted((a,b)=> b-a)
const sortAlpha = alphab.toSorted();
// console.log(descNum);

// toSpliced method 
const months = ['jan', 'march', 'april'];
const addedMoth = months.toSpliced(1, 0, 'February');
// console.log(addedMoth);

// with() method 
const age = [19, 22, 25];
const newAge = age.with(1, 20)
console.log(newAge, age);


