// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if(menuBtn && nav){

menuBtn.onclick = function(){
    nav.classList.toggle("active");
};

}


// Dark Mode

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

themeBtn.onclick = function(){
    document.body.classList.toggle("dark");
};

}


// Search

const search = document.getElementById("search");

if(search){

const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function(){

let text = search.value.toLowerCase();

cards.forEach(function(card){

let name = card.innerText.toLowerCase();

if(name.includes(text)){
    card.style.display = "block";
}
else{
    card.style.display = "none";
}

});

});

}


// Cart

let cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartBox = document.getElementById("cartBox");
const cartItems = document.getElementById("cartItems");

const orderButtons = document.querySelectorAll(".order");


if(cartBtn && cartBox && cartItems){

orderButtons.forEach(function(btn){

btn.onclick = function(){

let product = btn.parentElement.querySelector("h3").innerText;

cart.push(product);

cartItems.innerHTML = "";

cart.forEach(function(item){

let li = document.createElement("li");

li.innerText = item;

cartItems.appendChild(li);

});

cartBtn.innerHTML = "🛒 Cart (" + cart.length + ")";

};

});


cartBtn.onclick = function(){

cartBox.style.display = "block";

};

}


// Popup

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");


if(popup && closePopup){

document.querySelectorAll(".card").forEach(function(card){

card.onclick = function(){

popup.style.display = "flex";

};

});


closePopup.onclick = function(){

popup.style.display = "none";

};

}


// Buy Now

const buyBtn = document.getElementById("buyBtn");

if(buyBtn){

buyBtn.onclick = function(){

window.location.href="https://wa.me/93702529943";

};

}