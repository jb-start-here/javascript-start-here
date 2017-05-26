// Composing functions is a way to meld two functions together. Just like how you would use a pipe operator to line up
// two or more commands after each other. It sometimes involves passing functions to functions.

// for example y = g(f(x)). In math we represent it like y = f.g

// let's write a function that composes functions


const composer = (g,f) => {
  // as convention goes the data first is passed to the right most argument and the result is passed to the next
  // left argument and so on...
  return (x) => g(f(x))
}

// Lets make it accept unlimited number of arguments
// Taken from underscore.js
function SuperComposer() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

const c = SuperComposer(
  (x) => 0-x,
  (x) => x+2,
  (x) => x*10
)// f(x) = -(10x+2)


console.log(c(5));