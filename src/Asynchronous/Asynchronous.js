const pr = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Returned value"), 5000);
});

// async await

async function test() {
  console.log("before pr");
  const val = await pr; //async job
  console.log("Value is:", val);
  console.log("After pr");
}

test();
