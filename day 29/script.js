// console.log("Hello World from script.js!");
// document.write("Hello World from script.js!");
// alert("Hello World from script.js!");

// document.getElementById("showText").innerHTML = "Hello World!";
// document.getElementsByClassName("demo")[0].innerHTML = "Hello World!";

document.querySelector("#showText").innerHTML = "Hello World!";
document.querySelectorAll(".demo")[0].innerHTML = "Hello World!";

const btn2 = document.querySelector('#btn2');
const pera2 = document.querySelector('#pera2');

btn2.addEventListener('click', function() {
    pera2.innerHTML  = "Khulna";
});

const sb = document.querySelector("#sb");
const big = document.querySelector("#big");
const small = document.querySelector("#small");

big.addEventListener('click', () => {
    sb.width = "300";
})
small.addEventListener('click', () => {
    sb.width = "150";
})