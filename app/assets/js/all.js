//swiper
const option = {
  spaceBetween: 24,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const swiper = new Swiper(".artistSwiper", {
  ...option,
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
  },
});

const otherSwiper = new Swiper(".otherSwiper", {
  ...option,
  slidesPerView: 2,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    1296: {
      slidesPerView: 4,
    },
  },
});



//瀑布流卡片
// 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
$('.row').imagesLoaded().progress( function() {
  $('.row').masonry(); // 渲染整體畫面
});