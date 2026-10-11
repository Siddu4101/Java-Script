//how to create a funcion
console.log(`sum of 2,3 and default c=5 is ${sum(2,3)}`) //no hoisting for normal function declaration

console.log("gllobal scope this outside the function ",this)
function sum(a, b, c=5){ // c is default param
    console.log("This inside normal function",this)//prints global scope value
    return a+b+c;
}


//via var here hoisting is applied so like normal function u cannot access the function before it's defined as a var
// varFunction() //Throws error
const varFunction = function varFun(){
    console.log("This inside function assigned to var",this) //prints global scope this value
    console.log("This is a var function can't be accessed before declared")
}
varFunction()//works fine

//via arrow function: This is also same as a var function
// arrowFun()//throws error
const arrowFun = ()=>{
    console.log("This inside arrow function",this) //{}
    console.log("This is a arrow function his also can't be accessed before it's declaration")
}
arrowFun()//works fine

//this working inside the object methods : The arrow function takes the scope where they have deckared for ex: for first arrow it takes scope of module scope not the root scope 
// and when u define inside the outer function it takes the scope of the outer that is person now
const person = {
    name: "Siddu",

    normal() {
        console.log("name via this of objects noraml function",this.name);//siddu
    },

    arrow: () => {
        console.log("name via this of objects arrow function", this.name);//undefined
    },
    outer(){
        console.log("This name inside the objects normal function", this.name); //siddu
        let inner = ()=>{
        console.log("This name inside the objects nested arrow function", this.name);//siddu because surroding is a outer this which refer to siddu
        }
        inner() //if inner is a normal function and if u call it it will print undefined because now it is  called directly inside witout the object
    }
};

person.normal(); // student object
person.arrow();  // surrounding scope's this
person.outer();


//multi param function
function sumOfn(...nums){ //it considers this as a arry
    let sum = 0;
    nums.forEach(num => sum+=num)
    return sum;
}

console.log(`sum of 1,2,3,4 is ${sumOfn(1,2,3,4)}`)


//nested function: u can have fuction inside the function but it can be called only within the outer function itself
function outer(){
    console.log("Outer function....")
    function inner(){
        console.log("Inner function....")
    }
    inner();//only accessible inside the outer function
}

outer()


//this keyword usage inside the functios


/*IIFE(immedeately inoked function expression)
runs at first when execution starts
avoids the global scope polution
can be used for the private var access avoidance
initialization of some connection like db
*/

let iname = "Raj"
let iage = 23;

(function init(){
    let iname = "Sid"
    let iage = 30
    console.log(`The  IIFE initialization name ${iname} and age is ${iage}`)
})();
console.log(`The outside IIFE name ${iname} and age is ${iage}`)
