const studentId = 6224205101018
let studentName = "Hujaifa"
var studentEmail = "abidhasanhujiafa1215@gmail.com"
studentDistrict = "Sirajgonj"
let studentState;

// studentId = 12 //Not alowed because it is decleared as a constant
console.log(studentId);

/*
    Prefer Not to use var
    Because it has a problem in block scope and logical scope
*/
console.table([studentId,studentName,studentEmail,studentDistrict,studentState])