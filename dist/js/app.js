$(document).ready(function () {
  //------------ Menu----------
  $(".toggle").on("click", function () {
    $(this).toggleClass("active");
    $(".navigation").toggleClass("active");
  });

  // ------------------Modal----------------------

  $(".close").on("click", function () {
    $(this).parents().removeClass("active");
  });

  $(".to-state").on("click", function (event) {
    event.preventDefault();
    $(".state").removeClass("active");
    var state = $(this).attr("data-state");
    $(".state[data-state=" + state + "]").addClass("active");
    $("article").jScrollPane();
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      // событие клика по веб-документу
      var div = $(".state-box"); // тут указываем ID элемента
      if (
        !div.is(e.target) && // если клик был не по нашему блоку
        div.has(e.target).length === 0
      ) {
        // и не по его дочерним элементам
        div.parents().removeClass("active"); // скрываем его
        div.removeClass("active"); // скрываем его
      }
    });
  });

  // -------------------- Scroll -------------------------

  $(".srolls").on("click", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();
    $(this).parents().removeClass("active");
    $(".toggle").removeClass("active");
    $("header").removeClass("active");

    // получем идентификатор блока из атрибута href
    var id = $(this).attr("href"),
      // находим высоту, на которой расположен блок
      top = $(id).offset().top - 50;

    // анимируем переход к блоку, время: 800 мс
    $("body,html").animate({ scrollTop: top }, 800);
  });

  // -------------------- преобразуем svg картинку во встроеный svg--------------------------
  function svg() {
    $('img[src$=".svg"]').each(function () {
      var $img = $(this);
      var imgURL = $img.attr("src");
      var attributes = $img.prop("attributes");
      if ($img.hasClass("svg")) {
        $.get(
          imgURL,
          function (data) {
            var $svg = jQuery(data).find("svg");
            $svg = $svg.removeAttr("xmlns:a");
            $.each(attributes, function () {
              $svg.attr(this.name, this.value);
            });
            $img.removeClass("svg").replaceWith($svg);
          },
          "xml"
        );
      }
    });
  }
  svg();

  //--------------- fancybox -----------
  $("[data-fancybox-popup]").fancybox({
    closeExisting: true,
    smallBtn: false,
    toolbar: false,
    autoFocus: false,
    hash: false,
    touch: false,
  });

  // -------------------- Tabs -------------------------

  (function ($) {
    jQuery.fn.lightTabs = function (options) {
      var createTabs = function () {
        tabs = this;
        i = 0;

        showPage = function (i) {
          $(tabs).children("div").children("div").hide();
          $(tabs).children("div").children("div").eq(i).show();
          $(tabs).find("ul.tabs-list").children("li").removeClass("active");
          $(tabs).find("ul.tabs-list").children("li").eq(i).addClass("active");
        };

        showPage(0);

        $(tabs)
          .find("ul.tabs-list")
          .children("li")
          .each(function (index, element) {
            $(element).attr("data-page", i);
            i++;
          });

        $(tabs)
          .find("ul.tabs-list")
          .children("li")
          .click(function () {
            showPage(parseInt($(this).attr("data-page")));
            /*if ($(this).data('page') != '3') {
					$.each(players, function (n) {
						for (let j = 0; j < players.length; j++) {
							players[j].pause();
						}
					});
				}*/
          });
      };
      return this.each(createTabs);
    };
  })(jQuery);

  $(".tabs").lightTabs();
  //end
});
