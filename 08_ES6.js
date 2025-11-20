// ES6+ modern features

// Template literals - Use backticks (`) to write multi-line strings and embed variables.

let num = 10;
let string = `The number is ${num}`

// Destructuring Arrays and object
let arr = [1,2,3,4,5];
let [a,b,c,d,e] = arr;
console.log(a,b,c,d,e);

// Spread and rest operator
// -         0            -


// default parameters 
// -      0         -


// Modules : Modules allow you to split code into multiple files and reuse them.

// we can export multiple things from one file and can import that in another file using "import {funA , VarB , Text} from './fileName.js' "

// Default export : every file can have only one default export means no need of {} while importing

// Import everything using * , example : 
// import * as math from './math.js'
// and can be used as math.add() , math.sub()

// In browsers modules works in this case only  :
<script type="module" src="app.js"></script>

// in NodeJS : .mjs file