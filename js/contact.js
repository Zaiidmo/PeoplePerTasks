
const form = document.getElementById("form");
const message = document.getElementById("Message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  let name = e.target.nom.value
  let phone = e.target.num.value
  let email = e.target.subject.value
  let message = e.target.Message.value
  console.log(name);
 

  
  const emailError = document.querySelector("#email-error");
  const nameError = document.querySelector("#name-error");
  const phoneError = document.querySelector("#phone-error");
  const messageError = document.querySelector("#text-error");
 

  
  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const nameRegex = /^[A-Za-zs]+$/;
  const phoneRegex = /^\d+$/;
  const textRegex = /^[A-Za-zs]+$/;
  
  if(!nameRegex.test(name)){
  
    
   
     nameError.classList.toggle("hidden")
    
  }
  if(!emailRegex.test(email)){
 
    
    emailError.classList.toggle("hidden")
  }
  if(!phoneRegex.test(phone)){

    
    phoneError.classList.toggle("hidden")
  }
  if(!textRegex.test(message)){

    
    messageError.classList.toggle("hidden")
  }
 
})