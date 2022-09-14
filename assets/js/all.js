"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//swiper
var option = {
  spaceBetween: 24,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
};
var swiper = new Swiper(".artistSwiper", _objectSpread(_objectSpread({}, option), {}, {
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    992: {
      slidesPerView: 3
    }
  }
}));
var otherSwiper = new Swiper(".otherSwiper", _objectSpread(_objectSpread({}, option), {}, {
  slidesPerView: 2,
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    1296: {
      slidesPerView: 4
    }
  }
})); //瀑布流卡片
// 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋

$('.row').imagesLoaded().progress(function () {
  $('.row').masonry(); // 渲染整體畫面
});
//# sourceMappingURL=all.js.map
