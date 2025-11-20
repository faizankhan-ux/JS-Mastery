/* -- DOM --
    DOM = Document Object Model
    It is a tree structure representation of HTML, which JavaScript can interact with. 
*/

let box1 = document.getElementById("box");
let box2 = document.getElementsByClassName("box-class");
let box3 = document.getElementsByTagName("div");
let box4 = document.querySelector(".box-class"); // first element
let box5 = document.querySelectorAll(".box-class"); // all elements return array-like object

// -- Changing Content --
console.log(box1.innerHTML); // gets HTML content
console.log(box1.innerText); // gets inner text
console.log(box1.textContent); // gets text content

box1.innerHTML = "New Content"; // changes HTML content
box1.innerText = "Inner Text"; // changes inner text
box1.textContent = "Plain Text"; // changes text content

// -- changing Styles --
box1.style.backgroundColor = "blue";
box1.style.width = "200px";
box1.style.height = "100px";

//  -- Changing classes --
box1.classList.add("new-class"); // adds a class
box1.classList.remove("new-class"); // removes a class
box1.classList.toggle("new-class"); // toggles a class

// -- Creating and Inserting Elements --
let newDiv = document.createElement("div");
newDiv.innerText = "I am a new div";
newDiv.classList.add("box-class");
document.body.appendChild(newDiv); // appends to body
document.body.prependChild(newDiv); // appends to body at starting
newDiv.remove(); // removes the element

// -- Change attribute --
box1.setAttribute("src", "image.jpg");
box1.getAttribute("src");
box1.removeAttribute("src");

// -- Event Listeners --

/*
    "click"
    "mouseover"
    "keyup"
    "input"
    "submit"
    "dblclick"
*/

function clickHua(){
    alert("click kyu kiya")
}

box1.addEventListener("click" , clickHua)

// -- Read input value --
let inputBox = document.getElementById("input-box");

inputBox.addEventListener("Onchange", () => {
    console.log(inputBox.value);
})
inputBox.value = "New Value"; // change input value


// -- Traversing the DOM --
let parentDiv = document.querySelector(".parent");
let children = parentDiv.children; // HTMLCollection of child elements

children[0].nextElementSibling; // next sibling element
children[0].previousElementSibling; // previous sibling element
parentDiv.parentElement; // parent element  
