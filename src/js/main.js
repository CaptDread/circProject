console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

var burgerButt = document.querySelector(".daburger");
var topBun = document.querySelector(".topbun");
var mid = document.querySelector(".dagoods");
var bottBun = document.querySelector(".botbun");
var burgerBar = document.querySelector(".burgerMenu");
var burgNav = document.querySelector(".burgNav")
// var burgerBlur = document.querySelector(`.blur`)


var toggleBurger = function() {
  if (burgerButt.id != "open") {
    burgerButt.id = "open";
    burgerBar.style.display = "block";
    burgNav.style.display = "block";
    // burgerBlur.style.display = 'block';
    // burgerBlur.style.opacity = "90%";
    
  } else if (burgerButt.id != "close") {
    burgerButt.id = "close";
    burgerBar.style.display = "none"
    burgNav.style.display = "none"
    // burgerBlur.style.display = 'none';
  }
  console.log(`burgerMenu is now `, burgerButt.id)
}

burgerButt.addEventListener(`click`, function(evt){
  evt.preventDefault();
  toggleBurger();
})