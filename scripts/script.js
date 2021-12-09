
// stored everything into variables
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// clears the images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// goes to the previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// goes to the next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// if left arrow is clicked
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// if right arrow is clicked
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

// shows the phrase when the page is load
window.onload = function(){
  alert("This website was created to fulfill Web Technology module’s requirements and does not represent an actual company or service")
}

// to make visible/invisble blocks on click
var showOnClick = document.getElementsByClassName("onClick"); // stored every class with "onClick"
var previousState;

for(var i=0; i < showOnClick.length; i++){
  showOnClick[i].onclick = function() { // when clicked function starts
    var classes = this.classList;
    if (classes.contains("show")) {  // checks if it has show in class
      classes.remove("show");
    } else {
      if (previousState != null){
      previousState.classList.remove("show")};
    previousState = this;
      classes.add("show");
    }
  }
}

let users = [];
const addUser = (ev)=>{
    ev.preventDefault();  //to stop the form submitting and realoading the website
    let user = {
        Name: document.getElementById('name').value,
        Surname: document.getElementById('surname').value,
        Email: document.getElementById('phone').value,
        Password: document.getElementById('password')
    }
    users.push(user);
    document.forms[0].reset(); // to clear the form for the next entries

    //saving to localStorage
    localStorage.setItem('UserList', JSON.stringify(users) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('sbmt').addEventListener('click', addUser);
});