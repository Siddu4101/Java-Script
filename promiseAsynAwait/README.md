# 🚀 JavaScript Promises & Async/Await

## 1. 🤔 What is a Promise?

A **Promise** is a JavaScript object that represents the eventual result of an asynchronous operation.

📌 Common use cases:
- 🌐 Fetching data from APIs
- ⏳ Waiting for asynchronous operations
- 📂 Processing data that becomes available later

💡 **Real-life example:** Ordering food 🍕 — the order may be delivered successfully or fail.

A fulfilled or rejected Promise is called **settled**. Once settled, its state cannot change.

---

## 2. 🛠️ Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});
```

### 📌 Important points

- `new Promise()` creates a Promise object.
- The executor function runs **immediately and synchronously**.
- `resolve(value)` fulfills the Promise with a value.
- `reject(reason)` rejects the Promise with a reason.

⚠️ Creating a Promise does **not automatically make synchronous code asynchronous**.

---

## 3. 🎯 Handling Promise Results

### ✅ `.then()` — Handle success

```javascript
myPromise.then((result) => {
    console.log(result);
});
```

### ❌ `.catch()` — Handle errors

```javascript
const promise = Promise.reject("Something went wrong!");

promise.catch((error) => {
    console.log(error);
});
```

### 🧹 `.finally()` — Run cleanup

```javascript
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Operation completed"));
```

📌 `finally()` runs whether the Promise fulfills or rejects. It is useful for cleanup, such as hiding a loading spinner.

---

## 4. ⚙️ How Promises Work with the Event Loop

JavaScript executes synchronous code on its main thread.

When a Promise settles, its registered `.then()` or `.catch()` callback is scheduled as a **microtask**.

```javascript
console.log("1. Start");

const promise = new Promise((resolve) => {
    console.log("2. Executor");
    resolve("Hello");
});

promise.then(result => {
    console.log("4.", result);
});

console.log("3. End");
```

**Output:**

```text
1. Start
2. Executor
3. End
4. Hello
```

### 🧠 Why this order?

1. Synchronous code executes first.
2. The Promise executor runs immediately.
3. `resolve()` settles the Promise.
4. The `.then()` callback is scheduled as a microtask.
5. Once synchronous execution finishes, the callback runs.

### 🔀 Promise vs `setTimeout()`

```javascript
console.log("Start");

setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

**Output:**

```text
Start
End
Promise
Timer
```

💡 **Remember:** After synchronous execution, Promise microtasks run before the next timer task in this example.

---

## 5. 🔗 Promise Chaining

Use `.then()` chaining when multiple operations depend on previous results.

```javascript
Promise.resolve(10)
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
        return num + 5;
    })
    .then(num => console.log(num));
```

**Output:**

```text
10
20
25
```

### 📌 How chaining works

- Each `.then()` returns a **new Promise**.
- Returning a value passes it to the next `.then()`.
- Returning another Promise makes the chain wait for its outcome.
- Throwing an error rejects the resulting Promise and skips to the next applicable `.catch()`.

---

## 6. ✨ `async` and `await`

`async/await` is **not an alternative to Promises**. It is syntax that makes working with Promises easier to read(without need of then and catch and finally they are needed if ur async func returns something and u want to use there).

### Using `.then()`

```javascript
getData().then(result => {
    console.log(result);
});
```

### Using `async/await`

```javascript
async function main() {
    const result = await getData();
    console.log(result);
}

main();
```

Both approaches can handle the same Promise.

### 🔑 Important rules

**1. `async` always returns a Promise**

```javascript
async function getNumber() {
    return 10;
}

getNumber().then(num => console.log(num)); // 10
```

Returning `10` is equivalent in outcome to returning `Promise.resolve(10)`.

**2. `await` waits for a Promise's outcome**

```javascript
async function main() {
    const result = await Promise.resolve("Hello");
    console.log(result);
}
```

**3. `await` does not block the entire JavaScript thread.**

It suspends the current async function while other JavaScript work can continue.

```javascript
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

async function fetchData() {
  console.log("1. Started fetching");

  const result = await getData();

  console.log("4.", result);
}

fetchData();

console.log("2. Outside async function");
console.log("3. This also executes");
```

**4. Handle errors using `try...catch`.** The try catch is needed when ur await promise can produce the reject case

```javascript
async function main() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}
```

---

## 7. 🌐 Real-World Example: Fetch API

`fetch()` returns a Promise, making it useful for retrieving data from a server.

### Using `.then()`

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("Request failed");
        }

        return response.json();
    })
    .then(user => {
        console.log(user.name);
        console.log(user.email);
    })
    .catch(error => {
        console.log(error.message);
    });
```

### Using `async/await`

```javascript
async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const user = await response.json();

        console.log(user.name);
        console.log(user.email);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUser();


// for other than GET u can specify the method and rest things like header body etc..
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(json => console.log(json))

```

📌 **Important points:**

1. fetch() is used for HTTP communication with servers.
2. It returns a Promise.
3. response.json() also returns a Promise.
4. .then() and async/await are two ways to work with Promises.
5. fetch() does not automatically reject for HTTP 404 or 500 responses.
6. JSON.stringify() converts JavaScript data into JSON text for requests.
7. JSON.parse() converts JSON text into a JavaScript value, while response.json() handles reading and parsing the response body asynchronously.

⚠️ `fetch()` does not automatically reject for HTTP errors such as `404` or `500`. Check `response.ok` explicitly.


response.ok is true for HTTP statuses in the 200–299 range.
There are two different kinds of errors to remember:

| Error type | Example | Does `fetch()` reject automatically? |
|---|---|---|
| Network error | Connection refused | Usually yes |
| HTTP error | 404, 500 | No |
| Invalid JSON | Body isn't valid JSON | `response.json()` rejects |
---

## 8. 🧰 Useful Promise Methods

| Method | Purpose |
|---|---|
| `Promise.resolve(value)` | Create a fulfilled Promise |
| `Promise.reject(error)` | Create a rejected Promise |
| `Promise.all([...])` | Fulfill when all fulfill; rejects if one rejects |
| `Promise.allSettled([...])` | Wait for all Promises to settle |
| `Promise.race([...])` | Settle with the first Promise to settle |
| `Promise.any([...])` | Fulfill with the first fulfilled Promise; reject if all reject |

### Example: `Promise.all()`

```javascript
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then(results => {
    console.log(results);
});
```

**Output:**

```text
[10, 20, 30]
```

💡 Use `Promise.all()` when independent asynchronous operations can run concurrently and you need all their results.

---

## 9. 🧠 Quick Revision

- 🔹 **Promise:** Represents an eventual asynchronous result.
- 🔹 **`resolve()` / `reject()`:** Fulfill or reject a Promise.
- 🔹 **`.then()`:** Handle success and chain operations.
- 🔹 **`.catch()`:** Handle rejection and errors.
- 🔹 **`.finally()`:** Perform cleanup.
- 🔹 **Microtask queue:** Schedules Promise reaction callbacks.
- 🔹 **`async`:** Makes a function return a Promise.
- 🔹 **`await`:** Suspends the current async function until an outcome is available.
- 🔹 **`async/await` vs Promises:** Different syntax for working with the same Promise mechanism.
- 🔹 **`fetch()`:** A common real-world API that returns a Promise.

