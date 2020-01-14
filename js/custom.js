function margin() {
  var windowWidth = $(window).width();
  var containerWidth = $(".container").width();
  var leftMargin = (windowWidth - containerWidth) / 2;
  $(".first_view_text").css("left", leftMargin);
}
$(window).resize(function() {
  margin();
});
$(document).ready(function() {
  margin();
  $(".menu_btn").click(function() {
    $("header ul ")
      .slideDown(500)
      .css("display", "flex");
  });
  $(".close_btn").click(function() {
    $("header ul ").slideUp(500);
  });
});

// SWIPEr
var mySwiper = new Swiper(".slider_1", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider_1_next",
    prevEl: ".slider_1_prev"
  }
});

var mySwiper2 = new Swiper(".slider_2", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".slider_2_next",
    prevEl: ".slider_2_prev"
  },
  breakpoints: {
    1199.9: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    991.9: {
      slidesPerView: 1
    }
  }
});
