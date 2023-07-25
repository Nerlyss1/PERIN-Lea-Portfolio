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

  // Fonction pour activer/désactiver le mode sombre
  function toggleDarkMode() {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
      darkModeToggle.querySelector('.text-dark-mode').style.display = 'inline';
      darkModeToggle.querySelector('.text-light-mode').style.display = 'none';
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
      darkModeToggle.querySelector('.text-dark-mode').style.display = 'none';
      darkModeToggle.querySelector('.text-light-mode').style.display = 'inline';
    }
  }

  // Mettre à jour le texte du bouton en fonction de l'état du mode sombre lors du chargement de la page
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.querySelector('.text-dark-mode').style.display = 'none';
    darkModeToggle.querySelector('.text-light-mode').style.display = 'inline';
  } else {
    body.classList.remove('dark-mode');
    darkModeToggle.querySelector('.text-dark-mode').style.display = 'inline';
    darkModeToggle.querySelector('.text-light-mode').style.display = 'none';
  }

  // Écouter le clic sur le bouton pour activer/désactiver le mode sombre
  darkModeToggle.addEventListener('click', toggleDarkMode);

