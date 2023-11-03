
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);

  let password = e.target.password.value
  let email = e.target.email.value
 
  console.log(password);
 

  
  const emailError = document.querySelector("#email-error");
  const passwordError = document.querySelector("#password-error");
  

  
  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const passwordRegex = /^[A-Za-zs]+$/;
  
  
  if(!passwordRegex.test(password)){
     passwordError.classList.toggle("hidden")
    
  }

  if(!emailRegex.test(email)){
    emailError.classList.toggle("hidden")
  }
  
})