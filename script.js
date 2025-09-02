function showMotivation() {
  document.getElementById("motivation").innerText =
    "🌟 Keep shining, You’re building the future. 🌟";
}

// Gallery slideshow
let currentIndex = 0;

function openSlideshow(images, containerId) {
  const container = document.getElementById(containerId);
  if (!images.length) return;

  container.innerHTML = `<img src="${images[currentIndex]}" class="slideshow-img">`;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    container.innerHTML = `<img src="${images[currentIndex]}" class="slideshow-img">`;
  }, 2500);
}

// Contact form handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // prevent page reload

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        formMessage.textContent = `✅ Thank you, ${name}! Your message has been received.`;
        formMessage.style.color = "green";
        form.reset();
      } else {
        formMessage.textContent = "❌ Please fill in all fields.";
        formMessage.style.color = "red";
      }
    });
  }
});
