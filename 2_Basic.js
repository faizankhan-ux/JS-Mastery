// -- Variabels --
let a = 10 // reassign is allowed , block scoped
const b = 20 // reassig is not allowed , block scoped , initialized quickly
var c = 30 // reassign is allowed , function scoped , old version


/* Hoisting : JS moves all declarations to the top.
 var is hoisted and initialized with undefined
 let and const are stay in temporal dead zone until reaches decalration (decalred but not initialized)
 also function declarations are hoisted
 but arrow fun() and expression fun() are not hoisted
 */

 // -- Data Types --
/* Primitive Data Types

    1. Number - integer and floating point numbers
    2. String - '' or " " or ` ` immutable
    3. Boolean - true or false
    4. Undefined - variable declared but not assigned
    5. Null - explicitly assigned 'no value'
    6. Symbol - used to create unique identifiers for objects
    7. BigInt - for integers larger than 2^53 - 1 (ends with n)

*/
/* Non-Primitive Data Types

    1. Object - collection of key-value pairs
    2. Array - ordered list of values
    3. Function - block of code designed to perform a particular task
*/


/* -- Operators --

    1. Arithmetic Operators: +, -, *, /, %, ++, --, **
    2. Assignment Operators: =, +=, -=, *=, /=, %=, **=
    3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <= 
    4. Logical Operators: &&, ||, !
    5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
    6. Ternary Operator: condition ? expr1 : expr2
    7. Type Operators: typeof - data type, instanceof - object type
    8. Spread Operator: ... - expands iterable objects into individual elements
    9. Nullish Coalescing Operator: ?? - returns right-hand operand when left-hand is null or undefined
    10. Optional Chaining Operator: ?. - accesses deeply nested properties without causing errors
    11 rest operator: ... - collects multiple elements into an array

*/

//Examples
let arr = [1, 2, 3 , 4, 5]
let newArr = [...arr, 6, 7, 8] // using spread operator

var num;
console.log(num ?? 100); // using nullish coalescing operator o/p: 100

let obj = { a: 1, b: { c: 2 } };
console.log(obj?.b?.c); // using optional chaining operator o/p: 2

//rest operator example
function sum(...numbers) {
    return numbers.reduce((a,b) => {
        return a + b;
    });
}

sum(1,2,3,4,5)

// -- loops --

// for of loop
let arr2 = [10, 20, 30, 40, 50];
for(let item of arr2) {
    console.log(item); // o/p: 10 20 30 40 50
}

//for -each
arr2.forEach((a, b) => {
    console.log(a + ":" + b)
})

// for in loop
let obj2 = { x: 1, y: 2, z: 3 };
for(let key in obj2){
    console.log(key + ": " + obj2[key]); // o/p: x: 1 y: 2 z: 3
}