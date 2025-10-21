const form = document.getElementById('contactForm');
const submit = document.getElementById('submit-btn');
const successMessage = document.getElementById('successMessage');

const fields = {
  fullName: {
    element: document.getElementById('fullName'),
    error: document.getElementById('nameError'),
    validate: (value) => value.trim().length > 0,
    errorMessage: 'Full name is required.',
  },
  email: {
    element: document.getElementById('email'),
    error: document.getElementById('emailError'),
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    errorMessage: 'Please enter a valid email address.',
  },
  subject: {
    element: document.getElementById('subject'),
    error: document.getElementById('subjectError'),
    validate: (value) => value.trim().length > 0,
    errorMessage: 'Subject is required.',
  },
  message: {
    element: document.getElementById('message'),
    error: document.getElementById('messageError'),
    validate: (value) => value.trim().length >= 10,
    errorMessage: 'Message must be at least 10 characters.',
  },
};

let hasSubmitted = false;

function showError(field) {
  const { element, error, errorMessage } = fields[field];
  element.classList.add('error');
  element.setAttribute('aria-invalid', 'true');
  error.classList.add('visible');
  error.innerHTML = `<span class="error-icon">⚠</span> <span>${errorMessage}</span>`;

  // Re-trigger animation
  error.style.animation = 'none';
  error.offsetHeight;
  error.style.animation = '';
}

function hideError(field) {
  const { element, error } = fields[field];
  element.classList.remove('error');
  element.setAttribute('aria-invalid', 'false');
  error.classList.remove('visible');
  error.innerHTML = ''; // clear dynamic message
}

function validateField(field) {
  const { element, validate } = fields[field];
  return validate(element.value);
}

function validateAllFields() {
  let isValid = true;
  Object.keys(fields).forEach((field) => {
    const valid = validateField(field);
    if (!valid) {
      showError(field);
      isValid = false;
    } else {
      hideError(field);
    }
  });
  return isValid;
}
// 🟢 On Submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  hasSubmitted = true;

  const submitBtn = e.target.querySelector('button[type="submit"]');
  successMessage.classList.remove('visible');

  const isValid = validateAllFields();

  if (isValid) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    setTimeout(() => {
      form.reset();
      Object.keys(fields).forEach(hideError);

      successMessage.classList.add('visible');
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
      successMessage.focus();

      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';

      setTimeout(() => {
        successMessage.classList.remove('visible');
      }, 4000);
    }, 4000);
  } else {
    const firstInvalid = Object.keys(fields).find(
      (field) => !validateField(field)
    );
    if (firstInvalid) fields[firstInvalid].element.focus();
  }
});

// 🟢 Live validation for instant feedback
Object.keys(fields).forEach((field) => {
  const { element } = fields[field];

  element.addEventListener('input', () => {
    const valid = validateField(field);

    if (valid) {
      hideError(field);
    } else if (hasSubmitted || element.value.trim().length > 0) {
      showError(field);
    }
  });

  element.addEventListener('blur', () => {
    const valid = validateField(field);
    valid ? hideError(field) : showError(field);
  });
});

// ♿ Accessibility enhancement
document.addEventListener('DOMContentLoaded', () => {
  const focusables = document.querySelectorAll('input, textarea, button, a');
  focusables.forEach((el) => {
    el.addEventListener('focus', () =>
      el.setAttribute('data-keyboard-focus', 'true')
    );
    el.addEventListener('blur', () =>
      el.removeAttribute('data-keyboard-focus')
    );
  });
});
