// Button click message

let button = document.querySelector("button");


button.onclick = function(){

alert("Welcome! Let's build your business website.");

};



// Simple scroll animation

let cards = document.querySelectorAll(".card");


window.addEventListener("scroll", function(){

cards.forEach(function(card){

let position = card.getBoundingClientRect().top;

let screen = window.innerHeight;


if(position < screen - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

});const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
    document.body.classList.toggle("dark");
};const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.onclick = function(){
    nav.classList.toggle("active");
};const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const themeBtn = document.getElementById("themeBtn");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.onclick = function () {
    nav.classList.toggle("active");
};