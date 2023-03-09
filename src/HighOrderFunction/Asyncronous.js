//map
//filter
// reduce

// Higher Order Function is a calculus concept implemented in Javascript. It can be represented as:
// f(g(x)): Here, function f(x) is acting on function g(x) - taking g(x) as input and operating on it to produce an output.
// This feature is what JS utilises, as JS functions are first class functions (All the operations possible with variables can be done on functions as well) and thus functions can be passed around as arguments of other functions.

// To print each element inside array
// data.map((val) => console.log(val * 2));

// const filtered = data.filter((val) => val === 24);

// console.log(filtered);

// const initialValue = 0;
// const sumWithInitial = data.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // // e

// 1. push
// 2. pop
// 3. unshift
// // 4. shift
// const data = [10, 10, 10, 12];

// console.log("before", data);
// data.unshift(15);

// console.log("after", data);
