// Currying - Currying is way to control the arity of a function.

const greeter = (lang) => {
  const greeting = lang === 'en' ? 'Hello' : '!Hola¡'
  return (name) => `${greeting} ${name}`;
}


const englishGreeter = greeter('en');
const spanishGreeter = greeter('es');

console.log(englishGreeter('john'));
console.log(spanishGreeter('john'));