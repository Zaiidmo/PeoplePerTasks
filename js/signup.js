
const form = document.getElementById("login-form");
const name = document.getElementById("nom");
const email = document.getElementById("Email");
const phone = document.getElementById("num");
const message = document.getElementById("Message");

form.addEventListener("submit", (e) => {
  const emailError = document.querySelector("#email-error");
  const nameError = document.querySelector("#name-error");
  const phoneError = document.querySelector("#phone-error");
  const textError = document.querySelector("#text-error");

  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const nameRegex = /^[A-Za-zs]+$/;
  const phoneRegex = /^\d+$/;
  
  if(!nameRegex.test(name.value)){
    e.preventDefault();
    nameError.style.display = "block"
    
  }
  if(!emailRegex.test(email.value)){
    e.preventDefault();
    emailError.style.display = "block"
  }
  if(!phoneRegex.test(phone.value)){
    e.preventDefault();
    phoneError.style.display = "block"
  }
 
})