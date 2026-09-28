// Array Example:
let arr = [1, 2, 3, 4, 5];
console.log(arr);


//1. add and remove elements from the array end
arr.push(6); // add element to the end
console.log(arr);

arr.pop(); // remove element from the end
console.log(arr);

//2. add and remove elements from the array beginning
arr.unshift(0); // add element to the beginning
console.log(arr);

arr.shift(); // remove element from the beginning
console.log(arr);

//3. access elements by index
console.log(arr[0]); // first element
console.log(arr[arr.length - 1]); // last element

//4. find the index of an element
console.log(arr.indexOf(3)); // index of element 3

//5. check if an element exists in the array
console.log(arr.includes(3)); // true if element 3 exists

//6. iterate over the array
arr.forEach((element) => {
  console.log(element);
});

//7. nested array
let normalArray1 = [1,2,3];
let normalArray2 = [5,6,7];

//combining multiple arrays into one
let combinedArray = [normalArray1, normalArray2];
console.log(combinedArray);//[[1,2,3],[5,6,7]]

let combineWithSpread = [...normalArray1, ...normalArray2];
console.log(combineWithSpread);// [1,2,3,5,6,7]

// let combinedWithConcat = normalArray1.concat(normalArray2);
// console.log(combinedWithConcat);// [1,2,3,[5,6,7]]

// console.log("normalArray1 after push: " + normalArray1); //[1,2,3,[5,6,7]]
// console.log("normalArray2 after push: " + normalArray2); //[1,2,3,[5,6,7]]
// normalArray1.push(normalArray2);//[1,2,3,[5,6,7]]
// console.log("combined with push: " + normalArray1); //[1,2,3,[5,6,7]]


// let combinedWithFlat = [normalArray1, normalArray2].flat();