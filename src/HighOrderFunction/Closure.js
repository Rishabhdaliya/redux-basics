function OuterFunction() {
  function InnerFunction() {
    console.log("Inside inner function");
  }

  console.log("Inside outer function");

  InnerFunction();
}

OuterFunction();
