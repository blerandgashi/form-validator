const form = document.querySelector("#form");

// input fields
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");

const showErrorText = document.querySelector(".form-control");

form.addEventListener("submit", function(e){
  e.preventDefault();
  
  if (userName.value === "") {
    showError(userName, "Username is required!")
  }else{
    showSuccess(userName);
  }

  if (email.value === "") {
    showError(email, "Email is required!")
  }else{
    showSuccess(email)
  }

  if (password.value === "") {
    showError(password, "Password is required!")
  }else{
    showSuccess(password)
  }

  if (password2.value === "") {
    showError(password2, "Confirm password!")
  }else{
    showError(password2)
  }
  
})

function showError(input, message){
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.textContent = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
}