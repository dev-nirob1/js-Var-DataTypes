// variables

// console.log('I am recapping JS')
// console.log('hello world')

//variables
//variable consist of two main parts. The variable name and the value in it (=) is used as a assignment operator. left side of (=) is a name of variabe and right side is value;

fullName = "Al Hasan Nirob"
// console.log(fullName)
age = 22
// console.log(age)
price = 450
myFriend = null;
friendAge = undefined;
married = false
// console.log(price)
//you can use a single console.log() statement to log multiple variables or pieces of data by separating them with commas. 

// console.log(fullName, age, price,myFriend, friendAge,married)

// variables rules
/**
 *1. variables name are case sensitives but you should not declare variables in same name it makes confusions. 'a' & 'A' is different
 *2. only a letter, underscore(_) or $ should be 1st charecter. variable name can not starts with a number but ends with a number 
 *3. variables name can not be any JS reserved keywords.
 *variables name has to be in one word and can not have quotation
 */

myName = 'Al hasan Nirob' //camel case
my_name = 'Al hasan Nirob' //snake case
MyName$ = 'Bijoy' //pascal case
myName1 = 'hasan'
_name = 'nirob'
$name = 'nirob'
apples = 35
Apples = 30
// console.log(Apples, apples)


/**
 * 5 ways to declare a variables
 * 1. var, let, const: variables in Javascript are declared using keywords like var, let, const followed by the choosen variable name and an optional assignment of an initial value;
 *2. variables name : variable must be indentified with unique names
 *3. Assignment operators: use an (=) operator to assign a value
 * 4. value: specifies the values to assign the variable
 * semicolon: using (;) is optional but using it good practice. semicolon indicates the end of variable statement
 */

var varName = 'variable name with var keyword'
let varNameWithLet = 'variable name with let keyword'
const varNameWithConst = 'variableName with const keyword'

/**
 * -------different between let, var, const----------
 * var--------
 * variable can be re-declared and re-assign the value and global scope variables.
 * let-----
 * varibale can not re-declared but can re-assign the value and block scope varibles.
 * const ------
 * varibale can not re-declared and can not re-assign the value and block scope varibles.
 * 
 */
// console.log(age)

var age = 20;
var age = 30;
var age = 40;
age = 34
console.log(age)
// let
let myAge = 25
myAge = 27
console.log(myAge)

// const 
const myFriendAge = 24
console.log(myFriendAge)


// you declare a variable but didn't assign a value it will print undefined
//if you only declare a variable using let and var keywords it will not work in const keyword.You have to initialize a const variable with a value.
let todaysDate;
console.log(todaysDate)
var today;
console.log(today)
