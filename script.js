document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple email validation pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Haptic feedback (vibration) for errors — mobile only
    const vibrate = (duration = 200) => {
      if (navigator.vibrate) {
        navigator.vibrate(duration);
      }
    };

    if (name === '' || email === '' || message === '') {
      vibrate();
      showMessage('Please fill in all fields.', 'red');
      return;
    }

    if (!email.match(emailPattern)) {
      vibrate();
      showMessage('Please enter a valid email.', 'red');
      return;
    }

    showMessage('Message sent successfully!', 'green');
    form.reset();
  });

  function showMessage(text, color) {
    formMessage.textContent = text;
    formMessage.style.color = color;
    formMessage.style.opacity = '0';
    formMessage.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
      formMessage.style.opacity = '1';
    }, 100);
  }
});

