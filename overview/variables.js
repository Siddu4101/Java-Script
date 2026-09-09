// "use strict"; // Strict mode is a way to opt in to a restricted variant of JavaScript


/* in js we have 4 types of var declaration 

1. var
2. let
3. const
4. no declaration

*/

/*
1. var: (Older one not recommended to use)

    a. var is function scoped not a block scoped , which means that it is accessible within the function it is declared in, and not outside of it. If declared outside of a function, it becomes a global variable.
*/

var globalVar = "I am a global variable";

function functionSCope() {
    var x = 10; // x is only accessible within this function
    console.log(x); // Output: 10 

    if(true) {
        var y = 20;
        console.log(globalVar); // globalVar is accessible here because it is a global variable
    }

    console.log(y); // y is accessible here because var is function scoped and not block scoped

    console.log(globalVar); // globalVar is accessible here because it is a global variable
}

functionSCope();
console.log(globalVar); // globalVar is accessible here because it is a global variable
// console.log(x); // This will throw an error ReferenceError because x is not defined outside the function



/* 
b. can be redeclared and reassigned
*/

// Redeclaring
var a = 10;
var a = 20;

// Reassigning
a = 30;


console.log(a); // Output: 30

/* 
c. hoisting: all var declarations(only declarations) are hoisted to the top and initialized with undefined, which means that they can be used before they are declared. However, the value will be undefined(for var and can't access for let and const(REFERENCE ERROR)) until the line where it is assigned a value is executed.
    till the var assigned to some value it will be in Temporal dead zone (TDZ) applicable for let and const which means that the variable is in a "dead"(undefined value) state until it is assigned a value.
*/

function hoistingExample() {
    console.log(b); // Output: undefined (b is hoisted but not initialized)
    var b = 10;
    console.log(b); // Output: 10

    /* it acts like below 
    var b;
    console.log(b); // Output: undefined
    b = 10;
    console.log(b); // Output: 10
    */
}

hoistingExample();



/* 
2. let: (ES6 feature Recommended)
    a. let is block scoped, which means it is only accessible within the block it is declared in.
*/

let globalLet = "I am a global let variable";

function blockScopeLetTest() {
    let x = 10; // x available for this function scope only

    if(true) {
        let y = 20;
        console.log(globalLet); // globalLet is accessible here because it is a global variable
        console.log(y); // y is accessible here because it is declared in the block scope
        console.log(x); // x is accessible here because it is declared in the function scope
    }

    console.log(globalLet); // globalLet is accessible here because it is a global variable
    // console.log(y); // This will throw an error ReferenceError because y is not defined outside the block

}

blockScopeLetTest();
console.log(globalLet); // globalLet is accessible here because it is a global variable


/* 
b. can be reassigned but not redeclared in the same scope 
*/

let m = 10;
// let m = 20; // This will throw an error SyntaxError because m is already declared in the same scope

m = 50;
console.log(m); // reassigning is allowed so output will be 50


/* 
c. hoisting: let declarations are hoisted to the top of their block scope, but they are not initialized like var(to undefined).So Accessing them before the declaration results in a ReferenceError.
*/

// console.log(n); // n is hoisted but not initialized as not declared before usage. This will throw an error ReferenceError because n is not defined yet
let n = 10;
console.log(n); // Output: 10


let p; //here p is declared before it's usage, so it will be hoisted to the top of the block scope and initialized with undefined at this line of assignement.
console.log(p); // Output: undefined (p is hoisted but not initialized)




/* 3. const: (ES6 feature Recommended)
    a. const is block scoped, which means it is only accessible within the block it is declared in.
*/

const globalConst = "I am a global const variable";

function blockScopeConstTest() {
    const x = 10; // x available for this function scope only
    if(true) {
        const y = 20;
        console.log(globalConst); // globalConst is accessible here because it is a global variable
        console.log(y); // y is accessible here because it is declared in the block scope
        console.log(x); // x is accessible here because it is declared in the function scope
    }   

    console.log(globalConst); // globalConst is accessible here because it is a global variable
    // console.log(y); // This will throw an error ReferenceError because y is not defined outside the block        
}

blockScopeConstTest();
console.log(globalConst); // globalConst is accessible here because it is a global variable
// console.log(x); // This will throw an error ReferenceError because x is not defined outside the function

/* 
b. const variables cannot be reassigned or redeclared in the same scope
*/

const q = 10;
// const q = 20; // This will throw an error SyntaxError because q is already declared in the same scope
// q = 50; // This will throw an error TypeError because q is a constant variable and cannot be reassigned


/*
c. Hoisting: const declarations are hoisted to the top of their block scope, but they are not initialized like var (to undefined). So accessing them before the declaration results in a ReferenceError.
*/

function hoistingConstExample() {
    // console.log(r); // r is hoisted but not initialized as not declared before usage. This will throw an error ReferenceError because r is not defined yet
    const r = 10;
    console.log(r); // Output: 10
}



/* 
4. No declaration: (Not recommended)
    a. If a variable is assigned a value without being declared with keyword like var, let, or const, it becomes a global variable, even if it is inside a function. This can lead to unexpected behavior and bugs in your code.
    NOTE: point 'a' is true only in non strict mode only, In strict mode, assigning a value to an undeclared variable will throw a ReferenceError.
*/

/* without strict mode */
function noDeclarationExampleWithoutStrictMode() {
    undeclaredVar = 10; // This will create a global variable
    console.log(undeclaredVar); // Output: 10
}
noDeclarationExampleWithoutStrictMode();
console.log(undeclaredVar); // Output: 10 (undeclaredVar is accessible here because it is a global variable)

/* with strict mode for that u need to !!! uncomment the "use strict" line  at the top of the file */
function noDeclarationExampleWithStrictMode() {
    undeclaredVar1 = 10; // This will throw an error ReferenceError because undeclaredVar is not defined
    console.log(undeclaredVar1); // Output: 10
}

noDeclarationExampleWithStrictMode();
console.log(undeclaredVar1); // This will throw an error ReferenceError because undeclaredVar1 is not defined