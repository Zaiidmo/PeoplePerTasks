//Hamburger Menu

// const burger = document.querySelector(".burger");
// const navigation = document.querySelector(".navigation");
// burger.addEventListener("click", () => {
//   burger.classList.toggle("active");
//   navigation.classList.toggle("active");
// });

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
  const mobileMenu = document.getElementById('mobile-menu-2');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
});

 