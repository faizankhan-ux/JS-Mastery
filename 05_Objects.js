// -- Objects --

let obj = {
  name: "Faizan",
  "full name": "Mohammed Faizan Khan",
  age: 18,
  "my height" : 180,
  country: "Dubai",
  skills: {
    programming: ["C++", "Python", "Java"],
    webDev: ["HTML", "CSS", "JS"],
    tech: ["Git", "DSA", "VS Code"],
  },
};

//Accessing Object Properties
let userName = obj.name;
let userAge = obj["age"];

/* use bracket notation when

    1. key name has spaces
    2. key name is stored in a variable
    3. key is dynamically generated
    4. key name is not a valid identifier

*/

//Adding New Property
obj.goal = "JS Mastery";
//Updating Existing Property
obj.age = 19;
//Deleting Property
delete obj.country;

// -- object destructuring --
let { name, age, skills } = obj;
//rename while destructuring
let { name: A, age: B } = obj;

// rest operator in object destructuring
let { country, ...rest } = obj;

console.log(rest);

// JSON - JavaScript Object Notation
let JSONobj = JSON.stringify(obj); //converting object to JSON string
console.log(JSONobj);
let parsedObj = JSON.parse(JSONobj); //converting JSON string back to object
console.log(parsedObj);

// looping through object properties
for (let key in obj) {
  console.log(key + " " + obj[key]);
}

/*
    Object.keys() - returns an array of object's keys
    Object.values() - returns an array of object's values
    Object.entries() - returns an array of [key, value] pairs
*/

Object.keys(obj).forEach((key) => {
  console.log(key + " : " + obj[key]);
});

Object.values(obj).forEach((value) => {
  console.log(value);
});

// -- Optoinal Chaining --
// to avoid errors while accessing nested properties
console.log(obj.skills?.programming); // if skills exists, then access programming
console.log(obj.hobbies?.sports); // undefined, no error

/*
        🚀 OBJECT FLASHCARDS (Quick Revision Set)
        Flashcard 1

        Q: What is an object in JavaScript?
        A: A collection of key–value pairs.

        Flashcard 2

        Q: Two ways to access object values?
        A:

        obj.key

        obj["key"]

        Flashcard 3

        Q: How to add a new key?
        A:

        obj.newKey = value;

        Flashcard 4

        Q: How to delete a key?
        A:

        delete obj.key;

        Flashcard 5

        Q: What is object destructuring?
        A: Extracting keys into variables:

        const { name, age } = obj;

        Flashcard 6

        Q: Rest operator with objects?
        A:

        const { a, ...rest } = obj;

        Flashcard 7

        Q: Spread operator with objects?
        A:

        const copy = { ...obj };

        Flashcard 8

        Q: JSON → string conversion?
        A:
        JSON.stringify(obj)

        Flashcard 9

        Q: String → JSON conversion?
        A:
        JSON.parse(str)

        Flashcard 10

        Q: Loop through keys of an object?
        A:
        for (let key in obj)

        Flashcard 11

        Q: Object.keys(obj) returns?
        A: Array of keys.

        Flashcard 12

        Q: Object.values(obj) returns?
        A: Array of values.

        Flashcard 13

        Q: Object.entries(obj) returns?
        A: Array of [key, value] pairs.

        Flashcard 14

        Q: What does this refer to inside object methods?
        A: The current object.

        Flashcard 15

        Q: What does optional chaining do?
        A: Safely access nested keys:

        obj?.a?.b
*/
