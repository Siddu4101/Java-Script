/* 
OOP: We consider that JS is a OOP language as it folows the 4 pillers
1. abstraction: u cna have the internal private(#) methods which are not exposed and u will have access to public once which intern uses the 
                private once for ur result but u no need to knwo them
2. encapsulation: u cna combine the prop and methods in a class/obj
3. polymorphism: u can have the runtime(overidding) and compiletime(overloading) is NOT SUPPORTED in JS
4. inheritance: via extend u can inherit the prop and methods
NOTE: Inheritance basically works on prototype(parent class methods which are accessible)
by default Object.prtotype is parent for all the objects
*/

/* 
we had the object literal to create the objects the problem was 
when u want to have the multiple instance it fails by overridding the previous one
this can be handled via Object.create()

We can achive all the hings without need of the class extra keyword and some extra built-in features it is providing 
But thisis more structured and easy and more closre to other language OOp concept so lets see that
*/

const obj = {
    construct : function (name, age) {
        this.name = name
        this.age = age
        return this
    }
}

const o1 = obj.construct("sid", 35)
const o2 = obj.construct("raj", 23)
console.log(o1); //raj
console.log(o2)//raj

const o3 = Object.create(obj)
const o4 = Object.create(obj)
o3.construct("Viju", 21)
o4.construct("Girija", 34)

console.log(o3); //raj
console.log(o4)//raj



/* 
Also u can have the objects / constructors via methods itself 
u can use the method as a constructor by calling it with the new which links the methods prototype.constructor to this method
and use it as a constructor 
*/
function Test(age){
    this.age = age

    this.printAge = function(){
        console.log(`The age is ${this.age}`);
    }
}

const t1 = new Test(10)
const t2 = new Test(20)

console.log("t1",t1,"t2",t2);
t1.printAge()
t2.printAge()


/* 
Classes: gives some extra features
1. creates new instance everytime when u use the new
2. when u call the new it runs the constructor automatically
3. u can have the private(#) var and methods 
4. u don't need to have the let,const,var for the prop as they are the class var and no need to add the function keyword 
   for the functions of the class
5. you can have the static methods and var inside the class but they only accessible from classname and ppart of the class not related to the 
    instance
*/


class TestClass{
    
    #salary; /* this is the private prop*/ 
    static count = 0;

    constructor(name, age){ /* called when a new object is created */
        console.log("Constructor executed...")
        this.name = name/*here this.name created and added as a prop for the instance*/
        this.age = age
    }

    getSalary(){
        return this.#salary
    }

    setSalary(salary){
        this.#salary = salary  //encapsulatin(method + prop)  + abstraction (private) 
    }


    /* The overloading is NOT SUPPORTED in JS it just hides the first method and overides it with the latest method
        And when u call the greet() ==> it uses the greet(name) but name will be undefined as first method is hidden
    */
    greet(){
        console.log(`This is a normal greet method`)
    }

    greet(name){
        console.log(`This is a overloaded greet method with the name : ${name}`)
    }

    static incrementCount(){
        this.count++;
    }
}

const test1 = new TestClass("Sid", 30) 
test1.setSalary(1000)
const test2 = new TestClass("Raj", 20) 
test2.setSalary(40000)
console.log(test1);
console.log(test1.getSalary())
console.log(test2);
console.log(test2.getSalary())

/* polymorphism OVERLOADING IS NOT SUPPORTED */
test1.greet() /* calls the greet(name) ==> passes undefined*/
test1.greet("Parameshwar")

console.log(`count before increment ${TestClass.count}`)
TestClass.incrementCount()
console.log(`count after increment ${TestClass.count}`)


/* Inheritance */
class ChildTestClass extends TestClass{ 
    /* inherits the non-private prop and methods */
    constructor(name, age, working){
        super(name,age)
        this.working = working
    }

    greet(from, to){
        console.log(`This is the greet overridden from parent: ${from} greeting Hello to ${to}`)
    }
}

const child = new ChildTestClass("Laxmi", 29, true)
console.log(child)
child.setSalary(18000)
console.log(child.getSalary())
/* overidding */
child.greet(child.name, "God")




/* 
Behind the extend and the new keyword what happens?
1. new:
    When u write the new keyword basically it creates a new object and injects the prop and methods
    and links the constructor to the prototype and returns the instance and by default everything is a obj in js
    and it will try to looks in it's parent if some thing is not present init by looking inside the prototype of it (prent)
    and by default all the objects/function/arrays have the parent as Object in there prototype and Object has parent of null
    if u want to add any new functionality u can directly add it to the prototype so it is accessible from that object
    ![Objects inheritance via prototype](./objectInheritance.png)
2. extend/inheritans:
    this also by default works on the basis of the prototype itself whenever u want to add a parent to the object u can 
    access the __proto__ and set the parent or u can use the .

3. to include the methods directly u can use the .prototype.funName = defOfTheFunction (This can be done only for the function/constructor as only they have the prototype)
    for our case it is not possible as it is a obj literal for that u need to directly add a fun inside the obj declararion
    i. if u r accessing the prototype of the function to add this function ehrn u need to create a new object 
    after the addition to take effect of this change
    ii. if u r doing it on the constructor(Object.create() / classes) then no need of new obj recreation it will take effect    
*/

const parent = {
    name:"ParentObject",
    parentFun: function(){
        console.log("This is a parent method")
    }
}

const parentschild = {
    name: "ChildObject",
    childFun: function(){
        console.log("This is a child method")
    }
}

/* Option 1: use __proto__ and add as a parent */
// parentschild.__proto__ = parent
// parentschild.parentFun()
// parentschild.childFun()

/* Option 2: use  Objects setProtoType(child,parent) */
Object.setPrototypeOf(parentschild,parent)
parentschild.parentFun()
parentschild.childFun()

/* This is not ossible as obj literal won't have the prototype init
parentschild.prototype.newFunctionAdded = function(){
    console.log("This is the function we are adding via prototype")
}
new parentschild().newFunctionAdded() */



/* 
call bind and apply
1. call: runs immediately helpful to pass the this reference and execute the function via that this and u can pass arg also
2. bind: just bids the this not executes immeditely and returns a new function, u can pass the args
3. apply: same as call but takes args as a array

NOTE: these are not applicable to the arrow function
*/

/* 1.call */

const trial = {
    name: "Ram",
    myFun: function(){
        console.log(`Hey my name is ${this.name}`)
    },
    myFunWithParam: function(...val){
        console.log(`The values passed as a arr ${val}`)
    }
}

trial.myFun()/* works fine prints Ram */

const trial2 = {
    name:"Shyam"
}

// trial2.myFun()//this won't find the fun u can use trial function here
trial.myFun.call(trial2)// this called immediately with Shyam


/* 2. bind */
const trial3={
    name:"Meghadooth"
}
// trial3.myFun()//Not accessible 
const newFun = trial.myFun.bind(trial3) //returns a new function which has trial3 ref in it u can execute
newFun()//prints with Meghdooth


/* 3. apply */
const trial4 = {
    name:"Vishnu"
}

trial.myFunWithParam.apply(trial4, [1,2,3,4])



/* getters and setters

1. getters: helps to get the property these are defined with keyword get propertyName(){return property} while calling no need of the 
() because these are special fun u can directly access via rpoperty name
2. setters: same as above but takes a parameter to set the value

NOTE: The property being used for the setter and getter should not match with the get and set methods else it will make a infinite loop and stuck in that so
better use the _ or the private property to avoid this

The same getters and setters u cna define via Object.defineProperty(obj,proprtyName,{it's settins like writable, enumerable etc..})
But that was a legecy code 
*/


class GetterSetterTest{
    constructor(name, age){
        this._name = name
        this._age = age
   }

   get name(){
    return this._name
   }

   set name(name){
    this._name = name
   }

}

const sid = new GetterSetterTest("sid", 10)
console.log(sid.name)
sid.name = "Raj"
console.log(sid.name)


/* 
Lexical scoping and closure
lexcial scopping:
Here it has the lexical scopping that is the reason u r able to see the Siddu(username which is a part of the outerscope)
but due to lexical scoping u can see it (when u get the inner function only from the return it includes the outer lexical scope too else it will be undeined)
don't confuse with this when u extract inner fun and call it it forgets about this but here it is a different concept 

closure:
Retaining the outerscope var inside the inner function even though the outer is already completed and not giving the 
direct access to the outer var
*/
/* Lexical scopping */
function outerScope(pass){
    let username = "Siddu"
    function innerScope(){
        console.log(`Welcome to user ${username}`)
    }

    function innerScope2(pass){
        console.log(`The username is ${username} and the password is ${pass}`)
    }

    innerScope()
    innerScope2(pass)

    return innerScope
}

const innerScopeFunction = outerScope("hey123")
innerScopeFunction() /*  due to lexical scopping u can see the username even u call only the inner function with extract of return */

/* closure */
function createBankAccount() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
            console.log(balance);
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount();

account.deposit(500);            // 1500
console.log(account.getBalance()); // 1500

console.log(account.balance);    // undefined