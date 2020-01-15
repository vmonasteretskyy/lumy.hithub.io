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
  $(".line_down_a").on("click", function(event) {
    event.preventDefault();

    var id = $(this).attr("href"),
      top = $(id).offset().top - 90;

    $("body,html").animate({ scrollTop: top }, 1000);
  });
  var scrolled;
  window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = $(window).height();
    var secondView = $("#second_view").outerHeight();
    console.log("windowHeight", windowHeight);
    console.log("secondView", secondView);
    windowHeight = windowHeight + secondView - 90;

    if (scrolled > windowHeight) {
      $("header").css({ background: "#fdfdfd" });
      $(".menu a").css({ color: "#1b1b1b" });
      $(".path_2 ").css({ fill: "#1b1b1b" });
    }
    if (windowHeight > scrolled) {
      $("header").css({ background: "#1b1b1b" });
      $(".menu a").css({ color: "#fdfdfd" });
      $(".path_2 ").css({ fill: "#fdfdfd" });
    }
  };
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
