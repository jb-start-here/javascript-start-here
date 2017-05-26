// A functor is any object that has a map like function that takes a value and a function as arguments. 
// This functor's map then runs the function on the value.
// The value can be an array,string,char,or anything for the matter.

// map,filter,reduce is also a kind of functions that a functor can possess but does not completely fit the arity specified in pur definition.
// There are two different styles of writing functors.
// 1. Simple objects that have a map function associated with them or their prototype chain.
// 2. A function that take in an object (and pretends this object is a functor) and another function and maps the function over the first arg



// An array is a good example of a functor
console.log([0,1,2,3,4,5,6,7,8,9].map((n) => n*10));


// first style
// Let's try and convert a string into a functor. Lets augment the String with a functor 
// A functor that 'maps' over every character in a string and returns the (new) modified string.

String.prototype.functor = function(fn) {
  return this.split('').map(fn).join('');
}

const helloworld = "helloworld".functor((c) => {
  console.log(`the character here is ${c}`);
  return c+'*';
})

console.log(helloworld);
// => h*e*l*l*o*w*o*r*l*d*



// second style
function stringFunctor(string,fn) {
  return string.split('').map(fn).join('');
}

console.log(stringFunctor("to be or not to be",(c) => {
  return c ==='o' ? '0' : c
}));
// => t0 be 0r n0t t0 be

