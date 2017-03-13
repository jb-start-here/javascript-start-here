// Let's explore more traps in the handler object


const target = {};

const handler = {

  // This is regular ol' get trap
  get: (t,k) => {
    console.info(`get trap invoked -> getting { ${k} : ${t[k]} }`);
    return t[k];
  },

  // The set trap is invoked when we are trying to set a property of a target through its proxy
  set: (t,k,v) => {
    console.info(`set trap invoked -> setting { ${k} : ${v} }`);
    // We need to return true from a set trap.
    // if we return false it returns a TypeError in strict mode and fail silently otherwise
    t[k] = v;
    return true;
  }

}

var proxy = new Proxy(target,handler);

proxy.time = '10:30am';
console.log(proxy.time);







// Use cases
// Since handlers can intercept access to objects libraries can prevent access by end users to forbidden properties
// For example..Let's say all private properties are prefixed with _

const secureHandler = {
  get: (t,k) => {
    securityCheck(k,'get');
    return t[k];
  },
  set: (t,k,v) => {
    securityCheck(k,'set');
    t[k] = v;
    return true;
  }
}

const securityCheck = (key,action) => {
  if(key[0] === '_'){
    throw new Error(`Cannot ${action} private property ${key} of this target`);
  } 
}

const secureTarget= {}

proxy = new Proxy(secureTarget,secureHandler);

proxy.a = 'a';
console.log(proxy.a);
// <- a


proxy._secureProp = 'not_secure';
// <- throws error here
console.log(proxy._secureProp);
// <- throws error here as well