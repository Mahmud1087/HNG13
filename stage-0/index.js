function updateTimestamp() {
  const timeElement = document.getElementById('userTime');
  if (timeElement) {
    timeElement.textContent = `${new Date().toLocaleTimeString()}`;
  }
}

updateTimestamp();

setInterval(updateTimestamp, 1000);

// const avatarUpload = document.getElementById('avatarUpload');
// const avatarImage = document.getElementById('avatarImage');

// if (avatarUpload && avatarImage) {
//   avatarUpload.addEventListener('change', function (e) {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith('image/')) {
//       const reader = new FileReader();
//       reader.onload = function (event) {
//         avatarImage.src = event.target.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   });
// }

document.addEventListener('DOMContentLoaded', function () {
  const focusableElements = document.querySelectorAll(
    'a, button, input, [tabindex]:not([tabindex="-1"])'
  );

  focusableElements.forEach((el) => {
    el.addEventListener('focus', function () {
      this.setAttribute('data-keyboard-focus', 'true');
    });

    el.addEventListener('blur', function () {
      this.removeAttribute('data-keyboard-focus');
    });
  });
});
