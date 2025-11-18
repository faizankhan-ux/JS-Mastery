// -- Functions --

function FunctioName() {
  // Code to be executed
  //return statement
}

// Function Expression - not hoisted treated as variable
let functionVariable = function FunctioName() {
  // Code to be executed
};

// Arrow Function - modern way
let arrowFunction = () => {
  // Code to be executed
};

// Higher Order Function - takes function as argument or returns a function
let callback = function () {};

function higherOrderFunction(callback) {
  // Code to be executed
  callback();
}

// Callback Function - function passed as argument
higherOrderFunction(callback);

// IIFE - Immediately Invoked Function Expression
() => {
  console.log("Executed Immediately once without calling");
};

// -- closures --> functions remember variables from their parent scope
// Ek aisa function jo return kare ek aur function ko jisme parent function ke variables use ho rahe ho

function ParentFuntion() {
  let ParentSvariable = "I am from Parent Function";

  let ChildFunction = function () {
    console.log(ParentSvariable);
  };

  return ChildFunction;
}

let fun = ParentFuntion();
fun(); // o/p: I am from Parent Function

// lexical scoping --> functions are executed using the variable scope of their parent function

function fun1() {
  let a = 10;
  function fun2() {
    let b = 20;
    console.log(a);

    function fun3() {
      let c = 30;
      console.log(a, b);
    }
  }
}

// Hositing
// function declarations are hoisted
//function expressions and arrow functions are not hoisted