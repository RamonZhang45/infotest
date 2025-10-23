document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('showMessageButton');
  const message = document.getElementById('thankYouMessage');

  button.addEventListener('click', function () {
    message.style.display = 'block';
  });
});
