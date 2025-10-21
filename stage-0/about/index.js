document.addEventListener('DOMContentLoaded', function () {
  const focusableElements = document.querySelectorAll('a, button');

  focusableElements.forEach((el) => {
    el.addEventListener('focus', function () {
      this.setAttribute('data-keyboard-focus', 'true');
    });

    el.addEventListener('blur', function () {
      this.removeAttribute('data-keyboard-focus');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});
