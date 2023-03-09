// Data types

// 1. Numbers  99999997171, 88.77, 99.111
//  2. String   "Rishabh Daliya"
// 3. Array     [11,22,33], ["Aditya", "Shivam", "Mohsin"]
//  4. Boolean   True || false
//  5. objects  { userName: "Praharsha", contactNo: 888888888, Age: 23 }

//  var, let, const
// let age = 22;
// var role = 30;
// const rd = 50;

// age = 55;
// role = 55;

// age = "Rishabh";
// role = 505;

// console.log(age, role, rd);

// const age = ["Aditya", "Shivam", "Mohsin"];

// age[1] = 66;
// age[2] = 77;

// console.log(age[1]);

// objects

// let student = { userName: "Shivam", contactNo: 9999999, age: 26 };

// // shivam.contactNo = 888888;
// student.age = 55;

// console.log(student.age);

// ticket checker

// let ticket = 50;
// ticket != 50 ? console.log("success") : console.log("failed");

// loop
// a++  ===  a = a+1
// insert element inside array in last position
// a.push(9);
// a.push(12);
// a.pop();
// a.pop();
// a.unshift(50);
// a.shift();

// a.map((elm) => console.log(elm));
let a = [2, 12, 2, 15];
const filteredArray = a.filter((curElm) => curElm <= 15);

a[1] = a[1] + 5;
console.log(a);
// 1
// 4
// 9
// 16
// 25
// 36

// let a = 10;
// switch (a) {
//   case 1:
//     console.log(a);
//     break;
//   case 2:
//     console.log(a);
//     break;
//   default:
//     console.log("Invalid Input");
//     break;
// }

// let a = 1;
// while (a <= 10) {
//   console.log(a);
//   a++;
// }
// functions

// define function
// function add(a, b) {
//   console.log(a + b);
// }

// add(7, 8); //calling add funct

// function multiply(a, b) {
//   console.log(a * b);
// }

// multiply(20, 9);

//  OR   ||
//  AND &&

// const a = 10,
//   b = 14;

// if (a < 10 || b > 10) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// var myArray = []; // initializing array
// var myElement = {
//   //initializing object
//   id: 12,
//   value: 44,
// };

// myArray[0] = myElement;
// myArray[1] = myElement;

// // console.log(myArray);
