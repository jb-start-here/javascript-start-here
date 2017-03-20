// Javascript objects are basically name value pairs
// A Javascriot object can contain anything

var person = {
    firstname: 'john',
    lastname: 'doe',
    greet: function(){
        console.log(`hi, ${this.firstname}`);
    }
}

// This is a basic js object

person.greet();
console.log(person);

// Javascript uses propotypal inheritance not classical inheritance
// Propotypal inheritance uses a special property of an object (in built) to inject it into another property

// Every object has a property called proto which points to another object
// This object that proto points to can have another proto key which points to another object
// All objects have all properties from their prop object too
// This is called the prototype chain


// Lets create a function constructor to understand how we can use prototype chain to our advantage
// A function contructor is an object that is used to contruct new objects


function Person(firstname,lastname){
    this.fname = firstname;
    this.lname = lastname;
}

var john = new Person("john","Doe");
console.log(john.fname);

// The new keyword takes the this context of the function and copies it to the john variable

// All methods that are on the prototype key of the Person function (functions are also object is js)
// is now inherited by john object

// All Methods inherited by john from its prototype chain are now in __PROTO__ key

// Let's add the some functionality to Person

// This is a popular pattern

Person.prototype.greet = function() {
    console.log(`hi, ${this.fname} ${this.lname}`);
}

var jane = new Person("Jane","Terry");

jane.greet();

// now when we call jane.greet() js searches for greet prop in jane object.. since it only has
// fname and lname it goes to next level and searches it __PROTO__ property and if it still doesnt find it there it searches for 
// the greet prop in __PROTO__ of the __PROTO__

john.greet();


console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
// DO NOT USE THIS IN PRODUCTION ^^




// This pattern is acalled functional pattern see here more details - http://imagizer.imageshack.us/a/img911/5519/fxn2D3.png