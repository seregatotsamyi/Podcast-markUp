window.onload = function () {
  "use strict";
};


$(function () {
  let width = $(window).width();
  let body = $('.body');

  $(document).on('click', '.js-auth-list', function (e) {
    $('.header__auth-bottom').toggleClass('_open')
  })
  $(document).on('click', '.js-toggle-menu', function (e) {
    $('.menu').toggleClass('_open')
  })
  if (width < 769) {
    $(document).on('click', '.search__btn-open', function (e) {
      $('.search').toggleClass('_open')
    })
  }

  const swiper = new Swiper('.js-slider', {
    freeMode: {
      enabled: true,
      sticky: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 8,
    speed: 600,
    breakpoints: {
      577: {
        spaceBetween: 16,
        speed: 400,
      }

    }
  });

});