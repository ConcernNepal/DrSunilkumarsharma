const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



let currentIndex = 0;
let autoPlayInterval;

const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

// Function to move slides
function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateSlidePosition();
  resetAutoPlay(); // Reset auto-play on manual interaction
}

// Update the slide position
function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-play functionality
function autoPlay() {
  autoPlayInterval = setInterval(() => {
    moveSlide(1);
  }, 3000); // Change slides every 3 seconds
}

// Reset auto-play after manual navigation
function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlay();
}

// Initialize auto-play on load
window.onload = autoPlay;




document.addEventListener("DOMContentLoaded", () => {
  const videoCards = document.querySelectorAll(".video-card");
  const videoPopup = document.getElementById("videoPopup");
  const popupVideo = document.getElementById("popupVideo");
  const closeBtn = document.querySelector(".close-btn");

  // Open Video Popup
  videoCards.forEach((card) => {
    card.addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video");
      popupVideo.src = videoSrc;
      videoPopup.style.display = "flex";
    });
  });

  // Close Video Popup
  closeBtn.addEventListener("click", () => {
    videoPopup.style.display = "none";
    popupVideo.pause();
    popupVideo.src = ""; // Reset video source
  });

  // Close Popup When Clicking Outside
  videoPopup.addEventListener("click", (e) => {
    if (e.target === videoPopup) {
      videoPopup.style.display = "none";
      popupVideo.pause();
      popupVideo.src = ""; // Reset video source
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.querySelector(".gallery-grid");
  
  galleryGrid.addEventListener("wheel", (event) => {
    event.preventDefault();
    galleryGrid.scrollLeft += event.deltaY;
  });
});