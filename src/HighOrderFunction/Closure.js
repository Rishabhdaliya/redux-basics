function OuterFunction() {
  var outerVariable = 1;

  function InnerFunction() {
    console.log(outerVariable);
    console.log("Inside inner function");
  }
  InnerFunction();
  console.log("Inside outer function");
}

OuterFunction();
