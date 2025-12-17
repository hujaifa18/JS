let score = "33abc" // check with 33 , true , "Hujaifa", undefined
console.log("           Test 1 : ");
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
console.log("           Test 2 : ");
console.log(inBoolean);
// 1 -> true; 0 -> false
// "" -> false
// "Hujaifa" -> true



let someNumber = 33
let stringNumber = String(someNumber)
console.log("           Test 3 : ");
console.log(stringNumber);
console.log(typeof stringNumber);


console.log("           Test 4 : ");
let x = 33
let y = -x
console.log(y);

console.log("           Test 5 : ");
console.log(3+3);
console.log(4-3);
console.log(4*3);
console.log(4**3);
console.log(4/2);


console.log("           Test 6 : ");
let str1 = "Abid "
let str2 = "Hujaifa"
let str3 = str1 + str2
console.log(str3);


console.log("           Test 7 :");
console.log("1" + 2 );
console.log(1 + "2" );
console.log("1" + 2 + 2 );
console.log(1 + 2 + "2" );

console.log("           Test 8 :");
console.log(true);
console.log(+true);
console.log(+"");

console.log("           Test 9 :");
let counter = 100
counter++
console.log(counter);
let counter2 = 100
++counter2
console.log(counter2);

