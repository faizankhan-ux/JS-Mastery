// Browser API's

// --  localstorage --  
//  used to store data permenant in browser   
// can store , read , delete , update data

localStorage.setItem("name" , "faizan")

localStorage.getItem("name")

localStorage.removeItem("name")

localStorage.clear()

// localstorage only stores strings so object needs to be converted to JSON using JSON.stringify(object) and same while retriving , parse to object
// Example : 

// while storing 
localStorage.setItem("data" , JSON.stringify({name:"faizan" , age:18}));
// while retriving 
JSON.parse(localStorage.getItem("data"));


// -- session storage --
// Same API as localStorage, but data is stored only until the tab is closed.

sessionStorage.setItem("name" , "faizan")
sessionStorage.clear()

// -- Geolocation API
// Get the user's location (latitude/longitude).

navigator.geolocation.getCurrentPosition(
    (pos) => {
        console.log("lattitude : " + pos.coords.latitude)
        console.log("longitude : " + pos.coords.longitude)
    },
    (err) => {
        console.log(err)
    }
)
// requires user's permission , works only on HTTPS and localhost    


// -- Timers -- 


// - setTimeout -
// runs once after delay

setTimeout(() => {
    console.log("5 seconds completed")
} , 5000)


// - setInterval -
// runs repeteadly after intervals

let id = setTimeout(() => {
    console.log("HI , I will comeback again after 5 seconds")
} , 5000)

// to stop the setInterval
clearInterval(id)