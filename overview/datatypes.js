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

