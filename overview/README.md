
### Helpful Links 🔗
- Playlist: https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37
- MDN JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## JavaScript Overview 🚀

### 1) Hello World + Comments 💬

```js
// Single-line comment
/* Multi-line comment */
console.log("Hello, World!");
```

### 2) Variables in JavaScript 📦

| Declaration | Scope | Redeclare | Reassign | Hoisting | Recommendation |
|-----------|-------|-----------|----------|----------|-----------------|
| 📌 `var` | Function | ✅ Yes | ✅ Yes | undefined | ❌ Avoid |
| 📍 `let` | Block | ❌ No | ✅ Yes | TDZ | ✅ Prefer |
| 🔒 `const` | Block | ❌ No | ❌ No | TDZ | ✅ Prefer |

#### `var` - Old & Problematic
```js
var x = 10;
if (true) {
	var x = 20; // overwrites! (function-scoped)
}
console.log(x); // 20 ⚠️
```

#### `let` - Modern Choice
```js
let x = 10;
if (true) {
	let x = 20; // separate scope
}
console.log(x); // 10 ✅
```

#### `const` - Best Practice
```js
const x = 10;
// x = 20; // TypeError ❌
// Objects can still be mutated
const obj = { name: "John" };
obj.name = "Jane"; // ✅ allowed
```

#### Hoisting Comparison ⚡
```js
console.log(a); // undefined (var initialized with undefined)
var a = 10;

// console.log(b); // ❌ ReferenceError (TDZ - Temporal Dead Zone)
let b = 10;

// console.log(c); // ❌ ReferenceError (TDZ)
const c = 10;
```

#### No Declaration (⚠️ Dangerous)
```js
function test() {
	myVar = 10; // creates global in non-strict mode!
}
```
✅ **Solution:** Use `"use strict";` to prevent accidental globals

---

### 3) Data Types in JavaScript 🎯

JS is **dynamically typed**. There are **7 primitive types** + **1 non-primitive type**:

#### Primitive Data Types (Immutable & Compare by VALUE) 🔒

| Type | Example | Key Points |
|------|---------|-----------|
| 📊 `number` | `42`, `3.14` | `Infinity`, `-Infinity`, `NaN` (all type "number") |
| 📝 `string` | `"Hello"`, `` `Hi ${x}` `` | Template literals with `${}` interpolation |
| ✓ `boolean` | `true`, `false` | Used in conditionals |
| ❓ `undefined` | variable declared but not assigned | Auto-assigned to uninitialized variables |
| ⊘ `null` | `let x = null` | Intentional absence; `typeof null === "object"` ⚠️ |
| 🔑 `symbol` | `Symbol("id")` | Each unique, even same description: `Symbol("x") !== Symbol("x")` |
| 🔢 `bigint` | `123n` | For huge integers beyond `Number.MAX_SAFE_INTEGER` |

**Number Examples:**
```js
let num = 42;
console.log(1/0); // Infinity
console.log(-1/0); // -Infinity
console.log(0/0); // NaN
console.log("text" * 100); // NaN (non-numeric operation)
console.log(typeof NaN); // "number" ⚠️
```

**String Examples:**
```js
let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}!`; // Template literal with interpolation
console.log(typeof str1); // "string"
```

**Symbol Examples:**
```js
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false (each symbol is unique)

// Use as unique object keys
let obj = {
	name: "John",
	[sym1]: "secret value"
};
console.log(obj[sym1]); // "secret value"
```

**BigInt Examples:**
```js
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // "bigint"
```

---

#### Non-Primitive Data Types (Objects - Compare by REFERENCE) 📦

**Mutable - Multiple properties/methods**

```js
// Object
const user = { name: "John", age: 25 };

// Array
const nums = [1, 2, 3, 4, 5];
console.log(nums[0]); // 1

// Function Declaration
function add(a, b) {
	return a + b;
}

// Function Expression
const multiply = function(a, b) {
	return a * b;
};

// Arrow Function
const divide = (a, b) => a / b;

// Built-in Objects
const date = new Date();
const map = new Map();
map.set("key", "value");
console.log(map.get("key")); // "value"
```

---

#### Value vs Reference Comparison 🔄

**Primitives - Copied (separate copies)**
```js
let a = 10;
let b = a; // b gets a COPY of a's value
b = 20;
console.log(a); // 10 ✅ (unchanged, separate value)
console.log(a === b); // false (different values)
```

**Objects - Referenced (same location)**
```js
let obj1 = { x: 10 };
let obj2 = obj1; // obj2 points to SAME object
obj2.x = 20;
console.log(obj1.x); // 20 ⚠️ (both changed!)
console.log(obj1 === obj2); // true (same reference)
```

**Key Insight:**
- ✅ Primitives are **immutable** - value never changes, but variable can be reassigned
- ⚠️ Objects are **mutable** - their properties CAN be changed
- ✅ `const` object: can't reassign, but CAN mutate properties

```js
const obj = { name: "John" };
obj.name = "Jane"; // ✅ allowed (mutation)
// obj = {}; // ❌ error (reassignment not allowed)
```

---




