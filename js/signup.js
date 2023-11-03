
const form = document.getElementById("form");
const message = document.getElementById("Message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  let name = e.target.nom.value
  let lastname = e.target.lastNom.value
  let email = e.target.subject.value
  let password = e.target.password.value
  let passwordConfirm = e.target.passwordConfirm.value

  
  console.log(name);
 

  
  const emailError = document.querySelector("#email-error");
  const nameError = document.querySelector("#name-error");
  const lastNomError = document.querySelector("#lastNomError");
  const passwordError = document.querySelector("#password-error");
  const confirmError = document.querySelector("#confirm-error");
  

  
  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const nameRegex = /^[A-Za-zs]+$/;
  const lastnameRegex = /^[A-Za-zs]+$/;
  const passwordRegex = /^[A-Za-zs]+$/;
  const confirmRegex = /^[A-Za-zs]+$/;
  
  
  if(!nameRegex.test(name)){
  
     nameError.classList.toggle("hidden")
    
  }
  if(!lastnameRegex.test(lastname)){
  
     lastNomError.classList.toggle("hidden")
    
  }
  if(!passwordRegex.test(password)){
  
     passwordError.classList.toggle("hidden")
    
  }
  if(!confirmRegex.test(passwordConfirm)){
  
    confirmError.classList.toggle("hidden")
    
  }
  if(!emailRegex.test(email)){
 
    
    emailError.classList.toggle("hidden")
  }
 
 
 
})