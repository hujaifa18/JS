const name = "Hujaifa"
const id = 18

//console.log(name + id + " KYAU");

console.log(`My Name is ${name} and idNumber is ${id}`);

const myName = new String('Abid Hasan')
console.log(myName[0]);
console.log(myName.length);
console.log(myName.__proto__);
console.log(myName.toUpperCase());
console.log(myName.charAt(6));
console.log(myName.indexOf('n'));

const newString = myName.substring(0, 4)
console.log(newString);

const anotherString = myName.slice(-8, 6)
console.log(anotherString);

const newStr = "     Hujaifa    "
console.log(newStr);
console.log(newStr.trim());
