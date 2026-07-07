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
    console.log(x);

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
c. hoisting: all var declarations(only declarations) are hoisted to the top of their scope, which means that they can be used before they are declared. However, the value will be undefined until the line where it is assigned a value is executed.
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
