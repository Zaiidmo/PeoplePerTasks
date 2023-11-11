const slider = document.querySelector("#clients_slider");
const clients = document.querySelectorAll(".client");
const nextbtn = document.querySelector("#next");
const prvbtn = document.querySelector("#previous");
const mobileNext = document.querySelector("#mobile-next");
const mobilePrev = document.querySelector("#mobile-previous");


let index = 0;
let move = 0;
const slideWidth = 400;

function next(){
    if(index < clients.length -1){
        index++;
        move += slideWidth ;
      } else {
        index = 0;
        move = 0 }
      slider.style.transform = `translateX(${-move}px)`;
}

function previous(){
    if (index > 0) {
        index--;
        move -= slideWidth;
      } else {
        index = clients.length - 1;
        move = index * slideWidth;
      }
      slider.style.transform = `translateX(${-move}px)`;
}

nextbtn.addEventListener("click", next);
prvbtn.addEventListener("click", previous);
mobileNext.addEventListener("click", next);
mobilePrev.addEventListener("click", previous);

//More categories 
let btn = document.querySelector("#More");
btn.onclick = function() {
  window.location.replace("../src/marketplace.html");
}