/* 1. String*/

let myString = "Hello, World!";
let anotherString = String("Goodbye, World!");
let yetAnotherString = 'Hello again!';
let templateString = `This is a template string with a variable: ${myString}`;

console.table([myString, anotherString, yetAnotherString, templateString]);

/* positive index treats it as below --> substring and slice 
h e l l o ,   w o r l d !
0 1 2 3 4 5 6 7 8 9 10 11 12

negative index treats it as below --> only for slice
h    e   l   l   o  ,     w  o  r  l  d  !
-13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
*/


/* some functions */
console.log(myString.charAt(2));// l
console.log(myString.indexOf("o"));// 4
console.log(myString.substring(0, 5));// Hello
console.log(myString.slice(-13, -8));// world!


/* 2. Number */

let myNumber = 42;
let anotherNumber = Number("123");
let yetAnotherNumber = new Number(456);
let testNumber = 12364527.29939;

console.log(yetAnotherNumber); // prints [Number: 456]
console.table([myNumber, anotherNumber, yetAnotherNumber]); //42, 123, '' (yetAnotherNumber is an object so .table have issue with object print)
console.table([{expression: "typeof myNumber", value:  typeof myNumber}, // number
               {expression: "typeof anotherNumber", value:  typeof anotherNumber}, // number
               {expression: "typeof yetAnotherNumber", value:  typeof yetAnotherNumber}]); // Object

/* some number funtions */
console.log(myNumber.toString()); // "42"
console.log(myNumber.toFixed(2)); // "42.00"
console.log(testNumber.toPrecision(3)); // "1.24e+7" --> Give me n significant digits (digits that matter, starting from the first non-zero digit).
console.log(testNumber.toExponential(5)); // "1.23645e+7" --> Represent the number in exponential notation with 5 digits after the decimal point.
console.log(Number.MAX_VALUE); // The largest positive representable number.

/* some Math function*/
console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.abs(-42)); // 42
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.3)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.random()); // A random number between 0 and 1


/* Date 
JavaScript internally represents a date as the number of milliseconds since January 1, 1970 UTC.
*/

//getting the current date and time
let currentDate = new Date();
console.log(currentDate); 
console.log(currentDate.toString()); //prints in a human readble form

let actualDate = Date.now();// gets date in msec
console.log(actualDate);

//creating a specific date new Date(year, month, day, hour, minute, second, millisecond)
let specificDateTime = new Date(2026, 8, 11, 23);
const date = new Date("2026-09-11T10:30:00Z"); //we have ISO String format also for date creation
console.log(date);
console.log(specificDateTime);

//getting individual part from date
console.table([
    {part: "Year", value: specificDateTime.getFullYear()},
    {part: "Month", value: specificDateTime.getMonth()},
    {part: "Minutes", value: specificDateTime.getMinutes()}
]);
