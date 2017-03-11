// // Let's explore more traps in the handler object


// const target = {};

// const handler = {

//   // This is regular ol' get trap
//   get: (t,k) => {
//     console.info(`get trap invoked -> getting { ${k} : ${t[k]} }`);
//     return t[k];
//   },

//   // The set trap is invoked when we are trying to set a property of a target through its proxy
//   set: (t,k,v) => {
//     console.info(`set trap invoked -> setting { ${k} : ${v} }`);
//     // We need to return true from a set trap.
//     // if we return false it returns a TypeError in strict mode and fail silently otherwise
//     return true;
//   }

// }

// const proxy = new Proxy(target,handler);

// proxy.time = '10:30am';
// console.log(proxy.time);







var handler = {
  get (target, key) {
    console.log('get');
    return target[key]
  },
  set (target, key, value) {
    console.log('set');
    target[key] = value; // what the fuck is going on???
    return true
  }
}

var target = {}
var proxy = new Proxy(target, handler)

proxy.a = 'a'
console.info(proxy.a);