let currentIndex1 = 0;
let currentIndex2 = 0;

// Select slides for each slider
const slides1 = document.querySelectorAll("#first .card-item");
const slides2 = document.querySelectorAll("#second .card-item");

const prevButton1 = document.querySelector(".prev");
const nextButton1 = document.querySelector(".next");
const prevButton2 = document.querySelectorAll(".prev")[1];
const nextButton2 = document.querySelectorAll(".next")[1];

// Show slide functions for the sliders
function showSlide1(index) {
  currentIndex1 = Math.max(0, Math.min(index, slides1.length - 1));
  slides1.forEach((slide) => {
    slide.style.transform = `translateX(-${currentIndex1 * 100}%)`;
  });
}

function showSlide2(index) {
  currentIndex2 = Math.max(0, Math.min(index, slides2.length - 1));
  slides2.forEach((slide) => {
    slide.style.transform = `translateX(-${currentIndex2 * 100}%)`;
  });
}

// Event listeners for the sliders nav
prevButton1.addEventListener("click", () => showSlide1(currentIndex1 - 1));
nextButton1.addEventListener("click", () => showSlide1(currentIndex1 + 1));

prevButton2.addEventListener("click", () => showSlide2(currentIndex2 - 1));
nextButton2.addEventListener("click", () => showSlide2(currentIndex2 + 1));

// Smooth scroll to sections
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Notification Function
function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.position = "fixed";
  notification.style.top = "10px";
  notification.style.left = "10px";
  notification.style.backgroundColor = "black";
  notification.style.color = "white";
  notification.style.padding = "10px 15px";
  notification.style.border = "2px solid red";
  notification.style.borderRadius = "8px";
  notification.style.boxShadow = "0px 4px 10px rgba(255, 0, 0, 0.5)";
  notification.style.zIndex = "1000";
  notification.style.fontFamily = "'Arial', sans-serif";
  notification.style.fontSize = "14px";
  notification.style.fontWeight = "bold";
  notification.style.textAlign = "center";

  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 3000);
}

// Add Event Listeners to Book Now buttons
const bookNowButtons = document.querySelectorAll(".book-now");
bookNowButtons.forEach((button) => {
  button.addEventListener("click", () => showNotification("Ticket booked"));
});
