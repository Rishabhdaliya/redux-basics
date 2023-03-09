// // function define
// function display(text) {
//   console.log(text);
// }

// // function call
// display(450);

// arguments;
// parameters

// function DollarToRs(dollars, dollarinRs) {
//   return dollars * dollarinRs;
// }

// console.log(DollarToRs(10, 80));

let array = [11, 12, 13, 14, 15, 16, 17, 18];

console.log("before>", array);

function Iterate() {
  let copyArray = array.map((value) => value);
  for (let i = 0; i < copyArray.length; i++) {
    copyArray[i] = copyArray[i] + 1;
  }
  return copyArray;
}

console.log("copy>", Iterate());

array.map((value, index) => console.log("map", value));
