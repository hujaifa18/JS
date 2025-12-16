let score = "33abc" // check with 33 , true , "Hujaifa", undefined
console.log("Test 1 : ");
console.log(typeof score);
let value = Number(score)
console.log(typeof value);
console.log(value);
// "33abc" -> Nan
// 33 -> 33
// true -> 1; flase-> 0
// null -> 0


let isLoggedIn = 1
let inBoolean = Boolean(isLoggedIn)
console.log("Test 2 : ");
console.log(inBoolean);
// 1 -> true; 0 -> false
// "" -> false
// "Hujaifa" -> true



let someNumber = 33
let stringNumber = String(someNumber)
console.log("Test 3 : ");
console.log(stringNumber);
console.log(typeof stringNumber);