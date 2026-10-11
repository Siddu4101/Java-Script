//object creation
const emptyObject = {} //via object literal 
console.log("Empty object ",emptyObject)

const objViaConstructor = new Object(); //via constructor

objViaConstructor.name = "Sid"
console.log("Object via constructor ", objViaConstructor)


let keySymbol = Symbol("key");
const obj = {
    name: "Sid",//str
    age: 25, //num
    course: ["JS","Java"], //stores array
    "full name":"Siddu P", //if key have the space please use double quotes
    greet: function(){  //normal function declaratino
        console.log("Hello everyone!") 
    },
    sayBye(){ //shorthand function declaration
        console.log("Bye everyone!");
    },
    [keySymbol]: "Symbol value"//defining the symbol
}

console.log("object with data ",obj)

//Accessing data
console.log("Name: ", obj.name)
console.log("Course: ",obj.course)
console.log("Full name: ",obj["full name"])
obj.greet()
obj.sayBye()
console.log(obj[keySymbol])//to access symbol

//Update / insert /delete values
//insert
obj.newName = "Siddu"

//update
obj.age = 26

//delete
delete obj.name

console.log(obj)

/*NOTE: As we have seen the obj is a const but still i can do the update delete or insert on it bcz it prevents the 
ref change if i try obj = {} this will fail but in exising one u can mutate anything
*/

//to check whether object has a perticular field or not
console.log(obj.hasOwnProperty("nwName"))//false
console.log(obj.hasOwnProperty("newName"))//true

//Nested objects
const nested = {
    name: "Raj",
    age: 20,
    address: {
        street: "Bazaar road",
        pin: 581212,
        place: "Tadas"
    }
} 

console.log(nested)
console.log(nested.address.place)
console.log(nested["address"]["pin"])


//inbuilt function for aceessing things gives in array form
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


//crting the copy of the objects 
// 1. reference assignment: affects both as they share the same ref
const obj1 = {
    name: "sid",
    address: {
        street: "Bazaar road"
    }
}

const obj2 = obj1
obj2.name = "Raj"

console.log(obj1) //Raj
console.log(obj2) //Raj

//2. shallow copy: creates a new object and copies the properties to that only one layer nested objects still use shared ref
const obj3 = {...obj1}

obj3.name = "Viju"
obj3.address.street = "Halvoor"

console.log(obj1) //name = Raj street= Halvoor
console.log(obj3) //name = Viju street= Halvoor

//3. Deep copy: it does creates the new objects for the nested ones also NOTE: only if it is a supported js datatype

const obj4 = structuredClone(obj1)

obj4.address.street = "Arigeri"

console.log(obj1)
console.log(obj4)


//mergin objects
const o1 = {1:"a", 2:"b"}
const o2 = {3:"c", 4:"d"}

//via new object this is not what we expected
const o3 = {o1,o2}
console.log("via new object",o3)//{ o1: { '1': 'a', '2': 'b' }, o2: { '3': 'c', '4': 'd' } }

//via spread
const o4 = {...o1,...o2}
console.log("via spread operator ", o4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//via assign
const o6 = {6:"m",7:{test:"hey"}}
const o5 = Object.assign({}, o1,o2,o6)

console.log("Via assign ", o5)
/* Via assign  {
  '1': 'a',
  '2': 'b',
  '3': 'c',
  '4': 'd',
  '6': 'm',
  '7': { test: 'hey' }
}
  */
//NOTE: The nested objects are still not flattened you need handle them manually


//array destructuring: works based on the index based on index u can capture the values in the separate variables
let arr = [1,2,3,4,5]
const [one, two, , ,five] = arr //u can skip some of the element if u don't want

console.table([one,two,five])

//function destructuring
const student ={}
function withoutDestructure(student){
    console.log(`student name ${student.name} \nStudent age: ${student.age}`)
}
//without destructuring
withoutDestructure({name:"Sid",age:25})

//with destructuring
function withDestructure({name,age}){ // u can directly deine the var instead of new object 
    console.log(`student name ${name} \nStudent age: ${age}`)
}
//without destructuring
withDestructure({name:"Sid",age:25})

//Object destructuring: Based on the property names 
const objDestructure = {
    name: "sid",
    age: 26,
    address: {
        street: "Bazaar road",
        place: "Tadas"
    }
}

const {name: fname, address:{street:streetName},age, company="SG"} = objDestructure //fname and the streetName are the renamed versino if u want age i stored in the same var The company has a default value if it is not defined in the object it will be used 
console.log(`Name: ${fname} street: ${streetName} age: ${age} company: ${company}`)


