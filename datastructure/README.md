# JavaScript Data Structures 📚

## Arrays 🧺

An array stores an ordered list of values. Here are the basics from [`array.js`](array.js).

### Create an Array 🏗️

```js
const numbers = [1, 2, 3];
Array.from("hello"); // ["h", "e", "l", "l", "o"]
Array.of(1, 2, 3);   // [1, 2, 3]
```

`Array.from()` builds an array from an iterable (like a string); `Array.of()` makes an array from its arguments.

### Add and Remove Items ➕➖

```js
const items = [1, 2, 3];
items.push(4);    // [1, 2, 3, 4] — add at the end
items.pop();      // [1, 2, 3]    — remove from the end
items.unshift(0); // [0, 1, 2, 3] — add at the beginning
items.shift();    // [1, 2, 3]    — remove from the beginning
```

### Access, Search, and Loop 🔎

```js
const items = [10, 20, 30];
items[0];                 // 10 — indexes start at 0
items[items.length - 1];  // 30 — last item
items.indexOf(20);        // 1 — position, or -1 if missing
items.includes(30);       // true
items.forEach(item => console.log(item));
```

### Combine Arrays 🧩

```js
const first = [1, 2];
const second = [3, 4];

[...first, ...second]; // [1, 2, 3, 4]
first.concat(second);   // [1, 2, 3, 4]
[[1, 2], [3, 4]].flat(); // [1, 2, 3, 4]
```

`flat(2)` can flatten arrays nested up to two levels. By contrast, `first.push(second)` adds `second` as one nested item: `[1, 2, [3, 4]]`.

## Objects 🧩

Objects store related values as key-value pairs. You can create one with an object literal or the `Object` constructor; literals are the usual choice.

### Create and Access Properties 🔑

```js
const emptyObject = {};
const objViaConstructor = new Object();
objViaConstructor.name = "Sid";

const keySymbol = Symbol("key");
const obj = {
	name: "Sid",
	age: 25,
	course: ["JS", "Java"],
	"full name": "Siddu P",
	greet: function() { console.log("Hello everyone!"); },
	sayBye() { console.log("Bye everyone!"); },
	[keySymbol]: "Symbol value"
};

obj.name;             // "Sid"; dot notation
obj["full name"];     // "Siddu P"; brackets for spaced keys
obj[keySymbol];       // "Symbol value"
obj.greet();
obj.sayBye();
```

Add, update, or remove properties with `obj.newName = "Siddu"`, `obj.age = 26`, and `delete obj.name`. `const` prevents replacing the object variable, not changing its properties. Check for an own property with `hasOwnProperty()`:

```js
obj.hasOwnProperty("nwName");   // false
obj.hasOwnProperty("newName"); // true
```

### Nest and Inspect 🔎

```js
const nested = {
  name: "Raj",
  address: { street: "Bazaar road", pin: 581212, place: "Tadas" }
};

nested.address.place;          // "Tadas"
nested["address"]["pin"];     // 581212
Object.keys(nested);           // ["name", "address"]
Object.values(nested);         // property values
Object.entries(nested);        // [key, value] pairs
```

### Copy Objects 📋

```js
const obj1 = { name: "sid", address: { street: "Bazaar road" } };
const obj2 = obj1;                   // same object; edits through either name are shared
const obj3 = { ...obj1 };            // shallow copy; nested address is still shared
const obj4 = structuredClone(obj1);  // deep copy of supported values

obj3.address.street = "Halvoor";    // also changes obj1.address.street
obj4.address.street = "Arigeri";    // does not change obj1
```

### Merge Objects 🧩

```js
const o1 = { 1: "a", 2: "b" };
const o2 = { 3: "c", 4: "d" };
const o6 = { 6: "m", 7: { test: "hey" } };

const nestedObjects = { o1, o2 };       // keeps o1 and o2 as nested properties
const spreadMerge = { ...o1, ...o2 };   // combines their properties
const assignMerge = Object.assign({}, o1, o2, o6);
```

Spread and `Object.assign()` make shallow merges; nested values such as `o6`'s `{ test: "hey" }` remain nested. If keys conflict, the later source object's value is used.

### Destructure ✂️

Array destructuring uses positions and can skip values:

```js
const arr = [1, 2, 3, 4, 5];
const [one, two, , , five] = arr; // one: 1, two: 2, five: 5
```

Object destructuring selects properties by name. It can rename them, use defaults, and reach into nested objects:

```js
const objDestructure = {
  name: "sid",
  age: 26,
  address: { street: "Bazaar road", place: "Tadas" }
};

const {
  name: fname,
  address: { street: streetName },
  age,
  company = "SG"
} = objDestructure;
// fname: "sid", streetName: "Bazaar road", company: "SG"
//fname Ans streetName are the renamed version while age is as it is and company uses the default value if not present in the object/or undefined

function showStudent({ name, age }) {
  console.log(`Student: ${name}, age: ${age}`);
}
```
