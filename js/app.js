const mobileNavbarBtn = document.querySelector('.mobile-navbar-btn');
const header = document.querySelector('.header');

mobileNavbarBtn.addEventListener('click', () => {
  header.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
});

var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  slideToClickedSlide: true,
  // spaceBetween: 40,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    scale: 1,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },
  loop: true,
});
