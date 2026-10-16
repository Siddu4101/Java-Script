//Promises in JS: these are the eventual results of a async task
//async task => The task triggered in a sync flow but can continue without blocking the main thread and runs in runtime(browser)
// like timouts,fetch etc.. and adds the callback in the queue so eventloop and schedule an drun them
//then,catch finally also returns the promise which will be resolved in the next chains

//creation of the promise
function promiseInstance(isLoggedIn) {
  const promiseInstance = new Promise((resolve, reject) => { // has 2 things 1 for success indicator and another for the failure
    if (isLoggedIn) 
      resolve("The user is logged in"); //to indicate the success and add the then() callbak
    else 
      reject("The uaser is logged out");// to indicate the failure and add the catch() callback
  });

  return promiseInstance;
}

//when user logged in it runs the resolve and passes the result to the then()
promiseInstance(true)
  .then((result) => {
    console.log(result);
  })
  .catch(error => {
    console.log(error)
  })
  .finally(()=> { //this block runs everytime
    console.log("Promise completed...")
  })


//when user logged out it runs the reject and passes the result to the error()
promiseInstance(false)
  .then((result) => {
    console.log(result);
  })
  .catch(error => {
    console.log(error)
  })
  .finally(()=> {
   console.log("Promise completed..."); 
  })


//u can create e fullfilled or rejected promise too via static methods
//fullfilled
Promise.resolve("success").then((result)=> console.log("Hey promise is ", result))
//reject
Promise.reject("failed").catch((result)=> console.log("Ohh promise is ", result))

//you can pass the data with multiple then by last then result
Promise.resolve(10)
  .then(res => res * 10)
  .then(res => res+50)
  .then(res => console.log(`The result of method chaining is ${res}`))



//asyn and await to consume the promise instead of using then catch and finally
//async function alwasy returns the promise as a return type
//u must have the catch block if u have the reject case possiblein the promise
async function consumePromise(isLoggedIn) {
  try{
  const result = await promiseInstance(isLoggedIn);
  console.log(`The promise consumption via async and await ${result}`)
  }catch(error){
  console.log(`The promise consumption via async and await Failure ${error}`)
  } 
}

consumePromise(true)
consumePromise(false)





















