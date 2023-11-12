document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('mobile-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});
