const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    TL.play();
})
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Vérifie si le mode sombre est déjà activé dans le LocalStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
  enableDarkMode();
}

function enableDarkMode() {
  body.classList.add("dark-mode");
  saveDarkModeToLocalStorage(true);
}

function disableDarkMode() {
  body.classList.remove("dark-mode");
  saveDarkModeToLocalStorage(false);
}

function saveDarkModeToLocalStorage(isDarkMode) {
  localStorage.setItem('darkMode', isDarkMode);
}

function toggleDarkMode() {
  const modeIcon = document.getElementById("modeIcon");
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");

  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
    moonIcon.style.display = "inline-block";
    sunIcon.style.display = "none";
  } else {
    enableDarkMode();
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
  }
}
