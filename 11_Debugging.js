// - - Debugging - -
// it means finding and fixing errors

// logging
console.log("there is a error");

// console.error() - highlights the error
console.error("checking errors");

// console.table - veiw data as table
let usersArray = [1, 4, 6, 7, 8, 9, 0, 13];
console.table(usersArray);

// for catching runtime errors : try catch block

try {
  let x = y + 2; // error: y is not defined
} catch (err) {
  console.error("Error occurred:", err);
}


// Common errors in the JS
/*
    Reference error : using a variable that doest'nt exist
    Type error : using wrong data type
    Syntax error : Mistyped JS
*/