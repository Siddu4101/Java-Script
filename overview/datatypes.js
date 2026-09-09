/* Data Types in JavaScript */


/* 
JS is a dynamically typed language  
There are mainly 8 types of data in JavaScript which are cateroised into 2 types

1. Primitive data types
    i. number
    ii. string
    iii. boolean
    iv. undefined
    v. null
    vi. symbol
    vii. bigint

2. Non-primitive data types
    i. object

*/

/* 
    1. Primitive data types: (Immutable)
        --> stores actual values in the memory location
        --> immutable means that the value cannot be changed once it is created, but the variable can be reassigned to a new value.
        --> compare by value: when comparing two primitive values, the comparison is done by value, not by reference.
            means if two primitive values have the same value, they are considered equal, even if they are stored in different memory locations. 
*/

/* 
    i. number: (Integer and Float)
        --> represents both integer and floating-point numbers.
        --> can be positive, negative, or zero.
*/
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number

console.log(typeof num1); // Output: "number"

/* some special values of numers */
console.table([{expression: "1/0", value: 1 / 0}, {expression: "-1/0", value: -1 / 0}, {expression: "0/0", value: 0 / 0}, {expression: `sid * 100`, value: "sid" * 100}]); // Output: Infinity, -Infinity, NaN, NaN
// "sid" * 100 ==> Output: NaN when performing arithmetic operations with non-numeric values

console.log(typeof NaN); // Output: "number"


/* 
    ii. string: stores a sequence of characters enclosed in single quotes, double quotes, or backticks.
*/
let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}!`; // Backticks allows Template literal

console.log(typeof str1); // Output: "string"
console.table([{expression: `'Hello'`, value: str1}, {expression: `"World"`, value: str2}, {expression: `\`Hello, \${str2}!\``, value: str3}]); // Output: Hello, World!


/* iii. boolean: represents a logical value that can be either true or false. 
*/
let bool1 = true;
let bool2 = false;

console.log(typeof bool1); // Output: "boolean"
console.table([{expression: "true", value: bool1}, {expression: "false", value: bool2}]); // Output: true, false


/* 
    iv. undefined: represents a variable that has been declared but has not been assigned a value.
*/
let undef;

console.log(typeof undef); // Output: "undefined"
console.table([{expression: "let undef", value: undef}]); // Output: undefined

/* 
    v. null: represents the intentional absence of any object value.
    even though it's type is "object", it is not an object. This is a known quirk in JavaScript and is considered a historical bug in the language.
*/
let nullVar = null;

console.log(typeof nullVar); // Output: "object" (this is a known quirk in JavaScript)
console.table([{expression: "let nullVar = null", value: nullVar}]); // Output: null

/* 
    vi. symbol: represents a unique and immutable value, It is mainly used as unique property keys in objects to avoid naming collisions
        To add metadata as unique keys to objects.
*/
let sym1 = Symbol("description");

console.log(typeof sym1); // Output: "symbol"
console.table([{expression: `Symbol("description")`, value: sym1}]);

const a = Symbol("id");
const b = Symbol("id");

console.log(a === b); // false

let obj = {
    name: "John",
    [a]: "unique value"
}
console.table([{expression: "obj.name", value: obj.name}, {expression: "obj[a]", value: obj[a]}, {expression: "obj", value: obj}]);


/* 
    vii. bigint: represents integers with arbitrary precision they ends with an "n" suffix.
*/
let bigInt1 = 1234567890123456789012345678901234567890n;

console.log(typeof bigInt1); // Output: "bigint"
console.table([{expression: `1234567890123456789012345678901234567890n`, value: bigInt1}]);

/*
b. Objects: represents a collection of key-value pairs. Keys are strings or symbols, and values can be of any data type.
1. Object
2. Array
3. Function
4. Built-in Objects
*/

/* 1. Object */

const object ={
    name: "Sid",
    age: 25
}
console.table([{expression: "object.name", value: object.name}]);

/* 2. Array */
const array = [1, 2, 3, 4, 5];
console.table([{expression: "array[0]", value: array[0]}]);

/* 3. Function */
function addNums(num1,num2){
    console.log("sum is "+(num1 + num2))
}

addNums(2,3);
//OR
const funVar = function(num1, num2){
    console.log("sum is "+(num1 + num2))
}
console.log(typeof addNums); // Output: "function"
console.log(typeof funVar); // Output: "function"
funVar(2,3);
//OR
const arrowFunc = (num1, num2) => {
    console.log("sum is "+(num1 + num2)) //for single line u can remove the {}
}
arrowFunc(2,3);

/* 4. Built-in Objects */

const currentDate = new Date();
const map = new Map();
map.set("key", "value");
console.table([{expression: "map", value: map}, {expression: "map.get('key')", value: map.get("key")}]);
console.log(typeof currentDate); // Output: "object"
console.table([{expression: "new Date()", value: currentDate}]);


/*
Difference between the premitives and objects:
premitives compares values by their actual content, whereas objects compare by reference.
and reassignment behaves differently. For primitives, reassignment creates a new value, whereas for objects, 
reassignment changes the reference to a new object.
*/

let first = 10;
let second = first; // second gets a copy of the value of first
second = 100;
console.table([{expression: "first", value: first}, {expression: "second", value: second}]); // Output: 10


let refObj = {
    first: 10
}

let refCopy = refObj; // refCopy gets a reference to the same object
refCopy.first = 100;
console.table([{expression: "refObj.first", value: refObj.first}, {expression: "refCopy.first", value: refCopy.first}]); // Output: 100,100