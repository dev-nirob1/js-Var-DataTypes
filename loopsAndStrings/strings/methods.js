const str = 'hello world'
//String Methods in JS
// There are built-in functions to manipulate a string
// need to use () after every methods 
//----------Methods-----------
// str.toUpperCase() // to uppercase the string
// str.toLowerCase() //to lowercase the string
// str.trim() //removes whiteSpace starting and ending of a string
// str.slice(startIndex, end?) returns part of string indexwise . have to pass index of string {ending value is non-inclusive and optional}
// str.concat(str1) join str1 with str 
//str.replace(searchVal, newVal)
//str.charAt(idx)



// Strings are immutable(unchangeable) so any methods doesn't change the actual value of string it creates a copy of that and return new value 
// const trimedstr = str.trim()
// console.log(str.length, trimedstr.length);

// const slicemethod = str.slice(2)
// console.log(slicemethod);

// const str1 = 'hello '
// const str2 = 'world'
// console.log(str1.concat(str2));


//replace method

// const replaceMethod = 'hellololo World'
// console.log(replaceMethod.replace('lo', 'p')) //it replace first matching value but replaceAll replace all. it will replace once

//if need to find any character of a string by index use use charAt method

console.log(str.charAt(4))

const replaceChar = str.replace(str[0], 'y')
console.log(replaceChar);