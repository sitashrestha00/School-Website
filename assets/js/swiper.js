
//Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  zoom: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});


//course swiper
var swiper = new Swiper(".mySwiperCourses", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});


//testimonial swiper
var swiper = new Swiper(".mySwipertestimonial", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});