
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

JavaScript supports 4 styles:
- `var` (old, function-scoped)
- `let` (modern, block-scoped)
- `const` (modern, block-scoped, no reassignment)
- no declaration (not recommended)

### `var` (function scope)

```js
var globalVar = "I am a global variable";

function demo() {
	var x = 10;
	if (true) {
		var y = 20;
	}
	console.log(y); // works: var is function-scoped
}
```

### `let` (block scope)

```js
let m = 10;
m = 50; // reassignment allowed

if (true) {
	let y = 20;
}
// console.log(y); // ReferenceError
```

### `const` (block scope + fixed binding)

```js
const q = 10;
// q = 50; // TypeError
```

### Hoisting Quick View ⚡

```js
console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError
let b = 10;

// console.log(c); // ReferenceError
const c = 10;
```

### No Declaration (avoid) ⚠️

```js
function badPractice() {
	undeclaredVar = 10; // becomes global in non-strict mode
}
```

Use strict mode to prevent accidental globals:

```js
"use strict";
```

---




