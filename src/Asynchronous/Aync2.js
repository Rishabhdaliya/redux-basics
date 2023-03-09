function promiseFunction(value) {
  return new Promise((resolve, reject) => {
    if (value === "resolve") {
      return resolve("Inside Resolve Block");
    } else {
      return reject(
        "You have passed value other than resolve to get right output pass resolve"
      );
    }
  });
}

async function promiseFnExecution() {
  try {
    let data = await promiseFunction("resolve");
    console.log(">>", data);
  } catch (error) {
    console.log("Promise failed", error);
  }
}

promiseFnExecution();

// promise chaining
// promiseFunction("resolveerr")
//   .then((response) => {
//     console.log(">>", response);
//   })
//   .catch((error) => {
//     console.log("Promise failed in .then", error);
//   });
