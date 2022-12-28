function promiseFunction(value) {
  return new Promise(function (resolve, reject) {
    if (value === "resolve") {
      return resolve("Inside Resolve Block");
    } else {
      return reject("Inside Reject Block");
    }
  });
}

// promise chaining

// promiseFunction("reject")
//   .then((data) => {
//     console.log(">>", data);
//   })
//   .catch((error) => {
//     console.log(">>", error);
//   });

async function promiseFnExecution() {
  try {
    let data = await promiseFunction("reject");
    console.log(">>", data);
  } catch (error) {
    console.log("Promise failed", error);
  }
}

promiseFnExecution();
