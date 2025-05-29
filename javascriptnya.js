const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

hamburger.onclick = () => {
  navbarNav.classList.toggle('active');
};

document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const hero = document.querySelector(".hero");
  const aboutSection = document.querySelector("#about");
  const produkSection = document.querySelector("#produk");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(hero);
  observer.observe(aboutSection);
  observer.observe(produkSection);
});
