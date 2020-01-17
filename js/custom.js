function margin() {
  var windowWidth = $(window).width();
  var containerWidth = $(".container").width();
  var leftMargin = (windowWidth - containerWidth) / 2;
  $(".first_view_text").css("left", leftMargin);
}
function found() {
  if ($("main").hasClass("not_found")) {
    var windowHeight = $(window).height();
    var headerHeight = $("header").outerHeight();
    var footerHeight = $("footer").outerHeight();
    var height = windowHeight - headerHeight;
    $(".not_found").css("height", height);
  }
}
if ($("main").hasClass("home")) {
  $(window).resize(function() {
    margin();
  });
}
$(document).ready(function() {
  found();
  $(".menu_btn").click(function() {
    $("header ul ")
      .slideDown(500)
      .css("display", "flex");
  });
  $(".close_btn").click(function() {
    $("header ul ").slideUp(500);
  });

  if ($("main").hasClass("home")) {
    margin();
    var scrolled;
    window.onscroll = function() {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      var windowHeight = $(window).height();
      var secondView = $("#second_view").outerHeight();

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
    $(".line_down_a").on("click", function(event) {
      event.preventDefault();

      var id = $(this).attr("href"),
        top = $(id).offset().top - 90;

      $("body,html").animate({ scrollTop: top }, 1000);
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
  }

  if ($("main").hasClass("blog_open") || $("main").hasClass("portfolio_open")) {
    $(".slider_sm").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      asNavFor: ".slider_main",
      swipe: true,
      swipeToSlide: false,
      draggable: false,
      arrows: false
    });
    $(".slider_main").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".slider_sm",
      nextArrow: ".slider_2_next",
      prevArrow: ".slider_2_prev"
    });
  }
});
$(window).resize(function() {
  found();
});

// upload

!(function(e) {
  var t = function(t, n) {
    (this.$element = e(t)),
      (this.type =
        this.$element.data("uploadtype") ||
        (this.$element.find(".thumbnail").length > 0 ? "image" : "file")),
      (this.$input = this.$element.find(":file"));
    if (this.$input.length === 0) return;
    (this.name = this.$input.attr("name") || n.name),
      (this.$hidden = this.$element.find(
        'input[type=hidden][name="' + this.name + '"]'
      )),
      this.$hidden.length === 0 &&
        ((this.$hidden = e('<input type="hidden" />')),
        this.$element.prepend(this.$hidden)),
      (this.$preview = this.$element.find(".fileupload-preview"));
    var r = this.$preview.css("height");
    this.$preview.css("display") != "inline" &&
      r != "0px" &&
      r != "none" &&
      this.$preview.css("line-height", r),
      (this.original = {
        exists: this.$element.hasClass("fileupload-exists"),
        preview: this.$preview.html(),
        hiddenVal: this.$hidden.val()
      }),
      (this.$remove = this.$element.find('[data-dismiss="fileupload"]')),
      this.$element
        .find('[data-trigger="fileupload"]')
        .on("click.fileupload", e.proxy(this.trigger, this)),
      this.listen();
  };
  (t.prototype = {
    listen: function() {
      this.$input.on("change.fileupload", e.proxy(this.change, this)),
        e(this.$input[0].form).on(
          "reset.fileupload",
          e.proxy(this.reset, this)
        ),
        this.$remove &&
          this.$remove.on("click.fileupload", e.proxy(this.clear, this));
    },
    change: function(e, t) {
      if (t === "clear") return;
      var n =
        e.target.files !== undefined
          ? e.target.files[0]
          : e.target.value
          ? { name: e.target.value.replace(/^.+\\/, "") }
          : null;
      if (!n) {
        this.clear();
        return;
      }
      this.$hidden.val(""),
        this.$hidden.attr("name", ""),
        this.$input.attr("name", this.name);
      if (
        this.type === "image" &&
        this.$preview.length > 0 &&
        (typeof n.type != "undefined"
          ? n.type.match("image.*")
          : n.name.match(/\.(gif|png|jpe?g)$/i)) &&
        typeof FileReader != "undefined"
      ) {
        var r = new FileReader(),
          i = this.$preview,
          s = this.$element;
        (r.onload = function(e) {
          i.html(
            '<img src="' +
              e.target.result +
              '" ' +
              (i.css("max-height") != "none"
                ? 'style="max-height: ' + i.css("max-height") + ';"'
                : "") +
              " />"
          ),
            s.addClass("fileupload-exists").removeClass("fileupload-new");
        }),
          r.readAsDataURL(n);
      } else
        this.$preview.text(n.name),
          this.$element
            .addClass("fileupload-exists")
            .removeClass("fileupload-new");
    },
    clear: function(e) {
      this.$hidden.val(""),
        this.$hidden.attr("name", this.name),
        this.$input.attr("name", "");
      if (navigator.userAgent.match(/msie/i)) {
        var t = this.$input.clone(!0);
        this.$input.after(t), this.$input.remove(), (this.$input = t);
      } else this.$input.val("");
      this.$preview.html(""),
        this.$element
          .addClass("fileupload-new")
          .removeClass("fileupload-exists"),
        e && (this.$input.trigger("change", ["clear"]), e.preventDefault());
    },
    reset: function(e) {
      this.clear(),
        this.$hidden.val(this.original.hiddenVal),
        this.$preview.html(this.original.preview),
        this.original.exists
          ? this.$element
              .addClass("fileupload-exists")
              .removeClass("fileupload-new")
          : this.$element
              .addClass("fileupload-new")
              .removeClass("fileupload-exists");
    },
    trigger: function(e) {
      this.$input.trigger("click"), e.preventDefault();
    }
  }),
    (e.fn.fileupload = function(n) {
      return this.each(function() {
        var r = e(this),
          i = r.data("fileupload");
        i || r.data("fileupload", (i = new t(this, n))),
          typeof n == "string" && i[n]();
      });
    }),
    (e.fn.fileupload.Constructor = t),
    e(document).on(
      "click.fileupload.data-api",
      '[data-provides="fileupload"]',
      function(t) {
        var n = e(this);
        if (n.data("fileupload")) return;
        n.fileupload(n.data());
        var r = e(t.target).closest(
          '[data-dismiss="fileupload"],[data-trigger="fileupload"]'
        );
        r.length > 0 && (r.trigger("click.fileupload"), t.preventDefault());
      }
    );
})(window.jQuery);
