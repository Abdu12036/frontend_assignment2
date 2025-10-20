  
  // Star rating
  const stars = document.querySelectorAll("#rating .star");
  const ratingValue = document.getElementById("ratingValue");
  let currentRating = 0;

  stars.forEach(star => {
    star.addEventListener("click", () => {
      currentRating = parseInt(star.dataset.value);
      updateStars();
    });
  });

  function updateStars() {
    stars.forEach(s => {
      s.classList.toggle("filled", parseInt(s.dataset.value) <= currentRating);
    });
    ratingValue.textContent = `Your rating: ${currentRating} / 5`;
  }




// Theme change
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "night") {
  document.body.classList.add("night");
  themeToggle.textContent = "☀️ Day Mode";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("night");
  
  if (document.body.classList.contains("night")) {
    themeToggle.textContent = "☀️ Day Mode";
    localStorage.setItem("theme", "night");
  } else {
    themeToggle.textContent = "🌙 Night Mode";
    localStorage.setItem("theme", "day");
  }
});



// Current time
const showTimeBtn = document.getElementById("showTimeBtn");
const timeDisplay = document.getElementById("timeDisplay");

showTimeBtn.addEventListener("click", () => {
  const currentTime = new Date().toLocaleTimeString();
  timeDisplay.textContent = "Current time: " + currentTime;
});


// Dynamic Greeting
function showGreeting() {
  const greetingElement = document.getElementById("greetingMessage");
  const now = new Date();
  const hour = now.getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good morning! ☀️ Ready to explore Kazakhstan?";
  } else if (hour < 18) {
    greeting = "Good afternoon! 🌤 How about a new adventure today?";
  } else {
    greeting = "Good evening! 🌙 Plan your next journey with Nomad Travel.";
  }

  greetingElement.textContent = greeting;
}

document.addEventListener("DOMContentLoaded", showGreeting);



// Greeting bar
function showGreeting() {
  const greetingElement = document.getElementById("greetingMessage");
  const greetingBar = document.getElementById("greetingBar");
  const now = new Date();
  const hour = now.getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good morning! ☀️ Ready to explore Kazakhstan?";
  } else if (hour < 18) {
    greeting = "Good afternoon! ⛅ How about a new adventure today?";
  } else {
    greeting = "Good evening! 🌙 Plan your next journey with Nomad Travel.";
  }

  greetingElement.textContent = greeting;
  greetingBar.style.display = "flex"; 
}

const closeBtn = document.getElementById("closeGreetingBtn");
closeBtn.addEventListener("click", () => {
  const header = document.querySelector("header");
  document.getElementById("greetingBar").style.display = "none";
  header.style.marginTop = "0";
});

document.addEventListener("DOMContentLoaded", showGreeting);





