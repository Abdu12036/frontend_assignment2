document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");

  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");

  nameError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";
  name.classList.remove("error-border");
  phone.classList.remove("error-border");
  email.classList.remove("error-border");

  let valid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    name.classList.add("error-border");
    valid = false;
  }

  const phonePattern = /^[0-9]{7,15}$/; 
  if (phone.value.trim() === "") {
    phoneError.textContent = "Phone number is required.";
    phone.classList.add("error-border");
    valid = false;
  } else if (!phonePattern.test(phone.value.trim())) {
    phoneError.textContent = "Enter a valid phone number (digits only).";
    phone.classList.add("error-border");
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    email.classList.add("error-border");
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    email.classList.add("error-border");
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.reset(); 
  }
});





const openPopupBtn = document.getElementById("openPopupBtn");
const popupForm = document.getElementById("popupForm");
const closePopupBtn = document.getElementById("closePopupBtn");

// Open the popup
openPopupBtn.addEventListener("click", () => {
  popupForm.style.display = "flex";
});

// Close the popup by clicking the "X"
closePopupBtn.addEventListener("click", () => {
  popupForm.style.display = "none";
});

// Close the popup when clicking outside the form area
window.addEventListener("click", (event) => {
  if (event.target === popupForm) {
    popupForm.style.display = "none";
  }
});

// Handle form submission (for demo)
document.getElementById("subscribeForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for subscribing to Burabay Tour updates!");
  popupForm.style.display = "none";
});






function updateDateTime() {
  const now = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const formattedDate = now.toLocaleString("en-US", options);
  document.getElementById("datetime").textContent = formattedDate;
}

setInterval(updateDateTime, 1000);

updateDateTime();
