
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




