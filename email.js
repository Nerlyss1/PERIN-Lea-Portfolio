function validateForm() {
    const emailInput = document.getElementById('email');
    const telephoneInput = document.getElementById('telephone');
    const emailValue = emailInput.value;
    const telephoneValue = telephoneInput.value;
  
    if (!emailValue.includes('@')) {
      alert('Veuillez entrer une adresse e-mail valide.');
      return false;
    }
  
    if (telephoneValue && !/^[0-9]+$/.test(telephoneValue)) {
      alert('Le numéro de téléphone ne doit contenir que des chiffres.');
      return false;
    }
  
    return true;
  }
  
  (function () {
    emailjs.init('WJpNmp-xLvejYByPH');
  })();
  
  function sendEmail(event) {
    event.preventDefault(); 
    emailjs.sendForm('service_oxsybuv', 'template_n16a7oe', event.target)
      .then(function(response) {
        console.log('L\'e-mail a été envoyé avec succès !', response);
        alert('L\'e-mail a été envoyé avec succès !'); 
        resetForm(); 
        
      }, function(error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
        alert('Erreur lors de l\'envoi de l\'e-mail : ' + error); 
        
      });
  }
  
  function resetForm() {
    const form = document.getElementById('contact-form');
    form.reset();
  }
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    sendEmail(event); 
  });
  