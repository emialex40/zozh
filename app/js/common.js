$(function() {

	$('.bn').on('click', function(){
		$('.parent_popup, .popup').css('display', 'block');
	});

	$('.close, .parent_popup').on('click', function(){
		$('.parent_popup, .popup').css('display', 'none');
	});

	$('.brands').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		nextArrow: '<span class="prev"><img src="../img/icons/left_arrow.png" alt="left_arrow"></span>',
		prevArrow: '<span class="next"><img src="../img/icons/right_arrow.png" alt="right_arrow"></span>',
		dots: false,
		customPaging : function(slider, i) {
			return '<img src="../img/icons/dot.png" /><img class="active" src="img/icons/dot-active.png" />';
		},
		responsive: [			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					nextArrow: '<span class="prev"><img src="../img/icons/left_arrow_mob.png" alt="left_arrow"></span>',
					prevArrow: '<span class="next"><img src="../img/icons/right_arrow_mob.png" alt="right_arrow"></span>',
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					nextArrow: '<span class="prev"><img src="../img/icons/left_arrow_mob.png" alt="left_arrow"></span>',
					prevArrow: '<span class="next"><img src="../img/icons/right_arrow_mob.png" alt="right_arrow"></span>',
					dots: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});



	$('.video_slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		nextArrow: '<span class="prev"><img src="../img/icons/left_arrow.png" alt="left_arrow"></span>',
		prevArrow: '<span class="next"><img src="../img/icons/right_arrow.png" alt="right_arrow"></span>',
		dots: true,
		customPaging : function(slider, i) {
			return '<img src="../img/icons/dot.png" /><img class="active" src="img/icons/dot-active.png" />';
		},
		responsive: [			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: false,
					nextArrow: '<span class="prev"><img src="../img/icons/left_arrow_mob.png" alt="left_arrow"></span>',
					prevArrow: '<span class="next"><img src="../img/icons/right_arrow_mob.png" alt="right_arrow"></span>',
					infinite: true,
					dots: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.slider_win').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		nextArrow: '<span class="prev"><img src="../img/icons/left_arrow.png" alt="left_arrow"></span>',
		prevArrow: '<span class="next"><img src="../img/icons/right_arrow.png" alt="right_arrow"></span>',
		dots: true,
		customPaging : function(slider, i) {
			return '<img src="../img/icons/dot.png" /><img class="active" src="img/icons/dot-active.png" />';
		},
		responsive: [			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: false,
					nextArrow: '<span class="prev"><img src="../img/icons/left_arrow_mob.png" alt="left_arrow"></span>',
					prevArrow: '<span class="next"><img src="../img/icons/right_arrow_mob.png" alt="right_arrow"></span>',
					infinite: true,
					dots: true
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});




});
