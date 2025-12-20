/*
    Primitive 
        7 types -- String, Number, Boolean, null, Undefined, Symbol, Bigint
*/
const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

/*
    Reference(Non Primitive)
        Array, Objects, Functions
*/

const students = ["Hujaifa","Rabbi "];
let myObj = {
    name : "Hujaifa",
    age : 22,
}

const myFunction = Function()
{
    console.log("Hello");
    
}
console.log(typeof myFunction);
