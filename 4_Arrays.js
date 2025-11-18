// -- Arrays -- JavaScript arrays are ordered lists that can store mixed data types

let arr = [1, 'two', true, null, { key: 'value' }, [5, 6]];

//Basic Operations
/*
    push() → add at end

    pop() → remove last

    shift() → remove first

    unshift() → add at start

    includes() → check value
*/


/* Imp Array Methods
 
    map()
    filter()
    reduce()
    forEach()
    find()
*/


// -- map() -- 
//creates a new array by applying a function to each element of the original array
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map((elem , idx) => {
    return elem*elem;
})


// -- filter() --
//creates a new array with elements that pass a test defined by a function
let Even = numbers.filter((elem , idx) => {
    return elem % 2 == 0;
})


// -- reduce() --
//reduces the array to a single value by applying a function cumulatively to its elements
let Product = numbers.reduce((first , second) => {
    return first * second;
} , 10)
console.log(Product); // Output: 1200

// -- forEach() --
//executes a provided function once for each array element
Even.forEach((elem , idx) => {
    return elem -= 1;
})
console.log(Even); // Output: [1, 3, 5]


// -- find() --
//returns the first element that satisfies a provided testing function
let Three = numbers.find((elem , idx) => {
    return elem == 3;
})
