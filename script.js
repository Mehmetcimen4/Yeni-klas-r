document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menüsüne tıklandığında
    document.querySelector('.hamburger').addEventListener('click', function () {
      document.querySelector('.wrapper').classList.toggle('active');
    });
  });
  