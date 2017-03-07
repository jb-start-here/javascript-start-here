// Another futuristic way to deal with asynchronus code is using async and await keywords
// This is currently in stage 4 proposal mode in the ECMA standard
// This is most probable going to be a part of es7 specification


// consider an asynchronous function like this 
// Lets say it returns a promise

function waitSomeTimeP(ms) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(`waitSomeTimeP: done waiting for ${ms} milliseconds`)
    },ms)
  })
}

// We use the above function in the following manner
// waitSomeTimeP(2000).then(console.log);


// Async - await way

async function asyncFunction() {
  const text = await waitSomeTimeP(1000);
  console.log(text);
}

// It looks synchronous




// The whole thing turns completely synchronous and the execution "awaits" until the async op is done 
async function asyncFunction2() {
  const text = await waitSomeTimeP(2500);
  console.log('first');
  console.log(text);
  const anotherText = await waitSomeTimeP(3000);
  console.log('second');
  console.log(anotherText);
}

asyncFunction();
asyncFunction2();


// If there was no await we would see this log statement print an 'undefined' 
// but because of await we can asynchronous code as if its sequential