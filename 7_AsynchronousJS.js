// Essential topic to know before learning Asynchronous JS:
// setTimeout -> execute a function after a specified delay
// setInterval -> execute a function repeatedly at specified intervals



// -- Asynchronous JavaScript --
// JavaScript is single-threaded, meaning it runs one line at a time. However, it can handle asynchronous operations using callbacks, promises, and async/await.

//Synchronous -> runs line by line
//Asynchronous -> can run tasks in the background without blocking the main thread
// ex : timers , API calls, event listeners

// -- Callbacks -- functions passed as arguments to other functions to be executed later
// -- Callback Hell -- nested callbacks leading to hard-to-read code

// Callback Hell Example ⬇️
function GetData(user , callback){
    setTimeout(() => {
        console.log(user + "'s Data received from server");
        callback()
    }, 2000);
}

GetData("user1" , () => {
    GetData("user2" , () => {
        GetData("user3" , () => {
            GetData("user4" , () => {
                GetData("user5", () => {
                    console.log("All users data received")
                })
            })
        })
    })
})
/* o/p :
    user1's Data received from server (2s delay)
    user2's Data received from server (2s delay)
    user3's Data received from server (2s delay)
    user4's Data received from server (2s delay)
    user5's Data received from server (2s delay)
    All users data received

*/

// To avoid Callback Hell, we use Promises
// -- Promises -- represent the eventual completion (or failure) of an asynchronous operation and its resulting value

let Mypromise = new Promise((resolve, reject) => {
    let success = true; // Simulate success or failure
    setTimeout(() => {
        if (success) {
            resolve("Promise Resolved: Data fetched successfully");
        } else {
            reject("Promise Rejected: Error fetching data");
        }  
    }, 2000);

});

/* 3 states of Promise
    1. Pending - initial state, neither fulfilled nor rejected
    2. Fulfilled - operation completed successfully
    3. Rejected - operation failed
*/

/* Using Promises :
    .then() - called when promise is fulfilled
    .catch() - called when promise is rejected
    .finally() - called regardless of the promise outcome
*/


// Promise usage example
function SearchData(user){
    return new Promise((resolve , reject) => {
        console.log("Searching data for " + user);
        setTimeout(() => {
            console.log("Data found for " + user);
            resolve("success finding data for " + user);
        } , 3000)
    })
}

let P1 = SearchData(1);
// Promise chaining to avoid callback hell
P1.then((res) => {
    console.log(res);
    return SearchData(2);
}).then((res) => {
    console.log(res);
    return SearchData(3);
}).then((res) => {
    console.log(res);
    return SearchData(4);
}).catch((err) => {
    console.log(err);
})

// Still the code is bit length , so one more improvement with Async/Await

// -- Async/Await -- 

// Async functions always return a Promise implicitly , await is used to wait for a Promise to resolve or reject

// Example of Async/Await

function FetchData(user){
    return new Promise((resolve , reject) => {
        console.log("Fetching data for " + user);
        setTimeout(() => {
            console.log("Data fetched for " + user);
            resolve("success fetching data for " + user);
        } , 3000)
    })
}


async function ProcessData(){
    await FetchData(1);
    await FetchData(2);
    await FetchData(3);
    await FetchData(4);
    console.log("All data processed");
}


// -- fetch API -- 
// it does not return data directly it returns a promise 

/* basic syntax

    fetch("https://www.api.com")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
*/

// JSON : javascript object notation 
// api responds with JSON we use json() method
// json() : this method returns a promise that resolves with reslut parsing the JSON to object [input -> JSON , output -> JS Object]

// fetch(URL , options)
// options : GET POST UPDATE DELETE