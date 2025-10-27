// document.getElementById("registerForm").addEventListener("submit", function (event) {
//     event.preventDefault(); 

//     const name = document.getElementById("name");
//     const phone = document.getElementById("phone");
//     const email = document.getElementById("email");

//     const nameError = document.getElementById("nameError");
//     const phoneError = document.getElementById("phoneError");
//     const emailError = document.getElementById("emailError");

//     nameError.textContent = "";
//     phoneError.textContent = "";
//     emailError.textContent = "";
//     name.classList.remove("error-border");
//     phone.classList.remove("error-border");
//     email.classList.remove("error-border");

//     let valid = true;

//     if (name.value.trim() === "") {
//       nameError.textContent = "Name is required.";
//       name.classList.add("error-border");
//       valid = false;
//     }

//     const phonePattern = /^[0-9]{7,15}$/; 
//     if (phone.value.trim() === "") {
//       phoneError.textContent = "Phone number is required.";
//       phone.classList.add("error-border");
//       valid = false;
//     } else if (!phonePattern.test(phone.value.trim())) {
//       phoneError.textContent = "Enter a valid phone number (digits only).";
//       phone.classList.add("error-border");
//       valid = false;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email.value.trim() === "") {
//       emailError.textContent = "Email is required.";
//       email.classList.add("error-border");
//       valid = false;
//     } else if (!emailPattern.test(email.value.trim())) {
//       emailError.textContent = "Enter a valid email address.";
//       email.classList.add("error-border");
//       valid = false;
//     }

//     if (valid) {
//       this.reset(); 
//     }
// });





const openPopupBtn = document.getElementById("openPopupBtn");
const popupForm = document.getElementById("popupForm");
const closePopupBtn = document.getElementById("closePopupBtn");

openPopupBtn.addEventListener("click", () => {
  popupForm.style.display = "flex";
});

closePopupBtn.addEventListener("click", () => {
  popupForm.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popupForm) {
    popupForm.style.display = "none";
  }
});

document.getElementById("subscribeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for subscribing to Burabay Tour updates!");
  popupForm.style.display = "none";
});



$(document).ready(function(){
console.log("jQuery is ready!");
});