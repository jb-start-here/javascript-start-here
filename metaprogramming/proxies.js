// Proxies are a quite interesting feature coming in ES6. 
// In a nutshell, you can use a Proxy to determine behavior whenever,
//  the properties of a target object are accessed. 
// A handler object can be used to configure traps for your Proxy, as we’ll see in a bit.

// Just as the name suggests proxies behave like a proxy wrapper around a target object and monitors all 
// interaction with the said target object given that they are done through the proxy attached/wrapped to it

// We will write a basic Proxy that does nothing with empty handlers
// This proxy will just work as a pass-through to the target object – 
// MDN calls this a "no-op forwarding Proxy", which makes sense.

var target = {}
var handler = {}

var proxy = new Proxy(target, handler)

proxy.a = 'b'


console.log(proxy.a)
console.log(target.a)
// <- 'b'

console.log(proxy.c === undefined)
// <- true


proxy.fun = console.log;
target.fun('hello from the target');
proxy.fun('hello from the proxy');


// properties assigned directly to the target object is picked up by the proxy but the handler object cant act on it
target.prop = 'random property';
console.log(proxy.prop);


console.log('---------------------------------');
// Let's try and make our proxies more interesting by adding a few Traps to our proxy's handler

// Traps allow you to intercept interactions with target in different ways, 
// as long as those interactions happen through proxy. 
// We could use a get trap to log every attempt to pull a value out of a property in target.

// Re init the target
target = {};

// Lets now define a handler with some property called get. This is fixed api. 
// get method in the handler is called whevever a property from target is accessed via the proxy
// get method acts like the middleware and has the capability to even modify the accessed property before 
// handing it over to the code that called it

handler = {
  // This is fixed api and get method should have two args: target and key
  get: (target,key) => {
    console.info(`Logging from handler.get method -> { ${key}: ${target[key]} }`);
    // We have to return the value from the get method 
    return target[key];
  }
}

proxy = new Proxy(target,handler);
proxy.a = 'random text here...';
proxy.b = 144;

console.log(proxy.a);
proxy.b;