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


//+++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive)
console.log("                  Stack Memory");

let firstName = "Abid Hasan"
let handle = firstName
handle = "Hujaifa"
console.table([firstName,handle])

//Heap(Non Primitive)
console.log("                  Heap Memory");

let userOne = {
    email : "abidhasan@12",
    id : 18,
}
let userTwo = userOne
userTwo.email = "Hujaifa@013"
console.table([userOne.email,userTwo.email])
