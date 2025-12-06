const form = document.querySelector("#form");

// input fields
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");

const showErrorText = document.querySelector(".form-control");

form.addEventListener("submit", function(e){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  e.preventDefault();

  // Username part
  if (userName.value === "") {
    showError(userName, "Username is required!")
  }else if (userName.value.length < 7) {
    showError(userName, "Username is too short!")
  }else if(userName.value.length > 15){
    showError(userName, "Username is too long!")
  }else{
    showSuccess(userName)
  }

  // Email part
  if (email.value === "") {
    showError(email, "Email is required!")
  }else if (!emailRegex.test(email.value)) {
    showError(email, "Email is not correct!");
  }else{
    showSuccess(email);
  }

  // Password part
  if (password.value === "") {
    showError(password, "Password is required!")
  }else if (password.value.length < 7) {
    showError(password, "Password is too short!")
  }else{
    showSuccess(password)
  }

  if (password2.value === "") {
    showError(password2, "Confirm password!")
  }else if (password.value !== password2.value) {
    showError(password2, "Passwords don't match!")
  }else{
    showSuccess(password2)
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