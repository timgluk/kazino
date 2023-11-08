$(document).ready(function () {
	//------------ Menu----------
	$('.toggle').on('click', function () {
		$(this).toggleClass('active')
		$('.navigation').toggleClass('active')
	})

	// ------------------Modal----------------------

	$('.close').on('click', function () {
		$(this).parents().removeClass('active')
	})


	$('.to-state').on('click', function (event) {
		event.preventDefault()
		$('.state').removeClass('active')
		var state = $(this).attr('data-state')
		$('.state[data-state=' + state + ']').addClass('active')
		$('article').jScrollPane()
	})

	jQuery(function ($) {
		$(document).mouseup(function (e) {
			// событие клика по веб-документу
			var div = $('.state-box') // тут указываем ID элемента
			if (
				!div.is(e.target) && // если клик был не по нашему блоку
				div.has(e.target).length === 0
			) {
				// и не по его дочерним элементам
				div.parents().removeClass('active') // скрываем его
				div.removeClass('active') // скрываем его
			}
		})
	})

	// -------------------- Carousel--------------------------

	$('.cat-carousel-1').owlCarousel({
		loop: false,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	$('.cat-carousel-2').owlCarousel({
		loop: false,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
	// -------------------- Scroll -------------------------

	$('.srolls').on('click', function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault()
		$(this).parents().removeClass('active')
		$('.toggle').removeClass('active')
		$('header').removeClass('active')

		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),
			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 50

		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 800)
	})

	
	// -------------------- преобразуем svg картинку во встроеный svg--------------------------
	function svg() {
		$('img[src$=".svg"]').each(function () {
			var $img = $(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop('attributes');
			if ($img.hasClass('svg')) {
				$.get(imgURL, function (data) {
					var $svg = jQuery(data).find('svg');
					$svg = $svg.removeAttr('xmlns:a');
					$.each(attributes, function () {
						$svg.attr(this.name, this.value);
					});
					$img.removeClass('svg').replaceWith($svg);
				}, 'xml');
			}
		});
	}
	svg();

	//--------------- fancybox -----------
	$('[data-fancybox-popup]').fancybox({
		closeExisting: true,
		smallBtn: false,
		toolbar: false,
		autoFocus: false,
		hash: false,
		touch: false
	});


	//end
})
