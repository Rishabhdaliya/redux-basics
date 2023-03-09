function* increment(i) {
  yield i + 1;
  yield i + 2;
  yield i + 5;
  yield i + 255;
}
var obj = increment(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());


// for (const element of obj) {
//   console.log(element);
// }


// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next().done);
