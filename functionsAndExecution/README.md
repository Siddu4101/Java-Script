## Functions in JavaScript

- **Function declaration:** You can call it before its definition. If an argument is missing, a default value is used.
    ```js
    sum(2, 3); // 10
    function sum(a, b, c = 5) { return a + b + c; }
    ```
- **Function expression:** A function can be stored in a variable. With `const`, call it only after that line.
    ```js
    const varFunction = function () {};
    varFunction();
    ```
- **Arrow function:** A shorter function form; like the `const` expression above, it can be used after initialization.
    ```js
    const arrowFun = () => {};
    ```
- **`this` in object methods:** A regular method called as `person.normal()` gets `person` as `this`. An arrow property does not; it uses `this` from outside the object.
    ```js
    const person = {
        name: "Siddu",
        normal() { console.log(this.name); },
        arrow: () => console.log(this.name),
        outer() {
            const inner = () => console.log(this.name);
            inner();
        }
    };

    person.normal(); // Siddu
    person.arrow();  // surrounding scope's this, not person
    person.outer();  // Siddu: inner arrow inherits this from outer()
    ```
- **Rest parameters:** `...nums` collects any number of arguments into an array.
    ```js
    sumOfn(1, 2, 3, 4); // 10
    ```
- **Nested functions:** `inner` is defined inside `outer`, so it can use `outer`'s variables and is called from there. It is not available outside `outer`.
    ```js
    function outer() {
        const message = "Hello";
        function inner() { console.log(message); }
        inner(); // Hello
    }

    outer();
    ```
- **IIFE:** Runs immediately when execution reaches it. Its local variables stay inside, which is useful for one-time setup without adding names outside.
    ```js
    let iname = "Raj", iage = 23;
    (function init() {
        let iname = "Sid", iage = 30;
        console.log(iname, iage); // Sid 30
    })();
    console.log(iname, iage); // Raj 23
    ```

---



# 🧠 JavaScript Execution Context, Memory & Call Stack

## Example

``` js
var a = 10;
var b = 20;

function add() {
    var sum = a + b;
    console.log(sum);
}

add(); // 30
```

## 1. 🌍 Global Execution Context

When the script starts, JavaScript creates a **Global Execution Context
(GEC)**. It provides the environment for evaluating the global code.

## 2. 🧠 Memory Creation Phase

Before ordinary statements execute, declarations are set up and
initialized according to their rules.

``` text
Global Environment
┌─────────────────────────┐
│ a   → undefined         │
│ b   → undefined         │
│ add → function          │
└─────────────────────────┘
```

-   `var` bindings start as `undefined`.
-   Function declarations are initialized and can generally be called
    before their source position.
-   The function body has **not** run yet.

## 3. ▶️ Code Execution Phase

JavaScript evaluates statements from top to bottom:

``` js
var a = 10; // a: undefined → 10
var b = 20; // b: undefined → 20
```

Now the global environment contains `a = 10`, `b = 20`, and the `add`
function.

## 4. 📚 Call `add()`

When JavaScript reaches `add()`, it creates a **Function Execution
Context (FEC)** for that call and pushes it onto the call stack.

``` text
Call Stack (top first)
┌─────────────────────┐
│ add()               │ ← currently executing
├─────────────────────┤
│ Global Context      │
└─────────────────────┘
```

## 5. 🔎 Execute the Function

``` js
var sum = a + b;
console.log(sum);
```

The local `sum` binding starts as `undefined`. JavaScript looks for `a`
and `b` locally, then finds them in the outer (global) environment.

``` text
Function Environment       Global Environment
┌──────────────────┐       ┌──────────────────┐
│ sum → undefined  │       │ a → 10           │
│        ↓         │       │ b → 20           │
│ sum → 30         │       │ add → function   │
└──────────────────┘       └──────────────────┘

             10 + 20 = 30
```

`console.log(sum)` prints:

``` text
30
```

## 6. ↩️ Return & Finish

There is no explicit `return`, so `add()` implicitly returns
`undefined`. Its active context is removed from the call stack, and
global execution resumes.

``` text
Before return:              After return:

┌───────────────┐           ┌───────────────┐
│ add()         │           │ Global        │
├───────────────┤   ─────▶  │ Context       │
│ Global        │           └───────────────┘
└───────────────┘
```

The script finishes when no more statements remain.

> **Note:** `console.log(sum)` prints `30`, but `var result = add();`
> stores `undefined` in `result` unless the function explicitly does
> `return sum;`.

## ✅ Remember

-   **Execution context:** the environment in which code is evaluated.
-   **Memory creation:** declarations/bindings are established and
    initialized according to JavaScript rules.
-   **Code execution:** statements run and assignments happen.
-   **Call stack:** tracks active function calls using **LIFO** (last
    in, first out).
-   **Lexical scope:** a function can access variables in its outer
    environment.

