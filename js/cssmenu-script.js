!(function (e) {
   e.fn.menumaker = function (s) {
      var n = e(this),
         o = e.extend({ title: "", format: "dropdown", sticky: !1 }, s);
      return this.each(function () {
         return (
            n.prepend('<div id="menu-button">' + o.title + "</div>"),
            e(this)
               .find("#menu-button")
               .on("click", function () {
                  e(this).toggleClass("menu-opened"), e("body").toggleClass("overflowhidden"), e(".menu-overlay").toggleClass("show-overlay"), e("html").toggleClass("htmloverflowhidden");
                  var s = e(this).next("ul");
                  s.hasClass("open") ? s.slideToggle("fast").removeClass("open") : (s.slideToggle("fast").addClass("open"), "dropdown" === o.format && s.find("ul").show());
               }),
            n.find("li ul").parent().addClass("has-sub"),
            (multiTg = function () {
               n.find(".has-sub").prepend('<span class="submenu-button"></span>'),
                  n.find(".submenu-button").on("click", function () {
                     e(this).toggleClass("submenu-opened"),
                        e(this).siblings("ul").hasClass("open") ? e(this).siblings("ul").removeClass("open").toggle("hide") : e(this).siblings("ul").addClass("open").toggle("slow");
                  });
            }),
            "multitoggle" === o.format ? multiTg() : n.addClass("dropdown"),
            !0 === o.sticky && n.css("position", "fixed"),
            (resizeFix = function () {
               e(window).width() > 1199 && n.find("ul").show(),
                  e(window).width() <= 1199 &&
                     (n.find("ul").hide().removeClass("open"),
                     e(".menu-overlay").click(function (s) {
                        e("#cssmenu ul").removeClass("open"),
                           e("#cssmenu ul").css("display", "none"),
                           e(".menu-overlay").removeClass("show-overlay"),
                           e("#menu-button").removeClass("menu-opened"),
                           e(".submenu-button").removeClass("submenu-opened"),
                           e("body").removeClass("overflowhidden"),
                           e("html").removeClass("htmloverflowhidden");
                     }),
                     e("body").click(function (s) {
                        e(s.target).closest("#cssmenu").length ||
                           (e("#cssmenu ul").removeClass("open"),
                           e("body").removeClass("overflowhidden"),
                           e("html").removeClass("htmloverflowhidden"),
                           e("#cssmenu ul").css("display", "none"),
                           e("#menu-button").removeClass("menu-opened"),
                           e(".submenu-button").removeClass("submenu-opened"),
                           e(".menu-overlay").removeClass("show-overlay"));
                     }));
            }),
            resizeFix(),
            e(window).on("resize", resizeFix)
         );
      });
   };
})(jQuery),
   (function (e) {
      e(document).ready(function () {
         e(document).ready(function () {
            e("#cssmenu").menumaker({ title: "", format: "multitoggle" }), e("#cssmenu").prepend("<div id='menu-line'></div>");
            var s,
               n,
               o,
               l,
               i = !1,
               t = 0,
               u = e("#cssmenu #menu-line");
            e("#cssmenu > ul > li").each(function () {
               e(this).hasClass("active") && ((s = e(this)), (i = !0));
            }),
               !1 === i && (s = e("#cssmenu > ul > li").first()),
               (l = n = s.width()),
               (o = t = s.position().left),
               u.css("width", n),
               u.css("left", t),
               e("#cssmenu > ul > li").hover(
                  function () {
                     (s = e(this)), (n = s.width()), (t = s.position().left), u.css("width", n), u.css("left", t);
                  },
                  function () {
                     u.css("left", o), u.css("width", l);
                  }
               );
         });
      });
   })(jQuery),
   $(window).scroll(function () {
      $(this).scrollTop() > 150
         ? ($(".stickyhead").addClass("headersticky"))
         : ($(".stickyhead").removeClass("headersticky"));
   });
